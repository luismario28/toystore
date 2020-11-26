const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelectorAll('.comprarButton');
comprarButton.forEach(addWhatsApp => {
    addWhatsApp.addEventListener('click', addWhatsAppClicked);
});

const goPage1 = document.querySelectorAll('.pagina1');
goPage1.forEach(Page1 => {
    Page1.addEventListener('click', (llamarPagina1));
});

const goPage2 = document.querySelectorAll('.pagina2');
goPage2.forEach(Page2 => {
    Page2.addEventListener('click', (llamarPagina2));
});

const goPage3 = document.querySelectorAll('.pagina3');
goPage3.forEach(Page3 => {
    Page3.addEventListener('click', (llamarPagina3));
});

const goPage4 = document.querySelectorAll('.pagina4');
goPage4.forEach(Page4 => {
    Page4.addEventListener('click', (llamarPagina4));
});

const goPage5 = document.querySelectorAll('.pagina5');
goPage5.forEach(Page5 => {
    Page5.addEventListener('click', (llamarPagina5));
});

const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.imagen-port');

    const itemTitle = item.querySelector('.title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    
    for(let i=0; i< elementsTitle.length; i++){
        if(elementsTitle[i].innerText === itemTitle){
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(
                '.shoppingCartItemQuantity'
            );
            elementQuantity.value++;
            $('.toast').toast('show');
            updateShoppingCartTotal();
            return;
        }
    }


    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
                    <div class="col-6">
                        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <img src=${itemImage} class="shopping-cart-image">
                            <h6 id ="titulo1" class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div
                            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                            <input name="prueba" class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                value="1">
                            <button class="btn btn-danger buttonDelete" type="button">X</button>
                        </div>
                    </div>
     </div>`;
     shoppingCartRow.innerHTML = shoppingCartContent;
     shoppingCartItemsContainer.append(shoppingCartRow);
     

     shoppingCartRow.querySelector('.buttonDelete')
     .addEventListener('click', removeShoppingCartItem);

     shoppingCartRow.querySelector('.shoppingCartItemQuantity')
     .addEventListener('change', quantityChanged);

     updateShoppingCartTotal();
}

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');    
    
    shoppingCartItems.forEach(shoppingCartItem => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice'
        );
        const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('$','')
        );
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;    
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
}

function removeShoppingCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quantityChanged(event){
    const input = event.target;
    if(input.value<=0){
        input.value = 1;
    }
    updateShoppingCartTotal();
}

function addWhatsAppClicked(){
    var producto = document.getElementsByClassName('shopping-cart-item-title');
    var cantidad = document.getElementsByClassName('shopping-cart-quantity-input');
    var mensaje = "Hola ToyStore deseo adquirir:%0D%0A";
    
    
    for(let i=0; i< producto.length; i++){
        
        mensaje += cantidad[i].value + " " + producto[i].textContent + "%0D%0A";
    }
    window.open("https://api.whatsapp.com/send?phone=593984339173&text="+mensaje);
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
}

function llamarPagina1(){
    
    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#337AB7";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#337AB7";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#337AB7";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#337AB7";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');



    document.getElementById('btn-page1').style.background = "#337AB7";
    document.getElementById('btn-page1').style.color = "#fff";
    document.getElementById('btn-page1').style.fontWeight = "bold";

    

    document.getElementById('catalogo1').style.display = "initial";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";

}

function llamarPagina2(){
    
    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#337AB7";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#337AB7";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#337AB7";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');



    document.getElementById('btn-page2').style.background = "#337AB7";
    document.getElementById('btn-page2').style.color = "#fff";
    document.getElementById('btn-page2').style.fontWeight = "bold";

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "initial";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";

}

function llamarPagina3(){
    
    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#337AB7";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#337AB7";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#337AB7";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#337AB7";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');



    document.getElementById('btn-page3').style.background = "#337AB7";
    document.getElementById('btn-page3').style.color = "#fff";
    document.getElementById('btn-page3').style.fontWeight = "bold";

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "initial";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";

}

function llamarPagina4(){
    
    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#337AB7";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#337AB7";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#337AB7";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#337AB7";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');



    document.getElementById('btn-page4').style.background = "#337AB7";
    document.getElementById('btn-page4').style.color = "#fff";
    document.getElementById('btn-page4').style.fontWeight = "bold";

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "initial";
    document.getElementById('catalogo5').style.display = "none";

}

function llamarPagina5(){
    
    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#337AB7";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#337AB7";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#337AB7";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#337AB7";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');



    document.getElementById('btn-page5').style.background = "#337AB7";
    document.getElementById('btn-page5').style.color = "#fff";
    document.getElementById('btn-page5').style.fontWeight = "bold";

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "initial";

}



