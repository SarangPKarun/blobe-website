import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Globe from "../components/Globe";
import Stars from "../components/Stars";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  // Media queries for responsiveness
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Adjust camera position based on screen size
  const cameraPosition = isSmall
    ? [0, 0, 18]
    : isMobile
    ? [0, 0, 25]
    : isTablet
    ? [0, 0, 25]
    : [0, 0, 25]; // Default for larger screens

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      {/* Main Content */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center ${
          isSmall ? "space-y-4" : "space-y-6"
        }`}
      >
        <h1
          className={`font-bold text-white font-sans tracking-wide ${
            isSmall
              ? "text-3xl"
              : isMobile
              ? "text-4xl"
              : isTablet
              ? "text-5xl"
              : "text-6xl"
          }`}
        >
          Blobe: Connect Globally
        </h1>
        <p
          className={`text-gray-300 mx-auto ${
            isSmall
              ? "text-sm max-w-xs"
              : isMobile
              ? "text-base max-w-sm"
              : isTablet
              ? "text-lg max-w-md"
              : "text-xl max-w-xl"
          }`}
        >
          Experience a revolutionary way to stay connected with the world.
        </p>
      </div>

      {/* Canvas with Globe and Stars */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={cameraPosition} />
            {/* Stars surrounding the globe */}
            <Stars count={1000} radius={60} />
            {/* Rotating globe */}
            <Globe />
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
