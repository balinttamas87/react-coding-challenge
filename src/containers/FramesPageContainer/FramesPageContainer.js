import React from "react";
import FramePage from '../../components/FramePage/FramePage';
import { connect } from 'react-redux';
import {
    fetchVariant,
    fetchColumns
} from './actions';

class FramesPageContainer extends React.Component {
    componentDidMount() {
        this.props.fetchVariant();
        this.props.fetchColumns();
    }
    render() {
        return (
            <div>
                <FramePage />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.framesPage
});

const mapDispatchToProps = {
    fetchVariant,
    fetchColumns
};

export default connect(mapStateToProps, mapDispatchToProps)(FramesPageContainer);