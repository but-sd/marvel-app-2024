import './App.css'

import characters from './data/characters.json'
import { CharactersList } from './components/CharactersList'
import { NumberOfCharacters } from './components/NumberOfCharacters'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CharactersPage from './pages/CharactersPage'

function App() {
  return (
    <>
      {/* <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
      <br />
      <NumberOfCharacters characters={characters} /> */}
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
      <CharactersPage />
    </>
  )
}

export default App
