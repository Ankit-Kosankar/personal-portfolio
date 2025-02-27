<script>
  import { fade } from 'svelte/transition';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import myImage from '$lib/assets/images/social-image.png';
  import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<style lang="scss">
  @use '../../styles/sidebar.scss' as *;

  .sidebar {
    // background-color: #1e3a8a;
    // color: #ffffff;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .sidebar:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  .profile {
    text-align: center;
    margin-bottom: 20px;
  }

  .profile img {
    border-radius: 50%;
    border: 4px solid #1958c0;
    width: 100px;
    height: 100px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .profile img:hover {
    transform: scale(1.1);
  }

  .profile h3 {
    margin-top: 10px;
    font-size: 1.5rem;
    color: #60a5fa;
  }

  .social-links {
    margin: 20px 0;
  }

  .social-icons {
    display: flex;
    justify-content: space-around;
  }

  .social-link {
    color: #60a5fa;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .social-link:hover {
    color: #ffffff;
    transform: scale(1.2);
  }

  .skills {
    margin: 20px 0;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
  }

  .skills div {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 3px solid #fadeeb;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    color: black;
  }

  .skills div:hover {
    background-color: #3b82f6;
    transform: translateX(5px);
  }

  .skills i {
    color: #ffffff;
  }

  .info {
    margin: 20px 0;
    font-size: 0.9rem;
  }

  .info a {
    color: #60a5fa;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .info a:hover {
    color: #ffffff;
  }

  .resume-btn {
    display: inline-block;
    background-color: #3b82f6;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .resume-btn:hover {
    background-color: #60a5fa;
    transform: translateY(-3px);
  }
</style>

<div class="sidebar" in:fade>
  <div class="profile">
    <img src={myImage} alt="" />
    <h3>Ankit R Kosankar</h3>
  </div>

  <div class="social-links">
    <div class="social-icons">
      {#each [
        { name: 'Facebook', icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z', link: 'https://facebook.com' },
        { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', link: 'https://twitter.com' },
        { name: 'LinkedIn', icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.549-7.593-10.018-3.714v-2.155z', link: 'https://linkedin.com' },
        { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.072 1.689-.072 4.948 0 3.259.013 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.667-.072-4.947-.197-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.646 1.439-1.441s-.644-1.44-1.439-1.44z', link: 'https://instagram.com' }
      ] as socialLink}
        <a 
          href={socialLink.link} 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link"
          in:scale={{ duration: 300, easing: quintOut }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            class="transform transition-transform duration-300 hover:scale-125"
          >
            <path d={socialLink.icon} />
          </svg>
        </a>
      {/each}
    </div>
  </div>

  <div>
    <h3>
    <i style= "color:black; padding: 10px;">
      Services I offer
    </i>
  </h3>
  </div>
  <div class="skills">
    <div style="border: 3px solid #0b9b8a;">
      <i style= "background-color: #0b9b8a; padding: 10px;" class="fas fa-pen"></i>
      Content Writer
    </div>
    <div style="border: 3px solid #f596a1;">
      <i style= "background-color: #f596a1; padding: 10px;" class="fas fa-robot"></i>
      AI Framework and ChatBot Developer
    </div>
    <div style="border: 3px solid #f9c975;">
      <i style= "background-color: #f9c975; padding: 10px;" class="fas fa-code"></i>
      Full-Stack Developer
    </div>
  </div>

  <div class="info">
    <div>
      Email: <a href="mailto:ankitkosankarfreelance@example.com">
        <span>ankitkosankarfreelance@example.com</span>
      </a>
    </div>
    <div>
      Place: India
    </div>
  </div>

  <a href="/path/to/resume.pdf" class="resume-btn" download>
    Download Resume
  </a>
</div>


<!-- <script>
  import { fade } from 'svelte/transition';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import myImage from '$lib/assets/images/social-image.png';
  import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<style lang="scss">
    @use '../../styles/sidebar.scss' as *;
    // @use '@fortawesome/fontawesome-free/css/all.min.css';
</style>

<div class="sidebar" in:fade>
    <div class="profile">
      <img src={myImage} alt="" />
      <h3>Ankit</h3>
    </div>
  
    <div class="social-links">
      <div class="social-icons">
        {#each [
          { name: 'Facebook', icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z', link: 'https://facebook.com' },
          { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', link: 'https://twitter.com' },
          { name: 'LinkedIn', icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.549-7.593-10.018-3.714v-2.155z', link: 'https://linkedin.com' },
          { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.072 1.689-.072 4.948 0 3.259.013 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.667-.072-4.947-.197-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.646 1.439-1.441s-.644-1.44-1.439-1.44z', link: 'https://instagram.com' }
        ] as socialLink}
          <a 
            href={socialLink.link} 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link"
            in:scale={{ duration: 300, easing: quintOut }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              class="transform transition-transform duration-300 hover:scale-125"
            >
              <path d={socialLink.icon} />
            </svg>
          </a>
        {/each}
      </div>
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
        Email: <a href="mailto:ankitkosankarfreelance@example.com">
          <span>ankitkosankarfreelance@example.com</span>
        </a>
      </div>
      <div>
        Place: India
      </div>
    </div>
  
    <a href="/path/to/resume.pdf" class="resume-btn" download>
      Download Resume
    </a>
  </div> -->
