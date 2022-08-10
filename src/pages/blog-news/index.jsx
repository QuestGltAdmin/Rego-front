import axios from 'axios';
import AnimatePage from 'HOCs/Animate';
import React, { useEffect, useState } from 'react'
import NftAvatar from 'components/NftAvatar';
import BlogAvatar from 'components/BlogAvatar';
import RegoLoader from 'components/RegoLoader';


function Index() {

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    const res = await axios.post('http://nft.regoex.com:3001/users/content/')
    console.log(res.data.data.content)
    setBlogs(res.data.data.content)
  }
  
  return (
    <>
        {!blogs && <RegoLoader loaderAutoResize={false} className=" h-72" />}
    {blogs && <div className="grid grid-cols-2 pb-4 mt-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 auto-cols-auto gap-y-6 sm:pb-0">
        {blogs?.map((items, index) => {
          
            return (
              <BlogAvatar
                _id={items._id}
                key={index}
                imageSrc={`${"http://nft.regoex.com:3001/content/"}${items.image}`}
                title={items.title}
                // category={items.category}
              />
            )
        })}
      </div>}
    </>
  )
}

export default AnimatePage(Index);
