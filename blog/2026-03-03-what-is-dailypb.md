---
title: "What Is DailyPB? The Story of How One Frustrated Pickleball Player Built a Platform for 4,000"
description: "DailyPB started with a simple problem: pickleball schedules scattered across Facebook groups, PDFs, and WhatsApp threads. Here's how one player fixed it."
authors: chuck
tags: [dailypb, story, platform, community]
date: 2026-03-03
---

![Four active pickleball courts photographed from above, all courts full of players.](/img/blog/aerial-courts-20-waiting.jpeg)

*Four courts, all full. This is what a thriving pickleball community looks like.*

If you've been playing pickleball for more than a few months, you already know the drill.

Someone in your local Facebook group posts a schedule. Then someone else posts a correction. There's a PDF in the Files section that may or may not be current, and a WhatsApp thread where the schedule might be pinned or might not be, depending on whether the group admin got around to it. A text chain you joined six months ago has the Tuesday times, but you're pretty sure those changed. And you're standing in your kitchen on a Sunday morning trying to remember: does the Bushrod advanced session start at 4:00 or 4:30?

That was me, and that frustration is exactly how DailyPB got started.

<!-- truncate -->

---

## I Just Wanted to Find a Game

Around 2022, I'd been playing pickleball for a couple of years and was looking to level up, specifically to find advanced open play sessions in the East Bay. I knew they existed. I'd been to some of them. But actually tracking down the accurate times and locations was a nightmare.

The information was scattered everywhere: emails, text chains, Facebook groups, PDFs buried in Facebook group file sections, WhatsApp threads. There was no single place to look. There was no single source of truth. And there was definitely no guarantee that whatever you found was still accurate.

I figured there had to be a better way to organize this.

I wasn't a developer. I wasn't technical at all. But I'd heard about a low-code platform called Bubble.io that let non-programmers build real web applications. So I did what seemed logical at the time: I decided to learn Bubble by building the thing I needed.

---

## Building It From Scratch (and From Scratch, I Mean Scratch)

Before I could build anything, I needed data. So I went to Places2Play.com and looked up every pickleball facility in the Bay Area. For the ones that had phone numbers, I called. For the ones that didn't, I emailed. I talked to every single person who would talk to me, and some of them kept me on the phone for an hour. But eventually, I had it: a comprehensive list of open play sessions across the Bay Area, times and locations, in a spreadsheet.

Then I built the site in Bubble and entered it all in.

The first version was simple. Just a weekly schedule, Monday through Sunday, with every open play session listed in order. Nothing fancy. But it was accurate, it was in one place, and it was free to use.

I posted about it once in the East Bay Pickleball Association Facebook group.

Within two days, 800 people had visited the site.

That told me everything I needed to know about whether this was a real problem.

![The original DailyPB, circa 2022. A simple weekly schedule, Monday through Sunday. That was it.](/img/blog/old_site.png)

*The original DailyPB, circa 2022. A simple weekly schedule, Monday through Sunday. That was it.*

---

## What Made It Actually Work: Accurate Data

Plenty of websites have stale information. What made DailyPB different from the beginning wasn't the technology. It was the commitment to accuracy.

I built the platform so that hosts could manage their own sessions directly. They could control times, cancellations, and specific session details. They could add co-hosts with no limit on how many. And if something was wrong, I fixed it immediately.

Players started trusting DailyPB because when they showed up, the session was actually happening. The time was right. The information was current. In a world where pickleball schedules had been scattered across five different communication channels, that reliability was genuinely new.

Two people were instrumental in making that early version what it was: Cathy and Darlene. Both were deeply active in the local pickleball community, managing multiple sessions and helping players find games. They became ambassadors for DailyPB in those early days and gave invaluable feedback on making sure the site actually worked for real pickleball players, not just in theory. The platform reflects their fingerprints as much as anyone's.

<img src="/img/blog/darlene_vendegna.webp" alt="Darlene, one of DailyPB's earliest ambassadors and a cornerstone of the East Bay pickleball community." style={{maxWidth: '320px', display: 'block', margin: '0 auto'}} />

*Darlene, one of DailyPB's earliest ambassadors and a cornerstone of the East Bay pickleball community.*

Word spread. The platform grew. And then the hosts started asking for something more.

---

## The Evolution: From Schedule to Platform

Since the players were already there, several hosts came to me with a reasonable question: could I add some kind of sign-up feature?

At the time, I was running my own Friday Night Lights group at Bushrod. Eighteen players, $5 each to cover court costs and balls. I was collecting via Venmo, which sounds simple until you've actually tried to chase down 18 people for $5 each after a session. There were always one or two who forgot. Reminding them felt awkward for such a small amount, but it added up.

So I learned about Stripe Connect, which allowed players to pay before they could complete their sign-up. Suddenly, everyone who showed up to my session had already paid. No chasing. No awkward follow-ups. Just confirmed, committed players.

It was a game changer.

Around that same time, a fellow named Sam was running a group called Sam's Recess Sessions, intermediate-level play, great energy, and he was signing up a ton of players. Sam was savvy and practical, and he gave me constant feedback. One of his most impactful suggestions: reminders. He wanted automated 24-hour and 2-hour reminders sent to players before each session.

It sounds simple, but the impact was huge. Players showed up on time. Cancellations came in early enough to open spots for others. The whole experience got tighter and more professional.

Then there was Will.

<img src="/img/blog/will_tams.jpg" alt="Will, whose coaching practice and relentless feedback helped shape DailyPB into the platform it is today." style={{maxWidth: '320px', display: 'block', margin: '0 auto'}} />

*Will, whose coaching practice and relentless feedback helped shape DailyPB into the platform it is today.*

Will was building a coaching business and starting to run his sessions on DailyPB. A coaching practice has different operational needs than a casual open play group, and Will needed the platform to keep up. Over hundreds of back-and-forth exchanges, he pushed DailyPB to become something far more capable than it would have been otherwise. He became one of the most important collaborators in DailyPB's history. One feature he inspired was session cloning, which is the ability to take an entire session (which can involve 50 or more configuration variables) and duplicate it in seconds. For anyone running recurring coaching programs or event series, that feature alone saves hours.

---

## What DailyPB Is Today

![DailyPB today: featured sessions, weekly calendar, round robins, team events, and full session management.](/img/blog/site_desktop.png)

*DailyPB today: featured sessions, weekly calendar, round robins, team events, and full session management.*

What started as a Monday-through-Sunday schedule list is now a comprehensive session management platform. Here's a sense of what it can do:

**For open play hosts:** Sessions can be set to recur indefinitely on a weekly basis. Hosts can modify a single occurrence, or change all future sessions at once, the kind of granular control that makes managing a busy open play program actually manageable.

**For competitive play:** DailyPB supports rotating player round robins and fixed partner round robins, two very different formats that require very different bracket logic, both handled natively. There is also an ad hoc game creation tool that supports unlimited rounds and unlimited player brackets. Pickleball players are creative, and not every format fits a predefined mold. This tool lets hosts or players build games on the fly for whatever format they have in mind.

**For teams:** Most recently, working with a player named Michael, DailyPB has developed full team management functionality: unlimited players, a bench system, draft capabilities, free agency, and more. Team pickleball is an emerging format, and DailyPB is building the infrastructure for it in real time.

**For all sessions:** Payments via Stripe, automated reminders, waitlists, cancellation management, co-host permissions, and more.

At this point, I honestly have a hard time thinking of something it doesn't do for pickleball session management.

---

## Why I'm Telling You All This

Here's the thing: the problem I solved in the East Bay in 2022 still exists everywhere else.

If you play pickleball in Austin, or Denver, or Charlotte, or anywhere that the sport has taken hold (and it's taken hold everywhere) you probably recognize the scenario from the opening of this post. Schedules in five different places. PDFs no one updates. WhatsApp threads where the pinned message is from eight months ago.

The solution isn't complicated. It's a simple, accurate, centralized source of truth that hosts can manage themselves and players can trust.

I built DailyPB because I was a frustrated player who couldn't find a game. I learned a no-code platform from scratch, called every facility in the Bay Area, and posted one time in a Facebook group. The rest grew from there.

If your local scene looks the way mine did, and there's a good chance it does, the same approach can work in your city. You don't need to be technical. You don't need a big budget. You need accurate data, a platform that's easy to use, and a community that's been waiting for exactly this.

That's what DailyPB is. And if you want to bring it somewhere new, I'd love to talk.

---

*DailyPB currently serves nearly 4,000 players across the San Francisco Bay Area. To find open play sessions near you or to learn about bringing DailyPB to your city, visit [dailypb.com](https://dailypb.com).*
