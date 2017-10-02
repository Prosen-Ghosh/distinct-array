# distinct-array
JavaScript Package for Creating an array without duplicates.


![npm](https://img.shields.io/npm/v/distinct-array.svg) ![license](https://img.shields.io/npm/l/distinct-array.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/distinct-array.svg)


![nodei.co](https://nodei.co/npm/distinct-array.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/distinct-array.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/distinct-array.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/distinct-array.svg)

## Features


## `npm` Install

`npm install --save distinct-array`

## Script Tag

#### For Development

```js
<script src="https://rawgit.com/Prosen-Ghosh/distinct-array/master/distinct.js"></script>
```
#### For Production

```js
<script src="https://cdn.rawgit.com/Prosen-Ghosh/distinct-array/14938117/distinct.js"></script>
```

## Usage

```js

var distinct = require('distinct-array');

distinct([1,1,1,8,2,2,2,3,5,4,])
//=> [ 1, 8, 2, 3, 5, 4 ]

distinct(["foo","bar","baz","baz","foo"]);
//=> [ 'foo', 'bar', 'baz' ]

distinct();
//=> []

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT**
