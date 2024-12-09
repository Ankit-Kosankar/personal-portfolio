<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	const particleCount = 50000;
	let galaxy: THREE.Points;

	onMount(() => {
		const positions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);

		const colorInside = new THREE.Color('#ff6030');
		const colorOutside = new THREE.Color('#1b3984');

		for (let i = 0; i < particleCount; i++) {
			const radius = Math.random() * 4 + 0.8;
			const spinAngle = radius * 5;
			const branchAngle = ((i % 3) / 3) * Math.PI * 2;

			const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
			const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
			const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;

			positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
			positions[i * 3 + 1] = randomY;
			positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

			const mixedColor = colorInside.clone();
			mixedColor.lerp(colorOutside, radius / 4);

			colors[i * 3] = mixedColor.r;
			colors[i * 3 + 1] = mixedColor.g;
			colors[i * 3 + 2] = mixedColor.b;
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 0.1,
			sizeAttenuation: true,
			vertexColors: true,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});

		galaxy = new THREE.Points(geometry, material);
		galaxy.rotation.x = Math.PI * 0.2;
	});
</script>

{#if galaxy}
	<T is={galaxy} />
{/if}