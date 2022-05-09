const fs = require("fs");
const axios = require("axios");

fs.readFile("bancos.json", function (err, data) {

    // Verifica erros
    if (err) throw err;

    // Converte para JSON
    const bancos = JSON.parse(data);

    // Printa tamanho
    //console.log(bancos.length);

    for (i = 0; i < bancos.length; i++) {
        // Printa bancos
        //console.log(bancos[i]);

        // Adiciona bancos ao banco por meio da API
        addBanco(bancos[i])
    }
});

function addBanco(banco) {
    try {
        axios.post("(Link do post da API aqui)", JSON.stringify({
            // Atributos para o banco que será adicionado
            codigo: banco.value,
            nome: banco.label
        }),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => {
            console.log(response.data);
        })
    }
    catch (err) {
        console.log(err);
    }
}