import axios from 'axios'
import qs from 'querystring'
import * as botpress from '.botpress'
import { RuntimeError } from '@botpress/client'
import { SHOPIFY_API_VERSION } from '../const'

type GetCustomerOrders = botpress.IntegrationProps['actions']['getCustomerOrders']

export const getCustomerOrders: GetCustomerOrders = async ({ ctx, input, logger }) => {
  const { customer_id, status } = input
  const filters = qs.stringify({ customer_id, status })

  const axiosConfig = {
    baseURL: `https://${ctx.configuration.shopName}.myshopify.com`,
    headers: {
      'X-Shopify-Access-Token': ctx.configuration.access_token,
    },
  }

  try {
    const response = await axios.get(
      `/admin/api/${SHOPIFY_API_VERSION}/orders.json${filters.length > 0 ? '?' + filters : ''}`,
      axiosConfig
    )

    const customerOrdersList = response.data.orders

    logger
      .forBot()
      .info(
        `Ran 'Get Customer Orders List' and found ${customerOrdersList.length} customer orders matching criteria ${filters}`
      )

    return { customerOrdersList }
  } catch (e) {
    const errorMsg = `'Get Customer Orders List' exception ${JSON.stringify(e)}`
    logger.forBot().error(errorMsg)
    throw new RuntimeError(errorMsg)
  }
}
