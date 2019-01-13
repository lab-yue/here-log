# Here

nice logger

## Install

`yarn add @faya/here`

or 

`npm install @faya/here`

## Screen Shot

![](./img/screenshot.png)

## Usage

### Basic

```js
import here from '@faya/here';

here.done("DONE");
//   xxxx-xx-xx xx:xx:xx --- ✨  DONE
here.ok("OK");
//   xxxx-xx-xx xx:xx:xx --- ✅  OK

here.error("FAILED");
//   xxxx-xx-xx xx:xx:xx --- ❌  FAILED

```

### Create custom logger

```js
const partyPopper = here.createLogger("🎉");

partyPopper("Eureka!");
//   xxxx-xx-xx xx:xx:xx --- 🎉  Eureka!
```
