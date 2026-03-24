/**
 * One-off generator for content/scholars/*.mdx.
 * Run: node scripts/generate-scholar-mdx.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dir = path.join(root, "content", "scholars");

function fm(o) {
  const lines = [
    "---",
    `title: "${o.title.replace(/"/g, '\\"')}"`,
    `slug: ${o.slug}`,
    `subtitle: "${o.subtitle.replace(/"/g, '\\"')}"`,
    `description: "${o.description.replace(/"/g, '\\"')}"`,
  ];
  if (o.dates) lines.push(`dates: "${o.dates}"`);
  if (o.madhhab) lines.push(`madhhab: "${o.madhhab}"`);
  lines.push("primarySources:");
  for (const p of o.primarySources) {
    lines.push(`  - "${p.replace(/"/g, '\\"')}"`);
  }
  lines.push('author: "Sunnah Clarity"');
  lines.push('reviewedBy: "Editorial Team"');
  lines.push('reviewDate: "2026-03-24"');
  lines.push("status: published");
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

const scholars = [
  {
    slug: "imam-abu-hanifa",
    title: "Imam Abu Hanifa",
    subtitle: "Founder of the Hanafi school of jurisprudence",
    description:
      "Nu'man ibn Thabit Abu Hanifa (d. 150 AH), known as al-Imam al-A'zam — the Hanafi madhhab and systematic legal reasoning.",
    dates: "d. 150 AH / 767 CE",
    madhhab: "Hanafi",
    primarySources: ["Scholarly consensus; biographical tradition"],
    body: `Nu'man ibn Thabit, known as **Imam Abu Hanifa**, was born in Kufa and became the eponym of the Hanafi school — today the largest school of Sunni law. He emphasized careful reasoning (*ra'y*) within boundaries set by revelation and the practice of the early Muslim community.

His students systematized his positions into the Hanafi corpus that shaped Ottoman, Mughal, and much of South and Central Asian Islam. Sunni tradition honors him as *al-Imam al-A'zam* (the Greatest Imam) for the breadth and influence of his methodology.

<SourceCard
  title="Following a madhhab"
  url="https://seekersguidance.org/answers/general-answers-feeds/should-i-stick-to-a-madhhab-or-become-a-ghayr-muqallid/"
  source="SeekersGuidance"
  description="Why Sunni scholarship has historically worked through the four schools."
/>`,
  },
  {
    slug: "imam-malik-ibn-anas",
    title: "Imam Malik ibn Anas",
    subtitle: "Scholar of Medina and author of the Muwatta",
    description:
      "Malik ibn Anas (d. 179 AH): the Muwatta, *amal ahl al-Madina*, and the Maliki school.",
    dates: "d. 179 AH / 795 CE",
    madhhab: "Maliki",
    primarySources: ["al-Muwatta"],
    body: `**Imam Malik ibn Anas** lived in Medina and compiled *al-Muwatta*, one of the earliest and most respected works combining prophetic narrations with the living practice of the people of Medina. The Maliki school gives weight to the consensus and custom of the city of the Prophet ﷺ (*amal ahl al-Madina*).

Malik's fiqh spread across North and West Africa, parts of the Gulf, and beyond. Imam al-Shafi'i studied with him and praised him in the highest terms.

<SourceCard
  title="Is Sufism allowed in Islam?"
  url="https://seekersguidance.org/answers/general-counsel/is-sufism-allowed-in-islam/"
  source="SeekersGuidance"
  description="Includes discussion of Imam Malik on combining fiqh and spiritual discipline."
/>`,
  },
  {
    slug: "imam-al-shafii",
    title: "Imam Muhammad ibn Idris al-Shafi'i",
    subtitle: "Founder of usul al-fiqh and the Shafi'i school",
    description:
      "Al-Shafi'i (d. 204 AH): al-Risala, legal theory, and the Shafi'i madhhab.",
    dates: "d. 204 AH / 820 CE",
    madhhab: "Shafi'i",
    primarySources: ["al-Risala", "al-Umm"],
    body: `**Imam al-Shafi'i** codified the principles of Islamic jurisprudence (*usul al-fiqh*) in *al-Risala*, showing how rulings are derived from the Quran, Sunnah, consensus, and analogical reasoning. He studied under Imam Malik and with circles linked to Abu Hanifa's Kufan tradition, synthesizing major early methodologies.

The Shafi'i school became dominant in Egypt, East Africa, Yemen, Southeast Asia, and parts of the Levant. His work defines how Sunni law reasons at the level of theory, not only rulings.

<SourceCard
  title="Choosing and following a madhhab"
  url="https://seekersguidance.org/answers/general-answers-feeds/can-you-throw-some-light-on-the-importance-of-choosing-and-following-a-particular-madhhab/"
  source="SeekersGuidance"
  description="Context for why the four schools structure Sunni practice."
/>`,
  },
  {
    slug: "imam-ahmad-ibn-hanbal",
    title: "Imam Ahmad ibn Hanbal",
    subtitle: "Hadith master and eponym of the Hanbali school",
    description:
      "Ahmad ibn Hanbal (d. 241 AH): the Musnad, the mihna, and Hanbali jurisprudence.",
    dates: "d. 241 AH / 855 CE",
    madhhab: "Hanbali",
    primarySources: ["Musnad Ahmad"],
    body: `**Imam Ahmad ibn Hanbal** compiled the *Musnad*, a vast hadith collection, and became a symbol of steadfastness during the Inquisition (*mihna*) over the Quran's createdness. The Hanbali school stresses transmitted texts and the way of the Salaf in theology ('aqida) and fiqh.

He studied under Imam al-Shafi'i and transmitted his respect across generations; traditional sources report that he prayed for al-Shafi'i for decades.

<SourceCard
  title="The role of scholars"
  url="https://seekersguidance.org/articles/knowledge/the-role-of-scholars-in-islam/"
  source="SeekersGuidance"
  description="Why qualified transmission of knowledge matters."
/>`,
  },
  {
    slug: "imam-al-bukhari",
    title: "Imam al-Bukhari",
    subtitle: "Compiler of Sahih al-Bukhari",
    description:
      "Muhammad ibn Isma'il al-Bukhari (d. 256 AH): the most rigorous standard for authentic hadith.",
    dates: "d. 256 AH / 870 CE",
    madhhab: "Hadith master (Shafi'i affiliation reported)",
    primarySources: ["Sahih al-Bukhari"],
    body: `**Imam al-Bukhari** applied extraordinary criteria to narrator criticism and text comparison, producing *Sahih al-Bukhari*, held by Sunni scholarship as the most authoritative book after the Quran. His work anchors how hadith authenticity is understood.

Generations of jurists and hadith specialists built on his collection; *Fath al-Bari* by Ibn Hajar is the classic supercommentary on it.

<SourceCard
  title="Hadith and the scholarly tradition"
  url="https://seekersguidance.org/articles/"
  source="SeekersGuidance"
  description="Browse SeekersGuidance articles on hadith and knowledge."
/>`,
  },
  {
    slug: "imam-muslim",
    title: "Imam Muslim",
    subtitle: "Compiler of Sahih Muslim",
    description:
      "Muslim ibn al-Hajjaj al-Naysaburi (d. 261 AH): Sahih Muslim and the Sahihayn.",
    dates: "d. 261 AH / 875 CE",
    madhhab: "Hadith master",
    primarySources: ["Sahih Muslim"],
    body: `**Imam Muslim** compiled *Sahih Muslim*, the second of the *Sahihayn* (the two most authentic collections). Together with al-Bukhari, his work forms the backbone of Sunni hadith-based law and theology.

Imam al-Nawawi's commentary on *Sahih Muslim* is among the most widely studied works in madrasas worldwide.

<SourceCard
  title="What is bid'a?"
  url="https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia-2/"
  source="SeekersGuidance"
  description="Classical use of sound hadith corpora in legal reasoning."
/>`,
  },
  {
    slug: "imam-al-ghazali",
    title: "Imam al-Ghazali",
    subtitle: "Hujjat al-Islam; author of Ihya Ulum al-Din",
    description:
      "Abu Hamid al-Ghazali (d. 505 AH): theology, fiqh, ethics, and spirituality in one framework.",
    dates: "d. 505 AH / 1111 CE",
    madhhab: "Shafi'i",
    primarySources: ["Ihya Ulum al-Din", "Tahafut al-Falasifa"],
    body: `**Imam al-Ghazali**, titled *Hujjat al-Islam* (Proof of Islam), wrote *Ihya Ulum al-Din* (Revival of the Religious Sciences), integrating worship, ethics, and purification of the heart with Shafi'i jurisprudence. His work shaped Sunni spirituality and education for centuries.

Later masters — including Imam al-Nawawi — engaged deeply with his legacy. He represents orthodox Sunni *tasawwuf* grounded in law and theology.

<SourceCard
  title="What is ihsan?"
  url="https://seekersguidance.org/answers/general-counsel/what-is-ihsan/"
  source="SeekersGuidance"
  description="Excellence in worship and its place in the tradition."
/>`,
  },
  {
    slug: "imam-al-nawawi",
    title: "Imam Yahya ibn Sharaf al-Nawawi",
    subtitle: "Commentator on Sahih Muslim; author of al-Adhkar",
    description:
      "Al-Nawawi (d. 676 AH): Sharh Sahih Muslim, al-Adhkar, Riyad al-Salihin, al-Minhaj.",
    dates: "d. 676 AH / 1278 CE",
    madhhab: "Shafi'i",
    primarySources: ["Sharh Sahih Muslim", "al-Adhkar", "Riyad al-Salihin", "al-Minhaj"],
    body: `**Imam al-Nawawi** died young yet authored works that define Sunni curriculum to this day: his commentary on *Sahih Muslim*, *al-Adhkar* (authorized remembrance), *Riyad al-Salihin*, and *al-Minhaj* in Shafi'i fiqh.

He explains how general hadith texts are qualified by legal theory — for example, the classification of *bid'a* into five moral categories in his *Sharh Muslim*. His books are standard in mosques and schools globally.

<SourceCard
  title="The concept of bid'a"
  url="https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia-2/"
  source="SeekersGuidance"
  description="Lecture and resources aligned with classical definitions."
/>`,
  },
  {
    slug: "ibn-hajar-al-asqalani",
    title: "Ibn Hajar al-Asqalani",
    subtitle: "Author of Fath al-Bari on Sahih al-Bukhari",
    description:
      "Ahmad ibn Hajar al-Asqalani (d. 852 AH): hadith criticism, history, and Fath al-Bari.",
    dates: "d. 852 AH / 1449 CE",
    madhhab: "Shafi'i",
    primarySources: ["Fath al-Bari", "Nuzhat al-Nazar"],
    body: `**Ibn Hajar al-Asqalani** is widely regarded as the greatest commentator on *Sahih al-Bukhari*. *Fath al-Bari* combines linguistic precision, narrator analysis, and jurisprudence. He also wrote influential works in hadith terminology and biography.

Traditional scholarship says that after *Fath al-Bari*, comprehensive commentary on Sahih al-Bukhari reached a summit few could rival. He represents mainstream Sunni hadith science at its height.

<SourceCard
  title="Is tawassul permissible?"
  url="https://seekersguidance.org/answers/general-counsel/is-tawassul-permissible/"
  source="SeekersGuidance"
  description="Classical scholars cited in SeekersGuidance answers include Ibn Hajar."
/>`,
  },
  {
    slug: "imam-al-suyuti",
    title: "Imam Jalal al-Din al-Suyuti",
    subtitle: "Encyclopedic scholar; defender of the mawlid",
    description:
      "Al-Suyuti (d. 911 AH): Husn al-Maqsid, tafsir, hadith, and fiqh compendia.",
    dates: "d. 911 AH / 1505 CE",
    madhhab: "Shafi'i",
    primarySources: ["Husn al-Maqsid fi Amal al-Mawlid", "al-Itqan fi Ulum al-Quran"],
    body: `**Imam al-Suyuti** was among the most prolific scholars in Islamic history, writing on Quran, hadith, fiqh, language, and history. His treatise *Husn al-Maqsid fi Amal al-Mawlid* argues for the permissibility of honoring the Prophet's birth when done with lawful means.

His works remain reference points across Sunni disciplines.

<SourceCard
  title="Is celebrating the Prophet's birthday an innovation?"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="SeekersGuidance answer discussing classical scholarship on the mawlid."
/>`,
  },
  {
    slug: "ibn-kathir",
    title: "Ibn Kathir",
    subtitle: "Historian and mufassir; student of Ibn Taymiyya",
    description:
      "Isma'il ibn Kathir (d. 774 AH): al-Bidaya wa'l-Nihaya and Tafsir Ibn Kathir.",
    dates: "d. 774 AH / 1373 CE",
    madhhab: "Shafi'i (Hanbali influence)",
    primarySources: ["al-Bidaya wa'l-Nihaya", "Tafsir al-Quran al-Azim"],
    body: `**Ibn Kathir** wrote the universal history *al-Bidaya wa'l-Nihaya* and a celebrated Quranic commentary. He studied with Ibn Taymiyya and Ibn al-Qayyim yet his positions on many issues align with broader Sunni jurisprudence and theology.

His eyewitness descriptions of mawlid gatherings in Damascus are often cited in discussions of the practice's historical spread.

<SourceCard
  title="Mawlid and scholarly views"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="Context for classical and contemporary rulings."
/>`,
  },
  {
    slug: "ibn-taymiyya",
    title: "Ibn Taymiyya",
    subtitle: "Hanbali theologian and jurist",
    description:
      "Taqi al-Din Ahmad ibn Taymiyya (d. 728 AH): influential Hanbali scholar with nuanced positions on many issues.",
    dates: "d. 728 AH / 1328 CE",
    madhhab: "Hanbali",
    primarySources: ["Majmu al-Fatawa", "Iqtida al-Sirat al-Mustaqim"],
    body: `**Ibn Taymiyya** was a major Hanbali scholar whose fatwas and treatises influenced later movements. On some issues — including aspects of the mawlid — later scholars note qualifications or concessions in his writings that opponents sometimes overlook.

Understanding him requires reading in context; mainstream Sunni institutions continue to cite him selectively alongside the four schools.

<SourceCard
  title="Is celebrating the Prophet's birthday an innovation?"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="Discusses Ibn Taymiyya alongside other classical voices."
/>`,
  },
  {
    slug: "al-izz-ibn-abd-al-salam",
    title: "Al-Izz ibn Abd al-Salam",
    subtitle: "Sultan of scholars; fivefold classification of bid'a",
    description:
      "Al-Izz ibn Abd al-Salam (d. 660 AH): al-Qawaid al-Kubra and usul.",
    dates: "d. 660 AH / 1262 CE",
    madhhab: "Shafi'i",
    primarySources: ["al-Qawa'id al-Kubra", "Qawa'id al-Ahkam fi Masalih al-Anam"],
    body: `**Al-Izz ibn Abd al-Salam**, called *Sultan al-Ulama*, systematized the five-category analysis of *bid'a* (obligatory, recommended, neutral, disliked, forbidden) that Imam al-Nawawi and others applied in their commentaries.

This framework shows that *bid'a* in Sacred Law is not a single blanket ruling but depends on how an act relates to revelation.

<SourceCard
  title="The concept of bid'a"
  url="https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia-2/"
  source="SeekersGuidance"
  description="Primary lecture and articles on innovation in Sharia."
/>`,
  },
  {
    slug: "imam-al-qushayri",
    title: "Imam al-Qushayri",
    subtitle: "Author of al-Risala al-Qushayriyya",
    description:
      "Abu'l-Nasr al-Qushayri (d. 465 AH): Shafi'i Ash'ari Sufi epistle on orthodox tasawwuf.",
    dates: "d. 465 AH / 1072 CE",
    madhhab: "Shafi'i",
    primarySources: ["al-Risala al-Qushayriyya"],
    body: `**Imam al-Qushayri** wrote *al-Risala*, a foundational text presenting *tasawwuf* as discipline of the heart within Sunni theology and law. It maps stages of the soul and corrects excess while affirming the Sunna.

The work is a standard reference for understanding why classical fiqh and *tasawwuf* were not opposed but intertwined.

<SourceCard
  title="Is Sufism allowed in Islam?"
  url="https://seekersguidance.org/answers/general-counsel/is-sufism-allowed-in-islam/"
  source="SeekersGuidance"
  description="Traditional definition of tasawwuf in Sunni Islam."
/>`,
  },
  {
    slug: "ibn-al-salah",
    title: "Ibn al-Salah",
    subtitle: "Author of the Muqaddima in hadith sciences",
    description:
      "Uthman ibn al-Salah (d. 643 AH): Muqaddima fi Ulum al-Hadith.",
    dates: "d. 643 AH / 1245 CE",
    madhhab: "Shafi'i",
    primarySources: ["Muqaddima fi Ulum al-Hadith"],
    body: `**Ibn al-Salah** wrote the classic introduction to hadith sciences (*Muqaddima*), organizing how narrators are graded, how chains work, and how hadith relates to fiqh. Imam al-Nawawi summarized it in *al-Taqrib*.

His work is a pillar of how *isnad* and *diraya* are taught in traditional curricula.

<SourceCard
  title="SeekersGuidance courses on hadith"
  url="https://seekersguidance.org/courses/"
  source="SeekersGuidance"
  description="Structured study of Islamic sciences."
/>`,
  },
  {
    slug: "al-khatib-al-baghdadi",
    title: "Al-Khatib al-Baghdadi",
    subtitle: "Hadith scholar; author of al-Kifaya",
    description:
      "Ahmad ibn Ali al-Khatib al-Baghdadi (d. 463 AH): al-Kifaya fi Ilm al-Riwaya.",
    dates: "d. 463 AH / 1071 CE",
    madhhab: "Shafi'i",
    primarySources: ["al-Kifaya fi Ilm al-Riwaya", "Tarikh Baghdad"],
    body: `**Al-Khatib al-Baghdadi** wrote *al-Kifaya fi Ilm al-Riwaya*, a comprehensive manual on the ethics and method of transmitting knowledge. His *Tarikh Baghdad* preserves biographies of narrators.

He represents the self-conscious discipline of *isnad* as moral and technical trust.

<SourceCard
  title="The role of scholars"
  url="https://seekersguidance.org/articles/knowledge/the-role-of-scholars-in-islam/"
  source="SeekersGuidance"
  description="Transmission of knowledge in Islam."
/>`,
  },
  {
    slug: "abdullah-ibn-al-mubarak",
    title: "Abdullah ibn al-Mubarak",
    subtitle: "Early master of hadith and jihad literature",
    description:
      "Ibn al-Mubarak (d. 181 AH): hadith preservation and scholar of the tabi'in generation.",
    dates: "d. 181 AH / 797 CE",
    madhhab: "Precursor to Sunni schools",
    primarySources: ["Musnad and athar collections attributed to him"],
    body: `**Abdullah ibn al-Mubarak** was a central figure among the generation after the Companions, combining hadith travel, fiqh, and asceticism. His statement that *isnad* is part of religion — and that without it people would say whatever they wish — captures why chains matter.

He illustrates how early Muslims already treated attribution as sacred.

<SourceCard
  title="Hadith and isnad"
  url="https://seekersguidance.org/answers/"
  source="SeekersGuidance"
  description="Search SeekersGuidance for hadith sciences."
/>`,
  },
  {
    slug: "muhammad-ibn-sirin",
    title: "Imam Muhammad ibn Sirin",
    subtitle: "Early scholar; famous on dream interpretation and hadith",
    description:
      "Ibn Sirin (d. 110 AH): tabi'i scholar quoted in isnad and adab literature.",
    dates: "d. 110 AH / 729 CE",
    madhhab: "Tabi'i",
    primarySources: ["Athar and narrations in classical biographical works"],
    body: `**Muhammad ibn Sirin** was a renowned successor-generation scholar, often cited for discipline in narration and piety. Classical sources preserve his emphasis on scrutinizing who carries hadith.

He belongs to the early stratum that built the culture of *isnad*.

<SourceCard
  title="Knowledge and transmission"
  url="https://seekersguidance.org/articles/knowledge/"
  source="SeekersGuidance"
  description="Articles on Islamic knowledge."
/>`,
  },
  {
    slug: "imam-taqi-al-din-al-subki",
    title: "Imam Taqi al-Din al-Subki",
    subtitle: "Shafi'i chief judge; scholar of theology and fiqh",
    description:
      "Taqi al-Din al-Subki (d. 756 AH): often cited simply as Imam al-Subki on tawassul and Shafi'i doctrine.",
    dates: "d. 756 AH / 1355 CE",
    madhhab: "Shafi'i",
    primarySources: ["Fatawa al-Subki", "Shifa al-Siqam"],
    body: `**Taqi al-Din al-Subki** served as chief judge in Egypt and wrote influential fatwas and treatises. In discussions of *tawassul*, classical Sunni answers often group him with Ibn Hajar and al-Nawawi as affirming permissible forms of seeking nearness to Allah through the Prophet ﷺ within orthodox bounds.

His son Taj al-Din al-Subki continued the family's scholarly legacy.

<SourceCard
  title="Is tawassul permissible?"
  url="https://seekersguidance.org/answers/general-counsel/is-tawassul-permissible/"
  source="SeekersGuidance"
  description="Classical scholarly positions on tawassul."
/>`,
  },
  {
    slug: "shaykh-nuh-ha-mim-keller",
    title: "Shaykh Nuh Ha Mim Keller",
    subtitle: "Contemporary Shafi'i scholar and translator",
    description:
      "Shaykh Nuh Keller: English presentations of traditional Islam; SeekersGuidance lectures on bid'a and related topics.",
    madhhab: "Shafi'i",
    primarySources: ["Reliance of the Traveller (translation)", "SeekersGuidance lectures"],
    body: `**Shaykh Nuh Ha Mim Keller** is a contemporary Shafi'i scholar known for translating *Umdat al-Salik* (*Reliance of the Traveller*) and teaching classical jurisprudence and spirituality to English speakers.

His SeekersGuidance lecture on *bid'a* is a primary English-language gateway to the five-category framework used in this site's bid'a article.

<SourceCard
  title="The concept of bid'a in Islamic Sharia"
  url="https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia-2/"
  source="SeekersGuidance"
  description="Includes Shaykh Nuh Keller's lecture on innovation."
/>`,
  },
  {
    slug: "ibn-abidin",
    title: "Ibn Abidin",
    subtitle: "Damascene Hanafi jurist; Hashiyat Ibn Abidin",
    description:
      "Muhammad Amin ibn Abidin (d. 1252 AH): authoritative Hanafi commentary.",
    dates: "d. 1252 AH / 1836 CE",
    madhhab: "Hanafi",
    primarySources: ["Hashiyat Ibn Abidin (Radd al-Muhtar)"],
    body: `**Ibn Abidin** authored *Hashiyat Ibn Abidin* (supercommentary on *Durr al-Mukhtar*), a central reference for late Hanafi law. His name stands for detailed application of Hanafi principles in the Ottoman-era Levant.

He is often cited alongside other late giants when discussing how all four schools integrated spirituality and law.

<SourceCard
  title="Following a madhhab"
  url="https://seekersguidance.org/answers/general-answers-feeds/should-i-stick-to-a-madhhab-or-become-a-ghayr-muqallid/"
  source="SeekersGuidance"
  description="Practical guidance on madhhab adherence."
/>`,
  },
  {
    slug: "zakariyya-al-ansari",
    title: "Zakariyya al-Ansari",
    subtitle: "Egyptian Shafi'i jurist and Sufi shaykh",
    description:
      "Zakariyya al-Ansari (d. 926 AH): chief judge; noted in lists of scholars who combined fiqh and tasawwuf.",
    dates: "d. 926 AH / 1520 CE",
    madhhab: "Shafi'i",
    primarySources: ["Asna al-Matalib", "Manhaj al-Tullab"],
    body: `**Zakariyya al-Ansari** was chief judge in Egypt and authored widely read Shafi'i manuals. Traditional biographies list him among jurists who were also masters of spiritual path (*tasawwuf*).

He exemplifies the mainstream Sunni pattern that law and purification of the heart went together.

<SourceCard
  title="Is Sufism allowed in Islam?"
  url="https://seekersguidance.org/answers/general-counsel/is-sufism-allowed-in-islam/"
  source="SeekersGuidance"
  description="Tasawwuf within Sunni orthodoxy."
/>`,
  },
  {
    slug: "ibn-ashir",
    title: "Ibn Ashir",
    subtitle: "Maliki scholar; al-Murshid al-Mu'in",
    description:
      "Abd al-Wahhab ibn Ashir (d. 1040 AH): al-Murshid al-Mu'in — fiqh, tawhid, and sufism in one primer.",
    dates: "d. 1040 AH / 1631 CE",
    madhhab: "Maliki",
    primarySources: ["al-Murshid al-Mu'in"],
    body: `**Ibn Ashir** wrote *al-Murshid al-Mu'in*, a concise North African primer that weaves Maliki fiqh, Ash'ari theology, and spiritual adab. It is memorized and taught from Morocco to West Africa.

The text shows how ordinary curricula presented *tasawwuf* as part of basic education, not an optional add-on.

<SourceCard
  title="Is Sufism allowed in Islam?"
  url="https://seekersguidance.org/answers/general-counsel/is-sufism-allowed-in-islam/"
  source="SeekersGuidance"
  description="Traditional Sunni spirituality."
/>`,
  },
  {
    slug: "ibn-khaldun",
    title: "Ibn Khaldun",
    subtitle: "Historian and sociologist of civilization",
    description:
      "Abd al-Rahman ibn Khaldun (d. 808 AH): al-Muqaddima — 'ilm al-umran.",
    dates: "d. 808 AH / 1406 CE",
    madhhab: "Maliki",
    primarySources: ["al-Muqaddima", "Kitab al-Ibar"],
    body: `**Ibn Khaldun** wrote *al-Muqaddima*, a theory of history, society, and knowledge that discusses how *asabiyya*, states, and scholarly institutions rise and fall. Maliki-trained, he served in North African and Mamluk courts.

His observations on madhhab continuity and scholarly class are still read in discussions of why Muslims followed schools of law.

<SourceCard
  title="Choosing a madhhab"
  url="https://seekersguidance.org/answers/general-answers-feeds/can-you-throw-some-light-on-the-importance-of-choosing-and-following-a-particular-madhhab/"
  source="SeekersGuidance"
  description="Why the four schools matter historically."
/>`,
  },
  {
    slug: "ibn-abdil-barr",
    title: "Ibn Abd al-Barr",
    subtitle: "Andalusian Maliki hadith scholar",
    description:
      "Yusuf ibn Abd al-Barr (d. 463 AH): Jami Bayan al-Ilm wa Fadlih — on knowledge and following scholars.",
    dates: "d. 463 AH / 1071 CE",
    madhhab: "Maliki",
    primarySources: ["Jami Bayan al-Ilm wa Fadlih", "al-Istidhkar"],
    body: `**Ibn Abd al-Barr** was a major Andalusian scholar of hadith and Maliki law. *Jami Bayan al-Ilm* gathers evidence on the virtue of knowledge and the obligation to refer to experts — themes central to *taqlid* discussions.

Imam al-Nawawi cites lines of argument that intersect with this scholarly culture.

<SourceCard
  title="What is taqlid and is it necessary?"
  url="https://seekersguidance.org/answers/general-counsel/what-is-taqlid-and-is-it-necessary/"
  source="SeekersGuidance"
  description="Following qualified scholarship."
/>`,
  },
  {
    slug: "ibn-qayyim-al-jawziyya",
    title: "Ibn al-Qayyim al-Jawziyya",
    subtitle: "Hanbali scholar; student of Ibn Taymiyya",
    description:
      "Muhammad ibn Abi Bakr ibn Qayyim al-Jawziyya (d. 751 AH): spirituality, fiqh, and tafsir.",
    dates: "d. 751 AH / 1350 CE",
    madhhab: "Hanbali",
    primarySources: ["Madarij al-Salikin", "Zad al-Maad"],
    body: `**Ibn al-Qayyim** wrote influential works on the soul's journey (*Madarij al-Salikin*) and prophetic medicine and worship (*Zad al-Maad*). A leading student of Ibn Taymiyya, he is widely read in Hanbali and Salafi circles yet also discussed in broader Sunni discourse on *dhikr* and devotion.

His *al-Wabil al-Sayyib* on softening the heart connects to themes of remembrance and reflection.

<SourceCard
  title="Dhikr and remembrance"
  url="https://seekersguidance.org/answers/"
  source="SeekersGuidance"
  description="Search SeekersGuidance for dhikr-related answers."
/>`,
  },
  {
    slug: "imam-al-jazuli",
    title: "Imam Muhammad ibn Sulayman al-Jazuli",
    subtitle: "Author of Dala'il al-Khayrat",
    description:
      "Al-Jazuli (d. 870 AH): Dala'il al-Khayrat — litanies of blessings on the Prophet ﷺ.",
    dates: "d. 870 AH / 1465 CE",
    madhhab: "Maliki",
    primarySources: ["Dala'il al-Khayrat"],
    body: `**Imam al-Jazuli** compiled *Dala'il al-Khayrat*, one of the most beloved collections of salawat on the Prophet ﷺ, recited and copied across the Muslim world. It reflects the mainstream Sunni emphasis on abundant blessings upon the Prophet.

Such formulas are discussed in classical works like al-Nawawi's *al-Adhkar* and modern SeekersGuidance answers on salawat.

<SourceCard
  title="Virtues of sending blessings on the Prophet"
  url="https://seekersguidance.org/answers/general-counsel/the-virtues-of-sending-blessings-on-the-prophet/"
  source="SeekersGuidance"
  description="Salawat in Sunni practice."
/>`,
  },
  {
    slug: "imam-al-busiri",
    title: "Imam al-Busiri",
    subtitle: "Poet of the Burda",
    description:
      "Sharaf al-Din al-Busiri (d. 694 AH): al-Kawakib al-Durriyya (Qasidat al-Burda).",
    dates: "d. 694 AH / 1295 CE",
    madhhab: "Shafi'i",
    primarySources: ["Qasidat al-Burda"],
    body: `**Imam al-Busiri** composed the *Burda*, a celebrated ode in praise of the Prophet ﷺ, memorized and sung in Sunni communities worldwide. Such poetry is part of mawlid and mawlid-adjacent culture where means stay within lawful remembrance.

His work illustrates how love of the Prophet ﷺ found classical literary expression.

<SourceCard
  title="Is celebrating the Prophet's birthday an innovation?"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="Permissible ways of honoring the Prophet ﷺ."
/>`,
  },
  {
    slug: "shah-waliullah-al-dihlawi",
    title: "Shah Waliullah al-Dihlawi",
    subtitle: "Delhi reformer; bridge between madhahib",
    description:
      "Shah Waliullah (d. 1176 AH): al-Insaf and Quranic renewal in South Asia.",
    dates: "d. 1176 AH / 1762 CE",
    madhhab: "Hanafi (with broad engagement)",
    primarySources: ["Hujjat Allah al-Baligha", "al-Insaf fi Masail al-Ikhtilaf"],
    body: `**Shah Waliullah al-Dihlawi** analyzed differences between the schools and argued for principled appreciation of *ijtihad* while respecting taqlid for laypeople. His work influenced later South Asian debates on madhhab and hadith.

He represents sophisticated pre-modern reflection on why scholars differ.

<SourceCard
  title="Why do scholars differ?"
  url="https://seekersguidance.org/answers/"
  source="SeekersGuidance"
  description="Search SeekersGuidance for ikhtilaf."
/>`,
  },
  {
    slug: "ibn-rushd",
    title: "Ibn Rushd (Averroes)",
    subtitle: "Maliki qadi; author of Bidayat al-Mujtahid",
    description:
      "Muhammad ibn Ahmad ibn Rushd (d. 595 AH): comparative fiqh of the four schools.",
    dates: "d. 595 AH / 1198 CE",
    madhhab: "Maliki",
    primarySources: ["Bidayat al-Mujtahid"],
    body: `**Ibn Rushd** (grandson of the famous philosopher) wrote *Bidayat al-Mujtahid*, mapping how the four schools derive rulings from shared evidence. The book is a standard reference for understanding *ikhtilaf*.

He shows disagreement as a structured outcome of methodology, not arbitrary opinion.

<SourceCard
  title="SeekersGuidance answers"
  url="https://seekersguidance.org/answers/"
  source="SeekersGuidance"
  description="Search for ikhtilaf and scholarly difference."
/>`,
  },
  {
    slug: "imam-al-zuhri",
    title: "Imam ibn Shihab al-Zuhri",
    subtitle: "Medinan scholar; key figure in early hadith compilation",
    description:
      "Al-Zuhri (d. 124 AH): systematizing prophetic reports in the Umayyad and early scholarly milieu.",
    dates: "d. 124 AH / 742 CE",
    madhhab: "Precursor generation",
    primarySources: ["Reports and early musannaf literature"],
    body: `**Imam al-Zuhri** was among the pivotal figures who moved prophetic reports from scattered memory into organized written records consulted by caliphs and jurists. His warning that knowledge is religion — so watch from whom you take it — is quoted on this site's scholarly tradition page.

He belongs to the generation that made *isnad* discipline central.

<SourceCard
  title="The role of scholars in Islam"
  url="https://seekersguidance.org/articles/knowledge/the-role-of-scholars-in-islam/"
  source="SeekersGuidance"
  description="Taking knowledge from qualified people."
/>`,
  },
  {
    slug: "imam-al-sakhawi",
    title: "Imam al-Sakhawi",
    subtitle: "Hadith scholar and historian",
    description:
      "Muhammad ibn Abd al-Rahman al-Sakhawi (d. 902 AH): hadith criticism and biographical works.",
    dates: "d. 902 AH / 1497 CE",
    madhhab: "Shafi'i",
    primarySources: ["al-Jawahir wa'l-Durar", "al-Maqasid al-Hasana"],
    body: `**Imam al-Sakhawi** was a major Egyptian Shafi'i hadith scholar and biographer, a student-environment inheritor of Ibn Hajar's Damascus circle. He wrote on narrator criticism and the virtues of good innovations in devotional life where they align with the Sunna.

He appears in lists of scholars who accepted sound forms of mawlid.

<SourceCard
  title="Mawlid"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="Classical scholarship on the Prophet's birth commemoration."
/>`,
  },
  {
    slug: "abu-shama-al-maqdisi",
    title: "Abu Shama al-Maqdisi",
    subtitle: "Shafi'i historian of Damascus",
    description:
      "Abd al-Rahman Abu Shama al-Maqdisi (d. 665 AH): chronicled scholarly support for praiseworthy innovations.",
    dates: "d. 665 AH / 1268 CE",
    madhhab: "Shafi'i",
    primarySources: ["Kitab al-Baith ala Inkar al-Bida wa'l-Hawadith"],
    body: `**Abu Shama al-Maqdisi** was a Damascene historian and Shafi'i scholar. His writings discuss how later community practices — when rooted in worship and gratitude — were viewed by major figures.

He is cited in mawlid discussions alongside other classical names.

<SourceCard
  title="Is celebrating the Prophet's birthday an innovation?"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="SeekersGuidance on mawlid."
/>`,
  },
  {
    slug: "ibn-al-jazari",
    title: "Ibn al-Jazari",
    subtitle: "Master of Quranic recitation (qira'at)",
    description:
      "Muhammad ibn Muhammad ibn al-Jazari (d. 833 AH): authority on the ten readings.",
    dates: "d. 833 AH / 1429 CE",
    madhhab: "Shafi'i",
    primarySources: ["al-Nashr fi'l-Qira'at al-Ashr"],
    body: `**Ibn al-Jazari** systematized knowledge of the canonical readings of the Quran. His works are the reference for *tajwid* and *qira'a* in traditional institutes.

He illustrates how "innovation" language in the Sunna coexists with technical development in preserving revelation.

<SourceCard
  title="Quran and recitation"
  url="https://seekersguidance.org/courses/"
  source="SeekersGuidance"
  description="Courses on Quranic sciences."
/>`,
  },
  {
    slug: "imam-al-fakihani",
    title: "Imam al-Fakihani",
    subtitle: "Maliki scholar with critical view of some mawlid practices",
    description:
      "Abu'l-Hasan al-Fakihani (d. 734 AH): Maliki voice in classical mawlid debate.",
    dates: "d. 734 AH / 1334 CE",
    madhhab: "Maliki",
    primarySources: ["Treatises on the mawlid (classical debate literature)"],
    body: `**Imam al-Fakihani** represents the minority of classical scholars who argued against certain forms of mawlid. Sunni discourse records his view alongside permissive majorities — showing *ikhtilaf* within orthodoxy.

Acknowledging disagreement is part of honest presentation of the tradition.

<SourceCard
  title="Is celebrating the Prophet's birthday an innovation?"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="Balanced treatment of scholarly views."
/>`,
  },
  {
    slug: "imam-al-shatibi",
    title: "Imam al-Shatibi",
    subtitle: "Maliki usul scholar; al-Muwafaqat",
    description:
      "Ibrahim ibn Musa al-Shatibi (d. 790 AH): objectives of Sharia and critique of reprehensible innovation.",
    dates: "d. 790 AH / 1388 CE",
    madhhab: "Maliki",
    primarySources: ["al-Muwafaqat", "al-Iqtisad"],
    body: `**Imam al-Shatibi** developed a powerful analysis of the purposes of law (*maqasid*) and warned against *bid'a* that undermines established worship. His rigor is cited by scholars on various sides of specific debates.

He is not a "modern outsider" but a major Maliki *usuli* voice.

<SourceCard
  title="Innovation in Islam"
  url="https://seekersguidance.org/answers/general-counsel/clarifying-innovations-in-islam/"
  source="SeekersGuidance"
  description="Clarifying blameworthy vs praiseworthy innovation."
/>`,
  },
  {
    slug: "yusuf-weltch",
    title: "Shaykh Yusuf Weltch",
    subtitle: "Contemporary teacher at SeekersGuidance",
    description:
      "Shaykh Yusuf Weltch teaches Hanafi fiqh and theology at SeekersGuidance; cited on mawlid permissibility.",
    madhhab: "Hanafi",
    primarySources: ["SeekersGuidance courses and answers"],
    body: `**Shaykh Yusuf Weltch** is a contemporary instructor at SeekersGuidance, teaching fiqh and belief according to traditional Sunni methods. This site cites his formulation that the mawlid is permissible and, for many scholars, encouraged — without being obligatory.

Studying with living scholars continues the chain described in the isnad and scholarly-tradition articles.

<SourceCard
  title="Is celebrating the Prophet's birthday an innovation?"
  url="https://seekersguidance.org/answers/general-counsel/is-celebrating-the-prophets-birthday-an-innovation/"
  source="SeekersGuidance"
  description="Answer drawing on contemporary qualified scholarship."
/>`,
  },
  {
    slug: "muhammad-ba-dhib",
    title: "Shaykh Muhammad Ba-Dhib",
    subtitle: "Contemporary Yemeni scholar at SeekersGuidance",
    description:
      "Shaykh Muhammad Ba-Dhib: hadith sciences and mawlid-related instruction at SeekersGuidance.",
    madhhab: "Shafi'i",
    primarySources: ["SeekersGuidance courses and answers"],
    body: `**Shaykh Muhammad Ba-Dhib** teaches hadith and related sciences at SeekersGuidance. This site links his material on the Barzanji mawlid and the broader tradition of licit celebration.

He represents living *isnad*-based scholarship.

<SourceCard
  title="Mawlid al-Barzanji and Celebrating the Mawlid"
  url="https://seekersguidance.org/articles/prophet-muhammad/celebrating-the-mawlid-shaykh-muhammad-ba-dhib/"
  source="SeekersGuidance"
  description="Shaykh Muhammad Ba-Dhib on mawlid gatherings and their scholarly basis."
/>`,
  },
  {
    slug: "umar-ibn-al-khattab",
    title: "Umar ibn al-Khattab",
    subtitle: "Second Caliph; Companion of the Prophet ﷺ",
    description:
      "Umar ibn al-Khattab (d. 23 AH): his tarawih congregation illustrates qualified use of bid'a language in the Sunna.",
    dates: "d. 23 AH / 644 CE",
    madhhab: "Companion",
    primarySources: ["Sahih al-Bukhari", "Sahih Muslim"],
    body: `**Umar ibn al-Khattab**, the second rightly guided caliph, unified the community in night prayer of Ramadan (*tarawih*) behind one imam, calling this gathering *ni'mat al-bid'a* — an excellent innovation — meaning a good new way in worship without contradicting revelation.

Classical scholars use this hadith to show that not every novelty is blameworthy; classification depends on evidence.

<SourceCard
  title="The concept of bid'a"
  url="https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia-2/"
  source="SeekersGuidance"
  description="How the tradition reads hadith on bid'a."
/>`,
  },
];

fs.mkdirSync(dir, { recursive: true });
for (const s of scholars) {
  fs.writeFileSync(path.join(dir, `${s.slug}.mdx`), fm(s) + s.body + "\n");
}
console.log(`Wrote ${scholars.length} files to ${dir}`);
