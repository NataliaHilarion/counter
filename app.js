const $btn = document.querySelectorAll(".btn");
const $value = document.getElementById("value");
let count = 0;

$btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    count > 0
    ? ($value.style.color = "green")
    : count < 0
      ? ($value.style.color = "red")
      : $value.style.color = "black"

    $value.innerHTML = count;
  });
});
