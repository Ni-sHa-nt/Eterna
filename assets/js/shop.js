// Our Products Section
const filterBtn = document.querySelector(".filter-btn");
const sidebar = document.querySelector(".side-bar");
const overlay = document.querySelector(".sidebar-overlay");
const closeBtn = document.querySelector(".close-sidebar");

filterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}