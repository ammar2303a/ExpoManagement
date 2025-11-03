import mongoose from "mongoose"

const venueSchema = new mongoose.Schema({
    name: {type: String, required:true},
    address: {type: String, required:true},
    city: {type: String, default:"Unknown"},
    mapLink:{type: String},
    capacity:{type: Number},
    travelOptions:[
        {
            mode: {
                type: String, required: true
            },
            description: {type: String},
            linkText : {type: String},
            linkUrl: {type: String},

        },
    ],
    galleryImages:[{type: String}],
},
{timestamps:true}
);

export default mongoose.model("Venue", venueSchema);