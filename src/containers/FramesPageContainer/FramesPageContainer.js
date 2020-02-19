import React from "react";
import FramePage from '../../components/FramePage/FramePage';
import { connect } from 'react-redux';
import {
    fetchFrames,
    selectFrame,
    copyFrame
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
    copyFrame
};

export default connect(mapStateToProps, mapDispatchToProps)(FramesPageContainer);