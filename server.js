const express = require ('express');
const app = express();
const PORT = 3000;

app.use(express.static("public"));

//Home route/path
app.get("/", (req, res) => {
    //Monday and Tuesday Reflection

    //Variables
    const notation1 = "Bracket Notation";
    const notation2 = "Dot Notation";
    let operator = "Ternary Operators";
    let output = "";

    output = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">`;
    output = output + `<div class="container m-5 bg-info p-5 rounded-5 border border-3 border-dark">`;
    output = output + `<h1 class="text-center text-success">Level 3 - Week 1 Reflection</h1>`;
    output = output + `<h2 class="text-center">Monday: Node.JS</h2>`;
    output = output + `<p>On Monday, we made our first server with node.js. We learned a short history including that Ryan Dahl created it in 2009. Node.js is the backend (behind the scenes) server for JavaScript in Chrome, so it can run outside of the browser. The key features include: Event Driven Architecture (User interaction) and Asynchronous, or nonblocking (on and off feature) </p>`;
    output = output + `<p> We also utilized npm (Node Package Manager) which are helper functions for node.js. Nodemon was also installed to ensure we did not have to keep restarting our live server. </p>`
    //Tuesday
    output = output + `<h2 class="text-center">Tuesday: Modern JavaScript Syntax</h2>`;
    output = output + `<ul><li>Arrow Functions: Provide concise syntax for writing Javascript Functions (call backs)</li>`;
    output = output + "<li>Template Literals Aka Money Curly `${}`: allow for cleaner string interpolation without concatenation. </li>";
    output = output + `<li>${notation1} provides an alternative to ${notation2} for accessing object properties.</li>`;
    output = output + `<li>${operator} offer a compact alternative to if/else statements. For React, traditional if/else statements aren't allowed.</li>`;
    output = output + ` <img src="Node_Express_Demo.png alt="code" class="img-fluid rounded-5 border border-3 border-dark">`;
    output = output + ` <img src="Node_Express_Demo_Bootstrap.png alt="bootstrap" class="img-fluid rounded-5 border border-3 border-dark">`;
    //Wednesday
    output = output + `<h2 class="text-center">Wednesday: Arrays and Loops (Code.org)</h2>`;
    output = output + `<p>Arrays are used to store multiple values in a single variable. They can hold different data types including numbers, strings, and objects. Arrays have an index, meaning the first element is at index 0 (or the first position).</p>`;
    output = output + `<p>We learned about how to restructure our lists with: </p>`;
    output = output + `<ul><li>"\n" : this gives a list with a linebreak in our console </li>`;
    output = output + `<li>"-" : puts dashes between two items in a list</li>`;
    output = output + `<li>"join()" : this gives a list with a comma in our console </li>`;
    output = output + `<li>"length" : this gives the number of items in an array. Adding "list.length-1" keeps us from going to far left or right when are clicking or navigating our lists. </li></ul>`;
    output = output + ` <img src="Playlist_builder.png alt="Playlist App" class="img-fluid rounded-5 border border-3 border-dark">`;
    output= output + ` <img src="Reminder_App.png alt="Reminder App" class="img-fluid rounded-5 border border-3 border-dark">`;
    //Thursday and Friday
    output = output + `<h2 class="text-center">Thursday and Friday: Madlibs Project</h2>`;
    output = output + `<p> We recreated our Madlibs project from Level 2 using the new JavaScript syntax we learned this week.</p>`;
    output = output + `<p>We set up our repositories with many routes/paths for the different challenge levels.</p>`;
    output = output + `<p> We also added Bootstrap to style our pages. </p>`;
    output = output + `<p>Adding Bootstrap in the backend allowed us to style our page without creating multiple files.</p>`;
    output = output + `<p> We also learned how to use the "public" folder to store our CSS and image files. Adding "app.use(express.static('public'));" helped us excute this.</p>`;
    output = output + `<p> Finally, we learned how to use query parameters to pass information. It was much better than using getValue in code.org. </p>`;
    output = output + ` <img src="Madlibs.png alt="Madlibs Project" class="img-fluid rounded-5 border border-3 border-dark">`;
    output = output + `</div>`;

    console.log(output)
    res.send(output);
});

//Wednesday

myWednesdayPojo = {
    topic : "Arrays",
    iceCreamFlavors : ["Chocolate", "Strawberry", "Vanilla", "Pistachio"],
    newFunction : "join()"
}

//Event Listener
app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`);
});

