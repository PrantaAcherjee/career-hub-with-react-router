import React from 'react'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div>
       <p> 404 Page Not Found ! </p>
       <NavLink to="/"><button>GO BACK</button></NavLink>
    </div>
  )
}
