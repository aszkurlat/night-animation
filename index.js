document.addEventListener("DOMContentLoaded", function () {
  const nightAnimation = new NightAnimation(".element");

  document.addEventListener("mousemove", (e) =>
    nightAnimation.listenCursorMove(e)
  );
});
