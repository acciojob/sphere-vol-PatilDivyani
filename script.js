function volume_sphere() {
  let radius = document.getElementById("radius").value;
  let volumeField = document.getElementById("volume");

  if (isNaN(radius) || radius <= 0) {
    volumeField.value = "Invalid radius";
  } else {
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(2);
	  volumeField.innerText = volumeField.value;
  }
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
