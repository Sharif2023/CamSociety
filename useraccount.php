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

        .main {
            flex: 1;
            margin-left: 250px;
            padding: 40px;
        }

        .profile-container {
            max-width: 900px;
            background-color: white;
            width: 800px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }

        .profile-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .profile-header img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            margin-right: 20px;
            object-fit: cover;
            position: relative;
        }

        .profile-header .upload-icon {
            position: absolute;
            right: 22px;
            bottom: 5px;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            border-radius: 50%;
            padding: 5px;
            cursor: pointer;
        }

        .profile-header input[type="file"] {
            display: none;
        }

        .profile-info h1 {
            font-size: 32px;
            color: #333;
        }

        .profile-info h3 {
            color: #666;
        }

        .bio-section {
            margin-top: 20px;
        }

        .bio-section textarea {
            width: 100%;
            height: 80px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            resize: none;
        }

        .save-bio-button {
            background-color: #FF3300;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }

        .save-bio-button:hover {
            background-color: #e64a19;
        }

        /* Initially hide save bio button */
        .save-bio-button {
            display: none;
        }

        .contact-button {
            background-color: #FF3300;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }

        .contact-button:hover {
            background-color: #e64a19;
        }

        .profile-section h2 {
            font-size: medium;
            color: #FF3300;
            margin-bottom: 10px;
        }

        .profile-section p {
            color: #666;
        }

        .session-details {
            background-color: #f9f9f9;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }

        .session-details p {
            font-size: 14px;
            color: #333;
        }

        /* Adding status styles for On Hold and Sold */
        .status {
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 5px;
        }

        .status.on-hold {
            color: darkorange;
        }

        .status.sold {
            color: lightgreen;
        }

        ul {
            list-style-type: none;
        }

        /* Additional styles for the Edit button */
        .edit-button {
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #FF3300;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }

        .edit-button:hover {
            background-color: #e64a19;
        }

        .profile-container {
            position: relative;
            /* Added for button positioning */
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

        <div class="main">
            <div class="profile-container">
                <button class="edit-button" onclick="location.href='edit-profile.php'">Edit</button>
                <div class="profile-header">
                    <div style="position: relative;">
                        <img src="sample_photographer_photo/photographer1.jpg" alt="User Photo" id="profile-photo" width="150" height="150">
                    </div>
                    <div class="profile-info">
                        <h1>Shariful Islam</h1>
                        <h3><i class="fas fa-envelope"></i> shariful.islam@gmail.com</h3>
                        <h3><i class="fas fa-user"></i> Male</h3>
                        <h3><i class="fas fa-phone"></i> +1234567890</h3>
                    </div>
                </div>

                <div class="bio-section">
                    <h2>Bio</h2>
                    <textarea name="user_bio" id="user-bio" placeholder="Write a short bio...">Hello I want to be a photographer.</textarea>
                </div>

                <div class="profile-section">
                    <h2>My Sell List</h2>
                    <ul>
                        <li>
                            <strong>Product Name:</strong> Camera A<br>
                            <strong>Price:</strong> $500<br>
                            <strong>Status:</strong> <span class="status on-hold">On Hold</span><br>
                        </li>
                        <li>
                            <strong>Product Name:</strong> Camera B<br>
                            <strong>Price:</strong> $700<br>
                            <strong>Status:</strong> <span class="status sold">Sold</span><br>
                        </li>
                    </ul>

                    <h2>Hired Photographer</h2>
                    <ul>
                        <li>
                            <h4>John Doe</h4>
                            <p><strong>Specialization:</strong> Weddings</p>
                            <p><strong>Rate:</strong> BDT 1,00,000/hr</p>
                        </li>
                    </ul>


                    <h2>My Photo on Sale</h2>
                    <p>No details available.</p>
                </div>
                <button class="contact-button" onclick="location.href='homepage.php'">Back to Homepage</button>
                <button class="edit-button">Edit Profile</button>
            </div>
        </div>
    </div>
</body>

</html>