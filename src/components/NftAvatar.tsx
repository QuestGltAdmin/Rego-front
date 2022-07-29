// import { useWindowDimensions } from "lib/hooks/useWindowDimensions";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { WhroolerCardModal } from "./WhroolerCardModal";

export type NftAvatarProps = {
  className?: string;
  size?: number;
  imageSrc: string;
  title?: string;
  alt?: string;
  gravatarFallbackMd5?: string;
  name: string;
  username?:string;
  userId?: string;
  type?:number;
};

export default function NftAvatar(props: NftAvatarProps) {


    const navigate = useNavigate();
  const location = useLocation();

  const isBlockedUsers =
    location.pathname === "/blocked-whroolers" ? true : false;
  const [showWhroolerCardModal, setShowWhroolerCardModal] = useState(false);
  const [showMobWhroolerCardModal, setShowMobWhroolerCardModal] = useState(false);
//   const { width } = useWindowDimensions();
//   const PhotoUrlPrefix = `${BASE_/PHOTO_URL}/${props?.userId}`

  if(props.type==1){

    return (
      <div className='flex flex-col m-3 bg-white rounded-lg h-72 w-52'>
        <div className='m-2'>
          <div className='w-48 h-48 p-1 rounded-full bg-blue-800 hover:shadow-2xl hover:shadow-clr1'>
            <img className="object-cover w-full h-full rounded-full" src={props.imageSrc} alt="Whrooler Avatar" />
          </div>
          <div className='flex flex-col pt-3'>
          <div>
          <h1 className="text-lg font-semibold text-center text-blue-800 lg:text-xl">
            {props.name}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <h1 className="font-light text-center text-gray-500 lg:text-lg">
            {"28.00 BNB"}
          </h1>
          <span className="text-gray-500 font-light text-base">{"($400.56)"}</span>
        </div>
          </div>
        </div>

      </div>
    )

  }

  

  return (
    // <div className='flex flex-col w-5/12 h-auto rounded-lg sm:w-4/12 md:w-3/12 lg:w-2/12'>
    <div className="grid h-auto mx-4 gap-y-1 rounded-lg sm:mx-6 lg:mx-8 hover:cursor-pointer">
      {/* handles views for card modals and mobile page for modals */}
      <div
        className="w-full h-full p-1 bg-blue-800 rounded-2xl hover:shadow-2xl hover:shadow-clr1"
        onClick={() => {
          setShowWhroolerCardModal(true)
        }}
      >
        <img
          className="object-cover w-full h-full rounded-2xl"
          src={ 
            props?.imageSrc}
          alt="Whrooler Avatar"
        />
      </div>
      <div className="flex items-center px-2">
        <img className=" h-7 w-7" src="/images/profile.png" />
        <h1 className="ml-3 font-normal text-center text-gray-500 lg:text-lg">{props?.username||"Clanty"}</h1>
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-lg font-semibold text-center text-blue-800 lg:text-xl">
            {props.name}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <h1 className="font-light text-center text-gray-500 lg:text-lg">
            {"28.00 BNB"}
          </h1>
          <span className="text-gray-500 font-light text-base">{"($400.56)"}</span>
        </div>
      </div>
      {showWhroolerCardModal && !isBlockedUsers && (
        // <WhroolerCardModal
        //   userId={props.userId}
        //   onClose={() => setShowWhroolerCardModal(false)}
        // />
        <></>
      )}
    </div>
  );
}