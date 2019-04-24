import shareThis from "share-this";

const customSharer = {
    render() {
        return "coucou"
    }
}

const customSharer2 = {
    render() {
        return "JMM"
    }
}

export default shareThis({
    selector: 'body',
    sharers: [customSharer ,customSharer2]
});
