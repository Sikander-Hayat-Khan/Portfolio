// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved user preference, if any, on load of the website
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    // Save preference
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
});
