// /* eslint-disable no-unused-vars */
// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import { Canvas, extend, useFrame } from '@react-three/fiber';
// import { useTexture, Environment, Lightformer } from '@react-three/drei';
// import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// import lanyardImage from '../assets/lanyard.png';  // Mengimpor tekstur .png
// import cardModel from '../assets/Card.glb';

// import * as THREE from 'three';

// extend({ MeshLineGeometry, MeshLineMaterial });

// export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true }) {
//   return (
//     <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
//       <Canvas
//         camera={{ position: position, fov: fov }}
//         gl={{ alpha: transparent }}
//         onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
//       >
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[-5, 5, 5]} intensity={2} />
//         <Physics gravity={gravity} timeStep={1 / 60}>
//           <Band />
//         </Physics>
//         <Environment blur={0.75}>
//           <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
//           <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
//           <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
//           <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
//         </Environment>
//       </Canvas>
//     </div>
//   );
// }

// function Band({ maxSpeed = 50, minSpeed = 0 }) {
//   const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
//   const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
//   const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  
//   // Memuat tekstur lanyard dengan pengaturan kualitas tinggi
//   const texture = useTexture(lanyardImage);
//   texture.encoding = THREE.sRGBEncoding;
//   texture.minFilter = THREE.LinearFilter;
//   texture.magFilter = THREE.LinearFilter;
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  
//   const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
//   const [dragged, drag] = useState(false);
//   const [hovered, hover] = useState(false);
//   const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.50, 0]]);

//   useEffect(() => {
//     if (hovered) {
//       document.body.style.cursor = dragged ? 'grabbing' : 'grab';
//       return () => void (document.body.style.cursor = 'auto');
//     }
//   }, [hovered, dragged]);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmall(window.innerWidth < 1024);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useFrame((state, delta) => {
//     if (dragged) {
//       vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
//       dir.copy(vec).sub(state.camera.position).normalize();
//       vec.add(dir.multiplyScalar(state.camera.position.length()));
//       [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
//       card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
//     }
//     if (fixed.current) {
//       [j1, j2].forEach((ref) => {
//         if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
//         const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
//         ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
//       });
//       curve.points[0].copy(j3.current.translation());
//       curve.points[1].copy(j2.current.lerped);
//       curve.points[2].copy(j1.current.lerped);
//       curve.points[3].copy(fixed.current.translation());
//       band.current.geometry.setPoints(curve.getPoints(32));
//       ang.copy(card.current.angvel());
//       rot.copy(card.current.rotation());
//       card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });

//       // Animasi tambahan: rotasi card secara halus
//       card.current.rotation.y += 0.01;
//     }
//   });

//   curve.curveType = 'chordal';

//   return (
//     <>
//       <group position={[-3, 4, 0]}> {/* Geser lanyard ke kiri */}
//         <RigidBody ref={fixed} {...segmentProps} type="fixed" />
//         <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
//           <CuboidCollider args={[0.8, 1.125, 0.01]} />
//           <group
//             scale={5}
//             position={[0, -0.125, -0.05]} 
//             onPointerOver={() => hover(true)}
//             onPointerOut={() => hover(false)}
//             onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
//             onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
//             <mesh>
//               <boxGeometry args={[0.8, 1.125, 0.01]} />
//               <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0.15} roughness={0.9} metalness={0.8} />
//             </mesh>
//           </group>
//         </RigidBody>
//       </group>
//       <mesh ref={band}>
//         <meshLineGeometry />
//         <meshLineMaterial
//           color="white"
//           depthTest={false}
//           resolution={isSmall ? [1000, 2000] : [1000, 1000]}
//           useMap
//           map={texture}
//           repeat={[-4, 1]}
//           lineWidth={1}
//         />
//       </mesh>
//     </>
//   );
// }


// // 'use client';
// // import { useEffect, useRef, useState } from 'react';
// // import { Canvas, extend, useFrame } from '@react-three/fiber';
// // import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
// // import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// // import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// // import * as THREE from 'three';

// // // Import assets
// // import lanyardTexture from '../assets/Lanyard.png';
// // import cardModel from '../assets/Card.glb';

// // extend({ MeshLineGeometry, MeshLineMaterial });

// // export default function Lanyard({ position = [0, 5, 15], gravity = [0, -30, 0], fov = 25 }) {
// //   return (
// //     <div className="relative w-full h-screen">
// //       <Canvas
// //         camera={{ position, fov }}
// //         gl={{ alpha: true }}
// //         shadows
// //       >
// //         <ambientLight intensity={0.5} />
// //         <directionalLight
// //           position={[10, 10, 5]}
// //           intensity={1}
// //           castShadow
// //           shadow-mapSize-width={2048}
// //           shadow-mapSize-height={2048}
// //         />
// //         <Physics gravity={gravity} timeStep={1/60}>
// //           <Band />
// //         </Physics>
// //         <Environment preset="city" />
// //       </Canvas>
// //     </div>
// //   );
// // }

// // function Band() {
// //   const band = useRef();
// //   const fixed = useRef();
// //   const j1 = useRef();
// //   const j2 = useRef();
// //   const j3 = useRef();
// //   const card = useRef();
  
// //   // Load assets
// //   const { nodes, materials } = useGLTF(cardModel);
// //   const texture = useTexture(lanyardTexture.src);
// //   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
// //   texture.repeat.set(4, 1);

// //   const [curve] = useState(() => new THREE.CatmullRomCurve3(
// //     Array(4).fill().map(() => new THREE.Vector3())
// //   ));

// //   const [dragged, drag] = useState(false);
// //   const [hovered, hover] = useState(false);

// //   // Set up physics joints
// //   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.5]);
// //   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.5]);
// //   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.5]);
// //   useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

// //   useFrame((state) => {
// //     if (dragged) {
// //       const vec = new THREE.Vector3(state.pointer.x, state.pointer.y, 0.5)
// //         .unproject(state.camera);
// //       card.current?.setNextKinematicTranslation(vec);
// //     }

// //     if (fixed.current) {
// //       curve.points[0].copy(j3.current.translation());
// //       curve.points[1].copy(j2.current.translation());
// //       curve.points[2].copy(j1.current.translation());
// //       curve.points[3].copy(fixed.current.translation());
// //       band.current.geometry.setPoints(curve.getPoints(32));
// //     }
// //   });

// //   useEffect(() => {
// //     if (hovered) {
// //       document.body.style.cursor = dragged ? 'grabbing' : 'grab';
// //       return () => void (document.body.style.cursor = 'auto');
// //     }
// //   }, [hovered, dragged]);

// //   return (
// //     <group position={[0, 5, 0]}>
// //       {/* Anchor point */}
// //       <RigidBody ref={fixed} type="fixed" colliders={false}>
// //         <BallCollider args={[0.2]} />
// //       </RigidBody>

// //       {/* Joints */}
// //       <RigidBody ref={j1} colliders={false}>
// //         <BallCollider args={[0.15]} />
// //       </RigidBody>
// //       <RigidBody ref={j2} colliders={false}>
// //         <BallCollider args={[0.15]} />
// //       </RigidBody>
// //       <RigidBody ref={j3} colliders={false}>
// //         <BallCollider args={[0.15]} />
// //       </RigidBody>

// //       {/* Lanyard line */}
// //       <mesh ref={band}>
// //         <meshLineGeometry />
// //         <meshLineMaterial
// //           map={texture}
// //           useMap
// //           lineWidth={0.3}
// //           color="#ffffff"
// //           transparent
// //           opacity={0.9}
// //           dashArray={0.05}
// //           dashRatio={0.9}
// //         />
// //       </mesh>

// //       {/* ID Card */}
// //       <RigidBody 
// //         ref={card} 
// //         type={dragged ? 'kinematicPosition' : 'dynamic'}
// //         colliders={false}
// //         position={[0, -3, 0]}
// //       >
// //         <CuboidCollider args={[0.8, 1.1, 0.01]} />
// //         <group
// //           onPointerOver={() => hover(true)}
// //           onPointerOut={() => hover(false)}
// //           onPointerDown={() => drag(true)}
// //           onPointerUp={() => drag(false)}
// //         >
// //           {/* Card model from GLB */}
// //           <mesh geometry={nodes.card.geometry}>
// //             <meshPhysicalMaterial 
// //               map={materials.base.map} 
// //               map-anisotropy={16} 
// //               clearcoat={1} 
// //               clearcoatRoughness={0.15} 
// //               roughness={0.9} 
// //               metalness={0.8} 
// //             />
// //           </mesh>
// //           <mesh geometry={nodes.clip.geometry} material={materials.metal} />
// //           <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
// //         </group>
// //       </RigidBody>
// //     </group>
// //   );
// // }