'use strict';

const {
  db,
  models: { User, Product },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ]);
  // name: unknown;
  // description: unknown;
  // price: unknown;
  // stock: unknown;
  // imageUrl: unknown;
  const products = await Promise.all([
    Product.create({
      name: 'Liver',
      description:
        'The liver is a major organ only found in vertebrates which performs many essential biological functions such as detoxification of the organism, and the synthesis of proteins and biochemicals necessary for digestion and growth.',
      price: 10000.0,
      stock: 20,
      imageUrl: 'https://www.lifespan.io/wp-content/uploads/2020/11/liver.jpg',
    }),
    Product.create({
      name: 'mystery box',
      description: 'What is it?',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://powelllacrosse.com/wp-content/uploads/2020/04/mysterybox.jpg',
    }),
    Product.create({
      name: 'AK-47',
      description:
        'The AK-47, officially known as the Avtomat Kalashnikov, is a gas-operated assault rifle that is chambered for the 7.62 x 39mm cartridge',
      price: 3000.0,
      stock: 20,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png',
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
