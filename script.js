
function performSearch() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById("bookInfo");
            bookList.innerHTML = "";

            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const book = item.volumeInfo;
                    const title = book.title;
                    const authors = book.authors ? book.authors.join(", ") : "Автор неизвестен";
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `
                        <span class="bookTitle">${title}.</span>
                        <span class="bookAuthor">Авторы: ${authors}</span>
                        <button class="buyButton">Купить</button>
                    `;
                    bookList.appendChild(listItem);
                });
            } else {
                bookList.innerHTML = "Книги не найдены";
            }
        })
        .catch(error => {
            console.error("Ошибка при выполнении запроса:", error);
        });
}










