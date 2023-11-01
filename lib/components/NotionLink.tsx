
import { BookIcon } from './icons';
import { languageList } from '@/app/i18n/settings';

import Link from 'next/link';


const NotionLink = ({ lng }:any) => {

    

    return (
        <a href='https://notion.imnotares.com' target='__blank' title="Ares's Notion" className='btn'><BookIcon /></a>
    )
}

export default NotionLink;