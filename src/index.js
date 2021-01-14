// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
document.querySelector("body").style.color = "white";

function handleResize() {
  let width = window.innerWidth;
  if (width < 500) {
    document.body.style.backgroundColor = "blue";
  } else if (width > 400 && width < 600) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "orange";
  }
}

window.addEventListener("resize", handleResize);
