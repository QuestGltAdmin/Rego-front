import React, { useEffect, useState } from 'react'
import { CocoonSubHeading } from 'components/Cocoon';
import Button from 'components/ui/Button';
import AnimatePage from 'HOCs/Animate';
import { AiOutlineRightCircle } from 'react-icons/ai';
import NftAvatar from 'components/NftAvatar';
import axios from 'axios';
function Nft() {
  const [nfts, setNfts] = useState<any[]>([])

  const fetchData = async () => {
    const res = await axios.post('http://nft.regoex.com:3001/users/content/')
    console.log(res.data.data.content)
    setNfts(res.data.data.content)
  }
  useEffect(() => {
    fetchData();
  }, [])
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
        {nfts.map((items, index) => {
          if (items.status === "approved") {
            return (
              // <NftCard key={index} name="Cartoon NFT" imageSrc='/images/nft.png' price={10} userProfilePic="/images/profile.png" username='@clouty' />
              <NftAvatar
                key={index}
                imageSrc={`${"http://nft.regoex.com:3001/content/"}${items.image}`}
                name={items.title}
                username={items.category}
                price={items.price}
                type={1}
              />
            )
          }
        })}
      </div>

      {/* Comming Soon NFTs */}
      <hr className='border-2 border-blue-800 my-2 ' />
      <CocoonSubHeading title="Comming Soon NFTs" subtitle="NFTs comming soon in future.."
        actions={
          <div className="flex gap-x-2 mr-2">
            <Button href="/wallet" EndIcon={AiOutlineRightCircle} className=' rounded-full bg-white border-clr1 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-transparent hover:text-blue-800 px-4 py-2'>{"See All"}</Button>
            {/* <Button className=' bg-blue-600 text-white hover:bg-blue-800 rounded-lg px-2 py-2'>{"Save & Continue"}</Button> */}
          </div>
        }
      />
      <div className="grid grid-cols-2 pb-4 mt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-cols-auto gap-y-4 sm:pb-0">
        {nfts.map((items, index) => {
          if (items.status === "pending") {
            return (
              // <NftCard key={index} name="Cartoon NFT" imageSrc='/images/nft.png' price={10} userProfilePic="/images/profile.png" username='@clouty' />
              <NftAvatar
                key={index}
                imageSrc={`${"http://nft.regoex.com:3001/content/"}${items.image}`}
                name={items.title}
                username={items.category}
                price={items.price}
              />
            )
          }
        })}
      </div>
    </>
  )
}

export default AnimatePage(Nft);
