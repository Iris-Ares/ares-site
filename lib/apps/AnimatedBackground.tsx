'use client'
import Spline from '@splinetool/react-spline';
import { useState ,Suspense } from 'react';

import type { Application } from '@splinetool/runtime';


const AnimatedBackground:React.FC = () =>{
    const [ App , setApp ] = useState<Application | null>(null)


    return (
        <div className='AnimatedBackground absolute left-0 top-0 z-10 w-full h-full opacity-60'>
            <Suspense fallback={<div className='w-full h-full flex items-center justify-center'><span className="loading loading-ring loading-lg scale-[6]"></span></div>}>
                <Spline className={` ${App ? '' : 'hidden'} `} scene="https://prod.spline.design/BENrjy1JDnIE1AAP/scene.splinecode"  
                onLoad={setApp}
                />
            </Suspense>
        </div>
    )
}

export default AnimatedBackground