import express from 'express';
import mongoose from 'mongoose';
import { Student } from './StudentModel.js';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import { Admin } from './AdminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


function verifyToken(request, response, next) {
    const header = request.get('Authorization');
    if (header) {
        const token = header.split(" ")[1];
        jwt.verify(token, "secret1234", (error, decoded) => {
            if (error) {
                response.status(StatusCodes.UNAUTHORIZED).send({ message: "Invalid token" });
            }
            else {
                request.body.phone = decoded.adminPhone;
                next();
            }
        });
    } else {
        response.status(StatusCodes.UNAUTHORIZED).send({ message: "Please login first" });
    }

}

const app = express();
app.use(cors());
app.use(express.json());

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/institutedb');
        console.log("Database connection created !")
    } catch (error) {
        console.log(error);
    }
}


app.post("/admin", async (request, response) => {
    try {
        const reqData = request.body;
        reqData['password'] = bcrypt.hashSync(reqData.password, 10);
        const admin = new Admin(reqData);
        await admin.save();
        response.status(StatusCodes.CREATED).send({ message: INSERT_SUCCESS });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.post("/admin/login", async (request, response) => {
    try {
        const admin = await Admin.findOne({ phone: request.body.phone });
        if (admin) {
            if (bcrypt.compareSync(request.body.password, admin.password)) {
                const token = jwt.sign({ adminPhone: admin.phone }, "secret1234");
                response.status(StatusCodes.OK).send({ message: "Login successful", token: token });
            }
            else {
                response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid phone or password" });
            }
        }
        else {
            response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid phone or password" });
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.post("/student", verifyToken, async (request, response) => {
    try {
        const reqData = request.body;
        const uniqueReqId = generateUniqueReqId();
        reqData.reqId = uniqueReqId;
        reqData.createdDate = new Date();
        const deliveredDate = new Date();
        deliveredDate.setDate(deliveredDate.getDate() + 8);
        reqData.deliveredDate = deliveredDate;
        reqData.status = "pending";
        const student = new Student(reqData);
        await student.save();
        response.status(StatusCodes.CREATED).send({ message: INSERT_SUCCESS });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.get("/student", verifyToken, async (request, response) => {
    try {
        const students = await Student.find({ phone: request.body.phone });
        response.send({ students });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.get("/student/:reqId",verifyToken,async(request,response)=>{
    try {
       const student=await Student.findOne({reqId:request.params.reqId});
       if (student==null) {
        response.status(StatusCodes.NOT_FOUND).send({message:STUDENT_NOT_FOUND});
       }
       else{
         response.send({student:student});
       }

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.delete("/student/:reqId", verifyToken, async (request, response) => {
    try {
        await Student.deleteOne({ reqId: request.params.reqId });
        response.send({ message: DELETE_SUCCESS });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.put("/student/:reqId", verifyToken, async (request, response) => {
    try {
        await Student.updateOne({ reqId: request.params.reqId }, request.body);
        response.send({ message: UPDATE_SUCCESS });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.listen(8900, () => {
    console.log("Server has started on 8900");
    connectDb();
});



function generateUniqueReqId() {
    // Generate a random 3-digit number
    const randomThreeDigitNumber = Math.floor(100 + Math.random() * 900);
    return randomThreeDigitNumber.toString();
}