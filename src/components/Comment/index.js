import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button/Button";
import {omit} from 'ramda'

class Comment extends Component {
    handleDeleteComment = () => {
        const {commentId} = this.props
        const comments = JSON.parse(localStorage.getItem("comments")) || {}

        localStorage.setItem("comments", JSON.stringify(omit([commentId],comments)))
    }

    render() {
        const {commentId, position, classes} = this.props
        const comments = JSON.parse(localStorage.getItem("comments")) || {}

        return (
            <div style={{left: position.left, top: position.top}} className={classes.comment}>
                {comments[commentId]}
                <Button onClick={() => this.handleDeleteComment }><Delete id={"glitch-js-comment-dialog-delete-button"}/></Button>
            </div>
        );
    }
}

const styles = () => ({
    comment: {
        position: "absolute",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px"
    }
})

export default withStyles(styles)(Comment);

