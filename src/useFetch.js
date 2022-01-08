import { useState, useEffect } from 'react';
const useFetch = (endPoint) => {
  const [error, setError] = useState(null)

  // LOADING
  const [pending, setPending] = useState(true)

  const [data, setDate] = useState(null)
  useEffect(() => {

    // cleanup function
    const abortCont = new AbortController()

    setTimeout(() => {
      // second args that use to make cleanup => stop fetch if we are not in functions page
      fetch(endPoint, {signal: abortCont.signal} )
        .then(res => {
          // handle error from server
          if(!res.ok){
            throw Error('could not fetch data from server for that resource')
          }
         return res.json()
        })
        .then((data) => {
          setDate(data)
          setPending(false);
          setError(null);
          // console.log(data);
        })
        .catch(err => {
          if (err.name === 'AbortError'){
            console.log('fetch abort');
          } else {
            setPending(false)
            setError(err.message)
          }
        })
    }, 3000);
    return () => abortCont.abort();
  }, [endPoint]);
  return {
    data, pending, error
  }
}

export default useFetch;