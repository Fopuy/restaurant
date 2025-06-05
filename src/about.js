export function about() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // clear previous content
  
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about");
  
    const heading = document.createElement("h2");
    heading.textContent = "About Fop's Kitchen";
  
    const paragraph1 = document.createElement("p");
    paragraph1.textContent =
      "Fop's Kitchen was founded in 2024 by a mysterious chef who believed the best meals come from the most unexpected sources.";
  
    const paragraph2 = document.createElement("p");
    paragraph2.textContent =
      "With unquestionable ingredients and even more unquestionable ethics, we’ve become a local favorite for those who dare to try something new.";
  
    const quote = document.createElement("blockquote");
    quote.textContent = "“You’ve never tasted anything like this... and maybe you shouldn’t.”";
  
    aboutContainer.appendChild(heading);
    aboutContainer.appendChild(paragraph1);
    aboutContainer.appendChild(paragraph2);
    aboutContainer.appendChild(quote);
  
    content.appendChild(aboutContainer);
  }
  
  

