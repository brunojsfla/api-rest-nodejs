import { app } from './app'
import { env } from './env'

// Run server
app.listen({ port: env.PORT }).then(() => {
  console.log('Server Running!')
})
