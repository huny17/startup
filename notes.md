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