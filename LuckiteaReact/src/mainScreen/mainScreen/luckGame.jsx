import React from 'react';

import { Button } from 'react-bootstrap';
import { LuckButton } from './LuckButton';
import { delay } from './delay';
import { GameEvent, GameNotifier } from './gameNotifier';
import './LuckGame.css';


export function LuckGame(props) {
    const user = props.user;
    const buttons = new Map();
    const info = { name: userName, score: score, date: date };

    const [allowPlayer, setAllowPlayer] = React.useState(false);

    async function onPressed(buttonPosition) {
        if (allowPlayer) {
        setAllowPlayer(false);
        await buttons.get(buttonPosition).ref.current.press();

        fateNum = Math.random();
        if (fateNum % 2 === 0) {
            saveScore(int(info.score) + 5);
            }
        if (Math.abs(fateNum % 2)=== 1) {
            saveScore(int(info.score) + 1);
            }

        else {
            saveScore(int(info.score) - 5);
        }
      }
    }

        async function saveScore(score) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };

        GameNotifier.broadcastEvent(user, GameEvent.End, newScore);

        updateMeter(newScore);
    }

    function updateMeter(newMeter){


        buttons.set('button-left', { position: 'button-left', ref: React.useRef() });
        buttons.set('button-right', { position: 'button-right', ref: React.useRef() });
        buttons.set('button-middle', { position: 'button-middle', ref: React.useRef() });
        }

    const buttonArray = Array.from(buttons, ([key, value]) => {
        return <LuckButton key={key} ref={value.ref} position={key} onPressed={() => onPressed(key)}></LuckButton>;
    });

    return (
        <div className='game'>
        <div className='button-container'>
          <>{buttonArray}</>
          <div className='controls center'>
            <div className='game-name'>
              Luckitea<sup>&reg;</sup>
            </div>
            <div className='score center'>{sequence.length === 0 ? '--' : sequence.length - 1}</div>
            <Button variant='primary' onClick={() => reset()}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    );
}