import React, { useState, useEffect, useCallback } from 'react';
import rotationConst from '../../constants/rotationConst'

const { scrollRate } = rotationConst;

const useScroll = () => {
    const [scroll, setScroll] = useState(0);
    let timer = null;

    const scrollTo = (scroll) => {
        const modScroll = scroll * scrollRate;
        const halfPi = Math.PI/2;
        const rotations = Math.round(modScroll/halfPi);
        const scrollPosition = rotations * halfPi;

        window.scrollTo({
            top: scrollPosition / scrollRate,
            behavior: 'smooth',
          })
    }

    const onScroll = useCallback(event => {
        setScroll(window.pageYOffset);
        if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(function() {
              scrollTo(window.pageYOffset)
        }, 100);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      // prevent memory leak
      return () => {
         window.removeEventListener("scroll", onScroll, { passive: true });
      }
    }, []);

    return scroll;
}

export default useScroll;