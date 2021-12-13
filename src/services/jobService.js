import * as API from "./httpService"

//Get All Jobs
export function getAllJobs (){
     return API.HttpGet("/Job");
}

//Get All Jobs by id
export function getJobById (id){
     return API.HttpGet(`/Job/${id}`);
}