$("form").on("submit", (e) => {
  e.preventDefault();
  let movie = $("#movie").val();
  let rating = $("#rating").val();
  let newLI = $("<li>");
  if (
    typeof +rating === "number" &&
    movie.length >= 2 &&
    +rating >= 0 &&
    +rating <= 10
  ) {
    $("ul").append(newLI.text(`${movie} - ${rating}  `));
    newLI.append($("<button>Remove</button>"));
  }
});

$("ul").on("click", "button", (e) => {
  e.target.closest("li").remove();
});
