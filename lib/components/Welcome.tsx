'use client'
import { useEffect , useState,useRef } from "react"
// @ts-ignore
import Typed from 'typed.js'
import { useTranslation } from '@/app/i18n'


const welcomeStringObj:any = {
    en:['Welcome to my website','I am a web developer','this is my website','built with nextjs','and tailwindcss','and typescript','and love <3'],
    zh:['欢迎来到我的网站','我是一个网页开发者','这是我的网站','使用nextjs','和tailwindcss','和typescript','和爱 ❤️'],
    ja:['私のウェブサイトへようこそ','私はウェブ開発者です','これは私のウェブサイトです','nextjsで構築','とtailwindcss','とtypescript','と愛 （づ￣3￣）づ╭❤️～'],
}


const Welcome:React.FC<{lng?:any}> = ({lng}) => {
    const typed = useRef<null | any>(null)

    useEffect(() => {
        console.count('Welcome')
        if(typed.current) {
            return
        }
        if(!lng) return
        typed.current = new Typed('#welcome-typed', {
            strings: welcomeStringObj[lng],
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 400,
            showCursor: true,
            smartBackspace: true
        })
        return () => {
            typed.current && typed.current.destroy()
            typed.current = null
        }
    },[lng])


    return (
        <h3 className='animate-module_show_fade text-4xl mb-6' ><span id='welcome-typed' /></h3>
    )

}



export default Welcome