import React from 'react';


export function About(props){

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <p>
          Luckitea is based on the shell game. However, it is also mixed with the idea of the fortune cookie. Instead of 
          guessing which cup is hiding a marbel, Luckitea gives you the chance to pick a random "fortune". These fortunes
          are given in the form of luck.
        </p>

        <p>
          Disclaimer: This game has no effect on actual circumstances and is for coding educational practice.
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
      <footer>
        <hr />
        <span class="text-reset">Huny17</span>
        <br />
        <a href="https://github.com/huny17/startup">GitHub</a>
      </footer>  
    </main>

  );
}


