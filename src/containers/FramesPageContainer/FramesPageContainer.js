import React from "react";
import FramePage from '../../components/FramePage/FramePage';
import { connect } from 'react-redux';
import {
    fetchFrames
} from './actions';

class FramesPageContainer extends React.Component {
    componentDidMount() {
        this.props.fetchFrames();
    }

    render() {
        return (
            <div>
                <FramePage tableData={this.props.tableData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.framesPage
});

const mapDispatchToProps = {
    fetchFrames
};

export default connect(mapStateToProps, mapDispatchToProps)(FramesPageContainer);