import nock from 'nock'

const nockFunction = (method) => {
  if (method === 'error') {
    nock('http://localhost:18332')
      .post('/', {'method': 'getnetworkinfo', 'params': [], 'id': '1'})
      .replyWithError('JSON-RPC: host=127.0.0.1 port=18332: Request error: connect ECONNREFUSED 127.0.0.1:18332')
  }

}

export default nockFunction
