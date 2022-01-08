// import {useState, useEffect} from 'react'
import useFetch from './useFetch';
import Blogs from './components/Blogs';
const Home = () => {
  
  // const [name, setName] = useState('mohammed')
  // const [age, setAge] = useState(20)
  // const handleClick = () => {
  //   setName('hamada');
  //   setAge(27)
  // }
  // const handleClickAgin = (name) => {
  //   console.log('hello from another click with args => '+name);
  // }
  
  const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')
  // const {data: blogs, pending, error} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {pending && <h1>Loading ...</h1>}
      {blogs && <Blogs blogsList={blogs} title="All Blogs" />}
      {/* <h2>Home page</h2>
      <p>my name is {name}, i am {age} years old </p>
      <button onClick={handleClick} >Click me</button>
      <button onClick={() => handleClickAgin('mohammed')} >Click me</button> */}
    </div>
  )
}

export default Home


