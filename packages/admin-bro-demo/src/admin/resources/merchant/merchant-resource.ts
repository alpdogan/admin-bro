import { ResourceOptions } from 'admin-bro'

export const MerchantResource: ResourceOptions = {
  listProperties: ['id', 'name', 'displayOrder'],
  navigation: {
    name: null,
    icon: 'User',
  },
  properties: {
  },
}
