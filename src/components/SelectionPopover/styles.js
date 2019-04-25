export default () => ({
    popover: {
        maxWidth: "200px",
        backgroundColor: "#333",
        color: "white",
        borderRadius: "0.25em",
        userSelect: "none",
        pointerEvents: "auto !important",
        height: "auto"
    },
    popoverButton: {
        display: "flex",
        "& *": {
            color: "white"
        },
        "& > span": {
            padding: "5px 10px",
            color: "white",
            borderRight: "1px solid white",
            cursor: "pointer",
        },
        "& > :last-child": {
            borderLeft: "none"
        }
    },
    commentInput: {
        backgroundColor: "white",
        border: "1px solid #333",
        width: "198px"
    },
    commentInputContainer: {
        display: "flex",
        flexDirection: "column"
    },
    closeCross: {
        marginLeft: "29px",
        marginRight: "5px",
        borderRight: "none !important",
        padding: "3px 5px !important"
    }
})
