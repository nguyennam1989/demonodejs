/**
 * Created by nam on 26/05/2015.
 */
function printTree(n)
{
    console.log('-------------------------');
    for (var i = 0; i < n; i++) {
        var space = "";
        var text = "";
        for (var j = 0; j < n - i; j++) {
            space += " ";
        }
        process.stdout.write(space);
        for (var j = 0; j < i*2+1; j++) {
            text += "+";
        }
        console.log(text + space );

    }
}
function print(n) {
    console.log('-------------------------');
    for (var i = 0; i < n; i++) {
        var space = "";
        var text = "";
        for (var j = 0; j < n - i; j++) {
            space += " ";
        }
        process.stdout.write(space);
        for (var j = 0; j < i*2+1; j++) {
            text += "+";
        }
        console.log(text + space);
    }
}
printTree(6);
print(6);