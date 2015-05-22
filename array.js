/**
 * Created by nam on 21/05/2015.
 */

var  cars = ["Yamaha", "ToYota", "BMW"];// khai bao mang
console.log(cars.valueOf());// in tat ca ac phan tu trong mang

for (var i = 0; i < cars.length; i++) {// den  cac gia tri trong mang
    console.log(cars[i]);
}

console.log(cars.join(" & "));//noi cac phan tu trong mang bang mot chuoi
cars.push("Saab");
cars.push("Yamaha");//them vao cac phan tu trong mang
cars.push("Volvo");
console.log(cars.valueOf());


while (cars.length > 0) {
    cars.pop(); //lay bot cac phan tu dau mang
    console.log(cars.valueOf());
}

/*while (cars.length > 0) {
    cars.shift();//lay bot cac phan tu cuoi  mang
    console.log(cars.valueOf());
}*/

cars.push("Thaco");
