document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
  
    if (nome === "usuario" && senha === "senha") {
      window.location.href = "produtos.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  });
  