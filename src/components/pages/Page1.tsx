import React from 'react'
import { Link } from 'react-router-dom'

export const Page1: React.FunctionComponent = () => {
  return (
    <div>
      やれたことリスト<Link to="/">Home</Link>
    </div>
  )
}
