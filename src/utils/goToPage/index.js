import rotationConst from '../../constants/rotationConst'

const { scrollRate } = rotationConst;
const halfPi = Math.PI/2;

const goToPage = (page) => {
    const gap = Math.round(halfPi / scrollRate) * page;
    window.scrollTo({
        top: gap,
        behavior: 'smooth',
    })
}

export default goToPage;