import {
    fetchInitialData,
    blockReport,
    resolveReport,
    RECIEVE_INITIAL_DATA,
    BLOCK_REPORT,
    RESOLVE_REPORT
} from '../action/index';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Home Actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        const expectedActions = [
            RECIEVE_INITIAL_DATA
        ]

        fetchMock.get('/fetch-reports-uri', { response: 200 })

        const store = mockStore({})

        return store.dispatch(fetchInitialData()).then(() => {
            const actualActions = store.getActions().map(action => action.type)
            expect(actualActions).toEqual(expectedActions)
        })
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        const expectedActions = [
            BLOCK_REPORT
        ]

        fetchMock.get('/fetch-reports-uri', { response: 200 })
        const store = mockStore({})
        return store.dispatch(blockReport("0103e005-b762-485f-8f7e-722019d4f302")).then(() => {
            const actualActions = store.getActions().map(action => action.type)
            expect(actualActions).toEqual(expectedActions)
        })
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        const expectedActions = [
            RESOLVE_REPORT
        ]

        fetchMock.get('/fetch-reports-uri', { response: 200 })
        const store = mockStore({})
        return store.dispatch(resolveReport("0103e005-b762-485f-8f7e-722019d4f302")).then(() => {
            const actualActions = store.getActions().map(action => action.type)
            expect(actualActions).toEqual(expectedActions)
        })
    })
});