// let serial = 0;
// document.getElementById('coffee-js-btn').addEventListener('click', function(){
//     serial+=1;
    
//     const coffeeName = document.getElementById('coffee-name').innerText;

//     const coffeePrice = document.getElementById('coffee-price');
//     const coffeePriceAmount = parseInt(coffeePrice.innerText);
    
//     const coffeeQuantity = document.getElementById('coffee-quantity');
//     const coffeeQuantityNumber = parseInt(coffeeQuantity.innerText);

//     const coffeeTotal = coffeePriceAmount * coffeeQuantityNumber;

//     displayProducts(serial, coffeeName, coffeePriceAmount, coffeeQuantityNumber, coffeeTotal);
    
// });


// document.getElementById('heart-js-btn').addEventListener('click', function(){
    
//     serial+=1;
//     const heartName = document.getElementById('heart-name').innerText;

//     const heartPrice = document.getElementById('heart-price');
//     const heartPriceAmount = parseInt(heartPrice.innerText);

//     const heartQuantity = document.getElementById('heart-quantity');
//     const heartQuantityNumber = heartQuantity.innerText;

//     const heartTotal = heartPriceAmount * heartQuantityNumber;

//     displayProducts(serial, heartName, heartPriceAmount, heartQuantityNumber, heartTotal);
// })



document.getElementById('vue-js-btn').addEventListener('click', function(){

    serial+=1;

    const vueName = document.getElementById('vue-name').innerText;

    const vuePrice = document.getElementById('vue-price');
    const vuePriceAmount = parseInt(vuePrice.value);

    const vueQuantity = document.getElementById('vue-quantity');
    const vueQuantityNumber = parseInt(vueQuantity.value);

    const vueTotal = vuePriceAmount * vueQuantityNumber;

    displayProducts(serial, vueName, vuePriceAmount, vueQuantityNumber, vueTotal );

    
})


// function displayProducts(serial, name, price, quantity, total){
//     const tableContainer = document.getElementById('table-container')

//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//      <td>${serial}</td>
//      <td>${name}</td>
//      <td>${price}</td>
//      <td>${quantity}</td>
//      <td>${total}</td>
//     `;
//     tableContainer.appendChild(tr);
// }


// const buttons = document.querySelectorAll(".bg-pink-600");

// for(const button of buttons){
//     button.addEventListener('click', function(){
//        hisab();
   
       

//     })

//     function hisab(){
//         const coffeeName = document.getElementById('coffee-name').innerText;

//        const coffeePrice = document.getElementById('coffee-price');
//        const coffeePriceAmount = parseInt(coffeePrice.innerText);
       
//        const coffeeQuantity = document.getElementById('coffee-quantity');
//        const coffeeQuantityNumber = parseInt(coffeeQuantity.innerText);
   
//        const coffeeTotal = coffeePriceAmount * coffeeQuantityNumber;

//        displayProducts(coffeeName, coffeePriceAmount, coffeeQuantityNumber, coffeeTotal);
//     }
// }

// function displayProducts(coffeeName, coffeePriceAmount, coffeeQuantityNumber, coffeeTotal){
//     const tableContainer = document.getElementById('table-container')

//        const tr = document.createElement("tr");
//        tr.innerHTML = `
//         <td>${1}</td>
//         <td>${coffeeName}</td>
//         <td>${coffeePriceAmount}</td>
//         <td>${coffeeQuantityNumber}</td>
//         <td>${coffeeTotal}</td>
//        `;
//        tableContainer.appendChild(tr);
// }

let serial = 0;
function displayProducts(serial, name, price, quantity, total){
    const tableContainer = document.getElementById('table-container')

    const tr = document.createElement("tr");
    tr.innerHTML = `
     <td>${serial}</td>
     <td>${name}</td>
     <td>${price}</td>
     <td>${quantity}</td>
     <td>${total}</td>
    `;
    tableContainer.appendChild(tr);
}

document.getElementById('coffee-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('coffee-name');

    const proP = productPrice('coffee-price');
    
    const proQ = productQuantity('coffee-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);


})

document.getElementById('heart-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('heart-name');

    const proP = productPrice('heart-price');
    
    const proQ = productQuantity('heart-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);


})
document.getElementById('panda-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('panda-name');

    const proP = productPrice('panda-price');
    
    const proQ = productQuantity('panda-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);


})
document.getElementById('umbrella-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('umbrella-name');

    const proP = productPrice('umbrella-price');
    
    const proQ = productQuantity('umbrella-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);

})


function productName(nameId){
    const name = document.getElementById(nameId).innerText;
    return name;  
}

function productPrice(priceId){
    const price = document.getElementById(priceId);
    const priceAmount = parseInt(price.innerText);
    return priceAmount;
}

function productQuantity(quantityId){
    const quantity = document.getElementById(quantityId);
    const quantityNumber = parseInt(quantity.innerText);
    return quantityNumber;
}


