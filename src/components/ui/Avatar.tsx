import React, { useState } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import classNames from 'lib/classNames';
// import { defaultAvatarSrc } from '@lib/defaultImage';


export type AvatarProps={
  className?:string,
  size?:number,
  imageSrc?:string,
  alt:string,
  // gender:"MALE"|"FEMALE"
//   type:"PROFILE_PIC"|"COVER_PIC"|"PHOTO"
}

export default function Avatar({size,imageSrc,alt,className}:AvatarProps) {
  const overrideClassName = classNames("rounded-lg", className, size && `h-${size} w-${size}`);
  const [isLoading,setIsLoading] = useState<"idle"|"loaded"|"loading"|"error">("idle")
  return (
    <AvatarPrimitive.Root id="AvatarRoot" className={classNames('w-full h-full')}>
      <AvatarPrimitive.Image
        loading='lazy'
        onLoadingStatusChange={(e:any)=>setIsLoading(e)}
        src={imageSrc ?? undefined}
        alt={alt}
        className={classNames(`rounded-lg`, `h-full w-${size} mx-auto`, className)}
      />
      <AvatarPrimitive.Fallback>
       {/* <img src={defaultAvatarSrc({gender,type})} alt={alt} className={classNames(overrideClassName, isLoading==="loading" &&"blur-md",)} /> */}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}