import React from 'react';
import FrameDataTable from '../FrameDataTable/FrameDataTable';
import FrameSelectionGroup from '../FrameSelectionGroup/FrameSelectionGroup';

const FramePage = ({ tableData, selected, selectFrame }) => {
    return (
        <React.Fragment>
            <FrameSelectionGroup selected={selected} selectFrame={selectFrame} />
            <FrameDataTable selected={selected} tableData={tableData} />
        </React.Fragment>
    )
}

export default FramePage;

