import axios from 'axios';

const KEY = 'AIzaSyCPaZjLc3F7W6Xuhd1_4I1O_-JIiakovQc';
 

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    maxResults: 5,
   key : KEY
  }
});
 