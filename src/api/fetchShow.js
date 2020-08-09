import React from 'react';
import axios from 'axios';

export const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(response => {console.log(response.data); return response.data}) // or res.data, however you want to set that up
        .catch(error => console.log(error.message))
  }