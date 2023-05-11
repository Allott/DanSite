import { H1, H2 } from '../../../Text'

const items = ['Javascript', 'Typescript', 'React', 'HTML', 'Jest', 'Next', 'Agile', 'CI/CD', 'Tailwind ', 'Accessibility ', 'Adaptive design', 'Bootstrap', 'DOM  ', 'CSS', 'Frontend', 'Github ', 'C# '];

const Buzz = () => {
    return (
        <div className='flex flex-col items-center'>
            <H1>Core Skills</H1>
            <div className='flex flex-row flex-wrap content-between mt-8 w-80'>
                    {items.map((item) => {
                        return <div key={item} className='p-2'>
                                <H2>
                                    {item}
                                </H2>
                        </div>
                    })}
            </div>
        </div>
   
)};

export default Buzz;