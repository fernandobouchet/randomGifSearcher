const searchText = document.getElementById("search-text");
const searchButton = document.getElementById("search-button");
const MyApiKey = "67nbgDN20hLwcwImpaWQUFYtHt3Iq3i2";
const img = document.querySelector("img");

searchButton.addEventListener("click", () => {
  searchGif(searchText.value);
});

async function searchGif(gifName) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${MyApiKey}&s=${gifName}`,
      { mode: "cors" }
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (error) {
    alert("Gif not found!");
  }
}

//document.cookie = "SameSite=None; Secure";
