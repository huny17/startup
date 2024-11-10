import React from 'react';

import { Players } from './players';
import { LuckGame } from './luckGame';

export function MainScreen(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <LuckGame userName={props.userName} />
    </main>
  );
}

