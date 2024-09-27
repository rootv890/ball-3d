import { KeyboardControls, OrbitControls, useGLTF } from '@react-three/drei';
import Experience from './Experience';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { keyControls } from './utils/keys';


const App = () =>
{
    return (
        <KeyboardControls
            map={keyControls}
        >
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6]
                }}
                shadows
            >
                <Perf style={{
                    backgroundColor: 'black',
                    borderRadius: '12px',
                    padding: '12px',
                    left: '10px',
                    top: '10px'
                }} position='top-left' />
                <OrbitControls makeDefault />
                <Experience />
            </Canvas>
        </KeyboardControls>
    );
};

export default App;

// preloads
useGLTF.preload( './hamburger.glb' );
