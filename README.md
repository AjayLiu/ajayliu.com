[![Netlify Status](https://api.netlify.com/api/v1/badges/a10d8945-fe38-4346-90a7-904802729ca4/deploy-status)](https://app.netlify.com/sites/ajayliu/deploys)

<p align="center">
  <a href="https://github.com/AjayLiu/ajayliu.com">
    <img src="public/img/logothin.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">AjayLiu.com</h3>

  <p align="center">
    My portfolio website which showcases my major projects
    <br />
    <a href="https://ajayliu.com"><strong>Website »</strong></a>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://github.com/AjayLiu/ajayliu/blob/main/scroll.gif?raw=true"></img>

This is my first site and also the best maintained one. It was originally made with just raw HTML, CSS, and JavaScript and is now revamped with React, Next.js, and SCSS. 

### Built With
* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [SCSS](https://sass-lang.com/)
* [Netlify](https://www.netlify.com/)


<!-- GETTING STARTED -->
## Getting Started

Here is a guide if you want to clone my website and modify it for yourself, all the way to deployment.

### Prerequisites

* [yarn](https://yarnpkg.com/)
* [git](https://git-scm.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AjayLiu/ajayliu.com.git
   ```
2. Install packages
   ```sh
   yarn
   ```
3. Create a `.env` file in the root and fill in the following info (if you want)
   ```
   RECIPIENT_EMAIL = yourEmail@gmail.com (must match your sendgrid recipient email thing)
   SENDGRID_API_KEY = (i use sengrid to send mail, so just use your api key here if u happen to use sendgrid to send contact emails)
   DISCORD_WEBHOOK_URL = (i also receive a discord notification, place your webhook url here if you want)
   ```
4. Publish the site on Netlify using continuous git integration. :tada:

### Development

To run the development server
   ```sh
   yarn dev
   ```
Then head over to localhost:3000

To run some serverless backend functions from netlify, use Netlify CLI (install) instead:
   ```sh
   netlify dev
   ``` 
Then head over to localhost:8888

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ajay Liu - contact@ajayliu.com

Project Link: [https://github.com/AjayLiu/ajayliu.com](https://github.com/AjayLiu/ajayliu.com)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Vanta.js for the awesome landing screen background](https://www.vantajs.com/)
* [Netlify](https://www.netlify.com/)
