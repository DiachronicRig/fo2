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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default jump behavior

    // Get the target element based on the href attribute
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Calculate the target element's position so it's centered in the viewport
      const rect = target.getBoundingClientRect();
      const elementCenter = rect.top + window.scrollY + (rect.height / 2);
      const scrollToPosition = elementCenter - (window.innerHeight / 2);

      // Scroll smoothly to the calculated position
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.menu_tab a');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      // Save current scroll position
      const currentScroll = window.pageYOffset;
      
      // Remove active state from all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Remove 'active' and 'show' classes from all tab content sections
      const tabContents = document.querySelectorAll('.tab-pane');
      tabContents.forEach(content => {
        content.classList.remove('active');
        content.classList.remove('show');
      });

      // Activate the clicked tab and corresponding content pane
      this.classList.add('active');
      const targetId = this.getAttribute('href');
      const targetContent = document.querySelector(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
        targetContent.classList.add('show');
      }
      
      // Reset scroll position to where it was
      window.scrollTo(0, currentScroll);
    });
  });
});

