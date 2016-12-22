import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyCrnp07Wydi7ghbg--D2ooz6t98kDWDG5c';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, videos=>{
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
