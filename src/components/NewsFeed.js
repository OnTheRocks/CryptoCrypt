import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
      const options = {
      method: 'GET',
      url: 'http://localhost:8000/news'
    }

    axios.request(options).then((response) => {
	    console.log(response.data)
      setArticles(response.data)
      
    }).catch((error) => {
	    console.error(error)
    });



    // const options = {
    //   method: 'GET',
    //   url: 'https://cryptocurrency-news-live.p.rapidapi.com/crypto-news',
    //   headers: {
    //   'x-rapidapi-host': 'cryptocurrency-news-live.p.rapidapi.com',
    //   'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
    //   }
    // };

    // axios.request(options).then((response) => {
	  //   console.log(response.data)
    //   setArticles(response.data)
    // }).catch((error) => {
	  //   console.error(error)
    // });
  }, [])

      const first10 = articles?.slice(0,3)

  return (
    <div className='NewsFeed'>
      <h2>Crypto News Feed</h2>
      {first10?.map((article, _index) => (
        <div key={_index}>
           <a href={article.URL}><p>{article.Title}</p></a>
        </div>))}
    </div>
  )
}

export default NewsFeed
