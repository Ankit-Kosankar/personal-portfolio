<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	const starCount = 5000;
	let stars: THREE.Points;

	onMount(() => {
		const positions = new Float32Array(starCount * 3);
		const sizes = new Float32Array(starCount);

		for (let i = 0; i < starCount; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 2000;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
			sizes[i] = Math.random() * 2;
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

		const material = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 2,
			sizeAttenuation: true
		});

		stars = new THREE.Points(geometry, material);
	});
</script>

{#if stars}
	<T is={stars} />
{/if}