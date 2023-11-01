
import { Inter } from 'next/font/google'
import { Metadata, ResolvingMetadata } from 'next'
import { useTranslation } from '@/app/i18n'
import { dir } from 'i18next'
import { languages } from '@/app/i18n/settings'
import './globals.css'


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
        <main>{children}</main>
      </body>
    </html>
  )
}
