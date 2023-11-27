'use client'
// import Spline from '@splinetool/react-spline';
import { useState ,Suspense , lazy} from 'react';

import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));

const AnimatedBackground:React.FC = () =>{
    const [ App , setApp ] = useState<Application | null>(null)


    return (
        <div className='absolute left-0 top-0 z-10 w-full h-full  opacity-80 overflow-hidden'>
            <Suspense >
                <Spline className={` ${App ? '' : 'hidden'} `} scene="https://prod.spline.design/BENrjy1JDnIE1AAP/scene.splinecode"  
                onLoad={setApp}
                />
            </Suspense>
            <div className={`${App ? 'hidden' : ''} w-full h-full flex items-center justify-center`}><span className="loading loading-ring loading-lg scale-[6]"></span></div>
        </div>
    )
}

export default AnimatedBackground