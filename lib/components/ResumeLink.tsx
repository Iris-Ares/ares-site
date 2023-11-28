
import { PaperIcon } from './icons';


const ResumeLink = ({ tip }:any) => {

    

    return (
        <div className='tooltip tooltip-left' data-tip={tip}><a href='https://imnotares.framer.website/' target='__blank' title="Ares's Resume" className='btn'><PaperIcon /></a></div>
    )
}

export default ResumeLink;