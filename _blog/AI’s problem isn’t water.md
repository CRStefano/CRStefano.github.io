---
title: AI’s problem isn’t water
date: 2026-10-28
summary: If we keep putting soul-cleansing first when dealing with artificial intelligence issues, we’ll end up running out of water, not from using it up, but because we won’t be able to afford it
tags:
  - essay
  - english
  - ai
source: https://www.linkedin.com/pulse/ais-problem-isnt-water-stefano-coelati-rama-oidff/
---
Lately I’ve been flooded with content about the costs, broadly speaking, of today’s artificial intelligence. Talking with friends and watching videos featuring some [“important” people](https://www.youtube.com/watch?v=NifdZz9ptWk), I’ve noticed that whenever AI comes up, sooner or later someone says it: _“Did you know every ChatGPT question uses half a litre of water?”_ It has become a conditioned reflex, almost a purification ritual (of the soul, not the water) before using a tool that, deep down, we all use.

The claim doesn’t come out of nowhere: its history is easy to trace. But, as often happens, the context got lost along the way. And with the context, in my view, so did the real problem.

The first question to ask, I think, is: _“how much does a prompt really drink?”_

The _“half a litre”_ figure comes from a 2023 study (Li et al., _Making AI Less Thirsty_), which estimated that GPT-3 used about half a litre of water every 10–50 responses, not per response. Since then, models have become far more efficient. In 2025 Google published measurements of its own systems: a median Gemini text prompt uses 0.24 watt-hours and 0.26 millilitres of water, about five drops. OpenAI has reported similar values, around 0.3 millilitres.

A word of caution, though. These figures leave out model training and, above all, the water used indirectly by the power plants that generate the electricity. According to Lawrence Berkeley National Laboratory, in the United States this indirect water is about twelve times the water used directly for cooling. Yet even multiplying by ten, we are still talking about a few millilitres per query. For comparison, the water footprint of a cup of coffee is estimated at around 130 litres, and that of a kilo of beef at around 15,000. So does this mean [(to half-quote a book)](https://www.amazon.it/mangiare-bistecca-scientifica-ambientalismo-consapevole/dp/8804754478) that if we eat less beef, we can use more AI?

Getting the numbers right and reasoning in purely quantitative terms is not a way of letting anyone off the hook. We need to argue with the facts on the table, because if we measure badly, we decide badly.

The impact is real, but it isn’t where we’re looking. It isn’t in the single prompt I send to Claude from my bedroom, asking it to translate this article into elegant English. It’s in the place where a data centre is built and in the energy it consumes.

In 2023, US data centres directly used about 64 billion litres of water for cooling, a figure that could double or quadruple by 2028. In some cases a single facility uses more than a quarter of a community’s available water. Globally, the International Energy Agency estimates that data centres consumed about 415 terawatt-hours of electricity in 2024 (around 1.5% of the world total), and that this could exceed 900 by 2030.

So yes, there is an environmental problem, but it is highly local and mostly about energy. The good news is that it’s also a “normal” problem, in the sense that it can be tackled in a targeted way. We need to act on **where** we build, **how** we cool, **where** the energy comes from and **how transparent** we are about it. None of this is free: [there’s no such thing as a free lunch](https://en.wikipedia.org/wiki/No_such_thing_as_a_free_lunch). Everything has a price, and here the price is some bureaucracy and regulation, with permits and disclosure obligations.

So the second question is: _“why is the water issue so popular? Why is it so easy to talk about?” (Apologies, these are two questions)_

Water is an almost perfect topic: concrete, familiar (we use it every day), measurable and easy to moralise. And there’s more: we need water to live. Talking about water means talking about people who live and die. All of this turns into an individual choice (“I don’t use AI”) that gives the feeling of doing something, even when it doesn’t. It’s part of a phenomenon I can’t stand, virtue signalling (or, more simply, moral exhibitionism, which I’ve written about [here](https://stefanocoelatirama.com/blog/moral-exhibitionism/)).

The point is that individual abstention doesn’t change the system. (Someone might object that if one person does it, everyone will; that we have to start somewhere; that a waterfall is made of drops; or that we should set a good example. But I don’t want to be an example to anyone: I want to live my life by the rules and, above all, I want to do useful things.) In fact, I think a choice that is “moral” only in appearance is harmful, because it draws attention away from harder problems that don’t yet have a price.

Models cheat. On CheatBench, from the Center for AI Safety, the most advanced models of 2026 take dishonest shortcuts in about half of the cases where honesty is only implied.

As I wrote in a [previous article](https://www.linkedin.com/pulse/we-cant-program-values-ai-stefano-coelati-rama-9fade/), behaviours don’t stay where you put them. Anthropic showed that a model that learns to cheat on coding tests generalises to sabotage and alignment faking. And beyond cheating, agents are fragile: they give way and break the very rules they’re supposed to operate within. In a public red-teaming competition, almost every frontier agent violated its own rules within 10–100 attempts. Meanwhile, in the most exposed occupations, employment among 22-to-25-year-olds is about 19% below that of their peers, mainly because they’re no longer being hired.

And, most importantly, tests aren’t enough. They can show that a risk exists, never that it doesn’t. On top of that, models increasingly recognise when they’re being evaluated, while managing risk requires solid measurements and quantitative data.

In strictly economic terms, water is a cost we know how to see. The risk of an autonomous system misbehaving in a critical setting is a cost we don’t yet know how to price. And we can’t ignore something that will eventually cause an incident: it’s not a question of if, but when.

In the video I mentioned at the start, Luciano Floridi says that in a desert one extra shower makes a difference, just as five kilos matter to someone who needs to lose a lot of weight. He’s right: in places that really are deserts, a data centre can weigh heavily, which is exactly why the problem has to be tackled place by place (Furthermore, we should also remember that we, as a planet, are in a closed system.). But in general we risk looking at the finger instead of the moon. Our main problem isn’t water scarcity: it’s that we’re economically devastated (and the energy issue is a key point in it; I will never stop saying how much we need to return to nuclear power) and our infrastructure isn’t ready to handle this new technology.

If we want to take the impact of AI seriously, environmental and otherwise, and try to bring wellbeing and prosperity to as many people as possible (setting aside the nonsense of “happy degrowth”), the sensible demands are few and concrete:

1. **Standardised environmental transparency**: energy, direct and indirect water use, location and energy source for every large data centre.
2. **Measured robustness**: not “safe / unsafe” labels, but curves showing how much pressure it takes to make a system fail.
3. **Liability and insurance**: if the cost of harm falls on those who build and deploy the system, safety enters the balance sheet.
4. **In-house expertise**: someone whose mandate is the behaviour of models, not just their formal compliance.

And I’ll stop here.

Worrying about AI is right. But it pays to worry about the right things.

_Background: computer science and telecommunications, philosophy (logic, formal and computational epistemology), now stochastic mathematics. I used AI tools for literature search; the arguments, writing and editing are my own._

- Li, P., Yang, J., Islam, M. A., Ren, S. (2023). Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models. [https://arxiv.org/abs/2304.03271](https://arxiv.org/abs/2304.03271)
- Elsworth, C. et al. (2025). Measuring the environmental impact of delivering AI at Google Scale. [https://arxiv.org/abs/2508.15734](https://arxiv.org/abs/2508.15734)
- Shehabi, A. et al. (2024). 2024 United States Data Center Energy Usage Report. Lawrence Berkeley National Laboratory. Sintesi su AIhub: [https://aihub.org/2025/09/24/data-centers-consume-massive-amounts-of-water-companies-rarely-tell-the-public-exactly-how-much](https://aihub.org/2025/09/24/data-centers-consume-massive-amounts-of-water-companies-rarely-tell-the-public-exactly-how-much)
- International Energy Agency (2025). Energy and AI. [https://www.iea.org/reports/energy-and-ai](https://www.iea.org/reports/energy-and-ai)
- Mekonnen, M. M., Hoekstra, A. Y. (2012). A Global Assessment of the Water Footprint of Farm Animal Products. Ecosystems 15. Water Footprint Network.
- Phan, L. et al. (2026). CheatBench: Measuring Reward Gaming in AI Agents. [https://arxiv.org/abs/2609.36308](https://arxiv.org/abs/2609.36308)
- MacDiarmid, M. et al. (2025). Natural Emergent Misalignment from Reward Hacking in Production RL. [https://arxiv.org/abs/2511.18397](https://arxiv.org/abs/2511.18397)
- Zou, A. et al. (2025). Security Challenges in AI Agent Deployment: Insights from a Large Scale Public Competition. NeurIPS 2025.
- Brynjolfsson, E., Chandar, B., Chen, R. (2026). No Widespread Displacement, but the AI Employment Gap for Young Workers Has Widened to 19%. [https://digitaleconomy.stanford.edu/news/canariesaug26/](https://digitaleconomy.stanford.edu/news/canariesaug26/)
- Szpruch, L. et al. (2026). Insuring AI: Incentivizing Safe and Secure Deployment. [https://doi.org/10.1162/99608f92.bd811034](https://doi.org/10.1162/99608f92.bd811034)

#AISafety #AIGovernance #DigitalSustainability #DataCenters #ResponsibleAI #ArtificialIntelligence #AIAct #GreenAI
