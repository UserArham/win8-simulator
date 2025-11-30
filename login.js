const users = [
    { username: "Admin", password: "1234", icon: "https://picsum.photos/200" }
];

function showLogin() {
    document.getElementById("login-screen").classList.remove("hidden");
}

function attemptLogin() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    const user = users.find(x => x.username === u && x.password === p);

    if (user) {
        document.getElementById("login-screen").classList.add("hidden");
        unlock(); // go to start screen
    } else {
        alert("Wrong password!");
    }
}
