import React from "react";
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    mouseMove() {
        this.setState({
            editMode: false,
        })
    };

    doubleClick() {
        this.setState({
            editMode: true,
        })
    };

    render() {
        return <div className={s.status}>
            {!this.state.editMode &&
            <div onDoubleClick={this.doubleClick.bind(this)}>
                <span>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.mouseMove.bind(this)} value={this.props.status}/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus;