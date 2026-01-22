// Extracts the full name from url for Thankyou page
const regex = /fullName=([^&]+)/;

const match = window.document.URL.match(regex);
const fullName = match ? match[1] : null;

if (fullName) {
  document.getElementById("thanksTitle").innerText =
    `Thank you, ${fullName.replace('+', ' ')} for registering in our website`;

}

// ************************************************************

function validationImages(targetEl, isValid) {
  if (!targetEl) return;

  const existingIcon = targetEl.nextElementSibling;
  if (existingIcon && existingIcon.dataset.validationIcon === "true") {
    existingIcon.remove();
  }

  const img = document.createElement("img");
  img.dataset.validationIcon = "true";
  img.src = isValid
    ? "./Resources/Valid and Not Valid Images/valid.png"
    : "./Resources/Valid and Not Valid Images/notvalid.png";
  img.alt = isValid ? "Valid input" : "Invalid input";
  img.style.width = "20px";
  img.style.height = "20px";
  img.style.marginLeft = "3px";

  targetEl.after(img);
}

// on Focus event show blue border for fullName input
const fullNameInput = document.getElementById("fullName");
if (fullNameInput) {
  fullNameInput.onfocus = function() {
    fullNameInput.style.border = "solid 3px blue";
  };

// on Blur event remove the border for fullName input
  fullNameInput.onblur = function() {
    fullNameInput.style.border = "";

    // Uncomment to use text message for validation instead of images
    // const invalidNameEl = document.getElementById("invalidName");

    // full name Validation
    if(fullNameInput.value.length <= 3 ) {
      // Uncomment to use text message for validation instead of images
      // invalidNameEl.hidden = false;
      // invalidNameEl.style.display = "inline";

      validationImages(fullNameInput, false);
      fullNameInput.style.backgroundColor = "gray";
      fullNameInput.focus();
      fullNameInput.select();
    } else {
      // invalidNameEl.hidden = true;
      // invalidNameEl.style.display = "none";
      validationImages(fullNameInput, true);
      fullNameInput.style.backgroundColor = "white";
    }
  };

}

// Validate if password and repeat password are identical
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const invalidPasswordInput = document.getElementById("invalidPassword");

repeatPassword.onblur = function () {

  // required validation
  if (password.value === "" || repeatPassword.value === "") {
    validationImages(password, false);
    return;
  }

  // identical validation
  if (password.value !== repeatPassword.value) {
    // Uncomment to use text message for validation instead of images
    // invalidPasswordInput.hidden = false;
    // invalidPasswordInput.style.display = "inline";

    validationImages(password, false);
    password.style.backgroundColor = "gray";
    repeatPassword.style.backgroundColor = "gray";
  } else {
    // Uncomment to use text message for validation instead of images
    // invalidPasswordInput.hidden = true;
    // invalidPasswordInput.style.display = "none";
    validationImages(password, true);
    validationImages(repeatPassword, true);
    password.style.backgroundColor = "white";
    repeatPassword.style.backgroundColor = "white";
  }
}

// Handles submit event for the register form
const registerForm = document.getElementById("registerForm");
registerForm.onsubmit = function (event) {
  if(fullNameInput.value.length <= 3 || password.value !== repeatPassword.value) {
    event.preventDefault();
    alert("Plz correct the validation errors first");
    return;
  }
};

// Simple photo gallery / slideshow
const galleryImages = [
  "Resources/Images For Slide Show/1.jpg",
  "Resources/Images For Slide Show/2.jpg",
  "Resources/Images For Slide Show/3.jpg",
  "Resources/Images For Slide Show/4.jpg",
  "Resources/Images For Slide Show/5.jpg",
  "Resources/Images For Slide Show/6.jpg",
  "Resources/Images For Slide Show/7.jpg",
  "Resources/Images For Slide Show/8.jpg"
];

const galleryImageEl = document.getElementById("galleryImage");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const galleryContainer = document.getElementById("galleryContainer");

if (galleryImageEl && playBtn && stopBtn && nextBtn && prevBtn) {
  let slideIndex = 0;
  let slideTimer = null;

  function renderSlide() {
    galleryImageEl.src = galleryImages[slideIndex];
  }

  function showNext() {
    slideIndex = (slideIndex + 1) % galleryImages.length;
    renderSlide();
  }

  function showPrev() {
    slideIndex = (slideIndex - 1 + galleryImages.length) % galleryImages.length;
    renderSlide();
  }

  function startSlideShow() {
    stopSlideShow();
    slideTimer = setInterval(showNext, 500);
  }

  function stopSlideShow() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  playBtn.onclick = startSlideShow;
  stopBtn.onclick = stopSlideShow;
  nextBtn.onclick = function() {
    stopSlideShow();
    showNext();
  };
  prevBtn.onclick = function() {
    stopSlideShow();
    showPrev();
  };

  if (galleryContainer) {
    galleryContainer.onmouseenter = startSlideShow;
    galleryContainer.onmouseleave = stopSlideShow;
  }

  renderSlide();
}

// DOM image creation demo
const domContainer = document.getElementById("domContainer");
const appendDomBtn = document.getElementById("appendDomBtn");
const insertBeforeBtn = document.getElementById("insertBeforeBtn");
const removeDomBtn = document.getElementById("removeDomBtn");

if (domContainer && appendDomBtn && insertBeforeBtn && removeDomBtn) {
  let domImg = null;

  function createImageNode() {
    const img = document.createElement("img");
    img.setAttribute("src", "Resources/Images For Slide Show/1.jpg");
    img.setAttribute("alt", "DOM created image");
    img.width = 120;
    img.height = 80;
    img.dataset.domDemo = "true";
    return img;
  }

  function alertChildCount() {
    alert(`Child nodes in container: ${domContainer.childNodes.length} (text nodes count too)`);
  }

  appendDomBtn.onclick = function() {
    domImg = createImageNode();
    domContainer.appendChild(domImg);
    alertChildCount();
  };

  insertBeforeBtn.onclick = function() {
    domImg = createImageNode();
    const referenceNode = domContainer.firstChild; // insertBefore can target any node; here it prepends when a child exists
    domContainer.insertBefore(domImg, referenceNode);
    alertChildCount();
  };

  removeDomBtn.onclick = function() {
    if (domImg && domImg.parentNode === domContainer) {
      domContainer.removeChild(domImg);
      domImg = null;
    } else if (domContainer.lastElementChild) {
      domContainer.removeChild(domContainer.lastElementChild);
    }
    alertChildCount();
  };
}

