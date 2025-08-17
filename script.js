const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if(username === "wildan") {
    message.textContent = "Halo, " + username + "! Login berhasil.";
    message.style.color = "green";
  } else {
    message.textContent = "Username tidak ditemukan.";
    message.style.color = "red";
  }
});
