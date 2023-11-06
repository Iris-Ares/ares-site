
import { BookIcon } from './icons';
import { languageList } from '@/app/i18n/settings';

import Link from 'next/link';


const AiChatLink = ({ tip }:any) => {

    

    return (
        <div className='tooltip tooltip-bottom' data-tip={tip}><a href='https://ai.imnotares.com' target='__blank' title="Ares's Notion" className='btn text-xl'>AI</a></div>
    )
}

export default AiChatLink;