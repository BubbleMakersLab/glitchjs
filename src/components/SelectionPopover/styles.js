export default () => ({
    popover: {
        backgroundColor: "#333",
        color: "white",
        borderRadius: "0.25em",
        display: "flex",
        userSelect: "none",
        pointerEvents: "auto !important",
        "& *": {
            color: "white"
        },
        "& > span": {
            padding: "5px 10px",
            color: "white",
            borderLeft: "1px solid white",
            cursor: "pointer",
        },
        "& > :first-child": {
            borderLeft: "none"
        }
    }
})
