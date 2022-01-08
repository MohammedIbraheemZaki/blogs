import React from 'react'

const Blogs = ({blogsList, title}) => {

  return (
    <>
      <h2>{title}</h2>
      {blogsList.map(blog => (
        <div className='blog-item' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          {/* <button onClick={() => deleteBlog(blog.id)} >delete blog</button> */}
        </div>
      ))}
    </>
  )
}

export default Blogs
