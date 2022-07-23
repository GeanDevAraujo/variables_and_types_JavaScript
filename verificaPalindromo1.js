//solução da aula
function verificaPalindromo(string){
if(!string) return "string inexistente";

return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo())
//solução da aula
function verificaPalindromo2(string){
    if(!string) return "string inexistente";
for(let i =0; i< string.length /2; i++){
    if(string[i] !== string[string.length -1 -i]){
        return false;
            }
        }
        return true;
}

console.log(verificaPalindromo2("astysa"));

//solução autoral

function verificaPalindromo3(string){
    if(!string) return "string inexistente";
if(string.split("").reverse().join("") === string){
   return true;
}
else{
    return false;
}
}
console.log(verificaPalindromo3("ama"));