const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("imail");
const senha = document.getElementById("psenha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach(elemento => {
        if(elemento.email === email.value && elemento.senha === senha.value){
            evento.preventDefault();
            mensagem.innerHTML ="Logado"
            setTimeout(()=>{
                            window.location.assign("catalogo.html"); },2000);
            return true;
        } 
        else{
            evento.preventDefault();
            mensagem.innerHTML ="Senha ou E-mail Incorreto"
       
        }
    });
}
    //localStorage.setItem("dados",JSON.stringify(dados));
    //evento.preventDefault();

    //setTimeout(()=>{
  //      window.location.assign("catalogo.html");
    //},2000);
