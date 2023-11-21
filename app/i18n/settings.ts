import type { I18nTypes } from '@/lib/types'


export const fallbackLng:I18nTypes.LanguageCode = 'en'


export const languageList:I18nTypes.LanguageItem[] = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
]

export const languages:I18nTypes.LanguageCode[] = languageList.map(l => l.code)

export const defaultNS = 'translation'
export const cookieName = 'i18next'




export const getOptions:I18nTypes.TgetI18nOptions =  (lng = fallbackLng, ns = defaultNS)=>{
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