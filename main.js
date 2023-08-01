// reference for button
const btn = document.getElementById('btn');
const bookEl = document.getElementById('bookEl');


// array needed to add the objects to
let myLibrary = []
// class for constructor
class Book{
//Book constructor to create objects
constructor(author, title, pages, read){

    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    
}

toggleRead(){
    this.read = !this.read;
}

}

// toggle read , moved to class
//Book.prototype.toggleRead = function(){
    
//} 

// add function toggleRead to each book created
function toggleRead(index){
    myLibrary[index].toggleRead();
    viewBooks();
}


// function to get user input and add the object to the array.
function addBookToLibrary(){

    const author = document.getElementById('author').value ;
    const title = document.getElementById('title').value ;
    const pages = document.getElementById('pages').value ;
    const read = document.getElementById('read').checked ;

    const newBook = new Book(author, title, pages, read);

    myLibrary.push(newBook);

    
}



//create table data
function viewBooks(){
    let table = document.getElementById('myTable');
    // added this to stop duplicate's to view on table 
    table.innerHTML = "";
    document.querySelector('#author').value = "";
    document.querySelector('#title').value = "";
    document.querySelector('#pages').value = "";
    document.querySelector('#read').checked = "";

       for( let i = 0; i < myLibrary.length; i++){

        let book = myLibrary[i];
    
        let row = `
        <tr>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td>${book.pages}</td>
        <td><button class="toggle-btn" onclick="toggleRead(${i})">${book.read ? "Read" : "Not Read Yet"}</button></td>
        <td><button class="remove-btn" onclick="removeBook(${i})">Remove</button></td>
        </tr>
`

          table.innerHTML += row

       }

      
    
};

//to remove book from table
function removeBook(index){
myLibrary.splice(index, 1);
viewBooks();

}

// to add objects to array 
btn.addEventListener("click", function(event) {
event.preventDefault();
addBookToLibrary();
viewBooks();
console.log(myLibrary);
})
   