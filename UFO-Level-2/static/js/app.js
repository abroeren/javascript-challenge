// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// YOUR CODE HERE!
// console.log(data);



// Step 1: Use d3 to append one table row 'tr' for each UFO sighting object

data.forEach((UFOSighting) => {
    var row = tbody.append("tr");

    Object.entries(UFOSighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = tbody.append("td");
        cell.text(value);
    });
})

// Step 2: activate filter
var filterbutton = d3.select("#filter-btn");

filterbutton.on("click", function() {

    var inputValue = d3.select("#datetime").property("value")
    console.log(inputValue);

    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(inputValue);

    // empty existing table
    tbody.html("")

    // generate filtered table
    filteredData.forEach((UFOSighting) => {
        var row = tbody.append("tr");

        Object.entries(UFOSighting).forEach(function([key, value]) {
            console.log(key, value);

            var cell = tbody.append("td");
            cell.text(value);
        });
    })
})