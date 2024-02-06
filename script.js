const data = {
    604: 'Dwarka Sector 21 Metro Station - Connaught Place (CP)',
    301: 'Kashmere Gate ISBT - AIIMS Hospital',
    402: 'Anand Vihar Terminal - Anand Vihar Terminal',
    503: 'Anand Vihar Terminal - Anand Vihar Terminal',
    705: 'Rohini Sector 3 - Lajpat Nagar Metro Station',
    907: 'ITO (Income Tax Office) - Vasant Kunj Terminal'
};

function search() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    if (data.hasOwnProperty(searchTerm)) {
        alert("Category for " + searchTerm + ": " + data[searchTerm]);
    } else {
        alert("Element not found");
    }
}
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

let searchItems = document.getElementById("search-items")

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
  var existingCardWidth = document.querySelector('.list .card').clientWidth;
  // Set the width of the new div to match the existing cards
  newDiv.style.width = existingCardWidth + 'px';

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

  cardDesc.innerText = desc
  cardName.innerText = userName
}
}
