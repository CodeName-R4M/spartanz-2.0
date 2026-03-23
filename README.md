# Spartanz 2.0
A collection of themed HTML pages for Spartanz 2.O event showcasing different adventures and challenges.

## Overview
This project consists of multiple HTML pages themed around various adventures and challenges for the Spartanz 2.O event. Each page represents a different experience for the users.

## Features
- Themed HTML pages for different adventures
- Unique styling and design for each adventure
- Engaging content for users

## Tech Stack / Built With
- HTML

## Installation & Setup
```bash
git clone https://github.com/CodeName-R4M/spartanz-2.0.git
```

## Usage
### Example from 'about.html'
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Us - Spartanz 2.O</title>
    <!-- Add Font Awesome for icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      /* Add this to your CSS */
      #particles-js {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        pointer-events: none;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Arial", sans-serif;
        background: #000;
        color: white;
        overflow-x: hidden;
      }
      /* College Header (from index.txt) */
      .college-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        z-index: 100;
        border-bottom: 1px solid rgba(255, 204, 0, 0.3);
      }
      .college-logo-placeholder {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .college-logo-placeholder img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
      }
```

## Project Structure
```
.vscode/
about.html
assets/
  - bid-beat.html
  - contact-us.html
  css/
    - flag-rush.html
    - freefire.html
    - index.html
    - innov-spot.html
  js/
    - locked-adventure.html
    - particles.min.js
    - particlesjs-config.json
    - quizto-bash.html
    - spy-heist.html
    - teams.html
    - treasure-hunt.html
```

## Contributing
Feel free to contribute to this project. Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.