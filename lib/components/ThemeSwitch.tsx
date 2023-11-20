'use client'

import { useState , useEffect } from 'react';
import { PaintBrushIcon } from './icons';

import tailWindConfig from '../../tailwind.config.js' 

const ThemeList = tailWindConfig.daisyui.themes

const changeThemeHandle = (theme:string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

const ThemeSwitch = ({ tip }:any) => {

    const [theme, setTheme] = useState<string>('')
    
    useEffect(() => {
        const th = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches && 'dark')
        if(th){
            setTheme(th)
        }
    }, [])

    useEffect(() => {
        theme && changeThemeHandle(theme)
    }, [theme])

    

    return (
        <div className="flex items-center justify-center">
            
            <div className="dropdown " >
                <div className='tooltip tooltip-bottom' data-tip={tip} >
                    <label tabIndex={0}  className="m-1 btn" ><PaintBrushIcon /></label>
                </div>
                <div className='"dropdown-content bg-base-200 '>
                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-60 lg:w-80  max-h-[60vh] overflow-auto flex-col flex gap-2 flex-nowrap">
                        {
                            ThemeList.map((_theme:string) => (
                                <li className='w-full' key={_theme} onClick={setTheme.bind(null,_theme)}>
                                    <button data-theme={_theme} 
                                    className={`w-full outline-base-content overflow-hidden rounded-lg text-left ${_theme === theme?'btn-disabled':''} ` }>
                                        <div className='w-20 lg:w-40 text-xs lg:text-xl flex items-center gap-1' >
                                            {_theme}
                                            {
                                                _theme === theme && <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            }
                                        </div>
                                        
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