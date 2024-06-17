const user = [
  { nome: "Robson", email: "robson_silva@outlook.com", idade: 39 },
  { nome: "Maria", email: "mariazinha@gmail.com", idade: 29 },
  { nome: "Lurdes", email: "lulu_topster@icloud.com", idade: 79 },
  { nome: "Vitória", email: "vivi@hotmail.com", idade: 12 },
];

console.log("Digite seu e-mail...");


process.stdin.on("data", function(data) {
    let entrada_usuario;
    entrada_usuario = data.toString().trim();
    let emailEncontrado = false;

    for (let i = 0; i < user.length; i++) {
        if (entrada_usuario == user[i].email) {
            emailEncontrado = true;
            break;
        }
    }

    if (emailEncontrado) {
        console.log("Seu e-mail está cadastrado")
    } else {
        console.log("Seu e-mail não está cadastrado")
    }
});