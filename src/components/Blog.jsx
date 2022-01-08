// import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch';

const Blog = () => {
  const {id} = useParams();

  const { data: blog, error, pending} = useFetch('https://jsonplaceholder.typicode.com/posts/'+id)

  return (
    <div className='blog-details'>
      {error && <div>{error}</div>}
      {pending && <h1>Loading ...</h1>}
      {blog && (
        <article className='blog-item' >
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </article>
      )}
      {/* <h2>Blog Details : {id}</h2> */}
    </div>
  )
}

export default Blog
