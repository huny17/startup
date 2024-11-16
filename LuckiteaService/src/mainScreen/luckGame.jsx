import React from 'react';

import { Button } from 'react-bootstrap';
import { LuckButton } from './luckButton';
import { GameEvent, GameNotifier } from './gameNotifier';
import './LuckGame.css';


export function LuckGame(props) {
    const userName = props.userName;
    const buttons = new Map();

    const [allowPlayer, setAllowPlayer] = React.useState(false);
    const [sequence, setSequence] = React.useState([]);
    const [score, setScore] = React.useState(0);
    

    async function onPressed(buttonPosition) {
      const fateNum = Math.floor(Math.random() * 10); 

        setScore((prevScore) => {

          let updatedScore = prevScore;
          if (fateNum % 2 === 0) {
            updatedScore += 5;
            <>Good Luck</>
              }
          else if (fateNum % 3 === 0) {
            updatedScore -= 5;
            <>Bad Luck</>
              }
          else {
            updatedScore += 1;
            <>normal Luck</>
              }
            return updatedScore;
            });    
        await saveScore(updatedScore)
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

        // updateMeter(newScore);
    }

    // function updateMeter(newMeter){
    //   let scores = [];
    //   const scoresText = localStorage.getItem('scores');
    //   if (scoresText) {
    //     scores = JSON.parse(scoresText);
    //   }

      // let found = false;
      // for (const [i, prevScore] of scores.entries()) {
      //   if (newMeter.score > prevScore.score) {
      //     scores.splice(i, 0, newMeter);
      //     found = true;
      //     break;
      //   }
      // }

      // if (!found) {
      //   scores.push(newMeter);
      // }

      // if (scores.length > 10) {
      //   scores.length = 10;
      // }

      // localStorage.setItem('scores', JSON.stringify(scores));
      // }

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