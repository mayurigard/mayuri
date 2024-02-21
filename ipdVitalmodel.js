const mongoose=require ('mongoose');

const ipdVital = mongoose.Schema({
    Pulse:{
        type:Number,
        default:0
    },
    spo2:{
        type:Number,
        default:0
    },
   sbp:{
        type:Number,
        default:0
    },
    dbp:{
        type:Number,
        default:0
    },
    temp:{
        type:Number,
        default:0
    },
    res:{
        type:Number,
        default:0

    },
    ag:{
        type:Number,
        default:0
    },
    datetime:{
        type:Number,
        default: Date.now()
    }
   
    
});

module.exports = mongoose.model("user",ipdVital);

