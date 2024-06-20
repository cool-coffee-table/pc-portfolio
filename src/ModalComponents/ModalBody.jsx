import React from 'react'

export default function ModalBody({body, isMaximized}) {
  return (
    <div className={`w-full text-white relative ${isMaximized ? "h-full" : "h-96 max-w-[400px] "}`} >
        {body}
    </div>
  )
}
