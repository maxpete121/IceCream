const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
}, 
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
}, 
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
}, 
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

function buyIceCream(iceCreamName) {
    let bStraw = iceCream.find(iceCream => iceCream.name == iceCreamName)
    bStraw.quantity++
    
    console.log(bStraw)
    updateCart()
}

function updateCart() {
    let template = ''
    iceCream.forEach(ice => {
        if(ice.quantity > 0) {
            console.log('up')
            template += `                <span class="iceCreamCard d-flex justify-content-evenly mb-2 align-items-center rounded-2">
            <p>${ice.name}</p>
            <p>${ice.quantity}</p>
            <p>${ice.price}</p>
            <button onclick="deleteIce('${ice.name}')"><i class="mdi mdi-trash-can"></i></button>
            
        </span>`
        }
    } )
    toppings.forEach(topB => {
        if(topB.quantity > 0) {
            template += `<span class="iceCreamCard d-flex justify-content-evenly mb-2 align-items-center rounded-2">
            <p>${topB.name}</p>
            <p>${topB.quantity}</p>
            <p>${topB.price}</p>
            <button onclick="deleteTop('${topB.name}')"><i class="mdi mdi-trash-can"></i></button>
            
        </span>`
        }
    })
    document.getElementById("bought").innerHTML = template
    updateTotal()
}

function updateTotal() {
    let total = 0
    iceCream.forEach(iceT => {
        if(iceT.quantity > 0) {
            total += iceT.quantity * iceT.price
        }
        
    })
    toppings.forEach(topC => {
        if(topC.quantity > 0)
        total += topC.quantity * topC.price
    })
    document.getElementById("total").innerHTML = total
}

function buyToppings(toppingName) {
    let bTop = toppings.find(toppings => toppings.name == toppingName)
    bTop.quantity++
    console.log(bTop)
    updateCart()
}

function deleteTop(itemname) {
    console.log(itemname);
    let tRemove = toppings.find(topping => topping.name == itemname)
    tRemove.quantity--
    updateCart()
}

function deleteIce(itemname) {
    let Iremove = iceCream.find(iCream => iCream.name == itemname)
    Iremove.quantity--
    updateCart()
}

function checkout(deleteAll) {
    let dAll = iceCream.forEach(iceCream => {
        if(iceCream.quantity > 0) {
            iceCream.quantity = 0
        }
    })
    let dallT = toppings.forEach(toppings => {
        if(toppings.quantity > 0) {
            toppings.quantity = 0
        }
    })
    updateCart()
}

// function checkout(deleteAllTop) {
//     let dallT = toppings.forEach(toppings => {
//         if(toppings.quantity > 0) {
//             toppings.quantity = 0
//         }
//     })
//     updateCart()
// }

