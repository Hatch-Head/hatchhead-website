import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Layout } from "../components/layout";
import { useRef, useState, type Ref } from "react";
import { Physics, useSphere } from "@react-three/cannon";
import { useScroll, useSpring, useTransform, cubicBezier } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Float } from "@react-three/drei";

const SIZE = 0.6;

const sphereGeometry = new THREE.SphereGeometry(SIZE, 32, 32);
const rfs = THREE.MathUtils.randFloatSpread;

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  qty = 3 * 3 * 3,
}) {
  const containerRef = useRef();
  const { scrollYProgress, scrollY } = useScroll();
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 10, -10, 0],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  );

  const spring = useSpring(xPos, { damping: 50 });
  const color = "#1f1f1f";
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color(color),
    emissive: new THREE.Color(color),
    transparent: true,
    reflectivity: 0,
  });

  const white = new THREE.MeshPhongMaterial({
    color: new THREE.Color("#ffffff"),
    transparent: true,
  });

  const [isClicked, setIsClicked] = useState(false);

  const [ref, api] = useSphere(() => ({
    args: [SIZE],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));

  useFrame((state) => {
    for (let i = 0; i < qty; i++) {
      // Get current whereabouts of the instanced sphere
      //ref.current?..getMatrixAt(i, mat);
      // @ts-ignore
      ref.current.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.

      if (isClicked) {
        setIsClicked(false);
        api.at(i).applyImpulse(
          vec

            .setFromMatrixPosition(mat)
            .add(new THREE.Vector3(spring.get(), 0, 0))

            .normalize()
            .multiplyScalar(25)
            .toArray(),
          [0, 0, 0]
        );
      } else {
        api
          .at(i)
          .applyForce(
            vec
              .setFromMatrixPosition(mat)
              .add(new THREE.Vector3(spring.get(), 0, 0))
              .normalize()
              .multiplyScalar(-10)
              .toArray(),
            [0, 0, 0]
          );
      }
      if (isClicked) {
        setIsClicked(false);
      }
    }
  });

  return (
    <motion.mesh
      onClick={(e) => setIsClicked(true)}
      //position={[spring, 0, 0]}
      //animate={{ opacity: xPos }}
    >
      <instancedMesh
        // @ts-ignore
        ref={ref}
        castShadow
        receiveShadow
        args={[null, null, qty]}
        geometry={sphereGeometry}
        material={material}
      />
    </motion.mesh>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [SIZE * 3],
    position: [0, 0, 0],
  }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  );
}

type Props = {
  anchor1: Ref<HTMLElement>;
};

const Scene = ({ anchor1 }: Props) => {
  const [physicsEnabled, setPhysicsEnabled] = useState(true);

  return (
    <Canvas
      style={{ zIndex: 0, position: "fixed", top: 0, height: "100vh" }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
    >
      <ambientLight intensity={2} />
      <directionalLight
        position={[-10, 10, 5]}
        shadow-mapSize={[256, 256]}
        shadow-bias={-0.0001}
        castShadow
        color={"#ffffff"}
        intensity={1}
      />

      <directionalLight
        position={[20, -10, 5]}
        shadow-mapSize={[256, 256]}
        shadow-bias={-0.0001}
        castShadow
        color={"#ffffff"}
        intensity={2}
      />

      <Physics gravity={[0, 0, 0]} iterations={10} isPaused={!physicsEnabled}>
        <Clump anchor1={anchor1} />
        <Pointer />
        <Float floatIntensity={1} rotationIntensity={0.1} speed={2}></Float>
      </Physics>
      {/* <SphereHalf /> */}
    </Canvas>
  );
};

export default function Home() {
  const anchor1 = useRef<HTMLElement>();

  return (
    <Layout>
      <div className="flex flex-col w-screen h-screen justify-center items-center text-neutral-50 dark:text-white p-12 ">
        <h1 className="text-center font-bold text-4xl md:text-5xl z-10 mix-blend-exclusion pointer-events-none">
          404
        </h1>
        <p className="text-lg text-center mix-blend-exclusion">
          The page you are looking for does not exist
        </p>
        <Scene anchor1={anchor1} />
      </div>
    </Layout>
  );
}
