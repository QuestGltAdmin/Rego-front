import React, { useState } from 'react'

export type BlogAvatarProps = {
  _id: string;
  title?: string;
  category?: string;
  className?: string;
  size?: number;
  imageSrc?: string;
  alt?: string;
  gravatarFallbackMd5?: string;
  type?: number;
};

export default function BlogAvatar(props: BlogAvatarProps) {
  const [showBlogAndNewsModal, setShowBlogAndNewsModal] = useState(false);
  return (
    // <div className='flex flex-col w-5/12 h-auto rounded-lg sm:w-4/12 md:w-3/12 lg:w-2/12'>
    <div className="grid h-auto mx-4 gap-y-1 rounded-lg sm:mx-6 lg:mx-8 hover:cursor-pointer">
      {/* handles views for card modals and mobile page for modals */}
      <div
        className="relative w-56 h-56 p-1 bg-blue-800 rounded-2xl hover:shadow-2xl hover:shadow-clr1"
        onClick={() => {
          setShowBlogAndNewsModal(true);
        }}
      >
        <img
          className="object-cover w-full h-full rounded-2xl"
          src={
            (props?.imageSrc)}
          alt="Demo Avatar"
        />
      <div className=" absolute bottom-2 flex flex-col p-2">
        <span className="text-white font-semibold text-base">{`Is Crypto falling??`}</span>
        {props?.category && <h1 className="text-lg font-light text-left text-blue-800 lg:text-xl">
          {"Name"}
        </h1>}
      </div>
      </div>
      {showBlogAndNewsModal && (
        // <DemoCardModal
        //   userId={props.userId}
        //   onClose={() => setShowDemoCardModal(false)}
        // />
        <></>
      )}
    </div>
  );
}
