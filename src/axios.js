import axios from "axios"

const instance = axios.create({
  baseURL: "https://vasudeveloper.com/amazon-clone/api", // THE API (cloud function) URL
  // https://vasudeveloper.com/amazon-clone
  // http://localhost:5000/
})

export default instance
