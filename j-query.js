$(document).ready(() => {
  console.log("Let's get ready to party with jQuery!");
});

$("article img").addClass("image-center");

$("p").last().remove();

$("#title").css("font-size", Math.floor(Math.random() * 100) + 1);

$("<li>The puppy is cute!</li>").appendTo("ol");

$("aside.col-sm-4")
  .empty()
  .append($("<p>", { text: "I'm sorry you had to see that list!" }));

$(".form-control").on("change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();

  $("body").css("background-color", `rgb(${red},${green},${blue})`);
});

$(".image-center").on("click", function () {
  $(this).remove();
});
