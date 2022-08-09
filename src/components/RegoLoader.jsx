import React from 'react'
import classNames from "@lib/classNames"

/**
 * Whrooler Loader Component.
 */
export default function RegoLoader({loaderAutoResize}) {
  return (
    <div id="whrooler-loader" className={classNames("flex items-center justify-center w-full h-full", loaderAutoResize && " sm:p-1")}>
        <img src="/1.png" alt="img" id={loaderAutoResize?"":"love"} />
    </div>
  )
}

export function RegoLoaderFullScreen(){
  return (
    <div id="whrooler-loader" className="flex items-center justify-center w-screen h-screen bg-brandColor-500">
        <img src="/1.png" alt="img" id="love" />
    </div>
  )
}