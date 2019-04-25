import React from "react"
import { FaHandsHelping } from "react-icons/fa"

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FilledInput from '@material-ui/core/FilledInput';


class ChatDialog extends React.Component {

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    <FaHandsHelping />
                </Button>
                <Dialog
                    open={this.state.open}
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
                            style={{ margin: 8 }}
                            placeholder="Écris ton message ici."
                            value={`"Bonjour à tous, j'ai une question concernant le passage suivant : ${window.getSelection()}, merci`}
                            fullWidth
                            variant="filled"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Poster le message
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default () => <ChatDialog />