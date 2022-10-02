import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import Link from "next/link"
import React, { useMemo } from "react"
import { Product } from "types/medusa"
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state"
import dynamic from 'next/dynamic'
const Previewer = dynamic(() => import('../preview'), { ssr: false });


type ProductActionsProps = {
  product: Product
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

    const { state, open, close } = useToggleState(false)

  const price = useProductPrice({ id: product.id, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  console.log(product.metadata);
  

  return (
    <div className="flex flex-col gap-y-2">
      {product.collection && (
        <Link href={`/collections/${product.collection.id}`}>
          <a className="text-small-regular text-gray-700">
            {product.collection.title}
          </a>
        </Link>
      )}
      <h3 className="text-xl-regular">{product.title}</h3>

      <p className="text-base-regular">{product.description}</p>

      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {product.options.map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            )
          })}
        </div>
      )}

      <div className="mb-4">
        {selectedPrice ? (
          <div className="flex flex-col text-gray-700">
            <span
              className={clsx("text-xl-semi", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Original: </span>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>
                </p>
                <span className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <Button onClick={addToCart}>
        {!inStock ? "Out of stock" : "Add to cart"}
      </Button>
      <div>
        <Button onClick={open} disabled={product.metadata?.previewUrl == undefined}>
        {product.metadata?.previewUrl == undefined || null ? "This Product don't have 3d mode" : "View in 3D mode"}
        </Button>
        <Modal isOpen={state} close={close}>
          <Modal.Title>3D Mode</Modal.Title>
          <Modal.Body>
            <Previewer isFullView={true} previewUrl={product.metadata?.previewUrl != null || undefined ? product.metadata?.previewUrl : ""} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}

export default ProductActions
