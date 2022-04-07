function phonenumber(inputtxt) {
    var phoneno = new RegExp("[^0-9]{10}");
    if (inputtxt.value.match(phoneno)) {
      alert("Valid mobile number");
      return true;
    } else {
      alert("Invalid mobile number");
      return false;
    }
  }
  