// Collection of images to use later
const images = {
  casual: {
    black: [
      "https://i.pinimg.com/736x/37/63/80/37638099b4db3ca6cbcca43a5c0ad044.jpg",
      "https://i.pinimg.com/736x/21/02/1d/21021d4238134690e47ed7aeb5a9da76.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QjlYiv-cL5l5suYyI9aWsIirsXB-v6pKjA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCO6eX3CXzccJsJmJmo6V7984KeeQhabK3lQ&s",
    ],
    white: [
      "images/casualwhite1.jpg",
      "images/casualwhite2.jpg",
      "images/casualwhite3.jpg",
      "images/casualwhite4.jpg",
    ],
    pink: [
      "images/casualpink1.jpg",
      "images/casualpink2.jpg",
      "images/casualpink3.jpg",
      "images/casualpink4.jpg",
    ],
    blue: [
      "images/casualblue1.jpg",
      "images/casualblue2.jpg",
      "images/casualblue3.jpg",
      "images/casualblue4.jpg",
    ],
  },
  formal: {
    black: [
      "images/formalblack1.jpg",
      "images/formalblack2.jpg",
      "images/formalblack3.jpg",
      "images/formalblack4.jpg",
    ],
    white: [
      "images/formalwhite1.jpg",
      "images/formalwhite2.jpg",
      "images/formalwhite3.jpg",
      "images/formalwhite4.jpg",
    ],
    pink: [
      "images/formalpink1.jpg",
      "images/formalpink2.jpg",
      "images/formalpink3.jpg",
      "images/formalpink4.jpg",
    ],
    blue: [
      "https://fabanza.co.uk/media/catalog/product/cache/a5d285fdcf93c9922f60423c3a4a6a35/anishka-creation/202303/blue-net-anarkali-suit-with-heavy-embroidery-work-fabsl21407.jpg",
      "https://curvychiconline.com/cdn/shop/products/plus-size-blue-floral-embellished-sparkle-formal-dress-902270.webp?v=1706878673",
      "https://i.pinimg.com/736x/54/e4/de/54e4de7ddc9699cf3e3012e8420a7e76.jpg",
      "data:image/jpeg;base64,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",
    ],
  },
  party: {
    black: [
      "images/partyblack1.jpg",
      "images/partyblack2.jpg",
      "images/partyblack3.jpg",
      "images/partyblack4.jpg",
    ],
    white: [
      "images/partywhite1.jpg",
      "images/partywhite2.jpg",
      "images/partywhite3.jpg",
      "images/partywhite4.jpg",
    ],
    pink: [
      "images/partypink1.jpg",
      "images/partypink2.jpg",
      "images/partypink3.jpg",
      "images/partypink4.jpg",
    ],
    blue: [
      "images/partyblue1.jpg",
      "images/partyblue2.jpg",
      "images/partyblue3.jpg",
      "images/partyblue4.jpg",
    ],
  },
  business: {
    black: [
      "images/businessblack1.jpg",
      "images/businessblack2.jpg",
      "images/businessblack3.jpg",
      "images/businessblack4.jpg",
    ],
    white: [
      "images/businesswhite1.jpg",
      "images/businesswhite2.jpg",
      "images/businesswhite3.jpg",
      "images/businesswhite4.jpg",
    ],
    pink: [
      "images/businesspink1.jpg",
      "images/businesspink2.jpg",
      "images/businesspink3.jpg",
      "images/businesspink4.jpg",
    ],
    blue: [
      "images/businessblue1.jpg",
      "images/businessblue2.jpg",
      "images/businessblue3.jpg",
      "images/businessblue4.jpg",
    ],
  },
};

// Variables for use in functions
let styleSelected;
let colourSelected;
let selectedImages;

// Listen for clicks on each button and input info into functions
document
  .getElementById("casualbtn")
  .addEventListener("click", () => styleSelection("casual"));
document
  .getElementById("formalbtn")
  .addEventListener("click", () => styleSelection("formal"));
document
  .getElementById("partybtn")
  .addEventListener("click", () => styleSelection("party"));
document
  .getElementById("businessbtn")
  .addEventListener("click", () => styleSelection("business"));

document
  .getElementById("black")
  .addEventListener("click", () => colourSelection("black"));
document
  .getElementById("white")
  .addEventListener("click", () => colourSelection("white"));
document
  .getElementById("pink")
  .addEventListener("click", () => colourSelection("pink"));
document
  .getElementById("blue")
  .addEventListener("click", () => colourSelection("blue"));

// Call image updating function with input of style selected
function styleSelection(style) {
  styleSelected = style;
  updateImages();
}

// Call image updating function with input of colour selected
function colourSelection(colour) {
  colourSelected = colour;
  updateImages();
}

// Function to populate images into divs
function updateImages() {
  if (styleSelected && colourSelected) {
    selectedImages = images[styleSelected][colourSelected];
    document.getElementById(
      "image1"
    ).innerHTML = `<img src="${selectedImages[0]}" alt="Example of ${colourSelected} ${styleSelected} outfit">`;
    document.getElementById(
      "image2"
    ).innerHTML = `<img src="${selectedImages[1]}" alt="Example of ${colourSelected} ${styleSelected} outfit">`;
    document.getElementById(
      "image3"
    ).innerHTML = `<img src="${selectedImages[2]}" alt="Example of ${colourSelected} ${styleSelected} outfit">`;
    document.getElementById(
      "image4"
    ).innerHTML = `<img src="${selectedImages[3]}" alt="Example of ${colourSelected} ${styleSelected} outfit">`;
  }
}
