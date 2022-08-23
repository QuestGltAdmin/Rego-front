import React, { useEffect, useState } from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
// import '../assets/css/custom.css';
// import '../assets/css/style.css';
// import '../assets/css/dash-inner.css';
// import '../assets/css/nice-select.css';
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'
import blog4 from '../assets/images/blog4.png'
import { useSelector } from "react-redux";
import axios from "axios";



const BlogandNews = () => {





  const { user } = useSelector((state) => state.auth);
  const [blogs, setBlogs]=useState([])
    const fetchData = async () => {
      const res = await axios.get("http://3.128.190.203:3001/users/blogsList")
      console.log(res.data)
      setBlogs(res.data)
      }
   useEffect(()=>{
    fetchData();

    },[])








  return (
    <section className="dashboard-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />
              <div className="row blogs">
              <div className="col-lg-12">
                <div className="card-flex">
                {blogs?.data?.map(post=>(
                  <div className="card" key={post._id.value}>
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={post.blogimage} />
                        <div className="bottom-right">
                          <h5>{post.title}</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                  {/* <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog2} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog3} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>       
                      </div>
                    </a>
                  </div>              
                </div>
                <div className="card-flex">
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog1} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog2} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog3} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row" id="blog">
              <div className="col-md-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <i className="fas fa-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogandNews;
