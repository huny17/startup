Verify you have the latest code (git pull)
Refactor, test, and/or implement a small portion of cohesive code (test, code, test)
Commit and push (git commit, git push)
Repeat

Basic writing and formatting syntax

    Headings
        # A first-level heading
        ## A second-level heading
        ### A third-level heading
        
        github
            2+ headings auto hamburger - table of contents

    Styling Text
            
        Style	                Syntax	            Keyboard shortcut	                        Example	                    

        Bold	                ** ** or __ __	Command+B (Mac) or Ctrl+B (Windows/Linux)	    **This is bold text**	   

        Italic	                * * or _ _     	Command+I (Mac) or Ctrl+I (Windows/Linux)	    _This text is italicized_	

        Strikethrough	        ~~ ~~	        None	                                        ~~This was mistaken text~~	

        Bold and nested italic	** ** and _ _	None	                                        **This text is _extremely_ important**	

        All bold and italic	    *** ***	        None                                            ***All this text is important***	

        Subscript	            <sub> </sub>	None	                                        This is a <sub>subscript</sub> text	

        Superscript	            <sup> </sup>	None	                                        This is a <sup>superscript</sup> text
        
        Quote 
            text w/ >
            indented and diff color
        
    Quoting Code
        insert backticks (`) - control + E
        EX
            Use `git status` to list all new or modified files that haven't yet been committed.
            
            git status would be in the code font and in a box
        
        fromat in own block use triple backticks
        EX
            Some basic Git commands are:
            ```
            git status
            git add
            git commit
            ```
        
    Supported Color Models
        display visualization of color in circle next to text with backticks

        EX
            The background color is `#ffffff` for light mode and `#000000` for dark mode.

        Color       Syntax          Example

        Hex         `#RRGGBB`       `#0969DA`

        RGB         `rgb(R,G,B)`    `rgb(9,105, 218)`

        HSL         `hsl(H,S,L)`    `hsl(212, 92%, 45%)`

        NO SPACES IN BACKTICKS

    Links
        wrapping link text - []
        wrapping URL - ()
        create link - control K
        EX
            This site was built using [GitHub Pages](https://pages.github.com/).

    Section Links

    Relative Links
        link and image paths in rendered files to navigate other files in repository

        [Contribution guidelines for this project](docs/CONTRIBUTING.md)

    Images
        display image adding - !
        wrap alt text in [] (short text equivalent of the info in image)
        wrap link for image in ()
        EX
            ![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)
        
        
        Context	                                                        Relative Link
        In a .md file on the same branch	                            /assets/images/electrocat.png
        
        In a .md file on another branch	                                /../main/assets/images/electrocat.png
        
        In issues, pull requests and comments of the repository	        ../blob/main/assets/images/electrocat.png?raw=true
        
        In a .md file in another repository	                            /../../../../github/docs/blob/main/assets/images/electrocat.png
        
        In issues, pull requests and comments of another repository	    ../../../github/docs/blob/main/assets/images/electrocat.png?raw=true

    Specifying the theme an image is shown to
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
            <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
            <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
        </picture>

        #gh-dark-mode-only or #gh-light-mode-only

    Lists
        Unordered list preceding text with -,*, or +
        EX
            - George Washington
            * John Adams
            + Thomas Jefferson

        Order list, precede each line with a number
        EX
            1. James Madison
            2. James Monroe
            3. John Quincy Adams
        
    Nested Lists
        1. First list item
            - First nested list item
                - Second nested list item

    Task Lists
        preface list items with hyphen and space followed []
        mark task as complete [x]
        EX
            - [x] #739
            - [ ] https://github.com/octo-org/octo-repo/issues/740
            - [ ] Add delight to the experience when all tasks are complete :tada:
        
        If a task list item description begins with a parenthesis, you'll need to escape it with \:
        EX
            - [ ] \(Optional) Open a followup issue
        
    Mentioning People and Teams
        type @ plus username or team name
        trigger notification and bring attenion to conversation
        EX
            @github/support What do you think about these updates?

    Emojis
        :EMOJICODE:, a colon followed by the name of the emoji.
        EX
            @octocat :+1: This PR looks great - it's ready to merge! :shipit:

    Paragraph
        leave blank between lines of text

    Footnotes
        bracket syntax
        EX
            Here is a simple footnote[^1].

            A footnote can also have multiple lines[^2].

            [^1]: My reference.
            [^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
            This is a second line.
        
    Alerts
        5 types:
            > [!NOTE]
            > Useful information that users should know, even when skimming content.

            > [!TIP]
            > Helpful advice for doing things better or more easily.

            > [!IMPORTANT]
            > Key information users need to know to achieve their goal.

            > [!WARNING]
            > Urgent info that needs immediate user attention to avoid problems.

            > [!CAUTION]
            > Advises about risks or negative outcomes of certain actions.   

    Hiding content with comments
        place in HTML comment
            EX
                <!-- This content will not appear in the rendered Markdown -->

    Ignoring Markdown formating

        use \ before markdown character
        EX
            Let's rename \*our-new-project\* to \*our-old-project\*.

    Disbling Markdown rendering
        When viewing a Markdown file, you can click Code at the top of the file to disable Markdown rendering and view the file's source instead.


___JAVASCRIPT WALK THROUGH________________________________________ 
---------------------------------------------------------------

Conditionals--------------
    - for loops
    - switch statements
            - need to break after ea. case
    - 

Functions-------------
    -

    EXAMPLE

        function hello(who) {
        return 'hello ' + who;
        }

        console.log(hello('world'));
        // OUTPUT: hello world

    function functions() {
    debugger;

    // inner function
    function f() {
        return 1;
    }
    console.log(f());

    // anonymous function with parameters and return value
    f = function (i) {
        return i;
    };
    console.log(f(3));

    // no return value
    f = function (i) {
        i;
    };
    console.log(f(5));

    // optional parameters
    f = function (a, b, c = 'rat') {
        return [a, b, c];
    };
    console.log(f(1));

    return arrowFunctions;
    }

    // single line with implicit return, inherits this binding
    function arrowFunctions() {
    debugger;

    const arrow = () => 1;

    const arrowWithBlock = (a) => {
        a;
    };

    const arrowWithReturn = (a) => {
        return a;
    };

    console.log(arrow(), arrowWithBlock(2), arrowWithReturn(3));

    return closures;
    }

Strings---------------------

function strings() {
  debugger;

  let s = 'Cats Dogs Rats Mice'; // string literal
  s = new String('Cats Dogs Rats Mice'); // string object

  console.log('casefold: ', s.toUpperCase(), s.toLowerCase());
  console.log('split: ', s.split(' '));
  console.log('endsWith: ', s.endsWith('Mice'));
  console.log('replace: ', s.replace('Dogs', 'Puppies'));
  console.log('slice: ', s.slice(3, 7));

  return regex;
}

Arrays-------------------
(Potentially helpful for HW)

        function arrays() {
        debugger;

        let numbers = [];
        for (let i = 1; i < 11; i++) {
            numbers.push(i);
        }
        console.log('push 10: ', numbers);
        console.log('pop: ', numbers.pop());

        console.log('numbers[1]:', numbers[1]);
        console.log('slice:', numbers.slice(2, 5));
        console.log('length:', numbers.length);

        for (let entry of numbers) {
            console.log(entry);
            if (entry == 3) break;
        }

        return arrayOperations;
        }

    Array Operations------

            function arrayOperations() {
            debugger;

            let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            console.log(
                'map',
                numbers.map((n) => n * 100)
            );
            console.log(
                'reduce',
                numbers.reduce((a, c) => a + c)
            );
            console.log(
                'forEach',
                numbers.forEach((n) => console.log(n % 2))
            );
            console.log(
                'filter',
                numbers.filter((n) => n % 2)
            ); //(5) [1,3,5,7,9]
            console.log(
                'some',
                numbers.some((n) => n > 5)
            );

            return exceptions;
            }

Objects------------------

function objects() {
  debugger;

  let obj = {
    animal: 'fish',
  };

  obj.count = 3;
  obj.location = {
    cities: ['utah', 'new york'],
    origin: 'ocean',
  };
  obj.print = function () {
    return `${this.animal} live in ${this.location.cities.join(' and ')}`;
  };

    //this = object that we're in should have animal key, use it.
    //${} value of it, evaluate it and replace with value
    //`` return as string
    //~dictionary or class


  console.log(obj);
  console.log(obj.animal);
  console.log(obj.print());

  // iterator of properties
  for (const property in obj) {
    console.log(`name:${property}, value:${obj[property]}`);
  }

  for (const value of Object.keys(obj)) {
    console.log(`value:${value}`);
  }

  return spread;
}


json--------------------------

function json() {
  debugger;

  const obj = {
    name: 'tina',
    alive: true,
    print: () => `${this.name} is ${this.alive}`,
  };

        //json: ("name":"tina","alive": true) 

  console.log('object: ', obj);

  const objText = JSON.stringify(obj);
  console.log('json: ', objText);
  console.log('rehydrate: ', JSON.parse(objText));

  return classes;
}

Classes-------------------

function classes() {
  debugger;

  // base class
  class Location {
    static defaultPlace = 'east';

    constructor(location) {
      this.location = location || Location.defaultPlace;
    }
  }

    //Capital L, Location = use default if something not passed in

    //_ ,means private but not reinforced. Not supposed to interact directly, need authoization
    //#names

  // derived class
  class Beach extends Location {
    constructor(name, location, weather = 'sunny') {
      super(location);
      this.name = name;
      this._weather = weather;
    }

    get weather() {
      return this._weather;
    }

    set weather(weather) {
      this._weather = weather;
    }
  }

  const sunsetBeach = new Beach('Sunset', 'north', 'rainy');
  sunsetBeach.weather = 'snowing';
  const beaches = [sunsetBeach, new Beach('Kailua')];

  for (let beach of beaches) {
    console.log(
      `${beach.weather} weather at ${beach.name} beach on the ${beach.location} shore`
    );
  }

  return compatibility;
}

Exceptions-------------------------
    function exceptions() {
    debugger;

    try {
        (() => {
        throw 'trouble in river city';
        })();
    } catch (error) {
        console.log('error: ' + error);
    } finally {
        console.log('finally!');
    }

    return templateLiterals;
    }

    -not a lot/for common errors
    -specifically for exceptions

Spread--------------------------------
    function spread() {
    debugger;

    // spread
    let input = [1, 2, 3];
    input = [...input, 4, 5, 6];
    console.log(input);

    let base = { a: 'rat', b: 'cat' };
    console.log({ c: 'dog', ...base, d: 'bird' });

    // rest (variadic)
    const sumAndMultiply = (multiplier, ...numbers) => {
        console.log(numbers);
        return numbers.reduce((a, n) => a + multiplier * n);
    };

    console.log(sumAndMultiply(10, ...input, 7, 8));

    return objectArrayOperations;
    }

    -pulls arrays apart
    -also objects
    - ". . ." same syntax for spreading or resting an array

Destructuring Arrays-------------
    function destructuringArrays() {
    debugger;

    let x, y, z;

    const a = [1, 2];
    x = a;
    console.log(x);

    [x] = a;
    console.log(x);

    [x, y] = a;
    console.log(x, y);

    [x, y, z] = a;
    console.log(x, y, z);

    [x, y, z = 100] = a;
    console.log(x, y, z);

    [x, , y, ...z] = [1, 2, 3, 4, 5, 6, 7];
    console.log(x, y, z);

    return destructuringParameters;
    }

___DOM_______________________________

Document---------

    function wo(msg) {
    // Interact with the DOM
    const output = document.querySelector('button');
    output.innerText = msg;
    }

    -changed start button to say waffle
    -manipulated the DOM
    -func is called "querySelector".
    -points to first button in tree and passes msg in
    -document.querySelectorAll('button') -> string of all the buttons

Document Obj Model (DOM)
-Tree structured object
-html -> body ->  (P-> (test1 & (span -> )) & P ->text2.)

<!-- Code injected by live-server -->
<script></script>
    -added because it is not actually deployed but is a reiview so VS code needs to have script to run the preview

Dom Manipulation
    fucntion displayElement(el) {
        console.log (el.tagName);
        for(const child of el.children){
            displayElement(child);
        }

    }

    -tagName = root
    -find all the children of the children recursively
    

Event Handlers

LocalStorage

JAVASCRIPT PROMISES____________________________

-browser rendering is single-threaded
    -one call at a time
-want to be able to tell it -> go work on it and coma back when done

-Everything must be Asynchronous
---------------
function demo (){
    console.log('Before timeout');

    setTimeout(() => {
     console.log('In timeout');   
    }, 5000);

    console.log('After timeout');
}
-----------------

new Promise ((resolve, reject) => resolve(true))

promise {<fulfilled:> true}

------------------
function callback (resolve, reject) {
    resolve('done');
}

const p = new Promise(callback);

p.then((resolve_resut) => console.log(resolve_result));
-------------------
function flip(){

<!-- const coinToss = -->

return new Promise((resolve, result) =>{   
    setTimeout(() => { 
    if (Math.random()  0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
        reject('fell of table');
    }

}, 3000); <!-- = 3 seconds -->
});
}

function coinToss () {
    flip()
        .then((result) => console.log(`Coin toss result: ${result}`))
        .catch((err) => console.error(`Error: ${err}`))
        .finally(()=> console.log('Toss completed'));
}

Called in

------------------


Local Storage-------------
    -stick it in right away
    -go to as a back up
    -both fail, then send error message

Pizza Code----------------

 const orderElement = document.createElement("li"); <!-- creates empty list item -->
 const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] 😋 <i>Waiting</i> ...</span>`; <!-- creates span item and puts text in list item -->
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement); 


Async/Await--------------

async function cow(){
    return new Prmise((resolve) =>{
        resolve('moo');
    })
}

console.log


async function cattleDrive() { return cow()} <!-- returns cow promise -->

async function cattleDrive() { return await cow()} <!-- returns moo promise -->

async function cattleDrive() { await cow()} <!-- returns undefined promise -->

KAHOOT REVIEW______________________________

@ import url('https://fonts.googleapis.com/css?family=Quicksand');

flex-direction: column-reverse; <!-- flips order --> swaps order that element will print
    "Hello"               "World"
    "World"    becomes    "Hello"

padding <!-- "puts space arount content of selected elements" -->

const f = y = => ++y;
coonsole.log(f(3))
    <!-- output: 4 -->

In HTML, <div>? <!-- creates a division element -->

Order of the CSS box model, starting from the outside going in?
    <!-- margin, border, padding, content -->

Following code output?
    let a = ['cow', 'rat', 'fish'];
    let b = a.filter(v => v.match(/A|f/i));
    console.log(b);
        <!-- ['rat', 'fish'] -->

Following code output?
    let a = ['cow', 'rat', 'fish'];
    let b = a.reduce((a,v) => [a,v].join(:));
    console.log(b);
        <!-- cow:rat:fish -->

Following code output?
    let a = [1,2,3];
    let e = a.map(numner = >{
        return('a' + number)
    });
    console.log(e);
        <!-- ['a1', 'a2', 'a3'] -->

Following code do?
    document.querySelector('p').addEventListener('mouseover', console.log);
        <!-- adds a mouseover event listener to *a* p element -->

HTML tag for unordered list
    <!-- <ul></ul> -->

NOT valid JavaScript
    <!-- function f(x) = {} -->
    because

NOT valid way to include JavaScript in HTML?
    <!-- <javascript>1+1</javascript> -->
    javascript tag doesn't exist as an element
        valid:
        -script
        -script src
        -div onclick

VALID JavaScript Obj
    <!-- {n:1} -->

    not:
    - n=1
    - "n"=1
    - "n"="1"

What does the DOM textContent property do?
    <!-- sets the child text for the/an element -->

Which HTML create valid Hyperlink?
    <!-- <a href = ''>x</a> -->    

Using CSS, how would you turn only BYU text blue?
    <div>other</div>
    <dive class="header">BYU</div>
        <!-- div.header {color: blue;} -->
        <!-- .header {color: blue;} -->

Which of the following VALID JSON?
    <!-- {"x":3} -->
    NOT
    -{'x':3}
    -{"x":undefined}
    -{x:3}

Following console command makes script executable?
    <!-- chmod +x deploy.sh -->
    NOT
    *ls -la deploy.sh
    *ssh deploy.sh
    *sudo deploy.sh

Following output?
    const p = new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log('taco'); <!--third -->
            resolve(true);
        }, 10000);
    });
    console.log('burger'); <!-- first -->

    P
    .then((result) => console.log('shake')) <!-- fourth -->
    .catch((e) => console.log('salad'))
    .finally(() => consle.log('noodles)) <!-- last -->

    console.log('fries); <!-- second -->
<!-- burger fries taco shake noodles -->
    NOT
    -taco burger shake salad noodles fries
    -burger fries taco shake salad noodles
    -taco burger shake salad noodles salad fries

following output?
    const a = async function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {console.log('D'); resolve(true)}, 10000);
        })
    }

    try {
        console.log('A');
        await a();
        consle.log('B');
    } catch(e) {
        console.log('C')
    }

        <!-- A D B -->

Study___________________
Link Element - connects document to external
    -common: style sheets

ID - #
Class - .

DNS = Domain Name System, internet phonebook
    -DNS lookup when website visited

Port 443 - standard secure (https)
    -web certificate necessary

Port 80 - default (HTTP)

Port 22 - SSH 

Top-level domain - ".com" ".org"

root domain - rootdomain.com, rootdomain.TLD

Subdomain  - subdomain.rootdomain.com, subdomain.rootdomain.TLD

rsh - remote shell session

ls -la - long list that includes starting . entries

chmod, set or modify permissions
pwd,  write to standard output full path name
cd, moves up on level of directory
ls, lists files
vim, editor, create or edit text file
nano, quickly edit text files from command line
mkdir, make directory
mv, move file, directory, renames
rm, removes entries for specified file
man, renfernce inf on topics (commands, subroutines, and files)
ssh, executes commands from command line string, standard input, or file
ps, check status of active processes and tech info
wget, retrieve files from internet
sudo, temporarily grant group privileged access to system resources can't in regular account



NODE.JS____________________

Modules----------------

    --alert.js--
        export function alertDisplay(msg) {
            console.log('***'+msg+'***');
        }

    --main.js--
        import {alertDisplay} from './alert.js';

        alertDisplay('called from main.js');
        console.log("modules are cool");

interpreter that lives in the browser (v8)
    -stand alone executable: <!-- node.js -->

need to download node
    NVM - Node version manager
    Node - JavaScript runtime
    NPM - Node package manager

Can run JavaScript outside browser
    Why reinvent the wheel?
        there are packages people have made that you can use

    --cout.js--
        function countdown(){

        }


    From console - $ node count.js

NPM
    -need to set up before use:
        mkdir npmtest
        cd npmtest
        npm init -y <!-- "-y" sets default instead of asking all Q.s-->
    
    -now can pull in code from other people and use it
        npm install give-me-a-joke

    -sometimes people updat code and reinstalling or 
    updating may not work the same way it did before
        -breaks code

    -also be careful with what you upload

    --joke.js--
        const giveMeAJoke = require('give-me-a-joke');

        giveMeAJoke.getRandomDadJoke((joke) => {
            console.log(joke);
        })

    -active server; hitting, running the joke, and giving it back

fetch("https://localhost:8080")

    --Hello Node.js--
        <hi>
        Hello Node.js!
        </h1>
    --index.js--
        app.listen(8080)
    
    using port 8080

    

//Debug Console in VS?

_________________________________________________
Node.js - backend stuff

NPM - Node Package Manger - import from other people's premade code

Web Frameworks--------------
    simplify common patterns
    provide common compomenets
    improve performance
    increase device coverage

React------------

JSX--------------
    comb html and javascript

    const i = 3;
    const list = (
        <ol class ='big'>
    )



Babel in Codepen------------------
    JS settings

        HTML - <div id="root">loading...</div>
        JS(babel) - ReactDOM.render(<p>Hello world</p>, document.querySelector("#root"));


App Components----------------
    -you can have components inside components

    (import React:)
        (import React from "https://cdn.skypack.dev/react";)
        (import ReactDOM from "https://cdn.skypack.dev/react-dom";)

    ---------------------------------------------
    const Hello = ({phrase}) => { //Define
        return(
            <div>
                <p>Hello {phrase}</p> //Use
            </div>
        );
    };

    ReactDOM.render(<Hello phrase = "function" />, document.querySelector("#root")); //Provide
    ---------------------------------------------

    *Destructuring* - way to pull pieces of an object/array out into independent variables
        EX
            - {food:"apples", number: 7}
            - a = {food:"apples", number: 7}
            - a.food output apples
            - a.numbers output 7
            -{food} = a 
                - pulls out value, makes object "food" that equals apples

        ---------------------------------------------
        const Hello = () => { 
            const [color, setColor] = React.useState("red"); //Define
            function changeColor(){
                setColor(color === "red" ? "green" : "red"); //Update
            }

            return(
                <div>
                    <p style={{ color: color}}>Hello</p> //Use
                    <button onClick={changeColor}>change</button>
                </div>
            );
        };

        ReactDOM.render(<Hello phrase = "function" />, document.querySelector("#root")); 
        ----------------------------------------------
            setColor(color === "red" ? "green" : "red");
                -flips between colors
                -if red turn green, if not red turn green
                -toggle
        
            color:
                - key word 
            color
                - value
            
            helps to not name the same but is common
        
        UseEffectHook

        function UseEffectHookDemo(){
            
        }














