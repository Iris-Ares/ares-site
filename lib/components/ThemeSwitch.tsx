'use client'

import { DesktopIcon } from './icons';
import { languageList } from '@/app/i18n/settings';

import tailWindConfig from '../../tailwind.config.js' 

import Link from 'next/link';

const ThemeList = tailWindConfig.daisyui.themes

const ThemeSwitch = ({ lng }:any) => {

    const setTheme = (theme:string) => {
        document.querySelector('html')?.setAttribute('data-theme',theme)
    }
    

    return (
        <div className="flex items-center justify-center">
            
            <div className="dropdown " >
                <label tabIndex={0}  className="m-1 btn" title='switch theme'><DesktopIcon /></label>
                <div className='"dropdown-content bg-base-200 '>
                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-80  h-[200px] overflow-auto flex-col flex gap-2 flex-nowrap">
                        {
                            ThemeList.map((theme:string) => (
                                <li className='w-full' key={theme} onClick={setTheme.bind(null,theme)}>
                                    <button data-theme={theme} className="'w-full outline-base-content overflow-hidden rounded-lg text-left " >
                                        <p className='w-40'>{theme}</p>
                                        <div className="flex h-full justify-between">
                                            <span className="bg-primary w-2 rounded"></span>
                                            <span className="bg-secondary w-2 rounded"></span>
                                            <span className="bg-accent w-2 rounded"></span>
                                            <span className="bg-neutral w-2 rounded"></span>
                                        </div>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThemeSwitch;