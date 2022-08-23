import axios from 'axios';
import AnimatePage from 'HOCs/Animate';
import React, { useEffect, useState } from 'react'
import NftAvatar from 'components/NftAvatar';
import BlogAvatar from 'components/BlogAvatar';
import RegoLoader from 'components/RegoLoader';


function Index() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    const res = await axios.get(`http://3.128.190.203:3001/users/blogsList`)
    setBlogs(res.data.data)
  }
  console.log(blogs);
  return (
    <>
      {!blogs && <RegoLoader loaderAutoResize={false} className=" h-72" />}
      {blogs && <div className="grid grid-cols-2 pb-4 mt-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 auto-cols-auto gap-y-6 sm:pb-0">
        {blogs?.map((items, index) => {
          console.log(items)
          return (
            <BlogAvatar
              _id={items?._id}
              key={index}
              imageSrc={items?.blogimage}
              title={items?.title}
              subheading={items?.subheading}
            // category={items.category}
            />
          )
        })}
      </div>}
    </>
  )
}

export default AnimatePage(Index);
