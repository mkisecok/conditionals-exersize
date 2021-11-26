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
else
{
    console.log('ich bin nicht zwischen da');
}

divider('Aufgabe 2');

const num3= 45;
if((99 >= num1 && num1>=50) || (99>=num2 && num2>=50)( 99>=num3 && num3>=50))
{
    console.log('ich bin zwischen der');
}
else
{
    console.log('ich bin nicht zwischen da');
}

divider('Aufgabe 3');
const a= 1;
const b= 7;
const c= 4;

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

if (originalString.startsWith('Py'))
{
    console.log(originalString);
}
else
{
    console.log('fangt es nicht mit  Py an ');
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
else
{
    console.log(false);
}

divider('Aufgabe 7');

if (a==15 || b==15 || a+b==15)
{
    console.log(true);
}
else
{
    console.log(false);
}

divider('Aufgabe 8');

if( a%7 == 0 || a%11 == 0 || b%7 == 0 || b%11 == 0)
{
    console.log(true);
}
else
{
    console.log(false);
}

divider('Aufgabe 9');

const num4 = 4;
const num5 = 4;
const sum = num4 + num5;

if(num4 == num5)
{
    console.log(sum*3)
}
else
{
    console.log('die sind nicht gleiche');
}

divider('Aufgabe 10');

const a2 = 20;
const difference1 = a2 - 19;


if(a2 > 19)
{
    console.log(difference1*2);
}
else 
{
    console.log('a2 ist nicht großer als 19');
}

divider('Aufgabe 11');

const firstName = 'Mahmut';
const age = 26;

if(age < 13)
{
    console.log(`${firstName} is a child`);
}
else if(age >= 13 && age < 20)
{
    console.log(`${firstName} is a teenager`);
}
else if(age >= 20 && age < 30)
{
    console.log(`${firstName} is a young adult`);
}
else
{
    console.log(`${firstName} is a adult`);
}










