// let easy = document.getElementById("easy").textContent;
// let medium = document.getElementById("medium").textContent;
// let strong = document.getElementById("strong").textContent;

function Generate() {
  let len = document.getElementById("passLen").value;
  let level = document.getElementById("level").value;
  let easyPass = "asdfghjklzxcvbnmpoiuytrewq";
  let mediumPass = "asdfghjklzxcvbnmpoiuytrewq1234567890";
  let strongPass = "asdfghjklzxcvbnmpoiuytrewq1234567890!@#$%&*():;/+-?";
  let password = "";

  if (level == "easy") {
    for (let i = 0; i < len; i++) {
      password = password + easyPass.charAt(Math.floor(Math.random() * easyPass.length));
        document.getElementById("passwordGeneration").innerHTML = password;

    }
  } else if (level == "medium") {
    for (let i = 0; i < len; i++) {
      password = password + mediumPass.charAt(Math.floor(Math.random() * mediumPass.length));
      document.getElementById("passwordGeneration").innerHTML = password;
    }
  } else if (level == "strong") {
    for (let i = 0; i < len; i++) {
      password = password + strongPass.charAt(Math.floor(Math.random() * strongPass.length));
     document.getElementById("passwordGeneration").innerHTML = password;

    }
  }
}

