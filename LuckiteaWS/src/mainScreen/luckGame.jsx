import React from 'react';

import { GameEvent, GameNotifier } from './gameNotifier';
import './LuckGame.css';

export function LuckGame(props) {
    const userName = props.userName;
    const buttons = new Map();
    const mistakeSound = new Audio(`/cup-fall-edit.mp3`);
    const goodSound = new Audio(`/stir-cup-edit.mp3`);
    const okSound = new Audio(`/cup-down-edit.mp3`);

    const [allowPlayer, setAllowPlayer] = React.useState(false);
    const [score, setScore] = React.useState(0);
    
    function onPressed() {
      const fateNum = Math.floor(Math.random() * 10); 

        setScore((prevScore) => {  // Good Luck
          let updatedScore = prevScore;
          if (fateNum === 6) {
            updatedScore += 5;
            goodSound.play();
          } 
          else if (fateNum === 7) { // Bad Luck
            updatedScore -= 5;
            mistakeSound.play();
            reset();
            saveScore(updatedScore);
            updatedScore = 0;
          }
          else { // normal Luck
            updatedScore += 1;
            okSound.play();
          }
          return updatedScore;
          });
      saveScore(updatedScore)  
    }

    async function reset() {
      setAllowPlayer(false);
          // Let other players know a new game has started
      GameNotifier.broadcastEvent(userName, GameEvent.Start, {});   
    }

    async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });


    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
    }

        buttons.set('button-left', { position: 'button-left', ref: React.useRef() });
        buttons.set('button-middle', { position: 'button-middle', ref: React.useRef() });
        buttons.set('button-right', { position: 'button-right', ref: React.useRef() });
  

    const buttonArray = Array.from(buttons, ([key, value]) => {
        return( 
        <button className='clicker' key={key} onClick={() => onPressed(key)}>
        <img className='picture' src="/teaCup.png" alt="teacup" />
        </button>
        );
      });

    return (
        <div className='game'>
        <div className='score'>{score}</div>
        <div className='button-container'>
          <>{buttonArray}</>
        </div>
        </div>
    );
  }