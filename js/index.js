
let pageDrop = document.querySelector(".drop-page ul");
let featuresDrop = document.querySelector(".drop-Features ul");	
document.querySelector(".openPagedrop").addEventListener("click",toggelPageDrop);
document.querySelector(".openfeaturesdrop").addEventListener("click",toggelFeaturesDrop);
function toggelPageDrop(){

 featuresDrop.style.display == "block"?featuresDrop.style.display = "none":featuresDrop.style.display = "none";

 pageDrop.style.display == "block"?pageDrop.style.display = "none":pageDrop.style.display = "block";

}

function toggelFeaturesDrop(){

 pageDrop.style.display == "block"?pageDrop.style.display = "none":pageDrop.style.display = "none";

 featuresDrop.style.display == "block"?featuresDrop.style.display = "none":featuresDrop.style.display = "block";


}