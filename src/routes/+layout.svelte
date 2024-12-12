<script>
  import '../styles/layout.css'; // Adjust the path as necessary
  import '../styles/navbar.css';
  import logo from '../lib/assets/images/skull.svg';
	import '../app.css';
	import StarryNight from '$lib/components/space/StarryNight.svelte';
</script>

<div class="app">
<StarryNight />
</div>
<div class="website-container">
  <div class="nav-container">
    <header>
      <div class="logo">
        <img  class="logo-img" src={logo} alt="Logo"> <!-- Replace with actual logo path -->
    </div>
      <nav class="nav-bar">
          <li><a class="nav-link" href="about">About</a></li>
          <li><a class="nav-link" href="blog">Blog</a></li>
          <li><a class="nav-link" href="resume">Resume</a></li>
          <li><a class="nav-link" href="projects">Projects</a></li>
          <li><a class="nav-link" href="contact-me">Contact-Me</a></li>
      </nav>
    </header>
  </div>

  <div class="content-container">
    <div class="main-container">
      <main>
        <slot />  
      </main>
    </div>
    
    <div class="footer-container">
      <footer>
        <p>&copy; 2023 Your Name</p>
      </footer>
    </div>
  </div>
</div>
