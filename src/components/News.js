import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
    constructor() {
        super()
        console.log("This is awesome")
        this.state = {
            // articles: this.articles, //imp
            articles:[],
            loading: false
        }

    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=16541d3b22a74a0fa264fe176299cfb5";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({ articles: parsedData.articles });
    }
    
    render() {
        return (
            <div>
                <div className="container my-3">
                <h4 style={{ textAlign: "center" }}>NewsMonkey - Top News Recently WorldWide</h4>
                    <div className="row mb-3 mt-3" >
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imgUrl={element.urlToImage} newsUrl={element.url} />
                                {/* We can use '.slice(0, 72)' to limit the display  */}
                            </div>
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default News
