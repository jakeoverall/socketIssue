import { socketProvider } from '../SocketProvider.js'
import { SocketHandler } from '../utils/SocketHandler.js'

export class LabHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket, true)
    this
      .on('lab:join', this.labJoin)
      .on('lab:leave', this.labLeave)
  }

  async labJoin(){
    this.socket.join('lab')
    socketProvider.messageRoom('lab', 'joined', this.profile)
  }
  async labLeave(){
    this.socket.leave('lab')
    socketProvider.messageRoom('lab', 'left', this.profile)
  }

}
