# rpc-client

[![Build Status](https://travis-ci.org/NFhbar/rpc-client.svg?branch=master)](https://travis-ci.org/NFhbar/rpc-client)

Simple RPC client, supports promises and callbacks.

## Installation
Clone repo:
```bash
$ git clone git@github.com:NFhbar/rpc-client.git
```

```bash
$ npm install
```
## Examples

### Create client
```js
const client = new RpcClient({
  host: '127.0.0.1',
  port: 18332
})
```

You can also set the parameters individually:
```js
client.set('user', 'bitcoinrpc')
```

### Command using `cmd`

```js
client.cmd('command').then(function (result) {
  console.log(result) // {result: {...}, error: null}
})
```

### Batch (array form)

```js
client.batch([
  {method: 'getnewaddress', params: ['myaccount']},
  {method: 'getnewaddress', params: ['myaccount']}
])
.then(function (result) {
  console.log(result) // [{result: {...}, error: null}, {result: {...}, error: null}]
})
```

## License

This software is licensed under the MIT License.
