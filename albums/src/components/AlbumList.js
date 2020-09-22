import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    UNSAFE_componentWillMount(){
        // fetch("https://rallycoding.herokuapp.com/api/music_albums").then(data=>console.log(data));
        // axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(response => this.setState({ albums: response.data }));
        // fetch("https://rallycoding.herokuapp.com/api/music_albums")
        //     .then(response => response.json()) // convert to json first
        //     .then(data => this.setState({ albums: data }));
        axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(response => this.setState({ albums: response.data }));
    }

    renderAlbums(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state.albums);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;