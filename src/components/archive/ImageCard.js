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
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / (15 + 3));
    console.log('h: ' + height + ' spans: ' + spans);
    this.setState({ spans: spans });
  }  

  render() {
    const { slug, title } = this.props.image;

    return (
      <div style ={{ gridRowEnd: `span ${this.state.spans}` }}>
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