const searchText = document.getElementById("search-text");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  searchGif(searchText.value);
});

function searchGif(gifName) {
  const img = document.querySelector("img");
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=67nbgDN20hLwcwImpaWQUFYtHt3Iq3i2&s=${gifName}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (err) {
      alert("Image not found");
    });
}

//document.cookie = "SameSite=None; Secure";
