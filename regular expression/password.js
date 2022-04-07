function CheckPassword(inputtxt) {
    var paswd = /^[0-9]{8,20}$/;
    if (inputtxt.value.match(paswd)) {
      alert("Hurray! Welcome");
      return true;
    } else {
      alert("Invalid password");
      return false;
    }
  }
  