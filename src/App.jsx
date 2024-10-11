import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import NewCreation from "./NewCreation";
function App() {
  return (
    <>
      <Canvas flat camera={{ fov: 90 }}>
        <OrbitControls />
        <ambientLight />
        {/* <Cyl /> */}
        <NewCreation/>
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={17.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    </>
  );
}

// export default App;
