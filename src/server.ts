import fastify from 'fastify'

const app = fastify()

// Declara a rota
app.get('/hello', () => {
  return 'Olá, mundo!'
})

// Run server
app.listen({ port: 3333 }).then(() => {
  console.log('Server Running!')
})
