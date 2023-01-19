import React from 'react'
import classNames from "lib/classNames"

/**
 * Whrooler Loader Component.
 */
export default function RegoLoader({loaderAutoResize,className=""}) {
  return (
    <div id="whrooler-loader" className={classNames(" flex items-center justify-center ", loaderAutoResize && " sm:p-1 ", className)}>
        <img src="/rego-logo.png" alt="img" id={loaderAutoResize?"":"love"} />
    </div>
  )
}

export function RegoLoaderFullScreen(){
  return (
    <div id="whrooler-loader" className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <img src="/rego-logo.png" alt="img" id="love" />
    </div>
  )
}