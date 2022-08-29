export function HorizontalScroll() {
	const productContainers = [...document.querySelectorAll('.product-container')];
	const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
	const preBtn = [...document.querySelectorAll('.pre-btn')];
	return { productContainers, nxtBtn, preBtn };
}
