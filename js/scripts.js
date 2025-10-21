// Add a simple animation on load
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const logo = document.querySelector(".logo-container img");

    title.style.opacity = "0";
    logo.style.opacity = "0";

    setTimeout(() => {
        title.style.transition = "opacity 1s ease-in-out";
        logo.style.transition = "opacity 1.5s ease-in-out";
        title.style.opacity = "1";
        logo.style.opacity = "1";
    }, 200);
});


document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const logo = document.querySelector(".logo-container img");

  const progressBar = document.getElementById("progressBar");
  const loadingText = document.getElementById("loadingText");
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");
  const siteContent = document.getElementById("siteContent");

  // Initial opacity
  title.style.opacity = "0";
  logo.style.opacity = "0";

  // Animate title/logo after slight delay
  setTimeout(() => {
    title.style.transition = "opacity 1s ease-in-out";
    logo.style.transition = "opacity 1.5s ease-in-out";
    title.style.opacity = "1";
    logo.style.opacity = "1";
  }, 200);

  
  // Loading screen progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    progressBar.style.width = progress + "%";
    loadingText.textContent = "Loading " + progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      loadingScreen.style.transition = "opacity 1s ease";
      loadingScreen.style.opacity = "0";

      setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "flex";

        setTimeout(() => {
          mainContent.classList.add("show");

          setTimeout(() => {
            mainContent.classList.remove("show");
            mainContent.classList.add("hide");

            setTimeout(() => {
              mainContent.style.display = "none";
              siteContent.style.display = "block";
            }, 1000);
          }, 3000);
        }, 100);
      }, 1000);
    }
  }, 66);
});
