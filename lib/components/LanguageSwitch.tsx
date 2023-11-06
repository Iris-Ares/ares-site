
import { LanguageIcon } from './icons';
import { languageList } from '@/app/i18n/settings';

import Link from 'next/link';


const LanguageSwitch = ({ tip }:any) => {
    // console.log('lng', lng );
    

    return (
        <div className="flex items-center justify-center">
            
            <div className="dropdown" >
                <div className='tooltip tooltip-bottom' data-tip={tip} >
                    <label tabIndex={0}  className="m-1 btn" ><LanguageIcon /></label>
                </div>
                <div className='"dropdown-content bg-base-200'>
                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {
                            languageList.map(({ code ,name}) => (
                                <li key={code}><Link href={`/${code}`}>{name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LanguageSwitch;