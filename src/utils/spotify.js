//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000';

const clientId = '2b3ccfc06e054fba9d8cd27c19278cd0';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = ()=>{
  return window.location
      .hash
      .substring(1)
      .split('&')
      .reduce((acc, item)=>{
        const [key, value] = item.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      },{})
};
