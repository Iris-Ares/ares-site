
import Link from 'next/link'
import { useTranslation } from '@/app/i18n'
import { LanguageSwitch , ThemeSwitch , Welcome , NotionLink} from '@/lib/components'

export default async function Home({ params: { lng } }:any) {
  const { t } = await useTranslation(lng)
  return (
    <div className='h-full w-full flex items-center justify-center flex-col relative'>
        <div className='flex items-center gap-3  absolute left-2 top-2'>
          <LanguageSwitch lng={lng} />
          <ThemeSwitch lng={lng} />
          <NotionLink lng={lng} />
        </div>

        <Link href={`/${lng}/dashboard`}><span className='text-4xl font-extrabold'>{t('happy')}</span></Link>
        
        <h2 className='animate-module_show_fade text-4xl lg:text-6xl mb-6 mt-6 text-center' >{t('message')}</h2>

        

        <Welcome 
        sentences={
          [
            t('welcome-1'),
            t('welcome-2'),
            t('welcome-3'),
            t('welcome-4'),
            t('welcome-5'),
            t('welcome-6'),
            t('welcome-7'),
          ]
        }
        />

        <button className='btn mt-4' title='developing' disabled><h3 className='animate-module_show_fade text-xl' >{t('developing')}</h3></button>
    </div>
  )
}
