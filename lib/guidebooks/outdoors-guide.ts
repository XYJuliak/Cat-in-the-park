export type OutdoorsGuidebookCard = {
  id: string;
  name: string;
  number: number;
  guidebook: {
    text: string;
    keywords: string[];
    beware: string[];
  };
};

export const OUTDOORS_GUIDEBOOK: OutdoorsGuidebookCard[] = [
  {
    id: "fool",
    name: "The Fool",
    number: 0,
    guidebook: {
      text: `Great Smoky Mountains National Park is the most visited national park in the country. Thousands of people travel here each year to hike, camp, or drive the scenic Blue Ridge Parkway. For many, the Smokies are where they take their first steps on forest trails.

The Fool is the first card in the tarot deck, representing a novice about to start a journey, whether spiritual, emotional, or physical. They set out on the trail, learn from guides, obtain awareness, endure challenges, and emerge a more seasoned explorer.

Everyone begins each new undertaking—a first hike, a technical skills class, a new job—as a fool. But you gain knowledge from setbacks and mistakes. Each misstep offers wisdom to help you navigate the trail of life.

This is an exciting card. It means you have something new to look forward to: an adventure, a project, a relationship, or even a new idea. As you approach this fresh opportunity, try to keep an open mind and heart. Be curious, ask questions, and embrace your first steps on this new journey.`,
      keywords: ["Beginning", "fresh start", "spontaneity"],
      beware: ["Impulsiveness", "recklessness"],
    },
  },
  {
    id: "magician",
    name: "The Magician",
    number: 1,
    guidebook: {
      text: `This card represents pure potential. Historically, the Magician harnesses Earth’s elements to create transformational energy—and Hawaii brings together earth, air, water, and fire like nowhere else. Anyone who has visited Waimea Canyon on the island of Kauai and gazed from its vistas at the mountains, forests, red earth, and crashing waves has felt the power this land imparts.

When you are in nature, whether a famous spot like Waimea or your own backyard, you can access its power to transform your daily life. Maybe you’re a frenzied parent, an employee stuck in a cubicle, or a stressed-out student. But when you step outside, you can change. You can get dirty, dress in grubby clothes, stop and examine tiny plants, and marvel at tall trees. You can build a fire at night, drink out of tin cups, stand in the rain, and sleep under the stars. Out in nature, you can become your more authentic self.

When you draw the Magician, you are presented with an opportunity to transform: Indoors or out, who do you want to be? Now is the time to imagine it.`,
      keywords: ["Metamorphosis", "creativity", "new ideas"],
      beware: ["Vulnerability", "illusions", "being taken advantage of"],
    },
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    number: 2,
    guidebook: {
      text: `The High Priestess embodies a person of any gender who is distinctly cool, perhaps aloof, and certainly in control. They are knowledgeable and willing to share but will make you work for their expertise.

Don’t flatter or flirt. No joking around. What the High Priestess appreciates is competent research, efficiency, and results. This card likely refers to a person of authority in your life—an instructor, your boss, or some kind of adviser. If you perform well, they will reward you richly. The card can also represent a time for you to “cool off.” Read the room and recognize if it’s time to be serious or it’s okay to be playful.

Kayaking in Alaska’s crystalline Glacier Bay can be an extraordinary experience, but it isn’t a place for careless antics. You need to be prepared, well-outfitted, aware of your surroundings, and fully in the moment. Know the forecast and tides, be bear-aware, and don’t get too close to icebergs or calving ice faces. Respect the icy waters and challenges of life, and you’ll be rewarded with awe-inspiring beauty and memories for a lifetime.`,
      keywords: ["Efficiency", "modesty", "tactfulness"],
      beware: ["Flamboyance", "showing off"],
    },
  },
  {
    id: "empress",
    name: "The Empress",
    number: 3,
    guidebook: {
      text: `The Empress embodies joy, the pure richness of life, and a desire to generously share love. She represents fertility and abundance, much like the flora and fauna that thrive in the verdant Olympic National Park.

The Hoh Rain Forest teems with life, thanks to the 140 inches of precipitation it receives each year. This lush ecosystem is in constant flux: a flowing cycle of birth, life, death, decomposition, fertilization, and rebirth. An explosion of life, every moss-covered nurse log is home to a complex array of tiny organisms; the old-growth tree canopy echoes with birdsong; and the forest shelters Roosevelt elk, black bear, river otters, and more.

When you draw the Empress, she points you toward nature, inviting you to enjoy its bounty and share it with others. Even a city park offers rich diversity and generous opportunities: a shared picnic, a walk hand in hand, fleeting insects and birds, and peaceful trees or flowers. Look for the variety of life all around you. This can also equate to sharing physical affection and the gifts of your time and companionship, which are priceless when shared with others.`,
      keywords: ["Abundance", "generosity", "pleasure", "creature comforts"],
      beware: ["Going overboard", "excess", "overly grandiose gestures"],
    },
  },
  {
    id: "emperor",
    name: "The Emperor",
    number: 4,
    guidebook: {
      text: `There are places in nature where you can be spontaneous and silly and not get into too much trouble: a sandy beach, say, or a grassy meadow. And then there are places where one misstep can have dire consequences—El Capitan in Yosemite National Park for example.

You need to approach this granite monolith with the same reverence you would a true emperor. If you try to exert your own power over this hard, vertical place, you will lose.

The Emperor is not to be trifled with; he represents someone who expects respect, deference, and obedience. He asks if you are behaving irresponsibly. In order to climb up, you may need to grow up, take responsibility, and own your actions. If you are an authority figure yourself, consider easing up on your followers. Practice benevolence, and give others a break.

Creating and maintaining order may not always be pleasant work, but without it, you can lose your footing. Maintain balance, and look at what areas of your life may benefit from an organizational overhaul.`,
      keywords: ["Responsibility", "order", "following rules"],
      beware: ["Heedlessness", "irresponsibility", "chaos"],
    },
  },
  {
    id: "hierophant",
    name: "The Hierophant",
    number: 5,
    guidebook: {
      text: `The word hierophant comes from the Greek word hieros, meaning “sacred” or “holy,” and phainein, meaning “to show or reveal.” A hierophant is someone who reveals sacred knowledge: a keeper of secrets or traditions, a spiritual teacher.

Steadfast and ancient, the giant trees found in Redwood National and State Parks are witnesses to history’s secrets and visitors’ traditions. The tall, straight trunks of coast redwoods and Douglas firs form nature’s cathedral, a seemingly sacred space filtered with sunlight, rooted in connections, and pulsing with understanding.

Walking among these groves can make you feel small and insignificant, and at the same time fill you with awe. These titans have weathered centuries of storms and wildfires, sheltered tens of thousands of animals, and watched humans endlessly pass through. Their whispering canopies have stories to share. What can you learn from being quiet and listening to these trees? This card reminds you to open your spirit and learn from others: let the trees be your teachers.`,
      keywords: ["Tradition", "spiritual teachers"],
      beware: ["Spiritual or emotional stagnation", "narrow-mindedness"],
    },
  },
  {
    id: "lovers",
    name: "The Lovers",
    number: 6,
    guidebook: {
      text: `One of the world’s most famous waterfalls is Niagara Falls, shared by the United States and Canada. While it is famed as a tourist destination for lovers, it is also a spectacularly powerful natural wonder. In the morning, you can scramble over boulders and contemplate the immense force of the water from the Whirlpool Rapids Trail, and in the afternoon, you can leisurely drink coffee and shop for trinkets or even get married in one of the many wedding chapels in town!

The Lovers card represents Niagara’s marriage of domestic playfulness and wild force. Any relationship, romantic or otherwise, requires work and compromise. Ideally, you complement each other, a yin and yang, a push and pull—a cozy, shop-lined street and a thundering, dangerous cataract!

This card shows up in a reading when love is on the mind. Perhaps a friendship is about to turn into something more, or a new relationship is starting to bloom. It can remind you to practice some self-care, or to share your love with the larger world. It can also be a reminder to consider the paradoxical nature of relationships. Spending some time apart can bring you closer together, as it allows each individual to explore and learn independently.`,
      keywords: ["New love", "partnership", "opposites attracting"],
      beware: ["Being tied down", "need for freedom"],
    },
  },
  {
    id: "chariot",
    name: "The Chariot",
    number: 7,
    guidebook: {
      text: `Denali National Park and Preserve is a vast expanse of taiga forest, alpine tundra, and ragged mountains in the heart of Alaska. While it is most famous for its stunning wildlife and the highest peak in North America, it is also the only park where, in winter, rangers patrol by dogsled, a tradition started by the first rangers in the 1920s. As with all chariots, this modern-day version relies on humans harnessing the power and energy of animals. Successfully mushing a team of sled dogs, however, requires you to earn the respect of the dogs; it’s a close relationship based on subtle movements, practiced vocal calls, and mutual trust. Without that trust, the dogs might take off on their own, leaving the musher flailing in the snow.

The Chariot assures that you are on a path to success, arriving in style at your destination. But you must remember that your achievement is only possible because of those who support you. Enjoy your success, but not at the expense of others. They are perfectly able to dig in their heels and stop you in your tracks at any moment. Be sure to give credit where credit is due, and always treat your fellow travelers with kindness.`,
      keywords: ["Success", "achievement", "respect"],
      beware: ["Overconfidence", "boastfulness"],
    },
  },
  {
    id: "strength",
    name: "Strength",
    number: 8,
    guidebook: {
      text: `Grand Teton National Park is a glaciated wonder of abundant wetlands, windswept forests and sagebrush, and rugged alpine terrain. More than sixty species of mammals thrive in the shadow of the Teton Range, none more elusive and adaptable than the mountain lion.

While the Strength card often depicts a person taming a lion, why not instead use your strength to live peacefully alongside nature? It can be more challenging to live with a perceived fear or danger than to try to dominate it or turn away from it. Mountain lions, also known as cougars or pumas, are large predators, feared by ranchers and hikers alike. Yet they are native to the Tetons and critical to its healthy ecosystem. Females tend to their young for more than a year, and encounters with humans in the wild are rare.

Think about what strength means to you. Is it physical? Emotional or spiritual? How can you use your strengths to help others or steward nature? Stepping out of your comfort zone, whether to help someone else or to face your fears, is a powerful and admirable show of strength.`,
      keywords: ["Empathy", "fortitude", "steadfastness"],
      beware: ["Recklessness", "trying to impress"],
    },
  },
  {
    id: "hermit",
    name: "The Hermit",
    number: 9,
    guidebook: {
      text: `The Hermit suggests that it may be time for a brief withdrawal from society, a respite from drama, a chance to recharge your mind and body—and there is no better place to accomplish this than out in nature.

Voyageurs National Park is a transitional landscape, caught between the wild and the developed, the hardwood forests and the boreal zone, and in its northern latitudes, you can experience the aurora borealis, also known as the northern lights.

Gazing at this shimmering display offers an opportunity to reset your soul and meditate on the skyscape: How does the charged energy of the aurora make you feel? How might your ancestors have felt experiencing this hundreds of years ago? Are the lights the spirits of the deceased? A fox running so fast that his tail sets the sky on fire? The stories and legends tied to our landscapes are endlessly inspiring.

As you engage with the outdoors, take time to reflect on the mythology of the places you visit. Meditating on these ancient stories can illuminate tidbits of wisdom that have intrigued humans for centuries. Consider why such stories exist and what you can learn from them to enrich your life.`,
      keywords: ["Solitude", "reflection", "learning from the past"],
      beware: ["Stagnation", "lethargy"],
    },
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    number: 10,
    guidebook: {
      text: `With the Wheel of Fortune, anything could happen; this card encourages you to recognize the role chance plays in your life.

Yellowstone National Park is one of the most dynamic landscapes on the planet. Earth, air, water, and fire are on vivid display, in the form of stunning mountain vistas, crashing waterfalls, abundant wildlife, colorful thermal pools, and the world’s densest concentration of hot springs and geysers.

The Wheel of Fortune signifies the elements of luck and chance. At any moment, you could hit the jackpot, like arriving at Old Faithful just before it erupts. Or, your luck could run out, leaving you stuck in a two-hour bison traffic jam!

Planning for contingencies gives you the best odds if something unforeseen wanders into your path. This means bringing your rain gear and your sunblock. Packing your sunhat and your wool cap. Carrying your hiking poles and a deck of cards. If you have a backup plan or two, the chances of having your day ruined by the unexpected will be lower.

While leaving life to chance and winging it may seem exciting at first, for the best shot at success, thorough planning is key.`,
      keywords: ["Flexibility", "preparedness", "being able to pivot"],
      beware: ["Throwing caution to the wind", "recklessness"],
    },
  },
  {
    id: "justice",
    name: "Justice",
    number: 11,
    guidebook: {
      text: `Imagine you’re hiking in the Chihuahuan Desert Ecoregion, passing by agave and yucca in this epicenter of plant biodiversity, and you come face-to-face with Big Bend National Park’s Balanced Rock. This Texas icon is a symbol of perseverance and longevity that has intrigued humans for centuries. You might see it as an impartial observer in its environment. The balancing rock offers no opinion—the rock simply is.

As you grapple with making decisions that are fair and balanced, either in your personal life or for larger environmental or social purposes, strive to remain impartial while you collect information, then move forward when you have observed all sides of the issue. If you find that you are making choices to make yourself look good, step back and simply ask yourself, Whose interests are being served?

When you draw the Justice card, you may be making a big decision or facing a tough choice. Take the time to examine all sides, then settle on a direction. Be like the rock: keep your balance, but be willing to budge when you learn new information.`,
      keywords: ["Self-examination", "impartiality", "fairness"],
      beware: ["Self-righteousness", "imbalance"],
    },
  },
  {
    id: "hanged-man",
    name: "The Hanged Man",
    number: 12,
    guidebook: {
      text: `The Hanged Man delivers a moment to recharge and gather strength if you’re feeling stuck or facing a challenging situation.

Ohio’s Cuyahoga Valley National Park is close to two urban centers, but stepping into the park can make you feel far away from it all, especially if you’re near one of its one hundred waterfalls. It’s the perfect place for relaxing in a hammock, the sound of the roaring water drowning out all the stress and anxiety in your head.

The Hanged Man has a reputation and a name that can seem scary. However, the important thing to know is that he hung himself up voluntarily, like you might hang upside down for a yoga inversion. The Hanged Man asks you to disengage from society for a brief respite. Rest is something everyone needs once in a while, and it can help you gain a new perspective on a situation.

The Hanged Man is a call to self-care. Embrace it. Take a time-out and turn off your phone. Go for a walk, listen to the birds, do a little forest bathing, soak up the sounds of nature. Do something for yourself that is quiet. It’s not a time for active adventure or socialization, but a time for meditation and solace.`,
      keywords: ["Self-care", "contemplation", "withdrawal"],
      beware: ["Stagnation", "sluggishness"],
    },
  },
  {
    id: "death",
    name: "Death",
    number: 13,
    guidebook: {
      text: `Death is probably the most feared card in the tarot, but mistakenly so. In tarot, Death almost never means physical death, but transformation. It means death to an outdated way of thinking or an unhealthy habit. It is time to make a change.

California’s Death Valley National Park is a landscape of extremely high temperatures and drought. It often seems inhospitable. But despite these harsh conditions, it holds the seeds for transformation. When the spring rains arrive, millions of flowers bloom all at once, creating a lush carpet of color as far as the eye can see. And if you have binoculars or know how to look for animal tracks, you’ll also see this land is teeming with wildlife. Over time, the desert’s plants and animals have evolved and adapted to thrive in their environment.

If you draw this card, consider whether you may be stuck in a rut or resistant to trying new things. There may be a habit you need to break or something (or someone) you’d be better off without. Dust off your maps, your guidebooks, and your own internal compass, and give yourself something to look forward to by committing to trying a new adventure this year. When you embrace transformation, you’ll be surprised by how much you can bloom.`,
      keywords: ["Transformation", "release", "embracing change"],
      beware: ["Refusal to change", "stubbornness"],
    },
  },
  {
    id: "temperance",
    name: "Temperance",
    number: 14,
    guidebook: {
      text: `Tempering is a strengthening process used in metalwork: metal is heated to a high temperature and then allowed to cool. It involves the dual powers of hot and cold to improve the metal. It’s also a term used in cooking when mixing hot and cold liquids to bring them to the same temperature. The meaning to look for here is balance.

Zion National Park is home to a uniquely beautiful yet intimidating ridgeline trail called Angels Landing. The Methodist minister who named the summit deemed it so precipitous that only angels could land there. Today, portions of the trail are fortified with a steel chain handrail, and the hike has become one of the most popular attractions in the park. Even with the handrail, however, Angels Landing requires 100 percent of your attention.

Are you considering an ambitious goal? Remember that maintaining physical and mental balance is of the utmost importance when attempting difficult endeavors. Take your training seriously so you can be flexible and ready to act as you embark on new paths.`,
      keywords: ["Stability", "flexibility", "agility of mind and body"],
      beware: ["Inflexibility", "imbalance", "lack of forward thinking"],
    },
  },
  {
    id: "devil",
    name: "The Devil",
    number: 15,
    guidebook: {
      text: `The Devil has a reputation for being a scary card, but it mainly deals with how you handle temptation.

Carlsbad Caverns National Park is fascinating and extraordinarily delicate. Some of the formations seem to have charismatic personalities.

The Rock of Ages for example, looks like a giant or a cyclops: big-bellied, with a frowning mouth and spiky beard. In the darkness of the caverns, the Rock of Ages can be alarming, and make you fear you might wake the giant from its slumber!

Cave systems are like terrariums, allowing for the growth of speleothem structures, including cave crystals, pearls, and stalactites. If you aren’t careful, your presence can impact these areas that have been largely undisturbed for millennia. Even the tiniest human litter, clothing fuzz, or oil from your fingertip is enough to damage features that have taken eons to grow. You’ll want to use all the Leave No Trace principles here, and your most cautious judgment, to ensure these places stay intact for future research and visitors.

Indoors or out, if you’re feeling tempted to get away with something that doesn’t appear to be a big deal, now is the time to check in with your surroundings and reconsider the potential consequences. Do you really want to risk waking up that ogre?`,
      keywords: ["Resisting temptation", "stay the path"],
      beware: ["Obsession", "impulsiveness", "shortcuts"],
    },
  },
  {
    id: "tower",
    name: "The Tower",
    number: 16,
    guidebook: {
      text: `Utah’s Castleton Tower near Moab is a coveted destination for technical climbers, photographers, and sightseers. The nearly four-hundred-foot sandstone spire looms on the horizon—an iconic image of the American West.

For all the popularity of this place, however, it’s good to remember that Castleton Tower is an environment that’s prone to sudden and extreme changes. Temperatures can quickly soar to over a hundred degrees, and rain can make the tower off-limits to climbers, as wet sandstone becomes too fragile. Should you need help, there are very few access points for search and rescue personnel.

Consider the figurative ivory tower: you might think you are untouchable, but this card strongly advises an ego check. If you don’t take a step back to reevaluate your behavior, that step may be taken for you, whether you like it or not. This can take the form of a sudden change of plans, turmoil, or other calamity.

So while the Tower reminds us that taking on the challenge of a big climb or hike in a remote area is indeed exciting, you must make sure you’re ready for it. Ask trusted friends or hiking partners for input, and assess your preparedness to avoid disaster.`,
      keywords: ["Step back", "reevaluate", "respect"],
      beware: ["Inflated ego", "calamity", "fall from grace"],
    },
  },
  {
    id: "star",
    name: "The Star",
    number: 17,
    guidebook: {
      text: `From Scotland to Japan to the United States, certified International Dark Sky Parks are places with outstanding opportunities for stargazing. A mere two hours from Los Angeles, Joshua Tree National Park is a stunning Dark Sky location.

As night-sky lovers like to say, “Half the park is after dark.” During the day, Joshua Tree is a surreal desert landscape of striking boulders and its otherworldly namesake trees, a member of the yucca family. The park may seem bereft of life during the day as most of the wildlife stays underground to beat the heat, waiting until nightfall to emerge.

For this reason, the park is truly most active after dark, the sky included. Visitors come from all over the world to experience the full magnitude of the night sky: stars, galaxies, comets, planets, the moon, and meteors galore.

Drawing the Star card is a signal for you to go outside at night and contemplate the cosmos, think about your place in the universe, and marvel at the majesty and mystery of it all. Sometimes a little stargazing can dissolve your problems, and suddenly they don’t seem so big after all.`,
      keywords: ["Stargazing", "contentment", "fresh perspective"],
      beware: ["Downward spiral", "wormholing", "sweating the small stuff"],
    },
  },
  {
    id: "moon",
    name: "The Moon",
    number: 18,
    guidebook: {
      text: `The Moon is similar to the Star in that it is inviting you to step outside after dark. Craters of the Moon National Monument and Preserve in Idaho is world-renowned not only for its volcanic rock and lava tubes but also for its out-of-this-world night sky. The Milky Way is a star player in this nighttime show, but the moon can be the real diva who steals the stage.

The moon used to be the only real source of nighttime light for humans. Today, most of us are totally dependent on artificial light. This has extended the hours we can be active, but with this we have lost the art of being in tune with the cycles of the moon and seasons.

The Moon card invites you to be in closer communion with nature. Consider your waking hours, and look at the times that you do things. Are you diurnal, doing things during the day, or a nocturnal night owl? Or crepuscular, active during dusk and dawn? If you’ve been looking to shake up your routine, you might be surprised by how energizing it can be to follow the natural rhythms of the outdoors.`,
      keywords: ["Contemplation", "adapting to cycles of light and seasons"],
      beware: ["Being out of tune with nature"],
    },
  },
  {
    id: "sun",
    name: "The Sun",
    number: 19,
    guidebook: {
      text: `As the highest vantage point in the North Atlantic seaboard, Cadillac Mountain in Acadia National Park, Maine, is the first place in the United States to see the light of the sun each day. Sleepy-headed travelers make their way to this peak in the early morning hours to catch America’s first light.

Experiencing the sunrise with a crowd of other visitors has become something of a shared ritual, a sacred rite unique to this place. Having an experience like this with a bunch of strangers imparts a feeling of communality, bringing people together in a special way.

This is a card of pure joy. The sun rises and brings clarity to all things that were in shadow. When you draw the Sun, you can look forward to light being shed on troubles you have been carrying. You may experience a fresh outlook, a general feeling of good health and success. It is a happy time, and you should let your inner light beam out upon your friends, your loved ones, and the world at large. Part of the pleasure of being full of the sun’s warmth is that you can share it with others.`,
      keywords: ["Generosity", "abundance", "satisfaction", "warmth"],
      beware: ["Bragging", "attention seeking", "self-centeredness"],
    },
  },
  {
    id: "judgment",
    name: "Judgment",
    number: 20,
    guidebook: {
      text: `Judgment is the moment of truth card.

The opportunity for a once-in-a-lifetime adventure usually doesn’t just fall into your lap. You have to work to make it happen. The time may never seem right, but at some point, you have to dive in headfirst.

Rafting the whitewater of the Grand Canyon used to be for experts only. Today, with the help of hardworking river guides, careful planning, and training, this dream trip is within reach for many outdoor adventurers.

When you finally board the raft and set out down the river between towering walls of orange rock, you’ll smell the cool water and heat of the desert air. You’ll see the rapids ahead of you; you’ll feel the inertia and then the increasing momentum. And when you finally crash through, everything will culminate in a swooping sensation in your stomach and chest as the waves soak everyone in the boat. You’ve experienced a moment of truth.

What’s your bucket-list adventure? Name it, prioritize it, and make it happen—you’ll never be the same. You will emerge a transformed person. Align your priorities, and sally forth!`,
      keywords: ["Moment of truth", "reaching a crossroads", "culmination"],
      beware: ["Self-doubt", "getting distracted", "veering off course"],
    },
  },
  {
    id: "world",
    name: "The World",
    number: 21,
    guidebook: {
      text: `The final, joyful card in the Major Arcana has a simple message: the world is your oyster.

Kayaking on Glacier National Park’s Lake McDonald treats you to an encapsulation of breathtaking beauty. Here you can feel the sun on your face and the breeze in your hair while you take in the towering mountains above and the crystal-clear water below. All of Earth’s elements are on display and at your disposal—just be sure to leave it better than you found it.

You’ve overcome obstacles, and you’ve learned lessons on your adventures. Allow yourself to bask in the glory of your achievements. Your hard work has paid off, and your potential is limitless. Do you dream of taking on a challenge unlike anything you’ve ever done before? Now is the time.`,
      keywords: ["Fulfillment", "harmony", "coming full circle"],
      beware: ["Pretentiousness", "flaunting"],
    },
  },
];

export const OUTDOORS_GUIDEBOOK_BY_ID: Record<string, OutdoorsGuidebookCard> =
  Object.fromEntries(OUTDOORS_GUIDEBOOK.map((card) => [card.id, card]));
