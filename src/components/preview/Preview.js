import React, { Component } from 'react';
import domToImage from 'dom-to-image';

import './preview.scss';

class Preview extends Component {
    download = () => {
        domToImage.toJpeg(this.$preview).then(dataUrl => {
            const link = document.createElement('a');
            link.download = this.props.title;
            link.href = dataUrl;
            link.click();
        });
    };

    render() {
        const { url } = this.props;
        return (
            <div className="preview">
                <a href="javascript:;" onClick={this.download}>
                    下载图片
                </a>
                <div className="preview-area">
                    <img
                        alt="preview"
                        src={url}
                        className="preview-pic"
                        ref={node => (this.$preview = node)}
                    />
                </div>
            </div>
        );
    }
}

export default Preview;
