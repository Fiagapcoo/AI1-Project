let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.getElementById("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    if(index == 0){
        return;
    }
    openModal(`../assets/imgs/gallery/${index}.jpg`);
  });
});

close.addEventListener("click", () =>{
    console.log("clicked");
    wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  
}

