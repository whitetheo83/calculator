let a = ''; //first number
let b = ''; //second number
let sign = ''; // sign of operations
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/','%'];


//screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign ='';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {

    function lowerSizeFont() {
        document.querySelector('.calc-screen p').style.fontSize = "50%";
      }

    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            if ((a.charAt(0) === '0') && (a.charAt(1) >= ('0'))) {
                 a = a.substring(1);
            }
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            if ((b.charAt(0) === '0') && (b.charAt(1) >= ('0'))) {
                b = b.substring(1);
            }
            out.textContent = b;
        }
        else {
            b += key;
            if ((b.charAt(0) === '0') && (b.charAt(1) >= ('0'))) {
                b = b.substring(1);
            }
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // если нажата клавиша + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
        
    }

    // нажата клавиша =
    if (key === '=') {
        if (b === '') {
            b = a;
        }
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Err';
                    return;
                }
                a = a / b;
                break;
            case "%":
                a = (a/b) * 100;
                break;
        }
        finish = true; 
        if (+(a.length) > +(9)) {
            lowerSizeFont();
        }
        out.textContent = a;
        console.log(a,b,sign);
    }



};
