
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createParticleSystem, createDigitalGrid, createWireframeCube, animateParticles, createGlowingLight } from '../lib/three-utils';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cubeRef = useRef<THREE.LineSegments | null>(null);
  
  // Set up Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;
    cameraRef.current = camera;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create and add particles
    const particles = createParticleSystem(500, 0.03, '#0AEFFF');
    scene.add(particles);
    particlesRef.current = particles;
    
    // Create and add wireframe cube
    const wireframeCube = createWireframeCube(8, '#9E00FF');
    scene.add(wireframeCube);
    cubeRef.current = wireframeCube;
    
    // Create and add grid
    const grid = createDigitalGrid(20, 20, '#FF3D98', 0.15);
    scene.add(grid);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    // Add point lights
    const blueLight = createGlowingLight('#0AEFFF', 1.5, 15);
    blueLight.position.set(5, 3, 2);
    scene.add(blueLight);
    
    const purpleLight = createGlowingLight('#9E00FF', 1.5, 15);
    purpleLight.position.set(-5, -3, 3);
    scene.add(purpleLight);
    
    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    let lastTime = 0;
    const animate = (time: number) => {
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;
      
      // Animate particles
      if (particlesRef.current) {
        animateParticles(particlesRef.current, deltaTime);
      }
      
      // Animate cube based on mouse position
      if (cubeRef.current) {
        cubeRef.current.rotation.x += deltaTime * 0.1;
        cubeRef.current.rotation.y += deltaTime * 0.15;
        
        // Subtle mouse follow effect
        cubeRef.current.rotation.x += mousePosition.current.y * 0.01;
        cubeRef.current.rotation.y += mousePosition.current.x * 0.01;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      frameIdRef.current = requestAnimationFrame(animate);
    };
    
    frameIdRef.current = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className={`w-full h-full ${className || ''}`} />;
};

export default ThreeScene;
