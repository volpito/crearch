import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function BtnReturn(props) {
  return (
    <Link
      to={props.to}
      className="fixed lg:block hidden z-40 bottom-6 right-6 w-full inline-flex items-center justify-center text-base font-medium rounded-md text-gray-400 hover:underline sm:w-auto"
    >
      {props.content}
    </Link>
  )
}

export default BtnReturn
