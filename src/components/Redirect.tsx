import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';


type RedirectProps={
    to:string;
    from?:string;
}
export default function Redirect({to,from="" }:RedirectProps) {

  return (
    <Navigate to={to}/>
  )
}
