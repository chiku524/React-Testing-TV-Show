import React from 'react';
import { render, screen, waitFor, findByText } from '@testing-library/react';
import App from './App';
import {fetchShow as mockFetchShow} from './api/fetchShow';

jest.mock('./api/fetchShow')

const data = {
    genres: [
        'Drama',
        'Fantasy',
        'Science-Fiction'
        ],
    id: 2993,
    image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    language: 'English',
    name: 'Stranger Things',
    officialSite: 'https://www.netflix.com/title/80057281',
    premiered: '2016-07-15',
    runtime: 60,
    schedule: {
        time: '',
        days: [
          'Thursday'
          ]
      },
    status: 'Running',
    summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    type: 'Scripted',
    url: 'http://www.tvmaze.com/shows/2993/stranger-things',
    _embedded: {
        episodes: [
            {
                name: "Chapter One: The Vanishing of Will Byers",
                season: 1
            },
            {
                name: "Chapter Two: The Weirdo on Maple Street",
                season: 1
            }
        ]
    }
}

    test("Data is being fetched and rendering correctly", async () => {
        // mock the resolved value of fetchMissions
        mockFetchShow.mockResolvedValueOnce({data: data});

        const {getAllByText} = render (<App />);

        await waitFor(() => {
            const title = getAllByText(/stranger things/i);
          // make your assertion that will run _after_ the async operation finishes
          expect(title[0]).toBeInTheDocument();
        });
        
        expect(mockFetchShow).toHaveBeenCalledTimes(1);
    })