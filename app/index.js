import React from 'react';
import ReactDOM from 'react-dom';

class ImageSearcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };

    this.onSearch = this.onSearch.bind(this);
  }

  fetchImages(searchString) {
    fetch('http://localhost:8081/search/' + searchString)
      .then((resp) => resp.json())
      .then(resp => {
        const images = resp.map(obj => obj);
        this.setState({ images });
      });
  }

  render() {
    return (
      <div>
        <h1>Imgur Top 100 Pictures</h1>
        <form className="dateform" onSubmit={this.onSearch}>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" name="searchValue" />
        </form>
        <div>
          {this.state.images.map(image =>
          <div key={image.id}>
            {(image.images ? 
              (<a href={image.images[0].link}><img width="300" src={image.images[0].link} alt={image.title}></img><br />{image.title}</a>) :
              (<a href={image.link}><img width="300" src={image.link} alt={image.title}></img><br />{image.title}</a>) 
            )}
          </div>
          )}

        </div>
        <ul>
        </ul>
      </div>
    );
  }

  onSearch(event) {
    event.preventDefault();
    this.fetchImages(event.target.searchValue.value);
  }

}

ReactDOM.render(
  <ImageSearcher />,
  document.getElementById('root')
);