import { DataTypes } from "sequelize";
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Color } from "./Color";

@Table({
  tableName: 'users',
  createdAt: false,
  updatedAt: false,
})

export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  name: string;

  @ForeignKey(() => Color)
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  carColorId: number;

  @BelongsTo(() => Color)
  color: Color | null;
}
