// 8 ducks
// 5 male
// 3 female
// 5 rubber
// 3 real
// pick 3 colors

const ducks = [
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Regina',
        imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/885/9633/Navy-Blue-Rubber-Duck-Adline-3__81336.1568313092.jpg?c=2&imbypass=on',
    },

    {
        color: 'green',
        isRubber: false,
        gender: 'female',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Reginae',
        imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Green-rubber-duck-front-Amsterdam-Duck-Store.jpg'

    },

   { color: 'orange',
        isRubber: false,
        gender: 'female',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Roberta',
        imageUrl: 'http://www.duckshop.com/shop_cfg/rubberducks/Badeente5669.JPG',
},
{
    color: 'blue',
        isRubber: true,
        gender: 'male',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Regina',
        imageUrl: 'https://www.wkar.org/sites/wkar/files/styles/medium/public/201812/blue_rubber_duck.jpg'
},
        {color: 'green',
        isRubber: true,
        gender: 'male',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Rex',
        imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Green-rubber-duck-slant-left-Amsterdam-Duck-Store.jpg'
        },


{
    color: 'orange',
        isRubber: true,
        gender: 'male',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Robert',
        imageUrl: 'https://www.imprintitems.com/userfiles/files/asi-media/5651672.jpg'
},
{
color: 'blue',
        isRubber: true,
        gender: 'male',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Ralph',
        imageUrl: 'https://www.wkar.org/sites/wkar/files/styles/medium/public/201812/blue_rubber_duck.jpg',
},

{
    color: 'green',
        isRubber: false,
        gender: 'male',
        IsMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: Object,
        name: 'Rudyard',
        imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Green-rubber-duck-slant-left-Amsterdam-Duck-Store.jpg'
}
];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;}

    const duckPrinter = (quacks) => {
        let domString = '';
        for(let i = 0; i < quacks.length; i++) {
            domString += `<div class="col-md-6 col-lg-4 card-spacer">`;
            domString += `<div class="card">`;
            domString += `<img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
            domString += '<div class="card-body">';
            domString += `<h5 class="card-title">${quacks[i].name}</h5>`;
            domString += `<p class="card-text">${quacks[i].socialStatus}</p>`;
            domString += `<p class="card-text">${quacks[i].diet}</p>`;
            domString += ' </div>';
            domString += '</div>';
            domString += '</div>';
        }

        printToDom('pond',domString);
};


const init = () => {
duckPrinter(ducks);
}
init();