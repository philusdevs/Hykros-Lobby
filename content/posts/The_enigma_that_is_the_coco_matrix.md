---
title: The Enigma that is the Coco Matrix 
date: 2023-06-27
tags: [Maygii, Guide]
social_image: '/media/logo.png'
description:  The Enigma that is the Coco Matrix 
---
Author: [Maygii](https://maygi.carrd.co/)


# The Enigma that is the Coco Matrix 

Ever lay in bed on a weekday evening and think "hey I should be working on something productive"? Yeah that was me today so I figured it's time to figure out how exactly the Fiona tether works with buffs and whatnot, but in my testing, I ran into something that threw me off - the **Coco matrix**. For those who didn't know, this matrix buffs base attack, meaning its effectively a separate multiplier from other attack buffs, as this increased base attack will increase the value of the following ATK % buffs. Simple, right? No.

tldr
====

coco matrix increases your atk by a portion of your BASE ATK, which does NOT include elemental attack. only raw flat ATK, which isn't actually shown anywhere on your stat page

note: you dont need to know 99% of what is in this post
=======================================================

but i spent a few hours playing with this so maybe you can be entertained by the spaghetti going on. enjoy. [i also wrote this entire post before deciding to make a video for it so uh here's a video version as well lol](https://youtu.be/CFUjt6E2C6I)

ugly math time
==============

With my test setup, I was observing the below increase to Physical attack with a 0* Coco matrix (12.5% ATK)


![r/TowerofFantasy - [Math] The Enigma that is the Coco Matrix](https://preview.redd.it/math-the-enigma-that-is-the-coco-matrix-v0-brj76m3ntf0b1.png?width=633&format=png&auto=webp&s=faf9caf8093feb8ac1e8a98d67b2e34ce916e824)



The increase of base attack was 9.5% instead of the expected 12.5%. How could that be? I tested other elements to see if the values were as expected:


![r/TowerofFantasy - [Math] The Enigma that is the Coco Matrix](https://preview.redd.it/math-the-enigma-that-is-the-coco-matrix-v0-orkv32vntf0b1.png?width=676&format=png&auto=webp&s=a3934c4b1b6be570b87558b1b2ba855ae760ce16)



So clearly, the 12.5% is supposed to work - then what's the deal with Physical? Is it because I already have some Phys ATK % on my gear that's throwing off the results with some spaghetti code? Perhaps. Doing the math, I have **19.93%** Physical ATK with this setup. But even if there was some weird "calculate the gain additive to the current ATK buff then add it to base ATK instead" spaghetti, that would yield an estimated gain of (1 + .1993 + .125) / 1.1993 = **+10.4%**, instead of the **9.5%** that was missing. So, where did the 1% go? I pondered around my room thinking and thinking. It's just not possible. Nothing makes sense. I figured I might as well take off all my ATK % and see if I could get any better result.



![r/TowerofFantasy - [Math] The Enigma that is the Coco Matrix](https://preview.redd.it/math-the-enigma-that-is-the-coco-matrix-v0-03zhvgkotf0b1.png?width=787&format=png&auto=webp&s=dbec0656d01fb4fa6bdd9075682f3699c67751ba)



...and with no Physical ATK % gear, I saw the same result. So what was going on? Does Hotta just hate Physical players? Then it struck me. The difference between my attack stats was that I had **Physical Attack gear.** Yeah, you know how we're really used to combining Attack and Elemental Attack into one metric? Coco matrix only works with the FLAT ATTACK.


![r/TowerofFantasy - Coco matrix only increases the Flat Attack portion (653) and doesn't care about specific Elemental Attack (439), even though they're usually lumped into the same value](https://preview.redd.it/math-the-enigma-that-is-the-coco-matrix-v0-0alp0b3qtf0b1.png?width=392&format=png&auto=webp&s=0833be5718472d9ef7f7d11b48d3431504584bad)



Coco matrix only increases the Flat Attack portion (653) and doesn't care about specific Elemental Attack (439), even though they're usually lumped into the same value

I had already unequipped all my ATK % equipment, but of my remaining equipment, I summed up the Physical Attack (4715) and subtracted it from the Physical attack value (18715), to get 14000, my true attack value (fun fact, for some reason Flame and Frost attack were 13996, not sure why). 12.5% of 14000 would be a 1750 increase - which is exactly the increase that we saw. As such, we can conclude that **Coco matrix increases base attack by a % of your flat attack. QED.**

*"so should i start building flat attack to be the best support ever"*

Not particularly, no. That'd just increase the value you buff yourself (your teammates would have to be running Flat ATK instead to get buffed more), which isn't particularly useful to your team unless you're using Fiona, in which case...

The **tether** buffs your teammate by a % of your **Altered Attack,** which does benefit from Elemental Attack.

"so is coco matrix garbage then"

Again, not particularly. It might not be as strong as it seems, but then also remember that it's increasing **base attack** instead of acting as an **ATK % buff**, meaning its essentially functioning as its own multiplier, which adds some value back into it. However, content such as VA give a large amount of buffs to ALL ATTACK types (aka not flat ATK), so Coco matrix hardly adds anything in that case.