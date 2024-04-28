import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3 d-flex justify-contert:cneter' >
                <div className="card">

                    <div style={{display: 'flex', justifyContent: 'flex-end', left: '0', position: 'absolute'}}>
                        <span className=" badge rounded-pill bg-danger" >
                            {source}
                        </span>
                    </div>

                    <img src={!imgUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/phishsphere2024-0418-225029-0799-alivecoverage-enhanced-nr.jpg?c=16x9&q=w_800,c_fill" : imgUrl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
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
