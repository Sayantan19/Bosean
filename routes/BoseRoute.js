const express = require("express")
const router =  express.Router();
const Det = require("../models/BoseModel");


router.route("/det").post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const newDet = new Det({
        name,
        email,
        phone
    })
    newDet.save();
})
module.exports = router;