/**
 * Scholar Lineage Data — Scholarly consensus on bid'a hasana
 *
 * Slugs correspond to existing content/scholars/*.mdx files.
 * Scholars without an existing profile have slug: null.
 *
 * VERIFICATION PROTOCOL (see docs/ARCHITECTURE.md):
 * Every entry must have a verifiable source. Entries with a verifyUrl
 * link to a SeekersGuidance article that references the scholar or
 * their position. Entries without a verifyUrl are verified against
 * a well-known classical primary text that is independently checkable.
 */

export type Madhab = "Hanafi" | "Maliki" | "Shafi'i" | "Hanbali";
export type Position = "affirmed" | "dissenting";

export interface ScholarEntry {
  name: string;
  slug: string | null;
  dates: string;
  centuryAH: number;
  madhab: Madhab;
  position: Position;
  city: string;
  role: string;
  bidaStatement: string;
  source: string;
  verifyUrl: string | null;
}

export const SCHOLAR_LINEAGE: ScholarEntry[] = [
  // ── SHAFI'I ────────────────────────────────────────────────────────────────

  {
    name: "Imam al-Shafi'i",
    slug: "imam-al-shafii",
    dates: "d. 204 AH / 820 CE",
    centuryAH: 2,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Cairo",
    role: "Founder of the Shafi'i school; systematizer of Islamic jurisprudence",
    bidaStatement:
      "Newly introduced matters are of two types: whatever contradicts the Book, the Sunnah, or scholarly consensus — that is blameworthy. And whatever good is newly introduced that does not contradict these — that is praiseworthy.",
    source: "Reported by al-Bayhaqi in Manaqib al-Shafi'i",
    verifyUrl:
      "https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia/",
  },
  {
    name: "Imam al-Bayhaqi",
    slug: null,
    dates: "d. 458 AH / 1066 CE",
    centuryAH: 5,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Nishapur",
    role: "Major hadith master; transmitter of al-Shafi'i's bid'a statement",
    bidaStatement:
      "He transmitted and endorsed al-Shafi'i's division of bid'a into praiseworthy and blameworthy categories, preserving it in his biographical work on al-Shafi'i as a foundational legal principle.",
    source: "Manaqib al-Shafi'i; al-Sunan al-Kubra",
    verifyUrl:
      "https://seekersguidance.org/answers/islamic-belief/does-allah-forgive-innovation-bida/",
  },
  {
    name: "Imam al-Ghazali",
    slug: "imam-al-ghazali",
    dates: "d. 505 AH / 1111 CE",
    centuryAH: 5,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Tus, Persia",
    role: "Greatest synthesizer of jurisprudence, theology, and spirituality",
    bidaStatement:
      "Not every new thing is reprehensible. Only that which contradicts an established Sunnah is blameworthy. Whatever is good and does not contradict the Sunnah is permissible or praiseworthy.",
    source: "Ihya Ulum al-Din, Book of Knowledge",
    verifyUrl: null,
  },
  {
    name: "Al-Izz ibn Abd al-Salam",
    slug: "al-izz-ibn-abd-al-salam",
    dates: "d. 660 AH / 1262 CE",
    centuryAH: 7,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Damascus / Cairo",
    role: "\"Sultan of Scholars\"; originator of the five-category bid'a framework",
    bidaStatement:
      "Innovations are divided into five categories: obligatory, prohibited, recommended, disliked, and permissible — each assessed by the principles of Sacred Law.",
    source: "al-Qawa'id al-Kubra (Qawa'id al-Ahkam fi Masalih al-Anam)",
    verifyUrl:
      "https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia/",
  },
  {
    name: "Abu Shama al-Maqdisi",
    slug: "abu-shama-al-maqdisi",
    dates: "d. 665 AH / 1268 CE",
    centuryAH: 7,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Damascus",
    role: "Shafi'i jurist; teacher of Imam al-Nawawi",
    bidaStatement:
      "Among the best innovations of our time is what is done on the day of the Prophet's birthday: giving charity, doing good, and expressing joy — for this expresses love and veneration for the Prophet.",
    source: "al-Ba'ith 'ala Inkar al-Bida' wa al-Hawadith",
    verifyUrl:
      "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
  },
  {
    name: "Imam al-Nawawi",
    slug: "imam-al-nawawi",
    dates: "d. 676 AH / 1278 CE",
    centuryAH: 7,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Damascus",
    role: "Definitive commentator on Sahih Muslim; foremost Shafi'i authority",
    bidaStatement:
      "Bid'a in Islamic law is introducing something that did not exist during the time of the Messenger, and it is divided into good (hasana) and reprehensible (qabiha).",
    source: "Sharh Sahih Muslim, introduction; Tahdhib al-Asma' wa al-Lughat",
    verifyUrl:
      "https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia/",
  },
  {
    name: "Imam Taqi al-Din al-Subki",
    slug: "imam-taqi-al-din-al-subki",
    dates: "d. 756 AH / 1355 CE",
    centuryAH: 8,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Damascus / Cairo",
    role: "Chief Qadi of Damascus; foremost Shafi'i-Ash'ari authority of his era",
    bidaStatement:
      "The hadith 'every innovation is misguidance' is a general expression restricted to innovations that contradict an established principle. Good innovations that align with the principles of Sacred Law are praiseworthy.",
    source: "Fatawa al-Subki; cited in al-Suyuti, Husn al-Maqsid",
    verifyUrl: null,
  },
  {
    name: "Ibn Hajar al-Asqalani",
    slug: "ibn-hajar-al-asqalani",
    dates: "d. 852 AH / 1449 CE",
    centuryAH: 9,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Cairo",
    role: "Definitive commentator on Sahih al-Bukhari; master of hadith sciences",
    bidaStatement:
      "I have found a sound basis for the mawlid from the Sunna — showing gratitude for a blessing granted on a particular day is established practice. And what blessing is greater than the appearance of the Prophet?",
    source: "Fath al-Bari, vol. 4; reported by al-Suyuti in Husn al-Maqsid",
    verifyUrl:
      "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
  },
  {
    name: "Imam al-Sakhawi",
    slug: "imam-al-sakhawi",
    dates: "d. 902 AH / 1497 CE",
    centuryAH: 9,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Cairo / Medina",
    role: "Student of Ibn Hajar; foremost biographer of 9th-century scholars",
    bidaStatement:
      "There is no sound basis for condemning the mawlid. The scholars of the four madhabs have affirmed its permissibility, and the evidence from Quran and Sunnah supports it.",
    source: "al-Subh al-Munir; cited in al-Suyuti, Husn al-Maqsid",
    verifyUrl:
      "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
  },
  {
    name: "Imam al-Suyuti",
    slug: "imam-al-suyuti",
    dates: "d. 911 AH / 1505 CE",
    centuryAH: 9,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Cairo",
    role: "Prolific mujtahid-level scholar; author of over 500 works",
    bidaStatement:
      "The basis of the mawlid — gathering people, reciting the Quran, narrating the events of his birth — is a praiseworthy innovation (bid'a hasana) for which its practitioner is rewarded.",
    source: "Husn al-Maqsid fi Amal al-Mawlid",
    verifyUrl:
      "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
  },
  {
    name: "Ibn Hajar al-Haytami",
    slug: null,
    dates: "d. 974 AH / 1567 CE",
    centuryAH: 10,
    madhab: "Shafi'i",
    position: "affirmed",
    city: "Mecca",
    role: "Foremost late Shafi'i authority; definitive voice on mawlid and bid'a",
    bidaStatement:
      "The mawlid gathering, when comprising sound and Sharia-compliant elements, is a praiseworthy innovation. Innovations are classified as praiseworthy or blameworthy based on their alignment with Islamic principles, not their mere novelty.",
    source: "al-Fatawa al-Hadithiyya",
    verifyUrl:
      "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
  },

  // ── HANAFI ─────────────────────────────────────────────────────────────────

  {
    name: "Imam Abu Hanifa",
    slug: "imam-abu-hanifa",
    dates: "d. 150 AH / 767 CE",
    centuryAH: 2,
    madhab: "Hanafi",
    position: "affirmed",
    city: "Kufa, Iraq",
    role: "Founder of the Hanafi school; the Greatest Imam (al-Imam al-A'zam)",
    bidaStatement:
      "No direct statement on bid'a categories survives from Abu Hanifa. However, his school's methodology — istihsan (juristic preference) and attention to maslaha (public interest) — inherently supports evaluating new practices by their alignment with Sacred Law rather than rejecting them for mere novelty. His students and the later Hanafi authorities unanimously adopted the five-category framework.",
    source:
      "Methodology documented in al-Kasani, Bada'i' al-Sana'i'; codified by Ibn Abidin, Radd al-Muhtar, vol. 1",
    verifyUrl: null,
  },
  {
    name: "Al-Badr al-Ayni",
    slug: null,
    dates: "d. 855 AH / 1451 CE",
    centuryAH: 9,
    madhab: "Hanafi",
    position: "affirmed",
    city: "Cairo",
    role: "Chief Hanafi judge of Egypt; commentator on Sahih al-Bukhari",
    bidaStatement:
      "Bid'a is of two kinds: praiseworthy and blameworthy. The praiseworthy is what is newly introduced that aligns with the principles of the Shari'a and serves a recognized benefit.",
    source:
      "'Umdat al-Qari Sharh Sahih al-Bukhari, commentary on the tarawih chapter",
    verifyUrl:
      "https://seekersguidance.org/answers/islamic-belief/how-can-i-distinguish-between-good-and-bad-innovation/",
  },
  {
    name: "Al-Kamal ibn al-Humam",
    slug: null,
    dates: "d. 861 AH / 1457 CE",
    centuryAH: 9,
    madhab: "Hanafi",
    position: "affirmed",
    city: "Cairo",
    role: "One of the greatest Hanafi mujtahids; student of Ibn Hajar and al-Ayni",
    bidaStatement:
      "New matters in religion are assessed by the comprehensive methodology of Sacred Law. What aligns with its principles is accepted; what contravenes them is rejected. The criterion is conformity with the Shari'a, not the absence of prior precedent.",
    source: "Fath al-Qadir (Sharh al-Hidaya)",
    verifyUrl: null,
  },
  {
    name: "Mulla Ali al-Qari",
    slug: null,
    dates: "d. 1014 AH / 1606 CE",
    centuryAH: 11,
    madhab: "Hanafi",
    position: "affirmed",
    city: "Mecca",
    role: "Major Hanafi-Maturidi scholar; author in hadith, fiqh, and spirituality",
    bidaStatement:
      "The mawlid is praiseworthy as long as it is free of impermissible elements. Commemorating the Prophet's birth with gatherings of dhikr and gratitude is a good innovation.",
    source: "al-Mawrid al-Rawi fi al-Mawlid al-Nabawi",
    verifyUrl: null,
  },
  {
    name: "Shah Waliullah al-Dihlawi",
    slug: "shah-waliullah-al-dihlawi",
    dates: "d. 1176 AH / 1762 CE",
    centuryAH: 12,
    madhab: "Hanafi",
    position: "affirmed",
    city: "Delhi, India",
    role: "Reviver of Islamic scholarship in the Indian subcontinent",
    bidaStatement:
      "Not everything the salaf did not do is forbidden. The criterion is whether a new practice contradicts a text or established principle — not merely whether it was practiced in the first generation.",
    source: "Hujjat Allah al-Baligha; al-Insaf fi Bayan Sabab al-Ikhtilaf",
    verifyUrl: null,
  },
  {
    name: "Ibn Abidin",
    slug: "ibn-abidin",
    dates: "d. 1252 AH / 1836 CE",
    centuryAH: 13,
    madhab: "Hanafi",
    position: "affirmed",
    city: "Damascus",
    role: "Last great Hanafi mujtahid; definitive authority of the Ottoman period",
    bidaStatement:
      "Innovations are divided into five categories: obligatory, recommended, permissible, disliked, and forbidden — as the Shafi'i scholars have stated. This classification is accepted across all four schools.",
    source:
      "Radd al-Muhtar 'ala al-Durr al-Mukhtar (Hashiyat Ibn Abidin), vol. 1",
    verifyUrl: null,
  },

  // ── MALIKI ─────────────────────────────────────────────────────────────────

  {
    name: "Imam Malik ibn Anas",
    slug: "imam-malik-ibn-anas",
    dates: "d. 179 AH / 795 CE",
    centuryAH: 2,
    madhab: "Maliki",
    position: "affirmed",
    city: "Medina",
    role: "Founder of the Maliki school; Imam of Medina",
    bidaStatement:
      "No direct statement on bid'a categories survives from Imam Malik. His school's distinctive principle of maslaha mursala (unrestricted public interest) provides the juristic basis for accepting beneficial new practices not explicitly addressed by primary texts. His later authorities — al-Qarafi, al-Zurqani, and others — unanimously adopted the five-category framework, grounding it in his methodology.",
    source:
      "Methodology documented in al-Qarafi, al-Furuq, vol. 4; al-Zurqani, Sharh al-Muwatta'",
    verifyUrl: null,
  },
  {
    name: "Al-Qarafi",
    slug: null,
    dates: "d. 684 AH / 1285 CE",
    centuryAH: 7,
    madhab: "Maliki",
    position: "affirmed",
    city: "Cairo",
    role: "Foremost Maliki jurist and legal theorist of the 7th century AH",
    bidaStatement:
      "Innovations are divided into five categories parallel to the five rulings of Sacred Law: obligatory, recommended, permissible, disliked, and forbidden — each governed by the principles of the Shari'a.",
    source: "al-Furuq (Anwar al-Buruq fi Anwa' al-Furuq), vol. 4",
    verifyUrl: null,
  },
  {
    name: "Al-Zurqani",
    slug: null,
    dates: "d. 1122 AH / 1710 CE",
    centuryAH: 12,
    madhab: "Maliki",
    position: "affirmed",
    city: "Cairo",
    role: "Major Maliki scholar; commentator on Imam Malik's Muwatta",
    bidaStatement:
      "The generality of 'every innovation is misguidance' is restricted to those innovations that contradict an established principle. Good innovations that serve a recognized religious interest are not encompassed by this condemnation.",
    source: "Sharh al-Zurqani 'ala Muwatta' Imam Malik",
    verifyUrl: null,
  },

  // ── HANBALI ────────────────────────────────────────────────────────────────

  {
    name: "Ibn al-Jawzi",
    slug: null,
    dates: "d. 597 AH / 1201 CE",
    centuryAH: 6,
    madhab: "Hanbali",
    position: "affirmed",
    city: "Baghdad",
    role: "Prolific Hanbali scholar; author of over 300 works in hadith and preaching",
    bidaStatement:
      "Not every newly introduced matter is condemned. What is condemned is what contradicts the Sunnah. As for whatever good is newly introduced that does not contradict the Sunnah, it is permissible.",
    source:
      "al-Muntazam fi Tarikh al-Muluk wa al-Umam; cf. his discussion of Umar's tarawih in the same work",
    verifyUrl: null,
  },

  // ── DISSENTING VOICES ──────────────────────────────────────────────────────

  {
    name: "Imam al-Shatibi",
    slug: "imam-al-shatibi",
    dates: "d. 790 AH / 1388 CE",
    centuryAH: 8,
    madhab: "Maliki",
    position: "dissenting",
    city: "Granada, Spain",
    role: "Maliki legal theorist; author of al-I'tisam and al-Muwafaqat",
    bidaStatement:
      "Every bid'a in the technical religious sense is blameworthy. Practices that are good but not specified by the Shari'a should be classified as maslaha mursala, not bid'a hasana. (He nonetheless accepted madrasas, hadith compilation, and congregational tarawih as permissible.)",
    source: "al-I'tisam, vol. 1",
    verifyUrl:
      "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
  },
  {
    name: "Ibn Taymiyya",
    slug: "ibn-taymiyya",
    dates: "d. 728 AH / 1328 CE",
    centuryAH: 8,
    madhab: "Hanbali",
    position: "dissenting",
    city: "Damascus",
    role: "Hanbali scholar; most frequently cited against bid'a categories",
    bidaStatement:
      "He considered organized mawlid a bid'a the salaf did not practice, yet wrote: \"Honoring the mawlid brings great reward due to the good intention and veneration of the Messenger\" — acknowledging the practitioner's reward.",
    source: "Iqtida al-Sirat al-Mustaqim; Majmu' al-Fatawa",
    verifyUrl:
      "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
  },
];

export const SCHOLARS_BY_MADHAB: Record<Madhab, ScholarEntry[]> = {
  "Shafi'i": SCHOLAR_LINEAGE.filter(
    (s) => s.madhab === "Shafi'i" && s.position === "affirmed"
  ),
  Hanafi: SCHOLAR_LINEAGE.filter(
    (s) => s.madhab === "Hanafi" && s.position === "affirmed"
  ),
  Maliki: SCHOLAR_LINEAGE.filter(
    (s) => s.madhab === "Maliki" && s.position === "affirmed"
  ),
  Hanbali: SCHOLAR_LINEAGE.filter(
    (s) => s.madhab === "Hanbali" && s.position === "affirmed"
  ),
};

export const DISSENTING_SCHOLARS = SCHOLAR_LINEAGE.filter(
  (s) => s.position === "dissenting"
);

export const MADHAB_ORDER: Madhab[] = [
  "Shafi'i",
  "Hanafi",
  "Maliki",
  "Hanbali",
];

export const MADHAB_META: Record<
  Madhab,
  { light: string; dark: string; bg: string; darkBg: string; label: string }
> = {
  "Shafi'i": {
    light: "#1B7A4E",
    dark: "#4CAF7A",
    bg: "rgba(27,122,78,0.07)",
    darkBg: "rgba(76,175,122,0.1)",
    label: "Shafi'i",
  },
  Hanafi: {
    light: "#27579E",
    dark: "#5B8EC9",
    bg: "rgba(39,87,158,0.07)",
    darkBg: "rgba(91,142,201,0.1)",
    label: "Hanafi",
  },
  Maliki: {
    light: "#8B6914",
    dark: "#D4AF37",
    bg: "rgba(139,105,20,0.07)",
    darkBg: "rgba(212,175,55,0.1)",
    label: "Maliki",
  },
  Hanbali: {
    light: "#7A3B3B",
    dark: "#C47C7C",
    bg: "rgba(122,59,59,0.07)",
    darkBg: "rgba(196,124,124,0.1)",
    label: "Hanbali",
  },
};

export function centuryLabel(c: number): string {
  const suffix = c === 1 ? "st" : c === 2 ? "nd" : c === 3 ? "rd" : "th";
  return `${c}${suffix} Century AH`;
}

export const SEEKERS_GUIDANCE_LINKS = [
  {
    title: "The Concept of Bid'a in the Islamic Shari'a",
    author: "Shaykh Nuh Ha Mim Keller",
    url: "https://seekersguidance.org/answers/general-counsel/the-concept-of-bida-in-the-islamic-sharia/",
    description:
      "Comprehensive treatment of bid'a with primary textual evidence from hadith and the Companions' practice.",
  },
  {
    title: "What Is Praiseworthy Innovation (Bid'a Hasana)?",
    author: "Shaykh Faraz Rabbani",
    url: "https://seekersguidance.org/answers/what-is-praiseworthy-innovation-bida-hasana-and-does-mawlid-come-under-it/",
    description:
      "Definition of bid'a hasana as applying a general sunna in a manner not contrary to Prophetic guidance.",
  },
  {
    title: "How Can I Distinguish between Good and Bad Innovation?",
    author: "Shaykh Faraz Rabbani",
    url: "https://seekersguidance.org/answers/islamic-belief/how-can-i-distinguish-between-good-and-bad-innovation/",
    description:
      "Practical criteria for evaluating new practices, with al-Badr al-Ayni's formulation.",
  },
  {
    title: "'Tis the Season... For Mawlid Wars?",
    author: "Ustadh Salman Younas",
    url: "https://seekersguidance.org/articles/knowledge/tis-season-mawlid-wars/",
    description:
      "List of classical scholars who permitted or prohibited the mawlid, with methodological context.",
  },
];
