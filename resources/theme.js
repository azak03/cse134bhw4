let themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    let isDark = document.body.classList.contains("dark-mode");
    themeToggle.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("load", () => {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.classList.add("dark");
        themeToggle.textContent = "🌙";
    }
});
