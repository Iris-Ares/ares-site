
import Link from 'next/link'
import { useTranslation } from '@/app/i18n'
import { LanguageSwitch } from '@/lib/components'

export default async function Home({ params: { lng } }:any) {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col'>
        <Link href={`/${lng}/dashboard`}><h1 style={{fontSize:60}}>Ares Wu</h1></Link>
        <LanguageSwitch lng={lng} />
    </div>
  )
}
