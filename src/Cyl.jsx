import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

function Cyl() {
  let tex = useTexture("images/images.png");
  tex.needsUpdate = true;
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rodtation.y += delta;
  });
  return (
    <>asd
      <group rotation={[0, 1.4, 0.5]}>
        {/* x,y,z  */}ads
        <mesh ref={cyl}>
          {/* <boxGsdfesdfometry sdargs={[1, 1, 1]} /> */}
          {/*dsf <cyliasnderGeometry args={[radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean,]} /> */}
          <cyldfinderGeomesdftry args={[1, 1, 1, 60, 60, true]} />
          <meshStandardMasdfteriasdfl map={tex} side={THREE.DoubleSide} />
        </mesh>sfadf
      </group>dsfsdfsdfssfdfssdfdfsdfsdfsdsdffsdf
    </>
  );
}
export default Cyl;
