// Add click event listener using event delegation
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('collapsible')) {
    event.target.classList.toggle('active');
    var content = event.target.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
});

// JavaScript code for sticky header
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;
  var headerHeight = header.offsetHeight;

  if (scrollPosition > headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the sticky header
    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.offsetTop - headerHeight; // Adjust the target position by subtracting the header height

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

window.addEventListener("popstate", (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});

// Event listener for popstate (back/forward navigation)
window.addEventListener('popstate', (event) => {
    restorePreviousState(event.state);
});

// let coll = document.getElementsByClassName("collapsible");
// for (let i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         let content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//     });
// }

// // When a collapsible is clicked...
// coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.display === "block") {
//         content.style.display = "none";
//         // Remove from localStorage when the section is collapsed
//         localStorage.removeItem(this.id);
//     } else {
//         content.style.display = "block";
//         // Add to localStorage when the section is expanded
//         localStorage.setItem(this.id, 'expanded');
//     }
// });

// // When the page is loaded...
// window.onload = function() {
//     for (let i = 0; i < coll.length; i++) {
//         if (localStorage.getItem(coll[i].id) == 'expanded') {
//             coll[i].classList.add("active");
//             let content = coll[i].nextElementSibling;
//             content.style.display = "block";
//         }
//     }
// }

// window.addEventListener('DOMContentLoaded', () => {
//     const filterButtons = document.querySelectorAll('#filter li');
//     const projectCards = document.querySelectorAll('.card');
  
//     // Filter projects when a filter button is clicked
//     filterButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const filter = button.dataset.filter;
  
//         // Remove 'active' class from all buttons
//         filterButtons.forEach(btn => btn.classList.remove('active'));
  
//         // Add 'active' class to the clicked button
//         button.classList.add('active');
  
//         // Show/hide project cards based on the filter
//         projectCards.forEach(card => {
//           if (filter === 'all' || card.classList.contains(filter)) {
//             card.style.display = 'block';
//           } else {
//             card.style.display = 'none';
//           }
//         });
//       });
//     })});