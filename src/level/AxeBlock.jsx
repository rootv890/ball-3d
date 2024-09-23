/* eslint-disable no-unused-vars */
import { RigidBody } from "@react-three/rapier";
import BlockStart from "./BlockStart";
import { floor2Material, floorGeometry, obstacleMaterial } from "./geoAndMat";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AxeBlock ( { position, speed } )
{
    return (
        <group position={position}>

            {/* Spinner */}
            <AxeSpin speed={speed} position={position} />

            <BlockStart
                position={[0, 0, 0]}
                geometry={floorGeometry}
                material={floor2Material}
            />
        </group>
    );
}

export default AxeBlock;

// Constants
const gravity = 9.81;
const length = 3;
const omega = Math.sqrt( gravity / length );
const phase = 0;

function AxeSpin ( { speed = 1, position } )
{
    const limbo = useRef();
    const [randomSeed] = useState( () => (
        Math.random() * Math.PI * 2
    )
    );
    useFrame( ( state, _delta ) =>
    {
        const time = state.clock.elapsedTime + randomSeed;
        const theta = 2 * Math.PI * Math.cos( omega * time + phase ) * 0.2;
        const x = length * Math.sin( theta );
        const y = -length * Math.cos( theta ) + ( length + 0.75 );



        limbo.current.setNextKinematicTranslation( new THREE.Vector3( position[0] + x, position[1] + y, position[2] ) );
    } );

    return (
        <RigidBody
            ref={limbo}
            scale={[1.5, 1.5, .3]}
            type="kinematicPosition"
            position={[0, .3, 0]}
            restitution={0.2}
            friction={0}
        >
            <mesh material={obstacleMaterial} castShadow >
                <boxGeometry />
            </mesh>
        </RigidBody>
    );
}
