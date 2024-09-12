# startup

## Cups of Fortune

## Specification Deliverable

### Elevator Pitch

Are you wanting to test your odds? Mising carnival games? Or just bored and looking for a new game? Cups of Chance is a simple game that will cure all three ailments. Once logged in a member will be given the chance to pick a cup and see what fortune they get. Once a cup is chosen a fortune will be revealed. This fortune can range from Good Luck, Mediocre Luck, to Bad Luck. Which doens't change much.

...unless you believe in superstitions?

### Design

### Key Features
+ Login Screen to keep track of Luck Meters
+ Three Cups
+ Luck Meter

### Technologies
+ HTML - Uses correct HTML structure for application. Two HTML pages. One for login and one for voting. Hyperlinks to choice artifact.

+ CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.

+ JavaScript - Provides login, choice display, applying votes, display other users votes, backend endpoint calls.

+ React - Single page application with views componentized and reactive to user's actions.

+ Service - Backend service with endpoints for:
  - Account Info
        - Username & Password
        - Accessing Lucky Meter
        - Saving updated Luck Points

+ DB/Login - Store users, choices, and votes in database. Register and login users. Credentials securely stored in database. Can't vote unless authenticated.

+ WebSocket - As each user votes, their votes are broadcast to all other users.

## HTML Deliveraable
## CSS Deliverable
## React Delverable
## Service Deliverable
## DB/Login Deliverble

Luck Meter, keeps track of user's luck

## WebSocket Deliverable

Startup BYU CS260
[Note Paper](docs/notes.md)
