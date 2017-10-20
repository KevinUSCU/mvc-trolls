const faker = require('faker')
const uuid = require('uuid/v4')

const trolls = []

function randomTrolls(num) {
  if (!num || num < 1) {
    let status = 400
    let message = `We can't build trolls if we don't know how many!`
    return { errors: { status, message } }
  }
  if (num > 100) {
    let status = 400
    let message = `Whoa! That's just too many trolls to wrangle! How about we keep it to 100 or less?`
    return { errors: { status, message }}
  }
  const newTrolls = []
  for (let i = 1; i <= num; i++) {
    let troll = {
      id: uuid(),
      name: faker.name.firstName(),
      type: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} Troll`,
      color: faker.commerce.color(),
      numBridges: Math.floor(Math.random() * 10)
    }
    trolls.push(troll)
    newTrolls.push(troll)
  }
  return newTrolls
}

function getAll() {
  return trolls
}

function getTroll(id) {
  const troll = trolls.find(troll => troll.id === id)
  
  let response
  if (!troll) {
    let status = 404
    let message = `Sneaky trolls... could not find a troll with id of ${id}.`
    response = { errors: { status, message } }
  } else {
    response = troll
  }

  return response
}

function create(body) {
  const { name, type, color, numBridges } = body

  let response
  if (!name || !type || !color || !numBridges) {
    let status = 400
    let message = `You can't have a troll without a name, type, color, and the number of bridges they watch over!`
    response = { errors: { status, message } }
  } else {
    const troll = { id: uuid(), name, type, color, numBridges }
    troll.push(troll)
    response = troll
  }

  return response
}

function update(id, body) {
  const troll = trolls.find(troll => troll.id === id)
console.log(troll)
  let response
  if (!troll) {
    let status = 404
    let message = `Sneaky trolls... could not find a troll with id of ${id}.`
    response = { errors: { status, message } }
  } else {
    const { name, type, color, numBridges } = body
    if (!name && !type && !color && !numBridges) {
      let status = 400
      let message = `Some troll detail(s) to change must be provided - none were!`
      response = { errors: { status, message } }
    } else {
      if (name) troll.name = name
      if (type) troll.type = type
      if (color) troll.color = color
      if (numBridges) troll.numBridges = numBridges
      response = troll
    }
  }

  return response
}

function del(id) {
  const troll = trolls.find(troll => troll.id === id)
  
  let response
  if (!troll) {
    let status = 404
    let message = `Sneaky trolls... could not find a troll with id of ${id}.`
    response = { errors: { status, message } }
  } else {
    const index = trolls.indexOf(troll)
    response = trolls.splice(index, 1)[0]
  }

  return response
}

module.exports = {
  getAll,
  getTroll,
  create,
  update,
  del,
  randomTrolls
}