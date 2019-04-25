import QwantShare from "../QwantShare";
import RaiseYoHand from "../RaiseYoHand";
import TakeNote from "../TakeNote";
import AskSlack from "../AskSlack";
import Popover from "react-text-selection-popover";
import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import AppContext from "../../AppContext";


export default class SelectionPopover extends React.Component {
    state = {
        commentValue: "",
    }
    static contextType = AppContext;

    handleTextSelect = () => {
        this.context.setIsPopoverOpen(true)
    }

    handleTextUnSelect = () => {
        if (!this.context.isCommentInputOpen) {
            this.context.closePopover()
        }
    }

    handleInputChange = (e) => {
        this.setState({
            commentValue: e.target.value
        })
    }

    handleOpenCommentInput = () => {
        this.context.setIsCommentInputOpen(!this.context.isCommentInputOpen)
    }

    handleCloseCommentInput = () => {
        this.setState({isOpen: false})
        this.context.closePopover()
    }

    handleAddComment = () => {
        const {commentValue} = this.state

        this.context.setIsPopoverOpen(false)
        this.context.setIsCommentInputOpen(false)
        let comments = JSON.parse(localStorage.getItem("comments")) || {}

        comments[this.context.currentSelectedStringId] = commentValue

        localStorage.setItem("comments", JSON.stringify(comments))
    }

    render() {
        const {classes} = this.props
        const {commentValue} = this.state
        const {isCommentInputOpen, isPopoverOpen} = this.context

        return <Popover className={classes.popover} isOpen={isPopoverOpen} onTextSelect={this.handleTextSelect}
                        onTextUnselect={this.handleTextUnSelect}>
            <div className={classes.popoverButton}>
                <QwantShare/>
                <RaiseYoHand/>
                <TakeNote onClick={this.handleOpenCommentInput}/>
                <AskSlack/>
                {isCommentInputOpen &&
                <span className={classes.closeCross} onClick={this.handleCloseCommentInput}>x</span>}
            </div>
            {isCommentInputOpen &&
            <div className={classes.commentInputContainer}>
                <TextField placeholder={"Entrez un commentaire"}
                           className={classes.commentInput}
                           multiline
                           variant="outlined"
                           rowsMax="4"
                           value={commentValue}
                           onChange={this.handleInputChange}
                />
                <Button color={"primary"} variant="contained" onClick={this.handleAddComment}>Ok</Button>
            </div>}
        </Popover>
    }
}
