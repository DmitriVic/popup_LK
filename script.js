const images = ["img/bird.svg", 'img/cat.svg', "img/dog.svg"];
const popup = document.querySelector('.popup');
const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

images.forEach(el => {
	const img =document.createElement('div')
	img.className = 'mini__item';
	img.style.backgroundImage = `url(${el})`;
	img.style.backgroundColor = "white"; 
	img.addEventListener('click', e => 
	showPopup(`<img alt="pic" src='${el}'>`))
	document.body.append(img)
})


const closePopup = function(e){
	console.log(e.target);
	//e.target.parentElement.classList.remove("popup_active")
	//document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"
	if ( e.target.tagName === "BODY" || e.target.className === "popup__close") {
		popup.classList.remove("popup_active")
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"}
		e.stopPropagation()
}

const showPopup = function(text){
	popup.classList.add("popup_active")
	document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
	//document.body.style.overflow  = "hidden"
	popupContent.innerHTML = text;
}

popupClose.addEventListener("click", closePopup)
window.addEventListener("click", closePopup)
window.addEventListener('keydown', (e) => {
	if (e.code) {
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"
		popup.classList.remove("popup_active")
	}
 });
//========================================================================================================================================================
//popup.classList.contains("popup_active") &&


// const closePopup2 = function(e){
// 	console.log(e.target);
// 	if (e.target.tagName === "BODY") {
// 		popup.classList.remove("popup_active")
// 		document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"}
	
// }
// document.addEventListener("click", closePopup2)




//#hw1 link(git)
// 1) при нажатии на поле вне картинки закрывать popup
//     2) предусмотреть возможность закрытия окошка по нажатию на кнопки:
//         (keyup/keydown)
//         - esc
//         - alt+f4 (preventDefault!!!!)
//     3) сделать интерфейс в виде lightbox - все элементы за popup становятся затененными
// Задний фон недвижимый



