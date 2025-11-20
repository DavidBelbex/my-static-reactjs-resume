#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

process.env.NODE_ENV = 'production';

// Try to register ts-node so we can import TSX files directly.
// Force CommonJS module output so Node's `require` can load the transpiled modules.
try {
  require('ts-node').register({
    transpileOnly: true,
    // Override compiler options to emit CommonJS so require() works.
    compilerOptions: { module: 'CommonJS' }
  });
} catch (e) {
  console.error('ts-node is not installed. Please run: npm install --save-dev ts-node');
  process.exit(1);
}

// Stub out non-JS/TS imports (css, images) so Node won't crash when importing files that webpack handles.
['.css', '.scss', '.sass', '.png', '.jpg', '.jpeg', '.svg', '.gif'].forEach((ext) => {
  require.extensions[ext] = () => null;
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const appPath = path.resolve(__dirname, '../src/App');
let App;
try {
  App = require(appPath).default;
} catch (err) {
  console.error('Failed to require App from', appPath);
  console.error(err);
  process.exit(1);
}

const appHtml = ReactDOMServer.renderToString(React.createElement(App));

const distIndex = path.resolve(__dirname, '../dist/index.html');
if (!fs.existsSync(distIndex)) {
  console.error('No dist/index.html found. Run the webpack build first (npm run build).');
  process.exit(1);
}

let html = fs.readFileSync(distIndex, 'utf8');

// Replace the root div content with server-rendered markup. Be conservative in matching.
const rootRegex = /<div\s+id=(?:"|')root(?:"|')[^>]*>[\s\S]*?<\/div>/i;
if (!rootRegex.test(html)) {
  console.error('Could not find <div id="root"> in dist/index.html');
  process.exit(1);
}

html = html.replace(rootRegex, `<div id="root">${appHtml}</div>`);

fs.writeFileSync(distIndex, html, 'utf8');
console.log('Prerender: wrote server-rendered HTML into', distIndex);
