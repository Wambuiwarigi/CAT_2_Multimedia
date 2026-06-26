const video = document.getElementById("wildlifeVideo");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
 
  if (video.style.display !== "none") {
    
    video.style.display = "none";
    toggleBtn.textContent = "Show & Play Video";
  } else {
  
    video.style.display = "block";
    if (video.paused) {
      video.play();
    }
    toggleBtn.textContent = "Hide Video";
  }
});