export default function setActiveNav() {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop(); // Lấy phần cuối của URL
  links.forEach(link => {
    const ss = link.getAttribute('href').split('/').pop();
    if (ss === currentPath) {
      link.classList.add('bg-white');
    }
  });
}
