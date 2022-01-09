// import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../useFetch';

const Blog = () => {
  const {id} = useParams();

  // const { data: blog, error, pending} = useFetch('http://localhost:8000/blogs/'+id)
  const { data: blog, error, pending} = useFetch('https://jsonplaceholder.typicode.com/posts/'+id)

  const history = useHistory()

  const handleDelete = (id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className='blog-details'>
      {error && <div>{error}</div>}
      {pending && <h1>Loading ...</h1>}
      {blog && (
        <article className='blog-item' >
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          <button onClick={() => handleDelete(blog.id)} >Delete Blog</button>
        </article>
      )}
      {/* <h2>Blog Details : {id}</h2> */}
    </div>
  )
}

export default Blog
