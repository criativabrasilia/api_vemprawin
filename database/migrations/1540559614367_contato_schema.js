'use strict'

const Schema = use('Schema')

class ContatoSchema extends Schema {
  up () {
    this.create('contatoes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('contatoes')
  }
}

module.exports = ContatoSchema
