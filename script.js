const BMW=document.getElementById("BMW");
const Audi=document.getElementById("Audi");
const Ferrari=document.getElementById("Ferrari");
const myCheckbox=document.getElementById("myCheckbox");
const subr=document.getElementById("subResult");
const payr=document.getElementById("carResult");
const subm=document.getElementById("submit");

subm.onclick=function(){
    if(myCheckbox.checked){
        subr.textContent="You are subscribed";
    }
    else{
        subr.textContent="You are not subscribed";
    }
    if(BMW.checked){
        payr.textContent="You selected BMW";
    }
    else if(Audi.checked){
        payr.textContent="You selected Audi";
    }
    else if(Ferrari.checked){
        payr.textContent="You selected Ferrari";
    }
    else{
        payr.textContent="You have to select something";
    }
}