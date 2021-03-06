# Bidding Client

Biddin Client is a simple and very trivial angular.js application that allows you to bid on an item and observe in real
time bids of other users.

## Getting started

Clone repo,

```bash
$ git clone git@github.com:julianusti/bidding.client.git
```

Make sure that bower package manager is installed on your machine.
Run the command,

```bash
bower install
```
it will install all dependencies which application use.

Run the app,
```bash
grunt serve --force
```

Open the following link, which will guide you to specific test item:

```bash
JSON representation: http://localhost:5000/api/auction/ryrGV6
Web representation: http://localhost:9000/#/ryrGV6
```
and open a few instances in seperate tabs or windows. 

Start biding on an item.

`IMPORTANT`
As it was mentioned before, this is very simple app, just to make sure that the `server` part works as expected.
Please do not `add a bid` that is less than `highest bid`. Otherwise the client app, can crash :)

# License (MIT)

Copyright (c) 2014,

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.