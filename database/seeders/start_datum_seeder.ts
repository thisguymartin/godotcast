import ContentType from '#models/content_type'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        id: 1,
        fullName: 'John Doe',
        email: 'john@example.com',
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
      {
        id: 2,
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
    ])

    await ContentType.createMany([
      {
        id: 1,
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
      {
        id: 2,
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
    ])
  }
}
