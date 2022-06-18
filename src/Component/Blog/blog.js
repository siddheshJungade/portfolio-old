import { useState, useEffect } from "react";
import BlogItem from "./blog-item/blog-item";


const query = `
    {
      user(username: "siddheshjungade") {
        publication {
          posts{
            title
            coverImage,
            slug
          }
        }
      }
    }
  `;


const Blog = () => {

  const [posts, setPosts] = useState(null)
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      const ApiResponse = await response.json();
      setPosts(ApiResponse.data.user.publication.posts);
    };
    fetchPosts();
  }, [])




  return (
  <div className="technology">
    {!posts ? 'loding...' :
        posts.map((post, id) => {
        return (
          <BlogItem {...post} key={id} />
        )
      })

    }
    </div>
  );
}

export default Blog;