import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Bloom from "./bloom";
import * as THREE from "three";

import styles from "./cube.module.scss";

function Box(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const [state] = useState(() => ({
    positionY: 0.0,
    velocityY: 0.0,
    gravity: 0.3,
    onGround: false,
    rotationVelocity: 0.0,
    rotationBase: 0.01,
    rotationSlowdown: 0.01,
  }));

  const [color, setColor] = useState("#ffffff");

  const startJump = () =>
    state.onGround && ((state.velocityY = -12.0), (state.onGround = false));
  const endJump = () => state.velocityY < -6.0 && (state.velocityY = -6.0);

  const getColor = () => {
    let R = Math.floor(Math.random() * 127 + 127);
    let G = Math.floor(Math.random() * 127 + 127);
    let B = Math.floor(Math.random() * 127 + 127);

    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}`;
  };

  useFrame((_, delta) => {
    ref.current.rotation.x = 0.4;
    ref.current.rotation.y += state.rotationBase + state.rotationVelocity;
    state.rotationVelocity -= state.rotationSlowdown;

    if (state.rotationVelocity < state.rotationBase) {
      state.rotationVelocity = 0;
    }

    state.velocityY += state.gravity;
    state.positionY -= state.velocityY;
    if (state.positionY < 0) {
      state.positionY = 0;
      state.velocityY = 0.0;
      state.onGround = true;
    }
    ref.current.position.y = state.positionY / 500;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={(event) => {
        state.rotationVelocity = 0.1;
        setColor(getColor());
      }}
      onPointerEnter={(event) => {
        startJump();
        endJump();
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Cube() {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{ zoom: 25, position: [0, 0, 100] }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ReinhardToneMapping;
        }}
      >
        <Bloom>
          <pointLight position={[10, 1, 10]} intensity={0.1} color="#ffffff" />
          <ambientLight intensity={0.1} color="#ffffff" />
          <Box position={[0, 0, 0]} />
        </Bloom>
      </Canvas>
    </div>
  );
}
