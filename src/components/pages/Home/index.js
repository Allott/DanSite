import React, {useState} from 'react';
import useScroll from '@/utils/useScroll' 
import BackgroundCanvas from "@/components/three/BackgroundCanvas";
import { ScrollBox, FaceBox } from "@/components/ScrollBox";
import { H2 } from '../../Text'
import goToPage from '@/utils/goToPage'
import Landing from '../faces/Landing';
import Buzz from '../faces/Buzz';
import Education from '../faces/Education';
import Career from '../faces/Career';
import ContactMe from '../faces/ContactMe';

const Home = () => {    
    const scroll = useScroll();
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <>
            <BackgroundCanvas scrollY={scroll} setIsLoading={setIsLoading}/>
            <ScrollBox count={5} isLoading={isLoading}>
                <FaceBox position={0}><Landing contactPage={4} /></FaceBox>
                <FaceBox position={1}><Buzz /></FaceBox>
                <FaceBox position={2}><Education /></FaceBox>
                <FaceBox position={3}><Career /></FaceBox>
                <FaceBox position={4}><ContactMe /></FaceBox>
                <FaceBox position={5}>
                    <button onClick={()=> goToPage(0)} className='z-50 mt-20'>
                        <H2 underline>Back to start?</H2>
                    </button>
                </FaceBox>
            </ScrollBox>
        </>
    )
}

export default Home