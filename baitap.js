/**
 * Created by nam on 22/05/2015.
 */

//giai phuong trinh bac 2
function giai_pt(a,b,c){
    var x1,x2,delta;

    delta=(b*b-4*a*c);
    if(delta ==0)
    {
        console.log("phuong trinh co nghiem kep");
        x1=x2 =-b/(2*a) ;

    }
    if(delta<0)
    {
        console.log("phuong trinh vo nghiem");
    }
    else
    {
        console.log("phuong trinh co hai nghiem");
        x1=(-b-Math.sqrt(delta))/(2*a);
        x2=(-b+Math.sqrt(delta))/(2*a);

    }
    console.log(x1);
    console.log(x2);
}

console.log(giai_pt(1,1,-2));