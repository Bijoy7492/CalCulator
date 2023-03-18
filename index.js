let Result=document.getElementById('result');
function clearresult(value){
    Result.value =' ';
    }
function deletresult(value){
     Result.value = Result.value.slice(0,-1);
    }
function insertvalue(value){
Result.value +=value;
}
 function calculate(){
    try{
        Result.value=eval(Result.value);
    }
    catch(error){
Result.value='error';
    }
 }