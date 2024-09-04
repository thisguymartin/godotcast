import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserContentProgress extends BaseModel {
  @column()
  declare userId: number

  @column()
  declare contentId: number

  @column()
  declare status: string // 'in-progress', 'completed', 'not-started'

  @column()
  declare progress: number | null // 0-100

  @column()
  declare lastViewedAt: DateTime | null

  @column()
  declare lastUpdated: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
