import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.string('username').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('content_types', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('contents', (table) => {
      table.increments('id').primary()
      table
        .integer('content_type_id')
        .unsigned()
        .references('id')
        .inTable('content_types')
        .onDelete('CASCADE')
      table.string('title').notNullable()
      table.text('description').nullable()
      table.string('external_url').nullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('text_contents', (table) => {
      table.increments('id').primary()
      table
        .integer('content_id')
        .unsigned()
        .references('id')
        .inTable('contents')
        .onDelete('CASCADE')
      table.text('markdown').notNullable()
      table.text('body').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('tags', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('comments', (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table
        .integer('content_id')
        .unsigned()
        .references('id')
        .inTable('contents')
        .onDelete('CASCADE')
      table.text('comment_text').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('user_favorites', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table
        .integer('content_id')
        .unsigned()
        .references('id')
        .inTable('contents')
        .onDelete('CASCADE')
      table.primary(['user_id', 'content_id'])

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('user_progress', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table
        .integer('content_id')
        .unsigned()
        .references('id')
        .inTable('contents')
        .onDelete('CASCADE')
      table.string('status').notNullable().defaultTo('not_started')
      table.timestamp('last_updated', { useTz: true }).notNullable()
      table.primary(['user_id', 'content_id'])

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })

    this.schema.createTable('content_tags', (table) => {
      table
        .integer('content_id')
        .unsigned()
        .references('id')
        .inTable('contents')
        .onDelete('CASCADE')
      table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE')
      table.primary(['content_id', 'tag_id'])

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable('users')
  }
}
