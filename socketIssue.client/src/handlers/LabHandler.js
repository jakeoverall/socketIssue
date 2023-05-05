import { socketService } from "../services/SocketService.js"

export class LabHandler {
  static join() {
    socketService.emit('lab:join')
  }

  static leave() {
    socketService.emit('lab:leave')
  }
}
