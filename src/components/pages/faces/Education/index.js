import Image from 'next/image'
import Hull from '/public/pictures/Hull.jpeg'
import Nottingham from '/public/pictures/Nottingham.jpeg'
import { H1, H2 } from '../../../Text'

const Education = () => (
    <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center w-full'>
            <Image src={Hull} alt="Hull" width="175" height="175" className='mr-8 rounded'/>
            <div>
                <H1>University of Hull</H1>
                <H1>BSC Computer science</H1>
                <H2>2015-2018</H2>
            </div>
        </div>
        <div className='flex flex-row items-center w-full my-4'>
            <div>
                <H1>University of Nottingham</H1>
                <H1>MSC Computer science</H1>
                <H2>2018-2019</H2>
            </div>
            <Image src={Nottingham} alt="Nottingham" width="175" height="175" className='ml-8 rounded'/>
        </div>
        <a href='/docs/Resume.pdf' target="_blank" type='PDF' className='z-50'>
            <H2 underline>Full Resume</H2>
        </a>
    </div>
)

export default Education;