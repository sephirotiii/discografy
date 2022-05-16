const controller = "./controller/";
const routes = [
    {
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
                "url" : "/customer",
                "title": "List of customers",
                "descrition" : "Simple list of customers registered",
                "source" : controller + "customer.js",
            }
        ]
    }
]