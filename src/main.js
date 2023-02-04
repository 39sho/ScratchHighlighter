const observer = new MutationObserver(records => {
  document.querySelectorAll("[data-argument-type~='number'], [data-argument-type~='text']")
    .forEach(e => {
      const background = e.querySelector(".blocklyBlockBackground");
      if (isNaN(parseFloat(e.querySelector("text").textContent))) {
        background.style.fill = "lightpink";
      } else {
        background.style.fill = "lightgreen";
      }
    });
});

observer.observe(document.body, {
  characterData: true,
  childList: true,
  subtree: true
});