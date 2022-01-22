/* eslint-disable no-undef */
// require('dotenv').config()
// const express = require('express')
// const Note = require('./models/note')
// const cors = require('cors')
const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')


const server = http.createServer(app)


server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})




// const reqLogger = (req, res, next) => {
//   console.log('Method:', req.method)
//   console.log('Path:  ', req.path)
//   console.log('Body:  ', req.body)
//   console.log('---')
//   next()
// }

// const unknownEndpoint = (req, res) => {
//   res.status(404).send({ error: 'unknown endpoint' })
// }

// const errorHandler = (error, req, res, next) => {
//   console.error(error.message)

//   if (error.name === 'CastError') {
//     return res.status(400).send({ error: 'malformatted id' })
//   } else if (error.name === 'ValidationError') {
//     return res.status(400).json({ error: error.message })
//   } 

//   next(error)
// }





// const app = express()

// app.use(express.static('build'))
// app.use(cors())
// app.use(express.json())
// app.use(reqLogger)




// 
// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (req, res, next) => {
//   Note.find({}).then(note => {
//     if (note) {
//       res.json(note)
//     } else {
//       res.status(404).end()
//     }
//   })
//   .catch(error => next(error))
// })

// // const generateId = () => {
// //   const maxId = notes.length > 0
// //     ? Math.max(...notes.map(n => n.id))
// //     : 0
// //   return maxId + 1
// // }

// app.post('/api/notes', (req, res, next) => {
//   const body = req.body

//   const note = new Note ({
//     content: body.content,
//     important: body.important || false,
//     date: new Date()
//   })

//   note.save().then(savedNote => {
//     res.json(savedNote)
//   })
//   .catch(error => next(error))
// })

// app.get('/api/notes/:id', (req, res) => {
//   Note.findById(req.params.id).then(note => {
//     res.json(note)
//   })  
// })

// app.delete('/api/notes/:id', (req, res, next) => {
//   // eslint-disable-next-line no-unused-vars
//   Note.findByIdAndDelete(req.params.id).then(result => {
//     res.status(204).end()
//   })
//   .catch(error => next(error))
// })

// app.put('/api/notes/:id', (req, res, next) => {
//   const body = req.body

//   const note = {
//     content: body.content,
//     important: body.important,
//   }

//   Note.findByIdAndUpdate(req.params.id, note, {new: true}).then(updatedNote => {
//     res.json(updatedNote)
//   })
//   .catch(error => next(error))
// })


// app.use(unknownEndpoint)
// app.use(errorHandler)



// const PORT = process.env.PORT
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
