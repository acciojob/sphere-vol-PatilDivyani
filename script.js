function volume_sphere() {
    //Write your code here
	let r = document.getElementById("radius");
  let vol = 4/3*22/7*(r**2);
	document.getElementById("volume").innerHTML = vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
