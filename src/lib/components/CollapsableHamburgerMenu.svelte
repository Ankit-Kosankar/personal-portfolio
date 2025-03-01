<nav class="relative bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-gray-900">Brand</span>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex items-center">
          <button id="menu-toggle" class="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-50">
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger icon -->
            <svg id="hamburger-icon" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close icon -->
            <svg id="close-icon" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <div id="mobile-menu" class="fixed top-0 right-0 w-3/4 h-1/2 bg-black bg-opacity-80 transform translate-x-full transition-transform duration-300 ease-in-out z-40 overflow-y-auto rounded-bl-lg shadow-lg">
      <div class="pt-20 pb-6 px-4 space-y-6">
        <div class="grid gap-6">
          <a href="#" class="text-white hover:text-indigo-200 text-lg font-medium transition duration-150 ease-in-out transform hover:translate-x-2">
            Home
          </a>
          <a href="#" class="text-white hover:text-indigo-200 text-lg font-medium transition duration-150 ease-in-out transform hover:translate-x-2">
            About
          </a>
          <a href="#" class="text-white hover:text-indigo-200 text-lg font-medium transition duration-150 ease-in-out transform hover:translate-x-2">
            Blog
          </a>
          <a href="#" class="text-white hover:text-indigo-200 text-lg font-medium transition duration-150 ease-in-out transform hover:translate-x-2">
            Projects
          </a>
          <a href="#" class="text-white hover:text-indigo-200 text-lg font-medium transition duration-150 ease-in-out transform hover:translate-x-2 bg-indigo-700 px-4 py-2 rounded-md text-center">
            Inquire Now
          </a>
        </div>
      </div>
    </div>

    <!-- Overlay for closing menu by clicking outside -->
    <div id="overlay" class="fixed inset-0 bg-black bg-opacity-25 hidden transition-opacity duration-300 ease-in-out z-30"></div>
  </nav>

  <!-- Page Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-2xl font-bold text-gray-900">Welcome to our website</h1>
    <p class="mt-4 text-gray-600">This is a responsive layout with a hamburger menu for mobile view.</p>
  </div>