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

