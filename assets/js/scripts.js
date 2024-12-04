const toggleTheme = document.getElementById("toggleTheme");

function changeTheme() {
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
};

toggleTheme.addEventListener("click", changeTheme);