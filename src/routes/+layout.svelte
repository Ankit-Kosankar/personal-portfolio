

<script lang="ts">
	import '../styles/layout.css'; // Adjust the path as necessary
	import '../styles/navbar.css';
	// import '../styles/sidbar.scss';
	import '../app.css';
	import SideBar from '$lib/components/SideBar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { onMount } from 'svelte';
  	let isMobileMenuOpen = false;
  
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function handleClickOutside(event:any) {
		if (isMobileMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.mobile-menu-button')) {
		isMobileMenuOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
		document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<!-- 
<div class="app">
	<div class="website-container grid-container">
		<div class="sidebar-container grid-sidebar">
			<SideBar></SideBar>
		</div>

		<div class="nav-container grid-navbar">
			<Header></Header>
		</div>

		<div class="content-container">
			<div class="main-container grid-main-container">
				<main>
					<slot />
				</main>
			</div>

			<div class="footer-container">
				<Footer></Footer>
			</div>
		</div>
	</div>
</div>
 -->

 <div class="header">
    <Header></Header>
  </div>
  
  <div class="sidebar">
    <SideBar></SideBar>
  </div>
  
  <div class="main-content">
    <slot />
  </div>

  <div class="footer">
    <Footer></Footer>
  </div>


  <!-- <div class="min-h-screen flex flex-col bg-[#e6e5ff]">
	<header class="bg-gray-800 text-white p-4 shadow-md z-20">
	  <div class="container mx-auto flex justify-between items-center">
		<div class="font-bold text-xl">Logo</div>
		
		<button 
		  class="md:hidden mobile-menu-button p-2 focus:outline-none"
		  on:click={toggleMobileMenu}
		  aria-label="Toggle mobile menu"
		>
		  {#if isMobileMenuOpen}
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		  {:else}
			
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		  {/if}
		</button>
		
		<nav class="hidden md:flex items-center space-x-4">
		  <a href="/" class="hover:text-blue-300 transition duration-200">Home</a>
		  <a href="/about" class="hover:text-blue-300 transition duration-200">About</a>
		  <a href="/blog" class="hover:text-blue-300 transition duration-200">Blog</a>
		  <a href="/contact" class="hover:text-blue-300 transition duration-200">Contact</a>
		</nav>
	  </div>
	</header>
  
	<div class="flex flex-1 relative">
	  <aside 
		class="bg-gray-800 text-white w-64 md:block fixed md:static inset-y-0 mt-16 md:mt-0 left-0 transform 
			   {isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
			   md:translate-x-0 transition-transform duration-300 ease-in-out z-10"
	  >
		<div class="p-4 overflow-y-auto h-full">
		  <SideBar />
		</div>
	  </aside>
  
	  
	  <main class="flex-1 p-4 md:p-6 w-full md:ml-0 transition-all duration-300">
		<div class="max-w-7xl mx-auto">
		  <slot />
		</div>
	  </main>
	</div>
  
	
	<footer class="bg-gray-800 text-white p-4 shadow-md">
	  <div class="container mx-auto">
		<Footer />
	  </div>
	</footer>
  </div> -->

<style>
</style>
