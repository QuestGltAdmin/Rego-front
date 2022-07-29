import React from 'react'
import { CocoonSubHeading } from 'components/Cocoon';
import Button from 'components/ui/Button';
import AnimatePage from 'HOCs/Animate';
import { AiOutlineRightCircle } from 'react-icons/ai';
import NftAvatar from 'components/NftAvatar';

function index() {
  return (
    <>

      {/* Trending NFTs */}
      <CocoonSubHeading title="Trending NFTs" subtitle="Best NFTs trending today.." 
        className=' flex'
        actions={
          <div className="flex gap-x-2 mr-2">
            <Button href="/wallet" EndIcon={AiOutlineRightCircle} className=' rounded-full bg-white border-clr1 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-transparent hover:text-blue-800 px-4 py-2'>{"See All"}</Button>
            {/* <Button className=' bg-blue-600 text-white hover:bg-blue-800 rounded-lg px-2 py-2'>{"Save & Continue"}</Button> */}
          </div>
        }  
      />

      <div className="grid grid-cols-2 pb-4 mt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-cols-auto gap-y-4 sm:pb-0">
      {Array.of(1,2,3,4,5,6,7,8,9,0).map((a,index)=>(
        // <NftCard key={index} name="Cartoon NFT" imageSrc='/images/nft.png' price={10} userProfilePic="/images/profile.png" username='@clouty' />
        <NftAvatar
        key={index}
          imageSrc='/images/nft.png'
          name='Cartoon Nft'
        />
        ))}
        </div>
      
      {/* Comming Soon NFTs */}
      <hr className='border-2 border-blue-800 my-2 '/>
      <CocoonSubHeading title="Comming Soon NFTs" subtitle="NFTs comming soon in future.." 
        actions={
          <div className="flex gap-x-2 mr-2">
            <Button href="/wallet" EndIcon={AiOutlineRightCircle} className=' rounded-full bg-white border-clr1 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-transparent hover:text-blue-800 px-4 py-2'>{"See All"}</Button>
            {/* <Button className=' bg-blue-600 text-white hover:bg-blue-800 rounded-lg px-2 py-2'>{"Save & Continue"}</Button> */}
          </div>
        }  
      />
      <div className="grid grid-cols-2 pb-4 mt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-cols-auto gap-y-4 sm:pb-0">
      {Array.of(1,2,3,4,5,6,7,8,9,0).map((a,index)=>(
        // <NftCard key={index} name="Cartoon NFT" imageSrc='/images/nft.png' price={10} userProfilePic="/images/profile.png" username='@clouty' />
        <NftAvatar
          key={index}
          imageSrc='/images/nft.jpg'
          name='Cartoon Nft'
          type={1}
        />
        ))}
        </div>
    </>
  )
}

export default AnimatePage(index);
