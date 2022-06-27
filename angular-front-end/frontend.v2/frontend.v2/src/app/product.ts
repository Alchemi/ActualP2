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
        name: 'Cowboy Bebop: Faye Valentine',
        price: 100,
        description: 'is SHE naked?!?!',
        type: 'figures'
    },
    {
        Id: 2,
        name: 'Naruto Uzumaki: Rasengan',
        price:200,
        description: 'is HE naked?!?!',
        type: 'figures'
    },
    {
        Id: 3,
        name: 'Goku + Gohan Father-Son Kamehama',
        price:200,
        description: 'phew! i thought this one was naked too!',
        type: 'figures'
    },
    {
        Id: 4,
        name: 'Chewbaka',
        price:200,
        description: 'HES NAKED!!!!',
        type: 'figures'
    },
    {
        Id: 5,
        name: 'Cory in the House: My favorite Anime Edition',
        price:200,
        description: 'very cute, buy 10 more',
        type: 'figures'
    },

    {
        Id: 6,
        name: 'Nanatsu no Taizai!',
        price: 9.99,
        description: 'this one is good',
        type: 'manga'
    },
    {
        Id: 7,
        name: 'Clannad',
        price:9.99,
        description: 'this one is better',
        type: 'manga'
    },
    {
        Id: 8,
        name: 'GATE',
        price:9.99,
        description: 'this one aint bad',
        type: 'manga'
    },
    {
        Id: 9,
        name: 'Worst',
        price:9.99,
        description: 'this one aint good',
        type: 'manga'
    },
    {
        Id: 10,
        name: 'One Piece',
        price:200.00,
        description: 'ALL the volumes is in here?!',
        type: 'manga'
    },

    {
        Id: 11,
        name: 'Encanto',
        price: 19.99,
        description: 'the manga was better',
        type: 'videos'
    },
    {
        Id: 12,
        name: 'Your name',
        price:19.99,
        description: 'the graphics were 10/10',
        type: 'videos'
    },
    {
        Id: 13,
        name: 'Ghost in the Shell: Live Action',
        price:19.99,
        description: 'THIS WASNT EVEN IN THE MANGA. NOT CANON!',
        type: 'videos'
    },
    {
        Id: 14,
        name: 'Akira',
        price:19.99,
        description: 'Not hyped enough',
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

