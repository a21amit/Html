function openServer(evt, serverName) {
    // Get all elements with class "server-content" and hide them
    const serverContents = document.getElementsByClassName("server-content");
    for (const content of serverContents) {
        content.style.display = "none";
    }

    // Get all elements with class "tab" and remove the "active" class
    const tabs = document.getElementsByClassName("tab");
    for (const tab of tabs) {
        tab.classList.remove("active");
    }

    // Show the content of the selected server and add the "active" class to the tab
    document.getElementById(serverName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Set the default server to display when the page loads
document.getElementById("server1").style.display = "block";
document.querySelector(".tab").classList.add("active");

document.querySelectorAll("footer .rules p a").style.color = "red";