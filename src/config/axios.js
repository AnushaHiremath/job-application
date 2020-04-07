import Axios from 'axios'

//this is to create the instance 
const axios= Axios.create({
    baseURL:'http://dct-application-form.herokuapp.com'

})

export default axios