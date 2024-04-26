import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners'
import PropTypes from 'prop-types'


export class News extends Component {
    // static defaultProps = {
    //     country :'in',
    //     pageSize: 6,
    //     category: 'general'

    // }
    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string
    // }

    constructor() {
        super()
        console.log("This is awesome")
        this.state = {
            // articles: this.articles, //imp
            articles: [],
            loading: false ,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16541d3b22a74a0fa264fe176299cfb5&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
         });
    }

    handlePrevClick = async () => {
        console.log("Prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16541d3b22a74a0fa264fe176299cfb5&page=${this.state.page - 1} &pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
            console.log("Next");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16541d3b22a74a0fa264fe176299cfb5&page=${this.state.page + 1} &pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }



    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">NewsMonkey - Top News Recently WorldWide</h2>
                {this.state.loading&&<Spinners/>}
                <div className="row mb-3 mt-3" >
                    {!this.state.loading&&this.state.articles.map((element) => {
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

                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>
                            &larr; Previous
                        </button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>
                            Next &rarr;
                        </button>

                    </div>
                </div>
            </div>


        )
    }
}

export default News