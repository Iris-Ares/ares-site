


export const fallbackLng = 'en'

export const languageList = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '简体中文(simplified chinese)' },
]

export const languages = languageList.map(l => l.code)

export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}