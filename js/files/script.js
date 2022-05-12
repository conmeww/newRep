// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// input mask
let phoneinp = document.getElementById("phone-inp");

Inputmask({
  mask: "+7(999) 999-99-99",
  showMaskOnFocus: true,
  showMaskOnHover: false,
}).mask(phoneinp);
let showMoreProducts = document.getElementById("show-more-works");

if (showMoreProducts || false) {
  showMoreProducts.addEventListener("click", () => {
    let hiddenElements = document.querySelectorAll(".works__items .d-none");

    let commentsList = Array.prototype.slice.call(hiddenElements).slice(0, 3);

    commentsList.forEach((item, index) => {
      item.className = "works__item";
      if (index === 0) {
        item.scrollIntoView({
          behavior: "smooth",
        });
      }
    });

    if (hiddenElements.length === 0) {
      showMoreProducts.className = "d-none";
    }
  });
}

////////////
// typical import
import gsap from "gsap";

// or all tools are exported from the "all" file (excluding members-only plugins):

// don't forget to register plugins

const b1 =
  "linear-gradient(to right,rgba(145, 113, 240, 1),rgba(75, 181, 240, 1),rgba(148, 240, 75, 1),rgba(252, 211, 3, 1),rgba(240, 95, 75, 1),rgba(209, 85, 240, 1));";

const b2 =
  "linear-gradient(to right,rgba(209, 85, 240, 0.5),rgba(240, 95, 75, 1),rgba(252, 211, 3, 0.1),rgba(148, 240, 75, 0.1),rgba(75, 181, 240, 1),rgba(145, 113, 240, 1))";

//via @jack
gsap.fromTo(
  ".info__img--anim",
  { background: b1 },
  {
    ease: "none",
    duration: 2,
    background: b2,
    repeat: -1,
    yoyo: true,
    scale: 0.8,
    opacity: 1,
  }
);
// show messagers header
const btnShowMessagers = document.querySelector(".header__message");
btnShowMessagers.addEventListener("click", function () {
  document.querySelector(".messagers").style.display = "block";
});
document.addEventListener(
  "click",
  function (event) {
    if (
      !event.target.closest(".header__message") &&
      !event.target.closest(".messagers")
    ) {
      closeHeaderMessagers();
    }
  },
  false
);
function closeHeaderMessagers() {
  document.querySelector(".messagers").style.display = "none";
}
// show form header
const btnShowFormHeader = document.querySelector(".header__phone");
btnShowFormHeader.addEventListener("click", function () {
  document.querySelector(".form-header").style.display = "block";
});
document.addEventListener(
  "click",
  function (event) {
    if (
      !event.target.closest(".header__phone") &&
      !event.target.closest(".form-header")
    ) {
      closeHeaderForm();
    }
  },
  false
);
function closeHeaderForm() {
  document.querySelector(".form-header").style.display = "none";
}
/// add to favorits
// const removeCartItemButtons = document.getElementsByClassName("btn-danger");
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//   let button = removeCartItemButtons[i];
//   button.addEventListener("click", function (event) {
//     let buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//   });
// }
// const addToCartButtons = document.getElementsByClassName("shop-item-button");
// for (var i = 0; i < addToCartButtons.length; i++) {
//   let button = addToCartButtons[i];
//   button.addEventListener("click", addToCart);
// }
// function removeCartItem(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
// }
// function addToCart() {
//   let button = event.target;
//   let shopItem = button.parentElement.parentElement;

//   let imageSrc = shopItem.getElementsByClassName("work__img")[0].src;

//   addItemToCart(imageSrc);
// }
// function addItemToCart(imageSrc) {
//   var cartRow = document.createElement("div");
//   var cartItems = document.getElementsByClassName("cart-items")[0];

//   cartRow.classList.add("cart-row");

//   var cartRowContents = `<div class="cart-item cart-column">
//                         <img class="cart-item-image" src="${imageSrc}" width="100" height="100">

//                    <button class="btn btn-danger" type="button">REMOVE</button>  </div>`;
//   cartRow.innerHTML = cartRowContents;
//   cartItems.append(cartRow);
//   cartRow
//     .getElementsByClassName("btn-danger")[0]
//     .addEventListener("click", removeCartItem);
// }
let favsNumberDiv = document.querySelector(".favs-number");
let favsNumber = 0;

console.log(favsNumber);
const removeCartItemButtons = document.getElementsByClassName("favs-remove");
for (var i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;

    let getBtnFav =
      (buttonClicked.parentElement.parentElement.parentElement.getElementsByClassName(
        "favorites-ic"
      )[0].style.display = "block");
    console.log(getBtnFav);
    //getBtnFav.getElementsByClassName("favoites-ic")[0].style.display = "block";
    //console.log(buttonClicked.parentElement.childNodes);
    buttonClicked.parentElement.style.display = "none";

    //buttonClicked.parentElementremove();
    const getImageSrc =
      buttonClicked.parentElement.parentElement.parentElement.getElementsByClassName(
        "work__img"
      )[0].src;
    var cartItems = document.getElementsByClassName("favorites__items")[0];

    var cartItemsNames = cartItems.getElementsByClassName("favorites__img");
    for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].src == getImageSrc) {
        //console.log(getImageSrc);
        //console.log(cartItemsNames);
        cartItemsNames[i].parentElement.parentElement.remove();
      }
    }
    const favCount = document.querySelectorAll(".favorite__item");
    favsNumber--;
    favsNumberDiv.innerHTML = favsNumber;
    if (favCount.length == 0) {
      document.querySelector(".favorites-ic__outer").style.visibility =
        "visible";
      document
        .querySelector(".favorites-ic__inner")
        .classList.remove("favorites-ic--clicked");
      favsNumberDiv.innerHTML = "";
      document.querySelector(".favorites").classList.add("d-none");
      document.querySelector(".favorites__content").classList.add("d-none");
      document.querySelector(".check-works").classList.remove("d-none");
    }
  });
}
const addToCartButtons = document.getElementsByClassName("favorites-ic");
for (var i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];

  button.addEventListener("click", addToCart);
}
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  // const favImageSRC =
  //  buttonClicked.parentElement.parentElement.getElementsByClassName(
  //    "favorites__img"
  //   )[0].src;
  // console.log(favImageSRC);

  // hide sidebar when no fav is in
}
function addToCart() {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  button.style.display = "none";
  shopItem.getElementsByClassName("favs-remove")[0].style.display = "block";
  let imageSrc = shopItem.getElementsByClassName("work__img")[0].src;
  addItemToCart(imageSrc);
  favsNumber++;
  document.querySelector(".favorites-ic__outer").style.visibility = "hidden";
  document
    .querySelector(".favorites-ic__inner")
    .classList.add("favorites-ic--clicked");

  favsNumberDiv.innerHTML = favsNumber;
  console.log(favsNumber);
}
function addItemToCart(imageSrc) {
  document.querySelector(".check-works").classList.add("d-none");
  document.querySelector(".favorites__content").classList.remove("d-none");
  var cartRow = document.createElement("div");
  var cartItems = document.getElementsByClassName("favorites__items")[0];
  cartRow.classList.add("favorites__list");
  var cartItemsNames = cartItems.getElementsByClassName("favorites__img");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].src == imageSrc) {
      cartItemsNames[i].parentElement.parentElement.remove();
    }
  }

  var cartRowContents = `<div class="favorite__item">
                        <img class="favorites__img" src="${imageSrc}">
                        
                        <a
        href="#"
        data-popup="#popup-form-favs"
        class="link btn--underlined plans__btn"
        >Хочу так же!</a
      >
                   </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  //cartRow
  // .getElementsByClassName("btn-danger")[0]
  // .addEventListener("click", removeCartItem);
}

/// fix scroll

/// open favorites sidebar
const btnShowFavorites = document.querySelector(".header__favorites-ic");
btnShowFavorites.addEventListener("click", function () {
  document.querySelector(".favorites").classList.toggle("d-none");
});
document.addEventListener(
  "click",
  function (event) {
    if (
      !event.target.closest(".favorites") &&
      !event.target.closest(".header__favorites-ic") &&
      !event.target.closest(".favorites-ic") &&
      !event.target.closest(".favorites__btn") &&
      !event.target.closest(".btn-remove")
    ) {
      document.querySelector(".favorites").classList.add("d-none");
    }
  },
  false
);
///
const clickedFavIcon = document.querySelector(".header__favorites-ic");

clickedFavIcon.addEventListener("click", function () {
  if (
    document
      .querySelector(".favorites-ic__inner")
      .classList.contains("favorites-ic--clicked")
  ) {
    return;
  }
  // document
  //   .querySelector(".favorites-ic__outer")
  //   .classList.toggle("favorites-ic--outer-hid");
  // document
  //   .querySelector(".favorites-ic__inner")
  //   .classList.toggle("favorites-ic--clicked");
});
