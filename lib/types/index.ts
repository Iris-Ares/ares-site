import  type { InitOptions,i18n , TFunction } from 'i18next'
import type { UseTranslationOptions  } from 'react-i18next'

export declare namespace I18nTypes {
    type LanguageCode = 'en' | 'zh' | 'ja'


    interface LanguageItem {
        code: LanguageCode
        name: string
    }


    type TgetI18nOptions = (lng?:LanguageCode, ns?:string) => InitOptions

    type TinitI18next = (lng:LanguageCode, ns?:string) => Promise<i18n>

    interface useTranslationResult  {
        t: TFunction
        i18n: i18n
    }

    type TuseTranslation = (lng:LanguageCode, ns?:string, options?:UseTranslationOptions<any>) => Promise<useTranslationResult>

    type TuseClientTranslation = (lng:LanguageCode, ns?:string, options?:UseTranslationOptions<any>) => useTranslationResult
}


export declare namespace BaseTypes {

    interface TranslatedComponentProps {
        lng: I18nTypes.LanguageCode
    }
    
    type AsyncReactFC<P = {}> = ((props: P) => Promise<React.ReactElement | null>)

    type TranslatedFC<P = {}> = React.FC<P & TranslatedComponentProps>

    type TranslatedAsyncFC<P = {}> = AsyncReactFC<P & TranslatedComponentProps>
    
}