export default () => ({
    popover: {
        backgroundColor: "#555",
        color: "white",
        borderRadius: "15px",
        display: "flex",
        "& *": {
            color: "white"
        },
        "& > span": {
            padding: "5px 10px",
            color: "white",
            borderLeft: "1px solid white",
        },
        "& > :first-child": {
            borderLeft: "none"
        }
    }
})
