import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
        <h1>NotFound</h1>
        <Link to='/'>HOME</Link>
        <br></br>
        <a href='http://localhost:3000'>a태그</a>
        </div>
  )
}
