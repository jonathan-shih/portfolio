app.get("/", (req, res) => {
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      console.log("down");
    } else {
      console.log("up");
    }
  });
});

app.listen(3000);
