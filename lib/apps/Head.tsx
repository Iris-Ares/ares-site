import { LanguageSwitch , ThemeSwitch , NotionLink , AiChatLink , ResumeLink} from '@/lib/components'

import { useTranslation } from '@/app/i18n';

import type { BaseTypes } from '@/lib/types';



const Head:BaseTypes.TranslatedAsyncFC = async ({lng}) => {
    const { t } = await useTranslation(lng);

    return (
        <div className='flex items-center justify-between w-full absolute left-0 top-0 z-[100] px-3 py-2'>
            <menu className='flex items-center gap-2'>
                <LanguageSwitch tip={t('tool-language')} />
                <ThemeSwitch tip={t('tool-theme')}  />
            </menu>
            <nav className='flex items-center gap-2 '>
                <NotionLink tip={t('link-note')}  key='notion' />
                <AiChatLink tip={t('link-AI')}   key='ai chat'/>
                <ResumeLink tip={t('link-resume')} key='resume' />
            </nav>
        </div>
    )
}

export default Head;