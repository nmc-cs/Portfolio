import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  if(isMobile){
    return null;
  }

  const computer = useGLTF("./public/space_kid/scene.gltf");
  const ship = useGLTF("./public/cartoon_spaceship/scene.gltf");

  return (
    <mesh>
      {/* React-three-fiber docs & search "adding lights" for documentation */}
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={20} />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[10, 10, 0]} />
      <primitive
        object={ship.scene}
        scale={isMobile ? 0.3 : 1.1}
        // original position
        position={isMobile ? [0, -2, -0.5] : [1, -3.25, -1.5]}
        //testing
        rotation={[0, -0.2, -0.1]}
      />
          <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={30} />
      <ambientLight intensity={1} />
      <directionalLight color="red" position={[5, 5, 5]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.55}
        // original position
        position={isMobile ? [0, -2, -0.5] : [9.2, 0.61, -1.99]}
        //testing
        rotation={[0, 1, -0.1]}
      />
    </mesh>
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //adding a listener for the screen to change sizes
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //sets the initial value of the isMobile variable
    setIsMobile(mediaQuery.matches);

    //defines a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //adds the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //removes the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [25, 3, 5], fov: 17 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
      {/* Removed due to complexity */}
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}  // Adjust as needed for your scene
          minPolarAngle={0}  // Adjust as needed for your scene
        /> */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
