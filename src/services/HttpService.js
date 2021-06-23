import axios from "axios"


export function Get(url) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}

export function Post(url, postData) {
  return new Promise((resolve, reject) => {
    try {
      axios.post(url, postData, {
        headers: { 
          'Access-Control-Allow-Origin': 'true',
          'Content-Type': 'application/json'
        }
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}