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

