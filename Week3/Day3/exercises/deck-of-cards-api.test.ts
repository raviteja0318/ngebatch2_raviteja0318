import axios from 'axios'

jest.mock('axios')

import {
  shuffleDeck,
  drawCards,
  remainingCards,
} from './deck-of-cards-api'

// We need to tell our unit tests that 'axios.get' has been mocked
// This tells typescript that we have extra mocking functions available on the mock
const mockedGet = axios.get as jest.Mock

describe('when using the deck of cards API', () => {
  describe('when using shuffleDeck', () => {
    test('it will return a new deck ID', async () => {
      // Arrange
      const myServer = 'www.myserver.com/'
      // See https://deckofcardsapi.com/#shuffle "Shuffle the Cards" section
      const dummyApiResponse = {
        success: true,
        deck_id: 'kdz8z78i67vt',
        shuffled: true,
        remaining: 52
      }
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)

      // Act + Assert
      expect(await shuffleDeck(myServer)).toEqual('kdz8z78i67vt')

      // This could be in a separate test
      expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/new/shuffle/?deck_count=1`
      )
    })
  })

  describe('when using drawCards', () => {
    test('todo', async () => {
      // todo write a test for "drawCards"
      // Arrange
      const myServer = 'www.myserver.com/'
      const deckID = 'kdz8z78i67vt'
      const number = 2;
      // See https://deckofcardsapi.com/#draw-card "Draw a Card" section
      const dummyApiResponse = {
        "success": true, 
        "deck_id": "kdz8z78i67vt", 
        "cards": [
          {
            "code": "6H", 
            "image": "https://deckofcardsapi.com/static/img/6H.png", 
            "images": {
                          "svg": "https://deckofcardsapi.com/static/img/6H.svg", 
                          "png": "https://deckofcardsapi.com/static/img/6H.png"
                      }, 
            "value": "6", 
            "suit": "HEARTS"
          }, 
          {
            "code": "5S", 
            "image": "https://deckofcardsapi.com/static/img/5S.png", 
            "images": {
                          "svg": "https://deckofcardsapi.com/static/img/5S.svg", 
                          "png": "https://deckofcardsapi.com/static/img/5S.png"
                      }, 
            "value": "5", 
            "suit": "SPADES"
          }
        ], 
        "remaining": 50
      }
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)

      // Act + Assert
      const result = await drawCards(myServer, deckID, number)
      expect(result).toEqual(dummyApiResponse['cards'])

      // This could be in a separate test
      expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/${deckID}/draw/?count=${number}`
      )
    })
  })

  describe('when using remainingCards', () => {
    test('todo', async () => {
      // todo write a test for "remainingCards"
      
      // Arrange
      const myServer = 'www.myserver.com/'
      const deckID= 'kdz8z78i67vt'
      // See https://deckofcardsapi.com/#reshuffle "Reshuffle the Cards" section
      const dummyApiResponse = {
        success: true,
        deck_id: 'kdz8z78i67vt',
        shuffled: true,
        remaining: 50
      }
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)

      // Act + Assert
      expect(await remainingCards(myServer,deckID)).toEqual(50)

      // This could be in a separate test
      expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/${deckID}/shuffle/?remaining=true`
      )
    })
  })
})
