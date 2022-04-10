import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

// 

export const PostsPage = () => {

  const [posts, setPosts] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(body => setPosts(body))

  }, [])

  if (!posts.length) return null;

  return (
    <ul className="posts-nav">{posts.map(post => (
      <li key={post.id} onClick={() => navigation(`/posts/${post.id}`, {state: post})}>
        {/* <Link to={`/posts/${post.id}`}> */}
          {post.title}
        {/* </Link> */}
      </li>
    ))}
    </ul>
  )
};


