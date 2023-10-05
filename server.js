// Import the framework and instantiate it
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world1' }
})

fastify.get('/produtos', async function handler (request, reply) {
  return { hello: 'world2' }
})

fastify.get('/produto/:id', async function handler (request, reply) {
  return { hello: 'world3' }
})

fastify.post('/produto', async function handler (request, reply) {
  return { hello: 'world4' }
})

fastify.post('/produto/:id', async function handler (request, reply) {
  return { hello: 'world5' }
})

fastify.put('/produto/:id', async function handler (request, reply) {
  return { hello: 'world6' }
})

fastify.delete('/produto/:id', async function handler (request, reply) {
  return { hello: 'world7' }
})



// Run the server!
try {
  await fastify.listen({ port: 5000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}