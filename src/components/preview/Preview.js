import _ from 'lodash';
import $ from 'jquery';
import React, { Component } from 'react';
import domToImage from 'retina-dom-to-image';

import loadingSvg from './loading.svg';
import fileSaver from 'file-saver';

import './preview.scss';

class Preview extends Component {
    state = {
        isLoaded: false,
    };

    download = () => {
        domToImage
            .toBlob(this.$preview)
            .then(blob => {
                fileSaver.saveAs(blob, this.props.fileName);
            })
            .catch(err => {
                alert(err.message);
            });
    };

    onLoad = () => {
        this.setState({ isLoaded: true });
    };

    render() {
        const { url, payload } = this.props;
        return (
            <div className="preview">
                {this.state.isLoaded ? (
                    <button
                        className="preview-download"
                        onClick={this.download}
                    >
                        下载图片
                    </button>
                ) : (
                    <img src={loadingSvg} />
                )}
                <div
                    className="preview-area"
                    ref={node => (this.$preview = node)}
                >
                    <img
                        onLoad={this.onLoad}
                        alt="preview"
                        src={url}
                        className="preview-pic"
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
