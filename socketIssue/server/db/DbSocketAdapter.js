import { Emitter } from "@socket.io/mongo-emitter"
import { createAdapter } from "@socket.io/mongo-adapter"
import { MongoClient } from "mongodb"

export async function registerAdapters() {
  const mongoClient = new MongoClient(process.env.SOCKET_STRING);
  await mongoClient.connect()
  const collection = mongoClient.db().collection('socket.io-adapter-events')
  // SCHEMA
  await collection.createIndex(
    { createdAt: 1 },
    { expireAfterSeconds: 3600, background: true }
  )
  const adapter = createAdapter(collection, { addCreatedAtField: true })
  const emitter = new Emitter(collection)
  return { adapter, emitter }
}
