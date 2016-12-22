import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCrnp07Wydi7ghbg--D2ooz6t98kDWDG5c';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term}, videos=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term=>{this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
            onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
            videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
