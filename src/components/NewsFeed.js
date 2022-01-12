import { axios } from 'axios';
import React, { useEffect, useState } from 'react'

const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://cryptocurrency-news-live.p.rapidapi.com/crypto-news',
      headers: {
      'x-rapidapi-host': 'cryptocurrency-news-live.p.rapidapi.com',
      'x-rapidapi-key': 'fe2b6dd757mshb3aacce4d48a5c3p13eceejsn7aa19c5330bb'
      }
    };

    axios.request(options).then((response) => {
	    console.log(response.data)
      setArticles(response.data)
    }).catch((error) => {
	    console.error(error)
    });
  }, [])

  console.log(articles)

  return (
    <div className='NewsFeed'>
      NewsFeed!
    </div>
  )
}

export default NewsFeed
