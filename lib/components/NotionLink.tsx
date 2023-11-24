
import { BookIcon } from './icons';


const NotionLink = ({ tip }:any) => {

    

    return (
        <div className='tooltip tooltip-bottom' data-tip={tip}><a href='https://notion.imnotares.com' target='__blank' title="Ares's Notion" className='btn'><BookIcon /></a></div>
    )
}

export default NotionLink;