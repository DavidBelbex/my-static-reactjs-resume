import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { labels, content, Lang, TabKey } from './resumeData';


interface Props { lang: Lang }

export default function ResumeTabs({ lang }: Props) {
  const [tab, setTab] = useState<TabKey>('profile')

  return (
    <div>
      {/* Tabs */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
        {(Object.keys(labels[lang]) as TabKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-2 py-2 text-sm rounded-xl border transition text-center
              ${tab === key ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {labels[lang][key]}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-inner min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab + lang}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: content[tab][lang] }} />              
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
