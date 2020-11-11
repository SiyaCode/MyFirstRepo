function loginDe() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username == "sibonga") && (password == "xulu")) {
        window.open("index.html")
            //alert("Yizo");

    } else if (username != "sibonga") {
        alert("Incorrect Username");
    } else if (password != "xulu") {
        alert("Incorrect Password");
    } else {
        alert("Incorrect Login Details")
    }

}

function projectDe() {
    window.open("project.html");
}