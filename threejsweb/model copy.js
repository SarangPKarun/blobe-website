// 1. Initialize Smooth Scroll (Lenis)
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 2. Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x010103); // Matches the body background

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setClearColor(0x010103, 0); // Transparent rendering
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 2.5;

// Append renderer to the .model container
document.querySelector(".model").appendChild(renderer.domElement);

// 3. Lighting Setup
const ambientLight = new THREE.AmbientLight(0xffffff, 3);
scene.add(ambientLight);

const mainLight = new THREE.DirectionalLight(0xffffff, 1);
mainLight.position.set(5, 10, 7.5);
scene.add(mainLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 3);
fillLight.position.set(-5, 0, -5);
scene.add(fillLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
hemiLight.position.set(0, 25, 0);
scene.add(hemiLight);

// 4. Basic Animation Function
function basicAnimate() {
  renderer.render(scene, camera);
  requestAnimationFrame(basicAnimate);
}
basicAnimate();

// 5. Load 3D Models
let model, globe;
const loader = new THREE.GLTFLoader();
const textureLoader = new THREE.TextureLoader();

// Load the main model (e.g., josta.glb)
loader.load(
  "./assets/josta.glb",
  function (gltf) {
    model = gltf.scene;
    model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    scene.add(model);

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    camera.position.z = maxDim * 2;

    model.scale.set(0, 0, 0);
    playInitialAnimation();
    animate();
  },
  undefined,
  function (error) {
    console.error("An error occurred loading josta.glb:", error);
  }
);

// Load the globe model (globe.glb) with texture
loader.load(
  "./assets/globe.glb",
  function (gltf) {
    globe = gltf.scene;

    const globeTexture = textureLoader.load("./assets/globe_texture.jpeg");
    globe.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.material.map = globeTexture; // Apply texture
      }
    });

    // Position the globe and add to the scene
    globe.position.set(0, -2, -5);
    globe.scale.set(1, 1, 1); // Adjust the scale as needed
    scene.add(globe);
  },
  undefined,
  function (error) {
    console.error("An error occurred loading globe.glb:", error);
  }
);

// 6. Initial Animation
function playInitialAnimation() {
  if (model) {
    gsap.to(model.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  }
}

// 7. Animation Loop
function animate() {
  if (model) {
    model.rotation.y += 0.01;
  }
  if (globe) {
    globe.rotation.y += 0.005; // Rotate the globe more slowly
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

// 8. Resize Handler
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 9. Lenis Scroll Integration
lenis.on("scroll", ({ scroll }) => {
  if (model) {
    model.rotation.x = scroll / 500;
  }
  if (globe) {
    globe.rotation.x = scroll / 1000; // Slight interaction with scroll
  }
});
