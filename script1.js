document.addEventListener("click", (e) => {
  //create span for snowflake
  var snowflake = document.createElement("span");
  snowflake.classList.add("snowflake");

  //set position of snowflake to mouse pointer's position
  snowflake.style.left = e.offsetX + "px";
  snowflake.style.top = e.offsetY + "px";

  //select random number between 20 and 100
  var size = Math.random() * (100 - 20 + 1) + 20;

  //set width and height
  snowflake.style.width = size + "px";
  snowflake.style.height = size + "px";
  document.body.appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 1000);
});

function previewFile() {
    var preview = document.querySelector('audio');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }