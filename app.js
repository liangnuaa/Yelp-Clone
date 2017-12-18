var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({entended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://farm4.staticflickr.com/3741/9586943706_b22f00e403.jpg",
//         description: "Beautiful campground!!!"
//     }, function (err, campground) {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log("NEWLY CREATED CAMPGROUND");
//         console.log(campground);
//     }
// });


// landing page
app.get("/", function (req, res) {
    res.render("landing");
});

// campgrounds get
// INDEX Route - show all campgrounds
app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index.ejs", {campgrounds: allCampgrounds});
        }
    });
});

// campgrounds post
// CREATE Route - add new to DB
app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    // campgrounds.push(newCampground);
    Campground.create(newCampground, function (err, createdCampground) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
    
});

// new campground form
//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});    
        }
    });
});

// Server listening
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp has started!");
}); 