import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { fetchImg } from "api";

export class App extends Component {
  totalImages;
  
  state = {
    images: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
  }


  async componentDidUpdate(_, prevState) { 
    const {page, query} = this.state
    
    if (prevState.page !== page || 
      prevState.query !== query) {
      return this.getImages()
    }
  } 

  getImages = async() => {
    const {query, page} = this.state;
    
    
    try {
      this.setState({ loading: true, error: null });
      const data = await fetchImg(query, page)
      this.totalImages = data.total
      

      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
      }))
      
      if (data.hits.length === 0) {
        this.setState({ error: 'Ooops! Try again!' });
      }
      
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({ error: 'We have some problems' });
      }
    } finally {
      this.setState({ loading: false });
    }
  }

  onSearch = value => {
    if( value === '' || value === this.state.query) {
      return 
    }
    this.setState({
      query: value,
      page: 1,
      images: [],
    })
    
  }

  loadMoreBtn = () => {
    
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }
  
  render() {
    
    const {images, page, loading, error} = this.state;
    const quantityPages = Math.ceil(this.totalImages / 12);
    
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar onSearch={this.onSearch}/>
        <ImageGallery images={images}/>
        {loading && <Loader />}
        {quantityPages > 1 && quantityPages !== page && !loading && (
          <Button onClick={this.loadMoreBtn} />
        )}
        {error && (
          <h2
            
            style={{
              marginTop: 30,
              textAlign: 'center',
            }}
          >
            {error}
          </h2>
        )}
      </div>
    );
  }
}