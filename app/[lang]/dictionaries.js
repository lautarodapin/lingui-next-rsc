import 'server-only'

const dictionaries = {
    'en-us': () => import('../../locales/en.js').then((module) => module.messages),
    'es-es': () => import('../../locales/es.js').then((module) => module.messages),
}

export const getDictionary = async (locale) => await dictionaries[locale]()