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
    Product.create({
      name: 'Heart Containers',
      description:
        "Heart Containers, also known as Bowls of Hearts, Heart-Shaped Stones, Life Hearts, and Crystal Hearts, are recurring Items in The Legend of Zelda series. They increase Link's Life Gauge, which is represented by a set of Hearts, excluding The Adventure of Link, where his health is symbolized by a life bar. Collecting enough Pieces of Heart assembles a Heart Container and increases your maximum health.",
      price: 1200.0,
      stock: 30,
      imageUrl:
        'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0f/LANS_Heart_Container_Model.png',
    }),
    Product.create({
      name: 'Keyblades',
      description:
        "Keyblades (キーブレード Kīburēdo?) are mysterious weapons that are prominently featured in the Kingdom Hearts series. These weapons play an important role in the battle between darkness and light; they are wielded by many of the series' major characters, particularly its main protagonist, Sora.",
      price: 358.02,
      stock: 18,
      imageUrl: 'https://kh.wiki.gallery/images/3/30/Kingdom_Key_KH.png',
    }),
    Product.create({
      name: 'Pandora Box',
      description:
        "The Pandora Box (パンドラボックス, Pandora Bokkusu) alternatively spelt Pandora's Box, is an extraterrestrial artifact which was used by Evolto and Blood Tribe to destroy numerous planets across the universe.",
      price: 75000.0,
      stock: 4,
      imageUrl:
        'https://static.wikia.nocookie.net/kamenrider/images/6/6e/KRBu-Pandora_Box.png',
    }),
    Product.create({
      name: 'Black hole grenades',
      description:
        'Black hole grenades are small dark egg-shaped items that glow red when about to detonate. Upon detonation, they suck everything within range into themselves, creating a several-second gravitational singularity that seemingly wipes them from existence. The range appears to be approximately two feet, as those who are close by are still not affected unless they are nearly touching one another.',
      price: 123456789.0,
      stock: 5,
      imageUrl:
        'https://static.wikia.nocookie.net/callofduty/images/5/50/LT53_Promo_BOCW.jpg',
    }),
    Product.create({
      name: 'Ultima Weapon',
      description:
        'The Ultima Weapon (アルテマウェポン, Arutema Wepon?), also known as Atma Weapon or Caladbolg, is a weapon in many games in the Final Fantasy series. Like the spell, the Ultima Weapon is one of the strongest in the game and often serves as the ultimate weapon of the main protagonist.',
      price: 9999.99,
      stock: 7,
      imageUrl:
        'https://static.wikia.nocookie.net/finalfantasy/images/5/58/Dissidia-UltimaWeapon.png',
    }),
    Product.create({
      name: 'Chaos Emeralds',
      description:
        'They are seven ancient emeralds and mystical relics tied to the Master Emerald that possess powerful properties and abilities. Those that hold the Chaos Emeralds can use them for a variety of things, such as warping time and space, powering machines, and initiating super transformations. Anyone who combines all seven Chaos Emeralds can control unimaginable power.',
      price: 8530000.0,
      stock: 7,
      imageUrl:
        'https://static.wikia.nocookie.net/sonic/images/7/79/Treasure_Hunter.png',
    }),
    Product.create({
      name: 'Lightsaber',
      description:
        'The lightsaber, also referred to as a laser sword by those who were unfamiliar with it, was a weapon usually used by the Jedi, the Sith, and other Force-sensitives. Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
      price: 66000.0,
      stock: 66,
      imageUrl:
        'https://static.wikia.nocookie.net/fortnite_gamepedia/images/b/b7/Rey_Lightsaber.png',
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
