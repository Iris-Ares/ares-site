
import Link from 'next/link'
import { useTranslation } from '@/app/i18n'
import { GoogleAnalytics, Welcome } from '@/lib/components'


export default async function Home({ params: { lng } }:any) {
  const { t } = await useTranslation(lng)
  return (
    // <GoogleAnalytics>
      <main className='h-full w-full flex items-center justify-center flex-col relative p-4'>
          <div className='z-10 flex items-center justify-center flex-col rounded-box p-4   backdrop-blur-[3px] shadow-lg'>
            <Link href={`/${lng}/dashboard`}><span className='text-4xl font-extrabold'>{t('happy')}</span></Link>
            
            <h2 className='animate-module_show_fade text-4xl lg:text-5xl mb-6 mt-4 text-center' >{t('message')}</h2>
    
            
    
            <Welcome lng={lng} />
    
            <button className='btn mt-4' title='developing' disabled><h3 className='animate-module_show_fade text-xl' >{t('developing')}</h3></button>
          </div>
          
      </main>
    {/* </GoogleAnalytics> */}
  )
}
