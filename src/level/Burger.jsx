import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { castShadow } from "../utils/utils";

function Burger ( { offsetPosition = [0, 0.25, 0] } )
{
    const model = useGLTF( './hamburger.glb' );
    // util func to enable cast shadow for custom model
    castShadow( model );
    return (

        <RigidBody
            type="fixed"
            colliders={'hull'} restitution={0.2}
            friction={0}
            position={offsetPosition}>
            <primitive object={model.scene} scale={0.25}>
            </primitive>
        </RigidBody>
    );
}

export default Burger;
