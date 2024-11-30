<script>
  import '../styles/layout.css'; // Adjust the path as necessary
</script>

<div>
  <header>
    <nav>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <p>&copy; 2023 Your Name</p>
  </footer>
</div>