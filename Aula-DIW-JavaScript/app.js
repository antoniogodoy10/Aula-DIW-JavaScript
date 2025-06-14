let cidades = [
    { "id": 1, "cidade": "Belo Horizonte", "estado": "MG", "populacao": 3800000 },
    { "id": 2, "cidade": "São Paulo", "estado": "SP", "populacao": 11800000 },
    { "id": 3, "cidade": "Rio de Janeiro", "estado": "RJ", "populacao": 5300000 },
    { "id": 4, "cidade": "Curitiba", "estado": "PR", "populacao": 1200000 },
    { "id": 5, "cidade": "Fortaleza", "estado": "CE", "populacao": 2100000 }
]

function mudaFundo() {
    let cor = document.getElementById('corfundo').value
    document.body.style.backgroundColor = cor
}

document.getElementById('btnCarregaDados').addEventListener ('click', carregaDados)

document.getElementById('btnMudaFundo').addEventListener ('click', mudaFundo)

function carregaDados() {
    let ulCidades = document.getElementById('ulCidades');
    strTextoHTML = '';

    for(let i = 0; i < cidades.length; i++){
       let cidade = cidades[i];
       strTextoHTML += `<li>${cidade.cidade} - ${cidade.estado}</li>`
    }

    ulCidades.innerHTML = strTextoHTML;
}