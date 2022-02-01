import React from 'react';

// const ImageCard = ({image}) => {
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  
  setSpans = () => {
    // const height = this.imageRef.current.clientHeight;
    const width = this.imageRef.current.clientWidth;
    // const spans = Math.ceil(height / 15);
    const spans = Math.ceil(width / (15 + 3));
    console.log('w: ' + width + ' spans: ' + spans);
    this.setState({ spans: spans });
  }  

  render() {
    const { slug } = this.props.image; //, title

    return (
      // <div style ={{ gridRowEnd: `span ${this.state.spans}` }}>
      <div style ={{ gridColumnEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt="{title}"
          src={`http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/${slug}-tn.jpg`}
          />
      </div>
    )
  }
}

export default ImageCard;