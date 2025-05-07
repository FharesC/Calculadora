
const body = document.querySelector('body');
const input = document.querySelector('#display')
const botones = Array.from(document.querySelectorAll('.btn'));
//Declaración de variables 
//numero va a mantener el numero que tengamos antes de colocar un signo
//op mantendrá la operación completa, ejemplo 25+10-30
let op = ''
let numero = ''
let nuevoNum=""
let numAntes = ""
let otp= ""
// Nos permite colocar el texto del btn en el value del input
//'Función dentro de una función "closure"'
// Collback, función que pasa dentro de un parámetro dentro de otra función

botones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event)
            calculadora(event.target.innerText)
        
    })
})


body.addEventListener('keydown', (event) => {
    calculadora(event.key)
})

//permite que la función esperada sea el valor que vamos a colocar en el input
const calculadora = (valor) => {
  console.log(valor);
  
    if (!isNaN(valor) || valor == '.') {
        input.value += valor
        numero += valor
        nuevoNum += valor
        console.log();
            
      }
      else if (valor == '/' || valor == '+'  || valor == '-' || valor == '*' ) {
            input.value += valor
            nuevoNum += valor
            op += parseFloat(numero) + valor
            numero = ""
    } else if (valor == 'Enter' || valor=='=') {
        input.value = eval(op + parseFloat(numero))
        
        op = ''
        numero = input.value     
        console.log(numero); 
    }
    else if (valor == 'Escape' || valor == "C") {
        input.value = ''
        op = ''
        numero = ''
    }
    else if ( valor == '(') {
      input.value += valor
      numAntes = numero
      nuevoNum = ""
      
    }

     if ( valor == ')') {
      input.value += valor
      console.log("acá va el número : ",numero)
      console.log("acá va el nuevoNúm: " , nuevoNum);
      console.log("acá va el numantes: ", numAntes);
      console.log("acá aparece el op ", op);
      
      otp = eval(nuevoNum)
      console.log(otp);    
    }
    
  }





//Funcion de alto orden
