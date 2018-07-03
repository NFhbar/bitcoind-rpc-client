import RpcClient from '../src'
import config from './helpers/config.js'
import nockFunction from './helpers/nockFunction.js'
import errorMsg from './helpers/nocks/error.json'

describe('RpcClient', () => {
  let rpcClient

  beforeEach(() => {
    rpcClient = new RpcClient(config[0])
  })

  it('sets parameters correctly', () => {
    expect(rpcClient.get('host')).toBe(config[0].host)
    expect(rpcClient.get('port')).toBe(config[0].port)
    expect(rpcClient.get('user')).toBe(config[0].user)
    expect(rpcClient.get('pass')).toBe(config[0].pass)
  })

  it('changes parameters correctly', () => {
    rpcClient.set('host', config[1].host)
    rpcClient.set('port', config[1].port)
    rpcClient.set('user', config[1].user)
    rpcClient.set('pass', config[1].pass)
    expect(rpcClient.get('host')).toBe(config[1].host)
    expect(rpcClient.get('port')).toBe(config[1].port)
    expect(rpcClient.get('user')).toBe(config[1].user)
    expect(rpcClient.get('pass')).toBe(config[1].pass)
  })

  it('returns error message', async () => {
    nockFunction('error')
    try{
      let blockHeight = await rpcClient.cmd('getblockcount')
      done.fail(new Error('This should have failed' + blockHeight))
    } catch(err) {
      let error= errorMsg.error.message
      expect(error).toBe(err.toString())
    }
  })
})
