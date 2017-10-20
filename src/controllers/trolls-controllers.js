const model = require('../models/trolls-model')

function getAll(req, res, next) {
  const result = model.getAll()
  res.status(200).json({ data: result })
}

function getTroll(req, res, next) {
  const id = req.params.id
  const result = model.getTroll(id)

  if (result.errors) {
    return next(result.errors)
  }

  res.status(200).json({ data: result })
}

function create(req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next(result.errors)
  }

  res.status(201).json({ data: result })
}

function update(req, res, next) {
  const id = req.params.id
  const body = req.body
  const result = model.update(id, body)

  if (result.errors) {
    return next(result.errors)
  }
  
  res.status(200).json({ data: result })
}

function del(req, res, next) {
  const id = req.params.id
  const result = model.del(id)
  console.log(result)
  if (result.errors) {
    return next(result.errors)
  }
  
  res.status(200).json({ data: result })
}

function randomTrolls(req, res, next) {
  let num = Number(req.params.number)
  const result = model.randomTrolls(num)

  if (result.errors) {
    return next(result.errors)
  }

  res.status(201).json(result)
}

module.exports = {
  getAll,
  getTroll,
  create,
  update,
  del,
  randomTrolls
}