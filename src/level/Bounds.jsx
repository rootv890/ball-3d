import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { wallMaterial, floorGeometry } from "./geoAndMat";

const Bounds = ( { length = 1, height = 2 } ) =>
{
    length = 4 * length;

    return (
        <>
            <RigidBody
                type="fixed" restitution={0.2}

                friction={0}>

                <mesh
                    position={[2.15, height / 2, 2 * -4]}
                    scale={[0.3, height, length]}
                    material={wallMaterial}
                    geometry={floorGeometry} castShadow />
                <mesh
                    position={[-2.15, height / 2, 2 * -4]}
                    scale={[0.3, height, length]}
                    material={wallMaterial}
                    geometry={floorGeometry} receiveShadow />
                <mesh
                    position={[0, 1, -length + 2]}
                    scale={[4, 2, 0.3]}
                    material={wallMaterial}
                    geometry={floorGeometry}
                    receiveShadow />
                <CuboidCollider
                    restitution={0.2}
                    friction={1}
                    args={[2, 0.1, length / 2]}
                    position={[0, -0.1, -( length / 2 ) + 2]}
                />
            </RigidBody>
        </>
    );
};

export default Bounds;
