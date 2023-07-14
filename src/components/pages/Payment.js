import React,{ useState } from 'react'
import axios from "axios"
import Slide from '../images/movietic.jpeg'
import { Link } from 'react-router-dom'

const Payment = ({setcontactUser}) => {
    
    const [ user, setUser] = useState({
        Name: "",
        Phone:"",
        Email:"",
        Message:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const contact = () => {
        const { Name, Phone, Email, Message } = user
        if( Name && Phone && Email && Message){
            axios.post("http://localhost:9001/payment", user)
          
        } 
        
    }

    return (
        <div className ='container'>
                 <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 my-auto'>
                        
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                            
                            </h6>
                        </div>

                    </div>

                </div>
            </section>
        
        <section className='section'>
     
            <div className='contact'>
            {console.log("User", user)}
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h1>Booking Ticket</h1>
                                <hr/>
                                <div className='form-group'>
                                    <label className='mb-1'> Name</label>
                                    <input type='text'name="Name" value={user.name} className='form-control' placeholder='Enter full Name'onChange={ handleChange }/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Amount </label>
                                    <input type='number' name="Phone" value={user.Phone}className='form-control' placeholder='Enter Amount' onChange={ handleChange }/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Email </label>
                                    <input type='text' name="Email" value={user.Email}className='form-control' placeholder='Enter email adderess' onChange={ handleChange }/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Ticket and Member</label>
                                    <textarea rows='3' name="Message" value={user.Message}className='form-control' placeholder='Ticket Date and Member'onChange={ handleChange }></textarea>
                                </div>
                               
                                <div className='form-group py-3'>
                                <Link to='/Eticket' className='btn btn-link shadow w-100' onClick={contact}>PAYNOW</Link>
                                   {/* <Link to='/Eticket' className='button'></Link> */}
                            </div>
                        </div>
                        <div className='col-md-6 border-start'>
                            <h5 className='main-heading'>Book Your Best Shows</h5>
                            <div className='underline'></div>
                            <p>
                                Get Excitment ticket with lower price
                            </p>
                           <div>
                           <img src={Slide} alt=".../" width="300" height="400"/>
                           </div>
                            <p>
                                Any Feedback || Email: MovieGo@feedback.com
                            </p>

                        </div>
                    </div>
                </div>
          
            </div>
            </div>
        </section>
    </div>   
    )
}

export default Payment