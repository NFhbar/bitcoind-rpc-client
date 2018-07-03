/**
 * @class BatchInterface
 */
export default class BatchInterface {
  /**
   * @constructor
   * @param {RpcClient} daemon
   */
  constructor (daemon) {

    this._daemon = daemon

    this._isCalled = false
    this._batch = []
  }

  /**
   */
  _isCalledCheck () {
    if (this._isCalled) {
      throw new Error('batch was already called!')
    }
  }

  /**
   * @param {string} method
   * @return {BatchInterface}
   */
  cmd (method, ...params) {
    this._isCalledCheck()
    this._batch.push({method: method, params: params})
    return this
  }

  /**
   * @return {BatchInterface}
   */
  clear () {
    this._isCalledCheck()
    this._batch = []
    return this
  }

  /**
   * @param {function} [callback]
   * @return {Promise.<Array.<{error: ?{code: number, message: string}, result: *}>>}
   */
  call (callback) {
    this._isCalledCheck()
    this._isCalled = true
    return this._daemon.batch(this._batch, callback)
  }
}
