<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home Page | UIU Supplement</title>
  <!-- Font Awesome CDN Link -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background-color: #FAF0E6;
    }

    .container {
      display: flex;
      min-height: 100vh;

    }

    .main {
      flex: 1;
      margin-left: 250px;
      padding: 0 40px;
    }

    /* Left Navigation */
    nav {
      width: 100%;
      max-width: 250px;
      background-color: #1F1F1F;
      padding: 20px;
      height: 100vh;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
    }

    .styled-title {
      font-size: 30px;
      font-weight: bold;
      color: #FF3300;
      font-family: "Righteous", serif;
      font-weight: 400;
    }

    nav ul {
      list-style-type: none;
      padding-top: 20px;
    }

    nav ul li {
      margin: 15px 0;
    }

    nav ul li a {
      color: #fff;
      font-size: 16px;
      display: flex;
      align-items: center;
      padding: 7px;
      text-decoration: none;
    }

    nav ul li a:hover {
      background-color: #FF3300;
      color: #fff;
      border-radius: 10px;
    }

    nav ul li a .nav-item {
      margin-left: 15px;
    }

    .nav-bottom-section {
      margin-top: auto;
    }

    nav ul li:last-child {
      margin-top: 30px;
    }

    /* Log Out Button */
    .logout-btn {
      background-color: #FF3300;
      color: white;
      padding: 10px 20px;
      text-align: center;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      margin-top: 20px;
      cursor: pointer;
      text-decoration: none;
    }

    .logout-btn i {
      margin-right: 10px;
    }

    .logout-btn:hover {
      background-color: #e64a19;
    }

    .header-icons {
      display: flex;
      align-items: center;
      position: absolute;
      right: 40px;
      top: 20px;
    }

    .header {
      display: flex;
      /* Use flexbox */
      justify-content: space-between;
      /* Aligns items at the edges */
      align-items: center;
      /* Center items vertically */
    }

    /*title CamSociety*/
    nav ul li a.logo h1.styled-title:hover {
      color: #ffffff;
      /* Change text color on hover */
      text-shadow: 2px 2px 10px #FF3300;
      /* Add glowing effect */
      transition: all 0.3s ease;
      /* Smooth transition */
    }

    .icon {
      margin: 0 15px;
      font-size: 25px;
      color: #555;
      cursor: pointer;
    }

    .icon:hover {
      color: #FF3300;
      /* Change color on hover */
    }

    /* Profile Icon Dropdown */
    .profile-icon {
      position: relative;
      cursor: pointer;
      color: #555;
      font-size: 25px;
      margin-left: 15px;
    }

    .profile-icon:hover {
      color: #FF3300;
    }

    .dropdown {
      display: none;
      /* Hidden by default */
      position: absolute;
      right: 0;
      background-color: #fff;
      font-size: medium;
      min-width: 220px;
      /* Slightly wider for aesthetics */
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      z-index: 1;
      margin-top: 5px;
      /* Add space between the profile icon and dropdown */
    }

    .dropdown a {
      color: #555;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      transition: background-color 0.3s;
      /* Smooth background color change */
    }

    .dropdown a:hover {
      background-color: #f0f0f5;
      /* Highlight on hover */
    }

    .dropdown.show {
      display: block;
      /* Show dropdown when it has the "show" class */
    }



    /* Media Queries for Responsiveness */
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      nav {
        width: 100%;
        height: auto;
        position: relative;
      }

      .main {
        margin-left: 0;
        padding: 20px;
      }
    }

    @media (max-width: 1200px) {
      .main {
        padding: 20px;
      }
    }

    /* Image Slider */
    .slider {
      width: 100%;
      max-width: 1300px;
      height: 400px;
      margin: 40px auto;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
    }

    .slides {
      display: flex;
      width: 700%;
      height: 100%;
      transition: all 0.5s ease;
    }

    .slide {
      width: 100%;
      flex: 1 1 100%;
    }

    .slide img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    /* Manual navigation */
    .manual-nav {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      bottom: 10px;
    }

    .manual-btn {
      border: 2px solid #FF3300;
      padding: 5px;
      border-radius: 50%;
      cursor: pointer;
      margin: 0 5px;
      transition: background-color 0.3s;
    }

    .manual-btn:hover {
      background-color: #FF3300;
    }

    /* Active state for the manual navigation */
    .manual-btn.active {
      background-color: #FF3300;
    }

    /* Top Box Styles */
    .top-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: calc(100% - 250px);
      /* Adjust width to exclude the nav width */
      height: 70px;
      /* Set the box height */
      background-color: #333;
      color: #fff;
      position: fixed;
      top: 0;
      left: 250px;
      /* Align to the end of the navigation */
      padding: 10px 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      /* Ensure it appears on top */
      box-sizing: border-box;
    }

    .top-box .box-item {
      display: flex;
      align-items: center;
      font-size: 18px;
      cursor: pointer;
      margin-right: 15px;
    }

    .top-box .box-item i {
      font-size: 25px;
      margin-right: 10px;
      color: #FF3300;
    }

    .top-box .box-item:hover i {
      color: #fff;
    }

    .main {
      margin-top: 70px;
      /* Add margin to avoid overlap with the top box */
    }

    /* Logo and Search Box Styling */
    .search-container {
      display: flex;
      align-items: center;
      margin-right: auto;
      /* Push the search box to the left */
    }

    .search-container .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    .search-container .search-box {
      width: 300px;
      padding: 8px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      font-size: 14px;
    }

    .search-container .search-btn {
      padding: 8px 10px;
      border: none;
      background-color: #FF3300;
      color: white;
      font-size: 14px;
      border-radius: 5px;
      cursor: pointer;
    }

    .search-container .search-btn:hover {
      background-color: #e64a19;
    }

    /* Adjustments for responsiveness */
    @media (max-width: 768px) {
      .search-container .search-box {
        width: 200px;
      }
    }

    .section-container {
      margin: 20px 0;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .row {
      display: flex;
      gap: 20px;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .card {
      background: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      flex: 1 1 calc(30% - 100px);
      max-width: calc(30% - 100px);
      text-align: center;
      padding: 15px;
    }

    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    .card h3 {
      margin: 10px 0;
      font-size: 18px;
      color: #333;
    }

    .card p {
      margin: 5px 0;
      font-size: 14px;
      color: #666;
    }

    #userIdDisplay{
      color: #FAF0E6;
    }
  </style>
</head>

<body>
  <div class="container">
    <nav>
      <ul>
        <li><a href="homepage.php" class="logo">
            <h1 class="styled-title">CamSociety</h1>
          </a></li>
        <li><a href="homepage.php" class="active">
            <i class="fas fa-home"></i>
            <span class="nav-item">Home</span>
          </a></li>
        <li><a href="#">
            <i class="fas fa-exchange-alt"></i>
            <span class="nav-item">Market Place</span>
          </a></li>
        <li><a href="#">
            <i class="fas fa-building"></i>
            <span class="nav-item">Book Event</span>
          </a></li>
        <li><a href="#">
            <i class="fas fa-user"></i>
            <span class="nav-item">Hire Photographer</span>
          </a></li>
        <li><a href="#">
            <i class="fas fa-briefcase"></i>
            <span class="nav-item">Photo Sale</span>
          </a></li>
        <li><a href="#">
            <i class="fas fa-dumpster"></i>
            <span class="nav-item">Blog and Tips</span>
          </a></li>
        <hr>

        <!-- Bottom Section -->
        <div class="nav-bottom-section">
          <li><a href="#">
              <i class="fas fa-cog"></i>
              <span class="nav-item">Settings & Privacy</span>
            </a></li>
          <li><a href="#">
              <i class="fas fa-question-circle"></i>
              <span class="nav-item">Help & Support</span>
            </a></li>
          <li><a href="#">
              <i class="fas fa-comment-dots"></i>
              <span class="nav-item">Give Feedback</span>
            </a></li>

          <!-- Log Out Button -->
          <li><a href="#" class="logout-btn">
              <i class="fas fa-sign-out-alt"></i> Log Out
            </a></li>
        </div>
      </ul>
    </nav>

    <section class="main">
      <!-- Notification and Profile Icons -->
      <div class="header-icons">
        <div class="top-box">
          <div class="search-container">
            <img src="slider_images/Camera-Logo-with-searchbox.png" alt="Logo" class="logo">
            <input type="text" placeholder="Search..." class="search-box">
            <button class="search-btn"><i class="fas fa-search"></i></button>
          </div>
          <div class="box-item">
            <i class="fas fa-comments"></i>
          </div>
          <div class="box-item">
            <i class="fas fa-bell"></i>
          </div>
          <div class="box-item">
            <!-- Profile Icon Dropdown -->
            <div class="profile-icon">
              <span id="userIdDisplay" onclick="toggleDropdown()">Shariful</span>
              <i class="far fa-user-circle" onclick="toggleDropdown()"></i>
              <i class="bx bx-user"></i>

              <div class="dropdown" id="profileDropdown">
                <a href="uiusupplementhomepage.php">Dashboard</a>
                <a href="useraccount.php">My Profile</a>
                <a href="#">My Sell list</a>
                <a href="#">Lost Product Update</a>
                <a href="#">My Mentors</a>
                <a href="uiusupplementlogin.html" class="logout-btn">
                  <i class="fas fa-sign-out-alt"></i> Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Image Slider Section -->
      <div class="slider">
        <div class="slides">
          <!-- Images for the slider -->
          <div class="slide">
            <a href="#">
              <img src="slider_images/hire-photographer-image.png" alt="Image 1">
            </a>
          </div>
          <div class="slide">
            <a href="availablerooms.html">
              <img src="slider_images/marketplace.png" alt="Image 2">
            </a>
          </div>
          <div class="slide">
            <a href="browsementors.html">
              <img src="slider_images/sell-photo.png" alt="Image 3">
            </a>
          </div>
          <div class="slide">
            <a href="parttimejob.html">
              <img src="slider_images/event-booking.png" alt="Image 4">
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src="slider_images/blog-and-tips.png" alt="Image 5">
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src="slider_images/hire-photographer-image.png" alt="Image 6">
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src="slider_images/blog-and-tips.png" alt="Image 7">
            </a>
          </div>
        </div>
        <!-- Manual navigation -->
        <div class="manual-nav">
          <span class="manual-btn active"></span>
          <span class="manual-btn"></span>
          <span class="manual-btn"></span>
          <span class="manual-btn"></span>
          <span class="manual-btn"></span>
          <span class="manual-btn"></span>
          <span class="manual-btn"></span>
        </div>
      </div>
      <!--main contents-->
      <div class="content">
        <!-- Marketplace Section -->
        <div class="section-container">
          <h2>Marketplace <a href="#" style="float: right; font-size: 16px;">See All</a></h2>
          <div class="row">
            <div class="card">
              <img src="sample_photos_marketplace/sample-camera.png" alt="Camera">
              <h3>Canon EOS 90D</h3>
              <p>Price: BDT 1,20,000</p>
              <p>Condition: Like New</p>
            </div>
            <div class="card">
              <img src="sample_photos_marketplace/sample-camera1.png" alt="Lens">
              <h3>Sony 85mm f/1.8</h3>
              <p>Price: BDT 6,00,000</p>
              <p>Condition: Excellent</p>
            </div>
            <div class="card">
              <img src="sample_photos_marketplace/sample-accessories.png" alt="Reel">
              <h3>Manfrotto Reel</h3>
              <p>Price: BDT 1,500</p>
              <p>Condition: Good</p>
            </div>
            <div class="card">
              <img src="sample_photos_marketplace/sample-accessories1.png" alt="Accessories">
              <h3>Manfrotto Accessories</h3>
              <p>Price: BDT 1,50,000</p>
              <p>Condition: Good</p>
            </div>
          </div>
        </div>

        <!-- Hire Photographer Section -->
        <div class="section-container">
          <h2>Hire Photographer <a href="#" style="float: right; font-size: 16px;">See All</a></h2>
          <div class="row">
            <div class="card">
              <img src="sample_photographer_photo/photographer1.jpg" alt="Photographer">
              <h3>John Doe</h3>
              <p>Specialization: Weddings</p>
              <p>Rate: $100/hr</p>
            </div>
            <div class="card">
              <img src="sample_photographer_photo/photographer2.jpg" alt="Photographer">
              <h3>Jane Smith</h3>
              <p>Specialization: Portraits</p>
              <p>Rate: $80/hr</p>
            </div>
            <div class="card">
              <img src="sample_photographer_photo/photographer3.jpg" alt="Photographer">
              <h3>Michael Brown</h3>
              <p>Specialization: Events</p>
              <p>Rate: $120/hr</p>
            </div>
            <div class="card">
              <img src="sample_photographer_photo/photographer4.jpg" alt="Photographer">
              <h3>Michael Brown</h3>
              <p>Specialization: Events</p>
              <p>Rate: $120/hr</p>
            </div>
          </div>
        </div>

        <!-- Photo Sales Section -->
        <div class="section-container">
          <h2>Photo Sales <a href="#" style="float: right; font-size: 16px;">See All</a></h2>
          <div class="row">
            <div class="card">
              <img src="sample_photo_sale/sale_photo1.png" alt="Photo">
              <h3>Sunset Beach</h3>
              <p>Price: $50</p>
              <p>Resolution: 300 DPI</p>
            </div>
            <div class="card">
              <img src="sample_photo_sale/sale_photo2.png" alt="Photo">
              <h3>Mountain View</h3>
              <p>Price: $75</p>
              <p>Resolution: 400 DPI</p>
            </div>
            <div class="card">
              <img src="sample_photo_sale/sale_photo3.png" alt="Photo">
              <h3>Mountain View</h3>
              <p>Price: $75</p>
              <p>Resolution: 400 DPI</p>
            </div>
            <div class="card">
              <img src="sample_photo_sale/sale_photo4.png" alt="Photo">
              <h3>City Lights</h3>
              <p>Price: $60</p>
              <p>Resolution: 350 DPI</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>

  </div>
  <script>
    let slides = document.querySelectorAll('.slide');
    let btns = document.querySelectorAll('.manual-btn');
    let currentSlide = 0;

    function showSlide(index) {
      // Calculate the correct position for the slide
      const slideWidth = slides[0].clientWidth;
      const sliderContainer = document.querySelector('.slides');
      sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;

      // Reset active classes
      btns.forEach(btn => btn.classList.remove('active'));
      slides.forEach(slide => slide.classList.remove('active'));

      // Set active slide and button
      btns[index].classList.add('active');
      slides[index].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        currentSlide = i;
        showSlide(i);
      });
    });

    // Autoplay function for automatic sliding
    function autoPlay() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    setInterval(autoPlay, 4000); // Slide every 4 seconds

    // Initialize by showing the first slide
    showSlide(0);
    // Dropdown functionality
    function toggleDropdown() {
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.toggle('show');
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.profile-icon, .profile-icon *')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  </script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {

      // Carousel functionality
      const currentIndexes = {}; // Store current index for each room

      function showSlide(index, roomIndex) {
        const carouselImages = document.querySelectorAll('.carousel-images')[roomIndex];
        const totalImages = carouselImages.children.length;

        // Ensure valid index and image display
        if (totalImages > 0) {
          // Avoid index out of bounds
          if (index >= totalImages) index = 0;
          if (index < 0) index = totalImages - 1;

          // Apply translation based on the current index for that specific room
          carouselImages.style.transform = `translateX(-${index * 100}%)`;
        }
      }

      window.nextSlide = function(roomIndex) {
        const carouselImages = document.querySelectorAll('.carousel-images')[roomIndex];
        const totalImages = carouselImages.children.length;

        if (!currentIndexes[roomIndex]) {
          currentIndexes[roomIndex] = 0;
        }

        currentIndexes[roomIndex] = (currentIndexes[roomIndex] + 1) % totalImages;
        showSlide(currentIndexes[roomIndex], roomIndex);
      };

      window.prevSlide = function(roomIndex) {
        const carouselImages = document.querySelectorAll('.carousel-images')[roomIndex];
        const totalImages = carouselImages.children.length;

        if (!currentIndexes[roomIndex]) {
          currentIndexes[roomIndex] = 0;
        }

        currentIndexes[roomIndex] = (currentIndexes[roomIndex] - 1 + totalImages) % totalImages;
        showSlide(currentIndexes[roomIndex], roomIndex);
      };
    });
  </script>
</body>

</html>