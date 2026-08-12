import type {
  ReadingMultipleChoiceExercise,
  CrossTextExercise,
  GappedTextExercise,
  MultipleMatchingExercise,
} from '../types';

// ---------------- PARTE 5: Multiple choice ----------------
export const readingMultipleChoice: ReadingMultipleChoiceExercise[] = [
  {
    id: 'read-p5-01',
    part: 5,
    title: 'La cartografía antes de los satélites',
    text: `Long before satellites made it possible to photograph the Earth from above, cartographers relied on a combination of patient measurement, mathematical inference and no small amount of guesswork to produce maps that were, more often than not, strikingly accurate. The triangulation surveys that underpinned much of eighteenth- and nineteenth-century mapmaking required teams of surveyors to spend months, sometimes years, hauling brass instruments up mountains in order to fix a handful of reference points with precision. Everything else on the map was calculated from those points, a process as much about trust in one's colleagues' arithmetic as about direct observation.

What is easy to forget today, when a smartphone can pinpoint one's location within a few metres, is how much cartography was once an exercise in negotiation between competing authorities. National governments, keen to assert sovereignty over disputed territory, frequently commissioned maps that quietly nudged borders in their favour. Colonial powers, meanwhile, often mapped only what served their administrative or military purposes, leaving vast interior regions blank or, worse, filled in with confident but entirely fictitious detail supplied by earlier, less scrupulous mapmakers.

This is not to suggest that pre-satellite cartography was simply propaganda dressed up as science. The surveyors themselves were frequently meticulous, and the mathematics of triangulation, developed independently in several parts of the world, was genuinely ingenious. The trouble lay less with the methods than with who controlled the final product and to what end it was put once it left the surveyor's hands. A map, after all, has always been as much a claim as a description.

It is tempting to view the arrival of aerial photography, and later satellite imagery, as the moment cartography finally became objective. In truth, the new technologies simply relocated the points at which human judgement, and human bias, entered the process. Someone still had to decide which features to label, which borders to draw with confidence and which to leave dotted, and which of two rival place names to print. The tools changed; the underlying tension between description and claim did not.

Perhaps the most striking continuity is the sheer difficulty of representing a three-dimensional world on a flat page without distortion. Every projection, from Mercator's famous sixteenth-century solution to the dozens devised since, involves trade-offs that mapmakers have never been able to eliminate, only choose between. Areas near the poles, for instance, are notoriously exaggerated in size on Mercator maps, a quirk that had little practical consequence for the sailors the projection was designed for but that has shaped, subtly and for centuries, how generations of schoolchildren have pictured the relative scale of nations.`,
    questions: [
      {
        question: 'What does the writer suggest about triangulation surveys?',
        options: [
          'They depended heavily on collective confidence in shared calculations.',
          'They were largely replaced by guesswork once initial points were set.',
          'They were less accurate than is generally believed today.',
          'They required little specialist mathematical knowledge.',
        ],
        answer: 0,
      },
      {
        question: "According to the second paragraph, maps commissioned by governments were often shaped by",
        options: [
          'a lack of qualified surveyors in disputed regions.',
          'political interests rather than purely descriptive accuracy.',
          'the personal ambitions of individual cartographers.',
          'technical limitations in measuring distant borders.',
        ],
        answer: 1,
      },
      {
        question: 'In the third paragraph, the writer argues that the main problem with early cartography was',
        options: [
          'the poor quality of the mathematical methods used.',
          'the lack of trained surveyors available at the time.',
          'who had authority over the finished maps and their use.',
          'the refusal of colonial powers to fund accurate surveys.',
        ],
        answer: 2,
      },
      {
        question: 'What point does the writer make about aerial and satellite imagery?',
        options: [
          'It eliminated the need for human decisions in mapmaking.',
          'It was resisted by cartographers used to traditional methods.',
          'It shifted, rather than removed, the influence of human judgement.',
          'It proved less reliable than triangulation in disputed areas.',
        ],
        answer: 2,
      },
      {
        question: 'What is said about map projections in the final paragraph?',
        options: [
          'Mercator\u2019s projection has now been abandoned by mapmakers.',
          'No projection can avoid some form of distortion.',
          'Modern projections have finally solved the problem of distortion.',
          'Distortion mainly affects maps used for navigation at sea.',
        ],
        answer: 1,
      },
      {
        question: 'Which best summarises the writer\u2019s overall argument?',
        options: [
          'Cartography only became a rigorous science after satellites were introduced.',
          'Maps have always combined genuine expertise with an element of interpretation or claim.',
          'Colonial mapmaking was the main obstacle to accurate cartography.',
          'Modern mapping technology has made the study of historical maps unnecessary.',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'read-p5-02',
    part: 5,
    title: 'La edad dorada de los transatlánticos',
    text: `Popular memory tends to picture the early twentieth-century ocean liner as an almost impossibly glamorous world: chandeliers, orchestras, and passengers in evening dress strolling along polished decks. This image, largely inherited from a handful of famous ships and the films made about them, captures only a narrow slice of what transatlantic travel actually involved for the millions who experienced it. For every first-class passenger sipping champagne in a panelled lounge, there were several others crammed below decks in conditions that bore little resemblance to luxury.

Steerage, as the cheapest class of passage was known, housed emigrants travelling to build new lives abroad, often in dormitories shared by dozens of strangers with minimal ventilation and privacy. Meals were basic and served at fixed times, queuing was constant, and access to open deck space was frequently restricted to certain hours, if it was permitted at all. Shipping companies, keenly aware that steerage tickets made up the bulk of their profits despite their low individual price, invested comparatively little in improving these conditions until public pressure and new regulations eventually forced change.

What is often missed in retrospective accounts is quite how deliberately the classes were kept apart. Physical barriers, locked gates and separate stairwells ensured that first-class passengers rarely, if ever, glimpsed the conditions endured by those below them, reinforcing a strict social hierarchy that mirrored, and in some ways exaggerated, the divisions of the societies these ships had left behind. This separation was not incidental; it was carefully engineered into the ships' very architecture.

The sinking of a small number of high-profile vessels has, paradoxically, done much to preserve the memory of ocean liners in the public mind, but it has also distorted popular understanding of the period more broadly. Disaster narratives tend to focus overwhelmingly on the experiences of wealthier passengers, whose stories were more thoroughly documented at the time and have since been retold in countless books and films, while the far larger steerage population remains comparatively anonymous.

Historians working today increasingly draw on shipping company records, immigration archives and personal letters to reconstruct a fuller picture of what these voyages entailed. What emerges is an image considerably less uniform, and considerably more revealing of the societies that built and used these ships, than the one preserved in popular memory.`,
    questions: [
      {
        question: 'What point does the writer make in the first paragraph about the popular image of ocean liners?',
        options: [
          'It has been exaggerated by the shipping companies themselves.',
          'It accurately reflects the experience of most passengers at the time.',
          'It reflects only the experience of a minority of passengers.',
          'It was created primarily to attract wealthy customers.',
        ],
        answer: 2,
      },
      {
        question: 'According to the second paragraph, shipping companies were slow to improve steerage conditions because',
        options: [
          'they did not realise how profitable steerage tickets were.',
          'they faced no significant pressure to make changes.',
          'improvements were technically very difficult to implement.',
          'they prioritised comfort in the higher classes instead.',
        ],
        answer: 1,
      },
      {
        question: 'What does the writer suggest about the separation between classes on board these ships?',
        options: [
          'It happened naturally due to differences in passenger wealth.',
          'It was a deliberate design choice built into the ships themselves.',
          'It gradually disappeared as ships became larger.',
          'It was less strict than the social divisions found on land.',
        ],
        answer: 1,
      },
      {
        question: 'In the fourth paragraph, the writer argues that famous shipwrecks have',
        options: [
          'helped historians access more accurate steerage records.',
          'shifted public focus away from the experience of steerage passengers.',
          'had no significant effect on public perceptions of the era.',
          'mainly affected our understanding of first-class passengers.',
        ],
        answer: 1,
      },
      {
        question: 'What does the final paragraph suggest about recent historical research?',
        options: [
          'It confirms that popular accounts of ocean liners were largely accurate.',
          'It relies mainly on the same sources used in earlier popular accounts.',
          'It offers a more varied and complete picture than earlier depictions.',
          'It focuses exclusively on the experiences of wealthy passengers.',
        ],
        answer: 2,
      },
      {
        question: "Which best summarises the writer's overall argument?",
        options: [
          'Ocean liners were far more dangerous than is generally believed.',
          "Popular memory of ocean liners overlooks the majority of passengers' experiences.",
          'Shipping companies deliberately concealed the truth about steerage conditions from historians.',
          'Modern historians have proven that steerage conditions were better than assumed.',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'read-p5-03',
    part: 5,
    title: 'Por qué algunos idiomas tienen más palabras para los colores',
    text: `In 1969, two American researchers, Brent Berlin and Paul Kay, published a study that would shape the field of colour linguistics for decades to come. By comparing colour terminology across dozens of languages, they proposed that languages develop basic colour terms in a broadly predictable sequence: first black and white, then red, followed by yellow or green, then blue, and so on, with more specific terms such as orange, pink, purple and grey appearing only in languages with more extensive colour vocabularies.

The theory was, and remains, controversial. Critics pointed out that the original study relied heavily on a small number of speakers, often tested outside their natural language environment, and that categorising colour perception in this way risked imposing a foreign framework onto languages that may organise the visible spectrum quite differently. Some languages, for instance, use a single term to cover what English speakers would consider two distinct colours, such as blue and green, while others make finer distinctions within a single hue that English speakers would never think to separate.

More recent research has tended to soften Berlin and Kay's original claims without abandoning them entirely. Cross-cultural studies using more rigorous methods have broadly confirmed that certain colour distinctions, such as that between light and dark, tend to appear early across unrelated languages, lending some support to the idea of a universal underlying structure to colour perception. At the same time, researchers now place far greater emphasis on cultural and environmental factors: languages spoken by communities with access to a wide range of dyed textiles, for example, often develop richer colour vocabularies than those where such distinctions carry less practical importance.

This raises a deeper question that continues to divide linguists: does having a specific word for a colour change how that colour is actually perceived, or does vocabulary simply catch up with distinctions people can already see regardless of language? Experiments using eye-tracking and reaction-time tests have offered some evidence for the former, suggesting that speakers of languages with more colour terms can distinguish between certain shades marginally faster than speakers whose language groups those shades together, although the practical significance of these tiny differences remains a matter of debate.

What is not in dispute is that colour vocabulary offers a rare, relatively accessible window into much larger questions about the relationship between language, culture and perception, questions that continue to attract attention well beyond the confines of linguistics itself.`,
    questions: [
      {
        question: "What did Berlin and Kay's 1969 study propose?",
        options: [
          'That all languages eventually develop identical colour vocabularies.',
          'That basic colour terms tend to emerge in a similar order across languages.',
          'That colour perception varies mainly according to geography.',
          'That only certain cultures are capable of distinguishing between colours.',
        ],
        answer: 1,
      },
      {
        question: 'According to the second paragraph, one criticism of the original study was that',
        options: [
          'it ignored the existence of basic colour terms altogether.',
          'it was based on research carried out over too short a period.',
          'it may have forced an inappropriate framework onto other languages.',
          'it focused only on languages spoken in industrialised countries.',
        ],
        answer: 2,
      },
      {
        question: 'What does more recent research suggest about colour vocabulary?',
        options: [
          "It has completely disproved Berlin and Kay's original theory.",
          'It supports some universal patterns while also stressing cultural influence.',
          'It shows environmental factors are irrelevant to colour vocabulary.',
          'It confirms that all cultures perceive colour in an identical way.',
        ],
        answer: 1,
      },
      {
        question: 'What unresolved question does the writer raise in the fourth paragraph?',
        options: [
          'Whether colour vocabulary is inherited or learned during childhood.',
          'Whether vocabulary shapes perception or merely reflects existing perception.',
          'Whether eye-tracking technology can accurately measure perception.',
          'Whether some languages will eventually lose their colour vocabulary.',
        ],
        answer: 1,
      },
      {
        question: 'What does the writer say about the results of eye-tracking experiments?',
        options: [
          'They provide conclusive proof that vocabulary determines perception.',
          'They show no measurable difference between speakers of different languages.',
          'They offer modest evidence of an effect whose importance is debated.',
          'They have been dismissed by most linguists as methodologically flawed.',
        ],
        answer: 2,
      },
      {
        question: "What is the writer's overall purpose in this passage?",
        options: [
          "To argue that Berlin and Kay's theory should be entirely rejected.",
          'To explain why colour vocabulary remains a genuinely open and revealing research question.',
          'To prove that language has no real effect on how people perceive colour.',
          'To criticise linguists for failing to reach agreement on a simple issue.',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'read-p5-04',
    part: 5,
    title: 'El inesperado auge del pádel',
    text: `Few racquet sports have expanded as rapidly, or as unexpectedly, as padel. Invented in Mexico in the late 1960s and popularised chiefly in Spain and Argentina for decades afterwards, the sport spent much of its history as a regional curiosity, largely unknown beyond a handful of countries. Over the past five years, however, padel courts have begun appearing across Northern Europe, the United States and parts of Asia at a pace that has caught even enthusiastic early investors somewhat off guard.

Part of the appeal lies in its relatively gentle learning curve. Played in doubles on a court roughly a third of the size of a tennis court, enclosed by glass and mesh walls that keep the ball in play, padel allows complete beginners to sustain reasonably enjoyable rallies within their very first session, something rarely true of tennis. This accessibility has made the sport particularly attractive to clubs looking to broaden their membership beyond serious competitive players.

The sport's rapid growth has, however, created a distinctly modern problem: a shortage of suitable venues. Padel courts require less space than tennis courts but still represent a significant investment, and in many cities the availability of land has struggled to keep up with demand. Waiting lists for court time in some urban clubs now stretch to several months, and the gap between demand and supply has become, if anything, more pronounced as the sport's profile has risen.

Tennis clubs themselves have responded in strikingly different ways. Some have embraced padel enthusiastically, converting underused tennis courts in the hope of attracting a younger, more socially oriented membership, while others have resisted, concerned that padel's popularity might eventually come at the expense of tennis participation rather than complement it. Early data from clubs that have introduced both sports suggests the picture is more complicated than either camp initially assumed: rather than replacing tennis outright, padel appears in many cases to be drawing in an entirely new group of players who might not otherwise have taken up a racquet sport at all.

Whether padel can sustain its current rate of growth remains an open question. Much will depend on whether investment in courts and coaching can keep pace with demand, and whether the sport can avoid the kind of oversaturation that has, in other fast-growing pastimes, eventually led to a plateau or even decline in participation.`,
    questions: [
      {
        question: "What does the writer say about padel's early history?",
        options: [
          'It was popular worldwide from the moment it was invented.',
          'It remained largely confined to a small number of countries for a long time.',
          'It was originally developed as a variant of tennis in Europe.',
          'It failed to attract significant interest until the last five years.',
        ],
        answer: 1,
      },
      {
        question: "According to the second paragraph, one reason for padel's popularity is that",
        options: [
          'it requires significantly more skill than tennis to play well.',
          'it can be played on courts identical in size to tennis courts.',
          'beginners can enjoy the game almost immediately.',
          'it was specifically designed to replace tennis in clubs.',
        ],
        answer: 2,
      },
      {
        question: 'What problem does the third paragraph describe?',
        options: [
          'Padel courts are too expensive for most clubs to build at all.',
          'Demand for padel courts has outpaced the available supply.',
          'Padel courts take up significantly more space than tennis courts.',
          'Waiting lists have led to a decline in interest in the sport.',
        ],
        answer: 1,
      },
      {
        question: 'How have tennis clubs reacted to the rise of padel?',
        options: [
          'They have universally welcomed it as a way to attract new members.',
          'They have reacted in different ways, reflecting differing concerns.',
          'Most have refused to allow padel courts to be built.',
          'They have converted all their tennis courts into padel courts.',
        ],
        answer: 1,
      },
      {
        question: 'What does early data mentioned in the fourth paragraph suggest?',
        options: [
          'Padel is directly responsible for a decline in tennis participation.',
          'Padel mainly attracts players who would otherwise avoid racquet sports.',
          'Tennis and padel attract exactly the same type of player.',
          'Clubs offering both sports have seen no significant change in membership.',
        ],
        answer: 1,
      },
      {
        question: "What is the writer's attitude towards padel's future growth?",
        options: [
          'Confident that it will continue at its current pace indefinitely.',
          'Uncertain, dependent on factors such as investment and saturation.',
          'Pessimistic, predicting an imminent decline in participation.',
          'Dismissive of concerns raised by tennis clubs.',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'read-p5-05',
    part: 5,
    title: 'El extraño mundo de los deportes de memoria',
    text: `Once a year, a small community of competitors gathers to perform feats that most people would consider close to impossible: memorising the order of a shuffled deck of cards in under a minute, or committing hundreds of random digits to memory well enough to recite them back without error. Competitive memory sports, as this niche pursuit has come to be known, occupies an odd space between athletic competition and cognitive party trick, and its practitioners are, perhaps surprisingly, rarely people born with naturally exceptional memories.

What separates elite memory athletes from everyone else, research consistently suggests, is not raw cognitive horsepower but technique, developed through often years of deliberate practice. Most competitors rely on some version of what is known as the method of loci, an ancient mnemonic strategy in which information to be remembered is mentally attached to specific locations along a familiar imagined route, such as rooms in a childhood home. Retrieving the information later becomes a matter of mentally walking the route and noting what has been placed where.

Sceptics sometimes dismiss these techniques as parlour tricks with little practical value beyond competition, but a growing body of research suggests otherwise. Several studies have found that ordinary volunteers trained in memory palace techniques for just a few weeks show measurable, lasting improvements in memory performance well beyond the specific tasks they practised, along with changes in brain connectivity patterns that resemble those seen in elite memory athletes.

What remains unclear is how far these benefits generalise to the kind of everyday remembering most people actually care about, such as recalling names, appointments or where they left their keys. Memory athletes themselves are often the first to admit that their skills are narrowly specialised: someone capable of memorising a random sequence of a thousand digits may be just as forgetful as anyone else when it comes to remembering to buy milk on the way home.

This gap between spectacular competitive performance and mundane daily forgetfulness has become a subject of genuine scientific interest in its own right, offering researchers a useful natural experiment in how memory techniques transfer, or fail to transfer, from one context to another. For competitors, meanwhile, the appeal seems to lie less in any practical payoff than in the simple, demonstrable satisfaction of doing something that still strikes most observers as close to magic.`,
    questions: [
      {
        question: 'What does the writer suggest about most competitive memory athletes?',
        options: [
          'They were identified early in life as having exceptional natural memories.',
          'Their abilities come mainly from trained technique rather than innate talent.',
          'They tend to specialise in only one narrow area of memory competition.',
          'Their success rate declines noticeably as they get older.',
        ],
        answer: 1,
      },
      {
        question: 'What does the second paragraph explain about the method of loci?',
        options: [
          'It was developed specifically for modern memory competitions.',
          'It requires competitors to physically visit real locations.',
          'It works by linking information to a mentally visualised familiar route.',
          'It is only effective for memorising numerical information.',
        ],
        answer: 2,
      },
      {
        question: 'What do studies mentioned in the third paragraph suggest?',
        options: [
          'Memory palace techniques offer no benefits beyond competition settings.',
          'Training in memory techniques can produce broader, lasting improvements.',
          'Only elite athletes show any brain changes from memory training.',
          'Ordinary volunteers cannot successfully learn memory palace techniques.',
        ],
        answer: 1,
      },
      {
        question: 'According to the fourth paragraph, memory athletes often',
        options: [
          'struggle with basic memory tasks unrelated to their trained skills.',
          'refuse to admit any limitations in their abilities.',
          'apply their techniques equally well to everyday situations.',
          'perform worse in competitions as their specialised skills improve.',
        ],
        answer: 0,
      },
      {
        question: 'Why does the writer describe the gap between competitive and everyday memory as scientifically interesting?',
        options: [
          'It proves that memory competitions serve no real purpose.',
          "It offers insight into how memory skills do or don't transfer between contexts.",
          'It shows that memory athletes are exaggerating their abilities.',
          'It confirms that memory cannot be meaningfully improved through practice.',
        ],
        answer: 1,
      },
      {
        question: 'What does the writer suggest motivates memory athletes to compete?',
        options: [
          'The financial rewards available in memory competitions.',
          'The chance to prove a practical, everyday skill.',
          'The satisfaction of performing an ability that seems extraordinary.',
          'The desire to be recognised as more intelligent than others.',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'read-p5-06',
    part: 5,
    title: 'Cómo repiensan las ciudades el alumbrado público',
    text: `For over a century, the guiding principle behind street lighting in most cities has been straightforward: more light is safer light. Brighter, more extensively lit streets, the reasoning goes, deter crime, reduce traffic accidents and generally make urban spaces feel more secure after dark. In recent years, however, a growing number of city planners have begun questioning whether this assumption, largely inherited from an era of far more limited lighting technology, still holds up under closer scrutiny.

Part of the challenge comes from research on light pollution, which has documented far-reaching effects on wildlife, disrupting the migratory patterns of birds, the feeding habits of bats and the reproductive cycles of numerous insect species, many of which play crucial roles in local ecosystems. Excessive artificial light has also been linked, in a growing body of research, to disrupted sleep patterns among city residents, even those who believe their curtains adequately block outside light.

The relationship between lighting levels and crime, meanwhile, turns out to be considerably murkier than commonly assumed. Several rigorous studies comparing crime rates before and after lighting upgrades have found only modest effects, and some researchers argue that beyond a certain baseline level, additional brightness contributes little to genuine safety while significantly increasing energy consumption and light pollution.

In response, a handful of cities have begun experimenting with more targeted approaches: motion-activated lighting that brightens only when pedestrians or vehicles are actually present, warmer colour temperatures shown to be less disruptive to wildlife, and carefully calibrated lighting that illuminates pathways and crossings more intensely than surrounding areas rather than flooding entire streets uniformly.

Early results from these pilot schemes have been cautiously encouraging, with several cities reporting significant energy savings alongside no measurable increase in reported crime or accidents. Residents' subjective sense of safety, interestingly, has proved more resistant to change than the objective statistics, suggesting that any wider shift away from blanket lighting will likely need to be accompanied by considerable public communication if it is to gain lasting acceptance.`,
    questions: [
      {
        question: 'What assumption does the first paragraph describe as being questioned?',
        options: [
          'That street lighting should be funded by local rather than national government.',
          'That more extensive lighting automatically makes cities safer.',
          'That lighting technology has not improved significantly in recent decades.',
          "That crime rates are directly linked to a city's overall wealth.",
        ],
        answer: 1,
      },
      {
        question: 'What does the second paragraph say about artificial light?',
        options: [
          'It has measurable negative effects on both wildlife and human sleep.',
          'Its effects on wildlife are still poorly understood by scientists.',
          'It mainly affects insect species with no wider ecological role.',
          'It has less impact on sleep than previously believed.',
        ],
        answer: 0,
      },
      {
        question: 'What does the third paragraph suggest about the link between lighting and crime?',
        options: [
          'It is stronger than most city planners currently believe.',
          'It weakens significantly once lighting exceeds a certain level.',
          "It varies enormously depending on a city's population size.",
          'It has never been properly studied by researchers.',
        ],
        answer: 1,
      },
      {
        question: 'What approach do some cities described in the fourth paragraph share?',
        options: [
          'Removing street lighting entirely from residential areas.',
          'Using lighting more selectively rather than uniformly.',
          'Replacing all street lighting with private security patrols.',
          'Increasing lighting levels only in commercial districts.',
        ],
        answer: 1,
      },
      {
        question: 'What does the writer say about the results of these pilot schemes?',
        options: [
          'They have shown no measurable benefits of any kind.',
          'They have led to significant increases in reported crime.',
          'They suggest energy savings without a rise in crime or accidents.',
          'They have proved too expensive for most cities to continue.',
        ],
        answer: 2,
      },
      {
        question: 'What does the final paragraph suggest about public perception of safety?',
        options: [
          'It has changed as quickly as objective crime statistics.',
          'It may take deliberate communication efforts to shift.',
          'It has already fully adjusted to reduced lighting levels.',
          'It plays no role in whether these schemes succeed.',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'read-p5-07',
    part: 5,
    title: 'El debate sobre la carne cultivada en laboratorio',
    text: `After more than a decade of development, meat grown from animal cells in a laboratory rather than harvested from a slaughtered animal has finally begun appearing, in small quantities, on restaurant menus in a handful of countries. Proponents present it as a potential solution to some of conventional meat production's most serious problems: greenhouse gas emissions, land use, water consumption and animal welfare concerns that have troubled a growing share of consumers for years.

The science behind the process, while genuinely remarkable, remains expensive and difficult to scale. Producing lab-grown meat involves extracting cells from a living animal, then feeding and encouraging them to multiply within a nutrient-rich growth medium until enough tissue has accumulated to resemble a recognisable cut of meat. Early production costs ran into the hundreds of dollars per portion; although these costs have fallen dramatically as techniques have improved, achieving genuine price parity with conventional meat still appears, by most industry estimates, to be several years away at best.

Consumer attitudes toward the product remain deeply divided, and not always along predictable lines. Surveys conducted across several countries have found that younger consumers, often assumed to be the most receptive to novel food technology, are not necessarily more willing to try lab-grown meat than older generations; familiarity with the concept, rather than age alone, appears to be the stronger predictor of openness to trying it. Vegetarians and vegans, meanwhile, are often surprisingly uninterested, since many object to the underlying idea of eating meat at all, regardless of how it was produced.

Regulatory approval has proceeded unevenly around the world, with some countries moving relatively quickly to establish safety frameworks while others have taken a considerably more cautious approach, citing unresolved questions about long-term health effects and, in some cases, more overtly protectionist concerns about the impact on existing livestock industries and the farmers who depend on them.

Whether lab-grown meat eventually becomes a mainstream product or remains a costly curiosity restricted to a handful of upscale restaurants may ultimately depend less on the underlying science, which continues to improve steadily, than on whether producers can convince a genuinely sceptical public that the product is worth trying in the first place.`,
    questions: [
      {
        question: 'What does the writer identify as the main appeal of lab-grown meat for its supporters?',
        options: [
          'Its potential to taste noticeably better than conventional meat.',
          'Its potential to address environmental and welfare concerns linked to conventional meat.',
          'Its ability to be produced more quickly than conventional meat.',
          'Its potential to eliminate the need for any animal involvement whatsoever.',
        ],
        answer: 1,
      },
      {
        question: 'What does the second paragraph say about the cost of producing lab-grown meat?',
        options: [
          'It has remained essentially unchanged since the technology was developed.',
          'It has fallen but still has some way to go before matching conventional meat.',
          'It is now lower than the cost of producing conventional meat.',
          'It varies so much between countries that no clear trend can be identified.',
        ],
        answer: 1,
      },
      {
        question: 'What does the third paragraph suggest about consumer attitudes?',
        options: [
          'Younger consumers are consistently more open to trying lab-grown meat than older ones.',
          'Familiarity with the concept matters more than age in predicting openness to it.',
          'Vegetarians and vegans are generally the most enthusiastic potential customers.',
          'Consumer attitudes are broadly similar across all demographic groups.',
        ],
        answer: 1,
      },
      {
        question: 'Why are some vegetarians and vegans described as uninterested in lab-grown meat?',
        options: [
          'They doubt that the product is genuinely safe to eat.',
          'They object to the basic concept of eating meat regardless of its origin.',
          'They believe the product is too expensive to be worth trying.',
          'They are unaware that the product currently exists.',
        ],
        answer: 1,
      },
      {
        question: 'What does the fourth paragraph say about regulatory approval?',
        options: [
          'It has proceeded at a similar pace in every country.',
          'It has been blocked entirely in most parts of the world.',
          'It has varied, partly due to concerns beyond food safety alone.',
          'It has been driven mainly by pressure from environmental groups.',
        ],
        answer: 2,
      },
      {
        question: 'According to the final paragraph, what will most likely determine the future success of lab-grown meat?',
        options: [
          'Further breakthroughs in the underlying scientific process.',
          'Whether producers can overcome public scepticism about trying it.',
          'Whether governments choose to subsidise its production.',
          'Whether conventional meat production becomes significantly more expensive.',
        ],
        answer: 1,
      },
    ],
  },
];

// ---------------- PARTE 6: Cross-text multiple matching ----------------
export const crossText: CrossTextExercise[] = [
  {
    id: 'read-p6-01',
    part: 6,
    title: '¿Deberían las ciudades prohibir los coches en el centro?',
    intro:
      'Four writers give their views on whether city centres should be closed to private cars.',
    texts: [
      {
        label: 'A',
        text: `Banning private cars from city centres is, in my view, an idea whose time has come. The evidence from cities that have already done so is hard to dismiss: air quality improves, pedestrian injuries fall, and local businesses, contrary to the fears often voiced beforehand, tend to see footfall rise rather than drop. Sceptics point to the inconvenience for residents who rely on cars for mobility reasons, and this is a fair concern that any sensible policy must address through exemptions. But treating this legitimate detail as a reason to abandon the whole project seems, frankly, like letting the perfect become the enemy of the good.`,
      },
      {
        label: 'B',
        text: `I understand the appeal of car-free centres, and I do not doubt the environmental data. What troubles me is how often these policies are designed around the assumption that everyone can simply switch to walking, cycling or public transport. For older residents, for parents managing young children, and for people with disabilities, a car is not a lifestyle choice but a practical necessity, and the exemption schemes offered in most cities are, in practice, bureaucratic and difficult to access. Improve public transport first, comprehensively, and only then consider restricting cars.`,
      },
      {
        label: 'C',
        text: `The debate around car bans tends to generate more heat than light, largely because both sides argue as though the answer must be identical in every city. A dense, historic centre with narrow streets and excellent existing transport links is an obvious candidate for restriction; a sprawling city built around the car over decades is a different matter entirely, and rushing such a place into a ban risks a public backlash that sets the wider cause of sustainable transport back years. Context, not ideology, should decide the matter.`,
      },
      {
        label: 'D',
        text: `What strikes me most in this debate is how rarely anyone asks residents what they actually want before designing a scheme. Councils that have consulted extensively before implementing restrictions have generally seen far less opposition, and far greater long-term compliance, than those that imposed changes from above. The environmental and safety case for reducing city-centre traffic is, by now, thoroughly established; the remaining challenge is almost entirely one of implementation and communication, not of principle.`,
      },
    ],
    questions: [
      { question: 'Which writer expresses a different view from Writer A on how straightforward it is to justify exemptions from a car ban?', answerLabel: 'B' },
      { question: 'Which writer takes a similar view to Writer D on whether the underlying case for restricting cars has already been proven?', answerLabel: 'A' },
      { question: 'Which writer, unlike the others, argues that the right policy depends heavily on the specific characteristics of each city?', answerLabel: 'C' },
      { question: 'Which writer shares Writer B\u2019s concern about the practical impact of car bans on specific groups of residents?', answerLabel: 'B' },
    ],
  },
  {
    id: 'read-p6-02',
    part: 6,
    title: '¿Deberían las escuelas eliminar los deberes?',
    intro: 'Four teachers give their views on whether homework should be abolished in secondary schools.',
    texts: [
      {
        label: 'A',
        text: "I've taught for over twenty years, and in my experience, homework does far more to widen the gap between students from different backgrounds than it does to improve learning outcomes overall. Children with quiet spaces to work, engaged parents and private tutors thrive under a homework-heavy system; those without these advantages fall further behind through no fault of their own. If we're serious about equity in education, cutting homework significantly, rather than tinkering at the edges, seems like an obvious place to start.",
      },
      {
        label: 'B',
        text: "Abolishing homework outright strikes me as an overreaction to what is, in truth, a problem of poor design rather than homework itself. Badly planned assignments that simply repeat classwork are indeed a waste of everyone's time, but well-designed tasks that require independent thought can genuinely deepen understanding in ways that classroom time alone cannot. The solution is better homework, not none at all, and I worry that removing it altogether would primarily benefit students who were already coping well without much extra practice.",
      },
      {
        label: 'C',
        text: "What frustrates me most about this debate is how rarely anyone consults students themselves. In my own classes, when I've asked directly, most students say they would prefer significantly less homework, not none, provided that what remains is genuinely useful rather than simply time-consuming. Their instincts, in my experience, are usually sound: they can tell the difference between an assignment that helped them and one that existed mainly to demonstrate that homework had, in fact, been set.",
      },
      {
        label: 'D',
        text: "I remain unconvinced that the research on homework's effectiveness is anywhere near settled enough to justify sweeping policy changes in either direction. Studies vary enormously depending on the age group studied, the subject taught and how homework is measured, and drawing firm conclusions from this patchwork of evidence seems premature. Schools considering major changes to homework policy would do well to trial them carefully and measure the results, rather than adopting a fashionable position based on limited evidence.",
      },
    ],
    questions: [
      { question: 'Which writer, unlike Writer D, argues confidently for a particular policy change regarding homework?', answerLabel: 'A' },
      { question: "Which writer shares Writer B's view that poorly designed tasks are a bigger problem than homework itself?", answerLabel: 'C' },
      { question: 'Which writer takes a different view from Writer A on whether reducing homework would help disadvantaged students?', answerLabel: 'B' },
      { question: 'Which writer argues that any major policy decision on homework should be based on careful trials rather than current assumptions?', answerLabel: 'D' },
    ],
  },
  {
    id: 'read-p6-03',
    part: 6,
    title: '¿Merece la pena vivir y trabajar desde una furgoneta?',
    intro: 'Four writers share their experience of van life, working remotely while travelling in a converted van.',
    texts: [
      {
        label: 'A',
        text: "After eighteen months on the road, I can say with confidence that van life delivered exactly what I hoped for: freedom, cheaper living costs and a genuinely different perspective on what I actually need day to day. The financial savings alone have been considerable, since I no longer pay rent or many of the bills that come with a fixed address. The trade-offs, mainly around comfort and reliable internet access, have been far smaller than I expected before I started.",
      },
      {
        label: 'B',
        text: "I lasted just over four months before returning to a conventional flat, and I don't regret trying it for a moment, but I underestimated how exhausting constant logistics would become: finding parking, sourcing water, locating decent internet, all on top of an already demanding remote job. What looks effortless on social media took up a surprising amount of mental energy that I would rather have spent on my actual work. For me, the romantic image and the daily reality simply didn't match up.",
      },
      {
        label: 'C',
        text: "The financial argument for van life gets repeated so often online that it's worth questioning more carefully. Once you factor in the cost of a reliable vehicle, conversion work, ongoing maintenance and the campsite or parking fees that add up faster than most newcomers expect, the savings compared with a modest rented flat are, in my experience, considerably smaller than advertised. I don't regret my choice, but I made it for the lifestyle, not to save money, and I think more people considering it should be honest with themselves about which motivation is really driving them.",
      },
      {
        label: 'D',
        text: "Two years in, the biggest surprise for me hasn't been the practical challenges, which are real but manageable with a bit of planning, but how much my working habits have had to change. Remote work from a van demands a level of self-discipline that office life never really required of me, since there's no commute to mark the start and end of the day and no colleagues to notice if I'm distracted. Anyone assuming van life will make remote work easier should think again; if anything, it makes good habits more essential, not less.",
      },
    ],
    questions: [
      { question: 'Which writer has a different opinion from Writer A on whether the financial savings of van life are as significant as commonly claimed?', answerLabel: 'C' },
      { question: "Which writer shares Writer D's view that remote work becomes more, not less, demanding while living in a van?", answerLabel: 'B' },
      { question: 'Which writer takes a different view from Writer B about whether van life met their expectations?', answerLabel: 'A' },
      { question: 'Which writer suggests that people considering van life should be honest about their true motivations?', answerLabel: 'C' },
    ],
  },
  {
    id: 'read-p6-04',
    part: 6,
    title: '¿Es necesario un título universitario para triunfar hoy en día?',
    intro: 'Four professionals share their views on whether a university degree is still necessary for career success.',
    texts: [
      {
        label: 'A',
        text: "I dropped out of university after a single term and have never once regretted it. The skills that mattered most in building my career, mainly in software development, were ones I taught myself far more efficiently than any three-year course could have managed. That said, I recognise my experience reflects a specific industry with unusually low barriers to entry, and I'd be cautious about generalising too broadly from it to fields like medicine or law, where formal qualification remains, quite reasonably, non-negotiable.",
      },
      {
        label: 'B',
        text: "Having worked in recruitment for over a decade, I've watched employer attitudes toward degrees shift considerably, though perhaps not as dramatically as some headlines suggest. Certain sectors have genuinely relaxed their requirements, particularly in technology, but in most professional fields a degree still functions as a straightforward, low-effort filter for employers processing hundreds of applications. Removing that filter would require employers to invest far more time evaluating candidates through other means, which many, frankly, are simply not prepared to do.",
      },
      {
        label: 'C',
        text: "What nobody seems to discuss enough is that a degree offers value well beyond direct employability. The critical thinking skills, exposure to unfamiliar ideas and simple experience of managing one's own time that university provides have shaped how I approach problems throughout my career, in ways I doubt I would have developed on my own. Judging a degree purely by whether it lands you a specific job afterwards, I think, misses much of what makes the experience worthwhile in the first place.",
      },
      {
        label: 'D',
        text: "The debate too often assumes a straightforward choice between getting a degree and skipping higher education altogether, when the reality for most young people I meet is far messier: some combination of part-time study, apprenticeships, short courses and self-directed learning, adapted to individual circumstances and financial pressures. Insisting on a single right answer, whichever direction it points in, ignores how differently this decision plays out depending on someone's field, their finances and the opportunities actually available to them locally.",
      },
    ],
    questions: [
      { question: "Which writer expresses a different view from Writer C on how a degree's value should be judged?", answerLabel: 'B' },
      { question: 'Which writer takes a similar view to Writer A on the danger of drawing broad conclusions from individual experience?', answerLabel: 'D' },
      { question: "Which writer argues that a degree's main practical function for employers is to simplify the hiring process?", answerLabel: 'B' },
      { question: 'Which writer suggests that decisions about higher education should be tailored to individual circumstances rather than a general rule?', answerLabel: 'D' },
    ],
  },
  {
    id: 'read-p6-05',
    part: 6,
    title: '¿Deberían prohibirse las propinas?',
    intro: 'Four writers discuss whether restaurants should abolish tipping and pay staff higher fixed wages instead.',
    texts: [
      {
        label: 'A',
        text: "Having managed restaurants for the better part of two decades, I can say with some confidence that abolishing tips in favour of significantly higher base wages, whatever its theoretical appeal, creates as many problems as it solves in practice. Staff accustomed to tip-based earnings, particularly during busy periods, often see their overall take-home pay fall under a fixed-wage model, and the resulting resentment can be considerably more disruptive to team morale than any inequality the old system produced.",
      },
      {
        label: 'B',
        text: "The argument that tipping rewards good service simply doesn't survive contact with the evidence. Numerous studies have found only a weak link between service quality and tip size, with factors like a server's appearance or even the weather having a measurable effect on tips that has nothing to do with how well anyone did their job. A stable, guaranteed wage would remove this arbitrariness entirely, and I struggle to see why anyone employed in the industry would genuinely prefer the current system once they understood the data.",
      },
      {
        label: 'C',
        text: "Whatever the merits of tipping in theory, the practical reality is that any restaurant abolishing it unilaterally puts itself at an immediate competitive disadvantage, since menu prices inevitably rise to cover the higher fixed wages, and customers accustomed to comparing prices across restaurants often simply go elsewhere. Genuine, lasting change here would require an entire industry, or ideally a change in the law, moving together, rather than individual restaurants taking a principled but commercially risky stand alone.",
      },
      {
        label: 'D',
        text: "What gets lost in most of these debates is the sheer diversity of tipping cultures across different types of establishment. A fine-dining restaurant with a small, highly trained waiting staff operates under completely different financial logic from a casual diner employing dozens of part-time student workers, and treating both as though a single policy could apply equally well to each seems, frankly, naive. Any serious reform proposal needs to grapple with this variation rather than pretending the industry is one uniform thing.",
      },
    ],
    questions: [
      { question: 'Which writer argues that tip amounts often bear little relation to the quality of service given?', answerLabel: 'B' },
      { question: 'Which writer, unlike Writer B, is sceptical that abolishing tips would clearly benefit staff?', answerLabel: 'A' },
      { question: 'Which writer warns that a restaurant changing its policy alone risks losing business to competitors?', answerLabel: 'C' },
      { question: 'Which writer argues that any reform needs to account for differences between types of restaurant?', answerLabel: 'D' },
    ],
  },
  {
    id: 'read-p6-06',
    part: 6,
    title: '¿Merece la pena el coaching de vida?',
    intro: 'Four people share their experience of hiring a life coach.',
    texts: [
      {
        label: 'A',
        text: "Six months into working with a coach, I can honestly say it was one of the better decisions I've made, mainly because having someone hold me accountable to goals I kept quietly abandoning on my own proved far more effective than any amount of self-discipline I could muster alone. The sessions themselves weren't revelatory in terms of content, most of the advice was fairly common sense, but the structure and accountability made all the difference.",
      },
      {
        label: 'B',
        text: "I went in expecting something closer to therapy and came away disappointed, mainly because my coach seemed reluctant to engage with anything that felt emotionally complicated, steering conversations back toward goal-setting and action plans whenever things got even slightly difficult. In retrospect, I think I needed a therapist rather than a coach, and I wish someone had been clearer with me about that distinction before I started paying for sessions.",
      },
      {
        label: 'C',
        text: "What nobody warned me about beforehand was how completely unregulated this industry is: anyone can call themselves a life coach after a weekend course, and the quality varies wildly as a result. I eventually found someone excellent, but only after two expensive, largely wasted attempts with coaches whose qualifications, on closer inspection, amounted to considerably less than their confident marketing had suggested.",
      },
      {
        label: 'D',
        text: "For me, the value wasn't in any specific advice or technique, most of which I could probably have found for free online, but in having a dedicated, judgement-free hour each week to actually think through decisions properly rather than making them reactively in the middle of a busy week. Whether that's worth the fairly substantial fee involved is a genuinely personal calculation, and I don't think there's a universal right answer.",
      },
    ],
    questions: [
      { question: 'Which person found that accountability mattered more than the actual advice given?', answerLabel: 'A' },
      { question: 'Which person suggests they may have needed a different kind of professional support altogether?', answerLabel: 'B' },
      { question: 'Which person raises concerns about the lack of regulation in the life coaching industry?', answerLabel: 'C' },
      { question: 'Which person values having dedicated time to reflect more than any specific technique learned?', answerLabel: 'D' },
    ],
  },
  {
    id: 'read-p6-07',
    part: 6,
    title: '¿Deberían los museos devolver los objetos coloniales?',
    intro: 'Four museum professionals give their views on whether Western museums should return objects acquired during the colonial era.',
    texts: [
      {
        label: 'A',
        text: "Having worked in museum conservation for many years, I find the debate is too often framed as a simple binary between keeping everything or returning everything, when the actual history of individual objects varies enormously. Some pieces were taken through outright theft or coercion and the case for return seems, to me, straightforward; others were acquired through purchase or exchange under circumstances that are genuinely more ambiguous, and treating every case identically does a disservice to that complexity.",
      },
      {
        label: 'B',
        text: "I understand the argument for case-by-case assessment, but in practice it has too often become an excuse for institutional inaction, with museums commissioning endless research into provenance while returning almost nothing. At some point, a general presumption in favour of return, particularly for objects taken during periods of clear colonial violence, needs to become the default position, with the burden of proof shifted onto museums wishing to retain contested items rather than onto the countries requesting their return.",
      },
      {
        label: 'C',
        text: "What troubles me about much of this debate is how rarely the perspective of source communities themselves is actually sought before decisions are made on their behalf, whether that decision is to keep an object or to return it. Some communities have expressed a preference for objects to remain in major international museums, precisely because of the larger audiences they reach there, while others want everything back regardless of practical considerations, and both positions deserve to be taken seriously rather than assumed.",
      },
      {
        label: 'D',
        text: "Practical logistics, tediously unglamorous as the subject is, deserve far more attention in this conversation than they typically receive. Even where everyone agrees an object should be returned, questions of adequate climate-controlled storage, security and public access in the receiving institution can take years to resolve properly, and rushing the physical transfer of fragile or valuable objects to score a quick political win serves nobody's long-term interests, least of all the objects themselves.",
      },
    ],
    questions: [
      { question: 'Which writer argues that museums often use complexity as a reason to avoid taking action?', answerLabel: 'B' },
      { question: 'Which writer, unlike Writer A, argues for a general default position rather than individual case-by-case decisions?', answerLabel: 'B' },
      { question: 'Which writer emphasises that source communities are often not properly consulted about decisions affecting them?', answerLabel: 'C' },
      { question: 'Which writer focuses on the practical challenges involved even after a decision to return has been made?', answerLabel: 'D' },
    ],
  },
];

// ---------------- PARTE 7: Gapped text ----------------
export const gappedText: GappedTextExercise[] = [
  {
    id: 'read-p7-01',
    part: 7,
    title: 'El renacer de las bibliotecas públicas',
    textWithGaps: `For much of the last two decades, the public library seemed, to many observers, an institution in slow decline. Rising digitisation, shrinking municipal budgets and the assumption that anything available online no longer needed a physical home combined to produce a steady drumbeat of closures across many countries. {{0}}

Part of the explanation lies in a broadening of what libraries actually offer. The image of a hushed room lined with books, while still accurate in many branches, no longer captures the full picture. {{1}}

This shift has not been without controversy. Traditionalists worry that libraries risk losing their core identity by trying to be all things to all people, spreading limited budgets across services only loosely connected to reading and research. {{2}}

Librarians themselves tend to see the expansion differently. Many describe their role less as guardians of a fixed collection and more as facilitators of access, whether to a novel, a job-listings database or a printer. {{3}}

None of this has fully reversed the financial pressures libraries face, and closures have certainly not stopped altogether. {{4}}

What does seem clear is that where libraries have been given room, and modest funding, to reinvent their offering, they have found an audience. {{5}} Whether that renewed appreciation will translate into sustained public investment remains, for now, an open question.`,
    paragraphs: [
      {
        label: 'A',
        text: 'Many now house maker spaces, job-support centres, language classes and even tool libraries, alongside their traditional lending services.',
      },
      {
        label: 'B',
        text: 'And yet, in the past few years, usage figures in several major cities have begun to climb again, reversing a trend many had assumed was irreversible.',
      },
      {
        label: 'C',
        text: 'They argue, moreover, that this diversification often responds directly to needs that communities have identified themselves, rather than being imposed from above.',
      },
      {
        label: 'D',
        text: 'But where local authorities have chosen to invest rather than retreat, the results suggest that the demand for shared, publicly accessible spaces has not disappeared at all.',
      },
      {
        label: 'E',
        text: 'They point to declining book-borrowing figures as evidence that this broader mission is diluting the very purpose libraries were established to serve.',
      },
      {
        label: 'F',
        text: 'Surveys conducted in several of these cities suggest that visitors increasingly value the library as one of the few remaining public spaces that require no purchase to use.',
      },
      {
        label: 'G',
        text: 'Digital lending, by contrast, has grown steadily but has never come close to replacing physical visits in most of the libraries surveyed.',
      },
    ],
    answers: ['B', 'A', 'E', 'C', 'D', 'F'],
  },
  {
    id: 'read-p7-02',
    part: 7,
    title: 'The quiet return of the handwritten letter',
    textWithGaps: `In an age of instant messaging, it might seem strange that handwritten letters are experiencing something of a revival, particularly among people under thirty who grew up with no memory of a world before smartphones. {{0}}

Part of the appeal, according to those who have taken up letter writing recently, lies precisely in its inconvenience. {{1}}

This is not to suggest that letter writing has become a mass movement capable of rivalling digital communication in scale. {{2}}

What seems to draw people back, time and again, is less the act of writing itself than the experience of receiving something tangible. {{3}}

Stationery shops, many of which had struggled for years against declining demand, report a modest but genuine uptick in sales of good quality paper and fountain pens. {{4}}

None of this suggests a wholesale rejection of digital communication, which remains, for most practical purposes, simply faster and more convenient. {{5}}

Rather, letter writing appears to have carved out a small, deliberate niche of its own: something closer to a considered gift than a routine means of staying in touch.`,
    paragraphs: [
      {
        label: 'A',
        text: 'Composing even a short letter takes considerably longer than sending a message, forces the writer to organise their thoughts before committing pen to paper, and leaves no easy way to delete or revise once a mistake has been made.',
      },
      {
        label: 'B',
        text: 'A handful of independent publishers have even begun producing small runs of stationery aimed specifically at this younger audience, decorated with designs that would look distinctly out of place in a more traditional shop.',
      },
      {
        label: 'C',
        text: 'Surveys suggest that the overwhelming majority of everyday communication, even among the letter-writing enthusiasts interviewed for this piece, still takes place through phones and messaging apps, exactly as it does for everyone else.',
      },
      {
        label: 'D',
        text: 'A letter, unlike a notification, cannot simply be swiped away and forgotten; it sits on a desk or shelf, demanding to be dealt with in a way that feels, to many recipients, refreshingly deliberate.',
      },
      {
        label: 'E',
        text: 'Instead, it appears to function as a deliberate counterpoint to it, valued precisely because it is slower, scarcer and more effortful than any digital alternative could ever be.',
      },
      {
        label: 'F',
        text: 'Social media accounts dedicated to handwriting, calligraphy and vintage stationery have amassed large, engaged followings, suggesting the appeal extends well beyond the small number of people who actually put pen to paper regularly.',
      },
      {
        label: 'G',
        text: 'Several small businesses interviewed for this piece described a surge of interest during periods when digital communication was especially heavy, suggesting the appeal may be linked to a desire for occasional relief from constant connectivity.',
      },
    ],
    answers: ['G', 'A', 'C', 'D', 'B', 'E'],
  },
  {
    id: 'read-p7-03',
    part: 7,
    title: 'The science of déjà vu',
    textWithGaps: `Almost everyone has experienced déjà vu at least once: the uncanny sense that an entirely new situation has somehow already happened before. Despite how common the sensation is, it has proved remarkably difficult for scientists to study directly. {{0}}

For decades, this made déjà vu something of a footnote in psychology, more often discussed in casual conversation than in serious research. {{1}}

One influential theory suggests that déjà vu occurs when the brain's memory and recognition systems fall slightly out of sync, so that a genuinely new scene is processed with a small delay that the brain misinterprets as familiarity. {{2}}

Other researchers favour a somewhat different explanation, focused less on timing and more on how closely a new scene happens to resemble a memory the person cannot consciously recall. {{3}}

What is now becoming clearer, thanks to controlled laboratory studies using virtual reality environments, is that déjà vu may actually serve a useful cognitive function rather than being a meaningless glitch. {{4}}

Interestingly, the frequency of déjà vu experiences appears to decline steadily with age, a pattern that has led some researchers to a further hypothesis. {{5}}

Whatever the precise mechanism eventually turns out to be, déjà vu has moved from being an unexplainable curiosity to a genuine, if still only partially understood, window into how memory actually works.`,
    paragraphs: [
      {
        label: 'A',
        text: 'Under this account, the familiar feeling arises from a kind of unconscious partial match: enough overlapping details to trigger recognition, but not enough for the brain to identify precisely what is being recognised.',
      },
      {
        label: 'B',
        text: 'That reluctance began to change once brain-imaging technology advanced enough to let researchers observe activity in regions associated with memory at the exact moment participants reported the sensation.',
      },
      {
        label: 'C',
        text: 'Specifically, it may act as a kind of internal error-checking system, flagging situations where memory feels unreliable and prompting a moment of conscious reflection rather than automatic trust in one\'s recall.',
      },
      {
        label: 'D',
        text: 'This is largely because it occurs unpredictably, lasts only a few seconds, and cannot reliably be triggered on demand inside a laboratory setting, unlike most phenomena psychologists prefer to study.',
      },
      {
        label: 'E',
        text: 'One possibility is that younger brains, whose memory systems are still developing rapidly, are simply more prone to the kind of processing mismatches that the theory describes.',
      },
      {
        label: 'F',
        text: 'Sceptics of both theories point out that self-reported experiences of déjà vu are notoriously difficult to verify, since by definition the sensation leaves no objective trace once it has passed.',
      },
      {
        label: 'G',
        text: 'According to this view, the delay is measured in mere fractions of a second, far too brief to be consciously noticed, yet long enough to produce the disorienting sense of prior experience.',
      },
    ],
    answers: ['D', 'B', 'G', 'A', 'C', 'E'],
  },
  {
    id: 'read-p7-04',
    part: 7,
    title: 'How the American bison was saved from extinction',
    textWithGaps: `By the close of the nineteenth century, the American bison, once numbering in the tens of millions across the Great Plains, had been reduced to a few hundred individuals scattered across a handful of isolated herds. {{0}}

What makes the bison's recovery unusual, compared with many other conservation success stories, is quite how narrow the genetic bottleneck the species passed through actually was. {{1}}

A small group of ranchers, naturalists and, in a few notable cases, Indigenous communities who had maintained private herds played a decisive role in preventing total extinction, often working independently of government efforts and sometimes years before official conservation programmes began. {{2}}

Yellowstone National Park, home to one of the only wild herds to survive the slaughter largely undisturbed, became an unlikely cornerstone of these early efforts. {{3}}

By the 1930s, coordinated breeding programmes across several reserves had increased overall numbers into the low thousands, a milestone that would have seemed unimaginable only a few decades earlier. {{4}}

Modern bison populations, now numbering in the hundreds of thousands when both conservation and commercial herds are counted together, owe a considerable and often underappreciated debt to this patchwork of early, largely uncoordinated interventions. {{5}}

Even so, the species remains formally classified as near threatened, a reminder that recovering from the very brink of extinction is not the same thing as being entirely out of danger.`,
    paragraphs: [
      {
        label: 'A',
        text: "Even here, numbers had fallen low enough by the 1900s that park officials eventually resorted to bringing in animals from private herds to bolster genetic diversity among the park's dwindling wild population.",
      },
      {
        label: 'B',
        text: 'This collapse, driven by commercial hunting, deliberate campaigns to undermine Indigenous communities who depended on the species, and the westward expansion of railways, ranks among the most dramatic wildlife declines ever recorded on the continent.',
      },
      {
        label: 'C',
        text: 'Geneticists studying modern bison populations have found clear evidence of this bottleneck, including unusually low genetic diversity compared with other large mammals that never faced such a drastic decline in numbers.',
      },
      {
        label: 'D',
        text: 'Some of these ranchers began their efforts for reasons that had little to do with conservation as it is understood today, motivated instead by curiosity, a desire to preserve a symbol of a vanishing frontier, or simple commercial interest in a rare animal.',
      },
      {
        label: 'E',
        text: "Yet fully wild, free-ranging herds remain comparatively rare, with the majority of today's bison living on managed land under varying degrees of human intervention.",
      },
      {
        label: 'F',
        text: 'Some conservationists argue that reintroducing bison to a far greater share of their historic range should now be treated as a priority, rather than a secondary goal behind maintaining current population numbers.',
      },
      {
        label: 'G',
        text: 'This early success was, however, achieved without any of the genetic-management tools available to conservationists today, relying instead on trial, error and a considerable degree of luck.',
      },
    ],
    answers: ['B', 'C', 'D', 'A', 'G', 'E'],
  },
  {
    id: 'read-p7-05',
    part: 7,
    title: 'The unexpected physics of why cats always land on their feet',
    textWithGaps: `Anyone who has watched a cat fall, whether from a low wall or, in rare unfortunate cases, from a considerable height, will have noticed something remarkable: the animal almost invariably rights itself in mid-air, landing on its feet regardless of its initial orientation. For centuries, this ability was attributed to little more than instinct, a vaguely defined cat-specific talent that defied further explanation, until the invention of a new technology finally allowed the movement to be studied properly. {{0}}

The resulting images did not settle the matter quietly. {{1}}

Once the controversy died down, what these images actually revealed was a sequence of movements far more sophisticated than simple instinct alone could account for. {{2}}

Crucially, cats achieve this feat without ever violating the conservation of angular momentum, a principle of physics that would seem, at first glance, to make the entire manoeuvre impossible. {{3}}

The practical limits of this ability are, however, real and worth taking seriously, whatever popular belief might suggest. {{4}}

Veterinarians continue to see a steady stream of injuries each year from falls that owners had assumed, wrongly, their cats could simply shrug off. {{5}}

Understanding the actual mechanics behind the righting reflex, then, turns out to be rather more than an amusing curiosity: it has genuine, practical implications for how seriously cat owners take the risk of open windows and balconies.`,
    paragraphs: [
      {
        label: 'A',
        text: 'By bending at the waist and rotating the front and back halves of their body independently, along with careful timing of when each half is tucked in or extended, cats manage to twist themselves around without any single part of their body ever rotating relative to the whole.',
      },
      {
        label: 'B',
        text: 'In the 1890s, a French scientist used an early form of high-speed photography to capture a falling cat frame by frame, producing images clear enough to analyse the sequence of movements involved for the first time.',
      },
      {
        label: 'C',
        text: "Below a certain height, cats simply don't have enough time in the air to complete the full righting sequence, and above a certain height, the terminal velocity they reach can make the impact itself dangerous regardless of how well they land.",
      },
      {
        label: 'D',
        text: 'Some observers at the time initially doubted the images were genuine, assuming they had somehow been staged or manipulated, since the sequence of movements shown seemed too fluid and deliberate to be a simple reflex.',
      },
      {
        label: 'E',
        text: "This apparent paradox is resolved by the fact that the cat's body is not behaving as a single rigid object throughout the fall, but as two connected sections rotating in coordinated, opposite directions at different moments.",
      },
      {
        label: 'F',
        text: 'A popular but almost entirely unfounded belief holds that cats reach a stable, safe falling posture at a fixed height and remain equally safe no matter how much further they fall after that point.',
      },
      {
        label: 'G',
        text: 'This has, somewhat counterintuitively, led some veterinary researchers to recommend that owners of cats living in high-rise apartments take window screens rather more seriously than many currently do.',
      },
    ],
    answers: ['B', 'D', 'A', 'E', 'F', 'G'],
  },
  {
    id: 'read-p7-06',
    part: 7,
    title: 'How subtitles changed the way we watch foreign films',
    textWithGaps: `For much of cinema's history, audiences encountering a foreign-language film faced a fairly narrow choice: watch a dubbed version, in which the original actors' voices were replaced entirely, or simply avoid the film altogether if no dubbed version existed. Subtitles, though technically available since the earliest days of sound cinema, remained for decades a niche preference associated mainly with dedicated cinephiles willing to tolerate reading text while trying to follow on-screen action. {{0}}

This began to shift, gradually at first, as streaming platforms expanded rapidly into international markets over the past two decades. {{1}}

What makes this shift particularly notable is how it has coincided with, and arguably helped drive, a broader rise in international viewership for non-English-language television and film. {{2}}

Subtitling itself, meanwhile, has become considerably more sophisticated as an art form than casual viewers often realise. {{3}}

Cultural references pose a particular challenge, since a joke, idiom or piece of wordplay that lands perfectly in the original language may fall completely flat, or become simply confusing, when translated literally. {{4}}

None of this is to suggest dubbing has disappeared entirely; it remains dominant in certain markets and among certain age groups, particularly for children's content. {{5}}

But the sheer scale of subtitled viewing now taking place suggests a genuine and lasting shift in audience habits, one that seems unlikely to reverse even as dubbing technology itself, increasingly assisted by artificial intelligence, continues to improve.`,
    paragraphs: [
      {
        label: 'A',
        text: 'Skilled subtitlers must condense spoken dialogue into a form that can be read comfortably within the brief time a line appears on screen, often losing nuance and rhythm in the process despite their best efforts.',
      },
      {
        label: 'B',
        text: 'Surveys conducted by several major streaming services have found that a majority of younger viewers now actively prefer subtitles even when a dubbed version of the same content is readily available.',
      },
      {
        label: 'C',
        text: 'Rather than attempting a literal translation in such cases, experienced subtitlers often substitute an equivalent joke or reference more likely to resonate with the target audience, accepting a degree of departure from the literal original text.',
      },
      {
        label: 'D',
        text: "Series originally produced in Korean, Spanish and other languages have gone on to become some of these platforms' most-watched titles globally, a level of crossover success that would have been almost unthinkable for foreign-language content a generation earlier.",
      },
      {
        label: 'E',
        text: 'For many viewers outside a small circle of enthusiasts, dubbing simply felt like the default, unremarkable choice, one that required no particular justification or explanation.',
      },
      {
        label: 'F',
        text: 'In several countries with long-established dubbing industries, older viewers in particular continue to express a strong preference for dubbed content, citing simple habit as much as any active dislike of subtitles.',
      },
      {
        label: 'G',
        text: "Investment in subtitling quality has grown accordingly, with several streaming platforms now employing dedicated teams of translators for their highest-profile international releases rather than relying solely on outsourced contractors.",
      },
    ],
    answers: ['E', 'B', 'D', 'G', 'C', 'F'],
  },
  {
    id: 'read-p7-07',
    part: 7,
    title: 'The forgotten history of the bicycle',
    textWithGaps: `Long before the bicycle became the familiar, chain-driven machine recognisable today, a peculiar wooden contraption known as the draisine briefly captured public imagination across parts of Europe in the early nineteenth century. Riders straddled the frame and propelled themselves forward by pushing their feet directly against the ground, since pedals had not yet been invented. {{0}}

The draisine's popularity proved remarkably short-lived. {{1}}

Decades passed before anything resembling meaningful further innovation appeared. {{2}}

Even once pedals were finally attached directly to the front wheel, the resulting machines, known today as penny-farthings on account of their dramatically mismatched wheel sizes, brought serious practical problems of their own. {{3}}

The eventual solution, seemingly obvious in retrospect, was to drive the rear wheel using a chain rather than pedalling the front wheel directly, allowing both wheels to be roughly equal in size. {{4}}

This design, refined further through the addition of pneumatic tyres and more sophisticated gearing systems, proved so effective that it has remained, in its essential form, largely unchanged for well over a century. {{5}}

Few inventions, in fact, can claim to have reached something so close to a stable, near-final form quite so early, and to have kept it for quite so long.`,
    paragraphs: [
      {
        label: 'A',
        text: 'Their considerable height above the ground, combined with a rigid frame that transmitted every bump in the road directly to the rider, made them both difficult to mount and, on uneven surfaces, genuinely dangerous.',
      },
      {
        label: 'B',
        text: 'Riders found themselves banned from an increasing number of city pavements after complaints about collisions with pedestrians, while the sheer physical effort required for anything beyond short journeys limited its appeal considerably.',
      },
      {
        label: 'C',
        text: 'The so-called safety bicycle, as this new design became known at the time, quickly rendered the penny-farthing obsolete, appealing to a far wider range of riders, including, significantly, growing numbers of women.',
      },
      {
        label: 'D',
        text: 'For a brief period, the device was seen as a genuinely useful alternative to horse-drawn transport, one that required no feeding, stabling or ongoing veterinary care.',
      },
      {
        label: 'E',
        text: 'It was not until the 1860s that pedals were added at all, initially attached directly to the front wheel in a design that solved one problem while creating several new ones.',
      },
      {
        label: 'F',
        text: 'Modern bicycles, whatever incremental refinements each decade brings, remain instantly recognisable as descendants of this nineteenth-century design, evidence of just how effectively the underlying engineering problem was solved the first time around.',
      },
      {
        label: 'G',
        text: 'Historians researching the period have found evidence that the machine was as often ridden for pure recreation as for practical transport, undermining the popular assumption that early cycling was purely a functional pursuit.',
      },
    ],
    answers: ['D', 'B', 'E', 'A', 'C', 'F'],
  },
];

// ---------------- PARTE 8: Multiple matching ----------------
export const multipleMatching: MultipleMatchingExercise[] = [
  {
    id: 'read-p8-01',
    part: 8,
    title: 'Reseñas de cuatro cursos de escritura creativa',
    intro:
      'Four people review online creative-writing courses they have recently completed.',
    texts: [
      {
        label: 'A',
        text: `I signed up expecting fairly generic advice and was pleasantly surprised by how much individual feedback the tutor managed to give, despite the course having over thirty participants. The weekly assignments were demanding, sometimes more than I could comfortably fit around a full-time job, and I occasionally fell behind. What I valued most, though, was the peer-review system: reading and commenting on classmates' work taught me almost as much as writing my own pieces did. My one complaint is that the course focused almost exclusively on short fiction, so anyone hoping to work on a novel may want to look elsewhere.`,
      },
      {
        label: 'B',
        text: `The course materials were polished and the recorded lectures genuinely engaging, but I finished the eight weeks feeling I had learned a great deal about the theory of narrative structure and rather little about actually improving my own prose. Feedback on submitted work came from other students rather than the instructor, and the quality varied enormously; some comments were thoughtful, others barely more than a sentence. For the price charged, I had expected more direct input from the tutor, whose credentials had been the main reason I enrolled in the first place.`,
      },
      {
        label: 'C',
        text: `What sets this course apart, in my experience, is its flexibility. There are no fixed deadlines, so I was able to work through the modules at my own pace over several months while travelling for work. The trade-off is that there is no cohort to interact with, no peer feedback and no live sessions, so it can feel rather solitary. The instructor does respond to emailed questions, usually within a couple of days, and her comments on my submitted chapters were detailed and genuinely useful, if occasionally slow to arrive.`,
      },
      {
        label: 'D',
        text: `Having taken two other online writing courses before this one, I can say this was by far the most rigorous, and also the most rewarding. Weekly live workshops meant real-time discussion of everyone's work, which I found far more valuable than written comments alone. The pace was relentless, and missing a single week made it genuinely difficult to catch up, so I would only recommend it to people confident they can commit several hours every week without exception. Anyone looking for a gentler introduction to creative writing should probably start elsewhere.`,
      },
    ],
    questions: [
      { question: 'Which reviewer mentions receiving feedback that was inconsistent in quality?', answerLabel: 'B' },
      { question: 'Which reviewer says the course is unsuitable for those wanting to write a longer work?', answerLabel: 'A' },
      { question: 'Which reviewer highlights the absence of a fixed schedule as a key feature of the course?', answerLabel: 'C' },
      { question: 'Which reviewer warns that falling behind is particularly difficult to recover from on this course?', answerLabel: 'D' },
      { question: 'Which reviewer had expected more direct involvement from the course tutor?', answerLabel: 'B' },
      { question: 'Which reviewer mentions struggling to keep up with the workload alongside other commitments?', answerLabel: 'A' },
      { question: 'Which reviewer says the course can feel isolating compared with more interactive alternatives?', answerLabel: 'C' },
      { question: 'Which reviewer compares this course favourably with other courses they have taken?', answerLabel: 'D' },
    ],
  },
  {
    id: 'read-p8-02',
    part: 8,
    title: 'Reseñas de cuatro apps para meditar',
    intro: 'Four people review meditation apps they have used regularly over the past year.',
    texts: [
      {
        label: 'A',
        text: "I've tried three different meditation apps over the years and this is the first one I've actually stuck with for more than a few weeks. What made the difference for me was the sheer variety of session lengths available; on a hectic day I can squeeze in a genuinely useful three-minute session between meetings rather than feeling I have to commit to twenty minutes or skip it entirely. My only real complaint is that the subscription price increased substantially after my first year, with barely any advance warning, which left a slightly sour taste after such a positive experience.",
      },
      {
        label: 'B',
        text: "The voice-guided sessions on this app are, without question, the best produced I've come across, calm and unhurried without ever tipping into sounding artificial. Where the app falls short, in my experience, is progress tracking: the statistics offered are fairly basic, and I would have appreciated more detailed insight into patterns in my practice over time, something competitor apps handle considerably better. Customer support, when I did need to contact them about a billing issue, was prompt and genuinely helpful, which counted for a lot.",
      },
      {
        label: 'C',
        text: "What sold me on this particular app was the structured, course-based approach, building steadily from complete beginner content through to considerably more advanced material over several months. I appreciated having a clear sense of progression rather than an endless, undifferentiated library of standalone sessions to sift through. The main downside is that the app practically requires an internet connection for most features, which became a real inconvenience during a recent trip somewhere with unreliable signal, and offline access felt like an afterthought rather than a genuine priority for the developers.",
      },
      {
        label: 'D',
        text: "I'll admit I was sceptical going in, having failed to stick with two previous meditation apps, but the built-in reminder system here finally got me practising consistently, gently prompting me at times I had chosen myself without ever feeling naggy about it. Session variety is decent, if not spectacular, and I do wish there were more content aimed specifically at improving sleep, an area where a couple of competitor apps I've tried seem noticeably stronger. Overall, though, consistency has mattered more to my actual wellbeing than any single standout feature.",
      },
    ],
    questions: [
      { question: 'Which reviewer mentions being surprised by an unexpected price increase?', answerLabel: 'A' },
      { question: 'Which reviewer says the app helped them establish a consistent habit after previous failed attempts?', answerLabel: 'D' },
      { question: "Which reviewer criticises the app's approach to tracking progress over time?", answerLabel: 'B' },
      { question: 'Which reviewer mentions a problem with using the app without an internet connection?', answerLabel: 'C' },
      { question: 'Which reviewer praises the quality of the customer support they received?', answerLabel: 'B' },
      { question: "Which reviewer appreciated the app's structured, progressive course format?", answerLabel: 'C' },
      { question: 'Which reviewer suggests the app could offer more content for a specific purpose?', answerLabel: 'D' },
      { question: 'Which reviewer values the flexibility offered by different session lengths?', answerLabel: 'A' },
    ],
  },
  {
    id: 'read-p8-03',
    part: 8,
    title: 'Cuatro autónomos hablan de trabajar por cuenta propia',
    intro: 'Four freelancers describe their experience of working for themselves.',
    texts: [
      {
        label: 'A',
        text: "Five years into freelancing, the single biggest adjustment has been learning to separate my sense of self-worth from any individual piece of client feedback, since criticism that would have been absorbed by a whole team in my old job now lands directly and personally. The financial unpredictability, which worried me enormously before I started, has actually turned out to be far more manageable than I feared, mainly because I built up a substantial buffer of savings before taking the leap. What I hadn't anticipated at all was how much I would miss the casual, unplanned conversations that used to happen constantly in an office.",
      },
      {
        label: 'B',
        text: "I went freelance somewhat reluctantly, after being made redundant rather than through any long-held ambition, and spent the first year assuming I would return to full-time employment as soon as a suitable role came up. Two years on, I'm still here, and the flexibility to structure my own days around family commitments has become something I genuinely value and would be reluctant to give up now. The one aspect I underestimated completely was how much time administrative tasks, invoicing, chasing late payments and basic bookkeeping, would eat into hours I had assumed would be spent on actual paid work.",
      },
      {
        label: 'C',
        text: "The isolation gets discussed constantly in articles about freelancing, and while it is real, in my experience it's also genuinely solvable, mainly by deliberately building routines around co-working spaces and regular calls with other freelancers in similar fields. What proved far harder to solve was the feast-or-famine cycle familiar to most people who work this way: quiet months followed by weeks so overloaded with client work that I've had to turn down projects I would otherwise have been glad to take on. I'm still, even now, searching for a reliable way to smooth that out.",
      },
      {
        label: 'D',
        text: "Unlike many freelancers I know, I've never particularly struggled with motivation or discipline; if anything, the challenge for me has been the opposite: learning to switch off at a reasonable hour rather than continuing to work simply because my laptop happens to be within reach at any moment. The financial side has been considerably tougher than I expected going in, particularly the unpredictability of exactly when invoices will actually get paid, which has made planning even fairly modest personal expenses more stressful than it ever was during my time in salaried employment.",
      },
    ],
    questions: [
      { question: 'Which freelancer mentions missing informal social interaction from their previous job?', answerLabel: 'A' },
      { question: 'Which freelancer says administrative work took up more time than they had expected?', answerLabel: 'B' },
      { question: 'Which freelancer found a practical way to reduce feelings of isolation?', answerLabel: 'C' },
      { question: 'Which freelancer says they struggle to stop working rather than to stay motivated?', answerLabel: 'D' },
      { question: 'Which freelancer did not originally choose freelancing by their own choice?', answerLabel: 'B' },
      { question: 'Which freelancer mentions that financial unpredictability was less difficult than they had expected?', answerLabel: 'A' },
      { question: 'Which freelancer describes ongoing difficulty balancing quiet and extremely busy periods?', answerLabel: 'C' },
      { question: 'Which freelancer says unpredictable payment timing has made personal budgeting more stressful?', answerLabel: 'D' },
    ],
  },
  {
    id: 'read-p8-04',
    part: 8,
    title: 'Cuatro personas describen mudarse a un país sin hablar el idioma',
    intro: 'Four people describe what it was like moving to a new country without speaking the local language.',
    texts: [
      {
        label: 'A',
        text: "Looking back, I probably should have invested more time in language lessons before moving rather than assuming I would simply pick things up once I arrived, a plan that turned out to be considerably more optimistic than realistic. Simple daily tasks, opening a bank account, registering with a doctor, even ordering confidently at a local café, took far longer and involved far more stress than I had anticipated during those first few months. What did help enormously, more than any app or textbook, was a colleague at my new job who patiently translated for me during those early weeks without ever once making me feel embarrassed about needing the help.",
      },
      {
        label: 'B',
        text: "I arrived with barely a handful of useful phrases and, somewhat to my own surprise, found the experience far more liberating than isolating. Not fully understanding every conversation happening around me gave me a strange, unexpected sense of freedom in social situations, since I felt far less self-conscious about making mistakes or being awkward than I typically would in my native language. That said, I fully recognise this comfortable feeling wouldn't have lasted much longer if I hadn't committed to serious lessons fairly quickly, which I did within my first couple of months.",
      },
      {
        label: 'C',
        text: "The hardest part for me wasn't the practical, day-to-day logistics, which I muddled through reasonably well using a translation app on my phone, but the sheer loneliness of not being able to have a real, substantial conversation with anyone for months on end. Small talk with neighbours or shop assistants was manageable enough, but I missed being able to properly explain how I was actually feeling to another person, and that particular gap took a genuine toll on my mental health that I hadn't fully anticipated before moving.",
      },
      {
        label: 'D',
        text: "My employer had promised extensive language support as part of my relocation package, but in practice this amounted to little more than a single introductory session and a subscription to an app I barely had time to open around a demanding new job. I ended up largely teaching myself through a combination of local television, deliberately eavesdropping on conversations on public transport, and simple trial and error in shops and restaurants, an approach that was slow going but which I now believe left me with a genuinely more practical, everyday vocabulary than any formal course would likely have provided.",
      },
    ],
    questions: [
      { question: 'Which person says a colleague provided crucial informal help during their first weeks?', answerLabel: 'A' },
      { question: 'Which person found not fully understanding conversations to be a positive experience, at least initially?', answerLabel: 'B' },
      { question: 'Which person says the emotional isolation was harder than the practical challenges?', answerLabel: 'C' },
      { question: "Which person says the language support promised by their employer was inadequate in practice?", answerLabel: 'D' },
      { question: 'Which person admits they should have prepared more before moving?', answerLabel: 'A' },
      { question: 'Which person developed their language skills mainly through informal, self-directed methods?', answerLabel: 'D' },
      { question: 'Which person acknowledges that their positive early feelings depended on starting lessons quickly?', answerLabel: 'B' },
      { question: 'Which person struggled particularly with expressing their emotions to others?', answerLabel: 'C' },
    ],
  },
  {
    id: 'read-p8-05',
    part: 8,
    title: 'Reseñas de cuatro herramientas de gestión de proyectos',
    intro: 'Four people review project management software they use at work.',
    texts: [
      {
        label: 'A',
        text: "After switching our whole team over eight months ago, I can say the learning curve was steeper than the marketing materials suggested, particularly for colleagues who weren't especially comfortable with software in general. Once everyone found their footing, though, the automation features genuinely transformed how we track recurring tasks, cutting down significantly on the tedious manual updates that used to eat into everyone's Monday mornings. My main lingering complaint is that customer support response times can stretch to several days during busy periods, which feels at odds with the premium price we're paying.",
      },
      {
        label: 'B',
        text: "What sold me initially was the generous free tier, which let our small team trial the core features properly before committing to any paid plan, something several competitor tools didn't offer at all. Six months in, the free tier has genuinely covered everything we need so far, though I suspect we'll eventually outgrow it as the team expands. The mobile app, unfortunately, feels like a distinctly secondary consideration for the developers; several features available on desktop simply aren't accessible on mobile at all, which has occasionally caused real friction when I've needed to check something while away from my laptop.",
      },
      {
        label: 'C',
        text: "The visual, board-based layout was exactly what our creative team needed, replacing a genuinely chaotic system of shared spreadsheets that nobody fully trusted or understood. Integration with the other software we already use was impressively smooth, requiring almost no configuration on our end. Where this tool falls down, in my experience, is with more complex projects involving many interdependent tasks; the reporting features feel noticeably basic compared with more specialised alternatives, and I've had to export data elsewhere to build the detailed progress reports our management actually wants to see.",
      },
      {
        label: 'D',
        text: "I'll admit I was initially sceptical about paying for something we could theoretically replicate with a shared spreadsheet, but a year in, the time saved on status meetings alone has more than justified the cost. Customisation options are genuinely extensive, arguably too extensive at first, since it took our team several confused weeks to settle on a workflow that actually worked for us rather than experimenting endlessly with every available option. Once we did, though, adoption across the wider team was smoother than I expected, helped considerably by genuinely responsive customer support whenever we got stuck.",
      },
    ],
    questions: [
      { question: 'Which reviewer mentions that the tool took time to learn, especially for less tech-savvy colleagues?', answerLabel: 'A' },
      { question: 'Which reviewer praises the free tier as a way to trial the software before paying?', answerLabel: 'B' },
      { question: "Which reviewer says the tool's reporting features are too basic for complex projects?", answerLabel: 'C' },
      { question: 'Which reviewer mentions that customisation options were initially overwhelming?', answerLabel: 'D' },
      { question: 'Which reviewer criticises the quality of the mobile app compared with the desktop version?', answerLabel: 'B' },
      { question: 'Which reviewer praises smooth integration with other software already in use?', answerLabel: 'C' },
      { question: 'Which reviewer says customer support was responsive whenever help was needed?', answerLabel: 'D' },
      { question: 'Which reviewer is critical of slow customer support response times?', answerLabel: 'A' },
    ],
  },
  {
    id: 'read-p8-06',
    part: 8,
    title: 'Cuatro opiniones sobre trabajar los fines de semana',
    intro: 'Four people share their views on working weekends as part of their job.',
    texts: [
      {
        label: 'A',
        text: "I've worked most weekends for the better part of five years now, and honestly, the extra pay has made a genuine difference to what my family can afford, from the odd holiday to simply not worrying quite so much about unexpected bills. What I've had to accept is that my social life outside work looks very different from most of my friends', since I'm rarely free on the days everyone else considers standard time off, and maintaining friendships has required rather more deliberate effort as a result.",
      },
      {
        label: 'B',
        text: "My employer began requiring occasional weekend shifts about a year ago, framed as entirely optional but, in practice, colleagues who consistently declined seemed to be quietly overlooked when promotions came up. That unspoken pressure bothers me considerably more than the shifts themselves, which are honestly fine in isolation; it's the gap between what's officially offered and what's actually expected that I find genuinely difficult to accept.",
      },
      {
        label: 'C',
        text: "Working weekends suits my particular circumstances remarkably well, since childcare is easier to arrange on weekdays when my partner is around, and the quieter office atmosphere on Saturdays, without constant meetings and interruptions, means I'm often considerably more productive than during a typical weekday. I recognise this arrangement wouldn't suit everyone, but for our specific situation it has worked out better than I expected going in.",
      },
      {
        label: 'D',
        text: "After years of a fairly standard Monday-to-Friday role, I moved to a position requiring regular weekend work mainly for the pay increase, and I deeply regret it now. The financial benefit, real as it genuinely is, hasn't come close to compensating for how disconnected I've become from friends and family who all keep to a conventional schedule; I'm seriously considering taking a pay cut just to get my weekends back at this point.",
      },
    ],
    questions: [
      { question: 'Which person says weekend work has made maintaining friendships more difficult?', answerLabel: 'A' },
      { question: 'Which person feels pressured into working weekends despite it officially being optional?', answerLabel: 'B' },
      { question: 'Which person finds they are more productive when working at the weekend?', answerLabel: 'C' },
      { question: 'Which person is considering giving up extra income to stop working weekends?', answerLabel: 'D' },
      { question: "Which person says the extra income has genuinely improved their family's finances?", answerLabel: 'A' },
      { question: 'Which person says weekend work fits well around their childcare arrangements?', answerLabel: 'C' },
      { question: 'Which person is more troubled by unspoken expectations than by the shifts themselves?', answerLabel: 'B' },
      { question: 'Which person regrets the decision to take on regular weekend work?', answerLabel: 'D' },
    ],
  },
  {
    id: 'read-p8-07',
    part: 8,
    title: 'Cuatro relatos sobre aprender un instrumento de adulto',
    intro: 'Four adults describe learning to play a musical instrument later in life.',
    texts: [
      {
        label: 'A',
        text: "Starting the violin at forty-three, I had fully expected to feel embarrassed sitting in classes surrounded by children a third my age, but the reality turned out to be far less awkward than I'd anticipated; most teachers seem well used to a mixed-age classroom, and the other adult beginners I've met have generally been wonderfully encouraging rather than competitive. What I hadn't anticipated at all was quite how much patience the instrument itself demands; progress has been slower than I expected, and I've had to actively work on being kinder to myself about that.",
      },
      {
        label: 'B',
        text: "I picked up the guitar again after a twenty-year gap, having played reasonably well as a teenager, and the experience has been strange in ways I didn't expect: my fingers remembered chord shapes my conscious brain had completely forgotten, yet I've had to relearn music theory almost entirely from scratch, since what little I once knew has faded almost completely. It's an odd, uneven kind of relearning that doesn't map neatly onto either 'beginner' or 'returning player'.",
      },
      {
        label: 'C',
        text: "Learning piano as an adult with a full-time job has mainly been a lesson in the limits of my own willpower around practice, if I'm honest. I know intellectually that consistent daily practice would help enormously, yet somehow a demanding week at work still manages to get in the way more often than I'd like to admit. My teacher has been remarkably patient about this, adjusting her expectations sensibly rather than pushing me toward a level of commitment that simply isn't realistic given my current circumstances.",
      },
      {
        label: 'D',
        text: "Taking up the drums in my fifties has been, without any real exaggeration, one of the most purely enjoyable things I've done in years, and I wish I'd started decades earlier rather than assuming, as I did for far too long, that it was somehow too late to begin. The physical coordination required was genuinely harder to develop than I expected going in, but the sheer, uncomplicated fun of it has more than made up for the initial frustration and the inevitable early mistakes.",
      },
    ],
    questions: [
      { question: 'Which person says the instrument requires more patience than they initially expected?', answerLabel: 'A' },
      { question: 'Which person is relearning something they used to know rather than starting completely from zero?', answerLabel: 'B' },
      { question: 'Which person struggles to find enough time to practise regularly?', answerLabel: 'C' },
      { question: 'Which person wishes they had started learning much earlier in life?', answerLabel: 'D' },
      { question: 'Which person found other adult learners to be supportive rather than competitive?', answerLabel: 'A' },
      { question: 'Which person describes an uneven mix of remembered and forgotten skills?', answerLabel: 'B' },
      { question: "Which person's teacher has adjusted their expectations to be more realistic?", answerLabel: 'C' },
      { question: 'Which person found the physical side of learning harder than expected but ultimately worth it?', answerLabel: 'D' },
    ],
  },
];
