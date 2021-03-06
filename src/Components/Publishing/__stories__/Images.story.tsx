import { storiesOf } from "@storybook/react"
import React from "react"
import { Artwork } from "../Sections/Artwork"
import { FullScreenProvider } from "../Sections/FullscreenViewer/FullScreenProvider"
import { FullscreenViewer } from "../Sections/FullscreenViewer/FullscreenViewer"
import { Image } from "../Sections/Image"
import { ImageCollection } from "../Sections/ImageCollection"

import { Artworks, Images, ImagesNarrow } from "../Fixtures/Components"

class ImageCollectionDemo extends React.Component<any, any> {
  render() {
    return (
      <FullScreenProvider>
        {({ openViewer, closeViewer, slideIndex, viewerIsOpen }) => {
          return (
            <div>
              <div style={{ width: "100%" }}>
                <ImageCollection
                  images={Images}
                  targetHeight={400}
                  gutter={10}
                />
              </div>
              <div style={{ width: 780 }}>
                <ImageCollection
                  images={ImagesNarrow}
                  targetHeight={400}
                  gutter={10}
                />
              </div>
              <FullscreenViewer
                onClose={closeViewer}
                show={viewerIsOpen}
                slideIndex={slideIndex}
                images={Images}
              />
            </div>
          )
        }}
      </FullScreenProvider>
    )
  }
}

storiesOf("Publishing/Images", module)
  .add("Artwork", () => {
    return (
      <div>
        <div style={{ width: 800 }}>
          <Artwork artwork={Artworks[0]} />
        </div>
        <hr />
        <p>Multiple Artists: </p>
        <div style={{ width: 800 }}>
          <Artwork artwork={Artworks[1]} />
        </div>
        <hr />
        <p>Unlinked: </p>
        <div style={{ width: 800 }}>
          <Artwork linked={false} artwork={Artworks[1]} />
        </div>
        <hr />
        <p>Missing info: </p>
        <div style={{ width: 800 }}>
          <Artwork artwork={Artworks[2]} />
        </div>
        <hr />
        <p>Long info: </p>
        <div style={{ width: 800 }}>
          <Artwork artwork={Artworks[3]} />
        </div>
        <hr />
        <p>Small: </p>
        <div style={{ width: 400 }}>
          <Artwork artwork={Artworks[1]} />
        </div>
        <hr />
        <p>Fillwidth: </p>
        <div style={{ width: "100%" }}>
          <Artwork artwork={Artworks[1]} sectionLayout="fillwidth" />
        </div>
        <hr />
        <p>Classic: </p>
        <div style={{ width: 800 }}>
          <Artwork artwork={Artworks[0]} layout="classic" />
        </div>
      </div>
    )
  })
  .add("Image", () => {
    return (
      <div>
        <p>Standard:</p>
        <div style={{ width: 400 }}>
          <Image image={Images[1]} />
        </div>
        <p>Long Caption:</p>
        <div style={{ width: 400 }}>
          <Image image={Images[2]} />
        </div>
        <p>With Child as Caption:</p>
        <div style={{ width: 400 }}>
          <Image image={Images[2]}>
            <div>
              <p>A React child as caption.</p>
            </div>
          </Image>
        </div>
        <p>Fillwidth:</p>
        <div style={{ width: "100%" }}>
          <Image image={Images[2]} sectionLayout="fillwidth" />
        </div>
        <p>Classic:</p>
        <div style={{ width: 400 }}>
          <Image layout="classic" image={Images[2]} />
        </div>
      </div>
    )
  })
  .add("Image Collection", () => {
    return <ImageCollectionDemo />
  })
