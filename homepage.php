<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page | UIU Supplement</title>
    <!-- Font Awesome CDN Link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
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
        background-color: #666666;
      }

      .container {
        display: flex;
        min-height: 100vh;
        
      }
      .main {
        flex: 1;
        margin-left: 250px;
        padding: 40px;
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
        background-color: #f0f0f5;
        border-radius: 10px;
      }

      nav ul li a .nav-item {
        margin-left: 15px;
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
          display: flex; /* Use flexbox */
          justify-content: space-between; /* Aligns items at the edges */
          align-items: center; /* Center items vertically */
      }
      .icon {
        margin: 0 15px;
        font-size: 25px;
        color: #555;
        cursor: pointer;
      }

      .icon:hover {
        color: #FF3300; /* Change color on hover */
      }

      /* Profile Icon Dropdown */
      .profile-icon {
        position: relative;
        cursor: pointer;
        color: #555;
        font-size: 25px;
        margin-left: 15px;
      }
      .profile-icon:hover{
        color: #FF3300;
      }

      .dropdown {
        display: none; /* Hidden by default */
        position: absolute;
        right: 0;
        background-color: #fff;
        font-size: medium;
        min-width: 220px; /* Slightly wider for aesthetics */
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        z-index: 1;
        margin-top: 5px; /* Add space between the profile icon and dropdown */
      }

      .dropdown a {
        color: #555;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        transition: background-color 0.3s; /* Smooth background color change */
      }

      .dropdown a:hover {
        background-color: #f0f0f5; /* Highlight on hover */
      }

      .dropdown.show {
        display: block; /* Show dropdown when it has the "show" class */
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
            <span class="nav-item">Book event</span>
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
        </ul>

        <!-- Log Out Button -->
        <a href="#" class="logout-btn">
          <i class="fas fa-sign-out-alt"></i> Log Out
        </a>
      </nav>

      <section class="main">
        <!-- Notification and Profile Icons -->
        <div class="header-icons">
          <a href="#" class="icon"><i class="fas fa-bell"></i></a>
          <a href="#" class="icon"><i class="fas fa-comments"></i></a>
          <!-- Profile Icon Dropdown -->
        <div class="profile-icon">
          <span id="userIdDisplay">Shariful Islam</span>
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
        <!-- Image Slider Section -->
        <div class="slider">
          <div class="slides">
            <!-- Images for the slider -->
            <div class="slide">
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/450px-Hasselblad_500_CM.jpg" alt="Image 1">
              </a>
            </div>
            <div class="slide">
              <a href="availablerooms.html">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/450px-Hasselblad_500_CM.jpg" alt="Image 2">
              </a>
            </div>
            <div class="slide">
              <a href="browsementors.html">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/450px-Hasselblad_500_CM.jpg" alt="Image 3">
              </a>
            </div>
            <div class="slide">
              <a href="parttimejob.html">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/450px-Hasselblad_500_CM.jpg" alt="Image 4">
              </a>
            </div>
            <div class="slide">
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/450px-Hasselblad_500_CM.jpg" alt="Image 5">
              </a>
            </div>
            <div class="slide">
              <a href="shuttle_tracking_system.php">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/450px-Hasselblad_500_CM.jpg" alt="Image 6">
              </a>
            </div>
            <div class="slide">
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hasselblad_500_CM.jpg/450px-Hasselblad_500_CM.jpg" alt="Image 7">
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
      document.addEventListener('DOMContentLoaded', function () {

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

              window.nextSlide = function (roomIndex) {
                  const carouselImages = document.querySelectorAll('.carousel-images')[roomIndex];
                  const totalImages = carouselImages.children.length;
                  
                  if (!currentIndexes[roomIndex]) {
                      currentIndexes[roomIndex] = 0;
                  }

                  currentIndexes[roomIndex] = (currentIndexes[roomIndex] + 1) % totalImages;
                  showSlide(currentIndexes[roomIndex], roomIndex);
              };

              window.prevSlide = function (roomIndex) {
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
