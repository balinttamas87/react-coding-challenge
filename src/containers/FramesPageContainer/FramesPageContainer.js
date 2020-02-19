import React from "react";
import FramePage from '../../components/FramePage/FramePage';
import Dialog from '../../components/Dialog/Dialog';
import { connect } from 'react-redux';

import {
    fetchFrames,
    selectFrame,
    copyFrame,
    resetError
} from './actions';

class FramesPageContainer extends React.Component {
    componentDidMount() {
        this.props.fetchFrames();
    }

    render() {
        return (
            <div>
                <FramePage
                    tableData={this.props.tableData}
                    selected={this.props.selectedFrame}
                    selectFrame={this.props.selectFrame}
                    copiedFrame={this.props.copiedFrame}
                    copyFrame={this.props.copyFrame}
                />
                <Dialog
                    isError={this.props.isFetchingFramesError}
                    resetError={this.props.resetError}
                    statusCode={this.props.statusCode}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.framesPage
});

const mapDispatchToProps = {
    fetchFrames,
    selectFrame,
    copyFrame,
    resetError
};

export default connect(mapStateToProps, mapDispatchToProps)(FramesPageContainer);