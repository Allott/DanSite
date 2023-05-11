import cn from 'classnames';
const H1 = ({ children, underline, className }) => <h1 
    className={
        cn("mt-2 text-xl font-semibold text-yellow-200",
            className, 
            {'underline':underline
        })
    }
>{children}</h1>

const H2 = ({ children, underline, className }) => <h2 
    className={
        cn("mt-2 text-md font-semibold text-yellow-200",
            className, 
            {'underline':underline
        })
    }
>{children}</h2>

const Button = ({ children, onClick, className, rest }) => <button
    className={
        cn('px-4 py-2 font-bold text-white bg-yellow-200 rounded hover:bg-yellow-300 text-yellow-700',
            className
        )}
    onClick={onClick}
    {...rest}
>{children}</button>

export { H1, H2, Button }