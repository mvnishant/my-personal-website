function toggleTheme() {
    document.body.classList.toggle("light");
    const icon = document.getElementById("themeIcon");
    if (document.body.classList.contains("light")) {
        icon.src = "./assets/images/theme-light-icon.png";
    } else {
        icon.src = "./assets/images/theme-dark-icon.png";
    }
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
function handleReveal() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            el.classList.add("visible");
        }
    });
}

// Force reveal on load for bottom section
window.addEventListener("load", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        el.classList.add("visible");
    });
});

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);
