'use strict';

const {
  db,
  models: { User, Product, CartItem },
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
      name: 'Propane Jet Pack',
      description:
        'This rebel soldier joins Medicis Space Program, and has a brief flight on a propane fuelled jetpack!',
      price: 10000.0,
      stock: 20,
      imageUrl: 'https://i.ytimg.com/vi/cTtdz626st4/maxresdefault.jpg',
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
      name: 'Weber Traveler Portable Propane Gas Grill - Black - 9010001',
      description:
        'Ready, set, grill on the go! The Weber Traveler portable gas BBQ grill offers 320 square inches of cooking space to create the grilled foods you love anytime, anywhere. Weber Traveler gas grills are perfect for tailgating, camping or small spaces like apartment balconies. With the push of a button, the grill ignites quickly and easily. The durab',
      price: 3000.0,
      stock: 20,
      imageUrl:
        'https://cdn.shocho.co/sc-image/3/0/5/e/305e08558e4130ae1c2609cf93d2b1df.jpg?i10c=img.resize(width:500,height:500)',
    }),
  ]);
  const carts = await Promise.all([
    CartItem.create({
      quantity: 1,
      userId: users[0].id,
      productId: products[0].id,
    }),
    CartItem.create({
      quantity: 1,
      userId: users[0].id,
      productId: products[2].id,
    }),
    CartItem.create({
      quantity: 1,
      userId: users[0].id,
      productId: products[1].id,
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
