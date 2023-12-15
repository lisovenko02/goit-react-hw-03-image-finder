import { ModalImg } from "components/ModalImg/ModalImg";
import { Component } from "react";
import { ListImg, ListItems } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends Component {
    state = { isModalOpen: false };
  
    toggleModal = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen,
      }));
    };
  
    render() {
      
      const { id, webformatURL, tags, largeImageURL } = this.props;
      const { isModalOpen } = this.state;
      
      return (
        <>
            <ListItems key={id}>
                <ListImg src={webformatURL} 
                      alt={tags} 
                      onClick={this.toggleModal}
                      loading="lazy"/>

                {isModalOpen && (
                    <ModalImg
                        largeImgURL={largeImageURL}
                        tags={tags}
                        isModalOpen={isModalOpen}
                        onClose={this.toggleModal}
                    />
                    )}
            </ListItems>
       </>
      );
    }
  }


// export const ImageGalleryItem = ({images}) => {
    
//     return (
//        <>
//         {images.map(({id, webformatURL, tags}) => (

//             <li key={id}>
//                 <img src={webformatURL} alt={tags} />

//                 {isModalOpen && (
//                     <ModalImg
//                         largeImgURL={largeImageURL}
//                         tags={tags}
//                         isOpen={isModalOpen}
//                         onClose={this.toggleModal}
//                     />
//                     )}
//             </li>
// ))}
//        </>
//     )
// }

