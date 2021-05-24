import { MerchantModel } from '../../admin/resources/merchant/entities/sequelize'
import { UserModel } from '../../admin/resources/user/entities/sequelize'
import { AvailableModels } from '../models.type'

export const models: Record<AvailableModels, any> = {
  User: UserModel,
  Merchant: MerchantModel
}
