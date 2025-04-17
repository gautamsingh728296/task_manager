const express = require('express')
const User = require('../model/Users.js');

const router = express.Router();


router.get("/", async (req, res) => {
    console.log("You are at index page")



    const user = await User.find({});
    res.render('index', {
        title: "this is index js",
        user: user
    })


})


router.post("/register", async (req, res) => {
    console.log("post request hited")
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({
            username: name,
            email: email,
            password: password
        });
        console.log(newUser);
        res.redirect("/");
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).send("Error registering user");
    }
})

router.get("/register", (req, res) => {
    res.render("register")
    // res.redirect("register")
})




// router.get("/edit/:id", async (req,res)=>{
//     const id = req.params.id;
//     const user = User.findById({id})
//     console.log(user._id)
//     res.render("/")
//     if(user == null){
//         res.redirect("/")
//     }else{
//         res.render("edit",{
//             user:user
            
//         })
//     }
// })

router.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate({_id:id});
        if (!user) {
            return res.redirect("/");
        }

        // Update user data based on form submission
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        await user.save(); // Save the updated user data

        // Redirect user to home page or any other desired route
        res.redirect("/"); // Redirect to home page
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});





// router.get("/edit/:id", async (req,res)=>{
//     const id = req.params.id;
//     const user = User.findById({id})
//     console.log(user._id)
//     if(user == null){
//         res.redirect("/")
//     }else{
//         res.render("edit",{
//             user:user
//         })
//     }
// })


// router.get("/edit",(req,res)=>{
//     res.send("edit")
// })

// router.get("/edit/:id", async (req, res) => {

//     const id = req.params.id;
//     console.log(id);
//     const { name, email, password } = req.body;
//     const updateUser = await User.findByIdAndUpdate({ _id: id }
//         ,
//         { name, email, password },
//         { new: true }
//     )
//     // res.render("edit", {
//     //     user: updateUser
//     // })
//     res.redirect("/")

// })


// router.post("/edit/:id", async (req, res) => {
//     console.log("edit page")
//     const id = req.params.id;
//     try {
//         const { name, email, password } = req.body;
//         const updateUser = await User.findByIdAndUpdate(id,
//             { name, email, password },
//             { new: true }
//         );
//         if (!updateUser) {
//             return res.render("/edit");
//         }
//         // Redirect user to home page or any other desired route
//         res.redirect("/");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });

router.get("/edit/:id", async (req, res) => {
    console.log("runi")
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.redirect("/");
        }
        res.render("edit", { user:user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/edit/:id", async (req, res) => {
    
    const id = req.params.id;
    try {
        const { name, email, password } = req.body;
        const updateUser = await User.findByIdAndUpdate(id
            // ,
            // { name, email, password },
            // { new: true }
        );
        if (!updateUser) {
            return res.redirect("/");
        }
        // Redirect user to home page or any other desired route
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});



router.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const deleteUser = await User.findByIdAndDelete({ _id: id })
    res.redirect("/");
})
router.get("/checking", (req, res) => {
    req
})
module.exports = router;