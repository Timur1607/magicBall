let arr = [' It is certain', 'It is decidedly so', 'Without a doubt', ' Yes — definitely', 'You may rely on it',' Reply hazy, try again' ,' Ask again later' ,'Better not tell you now' ,'Cannot predict now' ,'Concentrate and ask again' ,'Dont count on it' ,' My reply is no' ,'My sources say no' ,'Outlook not so good' ,'Very doubtful']
let random = arr[Math.round(Math.random() * 14)];
let text = document.querySelector('.text')
let input = document.querySelector('.input')
let quest = ['что', 'как', 'разве', 'неужели', 'а', 'да', 'правда', 'так', 'кто', 'что', 'какой', 'каков', 'чей', 'который', 'сколько', 'как', 'где', 'куда', 'откуда', 'докуда', 'когда', 'почему', 'отчего', 'зачем', 'насколько']
let check = ''

// console.log(random);
// console.log(input.value);

let answ = document.querySelector('.button')
answ.addEventListener('click', sayRandom)
function sayRandom(){
    input.value.split(' ')
    if(input.value === ''){
        alert('вы не ввели текст')
    } else{
        for(let elV of quest){
            for(let elQ of input.value.split(' ')){
                // console.log(elQ);
                if(elQ.toUpperCase('') === elV.toUpperCase('')){
                    
                } else{
                    check = check + "+"
                }
            }
        }
    }

    if(check.length === input.value.split(' ').length * 25){
        console.log(random);
        random = arr[Math.round(Math.random() * 14)];
        text.textContent = random
    } else {
        alert('на вопрос нельзя ответить "да" или "нет"!')
    }
    console.log(check);
    check = ''
    input.value = ''
}


