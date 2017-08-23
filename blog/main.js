// In the navigation bar, make sure you have two links labeled "Blog List", and "Add Blog Entry".
// Add a DOM element that contains input fields for the user to create a title, date, author, blog entry and keywords. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
// Add a <button> element at the bottom of the input fields labeled "Add".
// The input fields and the add button make up the Add Blog Entry View.
// The existing view - all the blog entries - will be referred to as the Blog List View.
// The Add Blog Entry View should not appear when the user first visits your page. Only the blog list should be visible.
// When the user clicks on "Add Blog Entry" in the navigation bar, the Blog List View should be hidden, and the Add Blog Entry View should be shown (see example wireframe).
// When the user clicks on "Blog List" in the navigation bar, the Add Blog Entry View should be hidden, and the Blog List View should be shown (see example wireframe).
// Once the user fills out the blog entry form and clicks the add button, you should collect the values from the input fields, add the blog post to the array of blog objects, and update the blog list in the DOM.
// Part Two
let addBlog = document.getElementById("addBlog");
let blogList = document.getElementById("blogList");
let AddBlogEntry = document.getElementById("Add-Blog-Entry");
let ListView = document.getElementById("List-View");
let button = document.getElementById("button");
let title = document.getElementById("title");
let author = document.getElementById("author")
let date = document.getElementById("date");
let keywords = document.getElementById("keywords");
let blogEntry = document.getElementById("blogEntry");



AddBlogEntry.classList.toggle("hidden");
addBlog.addEventListener("click", function(){
  AddBlogEntry.className="";
  ListView.className="hidden";
});
blogList.addEventListener("click", function(){
  AddBlogEntry.className="hidden"
  ListView.className="";
})
button.addEventListener("click", function(){
  ListView.innerHTML += `<h3>${title.value}</h3>
                         <h4>${author.value}</h4>
                         <h6>${date.value}</h6>
                         <p>${blogEntry.value}</p>
                         <section>${keywords.value}</section>
                          `
})
