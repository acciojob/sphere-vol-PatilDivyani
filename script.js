function volume_sphere() {
    let radius = document.getElementById("radius").value;
    let volumeField = document.getElementById("volume");
  
    if (isNaN(radius) || radius <= 0) {
      volumeField.value = "Invalid radius";
    } else {
      let volume = (4/3) * Math.PI * Math.pow(radius, 3);
      volumeField.value = volume.toFixed(4);
        // volumeField.innerText = volumeField.value;
        
    }
    volumeField.value.style.display;
      //button.addEventListener("click", volumeField.value.style.display)
  }
//   window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
let button = document.getElementById("submit");
  button.addEventListener("click", volume_sphere)

  