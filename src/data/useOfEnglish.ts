import type {
  MultipleChoiceClozeExercise,
  OpenClozeExercise,
  WordFormationExercise,
  KeyWordTransformationExercise,
} from '../types';

// ---------------- PARTE 1: Multiple-choice cloze ----------------
export const multipleChoiceCloze: MultipleChoiceClozeExercise[] = [
  {
    id: 'moe-p1-01',
    part: 1,
    title: 'La apicultura urbana',
    text: `In recent years, a quiet revolution has been taking {{0}} on the rooftops of major cities. Urban beekeeping, once considered an eccentric hobby, has {{1}} into a mainstream movement embraced by environmentalists and food enthusiasts alike. Proponents argue that keeping bees within city limits can play a {{2}} role in reversing the decline of pollinator populations, which have been hit hard by pesticides and habitat loss.

Critics, however, are quick to {{3}} out that urban environments are not without their own hazards. Air pollution and a shortage of diverse flowering plants can leave city bees nutritionally worse {{4}} than their rural counterparts. As beekeeping has grown in popularity, some neighbourhoods have seen hive numbers rise to a point where competition for scarce resources threatens to {{5}} colonies rather than help them.

Despite these concerns, most experts agree that the benefits far {{6}} the risks. Local councils in several cities have begun offering grants to residents willing to {{7}} up a hive, provided they complete a basic training course first.`,
    gaps: [
      { options: ['place', 'position', 'spot', 'site'], answer: 0 },
      { options: ['grown', 'raised', 'increased', 'enlarged'], answer: 0 },
      { options: ['key', 'grand', 'heavy', 'strong'], answer: 0 },
      { options: ['point', 'tell', 'mark', 'note'], answer: 0 },
      { options: ['off', 'down', 'out', 'up'], answer: 1 },
      { options: ['weaken', 'shrink', 'reduce', 'lessen'], answer: 0 },
      { options: ['outweigh', 'overtake', 'surpass', 'overrun'], answer: 0 },
      { options: ['set', 'put', 'build', 'raise'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-02',
    part: 1,
    title: 'El auge del trabajo remoto',
    text: `When the shift to remote work first took {{0}}, many managers assumed it would be a temporary measure. Five years on, however, it is clear that the change has {{1}} a lasting mark on how companies operate. Surveys consistently {{2}} that employees value the flexibility remote work affords, even as some executives remain {{3}} that productivity may be suffering behind closed doors.

The debate has, if anything, become more {{4}}, with some firms mandating a full return to the office while others double {{5}} on fully distributed teams. What is striking is how little hard evidence either side can {{6}} to support its position. Until more rigorous, long-term studies are carried {{7}}, the argument is likely to remain as much about intuition and company culture as about data.`,
    gaps: [
      { options: ['hold', 'place', 'root', 'grip'], answer: 1 },
      { options: ['left', 'made', 'done', 'set'], answer: 0 },
      { options: ['suggest', 'tell', 'speak', 'talk'], answer: 0 },
      { options: ['convinced', 'sure', 'unconvinced', 'certain'], answer: 2 },
      { options: ['polarised', 'divided', 'split', 'separated'], answer: 0 },
      { options: ['down', 'up', 'over', 'back'], answer: 1 },
      { options: ['point', 'call', 'draw', 'bring'], answer: 1 },
      { options: ['out', 'on', 'through', 'off'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-03',
    part: 1,
    title: 'El resurgir del vinilo',
    text: `Vinyl records, once dismissed as a relic of a pre-digital age, have staged a remarkable comeback over the past decade. Industry figures show that sales have {{0}} for twelve consecutive years, a trend that few analysts saw {{1}}. For older listeners, buying records again is often simply about {{2}}, a way of reconnecting with music they first bought decades ago. Younger fans, meanwhile, tend to be drawn by the tactile experience: the {{3}} of removing a record from its sleeve, the ritual of placing the needle just so.

Not everyone is convinced the revival will {{4}}. Pressing plants, many of which closed decades ago, have struggled to {{5}} with demand, leading to production delays that can stretch to several months. Critics also point out that streaming remains, by a considerable {{6}}, the dominant way most people actually listen to music, meaning vinyl functions more as a collectible than a genuine {{7}} to digital formats.`,
    gaps: [
      { options: ['climbed', 'mounted', 'ascended', 'elevated'], answer: 0 },
      { options: ['coming', 'approaching', 'nearing', 'arriving'], answer: 0 },
      { options: ['nostalgia', 'memory', 'remembrance', 'sentiment'], answer: 0 },
      { options: ['sensation', 'feeling', 'impression', 'emotion'], answer: 0 },
      { options: ['last', 'endure', 'continue', 'persist'], answer: 0 },
      { options: ['pace', 'step', 'track', 'rate'], answer: 0 },
      { options: ['margin', 'distance', 'gap', 'measure'], answer: 0 },
      { options: ['alternative', 'substitute', 'replacement', 'option'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-04',
    part: 1,
    title: 'Expediciones fallidas a la Antártida',
    text: `Among the many attempts to reach the South Pole in the early twentieth century, few have captured the public imagination quite like Ernest Shackleton's ill-fated Endurance expedition. Though the mission ultimately {{0}} in its stated goal of crossing the continent on foot, the survival of the entire crew after their ship was crushed by pack ice is still {{1}} as one of history's greatest feats of leadership.

What set Shackleton apart, historians argue, was his ability to keep morale {{2}} even as conditions grew increasingly desperate. He was careful to {{3}} routine and discipline aboard the ship long after any realistic hope of completing the expedition as planned had {{4}}. Diaries kept by crew members {{5}} to a leader who rationed not only food but also fear itself, doling out honest information in small, manageable amounts.

Modern expedition leaders, facing far less {{6}} risks, still study Shackleton's decisions closely. His refusal to abandon a single member of his crew, whatever the {{7}}, remains a reference point in discussions of leadership under extreme pressure.`,
    gaps: [
      { options: ['failed', 'collapsed', 'faltered', 'declined'], answer: 0 },
      { options: ['regarded', 'viewed', 'noted', 'marked'], answer: 0 },
      { options: ['high', 'tall', 'elevated', 'raised'], answer: 0 },
      { options: ['maintain', 'preserve', 'sustain', 'uphold'], answer: 0 },
      { options: ['vanished', 'faded', 'evaporated', 'disappeared'], answer: 1 },
      { options: ['testify', 'attest', 'point', 'speak'], answer: 1 },
      { options: ['extreme', 'severe', 'dire', 'harsh'], answer: 0 },
      { options: ['cost', 'price', 'expense', 'toll'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-05',
    part: 1,
    title: 'El auge de la ciencia ciudadana',
    text: `Citizen science, the practice of enlisting members of the public to help collect or analyse scientific data, has {{0}} considerably since the early days of birdwatchers submitting handwritten counts by post. Smartphone apps now allow volunteers to {{1}} everything from cloud formations to roadkill sightings with a single tap, generating datasets far larger than any research team could {{2}} on its own.

Scientists have been quick to {{3}} the potential, particularly for projects that require observations across huge geographic areas or long stretches of time. A single funded researcher, however dedicated, simply cannot be in a thousand gardens at {{4}}; a thousand volunteers can. The trade-off, inevitably, is data quality: without proper training, volunteers can misidentify species or record locations {{5}}, and researchers must build in ways to catch and correct such errors.

Even with these limitations, several major discoveries in astronomy and ecology have been {{6}} directly to citizen scientists sifting through data that professional researchers had no time to examine {{7}}.`,
    gaps: [
      { options: ['evolved', 'developed', 'expanded', 'transformed'], answer: 0 },
      { options: ['log', 'report', 'register', 'record'], answer: 0 },
      { options: ['assemble', 'gather', 'amass', 'compile'], answer: 1 },
      { options: ['recognise', 'acknowledge', 'embrace', 'grasp'], answer: 0 },
      { options: ['once', 'a time', 'the same', 'simultaneously'], answer: 0 },
      { options: ['incorrectly', 'inaccurately', 'wrongly', 'mistakenly'], answer: 1 },
      { options: ['attributed', 'credited', 'assigned', 'traced'], answer: 0 },
      { options: ['thoroughly', 'closely', 'carefully', 'properly'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-06',
    part: 1,
    title: 'El declive de la escritura a mano',
    text: `For most of human history, the ability to write by hand was considered an essential skill, one that took years of practice to {{0}}. Today, in many classrooms, that assumption is being quietly {{1}} into question, as keyboards and touchscreens increasingly {{2}} the pencil and notebook.

Some educators argue that this shift is simply an inevitable adaptation to modern life, no more worth {{3}} over than the earlier move from slate to paper. Others {{4}} that something genuinely valuable is being lost: research suggests that the physical act of writing by hand helps {{5}} information into memory more effectively than typing does.

Whatever the outcome of this debate, few schools have gone so far as to {{6}} handwriting instruction altogether, and most now settle for a compromise: enough practice to ensure legibility, without the extensive drilling that once {{7}} the subject.`,
    gaps: [
      { options: ['master', 'perfect', 'acquire', 'develop'], answer: 0 },
      { options: ['called', 'brought', 'thrown', 'drawn'], answer: 0 },
      { options: ['replace', 'substitute', 'displace', 'supersede'], answer: 0 },
      { options: ['mourning', 'missing', 'losing', 'regretting'], answer: 0 },
      { options: ['maintain', 'insist', 'argue', 'claim'], answer: 0 },
      { options: ['embed', 'cement', 'lodge', 'fix'], answer: 0 },
      { options: ['abandon', 'drop', 'scrap', 'discard'], answer: 0 },
      { options: ['dominated', 'governed', 'ruled', 'controlled'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-07',
    part: 1,
    title: 'La minería en aguas profundas',
    text: `As demand for the metals used in batteries and renewable energy technology continues to grow, mining companies have begun casting an increasingly {{0}} eye toward the ocean floor, where vast fields of mineral-rich nodules lie scattered across the seabed. Extracting them, proponents argue, could {{1}} pressure on land-based mines, many of which have well-documented environmental and human rights problems.

Marine scientists, however, have raised {{2}} that deep-sea ecosystems, some of which remain almost entirely unstudied, could be irreversibly damaged before researchers even have the chance to {{3}} what lives there. Sediment plumes stirred up by mining equipment, they warn, could {{4}} across enormous distances, smothering marine life far beyond the immediate mining site.

A handful of countries have called for a moratorium on deep-sea mining until more research can be {{5}} out, while others, keen to secure early access to these resources, have pushed to begin commercial extraction as soon as regulations {{6}} it. The International Seabed Authority now finds itself under considerable {{7}} to settle the matter one way or the other.`,
    gaps: [
      { options: ['covetous', 'greedy', 'hungry', 'interested'], answer: 0 },
      { options: ['relieve', 'ease', 'lift', 'reduce'], answer: 0 },
      { options: ['concerns', 'worries', 'fears', 'alarms'], answer: 0 },
      { options: ['determine', 'establish', 'ascertain', 'discover'], answer: 1 },
      { options: ['spread', 'drift', 'travel', 'extend'], answer: 0 },
      { options: ['carried', 'done', 'worked', 'taken'], answer: 0 },
      { options: ['allow', 'permit', 'enable', 'let'], answer: 0 },
      { options: ['pressure', 'strain', 'tension', 'stress'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-08',
    part: 1,
    title: 'La etiqueta de las propinas en el mundo',
    text: `Few social customs vary as {{0}} from country to country as tipping, a practice that can leave even experienced travellers genuinely uncertain about how to {{1}}. In the United States, failing to tip generously is widely {{2}} as rude, even when service has been mediocre at best; in Japan, by contrast, leaving money on the table can cause visible {{3}}, since the gesture may be interpreted as implying that the establishment's staff need to be bribed into providing decent service.

These differences are rarely {{4}} out of thin air. In countries where service staff rely heavily on tips to make up a living wage, the custom has become deeply {{5}} in the culture and the economics of the industry. Where staff are paid a proper wage regardless, tipping tends to be seen as a small, optional bonus for {{6}} service, rather than an essential {{7}} of income.

Understanding these distinctions before travelling can spare visitors both financial confusion and, in some cases, genuine social embarrassment.`,
    gaps: [
      { options: ['dramatically', 'widely', 'wildly', 'significantly'], answer: 1 },
      { options: ['proceed', 'behave', 'act', 'react'], answer: 0 },
      { options: ['regarded', 'viewed', 'seen', 'considered'], answer: 0 },
      { options: ['offence', 'embarrassment', 'discomfort', 'awkwardness'], answer: 2 },
      { options: ['plucked', 'pulled', 'drawn', 'conjured'], answer: 0 },
      { options: ['embedded', 'rooted', 'ingrained', 'entrenched'], answer: 1 },
      { options: ['exceptional', 'outstanding', 'excellent', 'superior'], answer: 0 },
      { options: ['source', 'component', 'element', 'part'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-09',
    part: 1,
    title: 'La paradoja de la elección',
    text: `Contrary to what economic theory has traditionally assumed, presenting consumers with an ever-expanding {{0}} of options does not reliably make them happier with their eventual decision. Psychologists studying this phenomenon, often referred to as the paradox of choice, have found that excessive choice can actually {{1}} decision-making, leaving people paralysed by possibilities rather than empowered by them.

Part of the explanation lies in the sheer cognitive {{2}} of comparing numerous alternatives, each with its own trade-offs. Faced with dozens of near-identical options, consumers frequently {{3}} to heuristics, mental shortcuts that simplify the decision but rarely {{4}} the theoretically optimal outcome.

There is also a psychological cost that persists {{5}} the decision has been made. Buyers confronted with abundant choice often experience greater regret afterwards, wondering whether one of the many alternatives they {{6}} might have served them better. Retailers who have experimented with deliberately {{7}} their product ranges report, somewhat counterintuitively, healthier sales as a result.`,
    gaps: [
      { options: ['array', 'range', 'spectrum', 'scope'], answer: 0 },
      { options: ['hinder', 'impede', 'hamper', 'obstruct'], answer: 0 },
      { options: ['burden', 'load', 'weight', 'strain'], answer: 1 },
      { options: ['resort', 'turn', 'revert', 'default'], answer: 0 },
      { options: ['guarantee', 'ensure', 'secure', 'warrant'], answer: 0 },
      { options: ['beyond', 'past', 'after', 'following'], answer: 2 },
      { options: ['declined', 'rejected', 'passed over', 'dismissed'], answer: 0 },
      { options: ['narrowing', 'reducing', 'trimming', 'paring'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-10',
    part: 1,
    title: 'La lingüística forense',
    text: `When a threatening letter, a ransom note or a suspicious suicide note becomes central to a criminal investigation, forensic linguists are sometimes called upon to {{0}} light on its likely author. Unlike the confident voice-matching techniques portrayed in television dramas, real forensic linguistic analysis tends to proceed with considerably more {{1}}, since written style, unlike a fingerprint, is neither wholly unique nor entirely {{2}}.

Analysts typically {{3}} their attention on recurring patterns: distinctive spelling errors, unusual punctuation habits, or a preference for certain words over their near-synonyms. Such quirks, while never {{4}} in isolation, can collectively help narrow down a pool of suspects or, in some cases, rule an individual {{5}}.

The field gained particular prominence following its role in identifying the so-called Unabomber, whose distinctive vocabulary and syntax, once his manifesto was published, {{6}} a family member's suspicions and ultimately led to his arrest. Since then, forensic linguistics has been increasingly {{7}} upon in cases ranging from cyberbullying to corporate fraud.`,
    gaps: [
      { options: ['shed', 'cast', 'throw', 'shine'], answer: 0 },
      { options: ['caution', 'care', 'restraint', 'reserve'], answer: 0 },
      { options: ['fixed', 'stable', 'consistent', 'constant'], answer: 2 },
      { options: ['focus', 'concentrate', 'centre', 'direct'], answer: 0 },
      { options: ['conclusive', 'definitive', 'decisive', 'compelling'], answer: 0 },
      { options: ['out', 'off', 'aside', 'away'], answer: 0 },
      { options: ['confirmed', 'raised', 'aroused', 'triggered'], answer: 0 },
      { options: ['drawn', 'called', 'relied', 'leaned'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-11',
    part: 1,
    title: 'La historia de la hora estandarizada',
    text: `Before the arrival of railways, the precise time of day varied, often quite noticeably, from one town to the next, since each community traditionally {{0}} its clocks to local solar noon. This patchwork of slightly {{1}} local times caused little practical inconvenience so long as travel remained slow and communication infrequent.

Railway companies, however, quickly found themselves grappling with a genuine operational {{2}}: published timetables became dangerously unreliable, and in some documented cases outright collisions, when each station along a line kept its own, {{3}} different, local time. The solution that gradually {{4}} was to adopt a single standardised time across an entire railway network, regardless of a station's actual longitude.

What began as a purely practical railway convention {{5}} spread far beyond the rail industry itself, as towns and cities found it increasingly impractical to maintain a local time that {{6}} noticeably from the time observed by the trains passing through them. Within a few decades, most industrialised countries had formally {{7}} standardised time zones, bringing an end to centuries of purely local timekeeping.`,
    gaps: [
      { options: ['set', 'adjusted', 'aligned', 'synchronised'], answer: 0 },
      { options: ['differing', 'varying', 'divergent', 'disparate'], answer: 0 },
      { options: ['dilemma', 'predicament', 'quandary', 'conundrum'], answer: 1 },
      { options: ['subtly', 'marginally', 'noticeably', 'slightly'], answer: 0 },
      { options: ['emerged', 'materialised', 'evolved', 'arose'], answer: 0 },
      { options: ['eventually', 'gradually', 'steadily', 'progressively'], answer: 0 },
      { options: ['differed', 'varied', 'diverged', 'deviated'], answer: 0 },
      { options: ['adopted', 'introduced', 'implemented', 'established'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-12',
    part: 1,
    title: 'La sinestesia',
    text: `For most people, the various senses operate along entirely separate {{0}}, each processing its own type of input without interference from the others. For a small minority, however, sensory perception is far more entangled: sounds may reliably {{1}} specific colours, or written numbers may consistently {{2}} to occupy distinct positions in physical space, a phenomenon known as synaesthesia.

Long dismissed by sceptical researchers as an elaborate metaphor rather than a genuine perceptual experience, synaesthesia has, over the past few decades, been {{3}} established through carefully controlled experiments as a real and measurably {{4}} neurological trait. Brain imaging studies have shown unusually {{5}} activity between sensory regions that, in most people, remain largely independent of one another.

What makes synaesthesia particularly interesting to researchers is its remarkable {{6}}: the specific pairings each synaesthete experiences, a certain letter always {{7}} the colour red, for instance, tend to remain stable throughout that individual's entire life, even as memory for almost everything else inevitably shifts and fades.`,
    gaps: [
      { options: ['channels', 'tracks', 'lines', 'paths'], answer: 0 },
      { options: ['evoke', 'trigger', 'summon', 'provoke'], answer: 0 },
      { options: ['seem', 'appear', 'happen', 'tend'], answer: 0 },
      { options: ['conclusively', 'definitively', 'firmly', 'soundly'], answer: 0 },
      { options: ['distinct', 'discrete', 'separate', 'particular'], answer: 0 },
      { options: ['heightened', 'elevated', 'increased', 'intensified'], answer: 0 },
      { options: ['consistency', 'stability', 'permanence', 'constancy'], answer: 0 },
      { options: ['producing', 'generating', 'yielding', 'prompting'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-13',
    part: 1,
    title: 'La historia de la anestesia',
    text: `Before the mid-nineteenth century, surgery was, almost without exception, an ordeal to be {{0}} rather than a procedure to be calmly undergone, with patients typically restrained by assistants while surgeons worked as {{1}} as humanly possible to minimise suffering. The first public demonstration of ether as a surgical anaesthetic, performed in Boston in 1846, {{2}} transformed this grim calculus almost overnight, rendering painless operations that had previously been {{3}} unthinkable.

News of the breakthrough spread with unusual {{4}}, reaching hospitals across Europe within months, a remarkable pace for an era largely dependent on ships and printed correspondence. Surgeons who had spent entire careers {{5}} to operate as quickly as possible, valuing speed above nearly every other consideration, suddenly found themselves able to work with an unfamiliar, almost {{6}} deliberateness.

This newfound patience brought its own complications, however. Operations that anaesthesia made {{7}} to attempt in the first place grew correspondingly more ambitious and invasive, and, for several subsequent decades, surgical mortality from infection actually rose before antiseptic techniques eventually caught up.`,
    gaps: [
      { options: ['endured', 'suffered', 'withstood', 'survived'], answer: 0 },
      { options: ['quickly', 'rapidly', 'swiftly', 'speedily'], answer: 0 },
      { options: ['instantly', 'immediately', 'abruptly', 'suddenly'], answer: 0 },
      { options: ['entirely', 'wholly', 'utterly', 'completely'], answer: 0 },
      { options: ['speed', 'haste', 'urgency', 'rapidity'], answer: 3 },
      { options: ['learning', 'training', 'striving', 'working'], answer: 0 },
      { options: ['unnerving', 'uncomfortable', 'awkward', 'disconcerting'], answer: 0 },
      { options: ['feasible', 'viable', 'practicable', 'possible'], answer: 0 },
    ],
  },
  {
    id: 'moe-p1-14',
    part: 1,
    title: 'El sesgo algorítmico en la contratación',
    text: `As more companies {{0}} to automated systems to screen job applications, researchers have grown increasingly concerned about how easily such systems can {{1}} existing patterns of discrimination, often without any deliberate intention on the part of their designers. An algorithm trained on a company's historical hiring data will naturally {{2}} whatever biases, conscious or otherwise, shaped those past decisions, effectively encoding decades of human prejudice into what appears to be a neutral, purely {{3}} process.

One widely reported case involved a major technology company that {{4}} an experimental recruitment tool after discovering it consistently downgraded résumés containing the word "women's," having learned, from historical data dominated by male hires, to associate {{5}} indicators of gender with lower suitability for technical roles. The company insists the tool was never used to make {{6}} hiring decisions, though the episode highlights how difficult these biases can be to detect before deployment.

Regulators in several jurisdictions have since begun requiring companies to conduct regular audits of hiring algorithms, though critics argue that meaningful {{7}} remains difficult to enforce given how proprietary and technically opaque many of these systems remain.`,
    gaps: [
      { options: ['turn', 'resort', 'switch', 'shift'], answer: 0 },
      { options: ['perpetuate', 'replicate', 'reproduce', 'entrench'], answer: 0 },
      { options: ['absorb', 'inherit', 'internalise', 'assimilate'], answer: 1 },
      { options: ['objective', 'impartial', 'neutral', 'rational'], answer: 0 },
      { options: ['scrapped', 'abandoned', 'discontinued', 'shelved'], answer: 1 },
      { options: ['certain', 'particular', 'specific', 'subtle'], answer: 0 },
      { options: ['final', 'definitive', 'binding', 'conclusive'], answer: 0 },
      { options: ['oversight', 'scrutiny', 'accountability', 'transparency'], answer: 0 },
    ],
  },
];

// ---------------- PARTE 2: Open cloze ----------------
export const openCloze: OpenClozeExercise[] = [
  {
    id: 'moe-p2-01',
    part: 2,
    title: 'La memoria y el sueño',
    text: `For decades, scientists believed that sleep was simply a period {{0}} which the brain switched off. It is now understood, {{1}} contrast, that sleep plays an active role in consolidating memories formed during the day. {{2}} the brain sleeps, it appears to replay recent experiences, strengthening the neural connections {{3}} allow us to recall them later.

This has led researchers to wonder {{4}} it might be possible to enhance memory simply by improving sleep quality. Early studies suggest {{5}} might indeed be the case, {{6}} the exact mechanisms remain poorly understood. {{7}} yet, no one has developed a reliable way of doing so outside the laboratory.`,
    gaps: [
      { answers: ['during'] },
      { answers: ['in'] },
      { answers: ['as', 'while'] },
      { answers: ['that', 'which'] },
      { answers: ['whether', 'if'] },
      { answers: ['this'] },
      { answers: ['although', 'though', 'even though'] },
      { answers: ['as'] },
    ],
  },
  {
    id: 'moe-p2-02',
    part: 2,
    title: 'El turismo y el patrimonio local',
    text: `Few would deny that tourism can bring much-needed income {{0}} regions that would otherwise struggle economically. {{1}} same time, an excessive influx of visitors can place a strain {{2}} local infrastructure and, in the worst cases, erode the very culture that attracted tourists {{3}} the first place.

Some destinations have begun {{4}} take steps to manage visitor numbers more carefully, {{5}} through booking limits or seasonal pricing. {{6}} such measures prove effective will {{7}} largely on how consistently they are enforced.`,
    gaps: [
      { answers: ['to'] },
      { answers: ['at'] },
      { answers: ['on'] },
      { answers: ['in'] },
      { answers: ['to'] },
      { answers: ['whether'] },
      { answers: ['whether'] },
      { answers: ['depend'] },
    ],
  },
  {
    id: 'moe-p2-03',
    part: 2,
    title: 'La historia del paraguas',
    text: `Although umbrellas are now associated almost exclusively {{0}} rain, for much of their long history they were used chiefly {{1}} protection from the sun. In ancient Egypt and China, only the wealthy or powerful were permitted {{2}} carry one, and the umbrella functioned as much as a symbol of status {{3}} a practical object.

It was not {{4}} the eighteenth century that umbrellas became widely accepted in Europe as protection against rain, {{5}} men had for a long time associated carrying one with weakness, preferring simply to get wet. {{6}} attitudes shifted gradually, helped in part by prominent public figures who were seen using umbrellas without embarrassment.

Today it is hard to imagine {{7}} the object ever carried such social baggage at all.`,
    gaps: [
      { answers: ['with'] },
      { answers: ['for'] },
      { answers: ['to'] },
      { answers: ['as'] },
      { answers: ['until'] },
      { answers: ['although', 'though'] },
      { answers: ['such'] },
      { answers: ['that'] },
    ],
  },
  {
    id: 'moe-p2-04',
    part: 2,
    title: 'El sueño y la tecnología',
    text: `Doctors have long warned {{0}} the effects of screen use before bedtime, but only in recent years has research begun {{1}} confirm exactly how blue light interferes with the body's production of melatonin, the hormone {{2}} regulates sleep.

{{3}} not all screens are equally disruptive, in general the closer a device is held {{4}} the face, the greater its effect on sleep quality is likely to be. Some manufacturers have responded by introducing night modes, {{5}} shift a screen's colour temperature towards warmer tones after sunset.

{{6}} these features undoubtedly help, few experts believe they solve the underlying problem, which has {{7}} do with habit as much as with light itself.`,
    gaps: [
      { answers: ['about'] },
      { answers: ['to'] },
      { answers: ['that', 'which'] },
      { answers: ['while', 'although', 'though'] },
      { answers: ['to'] },
      { answers: ['which'] },
      { answers: ['although', 'while', 'though'] },
      { answers: ['to'] },
    ],
  },
  {
    id: 'moe-p2-05',
    part: 2,
    title: 'El mercado de la ropa de segunda mano',
    text: `The market for second-hand clothing has grown so rapidly {{0}} several analysts now expect it to overtake fast fashion in overall value within a decade. {{1}} of the shift is driven by younger shoppers, many {{2}} whom cite environmental concerns as their main motivation for buying used rather {{3}} new.

Traditional charity shops, {{4}} once relied almost entirely on walk-in donations and local customers, have had to adapt quickly {{5}} online resale platforms have captured much of this demand. Some charities have responded by opening their own online stores, {{6}} allows them to reach buyers well beyond their immediate area.

{{7}} the trend shows little sign of slowing, sceptics point out that overall clothing consumption continues to rise, second-hand or not.`,
    gaps: [
      { answers: ['that'] },
      { answers: ['much'] },
      { answers: ['of'] },
      { answers: ['than'] },
      { answers: ['which'] },
      { answers: ['as', 'since'] },
      { answers: ['which'] },
      { answers: ['while', 'although', 'though'] },
    ],
  },
  {
    id: 'moe-p2-06',
    part: 2,
    title: 'Los orígenes del Día de los Inocentes en Francia',
    text: `Nobody knows for certain {{0}} April Fools' Day began, though a number of competing theories have been put forward over the years. One popular explanation traces the custom back {{1}} France's adoption of a new calendar in the sixteenth century, {{2}} moved the start of the new year from late March to January.

{{3}} to this theory, those who continued celebrating the new year in spring, either out of habit or simple ignorance of the change, became the target of jokes and were sometimes sent on pointless errands, {{4}} much as an April Fool might be today. Historians, however, remain divided {{5}} whether this account is accurate or simply a tidy story invented long after the fact to explain a custom whose real origins {{6}} lost.

{{7}} the true explanation, the tradition of harmless pranks on the first of April has since spread to countries with no connection to the French calendar reform at all.`,
    gaps: [
      { answers: ['when'] },
      { answers: ['to'] },
      { answers: ['which'] },
      { answers: ['according'] },
      { answers: ['much'] },
      { answers: ['over', 'on', 'about'] },
      { answers: ['were'] },
      { answers: ['whatever'] },
    ],
  },
  {
    id: 'moe-p2-07',
    part: 2,
    title: 'Por qué ronronean los gatos',
    text: `Despite how familiar the sound is to anyone {{0}} has spent time around cats, scientists still do not fully understand {{1}} cats purr or precisely how the sound is produced. The most widely accepted explanation involves rapid, repeated movements of the muscles {{2}} the voice box, which cause the vocal cords to vibrate as the cat breathes in and out.

{{3}} it might seem, purring is not simply a sign of contentment. Cats have been observed purring while injured, frightened or even {{4}} the point of death, which has led some researchers to suggest the behaviour may serve a self-soothing or healing function {{5}} than a purely emotional one.

Studies measuring the frequency of cat purrs have found {{6}} many fall within a range associated, in other contexts, with improved bone density and tissue repair. {{7}} this connection is purely coincidental remains an open question that researchers are still working to answer.`,
    gaps: [
      { answers: ['who'] },
      { answers: ['why'] },
      { answers: ['around', 'near'] },
      { answers: ['surprising'] },
      { answers: ['at'] },
      { answers: ['rather'] },
      { answers: ['that'] },
      { answers: ['whether'] },
    ],
  },
  {
    id: 'moe-p2-08',
    part: 2,
    title: 'La historia de la cremallera',
    text: `Although it now seems like an obvious, almost inevitable invention, the zipper took several decades and numerous failed attempts {{0}} it reached the form we recognise today. Early versions, patented in the late nineteenth century, were unreliable and prone {{1}} springing open at the worst possible moments, {{2}} left them widely mocked rather than adopted.

It was not {{3}} the early twentieth century that a Swedish-born engineer working in the United States refined the design {{4}} the point where it could be manufactured cheaply and reliably enough for everyday use. {{5}}, adoption was still slow: manufacturers of buttons and clothing fasteners had little incentive to promote a rival product, and consumers, used {{6}} older fastenings, were initially sceptical.

{{7}} the zipper eventually won out is largely down to the fashion industry, which began incorporating it into clothing designs during the 1930s, giving the invention the visibility it had previously lacked.`,
    gaps: [
      { answers: ['before'] },
      { answers: ['to'] },
      { answers: ['which'] },
      { answers: ['until'] },
      { answers: ['to'] },
      { answers: ['even so', 'nevertheless'] },
      { answers: ['to'] },
      { answers: ['that'] },
    ],
  },
  {
    id: 'moe-p2-09',
    part: 2,
    title: 'El efecto Dunning-Kruger',
    text: `Few psychological findings have entered popular culture quite {{0}} thoroughly, or quite as inaccurately, as the so-called Dunning-Kruger effect. In its original, carefully qualified form, the research simply suggested {{1}} people with limited competence in a particular skill often struggle to recognise the extent of their own limitations, precisely {{2}} the skills required to perform a task well overlap considerably with those required to judge one's own performance accurately.

{{3}} popular retellings, however, have flattened this into something closer to a blanket claim that incompetent people are always supremely confident, {{4}} competent people are plagued by self-doubt. The original researchers themselves have repeatedly pushed back {{5}} this oversimplification, pointing out that the effect, {{6}} real, is considerably narrower and more context-dependent than viral infographics tend to suggest.

{{7}} more nuanced version of the finding has struggled to compete with the punchier, more quotable misreading, a pattern arguably as interesting, in its own right, as the original research itself.`,
    gaps: [
      { answers: ['as'] },
      { answers: ['that'] },
      { answers: ['because', 'since'] },
      { answers: ['subsequent', 'later'] },
      { answers: ['while', 'whereas'] },
      { answers: ['against'] },
      { answers: ['while', 'though', 'although'] },
      { answers: ['the'] },
    ],
  },
  {
    id: 'moe-p2-10',
    part: 2,
    title: 'La historia de la cuarentena',
    text: `The word quarantine derives {{0}} the Italian quaranta giorni, meaning forty days, the period ships arriving in fourteenth-century Venice were required to wait offshore before passengers and crew {{1}} permitted ashore. City officials, having observed that plague outbreaks often followed the arrival of ships from infected ports, adopted the measure {{2}} any real understanding of germ theory, which would not be developed {{3}} centuries later.

{{4}} its crude scientific basis, the practice proved remarkably effective, and variations of it {{5}} adopted by port cities across Europe over the following centuries. Enforcement, however, was often inconsistent, and wealthy or well-connected travellers {{6}} frequently found ways to avoid the full waiting period altogether.

Modern quarantine protocols, grounded now in a far more sophisticated understanding of disease transmission, owe a debt, largely {{7}}, to this centuries-old and thoroughly unscientific Venetian precaution.`,
    gaps: [
      { answers: ['from'] },
      { answers: ['were'] },
      { answers: ['without'] },
      { answers: ['until'] },
      { answers: ['despite'] },
      { answers: ['were'] },
      { answers: ['quite', 'often'] },
      { answers: ['unacknowledged'] },
    ],
  },
  {
    id: 'moe-p2-11',
    part: 2,
    title: 'Por qué olvidamos los sueños',
    text: `Almost everyone has had the frustrating experience of waking {{0}} a vivid, detailed dream only to find the memory dissolving within minutes, sometimes {{1}} before breakfast is over. Sleep researchers have proposed several explanations for this near-universal forgetfulness, {{2}} of which has yet been definitively confirmed.

One theory holds that the brain regions most active during dreaming, particularly {{3}} associated with emotion and sensory imagery, are simply poorly connected, during sleep, to the regions responsible {{4}} consolidating memories into long-term storage. {{5}} this account, dreams are not so much forgotten as never properly recorded {{6}} the first place.

A competing explanation focuses instead {{7}} the abrupt, disorienting transition from sleep to waking, arguing that this transition itself disrupts the fragile process of memory consolidation, regardless of how vividly the dream was originally experienced.`,
    gaps: [
      { answers: ['from'] },
      { answers: ['even'] },
      { answers: ['none'] },
      { answers: ['those'] },
      { answers: ['for'] },
      { answers: ['according to'] },
      { answers: ['in'] },
      { answers: ['on'] },
    ],
  },
  {
    id: 'moe-p2-12',
    part: 2,
    title: 'La etimología de "salary"',
    text: `The word salary derives, somewhat surprisingly {{0}} modern ears, from the Latin word for salt, sal, {{1}} which Roman soldiers were reputedly paid, or at least partly compensated, given the mineral's considerable value {{2}} a food preservative in the ancient world. Whether soldiers were literally handed sacks of salt, {{3}} whether the word simply referred to an allowance {{4}} which salt, among other goods, could be purchased, remains a matter of some etymological debate among historians.

{{5}} of the precise mechanics, the underlying connection between salt and payment persisted long enough {{6}} the language to leave a permanent linguistic trace, one that continues to shape how English speakers talk {{7}} wages centuries after salt itself ceased to hold any special economic significance.`,
    gaps: [
      { answers: ['to'] },
      { answers: ['with'] },
      { answers: ['as'] },
      { answers: ['or'] },
      { answers: ['with'] },
      { answers: ['regardless'] },
      { answers: ['in'] },
      { answers: ['about'] },
    ],
  },
  {
    id: 'moe-p2-13',
    part: 2,
    title: 'Por qué se presurizan así las cabinas de los aviones',
    text: `Commercial aircraft cabins are not, {{0}} many passengers assume, pressurised to match sea-level conditions throughout a flight, {{1}} to a somewhat lower equivalent, typically comparable to the air pressure found at a moderate mountain altitude. Maintaining true sea-level pressure at cruising altitude {{2}} require a substantially stronger, and therefore considerably heavier, aircraft structure, a trade-off engineers have generally judged {{3}} worth making given the fuel and cost implications.

{{4}} passengers rarely notice the difference under normal circumstances, this reduced pressure does have measurable physiological effects, {{5}} a mild reduction in blood oxygen levels that can leave some travellers feeling unusually fatigued {{6}} disoriented during long flights. Airlines have little commercial incentive to increase cabin pressure further, {{7}} the vast majority of healthy passengers tolerate current levels without any noticeable difficulty.`,
    gaps: [
      { answers: ['as'] },
      { answers: ['but'] },
      { answers: ['would'] },
      { answers: ['not'] },
      { answers: ['while', 'although', 'though'] },
      { answers: ['including'] },
      { answers: ['or'] },
      { answers: ['since', 'as'] },
    ],
  },
  {
    id: 'moe-p2-14',
    part: 2,
    title: 'La psicología de la nostalgia',
    text: `For much of the twentieth century, nostalgia was widely regarded {{0}} a mild psychological affliction, a sentimental indulgence {{1}} best avoided rather than a genuinely useful emotional state worth cultivating deliberately. Contemporary psychologists have {{2}} reached a rather different conclusion, having found that nostalgic reflection, {{3}} triggered by a familiar song or a half-forgotten photograph, tends to leave people reporting greater feelings of social connectedness and psychological resilience afterwards.

{{4}} particular interest to researchers is nostalgia's apparent role {{5}} a coping mechanism during periods of loneliness or uncertainty, moments {{6}} people are statistically more likely to report nostalgic thoughts occurring spontaneously, almost as though the mind were reaching backwards for reassurance {{7}} it could not immediately locate in the present moment.`,
    gaps: [
      { answers: ['as'] },
      { answers: ['best'] },
      { answers: ['since'] },
      { answers: ['whether'] },
      { answers: ['of'] },
      { answers: ['as'] },
      { answers: ['when'] },
      { answers: ['that', 'which'] },
    ],
  },
];

// ---------------- PARTE 3: Word formation ----------------
export const wordFormation: WordFormationExercise[] = [
  {
    id: 'moe-p3-01',
    part: 3,
    title: 'La inteligencia artificial en la medicina',
    text: `The {{0}} of artificial intelligence into everyday medical practice has proceeded faster than most {{1}} predicted a decade ago. Algorithms can now detect certain cancers with a level of {{2}} that rivals experienced radiologists, and hospitals are increasingly {{3}} on such tools to support diagnosis.

This progress has not been entirely {{4}}, though. Patient advocates have raised {{5}} concerns about how decisions made by opaque algorithms can be properly {{6}}, particularly when a misdiagnosis has serious {{7}} for someone's health.`,
    gaps: [
      { root: 'INTEGRATE', answers: ['integration'] },
      { root: 'ANALYSE', answers: ['analysts'] },
      { root: 'ACCURATE', answers: ['accuracy'] },
      { root: 'RELY', answers: ['relying'] },
      { root: 'CONTROVERSY', answers: ['uncontroversial'] },
      { root: 'INCREASE', answers: ['increasing', 'increasingly'] },
      { root: 'JUSTIFY', answers: ['justified'] },
      { root: 'CONSEQUENT', answers: ['consequences'] },
    ],
  },
  {
    id: 'moe-p3-02',
    part: 3,
    title: 'El minimalismo como estilo de vida',
    text: `The {{0}} to own fewer possessions has, somewhat {{1}}, become a booming industry in itself, complete with books, courses and consultants. For its adherents, minimalism is less about {{2}} and more about a broader {{3}} of what genuinely adds value to their lives.

Sceptics counter that the movement can be a {{4}} indulgence, one that overlooks the fact that many people around the world have {{5}} choice but to live with very little. Still, even critics tend to acknowledge that questioning {{6}} consumption is, on balance, a {{7}} habit.`,
    gaps: [
      { root: 'DECIDE', answers: ['decision'] },
      { root: 'IRONY', answers: ['ironically'] },
      { root: 'DEPRIVE', answers: ['deprivation'] },
      { root: 'REASSESS', answers: ['reassessment'] },
      { root: 'PRIVILEGE', answers: ['privileged'] },
      { root: 'LITTLE', answers: ['little'] },
      { root: 'THINK', answers: ['thoughtless'] },
      { root: 'HEALTH', answers: ['healthy'] },
    ],
  },
  {
    id: 'moe-p3-03',
    part: 3,
    title: 'La psicología de la procrastinación',
    text: `Few habits are as universally {{0}} as procrastination, yet surprisingly little about it is genuinely understood. Common {{1}} holds that procrastinators are simply lazy, but psychologists increasingly reject this {{2}} explanation in favour of something more nuanced: procrastination, they argue, is less about time management and more about the {{3}} of difficult emotions.

Faced with a task that provokes anxiety, boredom or self-doubt, the brain often opts for whichever activity feels more {{4}}. This decision brings a sense of relief that is, {{5}}, extremely short-lived, since the abandoned task rarely disappears and its {{6}} consequences tend to resurface with interest.

Breaking the cycle, researchers suggest, requires less willpower and more {{7}} strategies: breaking tasks into smaller steps, forgiving oneself for previous delays, and reducing the emotional stakes attached to starting.`,
    gaps: [
      { root: 'ACKNOWLEDGE', answers: ['acknowledged'] },
      { root: 'WISE', answers: ['wisdom'] },
      { root: 'SIMPLE', answers: ['simplistic'] },
      { root: 'AVOID', answers: ['avoidance'] },
      { root: 'COMFORT', answers: ['comforting'] },
      { root: 'IRONY', answers: ['ironically'] },
      { root: 'DELAY', answers: ['delayed'] },
      { root: 'PRACTICE', answers: ['practical'] },
    ],
  },
  {
    id: 'moe-p3-04',
    part: 3,
    title: 'La reintroducción del lobo en los bosques europeos',
    text: `When wolves began returning to parts of Western Europe over the past two decades, largely unassisted by humans, the reaction among conservationists was one of cautious {{0}}. Populations that had been driven to {{1}} extinction over a century earlier were, against most predictions, reclaiming old territory on their own.

Farmers, unsurprisingly, have been far less {{2}}. Livestock losses, though statistically small compared with other causes of death among sheep and cattle, generate {{3}} anger in affected communities, and compensation schemes have often struggled to keep pace with claims. Wildlife officials have found themselves in the {{4}} position of celebrating an ecological success story while simultaneously managing a genuine, if localised, economic grievance.

What has emerged is a patchwork of {{5}} measures: electric fencing, guard dogs and, in some regions, limited and tightly regulated culling. None of these approaches has proved entirely {{6}}, but together they appear to be allowing an {{7}} coexistence to take shape, however fragile it may still be.`,
    gaps: [
      { root: 'OPTIMIST', answers: ['optimism'] },
      { root: 'VIRTUE', answers: ['virtual'] },
      { root: 'ENTHUSE', answers: ['enthusiastic'] },
      { root: 'PROPORTION', answers: ['disproportionate'] },
      { root: 'COMFORT', answers: ['uncomfortable'] },
      { root: 'PREVENT', answers: ['preventive', 'preventative'] },
      { root: 'SATISFY', answers: ['satisfactory'] },
      { root: 'EASE', answers: ['uneasy'] },
    ],
  },
  {
    id: 'moe-p3-05',
    part: 3,
    title: 'La economía de plataformas',
    text: `Supporters of the gig economy have long argued that platform work offers a level of {{0}} that traditional employment simply cannot match: drivers, couriers and freelancers can, in theory, log on and off whenever they choose. Critics counter that this flexibility comes at the cost of basic {{1}}, since most platform workers are classified as self-employed and therefore excluded from sick pay, pensions and other benefits.

Recent court rulings in several countries have begun to challenge this {{2}} distinction, forcing companies to reconsider how they classify their workforce. Some platforms have responded by offering a limited package of {{3}} benefits, while others have fought the rulings through lengthy and expensive appeals.

What is often overlooked in this debate is how {{4}} the gig workforce itself actually is: for some, platform work is a genuinely {{5}} main source of income; for others, it is a convenient way of earning extra money around a more {{6}} job. Any regulation that fails to account for this diversity risks being either too {{7}} for one group or entirely inadequate for the other.`,
    gaps: [
      { root: 'DEPEND', answers: ['independence'] },
      { root: 'SECURE', answers: ['security'] },
      { root: 'CONVENIENCE', answers: ['convenient'] },
      { root: 'OPT', answers: ['optional'] },
      { root: 'VARY', answers: ['varied'] },
      { root: 'RELY', answers: ['reliable'] },
      { root: 'CONVENTION', answers: ['conventional'] },
      { root: 'RESTRICT', answers: ['restrictive'] },
    ],
  },
  {
    id: 'moe-p3-06',
    part: 3,
    title: 'La restauración del cine mudo',
    text: `For decades, the film industry treated silent cinema with a kind of benign {{0}}: reels were stored haphazardly, if at all, and it was assumed that later, more {{1}} technology would simply make the earliest films obsolete. As a result, historians now estimate that the vast {{2}} of silent films made before 1930 have been lost forever, either through decay or, more {{3}}, simple neglect.

Archivists working today face a race against time with the prints that do survive. Nitrate film stock, used almost {{4}} until the 1950s, is not only fragile but genuinely flammable, and many reels have already {{5}} beyond any hope of recovery. Digital scanning offers a partial solution, capturing an image before the physical print {{6}} further, but the process is slow, expensive and requires specialist {{7}} that few institutions can afford to fund adequately.`,
    gaps: [
      { root: 'DIFFERENT', answers: ['indifference'] },
      { root: 'SOPHISTICATE', answers: ['sophisticated'] },
      { root: 'MAJOR', answers: ['majority'] },
      { root: 'COMMON', answers: ['commonly'] },
      { root: 'EXCLUDE', answers: ['exclusively'] },
      { root: 'DETERIORATE', answers: ['deteriorated'] },
      { root: 'DEGRADE', answers: ['degrades'] },
      { root: 'EQUIP', answers: ['equipment'] },
    ],
  },
  {
    id: 'moe-p3-07',
    part: 3,
    title: 'La neurociencia de los hábitos',
    text: `Habits, neuroscientists have found, are governed by a distinct and surprisingly {{0}} region of the brain, one that operates largely outside conscious {{1}}. Once a behaviour has been repeated often enough in a stable context, control gradually shifts away from the more {{2}} decision-making circuits and towards this more automatic system, a process that explains both the {{3}} of long-established habits and the {{4}} of trying to break them through willpower alone.

This {{5}} has significant implications for anyone attempting genuine behavioural change. Rather than relying on sheer {{6}}, which tends to fade under stress or fatigue, the most effective interventions typically work by altering the environmental cues that trigger a habit in the first place, making the old behaviour less {{7}} and a new one easier to initiate.`,
    gaps: [
      { root: 'ISOLATE', answers: ['isolated'] },
      { root: 'AWARE', answers: ['awareness'] },
      { root: 'REASON', answers: ['reasoned'] },
      { root: 'PERSIST', answers: ['persistence'] },
      { root: 'DIFFICULT', answers: ['difficulty'] },
      { root: 'UNDERSTAND', answers: ['understanding'] },
      { root: 'DETERMINE', answers: ['determination'] },
      { root: 'AUTOMATE', answers: ['automatic'] },
    ],
  },
  {
    id: 'moe-p3-08',
    part: 3,
    title: 'El auge del "quiet quitting"',
    text: `The phrase quiet quitting, despite its {{0}} name, does not actually describe employees resigning from their jobs at all, a source of considerable {{1}} when the term first went viral online. Instead, it refers to a deliberate {{2}} to do precisely what a job requires, no more and no less, rather than routinely volunteering for {{3}} tasks or working unpaid overtime out of a sense of obligation.

Critics of the trend have described it as a symptom of growing employee {{4}}, while its defenders frame it instead as a healthy, {{5}} response to workplace cultures that had come to expect {{6}} sacrifice as the price of basic job security. Whichever interpretation proves more accurate, the sheer {{7}} of the term suggests it tapped into something many workers had been feeling for some time, even if few had a ready word for it before.`,
    gaps: [
      { root: 'MISLEAD', answers: ['misleading'] },
      { root: 'CONFUSE', answers: ['confusion'] },
      { root: 'DECIDE', answers: ['decision'] },
      { root: 'ADD', answers: ['additional'] },
      { root: 'DISENGAGE', answers: ['disengagement'] },
      { root: 'JUSTIFY', answers: ['justified'] },
      { root: 'LIMIT', answers: ['limitless'] },
      { root: 'POPULAR', answers: ['popularity'] },
    ],
  },
  {
    id: 'moe-p3-09',
    part: 3,
    title: 'La política de nombrar huracanes',
    text: `The practice of assigning short, memorable human names to hurricanes might seem like a purely {{0}} matter, but the history behind it is considerably more contested than most people realise. Early twentieth-century meteorologists, working without today's satellite {{1}}, relied on names largely to avoid the confusion of tracking several storms {{2}} using only technical coordinates.

For decades, storms were given exclusively female names, a convention that drew growing {{3}} from campaigners who argued it reinforced unhelpful gender {{4}}. The practice was eventually changed to alternate between male and female names, though the shift was not achieved without considerable institutional {{5}}.

Today's naming system, overseen by an international meteorological body, retires the names of especially {{6}} storms permanently, out of {{7}} for the communities affected, ensuring a name like Katrina or Sandy is never reused for a future hurricane.`,
    gaps: [
      { root: 'ADMINISTER', answers: ['administrative'] },
      { root: 'IMAGE', answers: ['imagery'] },
      { root: 'SIMULTANEOUS', answers: ['simultaneously'] },
      { root: 'CRITIC', answers: ['criticism'] },
      { root: 'STEREOTYPE', answers: ['stereotypes'] },
      { root: 'RESIST', answers: ['resistance'] },
      { root: 'DESTROY', answers: ['destructive'] },
      { root: 'CONSIDER', answers: ['consideration'] },
    ],
  },
  {
    id: 'moe-p3-10',
    part: 3,
    title: 'El auge de las "ghost kitchens"',
    text: `The restaurant industry has witnessed the rapid {{0}} of so-called ghost kitchens: commercial cooking spaces designed exclusively for delivery, with no dining room, signage or public-facing {{1}} whatsoever. Freed from the considerable {{2}} of prime retail locations, operators can run several distinct delivery-only brands from a single kitchen, each carefully {{3}} to appeal to a different segment of app-based delivery customers.

Critics argue the model prioritises {{4}} over culinary craft, since a menu's success increasingly depends on how {{5}} it photographs and how efficiently it survives a twenty-minute delivery journey rather than on any genuinely {{6}} cooking. Defenders counter that the model has made {{7}} entrepreneurship possible for cooks who could never otherwise have afforded a traditional restaurant's overhead costs.`,
    gaps: [
      { root: 'PROLIFERATE', answers: ['proliferation'] },
      { root: 'PRESENT', answers: ['presence'] },
      { root: 'COST', answers: ['costliness'] },
      { root: 'TAILOR', answers: ['tailored'] },
      { root: 'EFFICIENT', answers: ['efficiency'] },
      { root: 'ATTRACT', answers: ['attractively'] },
      { root: 'INNOVATE', answers: ['innovative'] },
      { root: 'SUSTAIN', answers: ['sustainable'] },
    ],
  },
  {
    id: 'moe-p3-11',
    part: 3,
    title: 'Por qué persiste la zurdera',
    text: `Left-handedness has remained a stable {{0}} of roughly one in ten people across virtually every studied human population and historical period, a remarkable {{1}} given that left-handed individuals have faced, across many cultures and centuries, genuine social and even physical {{2}}. Tools, instruments and everyday objects have historically been designed with an overwhelming right-handed {{3}}, and left-handed children were, within living memory, actively discouraged, sometimes forcibly, from using their {{4}} hand at all.

Evolutionary biologists have proposed several {{5}} explanations for why such an apparently {{6}} trait has never been fully eliminated by these pressures. One influential theory suggests left-handedness may offer a subtle {{7}} advantage in physical confrontation, since opponents accustomed to facing right-handed attackers are less practised at anticipating a left-handed one.`,
    gaps: [
      { root: 'PROPORTION', answers: ['proportion'] },
      { root: 'CONSIST', answers: ['consistency'] },
      { root: 'ADVANTAGE', answers: ['disadvantages'] },
      { root: 'ORIENT', answers: ['orientation'] },
      { root: 'PREFER', answers: ['preferred'] },
      { root: 'COMPETE', answers: ['competing'] },
      { root: 'DISADVANTAGE', answers: ['disadvantageous'] },
      { root: 'TACTIC', answers: ['tactical'] },
    ],
  },
  {
    id: 'moe-p3-12',
    part: 3,
    title: 'La economía de las regalías del streaming',
    text: `Musicians and actors who built careers under the older system of album sales and syndicated television {{0}} have often struggled to adjust to the considerably {{1}} economics of streaming-era compensation. Where a hit song once generated steady {{2}} income for years through radio play and physical sales, streaming platforms typically pay {{3}} amounts per play, a model that rewards {{4}} volume over lasting popularity in ways many veteran performers find genuinely {{5}}.

Younger artists, having never known the older system, often display a more {{6}} attitude toward these economics, treating streaming primarily as a {{7}} for building an audience that can later be monetised through touring, merchandise or brand partnerships rather than through the recordings themselves.`,
    gaps: [
      { root: 'REPEAT', answers: ['repeats'] },
      { root: 'PREDICT', answers: ['unpredictable'] },
      { root: 'RESIDE', answers: ['residual'] },
      { root: 'NEGLECT', answers: ['negligible'] },
      { root: 'MASS', answers: ['massive'] },
      { root: 'FRUSTRATE', answers: ['frustrating'] },
      { root: 'PRACTICE', answers: ['practical'] },
      { root: 'LAUNCH', answers: ['launchpad'] },
    ],
  },
];

// ---------------- PARTE 4: Key word transformation ----------------
export const keyWordTransformation: KeyWordTransformationExercise[] = [
  {
    id: 'moe-p4-01',
    part: 4,
    title: 'Transformaciones I',
    items: [
      {
        prompt: "It wasn't necessary for you to book the tickets in advance.",
        keyword: 'NEED',
        gapStart: 'You',
        gapEnd: 'the tickets in advance.',
        answers: [
          "needn't have booked",
          'need not have booked',
        ],
      },
      {
        prompt: 'She finds it hard to concentrate when there is background noise.',
        keyword: 'DIFFICULTY',
        gapStart: 'She',
        gapEnd: 'when there is background noise.',
        answers: [
          'has difficulty concentrating',
          'has difficulty in concentrating',
        ],
      },
      {
        prompt: "I regret not having taken the job offer at the time.",
        keyword: 'WISH',
        gapStart: 'I',
        gapEnd: 'the job offer at the time.',
        answers: ['wish I had taken', 'wish i had taken'],
      },
      {
        prompt: 'The negotiations only succeeded because both sides were willing to compromise.',
        keyword: 'HAD',
        gapStart: 'Only because both sides were willing to compromise',
        gapEnd: '.',
        answers: [
          'the negotiations succeeded',
          'did the negotiations succeed',
        ],
      },
      {
        prompt: "It is thought that the fire started in the old warehouse.",
        keyword: 'BELIEVED',
        gapStart: 'The fire',
        gapEnd: 'in the old warehouse.',
        answers: [
          'is believed to have started',
        ],
      },
      {
        prompt: 'Despite feeling exhausted, Marta decided to finish the report.',
        keyword: 'THOUGH',
        gapStart: 'Exhausted',
        gapEnd: ', Marta decided to finish the report.',
        answers: ['as she felt', 'though she felt'],
      },
    ],
  },
  {
    id: 'moe-p4-02',
    part: 4,
    title: 'Transformaciones II',
    items: [
      {
        prompt: "I'm sure that Diane didn't mean to upset you.",
        keyword: 'CAN',
        gapStart: 'Diane',
        gapEnd: 'you.',
        answers: ["can't have meant to upset", 'cannot have meant to upset'],
      },
      {
        prompt: 'Despite arriving late, Sarah still managed to catch the beginning of the meeting.',
        keyword: 'THOUGH',
        gapStart: 'Late',
        gapEnd: ', Sarah still managed to catch the beginning of the meeting.',
        answers: ['though she arrived', 'as she arrived'],
      },
      {
        prompt: 'It is possible that the negotiations will collapse if no compromise is reached.',
        keyword: 'RISK',
        gapStart: 'The negotiations',
        gapEnd: 'if no compromise is reached.',
        answers: ['run the risk of collapsing'],
      },
      {
        prompt: "You shouldn't have spoken to your manager like that.",
        keyword: 'OUGHT',
        gapStart: 'You',
        gapEnd: 'to your manager like that.',
        answers: ['ought not to have spoken'],
      },
      {
        prompt: 'Nobody had predicted such a dramatic rise in prices.',
        keyword: 'SEEN',
        gapStart: 'Never had such a dramatic rise in prices',
        gapEnd: 'before.',
        answers: ['been seen'],
      },
      {
        prompt: 'The committee will only approve the budget if all the details are finalised first.',
        keyword: 'SUBJECT',
        gapStart: "The committee's approval of the budget is",
        gapEnd: 'being finalised first.',
        answers: ['subject to all the details'],
      },
    ],
  },
  {
    id: 'moe-p4-03',
    part: 4,
    title: 'Transformaciones III',
    items: [
      {
        prompt: "The company's profits have increased significantly since the new CEO took over.",
        keyword: 'MARKED',
        gapStart: 'There has been',
        gapEnd: "in the company's profits since the new CEO took over.",
        answers: ['a marked increase'],
      },
      {
        prompt: 'I would prefer you not to mention this to anyone else.',
        keyword: 'RATHER',
        gapStart: 'I',
        gapEnd: 'this to anyone else.',
        answers: ["would rather you didn't mention"],
      },
      {
        prompt: "It's not necessary for you to finish the report today.",
        keyword: 'NEED',
        gapStart: 'You',
        gapEnd: 'the report today.',
        answers: ["don't need to finish"],
      },
      {
        prompt: 'Peter apologised for arriving late to the interview.',
        keyword: 'SORRY',
        gapStart: 'Peter said',
        gapEnd: 'late for the interview.',
        answers: ['he was sorry for arriving', 'he was sorry he had arrived'],
      },
      {
        prompt: "As soon as she saw the exam questions, she realised she hadn't studied enough.",
        keyword: 'SIGHT',
        gapStart: 'At',
        gapEnd: "the exam questions, she realised she hadn't studied enough.",
        answers: ['the sight of'],
      },
      {
        prompt: 'The government has been criticised for failing to act quickly enough on climate change.',
        keyword: 'COME',
        gapStart: 'The government',
        gapEnd: 'for failing to act quickly enough on climate change.',
        answers: ['has come under criticism'],
      },
    ],
  },
  {
    id: 'moe-p4-04',
    part: 4,
    title: 'Transformaciones IV',
    items: [
      {
        prompt: 'I regret telling him the truth because it upset him so much.',
        keyword: 'WISH',
        gapStart: 'I',
        gapEnd: 'him the truth because it upset him so much.',
        answers: ["wish I hadn't told"],
      },
      {
        prompt: 'Laura is unlikely to accept the job offer, in my opinion.',
        keyword: 'DOUBT',
        gapStart: 'I',
        gapEnd: 'the job offer.',
        answers: ['doubt whether Laura will accept', 'doubt if Laura will accept'],
      },
      {
        prompt: 'The film was so boring that several people left before the end.',
        keyword: 'SUCH',
        gapStart: 'It was',
        gapEnd: 'several people left before the end.',
        answers: ['such a boring film that'],
      },
      {
        prompt: 'You are not allowed to park here under any circumstances.',
        keyword: 'CIRCUMSTANCES',
        gapStart: 'Under no circumstances',
        gapEnd: 'to park here.',
        answers: ['are you allowed'],
      },
      {
        prompt: 'Tom finally admitted that he had broken the vase.',
        keyword: 'UP',
        gapStart: 'Tom finally',
        gapEnd: 'having broken the vase.',
        answers: ['owned up to'],
      },
      {
        prompt: "The novel's ending was far better than I had expected.",
        keyword: 'EXCEEDED',
        gapStart: "The novel's ending",
        gapEnd: 'expectations.',
        answers: ['far exceeded my'],
      },
    ],
  },
  {
    id: 'moe-p4-05',
    part: 4,
    title: 'Transformaciones 5',
    items: [
      {
        prompt: 'It made no sense to postpone the meeting.',
        keyword: 'POINT',
        gapStart: 'There was no point in',
        gapEnd: 'the meeting.',
        answers: ['putting off'],
      },
      {
        prompt: "Don't waste your time asking Peter to wait.",
        keyword: 'WORTH',
        gapStart: "It's not worth",
        gapEnd: 'to wait.',
        answers: ['asking Peter'],
      },
      {
        prompt: 'Ann was ready to start studying when the phone rang.',
        keyword: 'ON',
        gapStart: 'Ann was',
        gapEnd: 'when the phone rang.',
        answers: ['on the point of studying'],
      },
      {
        prompt: 'Susan thought she should have spoken more politely to our manager.',
        keyword: 'REGRETTED',
        gapStart: 'Susan',
        gapEnd: 'to our manager.',
        answers: ['regretted not speaking more politely'],
      },
      {
        prompt: "I can't avoid thinking that I had to acquaint myself with the routine of online teaching.",
        keyword: 'HELP',
        gapStart: "I can't",
        gapEnd: 'with the routine of online teaching.',
        answers: ['help thinking that I had to acquaint myself'],
      },
      {
        prompt: 'Sarah would like to know whether they have had an excellent relationship since they met.',
        keyword: 'ON',
        gapStart: 'Sarah would like to know whether they have',
        gapEnd: 'each other since they met.',
        answers: ['got on well with'],
      },
    ],
  },
  {
    id: 'moe-p4-06',
    part: 4,
    title: 'Transformaciones 6',
    items: [
      {
        prompt: 'I am not sure whether my neighbours argue sometimes.',
        keyword: 'OUT',
        gapStart: 'I am not sure whether my neighbours',
        gapEnd: 'from time to time.',
        answers: ['fall out'],
      },
      {
        prompt: 'I wonder whether Peter and Liz annoy each other from time to time.',
        keyword: 'ON',
        gapStart: 'I wonder whether Peter and Liz',
        gapEnd: 'from time to time.',
        answers: ["get on each other's nerves"],
      },
      {
        prompt: 'Have I done anything to upset your husband? He looks upset.',
        keyword: 'BAD',
        gapStart: "Could you tell me if I've done",
        gapEnd: 'to upset your husband? He looks upset.',
        answers: ['something bad'],
      },
      {
        prompt: 'Who has made you cry this morning?',
        keyword: 'TO',
        gapStart: 'Who has',
        gapEnd: 'this morning?',
        answers: ['reduced you to tears'],
      },
      {
        prompt: 'Surprisingly, flights were the cheapest at that particular moment.',
        keyword: 'FAR',
        gapStart: 'Surprisingly, flights were',
        gapEnd: 'at that particular moment.',
        answers: ['far and away the cheapest'],
      },
      {
        prompt: 'To comply with the covid restrictions, it is compulsory to wear face masks indoors.',
        keyword: 'IN',
        gapStart: 'Face masks are compulsory indoors',
        gapEnd: 'the covid restrictions.',
        answers: ['in accordance with'],
      },
    ],
  },
  {
    id: 'moe-p4-07',
    part: 4,
    title: 'Transformaciones 7',
    items: [
      {
        prompt: 'The film was very bad to some extent according to my friend.',
        keyword: 'IN',
        gapStart: 'The film was very bad',
        gapEnd: ', according to my friend.',
        answers: ['in a way'],
      },
      {
        prompt: "Foolishly, people's interest in her books has increased recently.",
        keyword: 'DEMAND',
        gapStart: 'Foolishly, her books have',
        gapEnd: 'recently.',
        answers: ['increased in demand'],
      },
      {
        prompt: 'The IT courses let teachers know the latest online teaching tools.',
        keyword: 'SPEED',
        gapStart: 'The IT courses enable teachers to keep',
        gapEnd: 'the latest online teaching tools.',
        answers: ['up to speed with'],
      },
      {
        prompt: 'They are beginning a long journey because they want to visit all the cities in their country.',
        keyword: 'EACH',
        gapStart: 'They are',
        gapEnd: 'because they want to visit each city in their country.',
        answers: ['hitting the road'],
      },
      {
        prompt: "To begin with, she doesn't have much money to spend.",
        keyword: 'LITTLE',
        gapStart: 'To begin with, she has',
        gapEnd: 'to spend.',
        answers: ['little money'],
      },
      {
        prompt: "I have some ideas, but I can't decide which one to put into practice.",
        keyword: 'FEW',
        gapStart: "I have few ideas, but I'm",
        gapEnd: 'which one to put into practice.',
        answers: ['in two minds about'],
      },
    ],
  },
  {
    id: 'moe-p4-08',
    part: 4,
    title: 'Transformaciones 8',
    items: [
      {
        prompt: 'All the team was travelling when they received the news.',
        keyword: 'WHOLE',
        gapStart: 'The whole team was',
        gapEnd: 'when they received the news.',
        answers: ['on the road'],
      },
      {
        prompt: 'I saw entire families moving because of the polluted water.',
        keyword: 'ACCOUNT',
        gapStart: 'I saw whole families moving',
        gapEnd: 'the polluted water.',
        answers: ['on account of'],
      },
      {
        prompt: 'I learnt a lot about Trump thanks to Biden.',
        keyword: 'FOR',
        gapStart: "If it wasn't",
        gapEnd: "I wouldn't know so much about Trump.",
        answers: ['for Biden,'],
      },
      {
        prompt: 'I know how to use interactive questionnaires thanks to Ática.',
        keyword: 'FOR',
        gapStart: "If it wasn't",
        gapEnd: "I wouldn't know how to use interactive questionnaires.",
        answers: ['for Ática,'],
      },
      {
        prompt: 'What would you do if you found the final exam questions before the exam?',
        keyword: 'WERE',
        gapStart: 'If you',
        gapEnd: 'the final exam questions before the exam, what would you do?',
        answers: ['were to find'],
      },
      {
        prompt: 'I will support you if you make a decision.',
        keyword: 'PROVIDED',
        gapStart: 'I will support you',
        gapEnd: 'make up your mind.',
        answers: ['provided you'],
      },
    ],
  },
  {
    id: 'moe-p4-09',
    part: 4,
    title: 'Transformaciones 9',
    items: [
      {
        prompt: 'He will have to be responsible for his own financial obligations sooner or later.',
        keyword: 'OWN',
        gapStart: 'He will have to',
        gapEnd: 'sooner or later.',
        answers: ['pay his own way'],
      },
      {
        prompt: 'He just had enough money to live and nothing extra until the end of the month.',
        keyword: 'MOUTH',
        gapStart: 'He was living',
        gapEnd: 'until the end of the month.',
        answers: ['hand to mouth'],
      },
      {
        prompt: 'They blamed each other for spending more money than they could afford.',
        keyword: 'ANOTHER',
        gapStart: 'They blamed one another for',
        gapEnd: 'their means.',
        answers: ['living beyond'],
      },
      {
        prompt: 'She convinced herself that she had to reduce costs to go on living in that neighbourhood.',
        keyword: 'BELT',
        gapStart: 'She convinced herself that she had to',
        gapEnd: 'to go on living in that neighbourhood.',
        answers: ['tighten her belt'],
      },
      {
        prompt: 'Sally asked herself whether John came from a rich family.',
        keyword: 'IN',
        gapStart: 'Sally asked herself whether John was born with a silver spoon',
        gapEnd: 'his mouth.',
        answers: ['in'],
      },
      {
        prompt: 'Knowing you, I am sure you will complain all the time.',
        keyword: 'NOTHING',
        gapStart: 'Knowing you, I am sure you will have',
        gapEnd: 'but complain.',
        answers: ['nothing to do'],
      },
    ],
  },
  {
    id: 'moe-p4-10',
    part: 4,
    title: 'Transformaciones 10',
    items: [
      {
        prompt: 'I think that by 2030 he will have participated four times in international competitions.',
        keyword: 'HAVE',
        gapStart: 'I think that by 2030 he will',
        gapEnd: 'four times.',
        answers: ['have taken part in international competitions'],
      },
      {
        prompt: "If your charger hadn't worked, my batteries would have finished.",
        keyword: 'FOR',
        gapStart: 'If it',
        gapEnd: 'my batteries would have run out.',
        answers: ["hadn't been for your charger,"],
      },
      {
        prompt: 'It is not possible that Mary had a great idea last Monday because she was ill in bed.',
        keyword: "CAN'T",
        gapStart: 'Mary',
        gapEnd: 'because she was ill in bed.',
        answers: ["can't have come up with a great idea"],
      },
      {
        prompt: 'In case coronavirus cases rise, all the parties will be postponed.',
        keyword: 'GO',
        gapStart: 'If coronavirus cases rise, all the parties will not',
        gapEnd: 'as planned.',
        answers: ['go ahead'],
      },
      {
        prompt: 'I regret not decorating my house when I had time.',
        keyword: 'UP',
        gapStart: 'I wish I had',
        gapEnd: 'my house when I had time.',
        answers: ['done up'],
      },
      {
        prompt: "I'd rather you didn't end this telephone call.",
        keyword: 'PREFER',
        gapStart: 'I would',
        gapEnd: 'not to end this telephone call.',
        answers: ['prefer you'],
      },
    ],
  },
  {
    id: 'moe-p4-11',
    part: 4,
    title: 'Transformaciones 11',
    items: [
      {
        prompt: "My son met the requirements, but it wasn't necessary.",
        keyword: 'HAVE',
        gapStart: 'My son',
        gapEnd: 'with the requirements.',
        answers: ["needn't have complied"],
      },
      {
        prompt: "It was not necessary for me to prepare for hard work, so I didn't.",
        keyword: 'NEED',
        gapStart: "I didn't",
        gapEnd: 'my sleeves.',
        answers: ['need to roll up'],
      },
      {
        prompt: "I wish I hadn't said that to her.",
        keyword: 'TAKE',
        gapStart: 'If only I could',
        gapEnd: 'what I said to her.',
        answers: ['take back'],
      },
      {
        prompt: "She had the chance to say sorry for what she said, but she didn't.",
        keyword: 'APOLOGIZED',
        gapStart: 'She',
        gapEnd: "for what she said but she didn't.",
        answers: ['could have apologized'],
      },
      {
        prompt: 'This text contains far too many mistakes. I am sure my students are not the authors.',
        keyword: "CAN'T",
        gapStart: 'This text contains far too many mistakes. My students',
        gapEnd: 'the authors.',
        answers: ["can't have been"],
      },
      {
        prompt: "Can you help me with the exercises? I can't understand them.",
        keyword: 'HAND',
        gapStart: 'Can you give me',
        gapEnd: "with the exercises that I don't understand?",
        answers: ['a hand'],
      },
    ],
  },
  {
    id: 'moe-p4-12',
    part: 4,
    title: 'Transformaciones 12',
    items: [
      {
        prompt: "I last saw Peter on New Year's Eve. He was coming home then.",
        keyword: 'WAY',
        gapStart: "I last saw Peter on New Year's Eve while he was",
        gapEnd: 'home.',
        answers: ['on his way'],
      },
      {
        prompt: 'In the USA I had great experiences. My first novel is based on them.',
        keyword: 'DREW',
        gapStart: 'In the USA I had great experiences',
        gapEnd: 'to write my first novel.',
        answers: ['on which I drew'],
      },
      {
        prompt: "If I could choose, I'd prefer to have lunch with Gloria. I have a great relationship with her.",
        keyword: 'RATHER',
        gapStart: 'I would',
        gapEnd: ', with whom I have a great relationship.',
        answers: ['rather have lunch with Gloria'],
      },
      {
        prompt: 'It is possible that you saw my friend. He has an expensive car.',
        keyword: 'MAY',
        gapStart: 'You',
        gapEnd: 'whose car is expensive.',
        answers: ['may have seen my friend'],
      },
      {
        prompt: 'Peter would only stop his diet on special occasions.',
        keyword: 'ON',
        gapStart: 'Peter would only give',
        gapEnd: 'on special occasions.',
        answers: ['up on his diet'],
      },
      {
        prompt: "I'm sure he was distracted by his music! He can do much better.",
        keyword: 'HAVE',
        gapStart: 'He',
        gapEnd: 'by his music. He can do much better.',
        answers: ['must have been put off'],
      },
    ],
  },
  {
    id: 'moe-p4-13',
    part: 4,
    title: 'Transformaciones 13',
    items: [
      {
        prompt: 'I think we should think of a better idea for our project.',
        keyword: 'TO',
        gapStart: 'I think we should try',
        gapEnd: 'a better idea for our project.',
        answers: ['to come up with'],
      },
      {
        prompt: 'My child used to give the phone to his dad when I phoned him.',
        keyword: 'PASS',
        gapStart: 'My child would',
        gapEnd: 'to his dad when I phoned him.',
        answers: ['pass me over'],
      },
      {
        prompt: 'She was about to leave when she saw me for a second.',
        keyword: 'POINT',
        gapStart: 'She was',
        gapEnd: 'when she caught sight of me.',
        answers: ['on the point of leaving'],
      },
      {
        prompt: 'She tried as hard as she could to find somebody to repair her car on time.',
        keyword: 'HAVE',
        gapStart: 'She did her best to',
        gapEnd: 'on time.',
        answers: ['have her car repaired'],
      },
      {
        prompt: 'It is forbidden to wear smartphones during the exams.',
        keyword: 'BE',
        gapStart: 'Under no circumstances should smartphones',
        gapEnd: 'during the exams.',
        answers: ['be worn'],
      },
      {
        prompt: 'If we want to travel with him, there is no other way but to put up with his mood.',
        keyword: 'UP',
        gapStart: 'If we want to travel with him, his mood has to be',
        gapEnd: 'with.',
        answers: ['put up'],
      },
    ],
  },
  {
    id: 'moe-p4-14',
    part: 4,
    title: 'Transformaciones 14',
    items: [
      {
        prompt: 'It will not be possible to paint your house with that budget.',
        keyword: 'HAVE',
        gapStart: "There is no chance you'll",
        gapEnd: 'with that budget.',
        answers: ['have your house painted'],
      },
      {
        prompt: "He can't understand why the politician repeats the argument.",
        keyword: 'LOSS',
        gapStart: 'He is at',
        gapEnd: 'why the politician repeats the argument.',
        answers: ['a loss to understand'],
      },
      {
        prompt: "Emily's hair badly needs cutting.",
        keyword: 'TIME',
        gapStart: 'It is high time Emily',
        gapEnd: 'her hair cut.',
        answers: ['got'],
      },
      {
        prompt: 'There must be a simple way to explain what happened.',
        keyword: 'BOUND',
        gapStart: 'There is',
        gapEnd: 'for what happened.',
        answers: ['bound to be an explanation'],
      },
      {
        prompt: 'I will support you whatever you decide to do.',
        keyword: 'MATTER',
        gapStart: 'I will support you',
        gapEnd: 'you take.',
        answers: ['no matter what decision'],
      },
      {
        prompt: 'For me this is the best place to live.',
        keyword: 'RATHER',
        gapStart: 'There is no place I would',
        gapEnd: 'live.',
        answers: ['rather'],
      },
    ],
  },
  {
    id: 'moe-p4-15',
    part: 4,
    title: 'Transformaciones 15',
    items: [
      {
        prompt: "I wish I hadn't said that to her.",
        keyword: 'TAKE',
        gapStart: 'If only I could',
        gapEnd: 'what I said to her.',
        answers: ['take back'],
      },
      {
        prompt: "I was looking out of the window when I saw a boy take something from a man's pocket.",
        keyword: 'SIGHT',
        gapStart: 'I was looking out of the window when I',
        gapEnd: "a boy taking something from a man's pocket.",
        answers: ['caught sight of'],
      },
      {
        prompt: "It was the film's music that impressed me most.",
        keyword: 'IMPRESSION',
        gapStart: "The film's music was what made",
        gapEnd: 'on me.',
        answers: ['the greatest impression'],
      },
      {
        prompt: 'My brother and I are alike in many ways.',
        keyword: 'LOT',
        gapStart: 'My brother and I have',
        gapEnd: 'in common.',
        answers: ['a lot'],
      },
      {
        prompt: 'The photo and the portrait look identical to me.',
        keyword: 'DIFFERENCE',
        gapStart: "I can't see any",
        gapEnd: 'between the photo and the portrait.',
        answers: ['difference'],
      },
      {
        prompt: 'The judges were generally less keen on portraits painted from photos than portraits painted from life.',
        keyword: 'TENDED',
        gapStart: 'The judges',
        gapEnd: 'than portraits painted from photos.',
        answers: ['tended to be keener on portraits painted from life'],
      },
    ],
  },
  {
    id: 'moe-p4-16',
    part: 4,
    title: 'Transformaciones 16',
    items: [
      {
        prompt: 'This painting does not appear to be finished.',
        keyword: 'LOOK',
        gapStart: 'This painting does not',
        gapEnd: 'finished.',
        answers: ['look'],
      },
      {
        prompt: 'Several of the applicants were not considered because of their age.',
        keyword: 'PASSED',
        gapStart: 'Several of the applicants were',
        gapEnd: 'because of their age.',
        answers: ['passed over'],
      },
      {
        prompt: 'For many teenagers, their looks are their highest priority.',
        keyword: 'MATTERS',
        gapStart: 'Appearance is all that',
        gapEnd: 'for many teenagers.',
        answers: ['matters'],
      },
      {
        prompt: "It's encouraging to discover that the group is both talented and enthusiastic.",
        keyword: 'ONLY',
        gapStart: "It's encouraging to discover that the group shows",
        gapEnd: 'as well.',
        answers: ['not only enthusiasm but talent'],
      },
      {
        prompt: 'Do you mind if John joins us for the meeting?',
        keyword: 'TO',
        gapStart: 'Do you',
        gapEnd: 'for the meeting?',
        answers: ['object to John joining us'],
      },
      {
        prompt: 'Dan abandoned his studies at university because he was ill.',
        keyword: 'RESULTED',
        gapStart: "Dan's illness",
        gapEnd: 'his studies at university.',
        answers: ['resulted in him giving up'],
      },
    ],
  },
  {
    id: 'moe-p4-17',
    part: 4,
    title: 'Transformaciones 17',
    items: [
      {
        prompt: 'As soon as the tennis players went onto the court, it started raining.',
        keyword: 'HAD',
        gapStart: 'No sooner had the players',
        gapEnd: 'than it started raining.',
        answers: ['entered the court'],
      },
      {
        prompt: "'We'll have to postpone the meeting until next week, as a lot of people are on leave,' the manager said.",
        keyword: 'OFF',
        gapStart: 'The manager said the meeting was going to be',
        gapEnd: 'until the following week, as a lot of people were on leave.',
        answers: ['put off'],
      },
      {
        prompt: 'As visibility was getting worse and worse, Bob and Jane had to cut short their sailing trip.',
        keyword: 'BUT',
        gapStart: 'As visibility was getting worse and worse, Bob and Jane had',
        gapEnd: 'cut short their sailing trip.',
        answers: ['no choice but to'],
      },
      {
        prompt: "Please tick this box if you don't want us to inform you about future events.",
        keyword: 'RATHER',
        gapStart: 'Please tick this box if you would',
        gapEnd: 'any information about future events.',
        answers: ['rather not be sent'],
      },
      {
        prompt: 'During the winter I prefer watching football to playing it.',
        keyword: 'SOONER',
        gapStart: "During the winter I'd",
        gapEnd: 'than play it.',
        answers: ['sooner watch football'],
      },
      {
        prompt: "Karen says it takes less than an hour to drive there, but I'm sure she has got it wrong.",
        keyword: 'MUST',
        gapStart: 'Karen says it takes less than an hour to drive there, but she',
        gapEnd: 'a mistake.',
        answers: ['must have made'],
      },
    ],
  },
  {
    id: 'moe-p4-18',
    part: 4,
    title: 'Transformaciones 18',
    items: [
      {
        prompt: 'Students wishing to enrol on the course should complete all sections of the application form.',
        keyword: 'REQUIRED',
        gapStart: 'Students wishing to enrol on the course are',
        gapEnd: 'the application form.',
        answers: ['required to complete all sections of'],
      },
      {
        prompt: 'She decided to move to a part-time job so that she could spend more time with her young children.',
        keyword: 'ORDER',
        gapStart: 'She decided to move to a part-time job',
        gapEnd: 'more time with her young children.',
        answers: ['in order to be able to spend'],
      },
      {
        prompt: 'I really messed up the first question in the exam. I wish I had considered it more carefully before answering.',
        keyword: 'THOUGHT',
        gapStart: 'I really messed up the first question in the exam. I should have',
        gapEnd: 'it more carefully.',
        answers: ['thought about'],
      },
      {
        prompt: 'The factory has been able to reduce its CO2 emissions by 50% in the last year.',
        keyword: 'SUCCEEDED',
        gapStart: 'The factory has',
        gapEnd: 'its CO2 emissions by 50% in the last year.',
        answers: ['succeeded in cutting back'],
      },
      {
        prompt: "It's a long walk home, so I advise you not to miss the last train.",
        keyword: 'BETTER',
        gapStart: "It's a long walk home, so you'd",
        gapEnd: 'the last train.',
        answers: ['better not miss'],
      },
      {
        prompt: "They didn't mention the subject of unpaid holidays until the end of the interview.",
        keyword: 'BRING',
        gapStart: 'Not until the end of the interview did they',
        gapEnd: 'the subject of unpaid holidays.',
        answers: ['bring up'],
      },
    ],
  },
  {
    id: 'moe-p4-19',
    part: 4,
    title: 'Transformaciones 19',
    items: [
      {
        prompt: "Nina was driving the car at the time, but I don't think the accident was her fault.",
        keyword: 'RESPONSIBLE',
        gapStart: "Nina was driving the car at the time, but I don't hold her",
        gapEnd: 'the accident.',
        answers: ['responsible for'],
      },
      {
        prompt: 'Jack has such a vivid imagination; it is possible that he invented the whole story.',
        keyword: 'MADE',
        gapStart: 'Jack has such a vivid imagination that he',
        gapEnd: 'the whole story.',
        answers: ['might have made up'],
      },
      {
        prompt: 'I had only just got home when the phone rang.',
        keyword: 'SOONER',
        gapStart: 'No sooner had I',
        gapEnd: 'than the phone rang.',
        answers: ['got home'],
      },
      {
        prompt: 'Although Karen and Mark have very different personalities and interests, they seem to have a good relationship.',
        keyword: 'ALONG',
        gapStart: 'Although Karen and Mark have very different personalities and interests, they seem to get',
        gapEnd: 'very well.',
        answers: ['along with one another'],
      },
      {
        prompt: "I hadn't seen Martha for over 20 years, but I didn't find it difficult to recognize her at the airport.",
        keyword: 'DIFFICULTY',
        gapStart: "I hadn't seen Martha for over 20 years, but I had",
        gapEnd: 'her at the airport.',
        answers: ['no difficulty recognizing'],
      },
      {
        prompt: 'She is proud of being able to write clearly.',
        keyword: 'ABILITY',
        gapStart: 'She prides herself on having',
        gapEnd: 'to write clearly.',
        answers: ['the ability'],
      },
    ],
  },
  {
    id: 'moe-p4-20',
    part: 4,
    title: 'Transformaciones 20',
    items: [
      {
        prompt: 'Once Dr Smithers had given us a clear explanation of the procedure, we were able to go ahead with the experiment.',
        keyword: 'EXPLAINED',
        gapStart: 'Once Dr Smithers had clearly',
        gapEnd: 'to us, we were able to go ahead with the experiment.',
        answers: ['explained the procedure'],
      },
      {
        prompt: 'The government has banned all exports to the country except for food and medicine.',
        keyword: 'EXCEPTION',
        gapStart: 'The government has banned all exports to the country with the',
        gapEnd: 'food and medicine.',
        answers: ['exception of'],
      },
      {
        prompt: "The other students don't mind whether you give your presentation on Thursday or Friday.",
        keyword: 'DIFFERENCE',
        gapStart: "It doesn't make a",
        gapEnd: 'whether you give your presentation on Thursday or Friday.',
        answers: ['difference to the other students'],
      },
      {
        prompt: "'What are you thinking of doing for the college's centenary celebration?' the tutor asked the students.",
        keyword: 'MIND',
        gapStart: 'The tutor asked the students what they had',
        gapEnd: "for the college's centenary celebration.",
        answers: ['in mind'],
      },
      {
        prompt: "Dr Ramesh's colleagues regarded him so highly that they forgave his inability to remember people's names.",
        keyword: 'HELD',
        gapStart: 'Dr Ramesh was',
        gapEnd: "by his colleagues that they forgave his inability to remember people's names.",
        answers: ['held in such high regard'],
      },
      {
        prompt: "As learning new languages had never been a problem for her, Katy didn't expect to have any difficulties when she went to live abroad.",
        keyword: 'COME',
        gapStart: 'Learning new languages had always',
        gapEnd: "to her, so Katy didn't expect to have any difficulties when she went to live abroad.",
        answers: ['come naturally'],
      },
    ],
  },
  {
    id: 'moe-p4-21',
    part: 4,
    title: 'Transformaciones 21',
    items: [
      {
        prompt: 'I think that we owe this passenger an apology, as she was apparently given incorrect train times by our call centre staff.',
        keyword: 'MISINFORMED',
        gapStart: 'I think we owe this passenger an apology, as she seems to have been',
        gapEnd: 'by our call centre staff.',
        answers: ['misinformed about train times'],
      },
      {
        prompt: "If her party wins the election, which is unlikely, she'll become President.",
        keyword: 'EVENT',
        gapStart: 'In the',
        gapEnd: "she'll become President.",
        answers: ['unlikely event that she wins the election,'],
      },
      {
        prompt: "I'd like to invite you to dinner to say sorry for forgetting your birthday.",
        keyword: 'MAKE',
        gapStart: "I'd like to",
        gapEnd: 'by inviting you to dinner.',
        answers: ['make up for forgetting your birthday'],
      },
      {
        prompt: 'Jill and I go for a stroll in the countryside occasionally.',
        keyword: 'TIME',
        gapStart: 'Jill and I go for a stroll in the countryside from',
        gapEnd: 'to time.',
        answers: ['time'],
      },
      {
        prompt: 'Guests are welcome to suggest any improvements at Reception.',
        keyword: 'RECOMMENDATIONS',
        gapStart: 'Guests are welcome to make',
        gapEnd: 'for improvements at Reception.',
        answers: ['recommendations'],
      },
      {
        prompt: 'I would be very happy to employ your company in future.',
        keyword: 'HESITATION',
        gapStart: 'I would have no hesitation',
        gapEnd: 'in future.',
        answers: ['in employing your company'],
      },
    ],
  },
  {
    id: 'moe-p4-22',
    part: 4,
    title: 'Transformaciones 22',
    items: [
      {
        prompt: 'It looks like it might be sunny later.',
        keyword: 'POSSIBILITY',
        gapStart: 'There is a',
        gapEnd: 'later.',
        answers: ['possibility of sunshine'],
      },
      {
        prompt: "'You should stop your children watching so much television,' Mary's sister told her.",
        keyword: 'LET',
        gapStart: "Mary's sister advised her not to",
        gapEnd: 'so much television.',
        answers: ['let her children watch'],
      },
      {
        prompt: 'The local council wants to impose a ban on driving at more than 30 kilometres per hour anywhere in this area.',
        keyword: 'ILLEGAL',
        gapStart: 'The local council wants to make',
        gapEnd: 'at more than 30 kilometres per hour anywhere in this area.',
        answers: ['it illegal to drive'],
      },
      {
        prompt: 'Tom missed his plane because he was late leaving for the airport.',
        keyword: 'TIME',
        gapStart: 'If only he had left on',
        gapEnd: "for the airport, he wouldn't have missed the plane.",
        answers: ['time'],
      },
      {
        prompt: 'The guidelines for the appointment of new staff need to be thoroughly revised.',
        keyword: 'THOROUGH',
        gapStart: 'There needs to be',
        gapEnd: 'for the appointment of new staff.',
        answers: ['a thorough revision of the guidelines'],
      },
      {
        prompt: 'The employment rate rose gradually as the economy began to recover.',
        keyword: 'GRADUAL',
        gapStart: 'There was a',
        gapEnd: 'as the economy began to recover.',
        answers: ['gradual rise in the employment rate'],
      },
    ],
  },
  {
    id: 'moe-p4-23',
    part: 4,
    title: 'Transformaciones 23',
    items: [
      {
        prompt: "The change in the company's logo didn't make any difference to the majority of its customers.",
        keyword: 'CONSEQUENCE',
        gapStart: "The change in the company's logo was of no",
        gapEnd: 'to the majority of its customers.',
        answers: ['consequence'],
      },
      {
        prompt: 'I was wondering if you could take us to the airport.',
        keyword: 'THINK',
        gapStart: 'Do you',
        gapEnd: 'you could take us to the airport?',
        answers: ['think'],
      },
      {
        prompt: 'I almost forgot to bring my keys with me.',
        keyword: 'BARELY',
        gapStart: 'I',
        gapEnd: 'to bring my keys with me.',
        answers: ['barely remembered'],
      },
      {
        prompt: "A lot has happened since you've been away.",
        keyword: 'MANY',
        gapStart: '',
        gapEnd: "have happened since you've been away.",
        answers: ['Many things'],
      },
      {
        prompt: "Let's walk to the store, instead of driving.",
        keyword: 'FOOT',
        gapStart: "Rather than going by car, let's go on",
        gapEnd: 'to the store.',
        answers: ['foot'],
      },
      {
        prompt: "It doesn't make a difference to me what you decide to do.",
        keyword: 'MATTER',
        gapStart: 'Your decision does not',
        gapEnd: 'to me.',
        answers: ['matter'],
      },
    ],
  },
  {
    id: 'moe-p4-24',
    part: 4,
    title: 'Transformaciones 24',
    items: [
      {
        prompt: 'You definitely will not win the lottery.',
        keyword: 'CHANCE',
        gapStart: 'You have got no',
        gapEnd: 'the lottery.',
        answers: ['chance of winning'],
      },
      {
        prompt: 'The voting process is the same as it was last year.',
        keyword: 'CHANGED',
        gapStart: 'The voting process has not',
        gapEnd: 'since last year.',
        answers: ['changed'],
      },
      {
        prompt: "'You won't get a good seat if you come late,' said Leslie to me.",
        keyword: 'UNLESS',
        gapStart: 'Leslie said that',
        gapEnd: "I wouldn't get a good seat.",
        answers: ['unless I came early,'],
      },
      {
        prompt: "If I'm being honest, I have to say that the play wasn't as good as I'd expected.",
        keyword: 'SHORT',
        gapStart: 'The play fell',
        gapEnd: 'of my expectations, to be honest with you.',
        answers: ['short'],
      },
      {
        prompt: 'George never listens to what people tell him.',
        keyword: 'NOTICE',
        gapStart: 'George never takes',
        gapEnd: 'what people say to him.',
        answers: ['notice of'],
      },
      {
        prompt: 'Alan is a much better pianist than Jenny.',
        keyword: 'NOWHERE',
        gapStart: 'Jenny is',
        gapEnd: 'at playing the piano as Alan is.',
        answers: ['nowhere near as good'],
      },
    ],
  },
  {
    id: 'moe-p4-25',
    part: 4,
    title: 'Transformaciones 25',
    items: [
      {
        prompt: 'Only the timely arrival of the police prevented the fight from escalating.',
        keyword: 'BEEN',
        gapStart: 'Had it not',
        gapEnd: 'the fight would have escalated.',
        answers: ['been for the timely arrival of the police,'],
      },
      {
        prompt: "I didn't get the impression that he was at all upset.",
        keyword: 'STRIKE',
        gapStart: "He didn't",
        gapEnd: 'as being at all upset.',
        answers: ['strike me'],
      },
      {
        prompt: 'Men outnumber women by two to one in this profession.',
        keyword: 'TWICE',
        gapStart: 'There are',
        gapEnd: 'in this profession.',
        answers: ['twice as many men as women'],
      },
      {
        prompt: "I don't care which days you work next week.",
        keyword: 'CONSEQUENCE',
        gapStart: 'It is of no',
        gapEnd: 'to me which days you work next week.',
        answers: ['consequence'],
      },
      {
        prompt: 'One day she is going to lose her temper with him.',
        keyword: 'MATTER',
        gapStart: 'It is a matter of time',
        gapEnd: 'she loses her temper with him.',
        answers: ['before'],
      },
      {
        prompt: "I thought Sue's original plan was to move to Australia.",
        keyword: 'IMPRESSION',
        gapStart: 'I had the',
        gapEnd: 'moving to Australia.',
        answers: ['impression that Sue was originally planning to'],
      },
    ],
  },
  {
    id: 'moe-p4-26',
    part: 4,
    title: 'Transformaciones 26',
    items: [
      {
        prompt: 'Mr Smith was well-known as a bad-tempered man, but he was also fair.',
        keyword: 'REPUTATION',
        gapStart: 'Despite his',
        gapEnd: ', Mr Smith was also fair.',
        answers: ['reputation as a bad-tempered man'],
      },
      {
        prompt: "Signing the contract without the director's approval is not allowed.",
        keyword: 'CIRCUMSTANCES',
        gapStart: 'Under no circumstances should you sign the contract',
        gapEnd: "the director's approval.",
        answers: ['without'],
      },
      {
        prompt: "It looks like you didn't sleep well last night.",
        keyword: 'IF',
        gapStart: 'You look',
        gapEnd: 'last night.',
        answers: ["as if you didn't sleep much"],
      },
      {
        prompt: "I don't believe that Jane ran that distance in only five minutes!",
        keyword: 'POSSIBLY',
        gapStart: 'Jane cannot',
        gapEnd: 'that distance in only five minutes!',
        answers: ['possibly have run'],
      },
      {
        prompt: "Simon doesn't agree with me about which slogan is best for the campaign.",
        keyword: 'DIFFERENCE',
        gapStart: 'Simon and I have a',
        gapEnd: 'over which slogan is best for the campaign.',
        answers: ['difference of opinion'],
      },
      {
        prompt: "Jane's lawyer suggested that she ignore all the reporters.",
        keyword: 'ATTENTION',
        gapStart: "Jane's lawyer advised her not to pay",
        gapEnd: 'any of the reporters.',
        answers: ['attention to'],
      },
    ],
  },
  {
    id: 'moe-p4-27',
    part: 4,
    title: 'Transformaciones 27',
    items: [
      {
        prompt: 'I doubt that Simon will lend us the money.',
        keyword: 'CHANCE',
        gapStart: 'I think there is a small',
        gapEnd: 'lending us the money.',
        answers: ['chance of Simon'],
      },
      {
        prompt: 'Lucy succeeded in passing her driving test, even though she had flu.',
        keyword: 'MANAGED',
        gapStart: 'Despite having flu, Lucy',
        gapEnd: 'her driving test.',
        answers: ['managed to pass'],
      },
      {
        prompt: 'By the end of the meeting, the committee had agreed on the next step.',
        keyword: 'REACHED',
        gapStart: 'By the end of the committee meeting, an agreement had been',
        gapEnd: 'on what to do next.',
        answers: ['reached'],
      },
      {
        prompt: 'The burglar wore gloves so as not to leave any fingerprints behind.',
        keyword: 'AVOID',
        gapStart: 'The burglar wore gloves in order to',
        gapEnd: 'any fingerprints behind.',
        answers: ['avoid leaving'],
      },
      {
        prompt: "Colin couldn't possibly afford any of the paintings in that gallery.",
        keyword: 'FAR',
        gapStart: 'The paintings in that gallery are',
        gapEnd: 'for Colin to buy.',
        answers: ['far too expensive'],
      },
      {
        prompt: 'I was very shocked when my brother told me what had happened the previous day.',
        keyword: 'ACCOUNT',
        gapStart: "I was very shocked by my brother's",
        gapEnd: 'the previous day.',
        answers: ['account of what had happened'],
      },
    ],
  },
  {
    id: 'moe-p4-28',
    part: 4,
    title: 'Transformaciones 28',
    items: [
      {
        prompt: "I don't think we'll see Simon before he goes to New York.",
        keyword: 'LIKELIHOOD',
        gapStart: "There's very little",
        gapEnd: 'Simon before he goes to New York.',
        answers: ['likelihood of us seeing'],
      },
      {
        prompt: 'The fire at the oil depot has led to the imposition of stricter safety regulations.',
        keyword: 'IMPOSED',
        gapStart: 'Stricter safety regulations have been',
        gapEnd: 'as a result of the fire at the oil depot.',
        answers: ['imposed'],
      },
      {
        prompt: "If you hadn't helped me, I could never have moved the wardrobe.",
        keyword: 'HELP',
        gapStart: 'But for the',
        gapEnd: 'you gave me, I could never have moved the wardrobe.',
        answers: ['help'],
      },
      {
        prompt: "I don't usually make such foolish mistakes.",
        keyword: 'HABIT',
        gapStart: "I'm not in the",
        gapEnd: 'of making such foolish mistakes.',
        answers: ['habit'],
      },
      {
        prompt: 'Most medical students study for their degrees until they are 25.',
        keyword: 'GRADUATE',
        gapStart: "Most medical students don't",
        gapEnd: 'the age of 25.',
        answers: ['graduate until'],
      },
      {
        prompt: 'I enjoyed the view from the top of the tower despite the fact that I hate being in high places like that.',
        keyword: 'HEAD',
        gapStart: "Although I don't have a head for heights, I",
        gapEnd: 'the top of the tower.',
        answers: ['enjoyed the view from'],
      },
    ],
  },
  {
    id: 'moe-p4-29',
    part: 4,
    title: 'Transformaciones 29',
    items: [
      {
        prompt: 'Of all the cities I know, there are few that are more beautiful than St Petersburg.',
        keyword: 'LOVELIEST',
        gapStart: 'St Petersburg is one of the',
        gapEnd: "I've visited.",
        answers: ['loveliest cities'],
      },
      {
        prompt: "I'm not sure which year saw the abolition of capital punishment in this country.",
        keyword: 'DID',
        gapStart: "I'm not sure when they",
        gapEnd: 'capital punishment in this country.',
        answers: ['did away with'],
      },
      {
        prompt: "It's a pity Nico is so unreliable.",
        keyword: 'COUNT',
        gapStart: 'I wish I could',
        gapEnd: 'Nico.',
        answers: ['count on'],
      },
      {
        prompt: 'People say that, if you run, you burn calories efficiently.',
        keyword: 'SUPPOSED',
        gapStart: 'Running is',
        gapEnd: 'of burning calories.',
        answers: ['supposed to be an efficient way'],
      },
      {
        prompt: "France may be Flora's birthplace, but she has never lived there.",
        keyword: 'BORN',
        gapStart: 'Despite the fact that she was',
        gapEnd: ', Flora has never lived there.',
        answers: ['born in France'],
      },
      {
        prompt: 'We were late arriving at the cinema and so missed the start of the film.',
        keyword: 'BY',
        gapStart: 'The film had already started',
        gapEnd: 'we arrived at the cinema.',
        answers: ['by the time'],
      },
    ],
  },
  {
    id: 'moe-p4-30',
    part: 4,
    title: 'Transformaciones 30',
    items: [
      {
        prompt: 'Simon found the recipe book very hard to follow.',
        keyword: 'DIFFICULTY',
        gapStart: 'Simon had',
        gapEnd: 'the recipe book.',
        answers: ['difficulty following'],
      },
      {
        prompt: 'The ice-skater performed faultlessly and received full marks.',
        keyword: 'GAVE',
        gapStart: 'The ice-skater gave a',
        gapEnd: 'and received full marks.',
        answers: ['faultless performance'],
      },
      {
        prompt: 'I was just about to call you to see what time you were coming.',
        keyword: 'POINT',
        gapStart: 'I was',
        gapEnd: 'to see what time you were coming.',
        answers: ['on the point of calling you'],
      },
      {
        prompt: 'Harry was disappointed to hear the news that the match had been cancelled.',
        keyword: 'CAME',
        gapStart: 'News of the cancellation of the match',
        gapEnd: 'to Harry.',
        answers: ['came as a disappointment'],
      },
      {
        prompt: 'At this time of year, the area is affected by violent storms.',
        keyword: 'FEELS',
        gapStart: 'At this time of year, the area often',
        gapEnd: 'violent storms.',
        answers: ['feels the effects of'],
      },
      {
        prompt: 'The trees blown down in the storm were not cleared away for weeks.',
        keyword: 'BEFORE',
        gapStart: 'It was some weeks',
        gapEnd: 'the trees blown down in the storm were cleared away.',
        answers: ['before'],
      },
    ],
  },
];
