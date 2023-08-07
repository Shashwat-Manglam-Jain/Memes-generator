let memebtn = document.querySelector(".meme-generator .meme-btn");
let memeimage = document.querySelector(".meme-generator img");
let memetext = document.querySelector(".meme-generator .meme-text");
let memeauthor = document.querySelector(".meme-generator .meme-author");
let updateDetails = (url, title, author) => {
  memeimage.setAttribute("src", url);
  memetext.innerHTML = title;
  memeauthor.innerHTML = `Meme by:${author}`;
};

let generatememe = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

memebtn.addEventListener("click", generatememe);
generatememe();
