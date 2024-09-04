import Content from '#models/content'
import ContentTag from '#models/content_tag'
import ContentType from '#models/content_type'
import Tag from '#models/tag'
import User from '#models/user'
import UserContentProgress from '#models/user_content_progress'
import UserFavorite from '#models/user_favorite'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Seed Users

    const user = await User.create({
      username: 'John Doe117',
      email: 'john117@example.com',
      password: 'password123',
      createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
    })

    await User.createMany([
      {
        // id: 1,
        username: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
      {
        // id: 2,
        username: 'Jane Doe',
        email: 'jane11@example.com',
        password: 'password456',
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
    ])

    // Seed Tags

    const tag = await Tag.create({
      name: 'Technology',
      createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
    })

    // Seed ContentTypes
    const contentType = await ContentType.create({
      name: 'Article',
      createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
    })

    // Seed Contents
    const content = await Content.create({
      title: 'Introduction to AdonisJS',
      description: 'Learn the basics of AdonisJS framework',
      contentTypeId: contentType.id,
      createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
    })

    await Content.createMany([
      {
        // id: 1,
        title: 'Introduction to AdonisJS',
        description: 'Learn the basics of AdonisJS framework',
        contentTypeId: contentType.id,
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
      {
        // id: 2,
        title: 'Web Development Trends 2024',
        description: 'Explore the latest trends in web development',
        contentTypeId: contentType.id,
        createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
        updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      },
    ])

    // Seed ContentTags
    await ContentTag.create({
      contentId: content.id,
      tagId: tag.id,
      createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
    })

    // Seed UserProgress
    await UserContentProgress.create({
      userId: user.id,
      contentId: content.id,
      status: 'completed',
      // progress: 100,
      // lastViewedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      // lastUpdated: DateTime.fromISO('2024-08-29T10:00:00Z'),
      createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
    })

    // Seed UserFavorite
    await UserFavorite.create({
      userId: user.id,
      contentId: content.id,
      createdAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
      updatedAt: DateTime.fromISO('2024-08-29T10:00:00Z'),
    })
  }
}
