/**
 * @param {Object} param0
 * @param {number[]} [param0.position=[0, 0, 0]]
 * @param {*} param0.material
 * @param {*} param0.geometry
 * Simple Floor using instanced material and geometry
*/
function BlockStart ( {
    position = [0, 0, 0],
    material, geometry
} )
{
    return (
        <group position={position}>
            {/* Floor */}
            <mesh
                position={[0, -.1, 0]}
                geometry={geometry}
                material={material}
                scale={[4, 0.2, 4]}
                receiveShadow
            >
            </mesh>
        </group>
    );
}

export default BlockStart;
