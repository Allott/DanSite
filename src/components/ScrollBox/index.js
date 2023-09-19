import rotationConst from '../../constants/rotationConst'
import useScroll from '@/utils/useScroll' 
import useWindow from '@/utils/useWindow';
import cn from 'classnames';

const { scrollRate } = rotationConst;
const halfPi = Math.PI/2;

const ScrollBox = ({count, children, isLoading}) => {
    const { height } = useWindow();
    const gap = Math.round(halfPi / scrollRate);
    const h = ((count) * gap) + (height*0.8);
    return (
        <div 
            className="relative z-10 flex flex-col items-center" 
            style={{
                height: `${h}px`, 
                'marginTop': `${height/5}px`,
                opacity: isLoading ? '0%' : '100%'
             }}
            >
            {children}
        </div>
    );
}

const FaceBox = ({position, children}) => {
    const scroll = useScroll();
    const top = Math.round(position * (halfPi / scrollRate));
    const opacity = Math.max(100 - 2*Math.abs(scroll - top),0)
    const isVisible = opacity > 0;
    return (
        <div 
            className={cn(`absolute max-w-4xl`,
                {'hidden': !isVisible})} 
            style={{top: top, opacity: `${opacity}%`}}
            >
            {children}
        </div>
    );
}

export {ScrollBox, FaceBox}