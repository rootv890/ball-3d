import { Text } from '@react-three/drei';

function Test() {
	return (
		<group>
			<mesh>
				<boxGeometry />
			</mesh>
			<Text position={[0, 0, 1]}>
				HELLO
				<meshNormalMaterial />
			</Text>
		</group>
	);
}

export default Test;
