function rent() {
    var a = document.getElementById("user").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("password").value;
    var d = document.getElementById("know").value;
    var e = document.getElementById("address").value;
  }
  var f = document.getElementById("favorite").value;
  
  if (a == "") {
    alert("Enter user name");
    return false;
  }
  
  if (b == "") {
    alert("Enter E-mail");
    return false;
  }
  
  if (c == "") {
    alert("Enter Your password");
    return false;
  }
  
  if (d == "") {
    alert("Enter Your opinion");
    return false;
  }
  
  if (e == "") {
    alert("Enter your address");
    return false;
  }
  
  if (f == "") {
    alert("Enter favorite website");
    return false;
  }
  
  alert("Your all information are valid");
  return true;
  