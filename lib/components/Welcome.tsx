'use client'
import { useEffect , useState,useRef ,useMemo} from "react"
// @ts-ignore
import Typed from 'typed.js'
import { useClientTranslation} from '@/app/i18n'

import type { BaseTypes } from '@/lib/types'



const Welcome:BaseTypes.TranslatedFC = ({lng}) => {
    const { t } = useClientTranslation(lng)
    const typed = useRef<null | any>(null)

    const sentences = useMemo(()=>{
        return [
            t('welcome-1'),
            t('welcome-2'),
            t('welcome-3'),
            t('welcome-4'),
            t('welcome-5'),
            t('welcome-6'),
            t('welcome-7'),
        ]
    },[t])

    useEffect(() => {
        if(typed.current) {
            return
        }
        if(!sentences) return
        typed.current = new Typed('#welcome-typed', {
            strings: sentences,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 900,
            showCursor: true,
            smartBackspace: true,
            // loop: true,
        })
        return () => {
            typed.current && typed.current.destroy()
            typed.current = null
        }
    },[sentences])


    return (
        <h3 className='animate-module_show_fade text-2xl lg:text-4xl mb-6 text-center' ><span id='welcome-typed' /></h3>
    )

}



export default Welcome