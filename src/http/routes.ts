import { FastifyInstance } from 'fastify'
import { create, list } from './controllers/todo'

export async function appRoutes(app: FastifyInstance) {
  app.post('/todos', create)
  app.get('/todos', list)
}
