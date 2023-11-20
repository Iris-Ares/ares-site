'use client'
import Spline from '@splinetool/react-spline';
import './index.css'

const AnimatedBackground:React.FC = () =>{



    return (
        <div className='AnimatedBackground absolute left-0 top-0 z-0 w-full h-full opacity-60'>
            <Spline scene="https://prod.spline.design/BENrjy1JDnIE1AAP/scene.splinecode" />
        </div>
    )
}

export default AnimatedBackground