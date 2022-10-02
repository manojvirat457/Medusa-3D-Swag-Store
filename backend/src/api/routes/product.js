export async function update(req, res) {

    try {
        const productService = req.scope.resolve("productService")

        let product = await productService.retrieve(req.body.id)

        product.metadata = { previewUrl: req.body.url };

        productService.update(req.body.id, product).then((response) => {
            res.json({
                response
            })
        })

    } catch (err) {
        throw err
    }
}

export async function add(req, res) {

    try {
        const productService = req.scope.resolve("productService")

        console.log(req.body);

        productService.create(req.body).then((response) => {
            res.json({
                response
            })
        })

    } catch (err) {
        throw err
    }
}