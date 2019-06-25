const emails = [
    "henri@gmail.com",
    "luna@gmail.com",
    "jovis@gmail.com",
    "marco.bruno.br@gmail.com",
    "marco.bruno@impulso.work"
];

console.log("Before:", emails);

emails.fill("cliente@gmail.com", 1, 4);

console.log("After:", emails);
