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

//I am declareing any possible variables that I might need
let addBlog = document.getElementById("addBlog");
    blogList = document.getElementById("blogList"),
    AddBlogEntry = document.getElementById("Add-Blog-Entry"),
    ListView = document.getElementById("List-View"),
    button = document.getElementById("button"),
    title = document.getElementById("title"),
    author = document.getElementById("author"),
    date = document.getElementById("date"),
    keywords = document.getElementById("keywords"),
    blogEntry = document.getElementById("blogEntry");


//I am toggleing the add blog entry ... and the blog list
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

//I am now getting data from the blog.json file
let xml = new XMLHttpRequest();
xml.addEventListener("load", xmlLoad);
xml.addEventListener("error", xmlError);
function xmlLoad(event){
  let data = JSON.parse(event.target.responseText);
  showData(data);
};

function xmlError(event){
};
//This is displaying the data to the DOM
function showData(data){
  for(item in data){
    //I will display the blog posts into the DOM
    let dataItem = data[item]



  for(i = 0; i< dataItem.blogEntries.length; i++){
    ListView.innerHTML += `<div class="divs">
    <h3>${dataItem.blogEntries[i].title}</h3>
    <h4>${dataItem.blogEntries[i].author}</h4>
    <h6>${dataItem.blogEntries[i].date}</h6>
    <p>${dataItem.blogEntries[i].blogPost}</p>
    <button class="delete">Delete</button>
    <hr>
    </div>`
  }

  //This is where I'm starting to do the delete function
  let delBtn = document.getElementsByClassName("delete");
  let divs = document.getElementsByClassName("divs");
  for( i =0; i< delBtn.length ; i++){
    console.log("delBtn.length",delBtn.length);
    console.log("I listening");
    delBtn[i].addEventListener("click",(event) => {
      console.log("event.target.parentNode",event.target.parentNode);
      console.log(event);
      event.target.parentNode.remove();
    });
  }

    // console.log("data key", Object.keys(dataItem));
    //I am pulling data specificly

      // dataItem.map(function(){
      //   console.log("this is data",data.blogEntries.title);
      //   ListView.innerHTML += `
      //     <div>
      //
      //       <header>${data.blogEntries[i].title}</header>
      //     </div>
      //   `
      //
      // })




  }

};

xml.open('GET', 'blog.json');
xml.send();
