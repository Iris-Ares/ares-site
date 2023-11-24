
import { PaperIcon } from './icons';


const ResumeLink = ({ tip }:any) => {

    

    return (
        <div className='tooltip tooltip-bottom' data-tip={tip}><a href='https://imnotares.framer.website/' target='__blank' title="Ares's Notion" className='btn'><PaperIcon /></a></div>
    )
}

export default ResumeLink;