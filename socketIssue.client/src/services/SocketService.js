import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super(true)
    this
      .on('error', this.onError)
      .on('join', this.joined)
      .on('left', this.left)
  }

  joined(profile) {
    console.log('JOINED', { profile })
  }

  left(profile) {
    console.log('LEFT', { profile })
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
