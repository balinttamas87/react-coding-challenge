import React from 'react';
import './styles.css';

import FrameSelection from '../FrameSelection/FrameSelection';

const FrameSelectionGroup = ({ selected, selectFrame }) => {
    return (
        <div className={'frame-selection-group-wrapper'}>
            <FrameSelection index={0} selectedIndex={selected} select={selectFrame}/>
            <FrameSelection index={1} selectedIndex={selected} select={selectFrame}/>
            <FrameSelection index={2} selectedIndex={selected} select={selectFrame}/>
            <FrameSelection index={3} selectedIndex={selected} select={selectFrame}/>
            <FrameSelection index={4} selectedIndex={selected} select={selectFrame}/>
        </div>
    );
}

export default FrameSelectionGroup;

