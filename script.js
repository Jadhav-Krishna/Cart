let arr = [
  {
    id: "product1",
    name: "Bar Chair",
    price: 700,
    image: "pic1-removebg-preview.png"
  },
  {
    id: "product2",
    name: "Chair",
    price: 500,
    image: "pic2-removebg-preview.png"
  },
  {
    id: "product3",
    name: "pot",
    price: 200,
    image: "pic3-removebg-preview.png"
  },
  {
    id: "product4",
    name: "lamp",
    price: 450,
    image: "pic4-removebg-preview.png"
  },
  {
    id: "product5",
    name: "Stand",
    price: 200,
    image: "pic5-removebg-preview.png"
  },
  {
    id: "product6",
    name: "coffee",
    price: 150,
    image: "pic6-removebg-preview.png"
  },
  {
    id: "product7",
    name: "Juice",
    price: 100,
    image: "pic7-removebg-preview.png"
  },
  {
    id: "product8",
    name: "Beer",
    price: 250,
    image: "pic8-removebg-preview.png"
  },
  {
    id: "product9",
    name: "Ice-Cream",
    price: 50,
    image: "pic9-removebg-preview.png"
  },
  {
    id: "product10",
    name: "Chips",
    price: 10,
    image: "pic10-removebg-preview.png"
  },
  {
    id: "product11",
    name: "Coke",
    price: 50,
    image: "pic11-removebg-preview.png"
  },
  {
    id: "product12",
    name: "French fries",
    price: 100,
    image: "pic12-removebg-preview.png"
  }
];

function bringcart() {
  var icart = document.querySelector("#icart");

  var closeCart = document.querySelector("#close-cart");

  var cart = document.querySelector("#Cart");

  var imenu = document.querySelector("#imenu");

  var menu = document.querySelector("#menu");

  var cancel = document.querySelector("#cancel");

  var itemList = document.querySelector("#item-list");

  imenu.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
    menu.style.transform = "translateY(0)";
  });
  cancel.addEventListener("click", () => {
    menu.style.transform = "translateX(100vw)";
  });

  icart.addEventListener("click", () => {
    cart.style.transform = "translateX(0)";
  });
  closeCart.addEventListener("click", () => {
    cart.style.transform = "translateX(100vw)";
  });
}
bringcart();

function product() {
  var clutter = "";
  arr.forEach(function (elem,index) {
    clutter += `<div class="product" id="products">
  <div><img src="${elem.image}" alt="" /></div>
  <h1>${elem.name}</h1>
  <h5 id="pprice">₹${elem.price}.00</h5>
  <button data-index="${index}" class="add">Add To Cart</button>
</div>`;
    document.querySelector("#item").innerHTML = clutter;
  });
}
product();

function searchItem() {
  var overlay = document.querySelector("#overlay");
  let inputBar = document.querySelector("#inputBar")
    inputBar.addEventListener("focus", () => {
        overlay.style.display = "initial";
        overlay.style.zIndex = 2;
      }
    );
    inputBar.addEventListener("blur", () => {
      overlay.style.display = "none";
      overlay.style.zIndex = -1;
    }
  );
  inputBar.addEventListener("input",() => {
    let filterArr = arr.filter(ex => ex.name.toLowerCase().startsWith(inputBar.value.toLowerCase()));
    // console.log(filterArr);
    clutter = "";
    filterArr.forEach(e => {
      clutter += `<div id="search-product">
      <i id="search" class="ri-search-2-line"></i>
      <h3>${e.name}</h3>
    </div>`
    })
    document.querySelector("#item-contain").innerHTML = clutter;
  })
}    
searchItem();

let cart = [];

function addCart(){
  document.querySelector("#item").addEventListener( "click",e => {
    if (e.target.classList.contains('add')){
      cart.push(arr[e.target.dataset.index])
    }
    let clutters = "";
    cart.forEach((elem, index) => {
      clutters += `<div id="added-item">
      <img src="${elem.image}" alt="" />
      <h2>${elem.name}</h2>
      <h5>₹${elem.price}.00</h5>
      <div id="quantity">
        <span id="minus">-</span>
        <span>1</span>
        <span id="plus">+</span>
      </div>
    </div>`
    })
    document.querySelector("#item-list").innerHTML = clutters;
  })
}
addCart();

function addedItem(){
  let clutters = "";
  cart.forEach((elem, index) => {
    clutters += `<div id="added-item">
    <img src="${elem.image}" alt="" />
    <h2>${elem.name}</h2>
    <h5>₹${elem.price}.00</h5>
    <div id="quantity">
      <span id="minus">-</span>
      <span>1</span>
      <span id="plus">+</span>
    </div>
  </div>`
  })
  document.querySelector("#item-list").innerHTML = clutters;
}
addedItem();