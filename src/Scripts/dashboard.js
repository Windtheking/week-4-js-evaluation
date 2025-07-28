if (localStorage.getItem("Useremail") === null) {
    window.location.href = "http://127.0.0.1:5500/src/pages/practice_login.html"
}

document.getElementById("logoutBtn").addEventListener("click", () =>{
    localStorage.removeItem("Useremail")
    window.location.href = "http://127.0.0.1:5500/src/pages/practice_login.html"
});

document.getElementById("welcomeMessage")
