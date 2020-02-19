import React from 'react';
import FrameDataTable from '../FrameDataTable/FrameDataTable';
import FrameSelectionGroup from '../FrameSelectionGroup/FrameSelectionGroup';
import Button from '../Button/Button';

const FramePage = ({ tableData, selected, selectFrame, copiedFrame, copyFrame }) => {
    return (
        <React.Fragment>
            <FrameSelectionGroup selected={selected} selectFrame={selectFrame} />
            <Button onClick={copyFrame}>Copy Frame</Button>
            <FrameDataTable
                selected={selected}
                tableData={tableData}
                copiedFrame={copiedFrame}
            />
        </React.Fragment>
    )
}

export default FramePage;

