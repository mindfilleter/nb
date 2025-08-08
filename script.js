
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const navToggleBtn = document.getElementById('nav-toggle');
    const tablesToggleBtn = document.getElementById('tables-toggle');
    const navMenu = document.getElementById('nav-menu');
    const tablesMenu = document.getElementById('tables-menu');

    const applyTheme = (theme) => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    };

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    const closeAllMenus = () => {
        navMenu.classList.remove('open');
        tablesMenu.classList.remove('open');
    };

    navToggleBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('open');
        closeAllMenus();
        if (!isOpen) navMenu.classList.add('open');
    });

    tablesToggleBtn.addEventListener('click', () => {
        const isOpen = tablesMenu.classList.contains('open');
        closeAllMenus();
        if (!isOpen) tablesMenu.classList.add('open');
    });

    const handleMenuClick = (e, menu) => {
        if (e.target.tagName === 'A') {
            menu.classList.remove('open');
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetPosition = targetElement.offsetTop - 20;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            e.preventDefault();
        }
    };

    navMenu.addEventListener('click', (e) => handleMenuClick(e, navMenu));
    tablesMenu.addEventListener('click', (e) => handleMenuClick(e, tablesMenu));
});
    