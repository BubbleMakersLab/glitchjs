import React from "react";
import Button from "@material-ui/core/Button/Button";
import {FaHandsHelping} from "react-icons/fa";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import AppContext from "../../AppContext";

export default class ChatDialog extends React.Component {

    static contextType = AppContext;

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
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
        )
    }
}
