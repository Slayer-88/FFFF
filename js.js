/*
//1 вопрос

var a = 1, b = 1, c, d; 
c = ++a; 
alert(c); // 2 
//"Префиксная форма", увеличивает на 1
//работает как с = a + 1 = 1 + 1 = 2


d = b++; 
alert(d); // 1 
//"постфиксная форма" возвращает "старое" значение b = 1

c = (2 + ++a); 
alert(c); // 5 
//


d = (2 + b++); 
alert(d); // 4 
alert(a); // 3 
alert(b); // 3 





//2 вопрос
var aa = 2; 
var xx = 1 + (aa *= 2); 
alert(xx);
//Равно 5



//3 вопрос

let aaa = prompt('Введите число 1');
let bbb = prompt('Введите число 2');
aaa = parseInt(aaa);
bbb = parseInt(bbb);

if (aaa>=0 && bbb>=0) {
    ccc = aaa - bbb;
};

if (aaa<0 && bbb<0) {
    ccc = aaa / bbb;
};

if (aaa<0 && bbb>=0) {
    ccc = aaa + bbb;
};

if (a>=0 && bbb<0) {
    ccc = aaa + bbb;
};

alert(c);






//4 вопрос
function mathOperation(arg1, arg2, operation);




*/



//5 вопрос
function average1(x, y)
{
   return x + y;
    }
avg1 = average1(6, 2);
alert(avg1);

function average2(x, y)
{
   return x - y;
    }
avg2 = average2(6, 2);
alert(avg2);

function average3(x, y)
{
   return x / y;
    }
avg3 = average3(6, 2);
alert(avg3);

function average4(x, y)
{
   return x * y;
    }
avg4 = average4(6, 2);
alert(avg4);








/*
let admin;
let name = "Василий";

admin = name;
alert(admin);
*/











