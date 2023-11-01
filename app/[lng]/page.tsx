
import Link from 'next/link'
import { useTranslation } from '@/app/i18n'
import { LanguageSwitch , ThemeSwitch } from '@/lib/components'

export default async function Home({ params: { lng } }:any) {
  const { t } = await useTranslation(lng)
  return (
    <div className='h-full w-full flex items-center justify-center flex-col'>
        <Link href={`/${lng}/dashboard`}><h1 className='animate-module_show_fade' style={{fontSize:60}}>{t('message')}</h1></Link>
        <div className='flex items-center gap-3'>
          <LanguageSwitch lng={lng} />
          <ThemeSwitch lng={lng} />
        </div>
    </div>
  )
}
