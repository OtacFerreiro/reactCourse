// CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//Data
import {wordsList} from './data/words';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: '1', name: 'start'},
  {id: '2', name: 'game'},
  {id: '3', name: 'end'}
];

function App() {
  const guessesQtd = 3;

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickerWord] = useState("");
  const [pickedCategory, setPickerCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);

  const[guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const[wrongLetters, setWrongLetters] = useState<string[]>([]);
  const[guesses, setGuesses] = useState(guessesQtd);
  const[score, setScore] = useState(50);
  
  const pickCategory = useCallback(() => {
    const categories = Object.keys(words);
    return categories[Math.floor(Math.random() * Object.keys(categories).length)]
  }, [words])

  const pickWord = () => {
    const category = pickCategory();
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  const startGame = useCallback(() => {
    clearLetterStates();

    const {word, category} = pickWord();
    let wordLetters = getWordLetters(word);
    
    setPickerWord(word);
    setPickerCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [setPickerCategory])

  const getWordLetters = (word: string) => {
    let wordLetters = word.split("")
    
    return wordLetters.map((l) => l.toLowerCase()); 
  }

  const verifyLetter = (letter: string) => {
    const normalizedLetter = letter.toLowerCase();

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) return;

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter]);
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(guesses <= 0) {
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)];

    if(guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));

      startGame();
    }
  }, [guessedLetters])

  const retry = () => {
    setScore(0);
    setGuesses(guessesQtd);

    setGameStage(stages[0].name);
  }

  return (
    <div className='App'>
      {'start' === gameStage && <StartScreen startGame={startGame} />}
      {'game' === gameStage && 
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
          />}
      {'end' === gameStage && 
        <GameOver 
          retry={retry}
          score={score} />}
    </div>
  )
}

export default App
