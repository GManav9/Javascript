fetch("http://localhost:3000/cart/")
  .then((res) => res.json())
  .then((res) => {
    let data = "";
    let totalPrice = 0;
    res.forEach((el, i) => {
      data += `
                <div class="cart-item"></div>
              <div class="item-details">
          <img src="${el.image}" alt="Swimming Jammer" style="width=100px"; height="200px" />
          <div>
            <h3>NABAIJI Swimming jammer Fiti black red mesh</h3>
            <p>Size: M &nbsp; | &nbsp; Qty: 1</p>
            <p class="price">
              ₹${el.price} &nbsp; <span class="original-price"></span> &nbsp;
              38% Off
            </p>
            <p>Delivery by 22nd Sep 2024</p>
          </div>
        </div>
        <button class="remove-btn">Remove</button>
      </div>
      <p class="free-delivery-note">
        Add items worth ₹1,700 to avail free delivery.
      </p>
    </div>
            `;
      totalPrice += el.price;
    });
    document.querySelector("#allCarts").innerHTML = data;
    document.querySelector("#totalPrice").innerHTML = `Total: ₹${totalPrice}`;
  })
  .catch((err) => {
    console.log(err);
  });

// <input type="checkbox" checked />;
