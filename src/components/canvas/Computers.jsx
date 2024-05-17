import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  //const computer = useGLTF("./computer_desk/scene.gltf");
  const computer = useGLTF("./public/gaming_desktop_pc/scene.gltf");

  // return (
  //   <mesh>
  //     {/* React-three-fiber docs & search "adding lights" for documentation */}
  //     <hemisphereLight intensity={0} groundColor="black" />
  //     <pointLight intensity={10} />
  //     <ambientLight intensity={1} />
  //     <directionalLight color="violet" position={[10, 10, 0]} />
  //     <primitive
  //       object={computer.scene}
  //       scale={3}
  //       position={[0, -4.25, -1.5]}
  //       rotation={[-0.2, 0, 0]}
  //     />
  //   </mesh>
  // );

  return (
    <mesh>
      {/* React-three-fiber docs & search "adding lights" for documentation */}
      <hemisphereLight intensity={0.01} groundColor="black" />
      <pointLight intensity={20} />
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[10, 10, 0]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.65}
        position={isMobile ? [0, -3, -0.5] : [0, -3.25, -1.5]}
        rotation={[0, -0.2, -0.1]}
      />
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
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
