//Open and Close form

const myForm = document.getElementById("myForm");
function openForm() {
    myForm.style.display = "block";
  }
  
  function closeForm() {
    myForm.style.display = "none";
  }
  


const form = document.getElementById('myForm');
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const { name, email, password, subject} = this.elements;
  console.log(name.value, email.value, password.value, subject.value);


});
