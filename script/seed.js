'use strict';
const {
  db,
  models: { User, Product, CartItem, Order },
<<<<<<< HEAD
} = require("../server/db");
=======
} = require('../server/db');
const { faker } = require('@faker-js/faker');
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'cody',
      password: '123',
      email: 'cody123@gmail.com',
    }),
    User.create({
      username: 'murphy',
      password: '123',
      email: 'murphy123@yahoo.com',
    }),
    User.create({
      username: 'admin',
      password: 'admin',
      email: 'admin@gmail.com',
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
      name: 'Propane Jet Pack',
      description:
        'This rebel soldier joins Medicis Space Program, and has a brief flight on a propane fuelled jetpack!',
      price: 10000.0,
      stock: 20,
<<<<<<< HEAD
      imageUrl: "https://i.ytimg.com/vi/cTtdz626st4/maxresdefault.jpg",
=======
      imageUrl: 'https://i.ytimg.com/vi/cTtdz626st4/maxresdefault.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'mystery box',
      description: 'What is it?',
      price: 20000.0,
      stock: 20,
      imageUrl:
<<<<<<< HEAD
        "https://powelllacrosse.com/wp-content/uploads/2020/04/mysterybox.jpg",
=======
        'https://powelllacrosse.com/wp-content/uploads/2020/04/mysterybox.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Weber Traveler Portable Propane Gas Grill - Black - 9010001',
      description:
        'Ready, set, grill on the go! The Weber Traveler portable gas BBQ grill offers 320 square inches of cooking space to create the grilled foods you love anytime, anywhere. Weber Traveler gas grills are perfect for tailgating, camping or small spaces like apartment balconies. With the push of a button, the grill ignites quickly and easily. The durab',
      price: 3000.0,
      stock: 4,
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
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0f/LANS_Heart_Container_Model.png",
=======
        'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0f/LANS_Heart_Container_Model.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
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
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/kamenrider/images/6/6e/KRBu-Pandora_Box.png",
=======
        'https://static.wikia.nocookie.net/kamenrider/images/6/6e/KRBu-Pandora_Box.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Black hole grenades',
      description:
        'Black hole grenades are small dark egg-shaped items that glow red when about to detonate. Upon detonation, they suck everything within range into themselves, creating a several-second gravitational singularity that seemingly wipes them from existence. The range appears to be approximately two feet, as those who are close by are still not affected unless they are nearly touching one another.',
      price: 123456789.0,
      stock: 5,
      imageUrl:
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/callofduty/images/5/50/LT53_Promo_BOCW.jpg",
=======
        'https://static.wikia.nocookie.net/callofduty/images/5/50/LT53_Promo_BOCW.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Ultima Weapon',
      description:
        'The Ultima Weapon (アルテマウェポン, Arutema Wepon?), also known as Atma Weapon or Caladbolg, is a weapon in many games in the Final Fantasy series. Like the spell, the Ultima Weapon is one of the strongest in the game and often serves as the ultimate weapon of the main protagonist.',
      price: 9999.99,
      stock: 7,
      imageUrl:
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/finalfantasy/images/5/58/Dissidia-UltimaWeapon.png",
=======
        'https://static.wikia.nocookie.net/finalfantasy/images/5/58/Dissidia-UltimaWeapon.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Chaos Emeralds',
      description:
        'They are seven ancient emeralds and mystical relics tied to the Master Emerald that possess powerful properties and abilities. Those that hold the Chaos Emeralds can use them for a variety of things, such as warping time and space, powering machines, and initiating super transformations. Anyone who combines all seven Chaos Emeralds can control unimaginable power.',
      price: 8530000.0,
      stock: 7,
      imageUrl:
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/sonic/images/7/79/Treasure_Hunter.png",
=======
        'https://static.wikia.nocookie.net/sonic/images/7/79/Treasure_Hunter.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Lightsaber',
      description:
        'The lightsaber, also referred to as a laser sword by those who were unfamiliar with it, was a weapon usually used by the Jedi, the Sith, and other Force-sensitives. Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
      price: 66000.0,
      stock: 66,
      imageUrl:
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/fortnite_gamepedia/images/b/b7/Rey_Lightsaber.png",
    }),
    Product.create({
      name: "Gunblade",
      description: "Gun + Blade, what else is there to say?",
      price: 20000.0,
      stock: 20,
      imageUrl:
        "https://static.wikia.nocookie.net/finalfantasy/images/a/a7/Dissidia-Revolver.png",
=======
        'https://static.wikia.nocookie.net/fortnite_gamepedia/images/b/b7/Rey_Lightsaber.png',
    }),
    Product.create({
      name: 'Gunblade',
      description: 'Gun + Blade, what else is there to say?',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/finalfantasy/images/a/a7/Dissidia-Revolver.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Vandal',
      description:
        "The Vandal is a high-cost automatic rifle. One of VALORANT's best general-purpose weapons, it is most effective at picking off individual targets at longer ranges due to having no falloff, allowing it to kill any enemy with a single headshot at all ranges.",
<<<<<<< HEAD
      price: 1775.0,
      stock: 18,
      imageUrl:
        "https://cdn1.dotesports.com/wp-content/uploads/2021/04/30135716/image-45-2048x948.png",
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://cdn1.dotesports.com/wp-content/uploads/2021/04/30135716/image-45-2048x948.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Phantom',
      description:
        "The Phantom is a high-cost automatic rifle. One of VALORANT's best general-purpose weapons, it is most effective at short to medium range where it is able to spray down multiple enemies at once due to its high rate of fire. It also comes equipped with a silencer, allowing it to be used to spam through vision blockers without much risk to the player's ammo count or positioning.",
<<<<<<< HEAD
      price: 1775.0,
      stock: 14,
      imageUrl:
        "https://cdn1.dotesports.com/wp-content/uploads/2021/05/07110811/image-4-2048x978.png",
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://cdn1.dotesports.com/wp-content/uploads/2021/05/07110811/image-4-2048x978.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Golden Gun',
      description:
        "The Golden Gun is the signature weapon of killer assassin Francisco Scaramanga. It first appeared as the titular weapon in Ian Fleming's posthumously published 1965 novel, The Man with the Golden Gun. In the novel it is merely a gold-plated .45-calibre revolver. In the 1974 film adaptation, the weapon is a custom-built, single-shot pistol assembled from four seemingly innocuous golden objects: a pen, a lighter, a cigarette case and a cufflink.",
      price: 250000.0,
      stock: 20,
      imageUrl:
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/jamesbond/images/5/52/Scaramanga%27s_Golden_Gun.jpg",
=======
        'https://static.wikia.nocookie.net/jamesbond/images/5/52/Scaramanga%27s_Golden_Gun.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Portal Gun',
      description:
<<<<<<< HEAD
        "The Aperture Science Handheld Portal Device, originally marketed in the 1950s as an Aperture Science Portable Quantum Tunneling Device, also commonly known as a Portal Gun or by its acronym, ASHPD, is an experimental tool used to create two portals through which objects can pass.",
      price: 10022.67,
      stock: 45,
      imageUrl: "https://i1.theportalwiki.net/img/d/db/Portal_PortalGun.png",
=======
        'The Aperture Science Handheld Portal Device, originally marketed in the 1950s as an Aperture Science Portable Quantum Tunneling Device, also commonly known as a Portal Gun or by its acronym, ASHPD, is an experimental tool used to create two portals through which objects can pass.',
      price: 20000.0,
      stock: 20,
      imageUrl: 'https://i1.theportalwiki.net/img/d/db/Portal_PortalGun.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Mark 2 Lancer',
      description:
        "The Mark 2 Lancer Assault Rifle was the Coalition of Ordered Governments' current standard-issue assault rifle for Gears fighting on the front lines. The signature weapon of the COG, the Lancer possessed a fully automatic mode of fire and the iconic Chainsaw Bayonet attachment for melee combat, despite the fact that the chainsaw was originally for utility purposes.",
      price: 20000.0,
<<<<<<< HEAD
      stock: 6,
      imageUrl:
        "https://static.wikia.nocookie.net/gearsofwar/images/a/a9/Gears_4_Lancer_Mk2.png",
    }),
    Product.create({
      name: "Poke Ball (10 in pack plus 1 premier ball)",
=======
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/gearsofwar/images/a/a9/Gears_4_Lancer_Mk2.png',
    }),
    Product.create({
      name: 'Poke Ball',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
      description:
        "A type of item that is critical to a Trainer's quest, used for catching and storing Pokémon. Both a general term used to describe the various kinds as well as a specific term to refer to the most basic among these variations, Poké Balls are ubiquitous in the modern Pokémon world. Up to six Pokémon can be carried with a Trainer in Poké Balls, while more Poké Balls can be held in the Bag for later use. These six Pokémon in the Poké Balls can be attached to the user's belt for carrying them around.",
      price: 1000.0,
      stock: 50,
      imageUrl:
        'https://www.thewandcompany.com/wp-content/uploads/2020/11/pokeball-resting-on-table-1kx862px-768x662.jpg',
    }),
    Product.create({
      name: 'Blades Of Chaos',
      description:
        "The Blades of Chaos were forged at the darkest depths of the Underworld by Ares himself. They were imbued with fire, which allowed them to ignite with every attack that the user performed. The Blades' chains would stretch out for a set distance with each attack, allowing for fluid movement no matter who wielded them.",
<<<<<<< HEAD
      price: 2005.3,
      stock: 22,
      imageUrl:
        "https://cutewallpaper.org/22/blades-of-chaos-wallpapers/1597327190.jpg",
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://cutewallpaper.org/22/blades-of-chaos-wallpapers/1597327190.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Energy Sword',
      description:
<<<<<<< HEAD
        "The Energy Sword is the signature weapon of the Sangheili, and has been their weapon of nobility since its creation during one of their Ages of Discovery. Viewed as a holy weapon, the Sangheili pride themselves on their skills with it.",
      price: 2900.97,
      stock: 23,
      imageUrl:
        "https://m.media-amazon.com/images/I/71bsUNj+LVL._AC_SL1500_.jpg",
=======
        'The Energy Sword is the signature weapon of the Sangheili, and has been their weapon of nobility since its creation during one of their Ages of Discovery. Viewed as a holy weapon, the Sangheili pride themselves on their skills with it.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://m.media-amazon.com/images/I/71bsUNj+LVL._AC_SL1500_.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Hidden Blade',
      description:
        "Consisting of a blade that can be discreetly extended or retracted from a bracer or gauntlet, the Hidden Blade's portability and concealability complement the Assassins' trademark affinity for stealth and freerunning. It allowed an Assassin to eliminate a target while drawing virtually no attention to themselves, and the techniques developed for its use often ensure near-instantaneous death.",
      price: 2007.13,
      stock: 22,
      imageUrl:
        'https://store.ubi.com/on/demandware.static/-/Sites-masterCatalog/default/dwf0d1bc60/images/large/5e8b42185cdf9a12c868c875-2.jpg',
    }),
    Product.create({
      name: 'Blue Shell',
      description:
<<<<<<< HEAD
        "Its main objective has always remained the same: to utterly obliterate the front runner in the race. Because of their cruel and unforgiving nature, the Spiny Shell has become an infamous Item, feared by even most skilled kart-racers. So far, the Spiny Shell has been featured in every game since Mario Kart 64, causing huge amounts of chaos and unfairness.",
      price: 550.0,
      stock: 27,
      imageUrl:
        "https://static.wikia.nocookie.net/mariokart/images/b/b6/Spiny_Shell_-_Mario_Kart_Wii.png",
=======
        'Its main objective has always remained the same: to utterly obliterate the front runner in the race. Because of their cruel and unforgiving nature, the Spiny Shell has become an infamous Item, feared by even most skilled kart-racers. So far, the Spiny Shell has been featured in every game since Mario Kart 64, causing huge amounts of chaos and unfairness.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/mariokart/images/b/b6/Spiny_Shell_-_Mario_Kart_Wii.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Master Sword',
      description:
        "The Master Sword was originally crafted by the goddess Hylia as the Goddess Sword, and was later forged into the Master Sword by the Goddess's chosen hero and its spirit, Fi, who bathed it in the three Sacred Flames located across the land that would become the Kingdom of Hyrule. Din's Flame in particular imbued the sword with the Power to Repel Evil, a power augmented after the Sword received the blessing of Zelda, which transformed the blade into the true Master Sword. Although not always, it is the only weapon that can defeat Ganon in the games it appears in.",
      price: 123123.0,
      stock: 20,
      imageUrl:
<<<<<<< HEAD
        "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6d/TWWHD_Master_Sword_Model.png",
=======
        'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6d/TWWHD_Master_Sword_Model.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Cerebal Bore',
      description:
        "It is a weapon of unknown origin that consists of a homing projectile capable of latching onto its victim's heads, killing them by drilling into their skulls and exploding when they reach the brain.",
<<<<<<< HEAD
      price: 95000.0,
      stock: 29,
      imageUrl:
        "https://us.v-cdn.net/5021068/uploads/editor/2i/2nkki26snskc.jpg",
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://us.v-cdn.net/5021068/uploads/editor/2i/2nkki26snskc.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Yoru',
      description:
<<<<<<< HEAD
        "Yoru is one of the strongest swords in the world, ranked as one of the 12 Supreme Grade swords. It is a Black Blade (黒刀 Kokutō?) that is currently owned by Dracule Mihawk, the Strongest Swordsman in the World.",
      price: 78999.0,
      stock: 12,
      imageUrl:
        "https://static.wikia.nocookie.net/onepiece/images/c/c0/Yoru_Infobox.png",
=======
        'Yoru is one of the strongest swords in the world, ranked as one of the 12 Supreme Grade swords. It is a Black Blade (黒刀 Kokutō?) that is currently owned by Dracule Mihawk, the Strongest Swordsman in the World.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/onepiece/images/c/c0/Yoru_Infobox.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: "Wolfwood's Punisher",
      description:
        "Wolfwood's Punisher has one machine gun in the front and a rocket launcher in the back. I÷t shows that the side arms are the storage for the machine gun's bullets.",
<<<<<<< HEAD
      price: 55555.0,
      stock: 24,
      imageUrl: "https://i.redd.it/fujhbwbvpwe11.jpg",
=======
      price: 20000.0,
      stock: 20,
      imageUrl: 'https://i.redd.it/fujhbwbvpwe11.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Death Note',
      description:
<<<<<<< HEAD
        "The purpose of the Death Note is to take human life, thereby increasing the lifespan of the Shinigami who uses it. There are many rules governing how the Death Note can be used, though the most pivotal rule is that the human whose name is written in this note shall die. The King of Death is apparently the one that makes and controls the rules of the Death Note, where he is able to make new rules as he sees fit.",
      price: 12500.0,
      stock: 28,
      imageUrl:
        "https://static.wikia.nocookie.net/deathnote/images/c/c3/Othellonia_art_Death_Note.png",
=======
        'The purpose of the Death Note is to take human life, thereby increasing the lifespan of the Shinigami who uses it. There are many rules governing how the Death Note can be used, though the most pivotal rule is that the human whose name is written in this note shall die. The King of Death is apparently the one that makes and controls the rules of the Death Note, where he is able to make new rules as he sees fit.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/deathnote/images/c/c3/Othellonia_art_Death_Note.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Asta Demon-Slayer Sword',
      description:
<<<<<<< HEAD
        "This sword can cut and reflect magic off its surface. Asta can summon this sword by its name and fly on top of it. He can use Anti-Magic to extend the swords length and width and create long-range attacks. Remote attacks are also possible with this sword.",
      price: 4999.99,
      stock: 8,
      imageUrl:
        "https://animehunch.com/wp-content/uploads/2020/12/Demon-Slayer-Sword-edited.jpg",
=======
        'This sword can cut and reflect magic off its surface. Asta can summon this sword by its name and fly on top of it. He can use Anti-Magic to extend the swords length and width and create long-range attacks. Remote attacks are also possible with this sword.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://animehunch.com/wp-content/uploads/2020/12/Demon-Slayer-Sword-edited.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Lostvayne',
      description:
        "Lostvayne's special ability that allows Meliodas to create up to four or six clones of himself. The clones only retain a fraction of the original's power, with one clone having half the power level of the original. The halved power level is divided among each additional clone.",
<<<<<<< HEAD
      price: 13.95,
      stock: 6,
      imageUrl:
        "https://static.wikia.nocookie.net/nanatsu-no-taizai/images/5/54/Lostvayne.png",
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/nanatsu-no-taizai/images/5/54/Lostvayne.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'RX-78-02 Gundam',
      description:
        "The RX-78-02 utilizes its wide array of portable weapons such as its beam rifle and hyper bazooka. It also has fixed weaponry such as two shoulder magnums on the left shoulder, a gatling gun on the right shoulder, and a forearm gatling gun on its left arm. It's also possible to swap a beam saber with an optional armament known as the shoulder cannon.",
<<<<<<< HEAD
      price: 78.02,
      stock: 5,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0727/8355/products/bans62033_0_900x900.jpg",
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0727/8355/products/bans62033_0_900x900.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Dragon Slayer',
      description:
        "Given the sword's incredible size and weight, the Dragon Slayer functions more like a bladed maul than an actual sword, though Guts is more than capable of using it to cut through various targets. The sheer momentum of Guts swinging it can tear anyone caught in the attack impact into pieces with one swing; this often is applied to more than one enemy at once, cleaving through multiple foes in a single swing.",
<<<<<<< HEAD
      price: 101010.1,
      stock: 28,
      imageUrl:
        "https://static.wikia.nocookie.net/berserk/images/c/c8/Manga_E1.png",
    }),
    Product.create({
      name: "Samehada",
      description:
        "Samehada is one of the seven deadly mist swords, and arguably the strongest one. It looks like something you would get in a carnival from Hell, as its a short knife covered with scales and with a gapping mount on its end. The sword is sentient and can drain the chakra of anyone it touches, alongside aiding the wielder in battle.",
      price: 33333.33,
      stock: 18,
      imageUrl:
        "https://static.fandomspot.com/images/12/11207/09-samehada-naruto-shippuden-anime.jpg",
    }),
    Product.create({
      name: "RYNO",
      description:
        "The RYNO functions similarly throughout all of its appearances, though it does go through several cosmetic iterations. The RYNO targets multiple enemies in front of Ratchet, and once it fires, a missile hits each. The missiles each do major amounts of damage, meaning they are likely to destroy most enemies in front of Ratchet, regardless of their size.",
      price: 9999999.0,
      stock: 6,
      imageUrl:
        "https://static.wikia.nocookie.net/rcw/images/2/2d/RYNO_render.png",
    }),
    Product.create({
      name: "Scissor Blade",
      description:
        "But if you really think about it, the Scissor Blade is just an advanced version. Not only can it cut through anything and never breaks but this scissor blade can also change its size and cut through life fiber: a material thats virtually indestructible otherwise.Plus, the Scissor Blade has just seen a lot more use. And thus has shown a lot more feats.",
      price: 8080808.0,
      stock: 22,
      imageUrl:
        "https://static.fandomspot.com/images/12/11207/07-the-scissor-blade-kill-la-kill-anime.jpg",
    }),
    Product.create({
      name: "3D Maneuver Gear",
      description:
        "The simplest move possible with the 3DMG is simply aiming and firing the grapple hooks at an object and then activating the gas mechanism to reel oneself toward said object. They can then disconnect the hook and continue moving forward.",
      price: 33333.0,
      stock: 10,
      imageUrl:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/06/THREE-DIMENSIONAL-MANEUVER-GEAR.jpg",
    }),
    Product.create({
      name: "VOLTRON",
      description:
        "Voltron isn't called the Defender of the Universe because it's weak. When combined from its five lion ships into Voltron, it becomes one of anime's deadliest machines. Even when it isn't combined, the individual lion ships are incredibly powerful weapons in their own right, thanks to the skills of their pilots and the weaponry they have available to them.",
      price: 888888.0,
      stock: 23,
      imageUrl:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/06/Voltron.jpg",
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/berserk/images/c/c8/Manga_E1.png',
    }),
    Product.create({
      name: 'Samehada',
      description:
        'Samehada is one of the seven deadly mist swords, and arguably the strongest one. It looks like something you would get in a carnival from Hell, as its a short knife covered with scales and with a gapping mount on its end. The sword is sentient and can drain the chakra of anyone it touches, alongside aiding the wielder in battle.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.fandomspot.com/images/12/11207/09-samehada-naruto-shippuden-anime.jpg',
    }),
    Product.create({
      name: 'RYNO',
      description:
        'The RYNO functions similarly throughout all of its appearances, though it does go through several cosmetic iterations. The RYNO targets multiple enemies in front of Ratchet, and once it fires, a missile hits each. The missiles each do major amounts of damage, meaning they are likely to destroy most enemies in front of Ratchet, regardless of their size.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/rcw/images/2/2d/RYNO_render.png',
    }),
    Product.create({
      name: 'Scissor Blade',
      description:
        'But if you really think about it, the Scissor Blade is just an advanced version. Not only can it cut through anything and never breaks but this scissor blade can also change its size and cut through life fiber: a material thats virtually indestructible otherwise.Plus, the Scissor Blade has just seen a lot more use. And thus has shown a lot more feats.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.fandomspot.com/images/12/11207/07-the-scissor-blade-kill-la-kill-anime.jpg',
    }),
    Product.create({
      name: '3D Maneuver Gear',
      description:
        'The simplest move possible with the 3DMG is simply aiming and firing the grapple hooks at an object and then activating the gas mechanism to reel oneself toward said object. They can then disconnect the hook and continue moving forward.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/06/THREE-DIMENSIONAL-MANEUVER-GEAR.jpg',
    }),
    Product.create({
      name: 'VOLTRON',
      description:
        "Voltron isn't called the Defender of the Universe because it's weak. When combined from its five lion ships into Voltron, it becomes one of anime's deadliest machines. Even when it isn't combined, the individual lion ships are incredibly powerful weapons in their own right, thanks to the skills of their pilots and the weaponry they have available to them.",
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/06/Voltron.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'X-Gloves',
      description:
<<<<<<< HEAD
        "They are a pair of black, metal-clad gloves. The gloves are surrounded by Dying Will Flames, which can be ignited without the use of the Dying Will Bullet. Tsuna is also able to use the Dying Will Flame to propel himself through the air at high speeds with great maneuverability.",
      price: 10000.0,
      stock: 7,
      imageUrl:
        "https://static.wikia.nocookie.net/reborn/images/f/fb/X-Gloves_Version_V_R.png",
=======
        'They are a pair of black, metal-clad gloves. The gloves are surrounded by Dying Will Flames, which can be ignited without the use of the Dying Will Bullet. Tsuna is also able to use the Dying Will Flame to propel himself through the air at high speeds with great maneuverability.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/reborn/images/f/fb/X-Gloves_Version_V_R.png',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Tessaiga',
      description:
<<<<<<< HEAD
        "The Tessaiga can absorb the powers and abilities of any material, substance, or form of demonic energy it comes in contact with, making itself more powerful and granting it new abilities in the process.",
      price: 171000.17,
      stock: 30,
      imageUrl:
        "https://static.wikia.nocookie.net/inuyasha/images/b/b6/Inuyasha_and_Tessaiga_Sword.jpg",
=======
        'The Tessaiga can absorb the powers and abilities of any material, substance, or form of demonic energy it comes in contact with, making itself more powerful and granting it new abilities in the process.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/inuyasha/images/b/b6/Inuyasha_and_Tessaiga_Sword.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
    }),
    Product.create({
      name: 'Zangetsu',
      description:
        "Ichigo obtained the shikai form through his training with Urahara. In this form, Zangetsu takes on the appearance of an oversize, black cleaver. It's been described as looking like an unfinished blade, and has never returned to the sealed form after it was released.",
<<<<<<< HEAD
      price: 161162.0,
      stock: 19,
      imageUrl:
        "https://content.instructables.com/ORIG/FMB/HCJX/IR5MVO35/FMBHCJXIR5MVO35.jpg",
    }),
    Product.create({
      name: "POLTERGUST 3000",
      description:
        "The Poltergust device is equipped alongside a vacuum, a nozzle, and a flashlight to hunt down and capture certain ghosts, such as the Boos. The player would stun and flash a ghost with the flashlight, and then they will have a chance to suck away. It has the ability and element, with help from special Elemental Medals, to harness the elements of three things: fire; ice; and water. This helps Luigi to fight certain and needed ghosts.",
      price: 3000.0,
      stock: 22,
      imageUrl:
        "https://static.wikia.nocookie.net/mansionluigi/images/1/1f/Poltergust_3000.png",
    }),
    Product.create({
      name: "Mega Buster",
      description:
        "This Mega Buster is an ambidextrous arm cannon built by Dr. Light. It fires Solar Bullets (ソーラーブリット), energy bullets made of highly compressed solar energy, the same energy source used by Mega Man. It is a powerful weapon capable of puncturing steel and destroying boulders.",
      price: 2088.88,
      stock: 7,
      imageUrl:
        "https://p.turbosquid.com/ts-thumb/7k/el1mvH/Tj/mb4render1/png/1614368607/1920x1080/fit_q99/88f4581ae79793bd6ab5b7281c4cb077558dd3b6/mb4render1.jpg",
    }),
    Product.create({
      name: "Devil Fruit (Mera Mera no Mi)",
      description:
        "The Mera Mera no Mi is a Logia-type Devil Fruit that allows the user to create, control, and transform into fire at will.[4] It was eaten by Sabo, and previously by Portgas D. Ace.",
      price: 550000000.0,
      stock: 10,
      imageUrl:
        "https://static.wikia.nocookie.net/onepiece/images/8/8c/Mera_Mera_no_Mi_Infobox.png",
    }),
    Product.create({
      name: "Buzz Lightyear",
      description:
        "Buzz Lightyear is a plastic bilingual spaceman action figure with wings, a laser, and a helmet, who accompanies Woody on his adventures in each movie. Buzz Lightyear's often repeated catchphrase is To infinity and beyond!.",
      price: 500.0,
      stock: 21,
      imageUrl:
        "https://static.wikia.nocookie.net/pixar/images/5/55/Buzz_Lightyear_ts4.png",
    }),
    Product.create({
      name: "WALL•E",
      description:
        "WALL•E (Waste Allocation Load Lifter: Earth Class) In the year 2110, rising toxicity levels make life unsustainable on Earth. After all the humans leave Earth aboard giant spaceships, millions of WALL•E robots and a lesser amount of mobile incinerators are left behind to clean up the dirty planet. But after 700 years, the incinerators and all but one WALL•E robot have failed. This last operational WALL•E numbered 62,675 is still hard at work, blissfully unaware of the futility of his situation. During this time he befriends a cockroach (whom he names Hal). Though he continues obeying his directive to compact trash, as he develops curiosity, he begins saving odds and ends that fascinate him. He hides out from sandstorms and rain in his truck, spending his time sorting his collection, the pride of which is an old VHS copy of the musical Hello, Dolly!. To keep himself going, he has taken to salvaging parts from his inoperative counterparts.",
      price: 62675.0,
      stock: 15,
      imageUrl:
        "https://static.wikia.nocookie.net/pixar/images/d/de/Wall%E2%80%A2e_clipped_rev_1.png",
    }),
    Product.create({
      name: "Sword of Shan Yu",
      description:
        "The Sword of Shan Yu is a weapon used by Shan Yu, leader of the Hun army, in the invasion of China. It is a serrated, jagged jian with a ring pommel and a long grip that can be held with one or two hands. Shan Yu is first seen using the sword to menace an Imperial scout. After climbing a tree for a lay of the land, he uses his sword to cut the top of the tree for a better view, before his falcon, Hayabusa, presents him with a doll from a village in the mountains.",
      price: 9999.99,
      stock: 20,
      imageUrl:
        "https://static.wikia.nocookie.net/the-scar-chronicles/images/2/26/Mulan_and_Shan-Yu.png",
    }),
    Product.create({
      name: "Genie's Lamp",
      description:
        "Genie's lamp (alternatively referred to as the Magic Lamp or Aladdin's lamp) is a magical oil lamp featured in Aladdin, whose owner has the ability to summon and temporarily control a wish-granting Genie with cosmic power. As it contains an all-powerful servant, the lamp has been coveted by many for thousands of years. The lamp has existed for millennia, though its origins are unknown. As one of the most powerful objects in the universe, the lamp was hidden deep within the Cave of Wonders, a cavern that could only be summoned by a golden scarab and entered by an individual known as the Diamond in the Rough.",
      price: 9999999.99,
      stock: 1,
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/d/d2/Aladdin-disneyscreencaps.com-9865.jpg",
    }),
    Product.create({
      name: "Will Smith",
      description:
        "He has a slap that can break the sound barrier, more powerful than bullets, just don't talk about his wife",
      price: 9300000000.0,
      stock: 1,
      imageUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F03%2F28%2Fwill-smith66-2000.jpg",
    }),
    Product.create({
      name: "Iron Man Suit",
      description:
        "Stark's suits are each unique in design and purpose. They are made of incredibly-strong, fictional materials bolstered by a force field. Every suit has a self-contained environment, assorted onboard weapons systems, enhanced strength, flight, and various communications arrays and sensors, such as radar and radio. Furthermore, they typically have multiple power sources including a secondary solar energy collection function in the event that conventional recharging methods are unavailable. Earlier versions of the armor could also fold virtually flat, allowing Stark to store them in his bullet-proof briefcase.The defining abilities of Stark's armor are the jets situated in the boots and the repulsors situated in the gauntlets. The repulsors originated as a hand attachment, but have since become the armor's most important standard armament. They have been referred to as a force beam. Another defining trait is the chest-mounted uni-beam, also known as the variobeam, pentabeam, tri-beam, and chest RT, or chest repulsor transmitter. Originally a spotlight and proton beam, it has grown to accommodate a number of other weapons, primarily light and force-based.",
      price: 500000000.0,
      stock: 20,
      imageUrl:
        "https://terrigen-cdn-dev.marvel.com/content/prod/2x/ironm7.jpg",
    }),
    Product.create({
      name: "Ten Rings",
      description:
        "The Ten Rings are a set of ten hung gar iron rings of unknown ancient origin, that provide the user a series of mystical powers. They were acquired by Xu Wenwu during the Middle Ages, which granted him absolute power, and provided the name and the symbol for his army known as the Ten Rings.",
      price: 1000000.0,
      stock: 10,
      imageUrl:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cf/Ten_Rings.png",
    }),
    Product.create({
      name: "Funkfreed",
      description:
        "Funkfreed is Spandam's sword, a unique weapon that ate the Zou Zou no Mi and became an Elephant Sword (象剣 Zōken?). As such, he also serves as a pet and unofficial bodyguard for Spandam, compensating his master's physical slightness.",
      price: 54545.45,
      stock: 200,
      imageUrl:
        "https://static.wikia.nocookie.net/onepiece/images/c/c1/Funkfreed_Anime_Infobox.png",
    }),
    Product.create({
      name: "Ray Gun",
      description:
        "The Ray Gun is a wonder weapon featured in Call of Duty: World at War, Call of Duty: Black Ops, Call of Duty: Black Ops II, Call of Duty Online, Call of Duty: Black Ops III, Call of Duty: Black Ops 4, Call of Duty: Mobile, Call of Duty: Black Ops Cold War and Call of Duty: Vanguard. It is one of the most iconic Zombies features in the game, due to the fact that it appears in every Zombies map in the Aether story and is the first wonder weapon created by the illustrious Group 935. It also has many different effects and animations depending on the map being played. A direct successor to the Ray Gun, known as the Ray Gun Mark II, appears in every Zombies map of Call of Duty: Black Ops II if the player purchases the Vengeance downloadable content. Another successor to the Ray Gun is the Ray Gun Mark III, seen in the right hand of the GKZ-45 Mk3 on the Call of Duty: Black Ops III Zombies map Gorod Krovi.",
      price: 2000000.0,
      stock: 5,
      imageUrl:
        "https://static.wikia.nocookie.net/callofduty/images/0/06/Ray_Gun_Menu_Icon_BOII.png",
    }),
  ]);

  const orders = await Promise.all([
    Order.create({
      totalPrice: 500,
      userId: 1,
    }),
    Order.create({
      totalPrice: 1000000,
      userId: 1,
=======
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://content.instructables.com/ORIG/FMB/HCJX/IR5MVO35/FMBHCJXIR5MVO35.jpg',
    }),
    Product.create({
      name: 'POLTERGUST 3000',
      description:
        'The Poltergust device is equipped alongside a vacuum, a nozzle, and a flashlight to hunt down and capture certain ghosts, such as the Boos. The player would stun and flash a ghost with the flashlight, and then they will have a chance to suck away. It has the ability and element, with help from special Elemental Medals, to harness the elements of three things: fire; ice; and water. This helps Luigi to fight certain and needed ghosts.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://static.wikia.nocookie.net/mansionluigi/images/1/1f/Poltergust_3000.png',
    }),
    Product.create({
      name: 'Mega Buster',
      description:
        'This Mega Buster is an ambidextrous arm cannon built by Dr. Light. It fires Solar Bullets (ソーラーブリット), energy bullets made of highly compressed solar energy, the same energy source used by Mega Man. It is a powerful weapon capable of puncturing steel and destroying boulders.',
      price: 20000.0,
      stock: 20,
      imageUrl:
        'https://p.turbosquid.com/ts-thumb/7k/el1mvH/Tj/mb4render1/png/1614368607/1920x1080/fit_q99/88f4581ae79793bd6ab5b7281c4cb077558dd3b6/mb4render1.jpg',
>>>>>>> d337fd18656b8f5d37909a395c91920c4e50946b
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
