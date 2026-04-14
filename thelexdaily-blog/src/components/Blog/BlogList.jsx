import React, { useEffect, useState } from "react";
import "./blog.scss";

const API_KEY = "YOUR_PIXABAY_API_KEY";

const BlogList = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🖼 Images
        const imgRes = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=technology&image_type=photo&per_page=10`
        );
        const imgData = await imgRes.json();
        setImages(imgData.hits);

        // 🎬 Videos
        const vidRes = await fetch(
          `https://pixabay.com/api/videos/?key=${API_KEY}&q=technology&per_page=5`
        );
        const vidData = await vidRes.json();
        setVideos(vidData.hits);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="loading">Loading blogs...</p>;
  }

  return (
    <div className="blog-container">
      <h2 className="section-title">🖼 Image Blogs</h2>

      {images.map((item) => (
        <div className="blog-card" key={item.id}>
          <img src={item.webformatURL} alt={item.tags} />
          <div className="content">
            <h3>{item.tags}</h3>
            <p>Free stock image from Pixabay</p>
          </div>
        </div>
      ))}

      <h2 className="section-title">🎬 Video Blogs</h2>

      {videos.map((item) => (
        <div className="blog-card" key={item.id}>
          <video controls>
            <source src={item.videos.medium.url} type="video/mp4" />
          </video>
          <div className="content">
            <h3>{item.tags}</h3>
            <p>Free stock video from Pixabay</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;