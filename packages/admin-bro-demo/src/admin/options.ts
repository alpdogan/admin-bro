import AdminBro, { AdminBroOptions } from 'admin-bro'
import * as UserAdmin from './resources/user'
import * as MerchantAdmin from './resources/merchant'

const rootPath = '/admin'

export const options: AdminBroOptions = {
  rootPath,
  version: {
    admin: true,
  },
  dashboard: {
    handler: async () => {
      return { some: 'output' }
    },
    component: AdminBro.bundle('../../../src/admin/components/dashboard')
  },
  resources: [
    UserAdmin,
    MerchantAdmin
  ],
}
