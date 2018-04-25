import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './css/index.scss';

const template = require('../template/xianxing.json');

import Selection from './components/selection/Selection';
import Preview from './components/preview/Preview';

const bgPics = template.background;

class App extends React.Component {
    state = {
        url: null,
        fileName: null,
    };

    onBgChange = e => {
        const fileName = $(e.target)
            .find('option:selected')
            .text();

        this.setState({
            url: e.target.value,
            fileName: `${fileName}.jpeg`,
        });
    };

    render() {
        const { url, fileName } = this.state;

        return (
            <div className="app">
                <header>Poster Maker</header>
                <Selection
                    options={bgPics.map(({ title, url }) => ({
                        title,
                        value: url,
                    }))}
                    onSelect={this.onBgChange}
                />
                {url && (
                    <Preview url={url} fileName={fileName} payload={template.payload}>
                        <span>placeholder</span>
                    </Preview>
                )}
            </div>
        );
    }
}

$(() => {
    render(<App />, $('#app').get(0));
});
