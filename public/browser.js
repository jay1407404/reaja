console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li
        class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
      >

        <span class="item-text">
          ${item.reja}
        </span>

        <div>

          <button
            data-id="${item._id}"
            class="edit-me btn btn-secondary btn-sm mr-1"
          >
            Ozgartirish
          </button>

          <button
            data-id="${item._id}"
            class="delete-me btn btn-danger btn-sm"
          >
            Ochirish
          </button>

        </div>

      </li> `;
}


let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit", function (e) {
    e.preventDefault();
   
    axios.post("/create-item", { reja: createField.value })
    .then((response) =>{
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan urinib ko'ring");
    });
});  

document.addEventListener("click", function (e) {


    // Delete button

    console.log(e.target);
    console.log(e);
    if (e.target.classList.contains("delete-me")) {
      if (confirm("Siz ro'chirishni xohlaysizmi?")) {
        axios.post("delete-item", { id: e.target.getAttribute("data-id") }) 
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan urinib ko'ring");
        });      
    }
  }







    // Edit button
    if (e.target.classList.contains("edit-me")) { 
     alert("Siz o'zgartirish tugmasini bosdingiz"); 
    }
  });