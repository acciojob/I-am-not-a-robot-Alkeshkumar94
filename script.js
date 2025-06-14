//your code here
const imgcont = document.getElementById('images');
const resetBtn = document.getElementById('reset');
const verifyBtn = document.getElementById('verify');
const paraMsg = document.getElementById('para');
const promptMsg = document.getElementById('h');

const imageList = ['img1','img2','img3','img4','img5'];
let selectedImages=[];




function init(){
	imgcont.innerhtml = "";
	resetBtn.style.display="none";
	verifyBtn.style.display="none";
	paraMsg.textcontent="none";

	const dupIndex = Math.floor(Math.random()*imageList.length);
	const newimgList = [...imageList,imageList[dupIndex]];


 newimgList.forEach((cls, idx) => {
    const img = document.createElement("img");
    img.classList.add(cls);
    img.dataset.cls = cls;
    img.addEventListener("click", () => handleClick(img));
    imgcont.appendChild(img);
  });
}


function handleClick(img) {
  if (selectedImages.length >= 2 || img.classList.contains("selected")) {
	  
    return;
  }

  img.classList.add("selected");
  selectedImages.push(img);

  resetBtn.style.display = "inline";

  if (selectedImages.length === 2) {
    verifyBtn.style.display = "inline";
  }
}

resetBtn.addEventListener("click", () => {
  selectedImages.forEach(img => img.classList.remove("selected"));
  selectedImages = [];
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  para.textContent = "";
	
});
verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";

  if (selectedImages[0].dataset.cls === selectedImages[1].dataset.cls) {
    para.textContent = "You are a human. Congratulations!";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
});
init();