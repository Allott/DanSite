import cn from 'classnames';
const H1 = ({ children, underline, className }) => <h1 
    className={
        cn("mt-2 text-xl font-semibold text-yellow-200",
        className, 
        {'underline':underline})
    }
>{children}</h1>

const H2 = ({ children, underline, className }) => <h2 
    className={
        cn("mt-2 text-md font-semibold text-yellow-200",
        className, 
        {'underline':underline})
    }
>{children}</h2>

export { H1, H2 }