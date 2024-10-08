import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

const Player = () =>
{
    // get keys gives the value of current key
    // subscribe keys give which
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const body = useRef();
    const { rapier, world } = useRapier();
    const rapierWorld = world.raw();

    const [smoothedCameraPosition] = useState( () => new THREE.Vector3( 10, 10, 10 ) );
    const [smoothedCameraTarget] = useState( () => new THREE.Vector3() );

    const jump = () =>
    {
        const origin = body.current.translation();
        origin.y -= .31; // .3 radius of the ball!
        const direction = { x: 0, y: -1, z: 0 };
        const ray = new rapier.Ray( origin, direction );
        const hit = rapierWorld.castRay( ray, 10, true );
        hit.toi < 0.15 ? body.current.applyImpulse( { x: 0, y: 0.5, z: 0 } ) : null;
    };

    useEffect( () =>
    {
        const unsubscribeJump = subscribeKeys(
            // Selector : which change of state u want to select!
            state => state.jump,
            // When changes happens run this function
            value =>
            {
                if ( value )
                {
                    jump();
                }

            },
        );

        return () =>
        {
            unsubscribeJump();
        };
    }, [] );

    useFrame( function ( state, delta )
    {
        const { forward, backward, leftward, rightward } = getKeys();


        const impulse = { x: 0., y: 0, z: 0 };
        const torque = { x: 0, y: 0, z: 0 };

        const impulseStrength = 0.5 * delta;
        const torqueStrength = -0.2 * delta;

        if ( forward )
        {
            impulse.z -= impulseStrength;
            torque.x = torqueStrength;
        }
        if ( backward )
        {
            impulse.z += impulseStrength;
            torque.x -= torqueStrength;
        }
        if ( leftward )
        {
            impulse.x -= impulseStrength;
            torque.z -= torqueStrength;
        }
        if ( rightward )
        {
            impulse.x += impulseStrength;
            torque.z += torqueStrength;
        }

        body.current.applyImpulse( impulse, true );
        body.current.applyTorqueImpulse( torque, true );



        /**
         * Moving Camera
        */
        const bodyPosition = body.current.translation();
        const cameraPosition = new THREE.Vector3();
        cameraPosition.copy( bodyPosition );
        cameraPosition.z += 2.25;
        cameraPosition.y += 0.65;
        const cameraTarget = new THREE.Vector3();
        cameraTarget.copy( bodyPosition );
        cameraTarget.y += 0.25;


        // Smooth camera Position
        smoothedCameraPosition.lerp( cameraPosition, 5 * delta );
        smoothedCameraTarget.lerp( cameraTarget, 5 * delta );

        // Update the camera position
        state.camera.position.copy( smoothedCameraPosition );
        state.camera.lookAt( smoothedCameraTarget );

    } );

    return (
        <RigidBody
            ref={body}
            restitution={0.2}
            linearDamping={0.5}
            angularDamping={0.5}
            friction={1}
            position={[0, 1, 0]}
            colliders={'ball'}
        >
            <mesh castShadow>
                <icosahedronGeometry args={[0.3, 1]} />
                <meshStandardMaterial flatShading color={'mediumpurple'} />
            </mesh>
        </RigidBody>
    );
};

export default Player;
