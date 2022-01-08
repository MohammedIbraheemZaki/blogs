import {useState} from 'react'
import { useHistory } from 'react-router-dom'
const Create = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('test')
  const [pending, setPending] = useState(false)
  
  // redirect
  const history = useHistory();

  // title
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  // body
  const handleBody = (e) => {
    setBody(e.target.value)
  }

  // handle select
  const handleSelect = (e) => {
    setAuthor(e.target.value)
  }

  // submit this form 
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author}

    setPending(true)
    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "content-type": "application/json"},
        body: JSON.stringify(blog)
      })
        .then(() => {
          console.log('new blog added');
          setPending(false)
          // history.go(-1);
          history.push('/')
        })
    }, 1000);
    console.log(blog);
  }

  return (
    <div className='create' >
      <h1>Create Blog</h1>
      {pending && (<h1>Uploading ... </h1>)}
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="">Blog Title : </label>
        <input 
          type="text"
          required
          value={title}
          onChange={handleTitle}
        />
        <label htmlFor="">Blog Body : </label>
        <textarea 
          required
          value={body}
          onChange={handleBody}
        ></textarea>
        <label htmlFor="">Blog Author : </label>
        <select value={author} onChange={handleSelect} >
          <option value="mohammed">mohammed</option>
          <option value="unknown">mghol</option>
          <option value="test">test</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create
