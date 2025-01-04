<script>
    import { fade } from 'svelte/transition';
    
</script>

<style lang="scss">
    @use '../../styles/sidebar.scss' as *;
</style>

<div class="sidebar" in:fade>
    <div class="profile">
      <img src="" alt="" />
      <h3>Ankit</h3>
    </div>
  
    <div class="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  
    <div class="skills">
      <div>
        <i class="fas fa-pen"></i>
        Content Writer
      </div>
      <div>
        <i class="fas fa-robot"></i>
        AI Framework and ChatBot Developer
      </div>
      <div>
        <i class="fas fa-code"></i>
        Full-Stack Developer
      </div>
    </div>
  
    <div class="info">
      <div>
        Email: <a href="mailto:ankitkosankarfreelance@example.com">ankitkosankarfreelance@example.com</a>
      </div>
      <div>
        Place: India
      </div>
    </div>
  
    <a href="/path/to/resume.pdf" class="resume-btn" download>
      Download Resume
    </a>
  </div>
