import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a 
                              href={infoLink}
                              target="_blank" rel="noopener noreferrer"
                              key={index} className="book">
                              <img src={imageLinks !== undefined ? imageLinks.thumbnail : ''} 
                                alt="book" 
                                className="bookimg"
                                />
                              <div className="booktext">
                                 {title}
                               </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;