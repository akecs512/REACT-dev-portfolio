# REACT-Pro-Portfolio

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployed Website](#deployed-website)
- [System Usage](#system-usage)
    - [Styling](#styling)
    - [VSCode Extensions](#VSCode-extensions)
    - [Package json Scripts](#Package-json-scripts)
- [Special Thanks](#special-thanks)
- [License](#license)

## Description
A deployed React portfolio that includes an about me, projects, resume, and contact page.

## Usage
A single-page application portfolio for a web developer. When the portfolio loads, the user is  presented with a page containing a header, a section for content, and a footer.
When they view the navbar they are presented with the developer's name and navigation links with titles corresponding to different sections of the portfolio including About Me, Projects, Contact, and Resume, and the title corresponding to the current section is highlighted.
When they click on a navigation title they are presented with the corresponding section below the navigation without the page reloading and that title is highlighted.
When they are presented with the About Me section they see an avatar of the developer and a short bio about them.
When they are presented with the Projects section they see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository, as well as a short description and badges of the various technologies used.
When they are presented with the Contact section they see a contact form with fields for a name, an email address, and a message. When they move the cursor out of one of the form fields without entering text they receive a notification that this field is required. When they enter text into the email address field they receive a notification if they have entered an invalid email address.
When they are presented with the Resume section they see a link to a downloadable resume and a pdf copy of it.
When they view the footer they are presented with text or icon links to the developer’s GitHub and LinkedIn profiles.

## Screenshots
 <img width="1260" alt="Screen Shot 2023-09-30 at 5 35 56 PM" src="https://github.com/akecs512/pro-portfolio-REACT/assets/79340489/0a9c7272-e706-47d1-b2ef-0c888c43ea2d">

<img width="1330" alt="Screen Shot 2023-09-30 at 5 36 21 PM" src="https://github.com/akecs512/pro-portfolio-REACT/assets/79340489/f74c9666-a6cd-48b0-a104-9f2a3bd6df00">

## Deployed Website
https://akecs-dev-portfolio.netlify.app/

## System Usage
### Styling
Styling is done through Tailwind CSS and DaisyUI as well as basic css files located in App.css.

### VSCode Extensions
VS Code should recommend the following extensions:
- Prettier
- ESLint
- Code Spell Checker
- React JS Snippets (even though this not a React project, the `clg` snippet is just too useful not to have)


### Special Thanks
  Thanks to Adamk72 for his help cleaning up the code and helping me make it work.
  
  Some icons were provided by  <a target="_blank" href="https://icons8.com">Icons8</a>, <a href="https://www.flaticon.com/">flaticon.com</a>, and <a href="https://techicons.dev/">techicons.dev</a> .

## License

Copyright (c) 2023 Adrienne Kecskes

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
