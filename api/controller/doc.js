const doc = {
    "title" : "Lea Records Shop",
    "verbs" : [
        {"name" : "GET"},
        {"name" : "POST"},
        {"name" : "PUT"},
        {"name" : "DELETE"}
    ],
    "endpoints" : [
        {
            "verb" : "GET",
            "url" : "/",
            "title": "Documentation",
            "descrition" : "This Documentation",
            "source" : controller + "doc.js",
        },
        {
            "verb" : "GET",
            "url" : "/",
            "title": "Documentation",
            "descrition" : "This Documentation",
            "source" : controller + "doc.js",
        }
    ]
    {
        "/" : "This documentation",
        "/customer" : "Customer List",
        "/record" : "Record List",
        "/order" : "Order List",
        "/customer/:id" : "One especific customer",
        "/record/:id" : "One especific record",
        "/order/:id" : "One especific Order",
        "/stock" : "Quantity of each product",
        "/stock/:id" : "Quantity of a specific product"
    }
}