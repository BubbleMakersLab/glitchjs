import QwantShare from "../QwantShare";
import RaiseYoHand from "../RaiseYoHand";
import TakeNote from "../TakeNote";
import AskSlack from "../AskSlack";
import Popover from "react-text-selection-popover";
import React from "react";

export default ({classes}) =>
    <Popover className={classes.popover}>
        <QwantShare/>
        <RaiseYoHand/>
        <TakeNote/>
        <AskSlack/>
    </Popover>
