import axios from "axios"

export default axios.create({
  baseURL: `https://superheroespedia.firebaseio.com/heroes`
});