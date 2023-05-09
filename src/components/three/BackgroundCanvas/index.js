import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Plane } from "@react-three/drei";
import Box from '../Box'
import Pillar from '../Pillar'
import rotationConst from '../../../constants/rotationConst'

const { radiusMin, extension, scrollRate } = rotationConst;

const BackgroundCanvas = ({scrollY, setIsLoading}) => {

    const modScroll = scrollY * scrollRate;

    // Zoom in
    const halfScroll = modScroll * 2;
    const halfSin = Math.abs(Math.sin(halfScroll))
    const extentionFactor = halfSin * extension
    const radius = radiusMin + extentionFactor

    // Rotation Position
    const xMod = Math.cos(modScroll);
    const yMod = Math.sin(modScroll);

    const xRotation = xMod * radius;
    const yRotation = yMod * radius;

    // total loading hack here, todo this better
    setTimeout(()=>setIsLoading(false), 500)

    return (
        <div className="fixed top-0 left-0 z-0 w-full h-full">
            <Canvas 
                shadows
            >
                <PerspectiveCamera
                    makeDefault 
                    position={[yRotation, 0, xRotation]} 
                    rotation={[0,modScroll,0]}
                />
                <ambientLight intensity={0.5} />
                <spotLight position={[50, 50, 50]} angle={0.35} penumbra={1} />
                <Box position={[0, 0, 0]} scale={5} />
                <Pillar position={[10, 0, 12]} scale={5} />
                <Pillar position={[25, 0, -10]} scale={5} />
                <Pillar position={[-25, 0, -25]} scale={5} />
                <Pillar position={[-25, 0, 12]} scale={5} />

                <Plane 
                    position={[0, -1.5, 0]} 
                    scale={1000} 
                    rotation={[-Math.PI/2,0,0]} 
                    material-color="#00d1bc" 
                    material-transparent 
                    material-opacity={0.9}
                />
            </Canvas>
        </div>
   
    );
}

export default BackgroundCanvas;