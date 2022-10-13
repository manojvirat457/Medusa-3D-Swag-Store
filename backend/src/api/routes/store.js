export async function getAllStores(req, res) {

    try {
        const storeService = req.scope.resolve("storeService")

        let stores = await getStores(storeService);

        res.json({stores});


    } catch (err) {
        throw err
    }
}

async function getStores(storeService) {
    const manager = storeService.manager_;
    const storeRepo = manager.getCustomRepository(storeService.storeRepository_);

    return await storeRepo.find({});;
} 
