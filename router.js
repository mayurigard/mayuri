const express = require('express');
const router = express.Router();

const { 
    medicineType,
    getmedicineType,
    updatemedicineType,
    deletemedicineType
} = require ("../Controller/medicineTypeCtrl");



// medicine routes 
router.post("/medicineType", medicineType);
router.get("/getmedicineType", getmedicineType);
router.patch("/updatemedicineType/:_id", updatemedicineType);
router.delete("/delete",deletemedicineType);



const {
    pharamaType,
//updatePharamaType,
updatePharamaTypes,
    getpharamaType,
    deletePharmaType
} = require("../Controller/pharmaTypectrl");

// pharma routes

router.post("/pharamaType",pharamaType);
router.get("/getpharamaType",getpharamaType);
router.patch("/updatePharamaType/:uhid",updatePharamaTypes);
router.delete("/:_id/deletePharmaType",deletePharmaType);


// room routes

const{
    roomType,
    updateroomTypes,
    getroomType,
    deleteroomType
} = require("../Controller/roomCtrl");


router.post("/roomType",roomType);
router.patch("/updateroomTypes/:id",updateroomTypes);
router.get("/getroomType", getroomType);
router.delete("/deleteroomType",deleteroomType);


// ipd Vital

const{
    createdipdVital,
    getipdVital,
    updateipdVital
}= require("../Controller/ipdvitalctrl");

router.post("/createdipdVital", createdipdVital);
router.get("/getipdVital",getipdVital);
router.patch("/updateipdVital/:_id",updateipdVital);



module.exports = router;




