import React from "react";
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserName extends React.Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.user.find((user)=>user.id===this.props.userId);
        if(!user) {
            return null;
        }
        return (
            <div className="extra content">
                <div className="right floated author">
                    <img className="ui avatar image" src="/images/avatar/small/matt.jpg"></img> {user.name}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {user: state.user};
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(UserName);