---
title: Attack% vs Damage% Explained
date: 2022-12-04
tags: [Maygii, Guide, Maths]
social_image: '/media/logo.png'
description: Attack%_vs_Damage% Explained
---
Author: [Maygii](https://maygi.carrd.co/)



I've seen a lot of confusion recently regarding Flat Attack, Attack%, vs Damage% on the new gear.

It's common knowledge that Damage% is superior - but that's at a 1:1 scale, and stat lines do NOT come equal. In order to find out what's actually better, let's dive into the math:

**Video Version:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/OxUgHf-qB44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


**Short Answer:**

On gear, Attack% rolls are preferable over Damage% lines.

- A6 Frost teams with Lin may see more Frost damage with Frost Damage % lines, at the cost of aberration damage

Flat Attack rolls may be worth more than Attack%, depending on your base attack (e.g. pre-resonance). Refer to the below table.

**Normal Multiplier**

</br>

<style>
table {
    border-collapse: collapse;
}
table, th, td {
   border: 1.5px solid black;
}
blockquote {
    border-left: solid blue;
    padding-left: 10px;
}
</style>

| Flat Attack Value | Threshold for how much Attack you need before Attack% is better |
| --- | --- |
| 93 (min attack roll) | 6458 |
| 150 | 10417 |
| 234 (max attack roll) | 16250 |
| 312 (max ele attack roll) | 21667 |

**Long Answer/Math:**

Let's start out by going over the basics with how Attack% and Damage% work.

**Attack%**

Attack % values stack additively with one another. If you have 10000 attack, and gain a 10% attack buff, you now have 11000 attack - a 10% increase from the start. However, if you gain another 10% attack buff on top of that, you're at 12000 attack - which is still a 20% increase from the start, but only a 12000/11000 = 9.09% increase from the previous state. This is what people refer to as "diminishing returns".

**Damge%**

Damage % values, for the most part, stack multiplicatively with one another. That is, if you hit a mob for 10000 damage, and gain a 10% Damage buff, you're doing 11000 damage. If you have two 10% Damage buffs, your 11000 is multiplied again by 1.1, for 12100 total, which is a 21% increase from the start. This compounding power is what makes damage % buffs favorable.

To summarize, when talking about relative gain for damage%, you'll be receiving the stated value of each damage buff at each step, verses attack where each increase is guaranteed to be equal to, or less than the stated value.

The below table details the relative gain at each step (e.g. the gain from one buff state to another) when adding another copy of a 10% Damage or Attack buff.


![r/TowerofFantasy - [Math] Attack% vs Damage%, explained](https://preview.redd.it/math-Attack-vs-Damage-explained-v0-ur24z148jx3a1.png?width=691&format=png&auto=webp&s=f5a5b85f54314ac316d5c4a6ceaa23b78c672c73)



**Gear**

On the new Vera gear, notable lines of damage-increasing stats include:

Flat attack (53 + 93-234)

Ele attack (69 + 125-312)

% Ele attack (1.26% + 1.44%)

% Elemental damage (0.65% + 0.72%)

and for visors, final Crit % (1.05% + 1.19%)

Let's start with Damage vs Attack%. Each roll of Damage % only goes up to 0.72%, while Attack % goes up by 1.44% per roll. Because Attack % is twice as high, you'll need +100% Attack buffs before Damage% is better than Attack%. With resonance, you have +15% Attack, and then depending on your composition, you may have more Attack% buffs laying around.

|  | Attack Buff Value | Advancement |
| --- | --- | --- |
| Lin - Moonlight Realm | 23% | A6 |
| Lin - Frost Moonlight Realm | 10% | A0 |
| Nemesis - 2 Electrode buff | 15% | A6 |
| Ruby - Ultimate Heat | 10% | A0 |
| Frigg - Frost Domain | 40% | A6 |

As you can see, there's kind of a stretch to push your total attack % buffs to 100%. As of right now, you'd have to be a A6 Frost player with a dedicated support main following you around with Coco trait buff spam - and for any other comp, you likely aren't getting close to 100% Attack even after party buffs. As such, Attack % is favorable over Damage % to roll on stat lines, unless global gets much more Attack % buffing units/equipment, especially because Element-specific Damage % buffs do not affect Lin's Aberration damage.

What about flat Attack verses Attack %? This is pretty easily to calculate - we just need to calculate for the breakpoint for how much Attack you need before the flat Attack value equals the 1.44% of that Attack. Here's a quick table for various flat Attack rolls and how much base Attack you'd need before Attack % is worth more.


![r/TowerofFantasy - [Math] Attack% vs Damage%, explained](https://preview.redd.it/math-Attack-vs-Damage-explained-v0-o258ywwxix3a1.png?width=692&format=png&auto=webp&s=b981a0f62a97fc6e121718933d30294c23c4aa8f)



Finally, we have Crit %. If you don't have any additional sources of critical damage, each 1% Critical chance is worth up to 0.5% damage, so the 1.19% Crit is worth a maximum 0.59% Damage (at 0% crit chance; at higher crit chance, it's worth even less) - even less than the % Ele damage. If you have a Crow matrix, your Crit Damage is increased by up to ~0.252 on average, making Crit% slightly more valuable than Damage% at 34% crit rate and below - but still paling in comparison to Attack % and flat Attack in most cases.

The average damage bonus from crits is an additive multiplier, meaning that the relative value of each additional amount of crit chance is worth relatively less than that before, making crit worth even less than the above values - and that's not even factoring in Crit Resist.

| Crit % | Gain per roll (1.19% Crit) | Gain per roll w/3* Crow |
| --- | --- | --- |
| 0 | 0.59% | 0.89% |
| 25 | 0.53% | 0.84% |
| 34 | 0.51% | 0.72% |
| 50 | 0.48% | 0.65% |
| 60 | 0.46% | 0.62% |
| 70 | 0.44% | 0.59% |
| 80 | 0.43% | 0.56% |
| 90 | 0.41%% | 0.54% |

Summary
=======

When compared at a 1:1 value, Damage % is stronger than Attack % in any scenario where you have any % Attack buffs to begin with. However, because Attack % has twice of high as a value on gear, it's more powerful than Damage % to roll on, barring some extreme situations - and depending on how much Attack you already have, flat Attack lines be worth even more than Attack %.