import Link from 'next/link'
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 MacBeats All rights reserved</p>
      <p className='icons'>
        <Link href="https://www.linkedin.com/in/angus-macapella/">
          <a>
            <AiFillLinkedin />
          </a>
        </Link>
      </p>

    </div>
  )
}

export default Footer