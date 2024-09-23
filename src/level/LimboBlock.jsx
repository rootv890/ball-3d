import { RigidBody } from "@react-three/rapier";
import BlockStart from "./BlockStart";
import { floor2Material, floorGeometry, obstacleMaterial } from "./geoAndMat";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LimboBlock ( { position, speed } )
{
    return (
        <group position={position}>

            {/* Spinner */}
            <Limbo speed={speed} position={position} />

            <BlockStart
                position={[0, 0, 0]}
                geometry={floorGeometry}
                material={floor2Material}
            />
        </group>
    );
}

export default LimboBlock;


function Limbo ( { speed = 1, position } )
{
    const limbo = useRef();
    const [randomSeed] = useState( () => (
        Math.random() * Math.PI * 2
    )
    );

    // eslint-disable-next-line no-unused-vars
    useFrame( ( state, delta ) =>
    {
        const time = state.clock.elapsedTime * speed + randomSeed;
        //
        const altitude = time;
        let y = Math.abs( Math.sin( altitude ) ) + 0.1;
        y *= 2.0;
        limbo.current.setNextKinematicTranslation( new THREE.Vector3( position[0], position[1] + y, position[2] ) );
    } );

    return (
        <RigidBody
            ref={limbo}
            scale={[3, .3, .3]}
            type="kinematicPosition"
            position={[0, .3, 0]}
            restitution={0.2}
            friction={0}
        >
            <mesh material={obstacleMaterial} castShadow>
                <boxGeometry />
            </mesh>
        </RigidBody>
    );
}
