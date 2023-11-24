import { LanguageSwitch , ThemeSwitch , NotionLink , AiChatLink , ResumeLink} from '@/lib/components'

import { useTranslation } from '@/app/i18n';

import type { BaseTypes } from '@/lib/types';



const Head:BaseTypes.TranslatedAsyncFC = async ({lng}) => {
    const { t } = await useTranslation(lng);

    return (
        <div className='flex items-center gap-3  absolute left-2 top-2 z-[100]'>
            <LanguageSwitch tip={t('tool-language')} />
            <ThemeSwitch tip={t('tool-theme')}  />
            <NotionLink tip={t('link-note')}  />
            <AiChatLink tip={t('link-AI')}  />
            <ResumeLink tip={t('link-resume')}  />
        </div>
    )
}

export default Head;