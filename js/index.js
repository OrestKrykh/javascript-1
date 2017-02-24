function quadraticEquation(a,b,c){
    var d,x1,x2;
    d = Math.pow(b,2) - 4 * a * c;
    if (d>0){
        x1=(-b + Math.sqrt(d))/(2 * a);
        x2=(-b - Math.sqrt(d))/(2 * a);
        return 'x1='+x1+' x2='+x2;
    } else if (d === 0){
        x1 = -b/2 * a;
        return 'x1=x2='+ x1;
    }else{ 
        return 'Коренів немає';
    }
}

var a = prompt('Введіть а',a);
var b = prompt('Введіть b',b);
var c = prompt('Введіть c',c);
 
 document.write(quadraticEquation(a,b,c));