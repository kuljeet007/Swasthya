const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        date: Date,
        time: String,
        doctor: String,
        isApproved: Boolean,
        seq: Number, // Adding the seq field as a Number type
    },
    {
        collection: "AppointmentInfo",
    }
);

mongoose.model("AppointmentInfo", appointmentSchema);
