import { useState, useEffect } from 'react';
const useFetch = (endPoint) => {
  const [error, setError] = useState(null)

  // LOADING
  const [pending, setPending] = useState(true)

  const [data, setDate] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      fetch(endPoint)
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
          setPending(false)
          setError(err.message)
        })
    }, 3000)
  }, [endPoint]);
  return {
    data, pending, error
  }
}

export default useFetch;