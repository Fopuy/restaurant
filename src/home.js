export function home() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // clear previous content
  
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home");
  
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Fop's Kitchen";
  
    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Where the meat is unquestionable, but the flavor is unforgettable. Join us for homemade Filipino dishes... kinda.";
  
    const tagline = document.createElement("em");
    tagline.textContent = "Locally sourced. Occasionally ethical.";
  
    homeContainer.appendChild(heading);
    homeContainer.appendChild(paragraph);
    homeContainer.appendChild(tagline);
  
    content.appendChild(homeContainer);
  }