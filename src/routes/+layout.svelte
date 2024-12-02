<script>
  import '../styles/layout.css'; // Adjust the path as necessary
  import '../styles/navbar.css';
  import logo from '../lib/assets/images/skull.svg';
</script>

<div class="container">

  <div class="nav-container">
    <header>
      <div class="logo">
        <img  class="logo-img" src={logo} alt="Logo"> <!-- Replace with actual logo path -->
    </div>
      <nav class="nav-bar">
          <li><a href="about">About</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="resume">Resume</a></li>
          <li><a href="projects">Projects</a></li>
          <li><a href="contact-me">Contact-Me</a></li>
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