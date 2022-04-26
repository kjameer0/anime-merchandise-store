"use strict";
const {
  db,
  models: { User, Product, CartItem, Order },
} = require("../server/db");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      email: "cody123@gmail.com",
    }),
    User.create({
      username: "murphy",
      password: "123",
      email: "murphy123@yahoo.com",
    }),
    User.create({
      username: "admin",
      password: "admin",
      email: "admin@gmail.com",
      admin: true,
    }),
  ]);

  // name: unknown;
  // description: unknown;
  // price: unknown;
  // stock: unknown;
  // imageUrl: unknown;
  const products = await Promise.all([
    Product.create({
      name: "Propane Jet Pack",
      description:
        "This rebel soldier joins Medicis Space Program, and has a brief flight on a propane fuelled jetpack!",
      price: 10000.0,
      stock: 20,
      imageUrl: "https://i.ytimg.com/vi/cTtdz626st4/maxresdefault.jpg",
    }),
    Product.create({
      name: "mystery box",
      description: "What is it?",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://powelllacrosse.com/wp-content/uploads/2020/04/mysterybox.jpg",
    }),
    Product.create({
      name: "Weber Traveler Portable Propane Gas Grill - Black - 9010001",
      description:
        "Ready, set, grill on the go! The Weber Traveler portable gas BBQ grill offers 320 square inches of cooking space to create the grilled foods you love anytime, anywhere. Weber Traveler gas grills are perfect for tailgating, camping or small spaces like apartment balconies. With the push of a button, the grill ignites quickly and easily. The durab",
      price: 3000.0,
      stock: 20,
      imageUrl:
        "https://cdn.shocho.co/sc-image/3/0/5/e/305e08558e4130ae1c2609cf93d2b1df.jpg?i10c=img.resize(width:500,height:500)",
    }),
    Product.create({
      name: "Heart Containers",
      description:
        "Heart Containers, also known as Bowls of Hearts, Heart-Shaped Stones, Life Hearts, and Crystal Hearts, are recurring Items in The Legend of Zelda series. They increase Link's Life Gauge, which is represented by a set of Hearts, excluding The Adventure of Link, where his health is symbolized by a life bar. Collecting enough Pieces of Heart assembles a Heart Container and increases your maximum health.",
      price: 1200.0,
      stock: 30,
      imageUrl: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0f/LANS_Heart_Container_Model.png",
    }),
    Product.create({
      name: "Keyblades",
      description:
        "Keyblades (キーブレード Kīburēdo?) are mysterious weapons that are prominently featured in the Kingdom Hearts series. These weapons play an important role in the battle between darkness and light; they are wielded by many of the series' major characters, particularly its main protagonist, Sora.",
      price: 358.02,
      stock: 18,
      imageUrl: "https://kh.wiki.gallery/images/3/30/Kingdom_Key_KH.png",
    }),
    Product.create({
      name: "Pandora Box",
      description:
        "The Pandora Box (パンドラボックス, Pandora Bokkusu) alternatively spelt Pandora's Box, is an extraterrestrial artifact which was used by Evolto and Blood Tribe to destroy numerous planets across the universe.",
      price: 75000.0,
      stock: 4,
      imageUrl: "https://static.wikia.nocookie.net/kamenrider/images/6/6e/KRBu-Pandora_Box.png",
    }),
    Product.create({
      name: "Black hole grenades",
      description:
        "Black hole grenades are small dark egg-shaped items that glow red when about to detonate. Upon detonation, they suck everything within range into themselves, creating a several-second gravitational singularity that seemingly wipes them from existence. The range appears to be approximately two feet, as those who are close by are still not affected unless they are nearly touching one another.",
      price: 123456789.0,
      stock: 5,
      imageUrl: "https://static.wikia.nocookie.net/callofduty/images/5/50/LT53_Promo_BOCW.jpg",
    }),
    Product.create({
      name: "Ultima Weapon",
      description:
        "The Ultima Weapon (アルテマウェポン, Arutema Wepon?), also known as Atma Weapon or Caladbolg, is a weapon in many games in the Final Fantasy series. Like the spell, the Ultima Weapon is one of the strongest in the game and often serves as the ultimate weapon of the main protagonist.",
      price: 9999.99,
      stock: 7,
      imageUrl: "https://static.wikia.nocookie.net/finalfantasy/images/5/58/Dissidia-UltimaWeapon.png",
    }),
    Product.create({
      name: "Chaos Emeralds",
      description:
        "They are seven ancient emeralds and mystical relics tied to the Master Emerald that possess powerful properties and abilities. Those that hold the Chaos Emeralds can use them for a variety of things, such as warping time and space, powering machines, and initiating super transformations. Anyone who combines all seven Chaos Emeralds can control unimaginable power.",
      price: 8530000.0,
      stock: 7,
      imageUrl: "https://static.wikia.nocookie.net/sonic/images/7/79/Treasure_Hunter.png",
    }),
    Product.create({
      name: "Lightsaber",
      description:
        "The lightsaber, also referred to as a laser sword by those who were unfamiliar with it, was a weapon usually used by the Jedi, the Sith, and other Force-sensitives. Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.",
      price: 66000.0,
      stock: 66,
      imageUrl: "https://static.wikia.nocookie.net/fortnite_gamepedia/images/b/b7/Rey_Lightsaber.png",
    }),
    Product.create({
      name: "Gunblade",
      description: "Gun + Blade, what else is there to say?",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/finalfantasy/images/a/a7/Dissidia-Revolver.png",
    }),
    Product.create({
      name: "Vandal",
      description:
        "The Vandal is a high-cost automatic rifle. One of VALORANT's best general-purpose weapons, it is most effective at picking off individual targets at longer ranges due to having no falloff, allowing it to kill any enemy with a single headshot at all ranges.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2021/04/30135716/image-45-2048x948.png",
    }),
    Product.create({
      name: "Phantom",
      description:
        "The Phantom is a high-cost automatic rifle. One of VALORANT's best general-purpose weapons, it is most effective at short to medium range where it is able to spray down multiple enemies at once due to its high rate of fire. It also comes equipped with a silencer, allowing it to be used to spam through vision blockers without much risk to the player's ammo count or positioning.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2021/05/07110811/image-4-2048x978.png",
    }),
    Product.create({
      name: "Golden Gun",
      description:
        "The Golden Gun is the signature weapon of killer assassin Francisco Scaramanga. It first appeared as the titular weapon in Ian Fleming's posthumously published 1965 novel, The Man with the Golden Gun. In the novel it is merely a gold-plated .45-calibre revolver. In the 1974 film adaptation, the weapon is a custom-built, single-shot pistol assembled from four seemingly innocuous golden objects: a pen, a lighter, a cigarette case and a cufflink.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/jamesbond/images/5/52/Scaramanga%27s_Golden_Gun.jpg",
    }),
    Product.create({
      name: "Portal Gun",
      description:
        "The Aperture Science Handheld Portal Device, originally marketed in the 1950s as an Aperture Science Portable Quantum Tunneling Device, also commonly known as a Portal Gun or by its acronym, ASHPD, is an experimental tool used to create two portals through which objects can pass.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://i1.theportalwiki.net/img/d/db/Portal_PortalGun.png",
    }),
    Product.create({
      name: "Mark 2 Lancer",
      description:
        "The Mark 2 Lancer Assault Rifle was the Coalition of Ordered Governments' current standard-issue assault rifle for Gears fighting on the front lines. The signature weapon of the COG, the Lancer possessed a fully automatic mode of fire and the iconic Chainsaw Bayonet attachment for melee combat, despite the fact that the chainsaw was originally for utility purposes.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/gearsofwar/images/a/a9/Gears_4_Lancer_Mk2.png",
    }),
    Product.create({
      name: "Poke Ball",
      description:
        "A type of item that is critical to a Trainer's quest, used for catching and storing Pokémon. Both a general term used to describe the various kinds as well as a specific term to refer to the most basic among these variations, Poké Balls are ubiquitous in the modern Pokémon world. Up to six Pokémon can be carried with a Trainer in Poké Balls, while more Poké Balls can be held in the Bag for later use. These six Pokémon in the Poké Balls can be attached to the user's belt for carrying them around.",
      price: 20000.0,
      stock: 20,
      imageUrl:
        "https://www.thewandcompany.com/wp-content/uploads/2020/11/pokeball-resting-on-table-1kx862px-768x662.jpg",
    }),
    Product.create({
      name: "Blades Of Chaos",
      description:
        "The Blades of Chaos were forged at the darkest depths of the Underworld by Ares himself. They were imbued with fire, which allowed them to ignite with every attack that the user performed. The Blades' chains would stretch out for a set distance with each attack, allowing for fluid movement no matter who wielded them.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://cutewallpaper.org/22/blades-of-chaos-wallpapers/1597327190.jpg",
    }),
    Product.create({
      name: "Energy Sword",
      description:
        "The Energy Sword is the signature weapon of the Sangheili, and has been their weapon of nobility since its creation during one of their Ages of Discovery. Viewed as a holy weapon, the Sangheili pride themselves on their skills with it.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://m.media-amazon.com/images/I/71bsUNj+LVL._AC_SL1500_.jpg",
    }),
    Product.create({
      name: "Hidden Blade",
      description:
        "Consisting of a blade that can be discreetly extended or retracted from a bracer or gauntlet, the Hidden Blade's portability and concealability complement the Assassins' trademark affinity for stealth and freerunning. It allowed an Assassin to eliminate a target while drawing virtually no attention to themselves, and the techniques developed for its use often ensure near-instantaneous death.",
      price: 20000.0,
      stock: 20,
      imageUrl:
        "https://store.ubi.com/on/demandware.static/-/Sites-masterCatalog/default/dwf0d1bc60/images/large/5e8b42185cdf9a12c868c875-2.jpg",
    }),
    Product.create({
      name: "Blue Shell",
      description:
        "Its main objective has always remained the same: to utterly obliterate the front runner in the race. Because of their cruel and unforgiving nature, the Spiny Shell has become an infamous Item, feared by even most skilled kart-racers. So far, the Spiny Shell has been featured in every game since Mario Kart 64, causing huge amounts of chaos and unfairness.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/mariokart/images/b/b6/Spiny_Shell_-_Mario_Kart_Wii.png",
    }),
    Product.create({
      name: "Master Sword",
      description:
        "The Master Sword was originally crafted by the goddess Hylia as the Goddess Sword, and was later forged into the Master Sword by the Goddess's chosen hero and its spirit, Fi, who bathed it in the three Sacred Flames located across the land that would become the Kingdom of Hyrule. Din's Flame in particular imbued the sword with the Power to Repel Evil, a power augmented after the Sword received the blessing of Zelda, which transformed the blade into the true Master Sword. Although not always, it is the only weapon that can defeat Ganon in the games it appears in.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6d/TWWHD_Master_Sword_Model.png",
    }),
    Product.create({
      name: "Cerebal Bore",
      description:
        "It is a weapon of unknown origin that consists of a homing projectile capable of latching onto its victim's heads, killing them by drilling into their skulls and exploding when they reach the brain.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://us.v-cdn.net/5021068/uploads/editor/2i/2nkki26snskc.jpg",
    }),
    Product.create({
      name: "Yoru",
      description:
        "Yoru is one of the strongest swords in the world, ranked as one of the 12 Supreme Grade swords. It is a Black Blade (黒刀 Kokutō?) that is currently owned by Dracule Mihawk, the Strongest Swordsman in the World.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/onepiece/images/c/c0/Yoru_Infobox.png",
    }),
    Product.create({
      name: "Wolfwood's Punisher",
      description:
        "Wolfwood's Punisher has one machine gun in the front and a rocket launcher in the back. I÷t shows that the side arms are the storage for the machine gun's bullets.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://i.redd.it/fujhbwbvpwe11.jpg",
    }),
    Product.create({
      name: "Death Note",
      description:
        "The purpose of the Death Note is to take human life, thereby increasing the lifespan of the Shinigami who uses it. There are many rules governing how the Death Note can be used, though the most pivotal rule is that the human whose name is written in this note shall die. The King of Death is apparently the one that makes and controls the rules of the Death Note, where he is able to make new rules as he sees fit.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/deathnote/images/c/c3/Othellonia_art_Death_Note.png",
    }),
    Product.create({
      name: "Asta Demon-Slayer Sword",
      description:
        "This sword can cut and reflect magic off its surface. Asta can summon this sword by its name and fly on top of it. He can use Anti-Magic to extend the swords length and width and create long-range attacks. Remote attacks are also possible with this sword.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://animehunch.com/wp-content/uploads/2020/12/Demon-Slayer-Sword-edited.jpg",
    }),
    Product.create({
      name: "Lostvayne",
      description:
        "Lostvayne's special ability that allows Meliodas to create up to four or six clones of himself. The clones only retain a fraction of the original's power, with one clone having half the power level of the original. The halved power level is divided among each additional clone.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/nanatsu-no-taizai/images/5/54/Lostvayne.png",
    }),
    Product.create({
      name: "RX-78-02 Gundam",
      description:
        "The RX-78-02 utilizes its wide array of portable weapons such as its beam rifle and hyper bazooka. It also has fixed weaponry such as two shoulder magnums on the left shoulder, a gatling gun on the right shoulder, and a forearm gatling gun on its left arm. It's also possible to swap a beam saber with an optional armament known as the shoulder cannon.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://cdn.shopify.com/s/files/1/0727/8355/products/bans62033_0_900x900.jpg",
    }),
    Product.create({
      name: "Dragon Slayer",
      description:
        "Given the sword's incredible size and weight, the Dragon Slayer functions more like a bladed maul than an actual sword, though Guts is more than capable of using it to cut through various targets. The sheer momentum of Guts swinging it can tear anyone caught in the attack impact into pieces with one swing; this often is applied to more than one enemy at once, cleaving through multiple foes in a single swing.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/berserk/images/c/c8/Manga_E1.png",
    }),
    Product.create({
      name: "Samehada",
      description:
        "Samehada is one of the seven deadly mist swords, and arguably the strongest one. It looks like something you would get in a carnival from Hell, as its a short knife covered with scales and with a gapping mount on its end. The sword is sentient and can drain the chakra of anyone it touches, alongside aiding the wielder in battle.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.fandomspot.com/images/12/11207/09-samehada-naruto-shippuden-anime.jpg",
    }),
    Product.create({
      name: "RYNO",
      description:
        "The RYNO functions similarly throughout all of its appearances, though it does go through several cosmetic iterations. The RYNO targets multiple enemies in front of Ratchet, and once it fires, a missile hits each. The missiles each do major amounts of damage, meaning they are likely to destroy most enemies in front of Ratchet, regardless of their size.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/rcw/images/2/2d/RYNO_render.png",
    }),
    Product.create({
      name: "Scissor Blade",
      description:
        "But if you really think about it, the Scissor Blade is just an advanced version. Not only can it cut through anything and never breaks but this scissor blade can also change its size and cut through life fiber: a material thats virtually indestructible otherwise.Plus, the Scissor Blade has just seen a lot more use. And thus has shown a lot more feats.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.fandomspot.com/images/12/11207/07-the-scissor-blade-kill-la-kill-anime.jpg",
    }),
    Product.create({
      name: "3D Maneuver Gear",
      description:
        "The simplest move possible with the 3DMG is simply aiming and firing the grapple hooks at an object and then activating the gas mechanism to reel oneself toward said object. They can then disconnect the hook and continue moving forward.",
      price: 20000.0,
      stock: 20,
      imageUrl:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/06/THREE-DIMENSIONAL-MANEUVER-GEAR.jpg",
    }),
    Product.create({
      name: "VOLTRON",
      description:
        "Voltron isn't called the Defender of the Universe because it's weak. When combined from its five lion ships into Voltron, it becomes one of anime's deadliest machines. Even when it isn't combined, the individual lion ships are incredibly powerful weapons in their own right, thanks to the skills of their pilots and the weaponry they have available to them.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/06/Voltron.jpg",
    }),
    Product.create({
      name: "X-Gloves",
      description:
        "They are a pair of black, metal-clad gloves. The gloves are surrounded by Dying Will Flames, which can be ignited without the use of the Dying Will Bullet. Tsuna is also able to use the Dying Will Flame to propel himself through the air at high speeds with great maneuverability.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/reborn/images/f/fb/X-Gloves_Version_V_R.png",
    }),
    Product.create({
      name: "Tessaiga",
      description:
        "The Tessaiga can absorb the powers and abilities of any material, substance, or form of demonic energy it comes in contact with, making itself more powerful and granting it new abilities in the process.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/inuyasha/images/b/b6/Inuyasha_and_Tessaiga_Sword.jpg",
    }),
    Product.create({
      name: "Zangetsu",
      description:
        "Ichigo obtained the shikai form through his training with Urahara. In this form, Zangetsu takes on the appearance of an oversize, black cleaver. It's been described as looking like an unfinished blade, and has never returned to the sealed form after it was released.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://content.instructables.com/ORIG/FMB/HCJX/IR5MVO35/FMBHCJXIR5MVO35.jpg",
    }),
    Product.create({
      name: "POLTERGUST 3000",
      description:
        "The Poltergust device is equipped alongside a vacuum, a nozzle, and a flashlight to hunt down and capture certain ghosts, such as the Boos. The player would stun and flash a ghost with the flashlight, and then they will have a chance to suck away. It has the ability and element, with help from special Elemental Medals, to harness the elements of three things: fire; ice; and water. This helps Luigi to fight certain and needed ghosts.",
      price: 20000.0,
      stock: 20,
      imageUrl: "https://static.wikia.nocookie.net/mansionluigi/images/1/1f/Poltergust_3000.png",
    }),
    Product.create({
      name: "Mega Buster",
      description:
        "This Mega Buster is an ambidextrous arm cannon built by Dr. Light. It fires Solar Bullets (ソーラーブリット), energy bullets made of highly compressed solar energy, the same energy source used by Mega Man. It is a powerful weapon capable of puncturing steel and destroying boulders.",
      price: 20000.0,
      stock: 20,
      imageUrl:
        "https://p.turbosquid.com/ts-thumb/7k/el1mvH/Tj/mb4render1/png/1614368607/1920x1080/fit_q99/88f4581ae79793bd6ab5b7281c4cb077558dd3b6/mb4render1.jpg",
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
    CartItem.create({
      quantity: 1,
      userId: users[1].id,
      productId: products[0].id,
    }),
    CartItem.create({
      quantity: 1,
      userId: users[1].id,
      productId: products[2].id,
    }),
    CartItem.create({
      quantity: 1,
      userId: users[1].id,
      productId: products[1].id,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  let myOrder = await Order.findOne({
    where: {
      id: 1,
    },
    include: [
      {
        model: CartItem,
      },
      {
        model: User,
      },
    ],
  });
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
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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
