const addNewBookForm = document.getElementById("add-book-form");
const formBtn = document.getElementById("bringup-form");
const addNewBookBtn = document.getElementById("add-book-btn");
const titlebox = document.getElementById("input-box");
const authorbox = document.getElementById("input-box-2");
const pagesbox = document.getElementById("input-box-3");
const parentDiv = document.getElementById("parent");
const childDiv = document.getElementById("child");
const removeBtn = document.querySelector(".remove");

let myLibrary = [];

class Book {
    constructor(title, author, pages, checkbox) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.checkbox = checkbox;
    }
}

// add new book onclick button
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
    const checkbox = "";
    const newBook = new Book(title, author, pages, checkbox);
    myLibrary.push(newBook);
    addNewBook();
    myLibrary.pop([newBook]);
})

// function to clear input boxes
function inputClear() {
    titlebox.value = "";
    authorbox.value = "";
    pagesbox.value = "";
}

// function to add new book to library array & webpage
function addNewBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        let newDiv = document.createElement("div");
        let readDiv = document.createElement("div");
        let removeBtn = document.createElement("button");
        newDiv.setAttribute("class", "child");
        removeBtn.setAttribute("class", "remove");
        
        let removeElement = document.createElement("p");
        removeElement.textContent = "Remove Book"

        let titleElement = document.createElement("p");
        titleElement.textContent = `TITLE: ${book.title}`;

        let authorElement = document.createElement("p");
        authorElement.textContent = `AUTHOR: ${book.author}`;

        let pagesElement = document.createElement("p");
        pagesElement.textContent = `PAGES: ${book.pages}`;

        // checkbox marking read or unread
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";

        let label = document.createElement('label')
        label.htmlFor = "id";
        label.appendChild(document.createTextNode('READ: '));

        readDiv.append(label, checkbox);

        // displays elements onto webpage
        newDiv.append(titleElement, authorElement, pagesElement, removeElement);
        removeBtn.append(removeElement);
        parentDiv.appendChild(newDiv);
        newDiv.append(readDiv);
        newDiv.appendChild(removeBtn);

        inputClear();

        // remove book function onclick
        function removeBook() {
            parentDiv.removeChild(newDiv);
        }
        removeBtn.addEventListener("click", () => {
            removeBook();
        })
    }
}
