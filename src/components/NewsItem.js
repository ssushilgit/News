import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div className='my-3 d-flex justigy-contert:cneter' >
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imgUrl?"https://media.cnn.com/api/v1/images/stellar/prod/phishsphere2024-0418-225029-0799-alivecoverage-enhanced-nr.jpg?c=16x9&q=w_800,c_fill":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description} </p>
                        <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
