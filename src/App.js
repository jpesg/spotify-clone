import React from 'react';
import './App.css';
import Login from "./components/login";
import Player from "./components/player";
import {getTokenFromUrl} from "./utils/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from "./context/data.layer";
//3.06.33
//3.56.16
const spotify = new SpotifyWebApi();

function App() {

    const [{user, token}, dispatch] = useDataLayerValue();

    React.useEffect(() => {
        const hash = getTokenFromUrl();
        //clean url
        window.location.hash = '';
        const _token = hash.access_token;
        if (_token) {
            dispatch({type: 'SET_TOKEN', token: _token});
            spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                dispatch({type: 'SET_USER', user})
            });

            spotify.getUserPlaylists().then(playlists => {
                dispatch({type: 'SET_PLAYLISTS', playlists})
            });

            spotify.getPlaylist('id_from_url')
                .then(r => dispatch({type: 'SET_DISCOVER_WEEKLY', discover_weekly: r}))
        }

    }, [dispatch]);

    return (
        <div className="App">
            {
                token ? <Player spotify={spotify}/> : <Login/>
            }
        </div>
    );
}

export default App;
