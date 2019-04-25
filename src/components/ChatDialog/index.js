import React from "react"
import Button from "@material-ui/core/Button/Button"
import Dialog from "@material-ui/core/Dialog/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText"
import FilledInput from "@material-ui/core/FilledInput/FilledInput"
import DialogActions from "@material-ui/core/DialogActions/DialogActions"

import AppContext from "../../AppContext"

export default class ChatDialog extends React.Component {

    static contextType = AppContext

    state = {
        inputValue: `Bonjour à tous, j'ai une question concernant le passage suivant : ${this.context.currentSelectedString}, merci`
    }

    handleClose = () => {
        this.context.setIsDialogOpen(false)
    }

    handlePost = () => {
        this.textArea.select()
        document.execCommand('copy')
        window.getSelection().empty()
        this.context.fireSnackBar(true)
        setTimeout(
            function () {
                window.open("slack://channel?team=TGKG907GE&id=CGJ28PMM2", "_blank")
            }.bind(this), 3000
        );
        var url = `https://slack.com/api/chat.postMessage?token=${process.env.REACT_APP_ACCESS_TOKEN}&channel=CGJ28PMM2&as_user=true&text=${this.textArea.value}`
        fetch(url)
    }

    render() {
        const { inputValue } = this.state

        return (
            <Dialog
                open={this.context.isDialogOpen}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Demander de l'aide sur Slack</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Le prof ou d'autres étudiants te répondront directement.
                    </DialogContentText>
                    <FilledInput
                        id="filled-full-width"
                        label="Label"
                        style={{margin: 8}}
                        placeholder="Écris ton message ici."
                        onChange={(e) => this.setState({ inputValue: e.target.value })}
                        value={inputValue}
                        fullWidth
                        variant="filled"
                        inputRef={(textarea) => this.textArea = textarea}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handlePost} color="primary" autoFocus>
                        Poster le message
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
