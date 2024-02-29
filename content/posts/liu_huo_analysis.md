---
title: Liu Huo Analysis/Guide
date: 2023-06-27
tags: [Maygii, Guide, Analysis]
social_image: "/media/logo.png"
description: Liu Huo Analysis
---

Researcher: [Maygii](https://maygi.carrd.co/)

Liu Huo is here! What role does she take in Flame teams, and how strong is she? We'll figure it out by looking at her kit, advancements, matrices, teamcomps, rotations, and finally, comparisons!

# Video Version

<iframe width="560" height="315" src="https://www.youtube.com/embed/yrBrwyBW9rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Kit Explanation

There's a lot of bloat to her kit, so let's keep things simple, starting with her passives. Liu offers **4** forms of passive damage, **2** of which work off-field.

First off, is her weapon passive, Fiery Explosion. This deals damage that scales with your attack, crit, and sum of all your resistances, **but it is not affected by any damage boosts** at all outside of titan stats. However, it is increased by 30% when using another non-flame and non-altered elemental weapon, but overall, the damage contribution from this effect is minor.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-e6p7o2jnxf8b1.png?width=973&format=png&auto=webp&s=7d82f1e0b4ba1bde046c648070a05fc0a2a83253)

Next, are her Sparrow Feathers. These will fire off on your locked-on once per second, dealing a small amount of normal attack damage. When Liu Huo is off-field, they fire once every 2 seconds instead, unless you're using her trait, then they will keep shooting every second. You restore these with Liu Huo's dodge attacks.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-i902i62pxf8b1.png?width=973&format=png&auto=webp&s=f08678e492eb651e24cfc5a125ba21d2d7e629aa)

Doing damage with normal attacks has a 50% chance to trigger Small Seal, randomly triggering one of three passive effects, each of which have a cooldown. You don't need to think much of this other than free damage, and one of the effects also pulls mobs together every 12 seconds.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-hfm7pu9qxf8b1.png?width=971&format=png&auto=webp&s=0b1966811c25d15955ca7aa21df50e230003e563)

Finally, casting any Flame discharge will immediately inflict Sparroburn to the locked-on target, dealing a small amount of damage per second. This stacks up to **2** times and lasts for **15** seconds.

We'll talk about her skill next. Various actions will generate Calligraphy Characters, such as discharges, skills, dodges, and basic attacks. You can generate up to two characters for each type, and when using her skill, bonus damage is dealt per Calligraphy Character on the field, and various buffs are granted, along with an ignore flame resistance buff and up to 16 seconds of Hyperbody. However, you really don't need to think too much about this, as you'll get all the buffs when doing the normal rotation.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-htvsbdjuxf8b1.png?width=978&format=png&auto=webp&s=e78adf797746dec1a4e331072290dd7324b0281e)

So, Liu Huo is a great buffer and has a lot of passive damage. That's all, right? No. Her basic attacks hit like a literal truck, and offer the highest raw DPS in the game by far, while also offering an insane amount of charge. Out of all of her combos, only one is really relevant - and that is the basic attack hold into dodge attack combo. The basic attack hold has a lot of frontloaded damage - cancel the animation of the big swipe with a dodge attack, before repeating the chain. Her dodge attack leaves a puddle that deals a DOT to enemies, and holding her dodge attack makes this puddle larger, but note that the dodge hold attack is a DPS loss in single target situations.

</br>

| Combo                   | MV%/s | Notes                       |
| ----------------------- | ----- | --------------------------- |
| Auto chain              | 534%  | LMB spam                    |
| Auto hold hold          | 411%  | Not recommended             |
| Auto x2 hold auto       | 487%  | Not recommended             |
| Auto x2 hold dodge      | 583%  | Highest DPS                 |
| Auto x2 hold dodge hold | 458%  | DPS loss but higher DOT AOE |

Now that we understand her power, let's move on to her advancements!

# Advancements

We'll examine the relative gain from her advancements in 3 different teams - the meta team with Lan and Fiona, a Triple Fire team, and an Altered team. Remember, the tables that will be presented aren't meant to compare the teams to each other, but rather to determine the value of pulling for Liu in each of them.

Her A1 causes Sparrofeathers to refresh the duration of Sparroburn, while also spreading the burn to nearby targets, once every 5 seconds. When triggering this spread effect, it triggers a detonation that inflicts 50% of the total damage of all burns inflicted on the target. Unlike Ruby's detonation which detonates based on the remaining damage of the burn, this always uses the full value, meaning that even a burn with 1 second left will explode for a lot of damage. As such, this advancement adds a lot of value for the Triple Fire team, but is still decently strong for the other teams.

Her A3 causes you to consume your Sparrow Feathers rapidly after dropping below 50% HP, regenerating your health until you reach full health, working in the offhand. This effect is not boosted by Lan's A1. Technically, this advancement could lead to a DPS loss if anything, but you generate feathers fast enough that this is never an issue, even with Lan shooting out 4 feathers per second on top of it. As such, the DPS value of this is solely in the base stats of this advancement.

Liu's A5 allows you to prevent lethal damage once every 60 seconds, gaining maximum feathers and 1000 weapon charge when it procs. Even if you could conveniently trigger this off cooldown, additional discharges do not benefit the DPS of this comp, so the value of this advancement is also only in base stats.

Finally, her A6 increases flame damage by an additional 14% when activating the Pinnacle state from her skill. While 14% is a powerful upgrade in terms of a single advancement, remember that since A1, everything up to this is all utility.

Relative gain from with certain advancement of Liu

| Liu Advancement | Meta (Liu Lan Fiona) | Triple Flame (Liu Lan Anna) | Altered (Liu Lin Fiona) |
| --------------- | -------------------- | --------------------------- | ----------------------- |
| 0               | 100%                 | 100%                        | 100%                    |
| 1               | 109%                 | 125%                        | 109%                    |
| 3               | 110%                 | 126%                        | 110%                    |
| 5               | 112%                 | 128%                        | 111%                    |
| 6               | 126%                 | 145%                        | 122%                    |

How does the power gain of her advancements compare to her matrices? Let's take a look!

# Matrices

Liu's 2-piece matrix increases Final Damage unconditionally, and also grants you 20 Sparrow Feathers upon dodging instead of 15. You won't ever have problems running out of Sparrow Feathers in most cases, so the additional effect is not that useful. This works in the offhand slot.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-spk54hjhyf8b1.png?width=897&format=png&auto=webp&s=046d4ed929d0f09d4dd4e2243f9e7d479c849dae)

The 4-piece set increases all elemental damage when equipped with one or more flame weapons, with an additional boost after using Liu Huo's skill, which for some reason, decays by a massive 1% over 25s. Why? I don't know. Anyways, this also works in the off-hand slot. Let's now compare the power of this matrix to other options.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-92zmt5ciyf8b1.png?width=882&format=png&auto=webp&s=b19904237ec77597b6cbddc1b802f3f972226a64)

Compared to other limited Flame matrices, Liu Huo's is a little bit stronger. Fiona's matrix remains the strongest choice for limited matrices, however. F2P matrices such as Samir/Shiro and world boss matrices are all very close to each other, and at 3*, perform better than 0* limited matrices, due to how Liu Huo's on-field potential is very strong. Samir/Cobalt matrix is a little bit more powerful than these options as well, though it's questionable to invest such a large amount of base chips into Cobalt's matrices for this small gain.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-wvsszfhkyf8b1.png?width=1335&format=png&auto=webp&s=118475e413caf5f570fc58ce7bbdeb6d13a98620)

# Team Comps

The rotation for all the teamcomps is actually 99% the same, so let's take a close look into this one, using the meta team as a base.

With Fiona, Liu Huo, and Lan, you'll want to use Wellspring and Hydro Focus on Fiona. Wellspring provides a generic buff, and is ideal even if you don't have enough HP for the bonus effect. You do NOT need Torrential Force, as skills and discharges do not make up too much of your total damage, and Liu Huo already generates 2 full charge bars with ease in the rotation.

For matrices, we just use each respective set - Fiona, Liu Huo, and Lan. The best Titan stat to use here is normal attack, as a majority of Liu Huo's damage output is classified as such.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-ldspv4dnyf8b1.png?width=912&format=png&auto=webp&s=8a8f2e590bd62e912d465bd7bfe16999836f5d69)

Let's take a look at these comparisons before we move on, as these replacements all lead to different, viable teams. First, what if you skipped Lan and replaced her with Annabella? Of course, Annabella can't compete with Lan's passive damage with her burn alone, but the value she offers is still quite decent with her burn enhancement.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-l5hgholoyf8b1.png?width=602&format=png&auto=webp&s=f00df5d4ccfa6de13f3a564eed92584930de6990)

If you swapped Lan to Lin for an Altered team, the damage potential is slightly higher than the Annabella Liu team, though note that this team is still primarily Flame damage, not Altered damage.

Finally, if you swapped Fiona to Annabella for a triple Flame team, the raw damage potential is higher than the other two options. This is the only DPS comp where you would use Liu Huo's trait. Note that these numbers are without matrices, though. When Fiona's matrices are in play, the triple Flame comp becomes relatively weaker than the other two comps.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-2004e2iryf8b1.png?width=1843&format=png&auto=webp&s=9dd1263935e575863260c37016d4113332ed4be4)

Now, let's dive into the rotation. Start out with your Fiona discharge and skill, making sure to wait a second to actually hit a full charge bar to discharge to Lan. Use Lan's skill, then switch into Liu, pressing her skill immediately, and then going into her auto hold dodge combo. Repeat this combo until hitting two full charge bars, then discharge to Lan, use her skill, and discharge to Fiona and use her skill as well. Switch back to Liu, and the rotation repeats from here. It's a very simple rotation that focuses mainly on DPSing on Liu, switching out to the other weapons to buff with discharges and skills.

So, how do all the alternate comps play? Extremely similarly, with one small difference - when you don't have both Lan and Fiona, you don't want to discharge to both your alternate weapons. As such, you'll want to always discharge to Fiona first, because her skill fills energy slowly and will allow you to swap to your alternate weapon without using its discharge. You can then use Liu Huo's discharge, which is a slightly stronger alternative.

In the triple Flame comp, you're out of luck, and have to just jump cancel Annabella's discharge. Remember, in Annabella comps, due to bugginess, it's recommended to put out 3 dodges per rotation.

# Comparisons

Ok, it's time for comparisons! But don't forget the DISCLAIMER - theorycrafting should be taken with a grain of salt, because it's just that - theory ! It's not perfect, but it gives us a good idea of where things stand.

First, how much investment do you need in Liu Huo to beat out Annabella? There's... really no comparison here. Liu Huo out of the box is already stronger than Annabella A6, even including base stats. Note that these values are without resistances - and while Annabella gains a bit back when resistance is in play, Liu Huo also offers a sizeable DPS increase under resistance.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-0kwbcy3vyf8b1.png?width=902&format=png&auto=webp&s=0d2f7afe768e578538da1f641c07ddebf094f779)

How about in terms of alternatives? Let's say you have Liu Huo and Fiona as a base - how do the other flame units compare? Lan is the winning option by a long shot, offering buffs and a huge amount of passive damage to supplement Liu's damage. At A0, Annabella isn't too far behind Lan, and can be a useable option. Ruby and Cobalt really don't offer much here - Ruby's main DPS potential has been long powercrept, to a point where stacking her heat for a Flame ATK boost isn't even worth the time anymore. As such, Cobalt unironically offers more, through her burns and skill damage, though this power still isn't much to write home about.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-op9h9bawyf8b1.png?width=890&format=png&auto=webp&s=d3b67b23cf93e6078fe6981720855e43e59c9df9)

Let's now look at all the elements, starting with maximum investment comparisons.

The new meta Flame comp is theoretically slightly stronger than Rubilia, which makes it effectively over 50% stronger than the old Flame comp. Huh, that's powercreep for you I guess. The alternate Liu Huo comps are all a good amount weaker, but they're still a sizeable upgrade from the previous comp. Note that Volt and Flame do have their pros and cons though - Rubilia has a strict rotation, but better burst and AOE, while Flame struggles with AOE but has a very simple, easy-to-maintain rotation.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-6woh3xeyyf8b1.png?width=1236&format=png&auto=webp&s=f3bf59530d0c1e523e2ca7e0b90e536faf06486b)

With A6 units and no limited matrices, the conclusions are pretty much the same. Liu Huo offers the highest theoretical DPS, with the alternative options trailing a bit behind.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-fth2h060zf8b1.png?width=1248&format=png&auto=webp&s=c9127c67163141aea0a2b2cf449420c90f257655)

Let's look at a new comparison point - I'm calling it F2P+, with A3 units and no limited matrices, and 3* standard and 0* world boss matrices. This is still achievable by F2Ps, though is more directed towards veteran F2Ps who have saved since day 1 and may or may not have bricked their F2P status with certain... events. Here, the power level of comps is extremely close - until you get to the Liu Huo comps, anyway, then Flame's low-investment power starts to stick out like a sore thumb.

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-82vr5do2zf8b1.png?width=1261&format=png&auto=webp&s=f3921ce05e6ffd8ee8dfcd409d2f105aabd42813)

Finally at the "F2P" investment - aka, the more new-player friendly investment level, with 1* units and 0* matrices, Flame is a giant that eclipses the damage of all the other comps by a huge amount. I get that Flame is F2P friendly now, but I think this is a bit too much. When Alyss was released, a max investment frost comp was just shy of 300K DPM %s... how things have changed...

![r/TowerofFantasy - 【Math】Complete Liu Huo Analysis/Guide](https://preview.redd.it/math-complete-liu-huo-analysis-guide-v0-tmch7km1zf8b1.png?width=1250&format=png&auto=webp&s=da4f1f1bedd8dc08dd9cd5dd43ef2f656fcb6c2d)

# Summary

Liu Huo is a powerhouse that offers passive damage, buffs, and huge personal DPS. She is extremely strong right out of the box, pushing low investment Flame to limits far beyond balance. However, without any advancements, Flame players may find the lack of sustain troublesome, as other characters such as Fenrir and Gnunno offer significant survivability with just their first advancement.
