'use client'

import Swal from "sweetalert2"


import { logoutAction } from "./Logut"

const Page = () => {

const hande=()=>{
    Swal.fire({
        title: 'Auto close alert!',
  text: 'I will close in 2 seconds.',
  timer: 2000  
    })
logoutAction()
}

  return   (
  <button type="submit" onClick={hande}>
    logout
  </button>
  )
}

export default Page
