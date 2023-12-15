import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { List } from "./ImageGallery.styled"

export const ImageGallery = ({images}) => {
    return (
        <List className="gallery">
          {images.map (({id, webformatURL, tags, largeImageURL}) => {
            return (
              <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
            )
          })}
        </List>
)}