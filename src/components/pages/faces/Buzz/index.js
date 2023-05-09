import { H1, H2 } from '../../../Text'

const items = ['Javascript', 'Typescript', 'React', 'HTML', 'Jest', 'Next', 'Agile', 'CI/CD', 'Tailwind ', 'Accessibility ', 'Adaptive design', 'Bootstrap', 'DOM  ', 'CSS', 'Frontend', 'Github ', 'C# '];
const wiggle = 200;

const Buzz = ({contactPage}) => {
    
    const left = `${wiggle+40}px`
    return (
    <div className='absolute' style={{left: left}}>
        {items.map((item) => {
            const value = [...item].reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
            const x = Math.round(Math.sin(value) * wiggle) + wiggle;
            const y = Math.round(Math.cos(value) * wiggle) + wiggle;
            const right = `${x}px`;
            const top = `${y}px`;
            return <div
                        key={item}
                        style={{right: right, top: top}}
                        className='absolute'
                    >
                    <H2>
                        {item}
                    </H2>
                </div>
        })}
        <div className='absolute' style={{right: '180px', top: '200px'}}>
            <H1 className='w-max'>Core Skills</H1>
        </div>
       
    </div>
)};

export default Buzz;