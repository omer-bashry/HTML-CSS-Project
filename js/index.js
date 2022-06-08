
let pageDrop = document.querySelector(".drop-page ul");
let featuresDrop = document.querySelector(".drop-Features ul");	
let openMnue = document.querySelector(".openmnue");
let closeMnue = document.querySelector(".closemnue");
let navDrop = document.querySelector(".navsmall ul");
let menNav = document.querySelector(".navbar-collapse ul");
let openMnuePage = document.querySelector(".openPagedrop");
let openMnueFeatuers = document.querySelector(".openfeaturesdrop");
 


openMnuePage.addEventListener("click",toggelPageDrop);
openMnueFeatuers.addEventListener("click",toggelFeaturesDrop);

function toggelPageDrop(){

 featuresDrop.style.display == "block"?featuresDrop.style.display = "none":featuresDrop.style.display = "none";

 pageDrop.style.display == "block"?pageDrop.style.display = "none":pageDrop.style.display = "block";

}

function toggelFeaturesDrop() {

 pageDrop.style.display == "block"?pageDrop.style.display = "none":pageDrop.style.display = "none";

 featuresDrop.style.display == "block"?featuresDrop.style.display = "none":featuresDrop.style.display = "block";


}

(function toggelMnue(){	

openMnue.addEventListener("click",OpenMnue);
closeMnue.addEventListener("click",CloseMnue);

})();

function OpenMnue(){
 navDrop.style.display = "block";
 openMnue.style.display = "none";

 setTimeout(() => {
     closeMnue.style.display = "block";
	}, 500);
}

function CloseMnue(){
  navDrop.style.display = "none";
  closeMnue.style.display = "none";

 setTimeout(() => {
     openMnue.style.display = "block";
	}, 500);
}

let navContent = menNav.innerHTML;
 navDrop.innerHTML = navContent;

 document.querySelector(".small li.openPagedrop").innerHTML += `<div class="minMnue" style="display:none;"> ${pageDrop.innerHTML}</div>`;

let smallPagedrop = document.querySelector(".small li.openPagedrop .minMnue");
document.querySelector(".small li.openPagedrop").addEventListener("click", dropdwonPage);


function dropdwonPage(){
	if (smallFeatdrop.style.display == "block") {
		smallFeatdrop.style.display = "none";
	}

	if (smallPagedrop.style.display == "block") {

         document.querySelector(".navsmall .small").style.margin="207px 0 0 0";
	     smallPagedrop.style.display = "none";
	}else{

        document.querySelector(".navsmall .small").style.margin="329px 0 0 0";
	     smallPagedrop.style.display = "block";
	}
	
}


document.querySelector(".small li.openfeaturesdrop").innerHTML +=
 `<div class="minfeat" style="display:none;"> ${featuresDrop.innerHTML}</div>`;

let smallFeatdrop = document.querySelector(".small li.openfeaturesdrop .minfeat");
document.querySelector(".small li.openfeaturesdrop").addEventListener("click", dropdwonfeat);

function dropdwonfeat(){

if (smallPagedrop.style.display == "block") {
		smallPagedrop.style.display = "none"
	}


	if (smallFeatdrop.style.display == "block") {

         document.querySelector(".navsmall .small").style.margin="207px 0 0 0";
	     smallFeatdrop.style.display = "none";
	}else{

        document.querySelector(".navsmall .small").style.margin="329px 0 0 0";
	     smallFeatdrop.style.display = "block";
	}
	
}

document.querySelector(".home").addEventListener("click" , homepage);

function homepage(){
	setTimeout(() => {
         window.location = "index.html";
	}, 1000);
}

document.querySelector(".about").addEventListener("click" , aboutpage);

function aboutpage(){
	setTimeout(() => {
         window.location = "about.html";
	}, 1000);
}
document.querySelector(".contact").addEventListener("click" , contactpage);

function contactpage(){
	setTimeout(() => {
         window.location = "contact.html";
	}, 1000);
}
document.querySelector(".product").addEventListener("click" , productpage);

function productpage(){
	setTimeout(() => {
         window.location = "products.html";
	}, 1000);
}
document.querySelector(".detailse").addEventListener("click" , detailsepage);

function detailsepage(){
	setTimeout(() => {
         window.location = "single-product.html";
	}, 1000);
}

 // loading page 

window.onlaod = setTimeout(() =>{
	document.querySelector(".ovrlayloading").style.display="none";
} , 1500); 
           
 // header fixed in scrolle
let Section = document.querySelector(".nav-down");
window.onscroll =  function  () {
	if (window.scrollY  >= Section.offsetTop) {
        document.querySelector(".nav-feixed-scrolling").classList.add("nav-scroll-down");
          pageDrop.classList.add("mt-5");
          featuresDrop.classList.add("mt-5");

	}else{
		 document.querySelector(".nav-feixed-scrolling").classList.remove("nav-scroll-down");
		   pageDrop.classList.remove("mt-5");
		   featuresDrop.classList.remove("mt-5");

	}
};
   // Add and Remove Quntaty 
   
let Add = document.querySelector(".add-qunty");
let Remove = document.querySelector(".remove-qunty");
let Qunty = document.querySelector(".qunty");

Add.addEventListener("click",function(){
  Qunty.textContent++;
});
Remove.addEventListener("click",function(){
	if (Qunty.textContent <=1 ) {
	}else{
		Qunty.textContent--;
	}
});