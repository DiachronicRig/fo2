// Toggle side window visibility
document.addEventListener("DOMContentLoaded", function () {
    const sideWindow = document.getElementById("sideWindow");
    const openBtn = document.getElementById("openSide");
    const closeBtn = document.getElementById("closeSide");
  
    // Open side window when clicking the open button
    openBtn.addEventListener("click", function () {
      sideWindow.classList.add("active");
    });
  
    // Close side window when clicking the close button
    closeBtn.addEventListener("click", function () {
      sideWindow.classList.remove("active");
    });
  
    // Optional: if you want the side window to close when clicking outside of it
    document.addEventListener("click", function (e) {
      if (!sideWindow.contains(e.target) && !openBtn.contains(e.target)) {
        sideWindow.classList.remove("active");
      }
    });
  });
  // Listen for the scroll event on the window
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  // Check if the page has been scrolled more than 50 pixels
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links (both desktop and mobile)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();  // Prevent default jump behavior

      // Get target element based on href attribute
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Calculate target's vertical center
        const rect = target.getBoundingClientRect();
        const elementCenter = rect.top + window.scrollY + (rect.height / 2);
        const scrollToPosition = elementCenter - (window.innerHeight / 2);

        // Smooth scroll to the calculated position
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
      
      // If the mobile menu is open, close it after clicking a link.
      if (document.getElementById('navbar').classList.contains('open')) {
        document.getElementById('navbar').classList.remove('open');
      }
    });
  });

  // Hamburger menu toggle for mobile
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      // Toggle the 'open' class on the navbar to show/hide the mobile menu
      navbar.classList.toggle('open');
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.menu_tab a');

  // Shared function for switching tabs.
  const switchTab = function(e) {
    e.preventDefault();
    
    // Save current scroll position so page doesn't jump.
    const currentScroll = window.pageYOffset;
    
    // Remove active class from all tabs.
    tabs.forEach(t => t.classList.remove('active'));

    // Remove active and show classes from all tab content panes.
    const tabContents = document.querySelectorAll('.tab-pane');
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.classList.remove('show');
    });

    // Set the clicked/touched tab as active.
    this.classList.add('active');

    // Get the target ID from data-target if available, otherwise from href.
    const targetId = this.getAttribute('data-target') || this.getAttribute('href');
    const targetContent = document.querySelector(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
      targetContent.classList.add('show');
    }
    
    // Reset scroll position so the page doesn't jump.
    window.scrollTo(0, currentScroll);
  };

  // Listen for both click and touchstart events.
  tabs.forEach(tab => {
    tab.addEventListener('click', switchTab, false);
    tab.addEventListener('touchstart', switchTab, false);
  });
});

/*Notify the user that the still is still under construction*/
window.addEventListener('DOMContentLoaded', () => {
  alert('Questo sito subirà degli aggiornamenti nei prossimi giorni, soprattutto i menù che verranno serviti alla cena!  Ci scusiamo per il disturbo');
});
