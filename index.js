function divider(input)
{
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

divider('Aufgabe 1');

const num1=50;
const num2=120;

if((99 >= num1 && num1>=50) || (99>=num2 && num2>=50) ) 
{
    console.log('ich bin zwischen der');
}

divider('Aufgabe 2');

const num3= 45;
if((99 >= num1 && num1>=50) || (99>=num2 && num2>=50)( 99>=num3 && num3>=50))
{
    console.log('ich bin zwischen der');
}

divider('Aufgabe 3');
const a= 5;
const b= 3;
const c= 7;

if(c>a && c>b)
{
    console.log('ich bin largest Zahl ' +c)
} else  if(b>a && b>c)
{
    console.log('ich bin largest Zahl '+b)
}
else 
{
    console.log('ich bin largest Zahl '+a)
}

// wenn ich wechsel es, das funktieniert auch 


divider('Aufgabe 4');

const originalString= 'pay';
const newString= 'Py' + originalString;

if (newString.startsWith('Py'))
{
    console.log(originalString);
}

divider('Aufgabe 5');

// ich will a und b benutzen, die im oben stehen.

if( 80>a + b>50 )
{
    console.log(65);
}
else {
    console.log(80);
}

divider('Aufgabe 6');


if( a + b == 8 || a-b == 8 || b-a == 8 )
{
    console.log(true);
}

divider('Aufgabe 7');

if (a==15 || b==15 || a+b==15)
{
    console.log(true);
}



