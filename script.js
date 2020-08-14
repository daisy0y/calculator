
const display = document.querySelector("[data-result]")
const inputNum = document.querySelectorAll("td");
let operator = "";
let saveA="";
let saveB="";
let turn = true;

for(let i = 0; i < inputNum.length; i++){
    
    inputNum[i].addEventListener("click",function(e){
        
        if( this.innerText === 'C'){
            display.innerText = "";
            saveA=""
            saveB=""
            turn=true;

        }
        else if ( this.innerText === '=' && operator === '+'){
            display.innerText= plus(saveA,saveB)
            turn = false;
            saveA = plus(saveA,saveB);
            saveB= "";
        }
        else if(this.innerText === '=' && operator === '-'){
            display.innerText= minus(saveA,saveB)
            turn = false;
            saveA = minus(saveA,saveB);
            saveB="";
        } 
        else if(this.innerText === '=' && operator === '*'){
            display.innerText= multiple(saveA,saveB)
            turn = false;
            saveA = multiple(saveA,saveB);
            saveB="";
        }
        else if( this.innerText === '=' && operator === '/'){
            display.innerText= division(saveA,saveB)
            turn = false;
            saveA = division(saveA,saveB);
            saveB="";
        }
        else if ( this.innerText === "+"){
            operator = this.innerText;
            display.innerText= "";
            turn = false;
        }
        else if ( this.innerText === "-"){
            operator = this.innerText;
            display.innerText= "";
            turn = false;
        }
        else if ( this.innerText === "*"){
            operator = this.innerText;
            display.innerText= "";
            turn = false;
        }
        else if ( this.innerText === "/"){
            operator = this.innerText;
            display.innerText= "";
            turn = false;
        }
      
        
        else if(turn === true)
        {
            
            display.innerText += this.innerText;
            saveA += this.innerText;
          
              }
              else if(turn === false){
                display.innerText += this.innerText;
                saveB += this.innerText;
              
              }              }
          )
          } 
        
function plus(saveA,saveB){
 const plus = parseFloat(saveA) + parseFloat(saveB);
 return plus;   
}

function minus(saveA,saveB){
    const minus = parseFloat(saveA) - parseFloat(saveB);
    return minus;
}

function multiple(saveA,saveB){
    const multiple = parseFloat(saveA) * parseFloat(saveB);
    return multiple;
}

function division(saveA,saveB){
    const division = parseFloat(saveA) / parseFloat(saveB);
    return division;
}