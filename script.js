


const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("active");
  });
});

const list=document.querySelector(".list");
const arrowbtns=document.querySelectorAll("#wrapper i");
const firstCardWidth= list.querySelector(".card").offsetWidth;
arrowbtns.forEach(btn => {
btn.addEventListener("click",() => {
list.scrollLeft = btn.id ==="left" ? -firstCardWidth: firstCardWidth;
})
});



function update(){
  var selectedCategory = document.getElementById('category-options').value;
var userName = document.getElementById("name").value
var desc = document.getElementById("Description").value

var cardDesc = document.getElementById("desc")
var cardName = document.getElementById("cardname")



if(selectedCategory == "thanks" || selectedCategory == "new-feature"){
  var newDiv = document.createElement('div');
  newDiv.classList.add('card');
  newDiv.style.height = '300px';
  // newDiv.style.width = '300px';
  var image = document.createElement('img');
  image.src = '666201.png';

  var p1 = document.createElement('p');
  p1.textContent = userName

  var p2 = document.createElement('p');
  p2.textContent = desc

  newDiv.appendChild(image);
  newDiv.appendChild(p1);
  newDiv.appendChild(p2);
  newDiv.attributeStyleMap

  document.getElementById('issues').appendChild(newDiv);
}
}


function update(){
  var selectedCategory = document.getElementById('category-options').value;
var userName = document.getElementById("name").value
var desc = document.getElementById("Description").value

var hideText = document.getElementById("wrapper-text")


if(selectedCategory == "thanks" || selectedCategory == "new-feature"){
  var newDiv = document.createElement('div');
  newDiv.classList.add('card');
  newDiv.style.height = '300px';
  // newDiv.style.width = '300px';
  var image = document.createElement('img');
  image.src = '666201.png';

  var p1 = document.createElement('p');
  p1.textContent = userName

  var p2 = document.createElement('p');
  p2.textContent = desc

  newDiv.appendChild(image);
  newDiv.appendChild(p1);
  newDiv.appendChild(p2);
  newDiv.attributeStyleMap

  document.getElementById('issues').appendChild(newDiv);

  hideText.style.display="none"
}
}

function search_routes() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('routee');
 
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}
