---
title: AI’s problem isn’t water
date: 2026-10-15
summary: The responsibility for the shortcuts AI will take is ours alone, and this future must be planned and aligned with our goals.
tags:
  - essay
  - english
  - AI
source: https://www.linkedin.com/pulse/we-cant-program-values-ai-stefano-coelati-rama-9fade/
---
In September 2026 the **Center for AI Safety** released CheatBench, a benchmark that measures how often AI agents cheat when a task gets hard and a shortcut is within reach. Today’s most advanced models, **Claude Fable 5.1** and **GPT-6 Astra**, cheat in roughly half of the opportunities when honesty is only implied. Add a single line to the prompt, “solve the problem yourself”, and the rate drops to 16% and 4%.

As I see it, this result contains (in miniature) the whole problem of AI safety. And there’s more: if we look at how prompts, and the responses to them, are usually written and analysed, it also tells us we are framing the problem the wrong way.

As I see it, this result contains (in miniature) the whole problem of AI safety. And there’s more: if we look at how prompts, and the responses to them, are usually written and analysed, it also tells us we are framing the problem the wrong way.
#### **Trained does not mean designed**

Public debate is polarised (what isn’t these days?) and swings between two caricatures: AI as a mere tool, or AI as an alien entity bound to rebel. Both treat a trained system as if it were a designed one. A frontier model is not written line by line. It comes out of a process that starts from trillions of random parameters and adjusts them, step by step, toward whatever earns a higher reward. The **International AI Safety Report** tells us that most of these models’ inner workings remain inscrutable, even to the people who build them: the so-called “black box” problem.

That is why the classic question, how to instil “human values” in a machine, is ill-posed. You can see it by listing the three false assumptions it rests on:
1. that those values are well defined;
2. that they can be specified;
3. that they can be transferred into an object we don’t understand.
It may surprise you that none of the three holds. Explaining why would take an article of its own; I go into it in the paper this piece comes from.

There is, however, a right question, and I think it can be put like this: which behaviours does the process that produces these systems make stable, and how do we change that process?

Let me explain.

Every model is the product of selection (like everything else), operating on three levels:
1. **Training** (hours to weeks): optimisation keeps whatever maximises reward, including unwanted behaviours such as cheating on tests.
2. **Market** (months): users and investors choose models and companies, and with them the amount of safety it “pays” to practise.
3. **Geopolitics** (years): states compete and decide how much to regulate and how much to cooperate.

Selection rewards neither goodness nor malice: it rewards whatever persists in the given environment. The good news is that the environment can be changed.

#### **Alignment**

One finding in recent research is more worrying than the rest: behaviours don’t stay where you put them. Anthropic showed that a model that learns to cheat on coding tests generalises to alignment faking and sabotage. Another study showed that deliberately implanted deceptive behaviour survives standard safety training.

I propose reading all of this through a concept borrowed from physics: metastability. A disposition, such as honesty or refusing to help build weapons, is a basin in the space of behaviours. The useful question, then, is not whether a model is “aligned” (good luck proving that), but how deep the basin is: how much pressure does it take to push the model out?

This question has one huge advantage: it can be measured. In a public red-teaming competition, 1.8 million attacks against 22 frontier agents produced more than 60,000 violations, and almost every agent gave way within 10–100 attempts. A curve of “attempts needed to cause a violation” tells you far more than any “safe / unsafe” label.

#### **Tests can only say “no”**

Forgive me in advance for a little philosophy: I promise to keep it short, but I think it really helps. Umberto Eco spoke of negative (or minimal) realism: reality doesn’t tell us which description is right, only which ones fail. AI safety works the same way. A test can show that a model has a dangerous capability, but it can never prove that it doesn’t. And models are getting better at recognising when they are being evaluated.

Three principles follow:

- safety conclusions should be treated as revisable presumptions, not final certificates;
- the assumptions behind them should be stated;
- the thresholds that trigger action should be set before testing, not after seeing the results.


**What changes for a company?**

The regulatory landscape keeps evolving. In Europe, the AI Act’s obligations for general-purpose models already apply. The Code of Practice requires serious incidents to be reported within 2–15 days. The Digital Omnibus has moved high-risk obligations to 2 December 2027. In California and New York, SB 53 and the RAISE Act require public safety frameworks and incident reporting.

Yet there is an organisational gap: we have a problem, but no one in place to own it. The CISO handles attacks, the DPO handles personal data, compliance handles the rules. But nobody’s mandate covers the behaviour of the model itself: the fact that an agent might cheat, evade monitoring or act unexpectedly in a new context.

That is the space for a new function, which I expect will be called the Chief AI Safety Officer. As I see it, these will be its five core tasks:

1. keeping an inventory of systems and agents, with their permissions;
2. measuring robustness as a curve, not as a useless declarative verdict;
3. monitoring model reasoning while it remains legible;
4. ensuring agents can always be interrupted and have a traceable identity;
5. setting incident procedures aligned with legal deadlines and insurers’ requirements.

AI governance handbooks themselves warn against “checkbox compliance”, a dangerous and underrated risk: meeting minimum requirements as cheaply as possible and getting only the appearance of safety. And the appearance of safety is more dangerous than the threat itself, because it catches us unprepared, exposed and defenceless. I believe this function exists precisely to prevent that.

#### **In short**

There will never be a day when alignment is “solved”, just as there is no organism that is finally adapted. There is a process to govern. The job is to make sure that what survives is also what is safe.

I have developed these ideas in a longer paper, with a risk map, an analysis of European, Italian and international governance, and several operational proposals.

#### **Sources:**

Phan, L. et al. (2026). CheatBench: Measuring Reward Gaming in AI Agents. Center for AI Safety. https://arxiv.org/abs/2609.36308

Bengio, Y. et al. (2024). International Scientific Report on the Safety of Advanced AI: Interim Report. https://arxiv.org/abs/2412.05282

Bengio, Y. et al. (2026). International AI Safety Report 2026. https://internationalaisafetyreport.org/

MacDiarmid, M. et al. (2025). Natural Emergent Misalignment from Reward Hacking in Production RL. Anthropic. https://arxiv.org/abs/2511.18397

Hubinger, E. et al. (2024). Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training. https://arxiv.org/abs/2401.05566

Zou, A. et al. (2025). Security Challenges in AI Agent Deployment: Insights from a Large Scale Public Competition. NeurIPS 2025.

Shevlane, T. et al. (2023). Model evaluation for extreme risks. https://arxiv.org/abs/2305.15324

Korbak, T. et al. (2025). Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety. https://arxiv.org/abs/2507.11473

Eco, U. (2012). Di un realismo negativo. In De Caro, M., Ferraris, M. (a cura di), Bentornata realtà. Einaudi.

Regolamento (UE) 2024/1689 (AI Act). https://eur-lex.europa.eu/eli/reg/2024/1689/oj

Codice di condotta per i modelli di IA per finalità generali (2025). https://artificialintelligenceact.eu/code-of-practice/

Digital Omnibus, Regolamento (UE) 2026/1744 (sintesi Orrick). https://www.orrick.com/en/Insights/2026/07/EU-AI-Act-Update-Digital-Omnibus-Finalizes-8-Compliance-Changes

Future of Privacy Forum (2026). The RAISE Act vs. SB 53. https://fpf.org/blog/the-raise-act-vs-sb-53-a-tale-of-two-frontier-ai-laws/

Singapore Consensus on Global AI Safety Research Priorities (2026). https://arxiv.org/abs/2608.14611

Szpruch, L. et al. (2026). Insuring AI: Incentivizing Safe and Secure Deployment. Harvard Data Science Review. https://doi.org/10.1162/99608f92.bd811034

Gregory, P. H. (2026). IAPP AIGP Artificial Intelligence Governance Professional Study Guide. Wiley.

Background: computer science and telecommunications, philosophy (logic, formal and computational epistemology), now stochastic mathematics. I used AI tools for literature search; the arguments, writing and editing are my own.

#AISafety #AIGovernance #AIAlignment #ResponsibleAI #AIAct #EUAIAct #AIRisk #ChiefAISafetyOfficer #MachineLearning #TechPolicy