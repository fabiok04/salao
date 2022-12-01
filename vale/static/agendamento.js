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

  celular.addEventListener('keyup', () => {
    if(celular.value.length <= 10){
      LabelCelular.setAttribute('style', 'color: red')
      LabelCelular.innerHTML = 'Celular *Insira no minimo 11 caracteres'
      celular.setAttribute('style', 'border-color: red')
      validCelular = false
    } else {
      LabelCelular.setAttribute('style', 'color: green')
      LabelCelular.innerHTML = 'Celular'
      celular.setAttribute('style', 'border-color: green')
      validCelular = true
    
    
    }
  })

  function mascaraFone(event) {
    var valor = document.getElementById("celular").attributes[0].ownerElement['value'];
    var retorno = valor.replace(/\D/g, "");
    retorno = retorno.replace(/^0/, "");
    if (retorno.length > 10) {
      retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length > 5) {
      if (retorno.length == 6 && event.code == "Backspace") { 
        // necessário pois senão o "-" fica sempre voltando ao dar backspace
        return; 
      } 
      retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length > 2) {
      retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      if (retorno.length != 0) {
        retorno = retorno.replace(/^(\d*)/, "($1");
      }
    }
    document.getElementById("celular").attributes[0].ownerElement['value'] = retorno;
  }

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