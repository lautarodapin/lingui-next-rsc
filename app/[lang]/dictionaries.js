import 'server-only'

const dictionaries = {
    'en-us': () => import('../../locales/en-us.js').then((module) => module.messages),
    'es-es': () => import('../../locales/es-es.js').then((module) => module.messages),
}

export const getDictionary = async (locale) => await dictionaries[locale]()