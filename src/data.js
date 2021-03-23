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
        skillsTraits: ["Brawler", "Grab"],
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
          "Always Hungry",
          "Loner (+4)",
          "Mighty Blow (+1)",
          "Projectile Vomit",
          "Realy Stupid",
          "Regeneration",
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
    "<strong>Dodge: </strong> Once per turn, during their activation, this player may re-roll a failed Agility test when attempting to Dodge. Additiobally, this player may choose to use this Skill when they are the target of Block action and a stumble result is applied against them.",
  "Right Stuff":
    "<strong>Right Stuff: </strong>If this player has a Strength characteristic of 3 or less, they can be thrown by a team-mate with the Throw Team-mate skill.",
  Stunty:
    "<strong>Stunty: </strong>When this player makes an Agility test in order to Dodge, they ignore any -1 modifiers for being Marked in the square they have moved into, unless they also have either the Bombardier trait, the Chainsaw trait or the Swoop trait.  However, when an opposition player attempts to interfere with a pass action performed by this player, that player may apply a +1 modifier to their Agility test.  Finally, players with this Trait are more prone to injuri. Therefore, when an injuri roll is made against this player, roll 2D6 and consult the Stunty Injury table, on page 60.  ",
  "Thick Skull":
    "<strong>Thick Skull: </strong>When an Injury roll is made against this player (even if this player is Prone, Stunned or has lost their Tackle Zone), they can only be KO'd in roll of 9, and will treat a roll of 8 as Stunned result. If this player also has the Stunty trait, they can only be KO'd on roll 8, and wikk treat a roll 7 as a Stunned result. All other results are unaffected.",
  Brawler:
    "<strong>Brawler: </strong>When this player performs a Block action on its own (but not as part of a Blitz action), this player may re-roll a single Both Down result.",
  Grab:
    "<strong>Grab: </strong>When this player performs a Block action (on its own or as part of a Blitz action), using this Skill prevents the target of the Block action from using the Side Step skill. Additionally, when this player performs a Block Action on its own (but not as part of a Blitz action), if the target is pushed back, this player may choose any unoccupied square adjacent to the target to push that player into. If there are no unoccupied squares, this Skill cannot be used. A player with this Skill cannot also have the Frenzy skill.",
  "Always Hungry":
    "<strong>Always Hungry: </strong>If this player wishes to perform a Throw Team-mate action, roll a D6 after they have finished moving, but before they throw their team-mate. On a roll of 2+, continue with the throw as normal. On a roll of 1, this player will attempt to eat their team-mate. Roll another D6:  • On a roll of 1, the team-mate has been eaten and is immediately removed from the Team Draft list. No apothecary can save them and no Regeneration attempts can be made. If the team-mate was in possession of the ball, it will bounce from the square this player occupies. • On a roll of 2+, the team-mate squirms free and the Throw Team-mate action is automatically fumbled, as described on ",
  "Loner (+4)":
    "<strong>Looner (4+): </strong>If this player wishes to use a team re-roll, roll a D6. If you roll equal to or higher than the target number shown in brackets, this player may use the team re-roll as normal. Otherwise, the original result stands without being re-rolled but the team re-roll is lost just as if it had been used.",
  "Mighty Blow (+1)":
    "<strong>Mighty Blow: </strong>When an opposition player is Knocked Down as the result of a Block action performed by this player (on its own or as part of a Blitz action), you may modify either the Armour roll or Injury roll by the amount shown in brackets. This modifier may be applied after the roll has been made. This Skill cannot be used with the Stab or Chainsaw traits. ",
  "Projectile Vomit":
    "<strong>Projectile Vomit: </strong>Instead of performing a Block action (on its own or as part of a Blitz action), this player may perform a ‘Projectile Vomit’ Special action. Exactly as described for a Block action, nominate a single Standing player to be the target of the Projectile Vomit Special action. There is no limit to how many players with this Trait may perform this Special action each team turn. To perform a Projectile Vomit Special action, roll a D6: • On a roll of 2+, this player regurgitates acidic bile onto the nominated target. • On a roll of 1, this player belches and snorts, before covering itself in acidic bile. • In either case, an Armour roll is made against the player hit by the Projectile Vomit. This Armour roll cannot be modified in any way. • If the armour of the player hit is broken, they become Prone and an Injury roll is made against them. This Injury roll cannot be modified in any way. • If the armour of the player hit is not broken, this Trait has no effect. A player can only perform this Special action once per turn (i.e., Projectile Vomit cannot be used with Frenzy or Multiple Block). ",
  "Realy Stupid":
    "<strong>Realy Stupid</strong>When this player is activated, even if they are Prone or have lost their Tackle Zone, immediately after declaring the action they will perform but before performing theaction, roll a D6, applying a +2 modifier to the dice roll if this player is currently adjacent to one or more Standing team-mates that do not have this Trait: • On a roll of 1-3, this player forgets what they are doing and their activation ends immediately. Additionally, this player loses their Tackle Zone until they are next activated. • On a roll of 4+, this player continues their activation as normal and completes their declared action. Note that if you declared that this player would perform an action which can only be performed once per team turn and this player’s activation ended before the action could be completed, the action is considered to have been performed and no other player on your team may perform the same action this team turn. ",
  Regeneration:
    "<strong>Regeberation: </strong>After a Casualty roll has been made against this player, roll a D6. On a roll of 4+, the Casualty roll is discarded without effect and the player is placed in the Reserves box rather than the Casualty box of their team dugout. On a roll of 1-3, however, the result of the Casualty roll is applied as normal. ",
  "Throw Team-mate":
    "<strong>Throw Team-mate: </strong>If this player also has a Strength characteristic of 5 or more, they may perform a Throw Team-mate action, as described on page 52, allowing them to throw a teammate with the Right Stuff trait. ",
};
