$(document).ready(function() {
  /* Set rates + misc */
  var shippingRate = 15.00;
  var fadeTime = 300;

  /* Retrieve data from local storage */
  const price = localStorage.getItem("cartPrice");
  const quantity = localStorage.getItem("cartQuantity");
  const size = localStorage.getItem("cartSize");
  const color = localStorage.getItem("cartColor");

  /* Create a new product entry */
  const productEntry = document.createElement("div");
  productEntry.classList.add("product");

  /* Create HTML structure for the new product entry */
  productEntry.innerHTML = `
    <div class="product-details">
      <div class="product-title"><b>${color}</b></div>
      <p>This is the t-shirt created by Nakib</p>
      <p><b>Size:</b> ${size}</p>
    </div>
    <div class="product-price"><b>${price}</b></div>
    <div class="product-quantity">
      <input type="number" value="${quantity}" min="1">
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    
  `;

  /* Append the new product entry to the shopping cart */
  const shoppingCart = $('.shopping-cart');
  shoppingCart.append(productEntry);

  /* Recalculate cart */
  recalculateCart();

  $('#checkoutButton').click(function() {
    const price = $('.product-price').text();
    const quantity = $('.product-quantity input').val();
    const size = $('.product-details p:contains("Size:")').text().replace("Size: ", "");
    const color = $('.product-details .product-title').text();
  
    // Redirect to the address.html page with query parameters
    window.location.href = `address.html?price=${price}&quantity=${quantity}&size=${size}&color=${color}`;
  });

  /* Remove item from cart */
  $('.shopping-cart').on('click', '.remove-product', function() {
    $(this).closest('.product').remove();
    recalculateCart();
  });

  /* Recalculate cart */
  function recalculateCart() {
    const itemCount = $('.shopping-cart .product').length;

    // Enable/disable checkout button based on item count
    if (itemCount > 0) {
      $('#checkoutButton').prop('disabled', false);
    } else {
      $('#checkoutButton').prop('disabled', true);
    }

    // Recalculate cart code here
  }

  /* Update quantity */
  function updateQuantity(quantityInput) {
    // Update quantity code here
  }
});
