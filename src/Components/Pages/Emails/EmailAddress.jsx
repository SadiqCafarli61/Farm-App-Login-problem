import React from 'react'
import Email from './Email'
import '../Emails/Email.css'
import EmailNavbar from './EmailNavbar'

const EmailAddress = () => {
  return (
    <div>
        <EmailNavbar />
        <Email />
    </div>
  )
}

export default EmailAddress