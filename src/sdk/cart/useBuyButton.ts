import { useCallback } from 'react'

import { useUI } from '../ui'
import { useCart } from './useCart'
import type { CartItem } from './useCart'

export const useBuyButton = (item: Omit<CartItem, 'id'> | null) => {
  const { addItem } = useCart()
  const { openMinicart } = useUI()

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()

      if (!item) {
        return
      }

      addItem(item)
      openMinicart()
    },
    [addItem, item, openMinicart]
  )

  return {
    onClick,
    'data-testid': 'buy-button',
    'data-sku': item!.skuId,
    'data-seller': item!.seller,
  }
}