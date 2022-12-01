let btn = document.querySelector('#verSenha')



let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})



btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
function mensagem(){
msgSuccess.setAttribute('style', 'display: block')
msgSuccess.innerHTML = '<strong>Entrando.</strong>'
msgError.setAttribute('style', 'display: none')
msgError.innerHTML = ''
{   {
    setTimeout(()=>{
        window.location.href = 'home'
    }, 3000)
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de entrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
}

  
  
