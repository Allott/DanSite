import React, { useEffect, useState } from "react";

const useWindow = () => {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useWindow;