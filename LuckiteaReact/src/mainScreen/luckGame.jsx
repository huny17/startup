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
        // if (allowPlayer) {
        // setAllowPlayer(false);
        // await buttons.get(buttonPosition).ref.current.press();

        fateNum = Math.random();
        if (fateNum % 2 === 0) {
            saveScore(score + 5);
            }
        if (fateNum % 5 === 0) {
          saveScore(score - 5);
            }
        else {
          saveScore(score + 1);
            }
            
      // }
    }

        async function saveScore(score) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };

        GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);

        updateMeter(newScore);
    }

    function updateMeter(newMeter){
      let scores = [];
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }

      let found = false;
      for (const [i, prevScore] of scores.entries()) {
        if (newMeter.score > prevScore.score) {
          scores.splice(i, 0, newMeter);
          found = true;
          break;
        }
      }

      if (!found) {
        scores.push(newMeter);
      }

      if (scores.length > 10) {
        scores.length = 10;
      }

      localStorage.setItem('scores', JSON.stringify(scores));
      }

        buttons.set('button-left', { position: 'button-left', ref: React.useRef() });
        buttons.set('button-middle', { position: 'button-middle', ref: React.useRef() });
        buttons.set('button-right', { position: 'button-right', ref: React.useRef() });
  

    const buttonArray = Array.from(buttons, ([key, value]) => {
        return( 
        <button key={key} onClick={() => onPressed(key)}>
        <img className='picture' src="/teaCup.png" alt="teacup" />
        </button>
        );
      });

    return (
        <div className='game'>
          <div className='score center'>{sequence.length === 0 ? '--' : sequence.length - 1}</div>
        <div className='button-container'>
          <>{buttonArray}</>
        </div>
      </div>
    );
}