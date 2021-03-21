import React from "react";
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    mouseMove() {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    doubleClick() {
        this.setState({
            editMode: true,
        })
    };

    changeValue = (e) => {
        const text = e.currentTarget.value;
        this.setState({
            status: text,
        })
    };

    render() {
        return <div className={s.status}>
            {!this.state.editMode &&
            <div onDoubleClick={this.doubleClick.bind(this)}>
                <span>{this.props.status || "-----"}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.mouseMove.bind(this)} value={this.state.status} onChange={this.changeValue}/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus;