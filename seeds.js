var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
    
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "blah blah blah"
    }
];
    
function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Add a campground!");
                    // add a few comments
                    Comment.create({
                        text: "Great place, will visit again!",
                        author: "Liam"
                    }, function (err, createdComment) {
                        if(err) {
                            console.log(err);
                        } else {
                            campground.comments.push(createdComment);
                            campground.save();
                            console.log("Create a new comment");
                        }
                    });
                }
            });
        })
    });    
}

module.exports = seedDB;
