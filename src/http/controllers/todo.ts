import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { CreateUseCase } from '../../use-cases/create'
import { DynamoTodoRepository } from '../../repositories/dynamo/todo'
import { ListUseCase } from '@/use-cases/list'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    title: z.string(),
    description: z.string(),
  })

  const { title, description } = createBodySchema.parse(request.body)

  const todoRepository = new DynamoTodoRepository()

  try {
    const createUseCase = new CreateUseCase(todoRepository)

    console.log(await createUseCase.execute({ title, description }))
  } catch (error) {
    console.log(error)
    return reply.status(500).send()
  }

  return reply.status(201).send()
}

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const todoRepository = new DynamoTodoRepository()

  try {
    const listUseCase = new ListUseCase(todoRepository)
    const todos = await listUseCase.execute()

    return reply.status(200).send({ todos, version: '0.0.1' })
  } catch (error) {
    console.log(error)
    return reply.status(500).send()
  }
}
