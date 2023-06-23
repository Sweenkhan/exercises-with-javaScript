let addBtn = document.querySelector(".add")
let addingDiv = document.querySelector(".adding-all")
let nameInput = document.querySelector("#name")
let mailInput = document.querySelector("#email")
let tableDiv = document.querySelector("table")
let printBtn = document.querySelector(".print")

let addingEmail;
let addingName;

let users = []
// let emails = []

addBtn.addEventListener("click", (e) => {

    e.preventDefault()
    console.log("hello")
     addingRow = document.createElement("div")
     addingRow.classList.add(".addingRow")
     addingDiv.appendChild(addingRow)

      addingName = document.createElement("p")
      addingName.classList.add("namePara")
      addingRow.appendChild(addingName)
      
          
      users.push({name: nameInput.value, email: mailInput.value})
      addingName.innerHTML = nameInput.value

               

     addingEmail = document.createElement("p")
      addingEmail.classList.add("mailPara")
      addingRow.appendChild(addingEmail)
      
      // emails.push(mailInput.value)
       addingEmail.innerHTML = mailInput.value 


       nameInput.value = ""
       mailInput.value = ""
})


printBtn.addEventListener("click", (e) => {

  e.preventDefault();

  document.querySelector("table").style.display = "block"
  users.map((users, index) => {
       console.log(users.name)
         tableDiv.insertRow()
       let createRow =  tableDiv.insertRow()
        
        
       let createFCell = document.createElement("TD");
       createRow.appendChild(createFCell)
       createFCell.innerHTML = index + 1

       let createNCell = document.createElement("TD");
       createRow.appendChild(createNCell) 
       createNCell.innerHTML = users.name

       let createECell = document.createElement("TD");
       createRow.appendChild(createECell) 
       createECell.innerHTML = users.email


       addingName.innerHTML = ""
       addingEmail.innerHTML = ""
  })
})


