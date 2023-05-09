import { H1 } from '../../../Text'

const Landing = () => (
    <div className='flex flex-col items-center'>
        <H1 className='mb-10'>Contact Me</H1>
        <H1 className='mt-4'>07419­-117­-333</H1>
        <a href='mailto:daniel@llott.co.uk' target="_blank" type='link' className='z-50 mt-4'>
            <H1 underline>daniel@llott.co.uk</H1>
        </a>
        <a href='https://github.com/Allott' target="_blank" type='link' className='z-50 mt-4'>
            <H1 underline>Github</H1>
        </a>
        <a href='https://www.linkedin.com/in/daniel-allott-477783184/' target="_blank" type='link' className='z-50 mt-4'>
            <H1 underline>Linkedin</H1>
        </a>
    </div>
)

export default Landing;