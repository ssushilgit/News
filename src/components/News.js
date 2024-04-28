import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props)
        console.log("This is awesome")
        this.state = {
            // articles: this.articles, //imp
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16541d3b22a74a0fa264fe176299cfb5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(75);
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() { 
        this.updateNews();
    }

    fetchMoreData = async() =>{
        this.setState({page: this.state.page +1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16541d3b22a74a0fa264fe176299cfb5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        });

    };

    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews();
    // }
    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews();
    // }
    render() {
        return (
            <>
                <h2 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
                {this.state.loading && <Spinners />}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!== this.state.totalResults}
                    loader={<Spinners/>}
                >
                    <div className="container">
                    <div className="row mb-3 mt-3" >
                        {/* !this.state.loading&& */}
                        {this.state.articles.map((element) => {
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

                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>
                            &larr; Previous
                        </button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>
                            Next &rarr;
                        </button>

                </div> */}
            </ >


        )
    }
}

export default News