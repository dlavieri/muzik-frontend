import moxios from 'moxios';
import { storeFactory } from '../App.test';

import fetchMood from './actions/fetchMood';
import fetchMoods from './actions/fetchMoods';
import fetchPlaylist from './actions/fetchPlaylist';

describe('fetchMoods action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test('fetch moods', () => {
        const res = [{_id: 1}, {_id: 2}, {_id: 3}];
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: res,
            });
        });
        return store.dispatch(fetchMoods())
            .then(() => {
                const newState = store.getState();
                expect(newState.moods).toBe(res);
            });
    })
});

describe("fetch mood action creator", () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(()=> {
        moxios.uninstall();
    });

    test('fetch mood', () => {
        const res = {
            mood: "mood",
            songs: [{id: 1}, {id: 2}, {id: 3}],
        }
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    name: res.mood,
                    songs: res.songs
                }
            });
        });

        return store.dispatch(fetchMood())
            .then(() => {
                const newState = store.getState();
                expect(newState.songs).toBe(res.songs);
                expect(newState.currentPlaylist).toBe(res.mood);
            })
    })
});

describe('fetch playlist action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test('fetch playlist', () => {
        const res = {
            playlist: "playlist",
            songs: [{id: 1}, {id: 2}, {id: 3}],
        }
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    name: res.playlist,
                    songs: res.songs
                }
            });
        });

        return store.dispatch(fetchPlaylist())
            .then(() => {
                const newState = store.getState();
                expect(newState.currentPlaylist).toBe(res.playlist);
                expect(newState.songs).toBe(res.songs);
            })
    })
})