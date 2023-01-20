import React from 'react';
import '../styles/CV.scss';

const MM_PER_16PX = 127 / 30;

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.cv = React.createRef();
  }

  updateRemSize = () => {
    const { width } = this.cv.current.getBoundingClientRect();
    const pixelPerMM = width / 210;
    const currentRemSize = MM_PER_16PX * pixelPerMM;

    this.cv.current.style.fontSize = `${currentRemSize}px`;
  };

  render() {
    return <div className="cv" ref={this.cv}></div>;
  }

  componentDidMount() {
    this.updateRemSize();
    window.addEventListener('resize', this.updateRemSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRemSize);
  }
}

export default CV;
