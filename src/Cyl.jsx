import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

function Cyl() {
  let tex = useTexture("images/images.png");
  tex.needsUpdate = true;
  let cyl = useRef(null);
  useFrame((, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <>
      <group rotation={[0, 1.4, 0.5]}>
        {/* x,y,z  */}
        <mesh ref={cyl}>
          {/* <boxGeometry args={[1, 1, 1]} /> */}
          {/* <cylinderGeometry args={[radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean,]} /> */}
          <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
          <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}
export default Cyl;
