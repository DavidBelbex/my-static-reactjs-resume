import { useState } from 'react';
import ResumeTabs from './components/ResumeTabs';
import { Lang } from './components/resumeData'
import ProfileHeader from './components/ProfileHeader'
import { FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [dark, setDark] = useState(false);

  const languages = ['es', 'en', 'fr'];

  const contacts = {
    en: [
      { href: 'https://www.google.com/maps/place/Madrid/', icon: <FaMapMarkerAlt />, label: 'Madrid' },
      { href: 'https://davidchicote.com', icon: <FaGlobe />, label: 'davidchicote.com' },
      { href: 'www.linkedin.com/in/davidchicote', icon: <FaLinkedin />, label: 'linkedin.com/in/davidchicote' },
      { href: 'https://github.com/dchicote', icon: <FaGithub />, label: 'My github' }        
    ],

    es: [
      { href: 'https://www.google.com/maps/place/Madrid/', icon: <FaMapMarkerAlt />, label: 'Madrid' },
      { href: 'https://davidchicote.com', icon: <FaGlobe />, label: 'davidchicote.com' },
      { href: 'www.linkedin.com/in/davidchicote', icon: <FaLinkedin />, label: 'linkedin.com/in/davidchicote' },
      { href: 'https://github.com/dchicote', icon: <FaGithub />, label: 'My github' }        
    ],

    fr: [
      { href: 'https://www.google.com/maps/place/Madrid/', icon: <FaMapMarkerAlt />, label: 'Madrid' },
      { href: 'https://davidchicote.com', icon: <FaGlobe />, label: 'davidchicote.com' },
      { href: 'www.linkedin.com/in/davidchicote', icon: <FaLinkedin />, label: 'linkedin.com/in/davidchicote' },
      { href: 'https://github.com/dchicote', icon: <FaGithub />, label: 'My github' }        
    ]
  };

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <div className="w-[80%] max-w-5xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 transition mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Multi-Language Resume</h1>
          <div className="flex gap-2">
            <select
              className="p-2 rounded-xl border dark:bg-gray-700 dark:border-gray-600"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
            >
              {languages.map((l) => (
                <option key={l} value={l}>{l.toUpperCase()}</option>
              ))}
            </select>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-xl bg-gray-800 text-white dark:bg-yellow-400 dark:text-black transition"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
        {/* Profile Header */}
        <ProfileHeader
          name="David Chicote"
          imageUrl="/profile.jpg"
          contacts={contacts[lang]}
        />
        <ResumeTabs lang={lang} />
      </div>
    </div>
  );
}