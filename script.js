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
	e.target.parentElement.classList.remove("popup_active")
	if (e.target.tagName === "BODY") {
		popup.classList.remove("popup_active")
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"}
}

const showPopup = function(text){
	popup.classList.add("popup_active")
	document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
	popupContent.innerHTML = text;
}

popupClose.addEventListener("click", closePopup)
document.addEventListener("click", closePopup)
//========================================================================================================================================================
// const closePopup2 = function(e){
// 	console.log(e.target);
// 	if (e.target.tagName === "BODY") {
// 		popup.classList.remove("popup_active")
// 		document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"}
	
// }
// document.addEventListener("click", closePopup2)

document.addEventListener('keydown', (e) => {
	if (e.code) {
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"
		popup.classList.remove("popup_active")
	}
 });


//#hw1 link(git)
// 1) при нажатии на поле вне картинки закрывать popup
//     2) предусмотреть возможность закрытия окошка по нажатию на кнопки:
//         (keyup/keydown)
//         - esc
//         - alt+f4 (preventDefault!!!!)
//     3) сделать интерфейс в виде lightbox - все элементы за popup становятся затененными
// Задний фон недвижимый



