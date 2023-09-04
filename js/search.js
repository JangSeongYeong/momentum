const searchForm = document.querySelector("#search-google");


function onSearchSubmit(event){
    event.preventDefault();
    const searchText = document.querySelector("#searchInput").value;
    const googleSearchUrl = `https://www.google.com/search?q=${searchText}`;

    window.open(googleSearchUrl, "_blank"); //_blank: 새 창에서 실행
}

searchForm.addEventListener("submit", onSearchSubmit);