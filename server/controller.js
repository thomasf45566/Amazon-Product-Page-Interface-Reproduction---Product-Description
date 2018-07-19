const Description = require('../databse');


// const faker = require('faker');

// for (let i = 0; i < 100; i++) {
//   let data = {
//     brand: faker.company.companyName(),
//     name: faker.random.words(8),
//     reviews: faker.random.number(100000),
//     questions: faker.random.number(10000),
//     price: Math.random() * 100000,
//     color: faker.commerce.color(),
//     size: faker.random.word(),
//     weight: faker.random.number(1000),
//     text: faker.lorem.sentences(8),
//   };
//   const sizes = ['X-Small X-Large', 'Small Medium Large', 'Large XX-Large', 'X-Small Medium', 'XXX-Large XXXX-Large', 'XXXX-Small Large'];
//   data.stars = Math.floor(Math.random() * 6);
//   data.size = sizes[Math.floor(Math.random() * sizes.length)];
//   // console.log(data);
//   new Description(data).save((err, posted) => {
//     if (err) console.log(err);
//   });
// }

module.exports = {
  get: (req, res) => {
    Description.findOne({name: req.params.name}, (err, description) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(description);
    })
  },
  post: (req, res) => {
    new Description(req.body).save((err, posted) => {
      if (err) res.status(400).send(err);
      else res.status(201).send('posted');
    })
  },
};