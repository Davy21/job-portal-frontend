import * as API from "./httpService"

export function submitJobForm (data){

     //set skillset as string
     if(data.skillSetsArr.length > 1){
          data.skillSets = data.skillSetsArr.join(",");
     }

     console.log(data);

     return API.HttpPost(`/JobForm`,data);
}