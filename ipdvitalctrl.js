const ipdVitalmodel = require("../model/ipdVitalmodel");

exports.createdipdVital = async (req, res) => {
    const { ipdID } = req.params;
  
    const newipdVitalData = req.body;
  
    try {
      const findPatient = await ipdVitalmodel.findOne({ ipdID: ipdID });
  
      if (!findPatient) {
        res.status(404).json({ message: "Patient not found" });
        return;
      }
  
      const newipdVitalDetails = new ipdVitalmodel({
        ...newipdVitalData,
        ipdID: findPatient.ipdID,
        patientID: findPatient._id,
        date: Date.now(),
      });
   
  const createdipdVitalDetails = await newipdVitalDetails.save();
    
  
  
    await findPatient.save();
  
      res.status(201).json({
        message: "ipd vital created successfully",
        ipdVitalDetails: createdipdVitalDetails,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.massage });
    }
  };

exports.getipdVital=async(req,res)=>{
    const { ipdID } = req.params;
  
    const newipdVitalData = req.body;
    try {
        const ipdVital = new ipdVitalmodel.findOne();
        res.status(200).json({success:true, data:ipdVital});
    } catch (error) {
        console.log(error);
    }
};

exports.updateipdVital=async(req,res) =>{
    const { ipdID } = req.params;
  
    const newipdVitalData = req.body;
    
    try {
        const _id = req.params;

        const updateipdVitalType=await ipdVitalmodel.findByIdAndUpdate({
            _id,
            ...req.body
        });
        res.status(200).json({sucess:true,data:updateipdVitalType});
    } catch (error) {
        console.log(error)
    }
  };
