document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    const headerHtml = `
    <nav class="nav-fixed fixed w-full z-50" style="background: rgba(30, 30, 30, 0.98); backdrop-filter: blur(8px); height: 4rem;">
        <div class="container mx-auto px-4 h-full">
            <div class="flex justify-between items-center h-full">
                <!-- Logo -->
                <a href="${window.jekyllPaths.root}/" class="flex items-center">
                    <img src="${window.jekyllPaths.root}/Salvium_assets/wordmark_logo/white/solid/salvium_wordmark_white_512x512px_solid.png" alt="Salvium Logo" class="h-8 w-auto opacity-100">
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <!-- Get Started Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button font-josefin" style="color: #40E0D0">
                            Get Started
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="${window.jekyllPaths.root}exchanges.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Exchanges</a>
                                <a href="${window.jekyllPaths.root}about.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">About</a>
                                <a href="${window.jekyllPaths.root}papers.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Lite Paper</a>
                                <a href="${window.jekyllPaths.root}download.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Downloads</a>
                            </div>
                        </div>
                    </div>

                    <!-- Knowledge Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button font-josefin" style="color: #40E0D0">
                            Knowledge
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="${window.jekyllPaths.root}blog" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Blog</a>
                                <a href="${window.jekyllPaths.root}faq.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">FAQ</a>
                                <a href="${window.jekyllPaths.root}docs.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Documentation</a>
                            </div>
                        </div>
                    </div>

                    <!-- Get Involved Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button font-josefin" style="color: #40E0D0">
                            Get Involved
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="${window.jekyllPaths.root}community.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Community</a>
                                <a href="${window.jekyllPaths.root}contribute.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Contribute</a>
                                <a href="${window.jekyllPaths.root}mining.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Mining</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button class="mobile-menu-button p-2 focus:outline-none" style="color: #40E0D0">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu hidden md:hidden pb-4">
                <div class="flex flex-col space-y-2">
                    <!-- Get Started Section -->
                    <div class="mobile-dropdown">
                        <button class="mobile-dropdown-button w-full text-left px-4 py-2 font-josefin" style="color: #40E0D0">
                            Get Started
                            <svg class="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="mobile-dropdown-menu hidden pl-4">
                            <a href="${window.jekyllPaths.root}exchanges.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Exchanges</a>
                            <a href="${window.jekyllPaths.root}about.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">About</a>
                            <a href="${window.jekyllPaths.root}papers.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Lite Paper</a>
                            <a href="${window.jekyllPaths.root}download.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Downloads</a>
                        </div>
                    </div>

                    <!-- Knowledge Section -->
                    <div class="mobile-dropdown">
                        <button class="mobile-dropdown-button w-full text-left px-4 py-2 font-josefin" style="color: #40E0D0">
                            Knowledge
                            <svg class="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="mobile-dropdown-menu hidden pl-4">
                            <a href="${window.jekyllPaths.root}blog" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Blog</a>
                            <a href="${window.jekyllPaths.root}faq.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">FAQ</a>
                            <a href="${window.jekyllPaths.root}docs.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Documentation</a>
                        </div>
                    </div>

                    <!-- Get Involved Section -->
                    <div class="mobile-dropdown">
                        <button class="mobile-dropdown-button w-full text-left px-4 py-2 font-josefin" style="color: #40E0D0">
                            Get Involved
                            <svg class="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="mobile-dropdown-menu hidden pl-4">
                            <a href="${window.jekyllPaths.root}community.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Community</a>
                            <a href="${window.jekyllPaths.root}contribute.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Contribute</a>
                            <a href="${window.jekyllPaths.root}mining.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Mining</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;

    // Insert the header HTML
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Initialize dropdowns after header is inserted
    console.log('Initializing dropdowns');
    initializeDropdowns();
});

// Function to initialize dropdowns
function initializeDropdowns() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    console.log('Found dropdown buttons:', dropdownButtons.length);
    console.log('Found dropdown menus:', dropdownMenus.length);

    // Handle dropdown toggles
    dropdownButtons.forEach((button, index) => {
        console.log('Adding click listener to button:', index);
        button.addEventListener('click', (e) => {
            console.log('Button clicked:', index);
            e.stopPropagation();
            dropdownMenus[index].classList.toggle('hidden');
            
            // Close other dropdowns
            dropdownMenus.forEach((menu, i) => {
                if (i !== index) {
                    menu.classList.add('hidden');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        console.log('Document clicked, closing dropdowns');
        dropdownMenus.forEach(menu => {
            menu.classList.add('hidden');
        });
    });

    // Prevent dropdown menu clicks from closing the menu
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            console.log('Menu clicked, stopping propagation');
            e.stopPropagation();
        });
    });
}