<script>
    import { T } from '@threlte/core';
	import { Canvas } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import Stars from '../space/Stars.svelte';
	import Galaxy from './Galaxy.svelte';
</script>

<div class="scene-container">
	<Canvas>
		<T.PerspectiveCamera position={[0, 0, 15]} fov={75}>
			<OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
		</T.PerspectiveCamera>
		<Stars />
		<Galaxy />
	</Canvas>
</div>


<style>
	.scene-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
		background: #000;
	}
</style>