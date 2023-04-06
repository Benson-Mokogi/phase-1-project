# phase-1-project

Pet Project: Dog Photos
This project is a web page that displays a list of dog breeds and their respective images. When a breed name is clicked, the corresponding image will be displayed. Additionally, users can leave comments about the displayed images.

Getting Started
To view this project, simply open the index.html file in your web browser.

Usage
Upon loading the web page, a list of 10 random dog breeds with their respective names will be displayed. When a breed name is clicked, the corresponding image will be displayed. Users can leave comments about the displayed image by entering text into the input field and clicking the "Submit" button. The entered comments will be displayed underneath the image.

Technologies Used
HTML
CSS
JavaScript
Code Structure
Variables
dogNameObject: An object containing the breed name and image url
dogArray: An array containing all of the dogNameObjects
Event Listeners
DOMContentLoaded: Fetches data from an API and renders the breed list and the first dog image.
click: Clears the rendered image when the breed list is clicked.
click: Allows users to submit comments about the displayed image.
Functions
renderBreed(data): Renders the list of breed from the fetched data. It creates a dogNameObject containing the breed name and image url, appends the breed name to the list in the DOM, adds a click listener to the breed name, and pushes the dogNameObject to the dogArray.
renderOnClick(dogNameObject): Renders the dog image when a breed name is clicked. It clears the previously rendered image, and displays the new image along with the breed name. It also clears any previously entered comments.
renderFirstDog(dogArray): Renders the first dog image from the dogArray.
API Used
This project fetches data from the following API: https://dog.ceo/api/breeds/image/random/10.