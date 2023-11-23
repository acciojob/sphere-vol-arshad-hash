function volume_sphere(event) {
    // Stops the page from reloading
    event.preventDefault();
    
    // Corrected typos in the next two lines
    let form = document.getElementById("MyForm");
    let radius = form["radius"].value;

    // Corrected typos in the next two lines
    let volume = document.getElementById("volume");
    form["volume"].value = (4/3) * Math.PI * Math.pow(radius,3).toFixed(4)
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
