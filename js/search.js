const searchFormG = document.querySelector("#search-google");
const searchInputG = document.querySelector("#searchInputG");
const searchFormB = document.querySelector("#search-bing");
const searchInputB = document.querySelector("#searchInputB");

function performSearch(searchInput, searchHeadUrl) {
    return function (event) {
        event.preventDefault();
        const searchText = searchInput.value;
        const searchUrl = searchHeadUrl+encodeURIComponent(searchText);
        searchInput.value = "";
        window.open(searchUrl, "_blank");
    };
}

searchFormG.addEventListener("submit", performSearch(searchInputG, "https://www.google.com/search?q=")); // google 검색
searchFormB.addEventListener("submit", performSearch(searchInputB, "microsoft-edge:https://www.bing.com/search?q=")); // bing검색
