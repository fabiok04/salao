let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

sobrenome.addEventListener('keyup', () => {
  if(sobrenome.value.length <= 2){
    labelSobrenome.setAttribute('style', 'color: red')
    labelSobrenome.innerHTML = 'Sobrenome *Insira no minimo 3 caracteres'
    sobrenome.setAttribute('style', 'border-color: red')
    validSobrenome = false
  } else {
    labelSobrenome.setAttribute('style', 'color: green')
    labelSobrenome.innerHTML = 'Sobrenome'
    sobrenome.setAttribute('style', 'border-color: green')
    validSobrenome = true
  }
})

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

celular.addEventListener('keyup', () => {
  if(celular.value.length <= 4){
    labelCelular.setAttribute('style', 'color: red')
    labelCelular.innerHTML = 'Celular *Insira no minimo 5 caracteres'
    celular.setAttribute('style', 'border-color: red')
    validCelular = false
  } else {
    labelCelular.setAttribute('style', 'color: green')
    labelCelular.innerHTML = 'Celular'
    celular.setAttribute('style', 'border-color: green')
    validCelular = true
  }
})

cpf.addEventListener('keyup', () => {
  if(cpf.value.length <= 11){
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'Cpf *Insira no minimo 11 caracteres'
    cpf.setAttribute('style', 'border-color: red')
    valiCpf = false
  } else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'Cpf'
    cpf.setAttribute('style', 'border-color: green')
    validCpf = true
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

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
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

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



  
  
