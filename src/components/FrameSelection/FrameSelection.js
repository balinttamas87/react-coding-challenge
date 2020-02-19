import React from 'react';
import classNames from 'classnames';
import './styles.css';

const FrameSelection = ({ index, selectedIndex, select }) => {
    const className = classNames({
        'frame-selection-wrapper': true,
        'frame-selection-wrapper--selected': index === selectedIndex
    });
    return (
        <div className={className} onClick={() => select(index)}>

        </div>
    );
}

export default FrameSelection;

