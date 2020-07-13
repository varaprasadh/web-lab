window.onload = () => {
    const windowHeight = window.innerHeight;
    const progressBar = document.querySelector(".bar");

    function updatePageProgress() {
        let dy = window.scrollY + windowHeight;
        let scrollHeight = document.documentElement.scrollHeight
        progressBar.style.width = `${(dy/scrollHeight)*100}%`;
    }
    updatePageProgress();
    document.addEventListener('scroll', debounce(updatePageProgress, 16));
}
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

