
import { BookIcon } from './icons';
import { languageList } from '@/app/i18n/settings';

import Link from 'next/link';


const NotionLink = ({ tip }:any) => {

    

    return (
        <div className='tooltip tooltip-bottom' data-tip={tip}><a href='https://notion.imnotares.com' target='__blank' title="Ares's Notion" className='btn'><BookIcon /></a></div>
    )
}

export default NotionLink;