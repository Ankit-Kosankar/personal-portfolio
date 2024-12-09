<script lang="ts">
    import { T, useThrelte, useRender} from '@threlte/core';
    import { PerspectiveCamera, Points, PointsMaterial, BufferGeometry, BufferAttribute } from 'three';
  
    let renderStage: 'render' | 'other';

    // Star configuration
    export let starCount = 10000;
    export let starFieldSize = 1000;
    export let starSize = 0.5;
  
    let starField: Points;
  
    // Generate star positions and colors
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
  
    // Populate star data
    for (let i = 0; i < starCount; i++) {
      // Random positions within a large cube
      positions[i * 3] = (Math.random() - 0.5) * starFieldSize;
      positions[i * 3 + 1] = (Math.random() - 0.5) * starFieldSize;
      positions[i * 3 + 2] = (Math.random() - 0.5) * starFieldSize;
  
      // Star colors - mostly white/blue with variation
      const hue = 0.6 + Math.random() * 0.2;
      const saturation = 0.5;
      const lightness = 0.7 + Math.random() * 0.3;
  
      colors[i * 3] = Math.cos(hue * Math.PI * 2) * saturation * lightness + lightness;
      colors[i * 3 + 1] = Math.cos((hue + 2/3) * Math.PI * 2) * saturation * lightness + lightness;
      colors[i * 3 + 2] = Math.cos((hue + 4/3) * Math.PI * 2) * saturation * lightness + lightness;
    }
  
    // Create geometry
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    geometry.setAttribute('color', new BufferAttribute(colors, 3));
  
    // Create material
    const material = new PointsMaterial({
      size: starSize,
      vertexColors: true,
      blending: 2, // AdditiveBlending
      transparent: true,
      opacity: 0.8
    });
  
    // Animation function
    function animateStars(delta: number) {
      if (starField) {
        starField.rotation.x += 0.0005;
        starField.rotation.y += 0.0005;
      }
    }
  </script>
  
  <!-- <T.Group>
    <T.Points 
      geometry={geometry} 
      material={material} 
      bind:ref={starField}
    >
      {#if renderStage === 'render'}m
        <!-- Optional: add any render-stage specific logic -->
      <!-- {/if} 
      </T.Points>
  </T.Group> -->