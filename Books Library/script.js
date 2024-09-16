console.log("connected");

function Book(title, author, desc) {
  this.img = "https://m.media-amazon.com/images/I/61TMcLzvNDL._SY466_.jpg";
  this.title = title;
  this.desc = desc;
  this.author = author;
  this.btnText = "Add to Cart";

  this.info = function () {
    return {
      img: this.img,
      title,
      desc,
      author,
      btnText: this.btnText,
    };
  };
}

let book1 = new Book(
  "MURDER OF HISTORY",
  "K.K MENON",
  "A Critique of History Textbooks Used in Pakistan"
);

const myLibrary = [book1];
console.log(myLibrary);

// Displaying all books in web page (HTML)
function displayAlLBooks() {
  const booksHolder = document.querySelector(".books-holder");
  booksHolder.innerHTML = "";
  myLibrary.forEach((book, index) => {
    booksHolder.innerHTML += `<div
                data-index = ${index}
                class="book w-[384px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#" class="max-w-48 block mx-auto bg-gray-400">
                  <img
                    class="rounded-t-lg w-full"
                    src= ${book.img}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                      ${book.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    ${book.desc}
                  </p>
                  <p
                    class="mb-3 font-bold text-sm my-2 text-gray-700 dark:text-gray-400"
                  >
                    Author: ${book.author}
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ${book.btnText}
                  </a>
                </div>
              </div>`;
  });
}
displayAlLBooks();
// Function to add books in myLibrary Array:
const addBookBtn = document.querySelector(".add-book");

addBookBtn.addEventListener("click", () => {
  console.log("open modal");
});

// OPEN AND CLOSE MODAL
const modal = document.getElementById("crud-modal");
const toggleButton = document.querySelectorAll("[data-modal-toggle]");

toggleButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
});

// Logic to add book
const bookForm = document.getElementById("bookForm");
const nameInput = document.getElementById("name");
const authorInput = document.getElementById("author");
const descriptionInput = document.getElementById("description");

// BTNS
const submitBtn = document.getElementById("submitBtn");
const loader = document.getElementById("loader");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBook = new Book(
    nameInput.value,
    authorInput.value,
    descriptionInput.value
  );

  myLibrary.push(newBook);
  loader.classList.remove("hidden");
  loader.classList.add("block");
  submitBtn.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    loader.classList.remove("block");
    submitBtn.classList.remove("hidden");
    modal.classList.toggle("hidden");
    displayAlLBooks();
  }, 1000);

  const allInputs = [nameInput, authorInput, descriptionInput];

  allInputs.forEach((input) => {
    input.value = "";
  });
});
