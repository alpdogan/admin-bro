import { ResourceOptions } from 'admin-bro'

export const UserResource: ResourceOptions = {
  listProperties: ['email'],
  navigation: {
    name: null,
    icon: 'User',
  },
  properties: {
    encryptedPassword: {
      isVisible: false,
    },
  },
}
