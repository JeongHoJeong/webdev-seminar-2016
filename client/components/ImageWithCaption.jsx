import React from 'react'
import { ConfiguredRadium, Colors } from 'util'

class ImageWithCaption extends React.Component {
  render () {
    const styles = {
      root: {
        width: '100%'
      },
      base: {
        width: '100%'
      },
      image: {
        container: {
          position: 'relative',
          backgroundColor: Colors.white,
          overflow: 'hidden',
          height: this.props.imageHeight,
        },
        img: {
          objectFit: 'contain',
          width: '100%',
          height: '100%'
        }
      },
      caption: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90px',
        backgroundColor: this.props.captionBackgroundColor,
        color: this.props.captionFontColor,
        fontSize: '32px',
        fontWeight: 700
      }
    }

    return (
      <div
        style={[styles.root, this.props.style]}
      >
        <div
          style={styles.base}
        >
          <div
            style={styles.image.container}
          >
            <img
              style={styles.image.img}
              src={this.props.src}
            />
          </div>
          <div
            style={styles.caption}
          >
            {this.props.caption}
          </div>
        </div>
      </div>
    )
  }
}

ImageWithCaption.propTypes = {
  src: React.PropTypes.string.isRequired,
  caption: React.PropTypes.string.isRequired,
  imageHeight: React.PropTypes.string,
  captionFontColor: React.PropTypes.string,
  captionBackgroundColor: React.PropTypes.string
}

ImageWithCaption.defaultProps = {
  imageHeight: '300px',
  captionFontColor: Colors.white,
  captionBackgroundColor: Colors.themeBlack
}

export default ConfiguredRadium(ImageWithCaption)
