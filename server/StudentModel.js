import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
    reqId: String,
    product: String,
    phone: String,
    part: String,
    address: String,
    comments: String,
    createdDate: Date,
    deliveredDate: Date,
    status: String
});

export const Student = mongoose.model("student", studentSchema);