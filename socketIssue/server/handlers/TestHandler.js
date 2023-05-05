import { socketProvider } from '../SocketProvider.js'
import { SocketHandler } from '../utils/SocketHandler'

export class TestHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket, true)
    this
      .on('SOCKET_TEST', this.testEvent)
      .on('t1:join', this.t1Join)
      .on('t1:leave', this.t1Leave)
  }

  async t1Join(){
    this.socket.join('t1')
    socketProvider.messageRoom('t1', 'joined', this.profile)
  }
  async t1Leave(){
    this.socket.leave('t1')
    socketProvider.messageRoom('t1', 'left', this.profile)
  }

  async testEvent(payload) {
    this.socket.emit('IS_TESTED', payload)
  }
}
