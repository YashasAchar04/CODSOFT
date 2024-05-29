let display=document.querySelector("#display");
let body=document.querySelector("body")
const appendtoDisplay=(input)=>{
    display.value+=input;
}
const calculate=()=>{
    try{
    display.value=eval(display.value);
    }
    catch(err){
        display.value="Error";
    }
}
const cancel=()=>{
    display.value="";
}
onkey
