import { OrbitControls } from '@react-three/drei';
import Lights from './Lights.jsx';
import Level from './level/Level.jsx';
import { Physics } from '@react-three/rapier';
import Player from './player/Player.jsx';

export default function Experience ()
{
    return <>

        <OrbitControls makeDefault />
        <Physics debug>
            <Lights />
            <Player />
            <Level />
        </Physics>

    </>;
}
