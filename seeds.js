var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
    
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Alcatra drumstick landjaeger rump, swine turkey filet mignon. Alcatra buffalo ground round filet mignon t-bone meatball shank shankle pork belly. Shank cow ball tip biltong t-bone, turkey tail tenderloin chicken alcatra pig jowl cupim spare ribs swine. Corned beef sausage rump porchetta, beef ribs pork loin ball tip fatback tri-tip flank turkey sirloin. Bacon venison picanha kevin."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm1.staticflickr.com/454/19246699713_77cf826d62.jpg",
        description: "Alcatra drumstick landjaeger rump, swine turkey filet mignon. Alcatra buffalo ground round filet mignon t-bone meatball shank shankle pork belly. Shank cow ball tip biltong t-bone, turkey tail tenderloin chicken alcatra pig jowl cupim spare ribs swine. Corned beef sausage rump porchetta, beef ribs pork loin ball tip fatback tri-tip flank turkey sirloin. Bacon venison picanha kevin"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Tenderloin beef landjaeger kevin pork beef ribs hamburger tri-tip. Ham biltong turkey beef pork belly meatloaf. Swine brisket beef pancetta filet mignon hamburger meatball spare ribs boudin short loin leberkas tongue. Spare ribs buffalo cow pork meatloaf. Shank pancetta strip steak jowl pork loin meatloaf pig cow chicken doner fatback chuck. Biltong ribeye brisket shankle prosciutto flank t-bone. Shank hamburger leberkas pancetta pastrami beef ribs beef, short ribs tongue burgdoggen bresaola."
    }
];
    
function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function (err) {
        // if (err) {
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // // add a few campgrounds
        // data.forEach(function (seed) {
        //     Campground.create(seed, function (err, campground) {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log("Add a campground!");
        //             // add a few comments
        //             Comment.create({
        //                 text: "Great place, will visit again!",
        //                 author: "Liam"
        //             }, function (err, createdComment) {
        //                 if(err) {
        //                     console.log(err);
        //                 } else {
        //                     campground.comments.push(createdComment);
        //                     campground.save();
        //                     console.log("Create a new comment");
        //                 }
        //             });
        //         }
        //     });
        // })
    });    
}

module.exports = seedDB;
