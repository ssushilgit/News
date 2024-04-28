import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3 d-flex justigy-contert:cneter' >
                <div className="card">
                    <img src={!imgUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/phishsphere2024-0418-225029-0799-alivecoverage-enhanced-nr.jpg?c=16x9&q=w_800,c_fill" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
                                {source}
                            <span className="visually-hidden">unread messages</span>
                            </span>... </h5>
                        <p className="card-text">{description} ... </p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? " unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
