// import * as THREE from "three";

import { Text } from "@react-three/drei";

function NewCreation() {
  return (
    <>
      <group>
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[1, 0.1, 1]} />
          {/* <meshStandardMaterial color="hotpink" /> */}
        </mesh>
        <Text
          position={[0, 1, 0]}
          fontSize={0.3}
          color="hotpink"
          anchorX="center"
          anchorY="middle"
        >
          Nano Chip!
        </Text>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </group>
    </>
  );
}

export default NewCreation;
