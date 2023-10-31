'use client'

import { LanguageIcon } from './icons';
import { languageList } from '@/app/i18n/settings';

import Link from 'next/link';


const LanguageSwitch = ({ lng }:any) => {
    // console.log('lng', lng );
    

    return (
        <div className="flex items-center justify-center">
            
            <div className="dropdown" >
                <label tabIndex={0}  className="m-1 btn"><LanguageIcon /></label>
                <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    {
                        languageList.map(({ code ,name}) => (
                            <li key={code}><Link href={`/${code}`}>{name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default LanguageSwitch;