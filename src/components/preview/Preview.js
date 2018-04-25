import _ from 'lodash';
import $ from 'jquery';
import React, { Component } from 'react';
import domToImage from 'dom-to-image';

import './preview.scss';

class Preview extends Component {
    download = () => {
        domToImage.toJpeg(this.$preview).then(dataUrl => {
            const link = document.createElement('a');
            link.download = this.props.fileName;
            link.target = '_blank';
            link.href = dataUrl;

            $(link).click();
        });
    };

    render() {
        const { url, payload } = this.props;
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
                    {payload.map(({ content, css, data }, index) => (
                        <div
                            style={JSON.parse(css)}
                            key={index}
                            dangerouslySetInnerHTML={{
                                __html: _.template(content)(
                                    _.mapValues(data, x => eval(x))
                                ),
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Preview;
