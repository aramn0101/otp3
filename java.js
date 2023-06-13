function sign() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  localStorage.setItem("name1", name);
  localStorage.setItem("eami1", email);
  localStorage.setItem("password1", password);
  localStorage.setItem("login", true);
}

function login() {
  var name1 = document.getElementById("name1").value;
  var password1 = document.getElementById("password1").value;

  var name2 = localStorage.getItem("name1");
  var password2 = localStorage.getItem("password1");
  if (name1 == name2 && password1 == password2) {
    window.location.href = "product.html";
  } else {
    alert("incorrect");
  }
}
