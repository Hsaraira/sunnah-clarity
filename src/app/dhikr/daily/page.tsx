import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DhikrCard from "@/components/content/DhikrCard";
import SectionDivider from "@/components/decorative/SectionDivider";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import JsonLd, { articleJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Daily Dhikr Guide",
  description:
    "Complete collection of morning and evening adhkar with Arabic text, English translation, repetition counts, and hadith-sourced benefits. From SeekersGuidance.",
  alternates: { canonical: "/dhikr/daily" },
};

const morningEveningAdhkar = [
  {
    title: "Sayyid al-Istighfar (Chief of Forgiveness Prayers)",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    translation:
      "O Allah, You are my Lord, there is no deity but You. You created me and I am Your servant. I am upon Your covenant and promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for verily none can forgive sins but You.",
    count: "x1",
    benefit:
      "Whoever says it during the day with complete belief and dies before evening will be from the people of Paradise. Whoever says it at night with complete belief and dies before morning will be from the people of Paradise.",
    source: "Sahih al-Bukhari",
    time: "both" as const,
  },
  {
    title: "Morning/Evening Declaration",
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    translation:
      "O Allah, by You we enter the morning, and by You we enter the evening. By You we live and by You we die, and to You is the final return.",
    benefit:
      "The Prophet ﷺ taught this to his Companions as a daily practice of acknowledging Allah's sovereignty over every moment of life.",
    source: "Sunan al-Tirmidhi; Sunan Ibn Majah; Musnad Ahmad",
    time: "both" as const,
  },
  {
    title: "Declaration of Islamic Faith",
    arabic:
      "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَسُنَّةِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَمِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    translation:
      "We have woken upon the natural disposition of Islam, the word of sincerity, the tradition of our Prophet Muhammad ﷺ, and the religion of our father Abraham — a monotheist, Muslim, and not of the polytheists.",
    benefit:
      "A declaration of identity and gratitude that connects you to the unbroken tradition of monotheism from Abraham to Muhammad ﷺ.",
    source: "Musnad Ahmad",
    time: "both" as const,
  },
  {
    title: "Comprehensive Protection",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي. اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي. اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    translation:
      "O Allah, I ask You for well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family, and my wealth. O Allah, cover my flaws and calm my fears. O Allah, protect me from in front of me, from behind me, from my right, from my left, from above me, and I seek refuge in Your greatness from being struck down from beneath me.",
    benefit:
      "The Prophet ﷺ never omitted this supplication — he said it every morning and every evening without fail.",
    source: "Sunan Abu Dawud; Sunan Ibn Majah; Musnad Ahmad",
    time: "both" as const,
  },
  {
    title: "Health of Body, Hearing, and Sight",
    arabic:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    translation:
      "O Allah, grant health in my body. O Allah, grant health in my hearing. O Allah, grant health in my sight. There is no deity but You.",
    count: "x3",
    benefit:
      "Abu Bakra's father heard the Prophet ﷺ make this supplication and said: 'I love to follow his Sunnah.'",
    source: "Sahih Ibn Hibban; Sunan al-Nasa'i; Musnad Ahmad",
    time: "both" as const,
  },
  {
    title: "Protection from Disbelief and Poverty",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
    translation:
      "O Allah, I seek refuge in You from disbelief and poverty. O Allah, I seek refuge in You from the punishment of the grave.",
    count: "x3",
    benefit:
      "Protection from the gravest spiritual and worldly harms — disbelief, poverty, and the trials of the grave.",
    source: "Sahih Ibn Hibban; Sunan al-Nasa'i; Musnad Ahmad",
    time: "both" as const,
  },
  {
    title: "Protection from All Harm",
    arabic:
      "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation:
      "In the name of Allah, with whose name nothing in the earth or in the sky can harm, and He is the All-Hearing, All-Knowing.",
    count: "x3",
    benefit:
      "The Prophet ﷺ said: whoever says this three times in the morning and evening, nothing will harm them.",
    source: "Sahih Ibn Hibban; al-Hakim; Sunan al-Nasa'i; Sunan Abu Dawud",
    time: "both" as const,
  },
  {
    title: "Pleasure with Allah",
    arabic:
      "رَضِيتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا",
    translation:
      "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad as my Prophet.",
    benefit:
      "The Prophet ﷺ said: whoever says this when entering the morning and evening — it is Allah's right to please them on the Day of Judgment.",
    source: "al-Hakim; Sunan al-Nasa'i; Sunan Abu Dawud",
    time: "both" as const,
  },
  {
    title: "Ya Hayyu Ya Qayyum",
    arabic:
      "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    translation:
      "O Living, O Sustainer, in Your mercy I seek relief. Correct for me all my affairs, and do not leave me to my soul for the blink of an eye.",
    benefit:
      "The Prophet ﷺ specifically taught this to his daughter Fatima (رضي الله عنها) as a morning and evening supplication.",
    source: "al-Hakim; Sunan al-Nasa'i",
    time: "both" as const,
  },
  {
    title: "Testimony Before Allah's Creation",
    arabic:
      "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللهُ لَا إِلَهَ إِلَّا أَنْتَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    translation:
      "O Allah, I have entered the morning and call You to witness, and I call to witness the bearers of Your Throne, Your angels, and all of Your creation, that You are Allah — none has the right to be worshipped but You alone — and Muhammad is Your servant and Your messenger.",
    count: "x4",
    benefit:
      "Saying it once frees a quarter from the Fire. Twice frees half. Three times frees three-quarters. Four times frees entirely from the Fire.",
    source: "Sunan Abu Dawud; Sunan al-Tirmidhi; al-Tabarani",
    time: "both" as const,
  },
  {
    title: "Protection from Satan (Abu Bakr's Du'a)",
    arabic:
      "اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، لَا إِلَهَ إِلَّا أَنْتَ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
    translation:
      "O Allah, Creator of the heavens and the earth, Knower of the unseen and the seen. There is no deity except You, Lord of everything and its King. I seek refuge in You from the evil of my soul, from the evil of Satan and his shirk, and from committing wrong against myself or bringing it upon a Muslim.",
    benefit:
      "The Prophet ﷺ personally taught this to Abu Bakr al-Siddiq (رضي الله عنه) for morning and evening recitation.",
    source: "Sunan al-Tirmidhi; Musnad Ahmad",
    time: "both" as const,
  },
  {
    title: "Ayat al-Kursi",
    arabic:
      "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    translation:
      "Allah! There is no god except Him, the Ever-Living, All-Sustaining. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who could possibly intercede with Him without His permission? He fully knows what is ahead of them and what is behind them, but no one can grasp any of His knowledge except what He wills. His Seat encompasses the heavens and the earth, and the preservation of both does not tire Him. For He is the Most High, the Greatest.",
    count: "x1",
    benefit:
      "Whoever recites this in the morning will be protected from the jinn until evening. Whoever recites it in the evening will be protected until morning.",
    source: "Quran 2:255; Sahih Ibn Hibban; al-Hakim",
    time: "both" as const,
  },
  {
    title: "The Three Quls",
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ... قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    translation:
      "Recite Surat al-Ikhlas (112), Surat al-Falaq (113), and Surat al-Nas (114).",
    count: "x3 each",
    benefit:
      "The Prophet ﷺ would gather his palms, blow into them, recite these three surahs, then wipe over as much of his body as he could — starting with his head and face — doing this three times.",
    source: "Sahih al-Bukhari",
    time: "both" as const,
  },
  {
    title: "Beneficial Knowledge",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    translation:
      "O Allah, I ask You for beneficial knowledge, goodly provision, and acceptable deeds.",
    benefit:
      "The Prophet ﷺ would say this after concluding the morning (Fajr) prayer.",
    source: "Sunan al-Nasa'i; Sunan Ibn Majah; Musnad Ahmad",
    time: "morning" as const,
  },
  {
    title: "SubhanAllah wa Bihamdihi (Weighted Version)",
    arabic:
      "سُبْحَانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَى نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    translation:
      "Glory be to Allah and praise be to Him — to the number of His creatures, in accordance with His good pleasure, to the weight of His Throne, and to the extent of His words.",
    count: "x3",
    benefit:
      "The Prophet ﷺ told Juwayriya that these four phrases, said three times, outweigh hours of continuous dhikr.",
    source: "Sahih Muslim; Sunan Abu Dawud; Musnad Ahmad",
    time: "morning" as const,
  },
];

const anytimeAdhkar = [
  {
    title: "Istighfar (Seeking Forgiveness)",
    arabic: "أَسْتَغْفِرُ اللهَ",
    translation: "I seek Allah's forgiveness.",
    count: "x100",
    benefit:
      "The Prophet ﷺ said: 'Indeed, my heart becomes clouded, and I seek Allah's forgiveness a hundred times a day.' If the Prophet ﷺ — who was sinless — sought forgiveness this much, how much more should we?",
    source: "Sahih Muslim",
    time: "anytime" as const,
  },
  {
    title: "La ilaha illallah (Declaration of Oneness)",
    arabic:
      "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    translation:
      "There is no deity except Allah alone. He has no partners. To Him belongs the dominion and all praise, and He is over all things omnipotent.",
    count: "x100",
    benefit:
      "Equivalent to freeing ten slaves. One hundred good deeds written, one hundred bad deeds wiped away. Protection from Satan for the entire day until evening. No one brings anything better except someone who has done more.",
    source: "Sahih al-Bukhari; Sahih Muslim",
    time: "anytime" as const,
  },
  {
    title: "SubhanAllah wa Bihamdihi",
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    translation: "Glory be to Allah and praise be to Him.",
    count: "x100",
    benefit:
      "The Prophet ﷺ said: 'Whoever says this a hundred times a day will have his sins wiped away, even if they were as much as the foam of the sea.'",
    source: "Sahih al-Bukhari; Sahih Muslim",
    time: "anytime" as const,
  },
  {
    title: "The Four Beloved Words",
    arabic:
      "سُبْحَانَ اللهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ",
    translation:
      "Glory be to Allah. Praise be to Allah. There is no deity except Allah. Allah is the Greatest.",
    count: "x100 each",
    benefit:
      "The Prophet ﷺ said: 'The most beloved words to Allah are four: SubhanAllah, Alhamdulillah, La ilaha illallah, Allahu Akbar. It does not matter with which of them you start.' Each 100 carries immense reward — equivalent to freeing slaves, saddled horses for jihad, and sacrificial camels.",
    source: "Sahih Muslim; Sunan al-Nasa'i; al-Tabarani; al-Bayhaqi",
    time: "anytime" as const,
  },
  {
    title: "Salawat on the Prophet ﷺ",
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ",
    translation:
      "O Allah, send Your blessings upon our Master Muhammad, and upon his family and companions, and grant them peace.",
    benefit:
      "Allah commands it in the Quran (33:56). The Prophet ﷺ said: 'Whoever sends one blessing upon me, Allah sends ten blessings upon him.' When Ubayy ibn Ka'b asked if he should dedicate all his supplication to salawat, the Prophet ﷺ said: 'Then your worries will be taken care of, and your sins will be forgiven.'",
    source: "Quran 33:56; Sahih Muslim; Sunan al-Tirmidhi; Musnad Ahmad",
    time: "anytime" as const,
  },
  {
    title: "The Comprehensive Dhikr",
    arabic:
      "لَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    translation:
      "There is no deity except Allah, and Allah is the Greatest, and there is no power and no strength except with Allah.",
    benefit:
      "The Prophet ﷺ said: 'There is no one on earth who says this except that his sins are forgiven, even if they were as much as the foam of the sea.'",
    source: "al-Hakim; Sunan al-Tirmidhi",
    time: "anytime" as const,
  },
];

export default function DailyDhikrPage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Daily Dhikr Guide",
          description:
            "Complete collection of morning and evening adhkar with Arabic text, English translation, and hadith-sourced benefits.",
          url: "https://sunnahclarity.org/dhikr/daily",
        })}
      />
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20">
          <GeometricPattern opacity={0.04} />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <p
              className="text-sm mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Remembrance of Allah
            </p>
            <h1>Daily Dhikr Guide</h1>
            <p
              className="mt-4 text-lg max-w-xl mx-auto"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              The prophetic adhkar for morning, evening, and throughout the day —
              with Arabic text, English translation, repetition counts, and
              hadith-sourced benefits.
            </p>
            <p
              className="mt-3 text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Sourced from{" "}
              <a
                href="https://seekersguidance.org/answers/general-answers-feeds/what-daily-adhkar-invocations-should-be-recited/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--color-primary)" }}
              >
                SeekersGuidance
              </a>{" "}
              — answered by Shaykh Dr. Muhammad Fayez Awad
            </p>
          </div>
        </section>

        <SectionDivider />

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2">Morning &amp; Evening Adhkar</h2>
            <p
              className="mb-8 text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Recite in the morning (after Fajr until sunrise) and in the
              evening (after Asr until Maghrib). If missed, recite as soon as
              you remember.
            </p>
            <div className="space-y-4">
              {morningEveningAdhkar.map((dhikr) => (
                <DhikrCard key={dhikr.title} {...dhikr} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section
          className="py-12 sm:py-16"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2">Adhkar for Anytime</h2>
            <p
              className="mb-8 text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              These can be recited at any time throughout the day. The Prophet ﷺ
              encouraged frequent remembrance at all times.
            </p>
            <div className="space-y-4">
              {anytimeAdhkar.map((dhikr) => (
                <DhikrCard key={dhikr.title} {...dhikr} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
