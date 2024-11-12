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

    async function onPressed(buttonPosition) {
        if (allowPlayer) {
        setAllowPlayer(false);
        await buttons.get(buttonPosition).ref.current.press();

        fateNum = Math.random();
        if (fateNum % 2 === 0) {
            saveScore(int(userName.score) + 5);
            }
        if (Math.abs(fateNum % 2)=== 1) {
            saveScore(int(userName.score) + 1);
            }

        else {
            saveScore(int(userName.score) - 5);
        }
      }
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
        buttons.set('button-middle', { position: 'button-right', ref: React.useRef() });
        buttons.set('button-right', { position: 'button-middle', ref: React.useRef() });
  

    const buttonArray = Array.from(buttons, ([key, value]) => {
        return <LuckButton key={key} ref={value.ref} position={key} onPressed={() => onPressed(key)}></LuckButton>;
    });

    return (
        <div className='game'>
        <div className='button-container'>
          <>{buttonArray}</>
          <div className='controls center'>
            <div className='score center'>{sequence.length === 0 ? '--' : sequence.length - 1}</div>
          </div>
        </div>
      </div>
    );
}