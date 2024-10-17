import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import Globe from "../assets/components/Globe";
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";

const Home = () => {
  // const controls = useControls('HackerRoom',{
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale:{
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // })

  const isSmall = useMediaQuery({
    maxWidth: 440
  })
  const isMobile = useMediaQuery({
    maxWidth: 768
  })
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1024,
  })
  const sizes = calculateSizes(isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
            Welcome to blobe app
        </p>
        <p className="hero_tag text-gray_gradient">Its just a simple social media app.</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <HackerRoom
                 scale={sizes.deskScale} 
                 position={sizes.deskPosition} 
                 rotation={[0,-Math.PI,0]}
                //  position = {[controls.positionX,controls.positionY,controls.positionZ]}
                //  rotation = {[controls.rotationX,controls.rotationY,controls.rotationZ]}
                //  scale={[controls.scale,controls.scale,controls.scale]}
                 />

                 {/* <group>
                  <Target position={sizes.targetPosition}/>
                 </group> */}

                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} intensity={0.5}/>
              </Suspense>
            </Canvas>
      </div>
    </section>
  )
}

export default Home
