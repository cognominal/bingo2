# AST TS Bingo

## What is AST TS Bingo

The game is to write [typescript](https://www.typescriptlang.org/) programs
that generate an AST that scores the most according to the rules stated below. An
abstract typescript syntax tree is a data structure that represents the source
code of a typescript program.

The left panel contains your program. The right panel contains generated AST
tree and a heat map. The heat map contains the AST symbols and their value.

To submit an entry to the hall of fame, you need to log in with your github
account. You can link to
[gists](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists)
that explain your entry.



# the rules, briefly

To enter the hall of fame, submit valid programs that hit the maximum number of
high value symbols in the typescript
[AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree). Only the first
occurence of any given symbol in the AST tree is counted.

Beside the fun of participating, there is no price involved expect bragging
rights. The rule of AST TS Bingo are designed to popularize the concept of AST
and the use of the less common features of typescript as reflected by the
generated AST.

## Needed : a github account, vcode and the AST TS Bingo extension

Note : I have problem with updating trees in the extension so I will
make it web only for the time being.

To participate, you need to log in with your github account and submit a valid
entry using vscode with the AST TS Bingo extension installed with the
bingo mode set. The [vcode](https://code.visualstudio.com/) editor can ran in
the [browser](https://vscode.dev/) or be installed in the desktop/laptop.

A valid entry is a typescript file that compiles without error with the
defaults of the typescript compiler. Each user can submit a maximum of 10
accepted entries per hour and 30 per day.

## Categories and alls of fame

There are three categories, for entries with less than 50 counted chars, less
than 200, less than 1000.

For each user, only the 5 top best entries at a given time are eligible to
compete. Also there is only a single best entry to enter the hall of fame for a
given user, category and timespan. So no single user can monopolize the hit
parade. There is also a global hall of fame where points are
given for each day in any category and timespan for the 10 best entries. 10 for
the best, 9 for the second and so on.

## Rating

The number of counted characters are the non-whitespace characters.
An entry is rated by the sum of the hit symbols values, than divided by the number of
counted characters. A symbol value is proportional to the inverse number of
hits in the memorized entries. You can't submit an entry that hits the same symbols
as a previous entry but with a lower rating. Nevertheless you are encouraged to improve
on existing entries. As an intended result, the symbols with maximum values will change
overtime.

The symbols that are counted belong to the [SyntaxKind](https://github.com/microsoft/TypeScript/blob/4dd1e2f8446fd279e26034fc207c317c6a3da986/src/compiler/types.ts#L40), [NodeFlags](https://github.com/microsoft/TypeScript/blob/4dd1e2f8446fd279e26034fc207c317c6a3da986/src/compiler/types.ts#L784) and [ModifierFlags](https://github.com/microsoft/TypeScript/blob/4dd1e2f8446fd279e26034fc207c317c6a3da986/src/compiler/types.ts#L852) enums.
They are displayed in the AST tree.
