document.getElementById('subtotal1').style.display = "none";
document.getElementById('subtotal2').style.display = "none";
document.getElementById('descuento1').style.display = "none";
document.getElementById('descuento2').style.display = "none";
document.getElementById('btn-left').disabled = true;
document.getElementById('btn-left').style.cursor = "not-allowed";
document.getElementById('btn-page1').disabled = true;
document.getElementById('btn-page1').style.cursor = "not-allowed";
document.getElementById('btn-page1').style.background = "#0072CE";
document.getElementById('p6').style.display = "none";
document.getElementById('p7').style.display = "none";
document.getElementById('p8').style.display = "none";
document.getElementById('p9').style.display = "none";
document.getElementById('p10').style.display = "none";
document.getElementById('p11').style.display = "none";
document.getElementById('p12').style.display = "none";
document.getElementById('p13').style.display = "none";
document.getElementById('p14').style.display = "none";
document.getElementById('p15').style.display = "none";




const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelectorAll('.comprarButton');
comprarButton.forEach(addWhatsApp => {
    addWhatsApp.addEventListener('click', addWhatsAppClicked);
});

const bLeft = document.querySelectorAll('.to-left');
bLeft.forEach(Left => {
    Left.addEventListener('click', (ActionLeft));
});

const bRight = document.querySelectorAll('.to-right');
bRight.forEach(Right => {
    Right.addEventListener('click', (ActionRight));
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

const goPage6 = document.querySelectorAll('.pagina6');
goPage6.forEach(Page6 => {
    Page6.addEventListener('click', (llamarPagina6));
});

const goPage7 = document.querySelectorAll('.pagina7');
goPage7.forEach(Page7 => {
    Page7.addEventListener('click', (llamarPagina7));
});

const goPage8 = document.querySelectorAll('.pagina8');
goPage8.forEach(Page8 => {
    Page8.addEventListener('click', (llamarPagina8));
});

const goPage9 = document.querySelectorAll('.pagina9');
goPage9.forEach(Page9 => {
    Page9.addEventListener('click', (llamarPagina9));
});

const goPage10 = document.querySelectorAll('.pagina10');
goPage10.forEach(Page10 => {
    Page10.addEventListener('click', (llamarPagina10));
});

const goPage11 = document.querySelectorAll('.pagina11');
goPage11.forEach(Page11 => {
    Page11.addEventListener('click', (llamarPagina11));
});

const goPage12 = document.querySelectorAll('.pagina12');
goPage12.forEach(Page12 => {
    Page12.addEventListener('click', (llamarPagina12));
});

const goPage13 = document.querySelectorAll('.pagina13');
goPage13.forEach(Page13 => {
    Page13.addEventListener('click', (llamarPagina13));
});

const goPage14 = document.querySelectorAll('.pagina14');
goPage14.forEach(Page14 => {
    Page14.addEventListener('click', (llamarPagina14));
});

const goPage15 = document.querySelectorAll('.pagina15');
goPage15.forEach(Page15 => {
    Page15.addEventListener('click', (llamarPagina15));
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

     $(".buttonDelete").click(function(){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            // timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Eliminado del carrito'
          })
          
    });

     shoppingCartRow.querySelector('.shoppingCartItemQuantity')
     .addEventListener('change', quantityChanged);

     updateShoppingCartTotal();
}

function updateShoppingCartTotal(){
    let total = 0;
    let totalItems = 0;
    let descuento = 0;
    const shoppingCartDescuento = document.querySelector('.shoppingCartDescuento');
    const shoppingCartSubtotal = document.querySelector('.shoppingCartSubtotal');
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
        totalItems = totalItems + shoppingCartItemQuantity;
    });
    shoppingCartSubtotal.innerHTML = `$${total.toFixed(2)}`;
    
    if(totalItems >= 6){    
        descuento = total * 0.10;
        shoppingCartDescuento.innerHTML = `$${descuento.toFixed(2)}`;
        total = total - descuento;
        console.log(total);
        var mybr1 = document.createElement('br');
        var mybr2 = document.createElement('br');

        document.getElementById('subtotal1').style.display = "inline";
        document.getElementById('subtotal2').style.display = "inline";
        document.getElementById('subtotal2').appendChild(mybr2);

        document.getElementById('descuento1').style.display = "inline";
        
        document.getElementById('descuento2').style.display = "inline";
        document.getElementById('descuento2').appendChild(mybr1);
        
    }
    else{
        document.getElementById('subtotal1').style.display = "none";
        document.getElementById('subtotal2').style.display = "none";
        document.getElementById('descuento1').style.display = "none";
        document.getElementById('descuento2').style.display = "none";
    }
    shoppingCartDescuento.innerHTML = `$${descuento.toFixed(2)}`;
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
    var precio = document.getElementsByClassName('shoppingCartItemPrice');
    var Descuento = document.querySelector('.shoppingCartDescuento');
    var Total = document.querySelector('.shoppingCartTotal');
    var mensaje = "Hola ToyStore deseo adquirir:%0D%0A";
    
    
    for(let i=0; i< producto.length; i++){
        
        mensaje += cantidad[i].value + " " + producto[i].textContent +" ("+ precio[i].textContent + " c/u)"+ "%0D%0A";
    }
    window.open("https://api.whatsapp.com/send?phone=593981597177&text="+mensaje+"Descuento: "+Descuento.textContent+"%0D%0A"+"Total: "+Total.textContent);
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
}

function llamarPagina1(){
    
    window.scroll(0,0); //Hacer scroll al inicio

    //Deshabilitar botonleft y boton1
    document.getElementById('btn-left').disabled = true;
    document.getElementById('btn-left').style.cursor = "not-allowed";
    document.getElementById('btn-left').style.background = "#e6e4e4";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    document.getElementById('btn-page1').disabled = true;
    document.getElementById('btn-page1').style.cursor = "not-allowed";
    document.getElementById('btn-page1').style.border = "none";
    

    //Habilitar los demas botones
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').style.background = "#0070cc";
    
    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');
    
    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');





    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');


    document.getElementById('btn-page1').style.background = "#0070cc";
    document.getElementById('btn-page1').style.color = "#fff";

    

    document.getElementById('catalogo1').style.display = "block";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";
}



function llamarPagina2(){
    
    window.scroll(0,0);

    document.getElementById('btn-page2').disabled = true;
    document.getElementById('btn-page2').style.cursor = "not-allowed";
    document.getElementById('btn-page2').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');



    document.getElementById('btn-page2').style.background = "#0070cc";
    document.getElementById('btn-page2').style.color = "#fff";

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "block";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";




    document.getElementById('p1').style.display = "inline-block";
    document.getElementById('p6').style.display = "none";

}

function llamarPagina3(){
    
    window.scroll(0,0);
    document.getElementById('btn-page3').disabled = true;
    document.getElementById('btn-page3').style.cursor = "not-allowed";
    document.getElementById('btn-page3').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');








    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');



    document.getElementById('btn-page3').style.background = "#0070cc";
    document.getElementById('btn-page3').style.color = "#fff";

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "block";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";



    document.getElementById('p1').style.display = "inline-block";
    document.getElementById('p2').style.display = "inline-block";
    document.getElementById('p6').style.display = "none";
    document.getElementById('p7').style.display = "none";
}

function llamarPagina4(){
    
    window.scroll(0,0);
    document.getElementById('btn-page4').disabled = true;
    document.getElementById('btn-page4').style.cursor = "not-allowed";
    document.getElementById('btn-page4').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');



    document.getElementById('btn-page4').style.background = "#0070cc";
    document.getElementById('btn-page4').style.color = "#fff";


    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "block";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";




    document.getElementById('p1').style.display = "none";
    document.getElementById('p7').style.display = "none";
    document.getElementById('p8').style.display = "none";
    document.getElementById('p2').style.display = "inline-block";
    document.getElementById('p3').style.display = "inline-block";
    document.getElementById('p6').style.display = "inline-block";
}

function llamarPagina5(){
    
    window.scroll(0,0);
    document.getElementById('btn-page5').disabled = true;
    document.getElementById('btn-page5').style.cursor = "not-allowed";
    document.getElementById('btn-page5').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');





    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');



    document.getElementById('btn-page5').style.background = "#0070cc";
    document.getElementById('btn-page5').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "block";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";



    document.getElementById('p1').style.display = "none";
    document.getElementById('p2').style.display = "none";
    document.getElementById('p8').style.display = "none";
    document.getElementById('p9').style.display = "none";
    document.getElementById('p6').style.display = "inline-block";
    document.getElementById('p7').style.display = "inline-block";
    document.getElementById('p3').style.display = "inline-block";
    document.getElementById('p4').style.display = "inline-block";
}

function llamarPagina6(){
    
    window.scroll(0,0);
    document.getElementById('btn-page6').disabled = true;
    document.getElementById('btn-page6').style.cursor = "not-allowed";
    document.getElementById('btn-page6').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');





    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page6').style.background = "#0070cc";
    document.getElementById('btn-page6').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "block";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";


    document.getElementById('p7').style.display = "inline-block";
    document.getElementById('p8').style.display = "inline-block";
    document.getElementById('p4').style.display = "inline-block";
    document.getElementById('p5').style.display = "inline-block";
    document.getElementById('p2').style.display = "none";
    document.getElementById('p3').style.display = "none";
    document.getElementById('p9').style.display = "none";
    document.getElementById('p10').style.display = "none";
}

function llamarPagina7(){
    
    window.scroll(0,0);
    document.getElementById('btn-page7').disabled = true;
    document.getElementById('btn-page7').style.cursor = "not-allowed";
    document.getElementById('btn-page7').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');






    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page7').style.background = "#0070cc";
    document.getElementById('btn-page7').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "block";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";


    document.getElementById('p8').style.display = "inline-block";
    document.getElementById('p9').style.display = "inline-block";
    document.getElementById('p6').style.display = "inline-block";
    document.getElementById('p5').style.display = "inline-block";
    document.getElementById('p3').style.display = "none";
    document.getElementById('p4').style.display = "none";
    document.getElementById('p10').style.display = "none";
    document.getElementById('p11').style.display = "none";
}

function llamarPagina8(){
    
    window.scroll(0,0);
    document.getElementById('btn-page8').disabled = true;
    document.getElementById('btn-page8').style.cursor = "not-allowed";
    document.getElementById('btn-page8').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page8').style.background = "#0070cc";
    document.getElementById('btn-page8').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "block";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";


    document.getElementById('p7').style.display = "inline-block";
    document.getElementById('p6').style.display = "inline-block";
    document.getElementById('p9').style.display = "inline-block";
    document.getElementById('p10').style.display = "inline-block";
    document.getElementById('p4').style.display = "none";
    document.getElementById('p5').style.display = "none";
    document.getElementById('p11').style.display = "none";
    document.getElementById('p12').style.display = "none";
}

function llamarPagina9(){
    
    window.scroll(0,0);
    document.getElementById('btn-page9').disabled = true;
    document.getElementById('btn-page9').style.cursor = "not-allowed";
    document.getElementById('btn-page9').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');





    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page9').style.background = "#0070cc";
    document.getElementById('btn-page9').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "block";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";


    document.getElementById('p8').style.display = "inline-block";
    document.getElementById('p7').style.display = "inline-block";
    document.getElementById('p10').style.display = "inline-block";
    document.getElementById('p11').style.display = "inline-block";
    document.getElementById('p6').style.display = "none";
    document.getElementById('p5').style.display = "none";
    document.getElementById('p12').style.display = "none";
    document.getElementById('p13').style.display = "none";

}

function llamarPagina10(){
    
    window.scroll(0,0);
    document.getElementById('btn-page10').disabled = true;
    document.getElementById('btn-page10').style.cursor = "not-allowed";
    document.getElementById('btn-page10').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');







    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page10').style.background = "#0070cc";
    document.getElementById('btn-page10').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "block";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";



    document.getElementById('p9').style.display = "inline-block";
    document.getElementById('p8').style.display = "inline-block";
    document.getElementById('p11').style.display = "inline-block";
    document.getElementById('p12').style.display = "inline-block";
    document.getElementById('p7').style.display = "none";
    document.getElementById('p6').style.display = "none";
    document.getElementById('p13').style.display = "none";
    document.getElementById('p14').style.display = "none";
}

function llamarPagina11(){
    
    window.scroll(0,0);
    document.getElementById('btn-page11').disabled = true;
    document.getElementById('btn-page11').style.cursor = "not-allowed";
    document.getElementById('btn-page11').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page11').style.background = "#0070cc";
    document.getElementById('btn-page11').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "block";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";



    document.getElementById('p10').style.display = "inline-block";
    document.getElementById('p9').style.display = "inline-block";
    document.getElementById('p12').style.display = "inline-block";
    document.getElementById('p13').style.display = "inline-block";
    document.getElementById('p8').style.display = "none";
    document.getElementById('p7').style.display = "none";
    document.getElementById('p14').style.display = "none";
    document.getElementById('p15').style.display = "none";
}

function llamarPagina12(){
    
    window.scroll(0,0);
    document.getElementById('btn-page12').disabled = true;
    document.getElementById('btn-page12').style.cursor = "not-allowed";
    document.getElementById('btn-page12').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page12').style.background = "#0070cc";
    document.getElementById('btn-page12').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "block";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";




    document.getElementById('p11').style.display = "inline-block";
    document.getElementById('p10').style.display = "inline-block";
    document.getElementById('p13').style.display = "inline-block";
    document.getElementById('p14').style.display = "inline-block";
    document.getElementById('p9').style.display = "none";
    document.getElementById('p8').style.display = "none";
    document.getElementById('p15').style.display = "none";
}

function llamarPagina13(){
    
    window.scroll(0,0);
    document.getElementById('btn-page13').disabled = true;
    document.getElementById('btn-page13').style.cursor = "not-allowed";
    document.getElementById('btn-page13').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page13').style.background = "#0070cc";
    document.getElementById('btn-page13').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "block";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "none";



    document.getElementById('p12').style.display = "inline-block";
    document.getElementById('p11').style.display = "inline-block";
    document.getElementById('p14').style.display = "inline-block";
    document.getElementById('p15').style.display = "inline-block";
    document.getElementById('p10').style.display = "none";
    document.getElementById('p9').style.display = "none";
}


function llamarPagina14(){
    
    window.scroll(0,0);
    document.getElementById('btn-page14').disabled = true;
    document.getElementById('btn-page14').style.cursor = "not-allowed";
    document.getElementById('btn-page14').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = false;
    document.getElementById('btn-right').style.cursor = "pointer";
    document.getElementById('btn-right').style.background = "#0070cc";
    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');
    
    document.getElementById('btn-page15').disabled = false;
    document.getElementById('btn-page15').style.cursor = "pointer";
    document.getElementById('btn-page15').classList.add('HoverClass1');





    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page15').style.background = "initial";
    document.getElementById('btn-page15').style.color = "#000";
    document.getElementById('btn-page15').style.fontWeight = "initial";
    document.getElementById('btn-page15').classList.add('HoverClass1');




    document.getElementById('btn-page14').style.background = "#0070cc";
    document.getElementById('btn-page14').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "block";
    document.getElementById('catalogo15').style.display = "none";



    document.getElementById('p13').style.display = "inline-block";
    document.getElementById('p12').style.display = "inline-block";
    document.getElementById('p15').style.display = "inline-block";
    document.getElementById('p10').style.display = "none";
}

function llamarPagina15(){
    
    window.scroll(0,0);
    document.getElementById('btn-page15').disabled = true;
    document.getElementById('btn-page15').style.cursor = "not-allowed";
    document.getElementById('btn-page15').style.border = "none";
    
    
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-left').style.cursor = "pointer";
    document.getElementById('btn-left').style.background = "#0070cc";
    document.getElementById('btn-right').disabled = true;
    document.getElementById('btn-right').style.cursor = "not-allowed";
    document.getElementById('btn-right').style.background = "#e6e4e4";

    
    document.getElementById('btn-page1').disabled = false;
    document.getElementById('btn-page1').style.cursor = "pointer";
    document.getElementById('btn-page1').classList.add('HoverClass1');
    
    document.getElementById('btn-page2').disabled = false;
    document.getElementById('btn-page2').style.cursor = "pointer";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').disabled = false;
    document.getElementById('btn-page3').style.cursor = "pointer";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').disabled = false;
    document.getElementById('btn-page4').style.cursor = "pointer";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').disabled = false;
    document.getElementById('btn-page5').style.cursor = "pointer";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').disabled = false;
    document.getElementById('btn-page6').style.cursor = "pointer";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').disabled = false;
    document.getElementById('btn-page7').style.cursor = "pointer";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').disabled = false;
    document.getElementById('btn-page8').style.cursor = "pointer";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').disabled = false;
    document.getElementById('btn-page9').style.cursor = "pointer";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').disabled = false;
    document.getElementById('btn-page10').style.cursor = "pointer";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').disabled = false;
    document.getElementById('btn-page11').style.cursor = "pointer";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').disabled = false;
    document.getElementById('btn-page12').style.cursor = "pointer";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').disabled = false;
    document.getElementById('btn-page13').style.cursor = "pointer";
    document.getElementById('btn-page13').classList.add('HoverClass1');
    
    document.getElementById('btn-page14').disabled = false;
    document.getElementById('btn-page14').style.cursor = "pointer";
    document.getElementById('btn-page14').classList.add('HoverClass1');





    document.getElementById('btn-page1').style.background = "initial";
    document.getElementById('btn-page1').style.color = "#000";
    document.getElementById('btn-page1').style.fontWeight = "initial";
    document.getElementById('btn-page1').classList.add('HoverClass1');

    document.getElementById('btn-page2').style.background = "initial";
    document.getElementById('btn-page2').style.color = "#000";
    document.getElementById('btn-page2').style.fontWeight = "initial";
    document.getElementById('btn-page2').classList.add('HoverClass1');

    document.getElementById('btn-page3').style.background = "initial";
    document.getElementById('btn-page3').style.color = "#000";
    document.getElementById('btn-page3').style.fontWeight = "initial";
    document.getElementById('btn-page3').classList.add('HoverClass1');

    document.getElementById('btn-page4').style.background = "initial";
    document.getElementById('btn-page4').style.color = "#000";
    document.getElementById('btn-page4').style.fontWeight = "initial";
    document.getElementById('btn-page4').classList.add('HoverClass1');

    document.getElementById('btn-page5').style.background = "initial";
    document.getElementById('btn-page5').style.color = "#000";
    document.getElementById('btn-page5').style.fontWeight = "initial";
    document.getElementById('btn-page5').classList.add('HoverClass1');

    document.getElementById('btn-page6').style.background = "initial";
    document.getElementById('btn-page6').style.color = "#000";
    document.getElementById('btn-page6').style.fontWeight = "initial";
    document.getElementById('btn-page6').classList.add('HoverClass1');

    document.getElementById('btn-page7').style.background = "initial";
    document.getElementById('btn-page7').style.color = "#000";
    document.getElementById('btn-page7').style.fontWeight = "initial";
    document.getElementById('btn-page7').classList.add('HoverClass1');

    document.getElementById('btn-page8').style.background = "initial";
    document.getElementById('btn-page8').style.color = "#000";
    document.getElementById('btn-page8').style.fontWeight = "initial";
    document.getElementById('btn-page8').classList.add('HoverClass1');

    document.getElementById('btn-page9').style.background = "initial";
    document.getElementById('btn-page9').style.color = "#000";
    document.getElementById('btn-page9').style.fontWeight = "initial";
    document.getElementById('btn-page9').classList.add('HoverClass1');

    document.getElementById('btn-page10').style.background = "initial";
    document.getElementById('btn-page10').style.color = "#000";
    document.getElementById('btn-page10').style.fontWeight = "initial";
    document.getElementById('btn-page10').classList.add('HoverClass1');

    document.getElementById('btn-page11').style.background = "initial";
    document.getElementById('btn-page11').style.color = "#000";
    document.getElementById('btn-page11').style.fontWeight = "initial";
    document.getElementById('btn-page11').classList.add('HoverClass1');

    document.getElementById('btn-page12').style.background = "initial";
    document.getElementById('btn-page12').style.color = "#000";
    document.getElementById('btn-page12').style.fontWeight = "initial";
    document.getElementById('btn-page12').classList.add('HoverClass1');

    document.getElementById('btn-page13').style.background = "initial";
    document.getElementById('btn-page13').style.color = "#000";
    document.getElementById('btn-page13').style.fontWeight = "initial";
    document.getElementById('btn-page13').classList.add('HoverClass1');

    document.getElementById('btn-page14').style.background = "initial";
    document.getElementById('btn-page14').style.color = "#000";
    document.getElementById('btn-page14').style.fontWeight = "initial";
    document.getElementById('btn-page14').classList.add('HoverClass1');




    document.getElementById('btn-page15').style.background = "#0070cc";
    document.getElementById('btn-page15').style.color = "#fff";
    

    document.getElementById('catalogo1').style.display = "none";
    document.getElementById('catalogo2').style.display = "none";
    document.getElementById('catalogo3').style.display = "none";
    document.getElementById('catalogo4').style.display = "none";
    document.getElementById('catalogo5').style.display = "none";
    document.getElementById('catalogo6').style.display = "none";
    document.getElementById('catalogo7').style.display = "none";
    document.getElementById('catalogo8').style.display = "none";
    document.getElementById('catalogo9').style.display = "none";
    document.getElementById('catalogo10').style.display = "none";
    document.getElementById('catalogo11').style.display = "none";
    document.getElementById('catalogo12').style.display = "none";
    document.getElementById('catalogo13').style.display = "none";
    document.getElementById('catalogo14').style.display = "none";
    document.getElementById('catalogo15').style.display = "block";



    document.getElementById('p14').style.display = "inline-block";
    document.getElementById('p13').style.display = "inline-block";
}

function ActionRight(){
    if($('#catalogo1').is(':Visible')){
        llamarPagina2();
        return;
    }
    if($('#catalogo2').is(':Visible')){
        llamarPagina3();
        return;
    }
    if($('#catalogo3').is(':Visible')){
        llamarPagina4();
        return;
    }
    if($('#catalogo4').is(':Visible')){
        llamarPagina5();
        return;
    }
    if($('#catalogo5').is(':Visible')){
        llamarPagina6();
        return;
    }
    if($('#catalogo6').is(':Visible')){
        llamarPagina7();
        return;
    }
    if($('#catalogo7').is(':Visible')){
        llamarPagina8();
        return;
    }
    if($('#catalogo8').is(':Visible')){
        llamarPagina9();
        return;
    }
    if($('#catalogo9').is(':Visible')){
        llamarPagina10();
        return;
    }
    if($('#catalogo10').is(':Visible')){
        llamarPagina11();
        return;
    }
    if($('#catalogo11').is(':Visible')){
        llamarPagina12();
        return;
    }
    if($('#catalogo12').is(':Visible')){
        llamarPagina13();
        return;
    }
    if($('#catalogo13').is(':Visible')){
        llamarPagina14();
        return;
    }
    if($('#catalogo14').is(':Visible')){
        llamarPagina15();
        return;
    }
}


function ActionLeft(){
    if($('#catalogo2').is(':Visible')){
        llamarPagina1();
        return;
    }
    if($('#catalogo3').is(':Visible')){
        llamarPagina2();
        return;
    }
    if($('#catalogo4').is(':Visible')){
        llamarPagina3();
        return;
    }
    if($('#catalogo5').is(':Visible')){
        llamarPagina4();
        return;
    }
    if($('#catalogo6').is(':Visible')){
        llamarPagina5();
        return;
    }
    if($('#catalogo7').is(':Visible')){
        llamarPagina6();
        return;
    }
    if($('#catalogo8').is(':Visible')){
        llamarPagina7();
        return;
    }
    if($('#catalogo9').is(':Visible')){
        llamarPagina8();
        return;
    }
    if($('#catalogo10').is(':Visible')){
        llamarPagina9();
        return;
    }
    if($('#catalogo11').is(':Visible')){
        llamarPagina10();
        return;
    }
    if($('#catalogo12').is(':Visible')){
        llamarPagina11();
        return;
    }
    if($('#catalogo13').is(':Visible')){
        llamarPagina12();
        return;
    }
    if($('#catalogo14').is(':Visible')){
        llamarPagina13();
        return;
    }
    if($('#catalogo15').is(':Visible')){
        llamarPagina14();
        return;
    }
}