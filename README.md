# LearnHUB

## Overview
LearnHUB is a web application developed using the Django framework. It serves as a multi-media learning platform where users can manage and organize various types of media, including music, videos, PDFs, and other files.

## Features

### User Authentication
Users can register, log in, and log out of the platform securely. The authentication functionality is implemented using Django's built-in authentication system.

### Content Management
Users can upload, view, and manage different types of media content, including music, videos, and PDF documents.

### Favorite Management
Users can mark songs, albums, or other media content as favorites for quick access.

### Search Functionality
The platform includes a search feature that allows users to search for specific content within the platform.

### Admin Interface
The project includes Django's admin interface for easy management of users, content, and other aspects of the application.

### Media Handling
The application handles various types of media files such as audio (e.g., WAV, MP3) and image files (e.g., PNG, JPG).

### Static and Media File Serving
Configuration for serving static files (e.g., CSS, JavaScript) and media files (e.g., user-uploaded content) is included to ensure seamless user experience.

### Database
LearnHUB is configured to use SQLite3 as the default database backend, ensuring efficient storage and retrieval of user data, media content, and other application entities.

## Project Structure

### music
Manages music-related functionalities, including album and song management.

### video
Handles video-related functionalities, although specific details are not provided.

### pdf
Deals with PDF document management, but the exact features are not elaborated.

### storage
Responsible for general file storage and management, possibly including other types of files not covered by the other apps.

### website
Contains project-level configurations, such as settings, URL routing, and the WSGI configuration.

## Usage
To run the LearnHUB application locally:

1. Clone this repository.
2. Install the required dependencies using `pip install -r requirements.txt`.
3. Run migrations using `python manage.py migrate`.
4. Start the development server with `python manage.py runserver`.
5. Access the application at `http://localhost:8000`.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to help improve the project.

## License
This project is licensed under the [MIT License](LICENSE).
