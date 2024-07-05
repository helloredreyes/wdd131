// toggle menu
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('header nav');

  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('menu-open');
      if (navMenu.classList.contains('menu-open')) {
          menuToggle.innerHTML = '&times;'; // "X"
      } else {
          menuToggle.innerHTML = '&#9776;'; // "☰"
      }
  });
});

// temple cards
// scripts/filtered-temples.js

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
      templeName: "Sydney Australia",
      location: "Carlingford, New South Wales, Australia",
      dedicated: "1984, September, 20",
      area: 11700,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
    },
    {
      templeName: "Provo Utah",
      location: "Provo, Utah, United States",
      dedicated: "1972, February, 9",
      area: 128325,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-33711-main.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Hokkaido",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Ratchathewi, Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    }
  ];
  
  // 1. create function to generate temple cards from the above
  function displayTemples(filteredTemples) {
    const figures = document.querySelector('.figures');
    figures.innerHTML = '';
  
    filteredTemples.forEach((temple) => {
      const templeCard = document.createElement('div');
      templeCard.className = 'temple-card';
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
      `;
      figures.appendChild(templeCard);
    });
  }
  
  // Event listeners for navigation menu items
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  });
  
  document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.textContent;
  
      let filteredTemples = temples;
  
      if (filter === 'Old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      } else if (filter === 'New') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      } else if (filter === 'Large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (filter === 'Small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
      }

  
      displayTemples(filteredTemples);
    });
  });
  
  // Display temples by default on page load
  displayTemples(temples);