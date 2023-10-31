
import { Inter } from 'next/font/google'
import { Metadata, ResolvingMetadata } from 'next'

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

  let title:string = ''
  let description:string = ''

  if(lng === 'en') {
    title = 'I am not Ares'
    description = 'Ares Wu personal site'
  }
  if(lng === 'zh-CN') {
    title = '禽兽(Ares)'
    description = 'Ares的个人网站'
  }
 
  return {
    title,
    description
  }
}

export default function RootLayout({children,params: { lng }}: any) {
  return (
    <html lang={lng} dir={dir(lng)} data-theme="dark">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
