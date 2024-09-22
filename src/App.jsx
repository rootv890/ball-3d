import { OrbitControls } from '@react-three/drei';
import Experience from './Experience';
import { Canvas } from '@react-three/fiber';

const App = () =>
{
    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [2.5, 4, 6]
            }}
            shadows
        >
            <OrbitControls makeDefault />
            <Experience />
        </Canvas>
    );
};

export default App;
