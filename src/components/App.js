import React from 'react';
import unsplash from '../api/unsplash';
import Searchbar from './Searchbar';
import ImageList from './ImageList';

class App extends React.Component{

    state = { images: []};

    onSearchSubmit =async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: { query : term }
        });

        // .then(response => {
        //     console.log(response.data.results);
        // });
        //console.log(response.data.results);

        this.setState({ images: response.data.results});
    }

    render(){
        return(
            <div className="ui container" style={{ marginTop: '20px'}}>
                <Searchbar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;