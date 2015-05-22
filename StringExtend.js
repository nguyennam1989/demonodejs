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
module .exports =string;