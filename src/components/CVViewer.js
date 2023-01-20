import React from 'react';
import '../styles/CV.scss';
import CV from './CV';

const MM_PER_16PX = 127 / 30;

class CVViewer extends React.Component {
  constructor(props) {
    super(props);
    this.cvViewer = React.createRef();
    this.cvRef = React.createRef();
  }

  updateRemSize = () => {
    const { width } = this.cvRef.current.getBoundingClientRect();
    const pixelPerMM = width / 210;
    const currentRemSize = MM_PER_16PX * pixelPerMM;

    this.cvViewer.current.style.fontSize = `${currentRemSize}px`;
  };

  render() {
    return (
      <div className="CVViewer" ref={this.cvViewer}>
        <CV data={this.props.data} ref={this.cvRef} />
      </div>
    );
  }

  componentDidMount() {
    this.updateRemSize();
    window.addEventListener('resize', this.updateRemSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRemSize);
  }
}

export default CVViewer;
