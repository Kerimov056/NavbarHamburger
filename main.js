const hamburgen = document.getElementsByClassName("icon");

// hamburgen.addEventListener("click",run);

function run() {
    const list = document.getElementById("List");
    if (list.style.display === "flex") {
      list.style.display = "none";
    } else {
      list.style.display = "flex";
    }
  }