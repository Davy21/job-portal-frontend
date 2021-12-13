import axios from "axios"

export const HttpGet = (endpointUrl) => {

  const apiPreFix = `${process.env.GATSBY_API_URL}`

  return axios.get(apiPreFix + endpointUrl).then(function (response) {
    return response
  })
}

export const HttpPost = (endpointUrl, data, config) => {

    const apiPreFix = `${process.env.GATSBY_API_URL}`
  
    return axios.post(apiPreFix + endpointUrl, data, config).then(function (response) {
      return response
    })
}