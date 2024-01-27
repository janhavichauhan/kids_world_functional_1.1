
var value_of_cart = document.getElementById("cart-value");
var button_of_cart = document.getElementById("cart");
var button_for_adding = document.getElementsByClassName("button");

var elements =[
    {
        name:"Dream catcher drawing",
        quantity: 0,
        dollars:18,
        cents:49,

    },

    {
        name:"This was our pact",
        quantity: 0,
        dollars:4,
        cents:49,

    },
    {
        name:"Stuffed toys",
        quantity: 0,
        dollars:15,
        cents:49,

    },
    
    {
        name:"Birthday Card",
        quantity: 0,
        dollars: 12,
        cents:49,

    },

    {
        name:"Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,

    },

    {
        name:"The famous five",
        quantity: 0,
        dollars: 4,
        cents:59,

    },

    {
        name:"Matilda",
        quantity: 0,
        dollars:6,
        cents:80,

    },
    
    {
        name:"Harry Potter",
        quantity: 0,
        dollars:10,
        cents:0,

    },

    {
        name:"For Young Readers",
        quantity: 0,
        dollars: 7,
        cents:29,

    },


    {
        name:"Wimpy kid-DIY",
        quantity: 0,
        dollars: 4,
        cents:99,

    },


    {
        name:"Monopoly",
        quantity: 0,
        dollars: 19,
        cents:49,

    },


    {
        name:"Jenga",
        quantity: 0,
        dollars: 20,
        cents:99,

    },


    {
        name:"Dart Board",
        quantity: 0,
        dollars:  17,
        cents: 49,

    },




];


function UPDATE_CART() {
  let cart = 0;
  for (let i = 0; i < elements.length; i++) {
    cart = cart + elements[i].quantity;
  }
  value_of_cart.innerHTML = cart;
  console.log(cart);
}

for (let index = 0; index < button_for_adding.length; index++) {
  button_for_adding[index].addEventListener("click", (e) => {
    elements[index].quantity++;
    UPDATE_CART();
  });
}

var Total_dollar_amount = 0;
var Total_cent_amount = 0;

function updatePrice() {
  Total_dollar_amount = 0;
  Total_cent_amount = 0;

  for (let i = 0; i < elements.length; i++) {
    Total_dollar_amount += elements[i].quantity * elements[i].dollars;
    Total_cent_amount += elements[i].quantity * elements[i].cents;
  }

  Total_dollar_amount += Math.floor(Total_cent_amount / 100);
  Total_cent_amount %= 100;
}

button_of_cart.addEventListener("click", () => {
  updatePrice();

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].quantity !== 0) {
      console.log(
        "Item name: " +
          elements[i].name +
          " - Quantity: " +
          elements[i].quantity
      );
    }
  }

  console.log(
    "Total amount: $" +
      Total_dollar_amount +
      "." +
      Total_cent_amount.toString().padStart(2, "0")
  );
});

