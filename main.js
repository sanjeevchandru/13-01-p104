document.write("68.to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n"+"<br>");
function test68(str,n){
    if(str.length>=2){
        var x=str.substring(0,n);
        var y=str.substring(str.length-n);
        return x+y;
    }
    return str;
}
document.write("The string :sanjeev , the number :3 ,,ans :"+test68("sanjeev",3)+"<br><br>");