var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({entended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm5.staticflickr.com/4420/37403014592_c5f5d37906.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3741/9586943706_b22f00e403.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3211/3062207412_03acc28b80.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];

// landing page
app.get("/", function (req, res) {
    res.render("landing");
});

// campgrounds get
app.get("/campgrounds", function (req, res) {
    res.render("campgrounds.ejs", {campgrounds: campgrounds});
});

// campgrounds post
app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
});

// new campground form
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

// Server listening
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp has started!");
}); 