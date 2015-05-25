/**
 * Created by nam on 21/05/2015.
 */
String .prototype.reverse=function(){
    var result ="";
    for (var i=this.length-1;i>=0;i--){
        result+=this.charAt(i);
    }
    return result;

};
//hello tom
//HELLO TOM
String.prototype.camelcase = function() {
    var result = "";
    var prevChar = undefined;
    for (var i = 0; i < this.length; i++){
        var currentChar = this.charAt(i);
        if (i == 0 || prevChar == " ") {
            result += currentChar.toUpperCase();
        } else {
            result += currentChar;
        }
        prevChar = currentChar;
    }
    return result;
};
//dem tu trong 1 chuoi
String.prototype.wordscount =function(){
    var a="";
    var dem=0;
    var words = a.split(" ");
    for (var i=0;i<words.length;i++)
        if (words[i]!=""){
            dem+=1;
        }
    return dem;

};

module .exports =String;