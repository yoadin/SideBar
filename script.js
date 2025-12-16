const closeBtn = document.getElementById("closeSidebarBtn");
const openBtn = document.getElementById("openSidebarBtn");

closeBtn.addEventListener("click", () => {
    document.querySelector(".sidebar").style.right = "-250px";
});

openBtn.addEventListener("click", () => {
    document.querySelector(".sidebar").style.right = "0";
});


// Write JavaScript code here