function ValidateEmail(inputText) {
    var mailformat = new RegExp("[a-z]+[0-9a-z_]+@(gmail|yahoo)\.com");
    if (inputText.value.match(mailformat)) {
      alert("Valid email address!");
      document.form1.text1.focus();
      return true;
    } else {
      alert("Invalid address!");
      document.form1.text1.focus();
      return false;
    }
  }
  