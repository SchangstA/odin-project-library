const addNewBookForm = document.getElementById("add-book-form");
const formBtn = document.getElementById("bringup-form");
const addNewBookBtn = document.getElementById("add-book-btn");
const titlebox = document.getElementById("input-box");
const authorbox = document.getElementById("input-box-2");
const pagesbox = document.getElementById("input-box-3");
const parentDiv = document.getElementById("parent");
const childDiv = document.getElementById("child");
let myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// button onclick events
formBtn.addEventListener("click", () => {
    formBtn.classList.add("visually-hidden");
    addNewBookForm.classList.remove("visually-hidden");
})

addNewBookBtn.addEventListener("click", () => {
    addNewBookForm.classList.add("visually-hidden");
    formBtn.classList.remove("visually-hidden");

    const title = titlebox.value;
    const author = authorbox.value;
    const pages = pagesbox.value;
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    addNewBook();
    myLibrary.pop([newBook]);
})

function addNewBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "child");

        let titleElement = document.createElement("p");
        titleElement.textContent = `Title: ${book.title}`;

        let authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;

        let pagesElement = document.createElement("p");
        pagesElement.textContent = `Pages: ${book.pages}`;

        newDiv.append(titleElement, authorElement, pagesElement);
        parentDiv.appendChild(newDiv);
    }
}