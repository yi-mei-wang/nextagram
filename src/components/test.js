let errorMsg = [
  "Email is already in use",
  "Username must be between 5 and 20 characters"
];

let n = Boolean(errorMsg.filter(msg => msg.includes("Email")).length);

console.log(n);
