const changeViewBtn = document.getElementById("changeViewBtn");

const productImage = document.getElementById("productImage");

const code = document.getElementById("code");
const title = document.getElementById("title");
const price = document.getElementById("price");

const currentProduct = {
	code: 42404,
	path: "./assets/",
	title: "Sofá Margot II - Rosé",
	price: "4.000",
	rotateView: false,
};

setProductInfo();

const viewBtnPath = "./assets/";

changeViewBtn.addEventListener("click", () => changeView());

function changeView() {
	if (!currentProduct.rotateView) {
		toggleProductImg("gif", "normalView.svg");
	} else {
		toggleProductImg("svg", "360.svg");
	}
}

function toggleProductImg(extension, btnImg) {
	productImage.src = `${currentProduct.path}${currentProduct.code}.${extension}`;
	currentProduct.rotateView = !currentProduct.rotateView;
	toggleViewBtn(btnImg);
}

function toggleViewBtn(btnImg) {
	changeViewBtn.src = viewBtnPath + btnImg;
}

function setProductInfo() {
	code.innerText = currentProduct.code;
	title.innerText = currentProduct.title;
	price.innerText = currentProduct.price;
}
