const regex = /username=([^&]+)/;
const match = window.document.URL.match(regex);
const username = match ? match[1] : null;

document.getElementById("welcomeHeader").innerText = `Welcome ${username}`;