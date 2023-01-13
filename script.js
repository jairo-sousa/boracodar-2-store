const changeViewBtn = document.getElementById("changeViewBtn");

const productImage = document.getElementById("productImage");

const currentProduct = {
	code: 42404,
	path: "./assets/",
	rotateView: false,
};
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
