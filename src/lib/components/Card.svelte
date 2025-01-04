<script>
	// Optional: Add any script logic you might need
	export let projectImage = '/placeholder-image.jpg';
	export let projectName = 'Project Name';
	export let projectDescription = 'Project description goes here...';
</script>

<style lang="scss">
    @use '../../styles/card.scss' as *;
</style>

<div class="project-card">
	<div class="card-inner">
		<div class="image-container">
			<img src={projectImage} alt={projectName} />
		</div>
		<div class="project-info">
			<div class="project-name">{projectName}</div>
			<div class="project-description">{projectDescription}</div>
		</div>
	</div>
</div>