class OrderSubscriber {



  constructor({
    eventBusService,
    orderService,
    productService
  }) {
    this.orderService_ = orderService;
    this.productService_ = productService;

    eventBusService.subscribe("order.placed", async ({ id }) => {

      const unique_stores = new Map();

      const order = await this.orderService_.retrieve(id, {
        select: [
          "total",
          "tax_total",
          "refunded_total",
          "gift_card_total",
          "subtotal",
        ],
        relations: [
          "items"
        ],
      })

      let order_items = order.items;

      if (order_items.length > 0) {


        const products = await Promise.all(
          order.items.map(async (element) => {
            const product = await this.productService_.retrieve(element.variant.product_id);

            return {
              "store_id": product.store_id,
              "price": (element.quantity * element.unit_price),
              "quantity": element.quantity
            };
          })
        )

        

        products.map((value) => {
          let key = unique_stores.has(value.store_id);

          if (!key) {
            unique_stores.set(value.store_id, { "price": value.price });
          } else {
            const current = unique_stores.get(value.store_id);
            unique_stores.set(value.store_id, { "price": current.price + value.price });
          }

        })

        const values = Object.fromEntries(unique_stores);

        await this.orderService_.update(order.id, {
          metadata: values
        })
      }

    })

  }


}

export default OrderSubscriber