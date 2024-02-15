import axios from "axios";
import { BASE_URL } from "./APIConstants";
import { getToken } from "../utils/TokenUtil";


export async function fetchRequests(){
    try {
        const response=await axios.get(`${BASE_URL}/student`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveRequest(studentData){
    try {
        const response=await axios.post(`${BASE_URL}/student`,studentData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteRequest(reqId){
    try {
        const response=await axios.delete(`${BASE_URL}/student/${reqId}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchRequestById(reqId){
    try {
        const response=await axios.get(`${BASE_URL}/student/${reqId}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateRequest(updatedData,reqId){
    try {
        const response=await axios.put(`${BASE_URL}/student/${reqId}`,updatedData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}