import { socketProvider } from '../SocketProvider.js'
import { SocketHandler } from '../utils/SocketHandler.js'

export class TestHandler2 extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket, true)
    this
      .on('SOCKET_TEST', this.testEvent)
      .on('t2:join', this.t2Join)
      .on('t2:leave', this.t2Leave)
  }

  async t2Join(){
    this.socket.join('t2')
    socketProvider.messageRoom('t2', 'joined', this.profile)
  }
  async t2Leave(){
    this.socket.leave('t2')
    socketProvider.messageRoom('t2', 'left', this.profile)
  }

  async testEvent(payload) {
    this.socket.emit('IS_TESTED', payload)
  }
}
