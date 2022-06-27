export interface Product{
    Id: number;
    name: string;
    price: number;
    description: string;
    type: string;
}

export const products = [
    {
        Id: 1,
        name: 'Anime fig. test',
        price: 100,
        description: 'is SHE naked?!?!',
        type: 'figures'
    },
    {
        Id: 2,
        name: 'Anime fig test2',
        price:200,
        description: 'is HE naked?!?!',
        type: 'figures'
    },
    {
        Id: 3,
        name: 'Anime fig test3',
        price:200,
        description: 'phew! i thought this one was naked too!',
        type: 'figures'
    },
    {
        Id: 4,
        name: 'Anime fig test4',
        price:200,
        description: 'HES NAKED!!!!',
        type: 'figures'
    },
    {
        Id: 5,
        name: 'Anime fig test5',
        price:200,
        description: 'very cute, buy 10 more',
        type: 'figures'
    },

    {
        Id: 6,
        name: 'manga 1',
        price: 9.99,
        description: 'this one is good',
        type: 'manga'
    },
    {
        Id: 7,
        name: 'manga 2',
        price:9.99,
        description: 'this one is better',
        type: 'manga'
    },
    {
        Id: 8,
        name: 'manga 3',
        price:9.99,
        description: 'this one aint bad',
        type: 'manga'
    },
    {
        Id: 9,
        name: 'manga 4',
        price:9.99,
        description: 'this one aint good',
        type: 'manga'
    },
    {
        Id: 10,
        name: 'manga box set',
        price:200.00,
        description: 'ALL the volumes is in here?!',
        type: 'manga'
    },

    {
        Id: 11,
        name: 'season 1',
        price: 19.99,
        description: 'the manga was better',
        type: 'videos'
    },
    {
        Id: 12,
        name: 'season 2',
        price:19.99,
        description: 'the graphics were 10/10',
        type: 'videos'
    },
    {
        Id: 13,
        name: 'movie 1',
        price:19.99,
        description: 'THIS WASNT EVEN IN THE MANGA. NOT CANON!',
        type: 'videos'
    },
    {
        Id: 14,
        name: 'movie 2',
        price:19.99,
        description: 'was too hyped up',
        type: 'videos'
    },
    {
        Id: 15,
        name: 'OVA',
        price:10.99,
        description: 'do OVAs even have their own dvd???',
        type: 'videos'
    },
]

