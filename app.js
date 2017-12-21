var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB     = require("./seeds");
    
seedDB();
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({entended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
mongoose.Promise = global.Promise;


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
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            // console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});    
        }
    });
});

// ====================
// COMMENTS ROUTES
// ====================
app.get("/campgrounds/:id/comments/new", function(req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: foundCampground});
        }
    });
});

app.post("/campgrounds/:id/comments", function (req, res) {
    //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        //create new comment
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add new comment to campground
               campground.comments.push(comment);
               campground.save();
               //redirect campground show page
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
});

app.get("/*", function(req, res) {
    res.render("landing");
});

// Server listening
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp has started!");
}); 