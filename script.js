const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }), 
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      message.textContent = data.message;
      message.style.color = "green";
    } else {
      message.textContent = data.message;
      message.style.color = "red";
    }
  })
  .catch((error) => {
    console.error("Error:", error);
    message.textContent = "Koneksi ke server gagal.";
    message.style.color = "red";
  });
});