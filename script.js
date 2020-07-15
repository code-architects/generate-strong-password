function generatePassword() {
  let length = 8;
  let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`;
  chars = chars.replace('\n', " ").replace(" ", '');
  let password = "";
  let n = chars.length;
  for (var i = 0; i < length; ++i) {
      password += chars.charAt(Math.floor(Math.random() * n));
  }
  alert(password)
}