import Image from 'next/image'
import me from '/public/pictures/me.png'
import { H1, H2 } from '../../../Text'
import goToPage from '@/utils/goToPage'

const Landing = ({contactPage}) => (
    <div className='flex flex-col items-center'>
        <Image src={me} alt="Dan" width="250" height="250" className='mb-8'/>
        <H1>Daniel Allott</H1>
        <H1>Front End Developer</H1>
        <div className='flex flex-row items-center space-x-4'>
            <button onClick={()=> goToPage(contactPage)} className='z-50'>
                <H2 underline>Contact me</H2>
            </button>
            <a href='/docs/Resume.pdf' target="_blank" type='PDF' className='z-50'>
                <H2 underline>Full Resume</H2>
            </a>
        </div>
    </div>
)

export default Landing;