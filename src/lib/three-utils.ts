
import * as THREE from 'three';

// Create a floating particle system
export const createParticleSystem = (count: number = 300, size: number = 0.05, color: string = '#0AEFFF') => {
  const particleGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({
    color: new THREE.Color(color),
    size,
    transparent: true,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const particlesCount = count;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(particleGeometry, particlesMaterial);
  
  return particles;
};

// Create a glowing digital grid
export const createDigitalGrid = (size: number = 10, divisions: number = 10, color: string = '#0AEFFF', opacity: number = 0.2) => {
  const gridHelper = new THREE.GridHelper(size, divisions, new THREE.Color(color), new THREE.Color(color));
  const material = gridHelper.material as THREE.Material;
  
  if (material instanceof THREE.Material) {
    material.opacity = opacity;
    material.transparent = true;
  } else if (Array.isArray(material)) {
    material.forEach(mat => {
      mat.opacity = opacity;
      mat.transparent = true;
    });
  }
  
  gridHelper.position.y = -2;
  
  return gridHelper;
};

// Create glowing wireframe cube
export const createWireframeCube = (size: number = 4, color: string = '#9E00FF') => {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const edges = new THREE.EdgesGeometry(geometry);
  const material = new THREE.LineBasicMaterial({ 
    color: new THREE.Color(color),
    transparent: true,
    opacity: 0.7,
  });
  
  const wireframe = new THREE.LineSegments(edges, material);
  
  return wireframe;
};

// Update particle positions to create subtle animation
export const animateParticles = (particles: THREE.Points, deltaTime: number) => {
  const positions = particles.geometry.attributes.position.array as Float32Array;
  
  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] += Math.sin((i + Date.now() * 0.001) * 0.1) * 0.01;
  }
  
  particles.geometry.attributes.position.needsUpdate = true;
  
  // Rotate the whole system
  particles.rotation.y += deltaTime * 0.05;
};

// Create digital countdown display
export const createDigitalNumber = (digit: string, color: string = '#0AEFFF') => {
  const fontLoader = new THREE.FontLoader();
  
  return new Promise<THREE.Mesh>((resolve) => {
    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new THREE.TextGeometry(digit, {
          font: font,
          size: 1,
          height: 0.2,
        });
        
        const textMaterial = new THREE.MeshBasicMaterial({ 
          color: new THREE.Color(color),
          transparent: true,
          opacity: 0.9
        });
        
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textGeometry.computeBoundingBox();
        
        const centerOffset = -(textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x) / 2;
        textMesh.position.x = centerOffset;
        
        resolve(textMesh);
      }
    );
  });
};

// Create a simple shining light effect
export const createGlowingLight = (color: string = '#0AEFFF', intensity: number = 2, distance: number = 10) => {
  const light = new THREE.PointLight(new THREE.Color(color), intensity, distance);
  light.position.set(0, 2, 2);
  
  return light;
};
