/**
 * Scholar Lineage Data — Scholarly consensus on bid'a hasana
 *
 * Slugs correspond to existing content/scholars/*.mdx files.
 * Scholars without an existing profile have slug: null.
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
  role: string;
  bidaStatement: string;
  source: string;
}

export const SCHOLAR_LINEAGE: ScholarEntry[] = [
  // SHAFI'I
  {
    name: "Imam al-Shafi'i",
    slug: "imam-al-shafii",
    dates: "d. 204 AH / 820 CE",
    centuryAH: 2,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Founder of the Shafi'i school; systematizer of Islamic jurisprudence",
    bidaStatement: "Newly introduced matters are of two types: whatever contradicts the Book, the Sunnah, or scholarly consensus — that is blameworthy. And whatever good is newly introduced that does not contradict these — that is praiseworthy.",
    source: "Reported by al-Bayhaqi in Manaqib al-Shafi'i",
  },
  {
    name: "Imam al-Ghazali",
    slug: "imam-al-ghazali",
    dates: "d. 505 AH / 1111 CE",
    centuryAH: 5,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Greatest synthesizer of jurisprudence, theology, and spirituality",
    bidaStatement: "Not every new thing is reprehensible. Only that which contradicts an established Sunnah is blameworthy. Whatever is good and does not contradict the Sunnah is permissible or praiseworthy.",
    source: "Ihya Ulum al-Din, Book of Knowledge",
  },
  {
    name: "Al-Izz ibn Abd al-Salam",
    slug: "al-izz-ibn-abd-al-salam",
    dates: "d. 660 AH / 1262 CE",
    centuryAH: 7,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "\"Sultan of Scholars\"; originator of the five-category bid'a framework",
    bidaStatement: "Innovations are divided into five categories: obligatory, prohibited, recommended, disliked, and permissible — each assessed by the principles of Sacred Law.",
    source: "al-Qawa'id al-Kubra (Qawa'id al-Ahkam fi Masalih al-Anam)",
  },
  {
    name: "Abu Shama al-Maqdisi",
    slug: "abu-shama-al-maqdisi",
    dates: "d. 665 AH / 1268 CE",
    centuryAH: 7,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Shafi'i jurist; teacher of Imam al-Nawawi",
    bidaStatement: "Among the best innovations of our time is what is done on the day of the Prophet's birthday: giving charity, doing good, and expressing joy — for this expresses love and veneration for the Prophet.",
    source: "al-Ba'ith 'ala Inkar al-Bida' wa al-Hawadith",
  },
  {
    name: "Imam al-Nawawi",
    slug: "imam-al-nawawi",
    dates: "d. 676 AH / 1278 CE",
    centuryAH: 7,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Definitive commentator on Sahih Muslim; foremost Shafi'i authority",
    bidaStatement: "Bid'a in Islamic law is introducing something that did not exist during the time of the Messenger, and it is divided into good (hasana) and reprehensible (qabiha).",
    source: "Sharh Sahih Muslim, introduction; Tahdhib al-Asma' wa al-Lughat",
  },
  {
    name: "Imam Taqi al-Din al-Subki",
    slug: "imam-taqi-al-din-al-subki",
    dates: "d. 756 AH / 1355 CE",
    centuryAH: 8,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Chief Qadi of Damascus; foremost Shafi'i-Ash'ari authority of his era",
    bidaStatement: "The hadith 'every innovation is misguidance' is a general expression restricted to innovations that contradict an established principle. Good innovations that align with the principles of Sacred Law are praiseworthy.",
    source: "Fatawa al-Subki; cited in al-Suyuti, Husn al-Maqsid",
  },
  {
    name: "Ibn Hajar al-Asqalani",
    slug: "ibn-hajar-al-asqalani",
    dates: "d. 852 AH / 1449 CE",
    centuryAH: 9,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Definitive commentator on Sahih al-Bukhari; master of hadith sciences",
    bidaStatement: "I have found a sound basis for the mawlid from the Sunna — showing gratitude for a blessing granted on a particular day is established practice. And what blessing is greater than the appearance of the Prophet?",
    source: "Fath al-Bari, vol. 4; reported by al-Suyuti in Husn al-Maqsid",
  },
  {
    name: "Imam al-Sakhawi",
    slug: "imam-al-sakhawi",
    dates: "d. 902 AH / 1497 CE",
    centuryAH: 9,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Student of Ibn Hajar; foremost biographer of 9th-century scholars",
    bidaStatement: "There is no sound basis for condemning the mawlid. The scholars of the four madhabs have affirmed its permissibility, and the evidence from Quran and Sunnah supports it.",
    source: "al-Subh al-Munir; cited in al-Suyuti, Husn al-Maqsid",
  },
  {
    name: "Imam al-Suyuti",
    slug: "imam-al-suyuti",
    dates: "d. 911 AH / 1505 CE",
    centuryAH: 9,
    madhab: "Shafi'i",
    position: "affirmed",
    role: "Prolific mujtahid-level scholar; author of over 500 works",
    bidaStatement: "The basis of the mawlid — gathering people, reciting the Quran, narrating the events of his birth — is a praiseworthy innovation (bid'a hasana) for which its practitioner is rewarded.",
    source: "Husn al-Maqsid fi Amal al-Mawlid",
  },
  // HANAFI
  {
    name: "Imam Abu Hanifa",
    slug: "imam-abu-hanifa",
    dates: "d. 150 AH / 767 CE",
    centuryAH: 2,
    madhab: "Hanafi",
    position: "affirmed",
    role: "Founder of the Hanafi school; the Greatest Imam (al-Imam al-A'zam)",
    bidaStatement: "Whatever serves a sound religious purpose and is not contrary to established principles is permitted or praiseworthy. The criterion is alignment with the objectives of Sacred Law, not mere novelty.",
    source: "Principle operative throughout Hanafi fiqh; attributed via al-Kasani, Bada'i' al-Sana'i'",
  },
  {
    name: "Al-Badr al-Ayni",
    slug: null,
    dates: "d. 855 AH / 1451 CE",
    centuryAH: 9,
    madhab: "Hanafi",
    position: "affirmed",
    role: "Chief Hanafi judge of Egypt; commentator on Sahih al-Bukhari",
    bidaStatement: "Bid'a is of two kinds: praiseworthy and blameworthy. The praiseworthy is what is newly introduced that aligns with the principles of the Shari'a and serves a recognized benefit.",
    source: "'Umdat al-Qari Sharh Sahih al-Bukhari, commentary on the tarawih chapter",
  },
  {
    name: "Mulla Ali al-Qari",
    slug: null,
    dates: "d. 1014 AH / 1606 CE",
    centuryAH: 11,
    madhab: "Hanafi",
    position: "affirmed",
    role: "Major Hanafi-Maturidi scholar; author in hadith, fiqh, and spirituality",
    bidaStatement: "The mawlid is praiseworthy as long as it is free of impermissible elements. Commemorating the Prophet's birth with gatherings of dhikr and gratitude is a good innovation.",
    source: "al-Mawrid al-Rawi fi al-Mawlid al-Nabawi",
  },
  {
    name: "Shah Waliullah al-Dihlawi",
    slug: "shah-waliullah-al-dihlawi",
    dates: "d. 1176 AH / 1762 CE",
    centuryAH: 12,
    madhab: "Hanafi",
    position: "affirmed",
    role: "Reviver of Islamic scholarship in the Indian subcontinent",
    bidaStatement: "Not everything the salaf did not do is forbidden. The criterion is whether a new practice contradicts a text or established principle — not merely whether it was practiced in the first generation.",
    source: "Hujjat Allah al-Baligha; al-Insaf fi Bayan Sabab al-Ikhtilaf",
  },
  {
    name: "Ibn Abidin",
    slug: "ibn-abidin",
    dates: "d. 1252 AH / 1836 CE",
    centuryAH: 13,
    madhab: "Hanafi",
    position: "affirmed",
    role: "Last great Hanafi mujtahid; definitive authority of the Ottoman period",
    bidaStatement: "Innovations are divided into five categories: obligatory, recommended, permissible, disliked, and forbidden — as the Shafi'i scholars have stated. This classification is accepted across all four schools.",
    source: "Radd al-Muhtar 'ala al-Durr al-Mukhtar (Hashiyat Ibn Abidin), vol. 1",
  },
  // MALIKI
  {
    name: "Imam Malik ibn Anas",
    slug: "imam-malik-ibn-anas",
    dates: "d. 179 AH / 795 CE",
    centuryAH: 2,
    madhab: "Maliki",
    position: "affirmed",
    role: "Founder of the Maliki school; Imam of Medina",
    bidaStatement: "Whatever the later generations do that is good — and that the early generations did not do — is not necessarily blameworthy, as long as it does not contradict the Sunnah.",
    source: "Attributed via al-Qarafi, al-Furuq; operative in Maliki doctrine of maslaha mursala",
  },
  {
    name: "Al-Qarafi",
    slug: null,
    dates: "d. 684 AH / 1285 CE",
    centuryAH: 7,
    madhab: "Maliki",
    position: "affirmed",
    role: "Foremost Maliki jurist and legal theorist of the 7th century AH",
    bidaStatement: "Innovations are divided into five categories parallel to the five rulings of Sacred Law: obligatory, recommended, permissible, disliked, and forbidden — each governed by the principles of the Shari'a.",
    source: "al-Furuq (Anwar al-Buruq fi Anwa' al-Furuq), vol. 4",
  },
  {
    name: "Al-Zurqani",
    slug: null,
    dates: "d. 1122 AH / 1710 CE",
    centuryAH: 12,
    madhab: "Maliki",
    position: "affirmed",
    role: "Major Maliki scholar; commentator on Imam Malik's Muwatta",
    bidaStatement: "The generality of 'every innovation is misguidance' is restricted to those innovations that contradict an established principle. Good innovations that serve a recognized religious interest are not encompassed by this condemnation.",
    source: "Sharh al-Zurqani 'ala Muwatta' Imam Malik",
  },
  // HANBALI
  {
    name: "Ibn al-Jawzi",
    slug: null,
    dates: "d. 597 AH / 1201 CE",
    centuryAH: 6,
    madhab: "Hanbali",
    position: "affirmed",
    role: "Prolific Hanbali scholar; author of over 300 works in hadith and preaching",
    bidaStatement: "Not every newly introduced matter is condemned. What is condemned is what contradicts the Sunnah. As for whatever good is newly introduced that does not contradict the Sunnah, it is permissible.",
    source: "Talbis Iblis; al-Muntazam fi Tarikh al-Muluk wa al-Umam",
  },
  // DISSENTING VOICES
  {
    name: "Imam al-Shatibi",
    slug: "imam-al-shatibi",
    dates: "d. 790 AH / 1388 CE",
    centuryAH: 8,
    madhab: "Maliki",
    position: "dissenting",
    role: "Maliki legal theorist; author of al-I'tisam and al-Muwafaqat",
    bidaStatement: "Every bid'a in the technical religious sense is blameworthy. Practices that are good but not specified by the Shari'a should be classified as maslaha mursala, not bid'a hasana. (He nonetheless accepted madrasas, hadith compilation, and congregational tarawih as permissible.)",
    source: "al-I'tisam, vol. 1",
  },
  {
    name: "Ibn Taymiyya",
    slug: "ibn-taymiyya",
    dates: "d. 728 AH / 1328 CE",
    centuryAH: 8,
    madhab: "Hanbali",
    position: "dissenting",
    role: "Hanbali scholar; most frequently cited against bid'a categories",
    bidaStatement: "He considered organized mawlid a bid'a the salaf did not practice, yet wrote: \"Honoring the mawlid brings great reward due to the good intention and veneration of the Messenger\" — acknowledging the practitioner's reward.",
    source: "Iqtida al-Sirat al-Mustaqim; Majmu' al-Fatawa",
  },
];

export const SCHOLARS_BY_MADHAB: Record<Madhab, ScholarEntry[]> = {
  "Shafi'i": SCHOLAR_LINEAGE.filter((s) => s.madhab === "Shafi'i" && s.position === "affirmed"),
  Hanafi: SCHOLAR_LINEAGE.filter((s) => s.madhab === "Hanafi" && s.position === "affirmed"),
  Maliki: SCHOLAR_LINEAGE.filter((s) => s.madhab === "Maliki" && s.position === "affirmed"),
  Hanbali: SCHOLAR_LINEAGE.filter((s) => s.madhab === "Hanbali" && s.position === "affirmed"),
};

export const DISSENTING_SCHOLARS = SCHOLAR_LINEAGE.filter((s) => s.position === "dissenting");

export const MADHAB_ORDER: Madhab[] = ["Shafi'i", "Hanafi", "Maliki", "Hanbali"];

export const MADHAB_META: Record<
  Madhab,
  { light: string; dark: string; bg: string; darkBg: string; label: string }
> = {
  "Shafi'i": { light: "#1B7A4E", dark: "#4CAF7A", bg: "rgba(27,122,78,0.07)", darkBg: "rgba(76,175,122,0.1)", label: "Shafi'i" },
  Hanafi:   { light: "#27579E", dark: "#5B8EC9", bg: "rgba(39,87,158,0.07)",  darkBg: "rgba(91,142,201,0.1)",  label: "Hanafi" },
  Maliki:   { light: "#8B6914", dark: "#D4AF37", bg: "rgba(139,105,20,0.07)", darkBg: "rgba(212,175,55,0.1)", label: "Maliki" },
  Hanbali:  { light: "#7A3B3B", dark: "#C47C7C", bg: "rgba(122,59,59,0.07)",  darkBg: "rgba(196,124,124,0.1)", label: "Hanbali" },
};

export function centuryLabel(c: number): string {
  const suffix = c === 1 ? "st" : c === 2 ? "nd" : c === 3 ? "rd" : "th";
  return `${c}${suffix} Century AH`;
}
