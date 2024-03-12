import Link from "next/link";
import { useState, useEffect } from "react";
import { projectFirestore } from "../config/firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const Blog = () => {
  const parentFolderInFirestorage = "blogs";

  const [isLoading, setIsLoading] = useState(false);
  const enableLoading = () => setIsLoading(true);
  const disableLoading = () => setIsLoading(false);
  const [latestBlogs, setlatestBlogs] = useState([]);

  useEffect(() => {
    readBlogsCollection();
  }, []);

  const readBlogsCollection = async () => {
    enableLoading();
    const blogsCollection = collection(projectFirestore, parentFolderInFirestorage);
    const querySnapshot = await getDocs(blogsCollection, orderBy('date', 'desc'), limit(4));
    let data = [];
    if (querySnapshot.size) {
      querySnapshot.forEach((doc) => {
        data.push({
          uid: doc.id,
          imgSrc: doc.data().imgSrc || "",
          date: doc.data().date || "",
          title: doc.data().title || "",
          description: doc.data().description || ""
        })
      })
      setlatestBlogs(data);
    } else {
      setlatestBlogs([]);
    }
    disableLoading();
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  }


  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blogs</h3>
        </div>
        {isLoading ?
          <>Loading...</>
          :
          latestBlogs.length ?
            <div className="row">
              {
                latestBlogs?.map((item, index) => (
                  <div className="col-md-6 m-15px-tb" key={index}>
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link href={`blog/${item.uid}`}>
                          <a>
                            <img src={item.imgSrc} title="" alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="blog-info">
                        <div className="blog-date-viewcount">
                          <div className="meta">{formatTimestamp(item.date)}</div>
                          <div className="fa fa-eye">&nbsp;{item.readCount || '0'}</div>
                        </div>
                        <h6>
                          <Link href={`blog/${item.uid}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className="col-12 read-more-blog text-center">
                <Link href="/blog">
                  <a className="px-btn px-btn-theme" target="_blank">More Blogs</a>
                </Link>
              </div>
            </div>
            :
            <>No Blogs added!</>
        }
      </div>
    </section>
  );
};
export default Blog;
