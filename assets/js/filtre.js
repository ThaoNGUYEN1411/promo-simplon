var btnList = document.querySelectorAll(".button-filtre");
var imgList = document.querySelectorAll(".student");

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let gender = e.currentTarget.getAttribute("gender");
    let type = e.currentTarget.getAttribute("type");
    imgList.forEach((img) => {
      let genderStudent = img.getAttribute("gender");
      let typeStudent = img.getAttribute("type");
      if (
        type == "tous" ||
        gender == "tous" ||
        genderStudent == gender ||
        typeStudent == type ||
        (type == "front-end") & (typeStudent == "full-stack") ||
        (type == "back-end") & (typeStudent == "full-stack")
      ) {
        img.classList.remove("hide");
      } else {
        img.classList.add("hide");
      }
    });
  });
});
