import React from 'react';

import './selection.scss';

const Selection = ({ options, onSelect, name }) => (
    <select name={name} onChange={onSelect}>
        <option value="">请选择</option>
        {options.map(({ title, value }) => (
            <option value={value} key={value}>
                {title}
            </option>
        ))}
    </select>
);

export default Selection;
