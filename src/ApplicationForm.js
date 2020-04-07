import React from 'react'
import axios from './config/axios'

class ApplicationForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            phone:'',
            jobTitle:'',
            experience:'',
            skills:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            name: this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            jobTitle:this.state.jobTitle,
            experience:this.state.experience,
            skills:this.state.skills
        }
        //console.log(formData)
        
        axios.post('/users/application-form',formData)
        .then((response)=>{
           // console.log('resolve',response.data)
           if(response.data.hasOwnProperty('errors')){
               alert(response.data.message)
           }
           else{
               alert('Your application has been submitted')
               //to clear out the form
               this.setState({
                   name:'',
                   email:'',
                   phone:'',
                   job:'',
                   experience:'',
                   skills:''
               })
           }
        })

        .catch((err)=>{
            console.log('reject',err)
        })
        }
       
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Apply for job</h2>
                    <label htmlFor="name">Full name</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange} />
                     <br/><br/>

                    <label htmlFor="email">Email address</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="example@example.com"/>
                    <br/><br/>

                    
                    <label htmlFor="phone">Contact Number</label>
                    <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="+91 9090909090"/>
                    <br/><br/>

                    <label htmlFor="jobTitle">Applying for Job</label>
                    <select id="jobTitle" name="jobTitle"  value={this.state.jobTitle} onChange={this.handleChange} >
                        <option value="">----Select----</option>
                        <option value="Front-End Developer">Front-End Developer</option>
                        <option value="Node.js Developer">Node.js Developer</option>
                        <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                        <option value="FULL Stack Developer">FULL Stack Developer</option>
                    </select>

                    <br/><br/>
                    <label htmlFor="experience">Experience</label>
                    <input type="text" 
                    id="experience" 
                    name="experience" 
                    value={this.state.experience} 
                    onChange={this.handleChange} 
                    placeholder="Experience(2years 3months)"/>
                    <br/><br/>

                    <label htmlFor="skills">Techical skills</label>
                    <textarea 
                    type="text" 
                    id="skills" 
                    name="skills" 
                    value={this.state.skills} 
                    onChange={this.handleChange} 
                    placeholder="Technical Skills"/>
                    <br/><br/>
                    <input type="submit" value="Send Application" />
                    
                </form>
            </div>
        )
    }

}

export default ApplicationForm
	
	
	
