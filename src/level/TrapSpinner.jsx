import { RigidBody } from "@react-three/rapier";
import BlockStart from "./BlockStart";
import { floor2Material, floorGeometry, obstacleMaterial } from "./geoAndMat";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TrapSpinnerBlock ( { position, speed } )
{
    return (
        <group position={position}>

            {/* Spinner */}
            <Spinner speed={speed} />

            <BlockStart
                position={[0, 0, 0]}
                geometry={floorGeometry}
                material={floor2Material}
            />
        </group>
    );
}

export default TrapSpinnerBlock;


function Spinner ( { speed = 1 } )
{
    const spinner = useRef();
    const [randomSeed] = useState( () => ( Math.random() + 0.2 ) * ( Math.random() < 0.5 ? -1.0 : 1.0 ) );

    // eslint-disable-next-line no-unused-vars
    useFrame( ( state, delta ) =>
    {
        const time = state.clock.elapsedTime * speed * randomSeed;
        const eulerRot = new THREE.Euler( 0, time, 0 );
        const quaternionRot = new THREE.Quaternion().setFromEuler( eulerRot );
        spinner.current.setNextKinematicRotation( quaternionRot );
    } );

    return (
        <RigidBody
            ref={spinner}
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
