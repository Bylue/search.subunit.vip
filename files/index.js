function buttonClick() {
    const search_bar_text = document.querySelector('#s').value
    console.log(search_bar_text)
    window.open('./results.html?=' + search_bar_text)
    return search_bar_text
}
document
  .getElementById("s")
  .addEventListener("keydown", function(event) {
    const search_bar_text = document.querySelector('#s').value
    if (event.key === "Enter") {
        if (search_bar_text === '') return;
        window.open('./results.html?=' + search_bar_text)
    }
});