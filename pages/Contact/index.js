import { useState } from 'react'

import { Form } from 'react-bootstrap';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      subject,
      message
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }
    })
  }

  return (
<section id="contact" class="contact">
<div class="container">
  <div class="section-title">
    <h2>Contact</h2>
    <p>Like to reach out? Contact me from the form below and watch out for an email!
    </p>
  </div>
  <div class="row" data-aos="fade-in">
    <div class="col-lg-5 d-flex align-items-stretch">
    </div>
    <div className="col-12 d-flex align-items-stretch">
      <form action="forms/contact.php" method="post" class="php-email-form">
        <div className="row">
          <div className="form-group col-md-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name"  onChange={(e)=>{setName(e.target.value)}} name='name' />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} name='email' />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="name">Subject</label>
            <input type="text" className="form-control" id="subject"  onChange={(e)=>{setSubject(e.target.value)}} name='subject' />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" id="message" onChange={(e)=>{setMessage(e.target.value)}} name='message' />
        </div>
        <input type='submit' className="btn p-btn-color custom-length" onClick={(e)=>{handleSubmit(e)}}/>
      </form>
    </div>
  </div>
</div>
</section>
  )
}