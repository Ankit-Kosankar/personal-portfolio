<script>
  import '../styles/home.css'; // Adjust the path as necessary
  import profileImage from '../lib/assets/images/profile-pic.svg.svg'
</script>

<div class="profile-container">
  <div class="profile-text">
      <h1>Hi, I'm Ankit Kosankar, A Software Engineer and AI/ML Enthusiast.</h1>
      <p>With a strong background in software development and </p>
      <p>keen interest in artificial intelligence and machine learning, </p> 
      <p>I thrive on solving complex problems and creating innovative solutions.</p>
      <p>My experience includes working with various </p> 
      <p>programming languages and AI frameworks.</p>

      <div class="button-container">
        <a href="/contact" class="btn primary-btn">Talk to Me</a>
        <a href="/projects" class="btn secondary-btn">See My Work</a>
      </div>
  </div>
  <div class="profile-image">
      <img src={profileImage} alt="Ankit Kosankar" />
  </div>
</div>