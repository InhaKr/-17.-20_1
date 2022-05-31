// "use strict";

// ДЗ 17. #20_1
// 1.Создаем 2 блока, у каждого блока есть кнопка 
// Click и счетчик counter(в виде числа).
// 2.При нажатии на Click - counter увеличивается. 
// При перезагрузке страницы counter должен сохраняться.
// 3.Создать кнопку ClearCounters()
// 4.Создать кнопку setCounter(), который запрашивает id блока и
//  устанавливает значение( в типе number ) в counter.

// 5.При увеличении counter-а: каждое значение до 50 должно 
// окрашивать соответствующий блок в случайно сгенерированный цвет. 
// Цвета генерируются при изменении counter-a и сохраняются в Storage.
//  Когда значение доходит до 50 - применяется цвет по умолчанию. 
//  'this.style.backgroundColor = "rgb(x, y, z)";' -> x = getRand(256) y = getRand(256) z = getRand(256)

console.log(window.localStorage)

if (!localStorage.counter) { //если у меня не существует counter
  localStorage.counter = 0;
}

document.querySelector('#count').innerHTML = localStorage.counter;

document.querySelector('#but').addEventListener('click', () => {
  localStorage.counter++;
  let fg= document.querySelector('#but');
  fg.style.background=`rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)} )`

  function getRandom(min,max) {
    let l = Math.ceil(Math.random() * (max - min) + min)
    localStorage.l = l ;
    return l;
    
  }
  if (localStorage.counter>50){
    b = `rgb(239, 239, 239)`;
    fg.style.background=b;
    localStorage.l = b ;
  }

  document.querySelector('#count').innerHTML = localStorage.counter;
})



if (!localStorage.counter1) { //если у меня не существует counter
  localStorage.counter1 = 0;
}

document.querySelector('#count1').innerHTML = localStorage.counter1;

document.querySelector('#but1').addEventListener('click', () => {

  localStorage.counter1++;
  let fg1= document.querySelector('#but1');
  fg1.style.background=`rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)} )`

  function getRandom(min,max) {
    let l1 = Math.ceil(Math.random() * (max - min) + min)
    localStorage.l1 = l1 ;
    return l1;
    
  }
  if (localStorage.counter1>50){
    let b = `rgb(239, 239, 239)`;
    fg1.style.background=b;
    localStorage.l1 = b ;
  }
  document.querySelector('#count1').innerHTML = localStorage.counter1;
})



// let r = document.createElement('button');
// r.classList.add('ClearCounters');
// r.innerHTML = 'ClearCounters';
// document.body.appendChild(r);

// document.querySelector('#ClearCounters').addEventListener('Click', () => {
//   console.log('kugggggg');
// })

document.querySelector('#clear').addEventListener('click', () => {
  // console.log('kf');
  // Storage.removeItem()
  // Storage.clear()
  localStorage.counter1 = 0;
  localStorage.counter = 0;
  document.querySelector('#count').innerHTML = localStorage.counter;
  document.querySelector('#count1').innerHTML = localStorage.counter1;
})


// 4.Создать кнопку setCounter(), который запрашивает id блока и
//  устанавливает значение( в типе number ) в counter.

if (!localStorage.counter2) { //если у меня не существует counter
  localStorage.counter2 = 0;
}

document.querySelector('#count2').innerHTML = localStorage.counter2;

document.querySelector('#setCounter').addEventListener('click', () => {
  let f = prompt('Введите id', 'sss/rrr');

  if (f === 'sss') {
    document.querySelector('#count2').innerHTML = localStorage.counter;
  }
  if (f === 'rrr') {
    document.querySelector('#count2').innerHTML = localStorage.counter1;
  }

});







