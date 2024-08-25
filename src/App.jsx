import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
function App() {
  return (
    <>

    <Canvas flat camera={{ fov: 40 }}>
      {/* <OrbitControls /> */}
      <ambientLight />

      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={7.0}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
        {/* <ToneMapping adaptive/> */}
      </EffectComposer>
    </Canvas>
    <div className="text-white">WEB</div>
    </>

  );
}

export default App;
