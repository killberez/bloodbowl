export const teams = {
  blackOrcs: {
    players: [
      {
        number: 0,
        position: "Goblin Bruiser Linemen",
        qty: 12,
        cost: 45000,
        ma: 6,
        st: 2,
        ag: 3,
        pa: 4,
        av: 8,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        currentValue: 0,
        skillsTraits: ["Dodge", "Right Stuff", "Stunty", "Thick Skull"],
        primary: "A",
        secondary: "GPS",
      },
      {
        number: 0,
        position: "Black Ork",
        qty: 6,
        cost: 90000,
        ma: 4,
        st: 4,
        ag: 4,
        pa: 5,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        currentValue: 0,
        skillsTraits: ["Brawler", "Grab"],
        primary: "GS",
        secondary: "AP",
      },
      {
        number: 0,
        position: "Trained troll",
        qty: 1,
        cost: 115000,
        ma: 4,
        st: 5,
        ag: 5,
        pa: 5,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        currentValue: 0,
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
        number: 0,
        position: "imperialRetainerLinemen",
        qty: 12,
        cost: 45000,
        ma: 6,
        st: 3,
        ag: 4,
        pa: 4,
        av: 8,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Fend"],
        primary: "G",
        secondary: "AS",
      },
      {
        number: 0,
        position: "imperialThrowers",
        qty: 2,
        cost: 75000,
        ma: 6,
        st: 3,
        ag: 4,
        pa: 3,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Pass", "Running Pass"],
        primary: "GP",
        secondary: "AS",
      },
      {
        number: 0,
        position: "nobleBlitzers",
        qty: 2,
        cost: 105000,
        ma: 7,
        st: 3,
        ag: 3,
        pa: 4,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Block", "Catch"],
        primary: "AG",
        secondary: "PS",
      },
      {
        number: 0,
        position: "bodygards",
        qty: 4,
        cost: 90000,
        ma: 6,
        st: 3,
        ag: 4,
        pa: 5,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Stand Firm", "Wrestle"],
        primary: "GS",
        secondary: "A",
      },
      {
        number: 0,
        position: "ogre",
        qty: 1,
        cost: 145000,
        ma: 5,
        st: 5,
        ag: 4,
        pa: 5,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
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
  necromanticHorrorTeams: {
    players: [
      {
        number: 0,
        position: "Zombie Linemen",
        qty: 16,
        cost: 40000,
        ma: 4,
        st: 3,
        ag: 4,
        pa: 0,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Regeneration"],
        primary: "G",
        secondary: "AS",
      },
      {
        number: 0,
        position: "Ghoul Runners",
        qty: 2,
        cost: 75000,
        ma: 7,
        st: 3,
        ag: 4,
        pa: 4,
        av: 8,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Dodge"],
        primary: "AG",
        secondary: "PS",
      },
      {
        number: 0,
        position: "Wraiths",
        qty: 2,
        cost: 95000,
        ma: 6,
        st: 3,
        ag: 3,
        pa: 0,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: [
          "Block",
          "Foul Appearance",
          "No Hands",
          "Regeneration",
          "Side Step",
        ],
        primary: "GS",
        secondary: "A",
      },
      {
        number: 0,
        position: "Werewolves",
        qty: 2,
        cost: 125000,
        ma: 8,
        st: 3,
        ag: 4,
        pa: 4,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Claws", "Frenzy", "Regeneration"],
        primary: "AG",
        secondary: "PS",
      },
      {
        number: 0,
        position: "Flesh Golems",
        qty: 2,
        cost: 115000,
        ma: 4,
        st: 4,
        ag: 4,
        pa: 0,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Regeneration", "Stand Firm", "Thick Skull"],
        primary: "GS",
        secondary: "A",
      },
    ],
    teamRerolls: {
      qty: 8,
      price: 70000,
    },
    specialRules: ["Masters of Undeath", "Sylvanian Spotlight"],
    Tier: 2,
    Apothecary: "NO",
  },
  ogreTeams: {
    players: [
      {
        number: 0,
        position: "Gnoblar Linemen",
        qty: 16,
        cost: 15000,
        ma: 5,
        st: 1,
        ag: 3,
        pa: 5,
        av: 6,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Dodge", "Right Stuff", "Side Step", "Stunty", "Titchy"],
        primary: "A",
        secondary: "G",
      },
      {
        number: 0,
        position: "Ogre Runt Punter",
        qty: 1,
        cost: 145000,
        ma: 5,
        st: 5,
        ag: 4,
        pa: 4,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: [
          "Bone Head",
          "Kick Team-mate",
          "Mighty Blow(+1)",
          "Thick Skull",
        ],
        primary: "PS",
        secondary: "AG",
      },
      {
        number: 0,
        position: "Ogre Blockers",
        qty: 5,
        cost: 140000,
        ma: 5,
        st: 5,
        ag: 4,
        pa: 5,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: [
          "Bone Head",
          "Mighty Blow(+1)",
          "Thick Skull",
          "Throw Team-mate",
        ],
        primary: "GS",
        secondary: "A",
      },
    ],
    teamRerolls: {
      qty: 8,
      price: 70000,
    },
    specialRules: ["Badlands Brawl", "Low Cost Linemen", "Old World Classic"],
    Tier: 3,
    Apothecary: "YES",
  },
  chaosChosenTeams: {
    players: [
      {
        number: 0,
        position: "Bestman Runner Linemen",
        qty: 16,
        cost: 60000,
        ma: 6,
        st: 3,
        ag: 3,
        pa: 4,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: ["Horns"],
        primary: "GMS",
        secondary: "AP",
      },
      {
        number: 0,
        position: "Chosen Blockers",
        qty: 4,
        cost: 100000,
        ma: 5,
        st: 4,
        ag: 3,
        pa: 5,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: [""],
        primary: "GMS",
        secondary: "A",
      },
      {
        number: 0,
        position: "Chaos Troll",
        qty: 1,
        cost: 115000,
        ma: 4,
        st: 5,
        ag: 5,
        pa: 5,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: [
          "Always Hugry",
          "Loner(+4)",
          "Mighty Blow(+1)",
          "Projectile Vomit",
          "Really Stupid",
          "Regeneration",
          "Throw Team-mate",
        ],
        primary: "MS",
        secondary: "AG",
      },
      {
        number: 0,
        position: "Chaos Ogre",
        qty: 1,
        cost: 140000,
        ma: 5,
        st: 5,
        ag: 4,
        pa: 5,
        av: 10,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: [
          "Bone Head",
          "Loner(+4)",
          "Mighty Blow(+1)",
          "Thick Skull",
          "Throw Team-mate",
        ],
        primary: "MS",
        secondary: "AG",
      },
      {
        number: 0,
        position: "Minotaur",
        qty: 1,
        cost: 150000,
        ma: 5,
        st: 5,
        ag: 4,
        pa: 0,
        av: 9,
        spp: 0,
        mng: false,
        ni: 0,
        tr: "-",
        skillsTraits: [
          "Loner(+4)",
          "Frenzy",
          "Horns",
          "Mighty Blow(+1)",
          "Thick Skull",
          "Unchanneled Fury",
        ],
        primary: "MS",
        secondary: "AG",
      },
    ],
    teamRerolls: {
      qty: 8,
      price: 60000,
    },
    specialRules: [
      "Favoured of... (choose either): Chaos Undivided, Khorne, Nurgle, Slaanesh or Tzeench",
    ],
    Tier: 2,
    Apothecary: "YES",
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
    "<strong>Regeneration: </strong>After a Casualty roll has been made against this player, roll a D6. On a roll of 4+, the Casualty roll is discarded without effect and the player is placed in the Reserves box rather than the Casualty box of their team dugout. On a roll of 1-3, however, the result of the Casualty roll is applied as normal. ",
  "Throw Team-mate":
    "<strong>Throw Team-mate: </strong>If this player also has a Strength characteristic of 5 or more, they may perform a Throw Team-mate action, as described on page 52, allowing them to throw a teammate with the Right Stuff trait. ",
  Fend:
    "<strong>Fend: </strong> If this player is pushed back as the result of any block dice result being applied against them, they may choose to prevent the player that pushed them back from following-up. However, the player that pushed them back may continue to move as part of a Blitz action if they have Movement Allowance remaining or by Rushing. This Skill cannot be used when this player is chain-pushed, against a player with the Ball & Chain trait or against a player with the Juggernaut skill that performed the Block action as part of a Blitz.",
  Pass:
    "<strong>Pass: </strong> This player may re-roll a failed Passing Ability test when performing a Pass action.",
  "Running Pass":
    "<strong>Rinning Pass: </strong> If this player performs a Quick Pass action, their activation does not have to end once the pass is resolved. If you wish and if this player has not used their full Movement Allowance, they may continue to move after resolving the ",
  Block:
    "<strong>Block: </strong> When a Both Down result is applied during a Block action, this player may choose to ignore it and not be Knocked Down, as described on page 57",
  Catch:
    "<strong>Catch: </strong> This player may re-roll a failed Agility test when attempting to catch the ball. ",
  "Stand Firm":
    "<strong> Stand Firm: </strong>This player may choose not to bepushed back, either as the result of a Block action made against them or by a chain-push. Using this Skill does not prevent an opposition player with the Frenzy skill from performing a second Block action if this player is still Standing after the first. ",
  Wrestle:
    "<strong>Wrestle: </strong> This player may use this Skill when a Both Down result is applied, either when they perform a Block action or when they are the target of a Block action. Instead of applying the Both Down result as normal, and regardless of any other Skills either player may possess, both players are Placed ",
  "Bone Head":
    "<strong>Bone Head: </strong> When this player is activated, even if they are Prone or have lost their Tackle Zone, immediately after declaring the action they will perform but before performing the action, roll a D6: • On a roll of 1, this player forgets what they are doing and their activation ends immediately. Additionally, this player loses their Tackle Zone until they are next activated. • On a roll of 2+, this player continues their activation as normal and completes their declared action. If you declared that this player would perform an action which can only be performed once per team turn and this player’s activation ended before the action could be completed, the action is considered to have been performed and no other player on your team may perform the same action this team turn.",
  Horns:
    "<strong>Horns: </strong> When this player performs a Block action as part of a Blitz action (but not on its own), you may apply a +1 modifier to this player’s Strength characteristic. This modifier is applied before counting assists, before applying any other Strength modifiers and before using any other Skills or Traits. ",
  Frenzy:
    "<strong>Frenzy: </strong> Every time this player performs a Block action (on its own or as part of a Blitz action), they must follow-up if the target is pushed back and if they are able. If the target is still Standing after being pushed back, and if this player was able to follow-up, this player must then perform a second Block action against the same target, again following-up if the target is pushed back. If this player is performing a Blitz action, performing a second Block action will also cost them one square of their Movement Allowance. If this player has no Movement Allowance left to perform a second Block action, they must Rush to do so. If they cannot Rush, they cannot perform a second Block action. Note that if an opposition player in possession of the ball is pushed back into your End Zone and is still Standing, a touchdown will be scored, ending the drive. In this case, the second Block action is not performed. A player with this Skill cannot also have the ",

  "Unchanneled Fury":
    "<strong>Unchanneled Fury: </strong> When this player is activated, even if they are Prone or have lost their Tackle Zone, immediately after declaring the action they will perform but before performing the action, roll a D6, applying a +2 modifier to the dice roll if you declared the player would perform a Block or Blitz action (or a Special action granted by a Skill or Trait that can be performed instead of a Block action): • On a roll of 1-3, this player rages incoherently at others but achieves little else. Their activation ends immediately. • On a roll of 4+, this player continues their activation as normal and completes their declared action. If you declared that this player would perform an action which can only be performed once per team turn and this player’s activation ended before the action could be completed, the action is considered to have been performed and no other player on your team may perform the same action this team ",
  "Side Step":
    "<strong>Side Step: </strong> If this player is pushed back for any reason, they are not moved into a square chosen by the opposing coach. Instead you may choose any cupied square adjacent to this player. This player is pushed back into that square instead. If there are no unoccupied squares adjacent to this player, this Skill cannot be used.",
  Titchy:
    "<strong>Titchy: </strong> This player may apply a +1 modifier to any Agility tests they make in order to Dodge. However, if an opposition player dodges into a square within the Tackle Zone of this player, this player does not count as Marking the moving player for the purposes of calculating Agility test modifiers.",
  "Kick Team-mate":
    "<strong>Kick Team-mate: </strong> Once per team turn, in addition to another player performing either a Pass or a Throw Team-mate action, a single player with this Trait on the active team can perform a ‘Kick Team-mate’ Special action and attempt to kick a Standing team-mate with the Right Stuff trait that is in a square adjacent to them. To perform a Kick Team-mate Special action, follow the rules for Throw Team-mate actions as described on page 52. However, if the Kick Team-mate Special action is fumbled, the kicked player is automatically removed from play and an Injury roll is made against them, treating a Stunned result as a KO’d result (note that, if the player that performed this action also has the Mighty Blow (+X) skill, the coach of the opposing team may use that Skill on this Injury roll). If the kicked player was in possession of the ball when removed from play, the ball will bounce from the square they occupied.",
  "Foul Appearance":
    "<strong>Foul Appearance: </strong> When an opposition player declares a Block action targeting this player (on its own or as part of a Blitz action), or any Special action that targets this player, their coach must first roll a D6, even if this player has lost their Tackle Zone. On a roll of 1, the player cannot perform the declared action and the action is wasted.",
};
