<script lang="ts">

	import '../../styles/navbar.css';
    import '../../styles/sidebar.scss';
    import '../../styles/layout.css';
    import '../../app.css';
    import '../styles/header.css';
	

	let activePage = 'home';

	const navigate = (page: string) => {
		activePage = page;
	
	};

	let isNavbarActive = false;

	const toggleNavbar = () => {
		isNavbarActive = !isNavbarActive;
		const navBar = document.querySelector('.nav-bar');
		if (navBar) {
			navBar.classList.toggle('active', isNavbarActive);
		}
	};

//   // Active page tracking
//   export let activePage = 'home';
  
//   // Navigation function
//   const navigate = (page) => {
//     activePage = page;
//   };
  
  // Mobile menu state
  let isMenuOpen = false;
  
  // Toggle mobile menu function
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

</script>


<header class=nav-bar>
    <div class="logo">Ankit.</div>
    <div class="hamburger" class:active={isMenuOpen} on:click={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="nav-bar-menu" class:active={isMenuOpen}>
        <li>
            <a
                class="nav-link {activePage === 'home' ? 'active' : ''}"
                href="/"
                on:click={() => navigate('home')}
            >
                <i class="fa-solid fa-house"></i> Home
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'about' ? 'active' : ''}"
                href="/about"
                on:click={() => navigate('about')}
            >
                <i class="fa-solid fa-user"></i> About
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'blog' ? 'active' : ''}"
                href="/blog"
                on:click={() => navigate('blog')}
            >
                <i class="fa-solid fa-blog"></i> Blog
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'projects' ? 'active' : ''}"
                href="/projects"
                on:click={() => navigate('projects')}
            >
                <i class="fa-solid fa-briefcase"></i> Projects
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'contactme' ? 'active' : ''}"
                href="/contactme"
                on:click|preventDefault={() => navigate('contactme')}
            >
                <i class="fa-solid fa-envelope"></i> Inquire Now
            </a>
        </li>
    </nav>
  </header>

  <!-- Header with hamburger menu 
<header>
    <div class="logo">Ankit.</div>
    <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav class="nav-bar">
        <li>
            <a
                class="nav-link {activePage === 'home' ? 'active' : ''}"
                href="/"
                on:click={() => navigate('home')}
            >
                <i class="fa-solid fa-house"></i> Home
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'about' ? 'active' : ''}"
                href="/about"
                on:click={() => navigate('about')}
            >
                <i class="fa-solid fa-user"></i> About
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'blog' ? 'active' : ''}"
                href="/blog"
                on:click={() => navigate('blog')}
            >
                <i class="fa-solid fa-blog"></i> Blog
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'projects' ? 'active' : ''}"
                href="/projects"
                on:click={() => navigate('projects')}
            >
                <i class="fa-solid fa-briefcase"></i> Projects
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'contactme' ? 'active' : ''}"
                href="/contactme"
                on:click|preventDefault={() => navigate('contactme')}
            >
                <i class="fa-solid fa-envelope"></i> Inquire Now
            </a>
        </li>
    </nav>
</header>
-->