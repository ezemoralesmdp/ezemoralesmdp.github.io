const prices = document.querySelectorAll('h3 span');
const container__comidas = document.querySelectorAll('.container__item');

let suma = 0;

container__comidas.forEach((comida, i) => {

    comida.addEventListener('click', (event) => {
        
        suma += parseInt(prices[i].innerText);
        total.value = `Total: $${suma}`; //Se puede acceder al valor directamente desde su ID
    })
})

// const total = document.querySelector('input');

// total.addEventListener('click', (event) => {
//     total.value = `Total: ${suma}`;
//     console.log(suma);
// })