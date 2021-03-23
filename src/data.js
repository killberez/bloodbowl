export const teams = {
  blackOrcs: {
    players: [
      {
        position: "Goblin Bruiser Linemen",
        qty: 12,
        cost: 45000,
        ma: 6,
        st: 2,
        ag: 3,
        pa: 4,
        av: 8,
        skillsTraits: ["Dodge", "Right Stuff", "Stunty", "Thick Skull"],
        primary: "A",
        secondary: "GPS",
      },
      {
        position: "Black Ork",
        qty: 6,
        cost: 90000,
        ma: 4,
        st: 4,
        ag: 4,
        pa: 5,
        av: 10,
        skillsTraits: ["Brawler, ", "Grab"],
        primary: "GS",
        secondary: "AP",
      },
      {
        position: "Trained troll",
        qty: 1,
        cost: 115000,
        ma: 4,
        st: 5,
        ag: 5,
        pa: 5,
        av: 10,
        skillsTraits: [
          "Always Hungry, ",
          "Loner (+3), ",
          "Mighty Blow (+1), ",
          "Projectile Vomit, ",
          "Realy Stupid, ",
          "Regeneration, ",
          "Throw Team-mate",
        ],
        primary: "A",
        secondary: "GPS",
      },
    ],
    teamRerolls: {
      qty: 8,
      price: 60000,
    },
    specialRules: ["Badlands Brawl", "Bribery and Corruption"],
    Tier: 2,
    Apothecary: "Yes",
  },
  humans: {
    players: [
      {
        position: "imperialRetainerLinemen",
        qty: 12,
        cost: 45000,
        ma: 6,
        st: 3,
        ag: 4,
        pa: 4,
        av: 8,
        skillsTraits: ["Fend"],
        primary: "G",
        secondary: "AS",
      },
      {
        position: "imperialThrowers",
        qty: 2,
        cost: 75000,
        ma: 6,
        st: 3,
        ag: 4,
        pa: 3,
        av: 9,
        skillsTraits: ["Pass", "Running Pass"],
        primary: "GP",
        secondary: "AS",
      },
      {
        position: "nobleBlitzers",
        qty: 2,
        cost: 105000,
        ma: 7,
        st: 3,
        ag: 3,
        pa: 4,
        av: 9,
        skillsTraits: ["Block", "Catch"],
        primary: "AG",
        secondary: "PS",
      },
      {
        position: "bodygards",
        qty: 4,
        cost: 90000,
        ma: 6,
        st: 3,
        ag: 4,
        pa: 5,
        av: 9,
        skillsTraits: ["Stand Firm", "Wrestle"],
        primary: "GS",
        secondary: "A",
      },
      {
        position: "ogre",
        qty: 1,
        cost: 145000,
        ma: 5,
        st: 5,
        ag: 4,
        pa: 5,
        av: 10,
        skillsTraits: [
          "Bone Head",
          "Loner (+4)",
          "Mighty Blow (+1)",
          "Thick Skull",
          "Throw Team-mate",
        ],
        primary: "S",
        secondary: "AG",
      },
    ],
    teamRerolls: {
      qty: 8,
      price: 70000,
    },
    specialRules: ["Old World Classic"],
    Tier: 2,
    Apothecary: "Yes",
  },
};

export const specialRules = {
  Dodge:
    "Once  per turn, during their activation, this player may re-roll a failed Agility test when attempting to Dodge. Additiobally, this player may choose to use this Skill when they are the target of Block action and a stumble result is applied against them.",
  "Right Stuff":
    "If this player has a Strength characteristic of 3 or less, they can be thrown by a team-mate with the Throw Team-mate skill.",
  Stunty:
    "When this player makes an Agility test in order to Dodge, they ignore any -1 modifiers for being Marked in the square they have moved into, unless they also have either the Bombardier trait, the Chainsaw trait or the Swoop trait.  However, when an opposition player attempts to interfere with a pass action performed by this player, that player may apply a +1 modifier to their Agility test.  Finally, players with this Trait are more prone to injuri. Therefore, when an injuri roll is made against this player, roll 2D6 and consult the Stunty Injury table, on page 60.  ",
  "Thick Skull":
    "When an Injury roll is made against this player (even if this player is Prone, Stunned or has lost their Tackle Zone), they can only be KO'd in roll of 9, and will treat a roll of 8 as Stunned result. If this player also has the Stunty trait, they can only be KO'd on roll 8, and wikk treat a roll 7 as a Stunned result. All other results are unaffected.",
};