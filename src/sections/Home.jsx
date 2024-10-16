import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import Globe from "../assets/components/Globe";
import { HackerRoom } from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";

const Home = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
            Welcome to blobe app
        </p>
        <p className="hero_tag text-gray_gradient">Its just a simple social media app.</p>
      </div>

      <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <HackerRoom />
              </Suspense>
            </Canvas>
      </div>
    </section>
  )
}

export default Home
