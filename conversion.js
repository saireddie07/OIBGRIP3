
function convert(){
var input=document.getElementById('input').value;
var degree=document.getElementById('degree').value;

var result;
    if(degree==1)
    {
result=input*(1.8)+32;
document.getElementById('result').innerHTML=result+' <sup>0</sup>F';
    }
    else{
        result=(input-32)*(0.55);
        document.getElementById('result').innerHTML=result+' <sup>0</sup>C';
    }
   
    
}