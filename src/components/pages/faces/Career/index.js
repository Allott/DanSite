import Image from 'next/image'
import canddi from '/public/pictures/canddi.jpeg'
import ii from '/public/pictures/ii.jpeg'
import bright from '/public/pictures/bright.png'
import { H1, H2 } from '../../../Text'

const CareerPage1 = () => (
    <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center w-full'>
            <Image src={ii} alt="Canddi" width="175" height="175" className='mr-8 rounded'/>
            <div>
                <H1>Interactive Investor</H1>
                <H2>Application Developer</H2>
                <H2>Web and mobile distributed micro-app</H2>
                <H2>Finance activation forms</H2>
                <H2>2024+</H2>
            </div>
        </div>
        <div className='flex flex-row items-center w-full my-4'>
            <div>
                <H1>BrightHR</H1>
                <H2>Frontend Developer</H2>
                <H2>Login Page, Method Statement,</H2>
                <H2>Risk assessments, Components monorepo</H2>
                <H2>2021 - 2024</H2>
            </div>
            <Image src={bright} alt="bright" width="175" height="175" className='ml-8 rounded'/>
        </div>
        <a href='/docs/Resume.pdf' target="_blank" type='PDF' className='z-50'>
            <H2 underline>Full Resume</H2>
        </a>
    </div>
)

const CareerPage2 = () => (
    <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center w-full'>
            <Image src={canddi} alt="Canddi" width="175" height="175" className='mr-8 rounded'/>
            <div>
                <H1>CANDDi</H1>
                <H2>Javascript developer</H2>
                <H2>Static website, Web-scraping, Testing</H2>
                <H2>2020-2021</H2>
            </div>
        </div>
        <a href='/docs/Resume.pdf' target="_blank" type='PDF' className='z-50'>
            <H2 underline>Full Resume</H2>
        </a>
    </div>
)

export {CareerPage1, CareerPage2};