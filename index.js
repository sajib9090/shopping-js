
let serial = 0;

document.getElementById('coffee-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('coffee-name');

    const proP = productPrice('coffee-price');
    
    const proQ = productQuantity('coffee-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);
    allTotal(total);


})

document.getElementById('heart-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('heart-name');

    const proP = productPrice('heart-price');
    
    const proQ = productQuantity('heart-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);
    allTotal(total);


})
document.getElementById('panda-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('panda-name');

    const proP = productPrice('panda-price');
    
    const proQ = productQuantity('panda-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);
    allTotal(total);


})
document.getElementById('umbrella-js-btn').addEventListener('click', function(){
    serial +=1;
    const pro = productName('umbrella-name');

    const proP = productPrice('umbrella-price');
    
    const proQ = productQuantity('umbrella-quantity');
    
    const total = proP * proQ;

    displayProducts(serial, pro, proP, proQ, total);
    allTotal(total);

})

document.getElementById('vue-js-btn').addEventListener('click', function(){
    serial +=1;

    const pro = productName('vue-name');

    const vuePrice = document.getElementById('vue-price');
    const vuePriceAmount = parseInt(vuePrice.value);
   

    const vueQuantity = document.getElementById('vue-quantity');
    const vueQuantityNumber = parseInt(vueQuantity.value);

    if (vuePriceAmount == '' || vueQuantityNumber == '' ||  vuePriceAmount <= 0 || vueQuantityNumber <= 0) {
        return alert('please check the input field');
      }
    else  if (isNaN(vueQuantityNumber) || isNaN(vuePriceAmount)) {
        return alert('please check the input field')
      }

    const vueTotal = vuePriceAmount * vueQuantityNumber;

    displayProducts(serial, pro, vuePriceAmount, vueQuantityNumber, vueTotal);
    allTotal(vueTotal);



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

let finalTotal = document.getElementById('final-total').innerText;

function allTotal(totalElement){
    let sum = parseInt(finalTotal) + parseInt(totalElement);
    finalTotal = sum;

    let setAmount = document.getElementById('final-total');
    setAmount.innerText = finalTotal;


}


