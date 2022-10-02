export async function
    getSalesDetails(req, res) {

    try {
        const orderService = req.scope.resolve("orderService");
        const storeService = req.scope.resolve("storeService");

        const start_date = new Date();

        let end_date;

        switch (req.params) {
            case "week":
                end_date = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate() - 7);
                break;
            case "month":
                end_date = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate() - 28);
                break;
            case "year":
                end_date = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate() - 365);
                break;
            case "all":
                end_date = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate() - 600);
                break;

            default:
                end_date = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate() - 7);
                break;
        }

    
        var orders = []

        var startDate = Date.parse(end_date)
        var endDate = Date.parse(start_date)

        orders = await orderService.list({});

        let consolidatedOrders = new Map()

        orders.forEach(order => {
            if (Date.parse(order.created_at).valueOf() >= startDate.valueOf() && Date.parse(order.created_at).valueOf() <= endDate.valueOf()) {
                if (Object.keys(order.metadata).length > 0) {
                    for (let [key, value] of Object.entries(order.metadata)) {
                        if (!consolidatedOrders.has(key)) {
                            consolidatedOrders.set(key, value.price);
                        }
                        else {
                            var currentPrice = consolidatedOrders.get(key);
                            consolidatedOrders.set(key, currentPrice + value.price);
                        }
                    }

                }
            }
        });

        let nameMappedStores = new Map();

        let storeNameMap = await getStoreName(storeService);

        for (let [key, value] of consolidatedOrders) {
            
            nameMappedStores.set(storeNameMap.get(key), value)
        }

        console.log(nameMappedStores);
        res.json(Object.fromEntries(nameMappedStores))

    } catch (error) {
        throw error;
    }

}

async function getStoreName(storeService) {
    const manager = storeService.manager_;
    const storeRepo = manager.getCustomRepository(storeService.storeRepository_);
    // const query = buildQuery({}, config);
    console.log(storeRepo);
    const store = await storeRepo.find({});
    console.log(store);
    let storeNameMap = new Map();
    store.forEach(element => {
        storeNameMap.set(element.id, element.name);
    });

    return storeNameMap;
} 