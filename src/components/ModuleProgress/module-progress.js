import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class ModuleProgress extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            progress: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            progress: !window.scrollY ? window.scrollY : ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
        })
    };

    render() {
        const { progress } = this.state
        const { classes } = this.props

        return (
            <div className={classes.container}>
                <LinearProgress variant="determinate" value={progress}
                    classes={{ colorPrimary: classes.barBackground, bar: classes.barProgress }} />
            </div>
        );
    }
}
