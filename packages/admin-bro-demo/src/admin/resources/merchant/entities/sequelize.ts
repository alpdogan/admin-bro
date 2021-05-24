import { DataTypes, Model, UUIDV4 } from 'sequelize'
import { MerchantInterface } from '../merchant.interface'
import { sequelize } from '../../../../databases/sequelize'
const { nanoid } = require('nanoid');

export interface MerchantSequelizeInterface extends MerchantInterface, Model {}

export const MerchantModel = sequelize.define<MerchantSequelizeInterface>('merchant', {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: () => {
      return nanoid(11);
    }
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  logo: {
    type: DataTypes.STRING,
  },
  displayOrder: {
    type: DataTypes.INTEGER,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
  },
}, {
  freezeTableName: true
})
