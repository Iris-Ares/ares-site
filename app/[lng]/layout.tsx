
import { Inter } from 'next/font/google'
import { Metadata, ResolvingMetadata } from 'next'
import { useTranslation } from '@/app/i18n'
import { dir } from 'i18next'
import { languages } from '@/app/i18n/settings'
import './globals.css'

import { LanguageSwitch , ThemeSwitch , NotionLink} from '@/lib/components'


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}


const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lng } = params
  // eslint-disable-next-line
  const { t } =  await useTranslation(lng)
 
  return {
    title: t('title'),
    description: t('description'),
    creator: 'Ares Wu',
  }
}

export default function RootLayout({children,params: { lng }}: any) {
  return (
    <html lang={lng} dir={dir(lng)} >
      <body className={inter.className}>
        <main>
          <div className='flex items-center gap-3  absolute left-2 top-2 z-10'>
            <LanguageSwitch lng={lng} />
            <ThemeSwitch lng={lng} />
            <NotionLink lng={lng} />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
