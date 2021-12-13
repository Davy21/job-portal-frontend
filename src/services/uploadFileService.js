import * as API from "./httpService"

export function uploadFile (file, fileName){

    const formData = new FormData();
    formData.append('file',file);
    formData.append('fileName',fileName);

    return API.HttpPost("/UploadFile",formData,{'Content-Type': 'multipart/form-data' });
}

