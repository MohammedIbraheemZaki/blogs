// import logo from './logo.svg';
// import { useState, useEffect } from 'react/cjs/react.development';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
// import Blogs from './components/Blogs';
// import useFetch from './useFetch';
import Home from './Home';
import About from './About';
import Create from './Create';

function App() {
  // const title = 'Welcome to the new blog'
  // const likes = 50
  // const [name, setName] = useState('mohammed')
  // const [error, setError] = useState(null)

  // // LOADING
  // const [pending, setPending] = useState(true)

  // const [blogs, setBlogs] = useState(null)
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/blogs')
  //       .then(res => {
  //         // handle error from server
  //         if(!res.ok){
  //           throw Error('could not fetch data from server for that resource')
  //         }
  //        return res.json()
  //       })
  //       .then((data) => {
  //         setBlogs(data)
  //         setPending(false);
  //         setError(null);
  //         // console.log(data);
  //       })
  //       .catch(err => {
  //         setPending(false)
  //         setError(err.message)
  //       })
  //   }, 3000)
  //   console.log('useEffect');
  // }, []);


  // delete from ui 
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  // const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route exact path="/about" >
              <About/>
            </Route>
            <Route path="/create" >
              <Create/>
            </Route>
            <Route path="/blog/:id" >
              <Blog/>
            </Route>

          </Switch>
          
          {/* <button onClick={() => setName('ahmed')} >change name</button> */}
          {/* <Blogs blogsList={blogs.filter((blog) => blog.author === 'ana2')} title="Mohammed Blogs" deleteBlog={handleDelete}/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
