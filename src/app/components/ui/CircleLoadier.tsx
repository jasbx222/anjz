import { Loader2Icon } from 'lucide-react'
import React from 'react'

const CircleLoadier = () => {
  return (
   <div className="text-center flex justify-center relative top-24 items-center">
     <Loader2Icon size={40} color="red" className="animate-spin" />

      </div>
  )
}

export default CircleLoadier