import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResult] = useState(0)



    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=16541d3b22a74a0fa264fe176299cfb5&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(75);
        console.log(parsedData)

        setArticles(parsedData.articles)
        setTotalResult(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
    }, [])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=16541d3b22a74a0fa264fe176299cfb5&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResult(parsedData.totalResults)
    };

    // const handlePrevClick = async () => {
    //     setPage(page - 1 )
    //     updateNews();
    // }
    // const handleNextClick = async () => {
    //     setPage(page + 1 )
    //     updateNews();
    // }
    return (
        <>
            <h2 className="text-center" style={{ marginTop: '100px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines </h2>

            {loading && <Spinners />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinners />}
            >
                <div className="container">
                    <div className="row mb-3 mt-3" >
                        {articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 72) : ''}
                                    description={element.description ? element.description.slice(0, 120) : ''}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name} />
                                {/* We can use '.slice(0, 72)' to limit the display  */}
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>


            {/* <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePrevClick}>
                            &larr; Previous
                        </button>
                        <button disabled={page >= Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNextClick}>
                            Next &rarr;
                        </button>

                </div> */}
        </ >


    )
}


// News.defaultProps = {
//     country: 'in',
//     pageSize: 6,
//     category: 'general'
// }
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News