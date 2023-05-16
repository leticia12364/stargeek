const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("iname");
const email = document.getElementById("imail");
const psenha = document.getElementById("psenha");
const isenha = document.getElementById("isenha");

formulario.onsubmit = (evento) =>{
    if (nome.value == ""){
        mensagem.innerHTML = "<p> Digite seu nome! </p>";
        evento.preventDefault();
        return null;
    }
    
    if (email.value == ""){
        mensagem.innerHTML = "<p> Digite seu email </p>";
        evento.preventDefault();
        return null;
    }

    if (psenha.value == ""){
        mensagem.innerHTML = "<p> Digite sua senha </p>";
        evento.preventDefault();
        return null;
    }

    if (isenha.value == ""){
        mensagem.innerHTML = "<p> Confirme sua senha </p>";
        evento.preventDefault();
        return null;
    }
    if (psenha.value != isenha.value){
        mensagem.innerHTML = "<p> As senhas devem ser iguais </p>";
        evento.preventDefault();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        nome : nome.value,
        email : email.value,
        senha : psenha.value,
        csenha : isenha.value
    })

    localStorage.setItem("dados",JSON.stringify(dados));
    mensagem.innerHTML="<p>Parabéns Cadastro feito com sucesso </p>";
    evento.preventDefault();

    setTimeout(()=>{
        window.location.assign("login.html");
    },2000);
}