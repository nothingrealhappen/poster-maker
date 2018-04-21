import React, { Component } from 'react';

import './preview.scss';

class Preview extends Component {
	  render() {
        const { url } = this.props;
		    return (
            <div className="preview">
                <p>长按保存图片</p>
                <img alt="preview" src={url} className="preview-pic" />
            </div>
		    );
	  }

}

export default Preview;
