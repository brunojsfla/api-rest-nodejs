import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

// Declara a rota
app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 100)
    .select('*')

  return transaction
})

// Run server
app.listen({ port: env.PORT }).then(() => {
  console.log('Server Running!')
})
