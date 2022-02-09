import axios from 'axios'
import React, { useEffect, useState } from 'react'

const News = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
      const options = {
      method: 'GET',
      url: '/news'
    }

    axios.request(options).then((response) => {
	    console.log(response.data)
      setArticles(response.data)

    }).catch((error) => {
	    console.error(error)
    });

  }, [])

      const first10 = articles?.slice(0,5)

  return (
    <div className="newsContainer">
      <header>Crypto News</header>
      <div className="body">        
        {first10?.map((article, _index) => (
        <div key={_index}>

           <a href={article.URL} target="_blank" rel='noreferrer'><p>{article.Title}</p></a>
        </div>))}
      </div>
    </div>
  )
}

export default News



