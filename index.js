let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
Question 1:

Write an Express code snippet to filter temperatures above 25 degrees Celsius.

Define an endpoint /high-temperatures using the get method.

Implement a function filterHighTemperatures that returns true if the temperature is above 25 degrees Celsius.

Inside the endpoint, use the filter method to filter temperatures above 25 degrees Celsius.

Send the filtered temperatures as a JSON response.

Given Data: [22, 26, 19, 30, 23, 28, 17, 31]

*/
let temperaturesArray = [22, 26, 19, 30, 23, 28, 17, 31];

function filterHighTemperatures(temperature) {
  return temperature > 25;
}

app.get("/high-temperatures", (req, res) => {
  let filteredTemperatures = temperaturesArray.filter((eachTemp) =>
    filterHighTemperatures(eachTemp),
  );
  res.json(filteredTemperatures);
});

/*
Question 2:

Write an Express code snippet to filter prices less than or equal to 100 rupees.

Instructions:

Define an endpoint /low-prices using the get method.

Implement a function filterLowPrices that returns true if the price is less than or equal to 100.

Inside the endpoint, use the filter method to filter prices less than or equal to 100.

Send the filtered prices as a JSON response.

Given Data: [80, 120, 95, 150, 60, 110]
*/

let priceArray = [80, 120, 95, 150, 60, 110];
function filterLowPrices(price) {
  return price <= 100;
}
app.get("/low-prices", (req, res) => {
  let filteredPrices = priceArray.filter((eachPrice) =>
    filterLowPrices(eachPrice),
  );
  res.json(filteredPrices);
});

/*
Question 3:

Write an Express code snippet to filter product ratings greater than 3.5.

Instructions:

Define an endpoint /high-ratings using the get method.

Implement a function filterHighRatings that returns true if the rating is greater than 3.5.

Inside the endpoint, use the filter method to filter product ratings greater than 3.5.

Send the filtered ratings as a JSON response.

Given Data: [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6]
*/
let ratingArray = [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];
function filterHighRatings(rating) {
  return rating > 3.5;
}
app.get("/high-ratings", (req, res) => {
  let filteredRatings = ratingArray.filter((eachRating) =>
    filterHighRatings(eachRating),
  );
  res.json(filteredRatings);
});

/*
Question 4:

Write an Express code snippet to filter Indian names longer than 6 characters.

Instructions:

Define an endpoint /long-indian-names using the get method.

Implement a function filterLongIndianNames that returns true if the name length is greater than 6 characters.

Inside the endpoint, use the filter method to filter Indian names longer than 6 characters.

Send the filtered names as a JSON response.

Given Data: ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita']
*/
let namesArray = ["Akshay", "Priyanka", "Arjun", "Anushka", "Rajesh", "Kavita"];

function filterLongIndianNames(name) {
  return name.length > 6;
}
app.get("/long-indian-names", (req, res) => {
  let filteredNames = namesArray.filter((eachName) =>
    filterLongIndianNames(eachName),
  );
  res.json(filteredNames);
});

/*
Question 5:

Write an Express code snippet to filter products cheaper than a certain price.

Instructions:

Define an endpoint /cheaper-products using the get method.

Implement a function filterCheaperProducts that takes a query parameter filterParam and returns true if the product price is less than the provided parameter.

Inside the endpoint, extract the query parameter filterParam and use it to filter products cheaper than that price.

Send the filtered products as a JSON response.
Given Data: [10, 25, 50, 75, 100, 150, 200]
*/
let productPriceArray = [10, 25, 50, 75, 100, 150, 200];

function filterCheaperProducts(filterParam, eachPrice) {
  return eachPrice < filterParam;
}
app.get("/cheaper-products", (req, res) => {
  let filterParam = req.query.filterParam;
  let filteredPrices = productPriceArray.filter((eachPrice) =>
    filterCheaperProducts(filterParam, eachPrice),
  );
  res.json(filteredPrices);
});
