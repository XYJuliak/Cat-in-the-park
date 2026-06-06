export type OutdoorsGuidebookCard = {
  id: string;
  name: string;
  number?: number;
  suit?: "vessels" | "sticks" | "stones" | "blades";
  guidebook: {
    text: string;
    keywords?: string[];
    beware?: string[];
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

  {
    id: "queen-of-vessels",
    name: "Queen of Vessels",
    suit: "vessels",
    guidebook: {
      text: `The Queen of Vessels is the Queen of Water, an expert in her sport. She didn’t start out windsurfing the biggest waves or catching the most air; no, she started out using borrowed gear, falling into the water, and crashing into rocks. For any activity, it takes practice and years of experience to achieve mastery. It also requires you to accept help and guidance from others. When you become an expert, you have the opportunity to become a mentor yourself. Be like this queen and offer open-hearted guidance with grace, generosity, and warmth.`
    }
  },
  {
    id: "king-of-vessels",
    name: "King of Vessels",
    suit: "vessels",
    guidebook: {
      text: `In life, you experience different emotions and relationships as you try new activities. You start by dipping your toes in, then explore increasingly difficult adventures as you gain new skills. Some experiences are only achievable after years of dedication; you don’t simply grab a paddle and jump into Class 5 whitewater on day one! Like the Queen, the King of Vessels is a true master of his watercraft.

At one with his sport, he handles the kayak as if it’s part of his body, fully understanding its potential and its limits. This King indicates there may be a person in your life you can look to as a mentor, or it may even be you, as you realize your own abilities. Look to this vessel for ideas of how you can use your knowledge to be a leader and inspiration to others, and do so with love.`
    }
  },
  {
    id: "ace-of-sticks",
    name: "Ace of Sticks",
    number: 1,
    suit: "sticks",
    guidebook: {
      text: `Now is an especially favorable time to consider embarking on a new adventure. The Ace of Sticks represents an opportunity for you to forge ahead, start down a fresh trail, or try a new way of thinking and see where it takes you. This can be an exciting time, but remember to bring trekking poles or even a good old-fashioned walking stick; you’ll want to consider each step and remain steady as you go.`
    }
  },
  {
    id: "two-of-sticks",
    name: "Two of Sticks",
    number: 2,
    suit: "sticks",
    guidebook: {
      text: `Venturing out into nature is a fantastic way to exercise not only your body but also your brain. Even in these tech-filled days, nothing is more foundational than a map and compass—and learning to use them properly is a classic outdoor pursuit and survival skill. Whether you are on the trail or in the office, the Two of Sticks reminds you that being able to navigate well and make decisions requires cooperation with others, clear communication, and patience.`
    }
  },
  {
    id: "ace-of-vessels",
    name: "Ace of Vessels",
    number: 1,
    suit: "vessels",
    guidebook: {
      text: `Aces offer an invitation, in this case a cold, fresh drink of water. Are you thirsty for adventure? Are you longing to see new places or try new things, perhaps with a friend or partner? Vessels ask you to examine the ways in which you quench your thirst and fill your heart. When you draw this Ace, there may be an opportunity for new love and friendship in your future, so be ready to fill up.`
    }
  },
  {
    id: "two-of-vessels",
    name: "Two of Vessels",
    number: 2,
    suit: "vessels",
    guidebook: {
      text: `Choice, cooperation, synchronicity: it takes practice to effectively paddle a double kayak in the busy waters of Puget Sound. Both people need to work in unison, voice individual needs, and be open to compromise. Emphasize each other’s strengths, and support each other’s weaknesses. Teamwork makes the dream work! Clear communication will ensure the best outcome.`
    }
  },
  {
    id: "three-of-vessels",
    name: "Three of Vessels",
    number: 3,
    suit: "vessels",
    guidebook: {
      text: `One of the most celebratory cards in the tarot, the Three of Vessels highlights companionship, relaxing in the company of friends, and enjoying a happy moment. Pleasure is always available to you—you just have to choose it. Look for small or big ways to invite more friendship and lasting memories into your life.`
    }
  },
  {
    id: "four-of-vessels",
    name: "Four of Vessels",
    number: 4,
    suit: "vessels",
    guidebook: {
      text: `This card invites you to take a time-out from any drama you may be experiencing and gather strength for challenges that may be up ahead. Think forest bathing, going for a walk around your neighborhood, or just sitting quietly and listening to nature. Break free from distractions so you can look at your situation clearly, and be thankful for all that you already have.`
    }
  },
  {
    id: "five-of-vessels",
    name: "Five of Vessels",
    number: 5,
    suit: "vessels",
    guidebook: {
      text: `A robin protects her eggs from a corn snake—obviously a dangerous situation for the robin. But is it also bad for the snake? Afterall, the snake is simply hunting for food, playing its role in the ecosystem. Managing hardship and adversity is no easy task, and you may not be able to avoid or change your circumstances. But you can reexamine how you perceive them. Perhaps there is something you can change in yourself so you can move forward.`
    }
  },
  {
    id: "six-of-vessels",
    name: "Six of Vessels",
    number: 6,
    suit: "vessels",
    guidebook: {
      text: `Representing growth and transformation, Sixes help you learn from your mistakes. Florida manatees literally bear the scars of human mistakes, as boaters often collide with these gentle animals in Southeast waterways. But with the knowledge researchers have gained about the migration and habits of manatees, boaters can more safely coexist with these curious creatures. Ponder the ways your own mistakes lead to greater personal awareness.

LNT Card: Respect Wildlife. Learn about the wildlife in your area, and be aware of how to interact or behave around them. Songbirds or coyotes, lizards or whales, you can enjoy their presence and ensure their survival by better understanding their habits.`
    }
  },
  {
    id: "seven-of-vessels",
    name: "Seven of Vessels",
    number: 7,
    suit: "vessels",
    guidebook: {
      text: `You may soon find yourself faced with many choices. Exciting! Then again, sometimes too many choices can feel overwhelming. Everything is tempting, and you might have a tough time deciding what to do first. Think about how you manage your time and how you make choices. Are you cautious, or do you choose quickly? Have faith in yourself. The options here are all good, so just pick one and go!`
    }
  },
  {
    id: "eight-of-vessels",
    name: "Eight of Vessels",
    number: 8,
    suit: "vessels",
    guidebook: {
      text: `The best scenery isn’t always right off the side of the road. Sometimes you have to work hard, go a distance, and carry a bit of weight. The process of planning, packing, and traveling through wilderness is not necessarily for everyone. But it can be a source of great satisfaction and a chance for memorable, life-changing experiences. You can reap rewards if you do the work others aren’t willing to tackle. Plan carefully, be efficient, and cooperate with others. Your work will pay off.`
    }
  },
  {
    id: "nine-of-vessels",
    name: "Nine of Vessels",
    number: 9,
    suit: "vessels",
    guidebook: {
      text: `This is the life! The sun is shining, the water is calm, and it’s a perfect day for a leisurely SUP. Whatever you think perfection means—the perfect love, the perfect book, the perfect campsite—consider that you can let any moment be perfect. Be present and enjoy each moment for what it is. Release any expectations, and stop looking for something better.`
    }
  },
  {
    id: "ten-of-vessels",
    name: "Ten of Vessels",
    number: 10,
    suit: "vessels",
    guidebook: {
      text: `This card signals that it’s time to bask in pure joy and delight. You’ve put in hard work and faced challenges, and now you get to take in the scenery. Enjoy the lazy warmth of the sun, the cool water and smooth rocks under foot, laughing and horsing around with friends. . . . You’ve reached a place of contentment in your journey, so enjoy this moment to the fullest.`
    }
  },
  {
    id: "page-of-vessels",
    name: "Page of Vessels",
    suit: "vessels",
    guidebook: {
      text: `Pages deliver information: you can learn from your own mistakes, but sometimes a guide or mentor with more expertise can offer guidance. Many natural areas employ volunteers to educate visitors about that environment. In Hawaii, beach docents encourage people to avoid certain kinds of sunscreen that have proven to be damaging to delicate coral reef ecosystems. These volunteers also help cordon off areas where migrating green sea turtles are nesting and later help the hatchlings reach the water. Be on the lookout for someone who may have valuable information for you. And, remember, it may come from someone you don’t expect.`
    }
  },
  {
    id: "knight-of-vessels",
    name: "Knight of Vessels",
    suit: "vessels",
    guidebook: {
      text: `Like any group learning a new skill, there are levels of experience. Little sailors might bonk around a bit—they might get wet, but no one is in any danger. Instructors are nearby, perhaps young people themselves who are learning how to be teachers. And supervising all is the Knight; if things go sideways, the patient Knight is there to defend. It’s important to be prepared, but patience can also be instructive, allowing you to see if a problem solves itself. Keep in mind the motto “If it ain’t broke, don’t fix it.” Let the action play out, and only intervene if absolutely necessary.`
    }
  },
  {
    id: "three-of-sticks",
    name: "Three of Sticks",
    number: 3,
    suit: "sticks",
    guidebook: {
      text: `Many people aspire to live more in tune with nature, maybe even off the grid with a minimal carbon footprint. Anyone can achieve this, as long as they are willing to put in the work. Growing food, minimizing waste, and saving energy all take slow, thoughtful effort. Be clear in your communication with others and realistic with yourself, and you can look forward to seeing positive returns on your recent hard work, as well as new opportunities coming your way.`
    }
  },
  {
    id: "four-of-sticks",
    name: "Four of Sticks",
    number: 4,
    suit: "sticks",
    guidebook: {
      text: `With the Four of Sticks, you can heave a sigh of relief, because sometimes the best action is no action at all. It’s time to put aside your busy world and limit the constant flurry of stimulation and digital content. In order to rest your brain and clear your head, find a quiet place. Staring into the glow of a small campfire, poking at its coals now and then, is a surefire way to relax the mind.`
    }
  },
  {
    id: "five-of-sticks",
    name: "Five of Sticks",
    number: 5,
    suit: "sticks",
    guidebook: {
      text: `Fives are cards of adversity, yet they offer ideas for solutions. This card may represent intellectual challenges you have to face, but simply recognizing and acknowledging those challenges can often be enough to get you through them. In your outdoor life, you may have seen evidence of a challenge the planet faces more and more often: wildfire. Seeing the sad remains of burnt trees can be a reminder that the ability to use and control fire is a privilege that comes with great responsibility.

LNT Card: Minimize Campfire Impacts. Pay attention to and abide by any burn bans. Use only responsible outdoor campfire practices—make sure any fire is well contained, limit sparks, and put it out completely before you leave. Also be mindful of any combustibles you might take in or near dry forests. Be fire aware and prevent wildfires!`
    }
  },
  {
    id: "six-of-sticks",
    name: "Six of Sticks",
    number: 6,
    suit: "sticks",
    guidebook: {
      text: `It always comes as a rude surprise when you travel someplace you think will be warm and sunny, only to be rained upon. If you have ever endured a difficult hiking or camping trip because of unpreparedness, the Six of Sticks reminds you to learn from your mistakes. Reserve a little space for some “worst-case scenario” items in your pack. They don’t have to be pretty; they just need to keep you warm and dry. Don’t let the weather ruin your adventure next time—prepare and be ready!`
    }
  },
  {
    id: "seven-of-sticks",
    name: "Seven of Sticks",
    number: 7,
    suit: "sticks",
    guidebook: {
      text: `One thing humans are good at is proposing a challenge, if for no other reason than to see whether they can successfully create and execute a plan. It can be an illuminating way to expand your mind, gauge how you manage tough situations, and give you the confidence that you are capable of things you never expected. Building a survival shelter is a great exercise in self-reliance and a useful skill to have just in case. You got this!`
    }
  },
  {
    id: "eight-of-sticks",
    name: "Eight of Sticks",
    number: 8,
    suit: "sticks",
    guidebook: {
      text: `Beavers are widely known as some of the busiest workers in the animal world. Beaver dams, or lodges, are marvels of engineering: complex structures of leaves, twigs, sticks, mud, and rocks, with a hidden underwater entrance. These warm, watertight homes keep beaver families safe year-round. Be like a beaver. Use your mental and physical skills to work creatively and efficiently, and enjoy the work while you’re doing it.`
    }
  },
  {
    id: "nine-of-sticks",
    name: "Nine of Sticks",
    number: 9,
    suit: "sticks",
    guidebook: {
      text: `This card signifies nearing completion of an intellectual task. You have only a little more work to do: push ahead, and you will cross the finish line. Just don’t get ahead of yourself: complete the job at hand, and let others lend a hand to support you if necessary.

These friends have almost finished planting saplings in a greenbelt and are already planning their next project. Keep a list of ideas for your next undertaking!`
    }
  },
  {
    id: "ten-of-sticks",
    name: "Ten of Sticks",
    number: 10,
    suit: "sticks",
    guidebook: {
      text: `Gathering with loved ones around a firepit is one of the great pleasures of life. Whether you’re making music, telling spooky stories, solving the problems of the world, or just talking and laughing, nothing brings people together like a campfire. A good fire shared with others can be a source of new ideas and creativity that will inspire you long after the flames are out.

LNT Card: Be Considerate of Other Visitors. When you’re on the trail, at a park, or in a campground, try to keep your noise to a minimum, and pack out any trash. Remember that other folks want to enjoy these spaces too, so leave your campsite and firepit better than you found it.`
    }
  },
  {
    id: "page-of-sticks",
    name: "Page of Sticks",
    suit: "sticks",
    guidebook: {
      text: `Did you know that many national parks have artist-in-residence programs? Open to painters, musicians, writers, and others, these programs give artists a chance to discover creative ways to connect with a landscape and lead workshops with park visitors. If visiting a national park isn’t on your calendar, look to artists you admire for inspiration. Channel your own inner artist and be ready to receive inspiration: being curious and observing everything from scenic vistas to tiny details like leaves and insects will help you gain a deeper understanding of the natural world, and yourself.`
    }
  },
  {
    id: "knight-of-sticks",
    name: "Knight of Sticks",
    suit: "sticks",
    guidebook: {
      text: `Have you ever watched a professional arborist at work? Whether cutting dead limbs from a neighbor’s old oak or researching the canopy of a park forest, tree climbers dangle as high as eighty feet up in a tree, handling saws and other tools while also managing lengths of rope and climbing gear. The Knight of Sticks indicates that it’s time to act with clarity, intent, and prudence. This is an active card, so don’t just sit back and observe; rather, stay focused and move forward one branch at a time.`
    }
  },
  {
    id: "queen-of-sticks",
    name: "Queen of Sticks",
    suit: "sticks",
    guidebook: {
      text: `To be wealthy doesn’t necessarily mean you have money. Your wealth can be in time or knowledge, in gear or space, in warmth or love. A mark of true “wealth” is that you enjoy and share what you have with others, whether that’s enough firewood to get a friend through the winter, a shoulder to lean on in a time of need, or help with their math homework. As you grow and attain wealth, don’t keep it to yourself. Instead, give of your wealth and of yourself, and discover ever more ways that you can share your hearth with others.`
    }
  },
  {
    id: "king-of-sticks",
    name: "King of Sticks",
    suit: "sticks",
    guidebook: {
      text: `Hikers who attempt the 1,500-mile Florida Trail generally start with the hardest part: 30 miles across swampland in Big Cypress National Preserve. Wading through ankle-deep muck, surrounded by alligators, snakes, frogs, fish, and all sorts of creepy-crawlies does not require physical prowess so much as alert presence of mind. The King of Sticks sustains his peak mental focus for the duration of his hike; for what you might face, don’t let your mind wander, as you might just wander right into a gator’s nest!`
    }
  },
  {
    id: "ace-of-stones",
    name: "Ace of Stones",
    number: 1,
    suit: "stones",
    guidebook: {
      text: `The Ace of Stones offers you a new beginning in some physical, worldly matter. What does your body crave? Does it want to run? Climb? Rest? This card may show up during the change of seasons, when you are preparing your body and home for the months ahead: spring cleaning, moving outdoors for summer, returning indoors for fall, hunkering down for winter. Listen to your body, and act accordingly. Look for opportunities to make your body and surroundings feel great.`
    }
  },
  {
    id: "two-of-stones",
    name: "Two of Stones",
    number: 2,
    suit: "stones",
    guidebook: {
      text: `Twos are cards of choices, cooperation, and balance. Working in sync with your travel partner, pick a spot to camp that does the least damage. Don’t tread on the small plants, and don’t smooth the grass. Walk similarly in your day-to-day life by always choosing to leave no trace on your surroundings, in city or country.

LNT Card: Travel and Camp on Durable Surfaces. Minimize your impact to the tiny ecosystems in the earth adjacent to trails and campsites. Choose your routes and campsites wisely to do the least harm.`
    }
  },
  {
    id: "three-of-stones",
    name: "Three of Stones",
    number: 3,
    suit: "stones",
    guidebook: {
      text: `The Three of Stones is a card of communicating clear expectations and boundaries. Discuss everyone’s needs and desires at the onset of a project or adventure; this way all parties know what to expect and when to be finished so that everyone comes away satisfied.

This card shows friends who are comparing their finds at a rockhounding site, as they are agreeing to be finished. Otherwise, the digging could go on forever! Know when to throw in the towel, and respect others’ needs and desires to call it a day.`
    }
  },
  {
    id: "four-of-stones",
    name: "Four of Stones",
    number: 4,
    suit: "stones",
    guidebook: {
      text: `New York City’s Central Park is an oasis of calm in one of the greatest cities on Earth. The park is full of marvelous Manhattan schist rock formations, rolling fields, meadows, lakes, and trails. It is also home to many birds and other critters.

Nature is available to us everywhere, even in big cities. You just have to look. When the stress of modern life is getting you down, take a moment to notice and appreciate whatever is thriving around you, even if it’s a cluster of weeds growing from a crack in the sidewalk. Take time out from the hustle and bustle to enjoy nature, wherever you are.`
    }
  },
  {
    id: "five-of-stones",
    name: "Five of Stones",
    number: 5,
    suit: "stones",
    guidebook: {
      text: `There are two important aspects of outdoor travel that must not be underestimated. One is the anticipation of the trip beforehand: planning, getting excited, and prepping your gear. The other is the delight and relief of returning home afterward.

Let’s face it, some outdoor adventures can be challenging: bad weather, broken gear, flat tires, full parking lots, upset children, and the terror of a bear eating your rations in the night. Beloved outdoor writer Patrick McManus called camping “a fine and pleasant misery.” You may endure the occasional terrible trip, but it may make for great stories afterward.

If things go sideways, be creative. This card tells you to use what you have at your disposal, and do your best to make a bad situation into a memory with a silver lining. Get out your tarps and duct tape, and make it work.`
    }
  },
  {
    id: "six-of-stones",
    name: "Six of Stones",
    number: 6,
    suit: "stones",
    guidebook: {
      text: `Scientists have discovered that the hellbender salamander can live under the same cluster of rocks for generations. When you go poking around in waterways, you run the risk of damaging delicate and long-standing ecosystems, so please be gentle! This card reminds you that it’s possible to learn from past mistakes. You may have done something the same way for ages, but if you discover a better way to do it, that’s okay, and in fact, should be embraced.

LNT Card: Leave What You Find. Making cairns is now frowned upon in many parks and protected lands. When you make stacks of rocks, you risk upsetting the ancestral homes of creatures like this large but gentle amphibian. Leave what you find, and don’t mess with the rocks. The hellbender’s grandchildren will thank you.`
    }
  },
  {
    id: "seven-of-stones",
    name: "Seven of Stones",
    number: 7,
    suit: "stones",
    guidebook: {
      text: `Sevens are cards of faith and patience. Use your time wisely: plot out your ascent, look for the holds you want to reach, and then have faith in yourself that you can reach your goal.

If your climb isn’t going exactly as you thought, be kind to yourself. Take a moment to stop and breathe, and look for your next move.

Quick thinking and keen insight are best paired with patience and perseverance. You have what it takes, but don’t be afraid to reach out to others for help—they will reach out to you in turn.`
    }
  },
  {
    id: "eight-of-stones",
    name: "Eight of Stones",
    number: 8,
    suit: "stones",
    guidebook: {
      text: `Humans are very goal-oriented creatures. People like to have a goal, take steps toward it, and achieve something tangible. Oftentimes, however, you end up with less-than-desired results: unripened tomatoes, roses that don’t bloom, or seeds that never sprout. Experienced gardeners will agree that sometimes the real pleasure is achieved in just doing the work, regardless of the outcome.

Take joy in doing some work with the earth, whether it’s babying your houseplants, volunteering in a school garden, puttering around in your yard, or pulling a few weeds. These efforts can be done solitarily or with friends or neighbors. The important thing is to enjoy the process; don’t worry so much about the results.`
    }
  },
  {
    id: "nine-of-stones",
    name: "Nine of Stones",
    number: 9,
    suit: "stones",
    guidebook: {
      text: `If you have ever foraged for mushrooms or know someone who does, they may have told you about the joy of trudging out into the wet woods in the fall, in search of the elusive motherlode. Sometimes you find it, sometimes you don’t. But when you do hit gold, you know! And what a thrill it is to find a big patch of beautiful yellow chanterelles. Nines are cards of fruition, so rest assured that you are on the brink of achieving some success in earthly matters. Let it come, and enjoy this time.`
    }
  },
  {
    id: "ten-of-stones",
    name: "Ten of Stones",
    number: 10,
    suit: "stones",
    guidebook: {
      text: `Tens are cards of completion, and in this case, reaching a literal pinnacle of success. The Ten of Stones shows three hikers who have arrived at the Northern Terminus Monument of the Pacific Crest Trail and are in a celebratory mood. Have they hiked the whole thing, or only a portion? It doesn’t matter. Whatever they did, it’s clear that they consider it a huge accomplishment.

People have different levels of outdoors mastery, and while a hundred miles might be the goal for some, hiking one mile is an achievement for others. Regardless of the specifics, know that setting a goal and reaching it can be a source of immense satisfaction and is a cause worthy of celebration. To help you overcome any obstacles on your adventures big or small, pack the Ten Essentials:

1. Navigation
2. Sun protection
3. Insulation
4. Illumination
5. First aid
6. Fire
7. Tools
8. Food
9. Water
10. Shelter`
    }
  },
  {
    id: "page-of-stones",
    name: "Page of Stones",
    suit: "stones",
    guidebook: {
      text: `A very important figure in the outdoor world is the campground host. These folks are often retirees who volunteer their time, and they help keep our campgrounds beautiful and functioning smoothly.

What you might not know is that many of them are an absolute font of information, and know all about the local area, flora, and fauna. Don’t be afraid to go talk to them. They are there to enforce the rules of the campground and make sure it is safe, clean, and enjoyable for all visitors, but they are also there to educate and inform. Like the campground host, there are people in all parts of your life who might have surprising information and stories to share with you. Be on the lookout for helpful insights coming your way.`
    }
  },
  {
    id: "knight-of-stones",
    name: "Knight of Stones",
    suit: "stones",
    guidebook: {
      text: `Park rangers wear many hats, from public outreach to maintenance and, at times, even law enforcement. During busy times, rangers may also need to do crowd control to protect precious natural formations.

This card shows a ranger in some special caves, standing by to safeguard ancient speleothems. The Knight of Stones is a defense card, implying caution. Be on the alert, but act only if absolutely necessary.`
    }
  },
  {
    id: "queen-of-stones",
    name: "Queen of Stones",
    suit: "stones",
    guidebook: {
      text: `Becoming a master at your craft brings you not only the pleasure of achievement for yourself but also the satisfaction of being able to share your knowledge with others. This mountaineering instructor brings her years of hard work to the climbing wall to share with her students.

If you draw this card, be ready to share your expertise with others, and be open to receiving important information when it comes up. Always be open to being a student *and* a teacher.`
    }
  },
  {
    id: "king-of-stones",
    name: "King of Stones",
    suit: "stones",
    guidebook: {
      text: `The King of Stones is a master of his achievements and knows that sometimes you have to make sacrifices in some parts of your life to become rich in others. For this King, true wealth is not about accumulating material goods but prioritizing what to give up. By doing this, you can make time for the activities and people that mean the most to you, and invite rewarding, nonmaterial experiences and memories into your life.

Follow the King’s lead: be an example of giving up in order to receive, and you may find more time to do the things you truly love.`
    }
  },
  {
    id: "ace-of-blades",
    name: "Ace of Blades",
    number: 1,
    suit: "blades",
    guidebook: {
      text: `A hand reaches out to you with the ultimate desert island tool. What will you do with it? Blades are a fascinating suit for exploring leadership potential and organizational skills. Use creativity and keen listening and speaking skills, and learn to mediate when things get dicey. An opportunity may be coming your way to expand your skills in these areas. Be ready to listen, digest the information, be creative, and be on point!`
    }
  },
  {
    id: "two-of-blades",
    name: "Two of Blades",
    number: 2,
    suit: "blades",
    guidebook: {
      text: `In ice skating, you literally have two metal blades attached to your feet. To skate, you must think of a series of partnerships: your feet work together, your mind works with your body, and the blades work in connection with the ice.

The most graceful skaters are people who let their minds and bodies work together not by forcing it, but rather by letting go. There is a level of trust between themselves and the ice, between their bodies and the skates. They don’t work against the ice—they work *with* the ice. Don’t overthink your choices; relax, and use your intuition.`
    }
  },
  {
    id: "three-of-blades",
    name: "Three of Blades",
    number: 3,
    suit: "blades",
    guidebook: {
      text: `This card counsels that you shouldn’t be afraid to try something new and that using good communication skills will ensure the best outcome. Taking up any sport as an adult can be daunting. However, even total beginners can dive into the beauty of the outdoors in winter by renting a basic cross-country ski kit and hitting an easy, groomed trail.

This is a great way of dipping your toes into Nordic skiing without breaking the bank (or a leg). You don’t have to own top-of-the-line gear, and you don’t have to be super athletic or, in fact, athletic at all. Assess your abilities and limits, and communicate those to your partners. Grab some gear, some friends, and go! Stay in close contact, and have frequent check-ins with your buddies.`
    }
  },
  {
    id: "four-of-blades",
    name: "Four of Blades",
    number: 4,
    suit: "blades",
    guidebook: {
      text: `One surefire way to ruin your bluebird day is by overworking yourself and not taking a break. Indoors or out, getting stressed and flustered is a recipe for trouble and can lead to making poor choices.

Take a lot of breaks, eat snacks, and stay hydrated, warm, and dry. Rest while you’re still feeling good, and remember to enjoy the company of your ski buddy.`
    }
  },
  {
    id: "five-of-blades",
    name: "Five of Blades",
    number: 5,
    suit: "blades",
    guidebook: {
      text: `Fives can be cards of adversity, or they can be cards of creative solutions. When you see an area that you love becoming overrun with litter or invasive plants, use your leadership and planning skills to organize a cleanup effort, or simply put forth a personal effort to solve a problem when you see one. Now could also be a good time to tidy up your home, and possibly your social life. Let go of what is no longer serving you.

LNT Card: Dispose of Waste Properly. No matter where you are, the proper disposal and recycling of waste is a daily chore that’s important not only to individuals but also to the planet. Always be on the lookout for ways you can reduce your intake and output of anything not benefiting the earth.`
    }
  },
  {
    id: "six-of-blades",
    name: "Six of Blades",
    number: 6,
    suit: "blades",
    guidebook: {
      text: `Have you noticed that the minute you book a trip, you feel giddy and excited, and have that feeling until the day of the trip? The anticipation is half the fun! While the delight of anticipation is not to be overlooked, the Six of Blades reminds you to make sure you are fully prepared. Each adventure comes with lessons. Recall your previous missteps to create ever greater experiences.

LNT Card: Plan Ahead and Prepare. Remember when you wished you had hand-warmer packets? Add them to your packing list. That time your boot lace broke with seven miles to go to your designated campsite before dark? Put a spare pair in your pack.`
    }
  },
  {
    id: "seven-of-blades",
    name: "Seven of Blades",
    number: 7,
    suit: "blades",
    guidebook: {
      text: `Mountain goats are nature’s masters of having faith. When you see some of the places that these majestic animals can access, it boggles the mind. They are experts in balance, surefootedness, patience, and playing a long game. How do they do this—and what can you learn from them?

Center yourself. Start small, and be aware of every single step. Don’t make any hasty moves. Plot out your course, and trust that you, too, with practice and patience, will be able to go places you never dreamed you could.`
    }
  },
  {
    id: "eight-of-blades",
    name: "Eight of Blades",
    number: 8,
    suit: "blades",
    guidebook: {
      text: `All Eight cards are about work. This one asks you to be creative in your work and to be an example to others. As you spend more and more time outdoors, find ways that you can make a day of service be the trip. Many organizations gladly accept help from volunteers of any age or ability to help maintain thousands of miles of trails in every corner of the country. Whether it be clearing deadfalls and brush, maintaining drainage ditches and swales, or limbing trees in fire-prone areas, there are a lot of ways to help. When you team up with a group of like-minded people, it might not feel much like work at all.`
    }
  },
  {
    id: "nine-of-blades",
    name: "Nine of Blades",
    number: 9,
    suit: "blades",
    guidebook: {
      text: `You’re almost there . . . just a little ways to go. And once you get there, it’s going to be warm and cozy, and a hot cocoa will be waiting for you. All of your careful planning, patience, training, and diligence is about to pay off.

You got to this point through hard work and thoughtful leadership, by putting your head down and placing one foot in front of the other, through bluebird days and blizzards.

Be prepared to share your methods and expertise, and to help others become strong leaders. Don’t show off, but do show up. And prep yourself for a lovely time ahead!`
    }
  },
  {
    id: "ten-of-blades",
    name: "Ten of Blades",
    number: 10,
    suit: "blades",
    guidebook: {
      text: `The Ten of Blades acknowledges a job well done. Or just a job that’s *done*, even if not done well.

Every year, thousands of people sign up for all kinds of races: 10Ks, 5Ks, marathons, half-marathons, triathlons, and more. Every year, thousands of people also realize that they may have bitten off more than they can chew. It’s great to set yourself a goal, train for it, and complete it, but did you enjoy it?

As you wrap up any kind of big endeavor, whether it’s for work or leisure, it’s good to step back and review. Would you do it again? Did the experience help you grow as a person? What did you learn?

Considering what you would do differently is how you improve not only as a human but also as a leader. Regardless, be relieved you’re done, and move forward confidently.`
    }
  },
  {
    id: "page-of-blades",
    name: "Page of Blades",
    suit: "blades",
    guidebook: {
      text: `Being a deliverer of information can be a rewarding task, yet it can also test your patience, as any teacher will tell you. This ski instructor, with his young students, needs to spend a great deal of time looking over his shoulder and making sure everyone is accounted for. Strive for a mindset of easygoing vigilance. You need to be the boss of the situation, but it can be your secret that you’re only one step ahead of the game. Play it cool, and you’ll keep the kids in ski school.`
    }
  },
  {
    id: "knight-of-blades",
    name: "Knight of Blades",
    suit: "blades",
    guidebook: {
      text: `All Knights represent action. Some action is slow; some is fast. This card brings the highest-intensity action. When you draw this card, it’s time to make quick decisions, and doing so may not be comfortable. Maybe you need to tackle a difficult conversation or think on your feet in a big game or race: be ready to charge ahead with confidence.

One good thing about fast action is that it brings an immediate result. This ski patroller has surveyed the area and is setting off the dynamite to trigger an avalanche, so that the area below will be safe for skiers. It’s like ripping off a bandage. Just get it over with—you’ll be happier afterward and ready to move forward.`
    }
  },
  {
    id: "queen-of-blades",
    name: "Queen of Blades",
    suit: "blades",
    guidebook: {
      text: `This card may represent someone you interact with, or it may represent you. The Queen of Blades is a solo flier. She’s the Queen of big air, speed, and hardcore shredding. She works hard, trains hard, and occasionally plays hard—but only on her terms. When she means business, she’s a tough customer and will only accept the best. She’s strong, sly, and confident, with high expectations of herself and of others. If you want to know her techniques, you’ll have to up your game and cautiously approach her with respect; only then will she share her hard-earned knowledge. If you’re the Queen, take care in your interactions with others.`
    }
  },
  {
    id: "king-of-blades",
    name: "King of Blades",
    suit: "blades",
    guidebook: {
      text: `The King of Blades, like the Queen, is a soloist. He has accomplished the ultimate outdoors achievement: reaching the highest, hardest, most challenging pinnacle—physically, mentally, and spiritually—by using every facet of his leadership and problem-solving skills. This card shows the culminating moment of a dream that began years, maybe decades ago. Every single piston is firing, every fiber in his body is focused on one task: the summiting of this frozen peak.

The King of Blades is a no-nonsense character, the final authority when it comes to pretty much all things. He is the maker of rules, the judge and jury, the final straw. This card invites you to consider: Are you facing a monumental challenge? Could this King represent someone in your life? Could it represent you?`
    }
  },
];

export const OUTDOORS_GUIDEBOOK_BY_ID: Record<string, OutdoorsGuidebookCard> =
  Object.fromEntries(OUTDOORS_GUIDEBOOK.map((card) => [card.id, card]));
