const langObject = {
  eng: {
    flag: "eng.jpg",
    nav: {
      about: "About Me",
      portfolio: "Portfolio",
      skills: "Skills",
      contact: "Contact Me",
    },
    hero: {
      span1: "Hi, welcome to my portfolio",
      span2: "I am",
      fullname: "Hayitov Jahongir",
      job: "Full-Stack Developer",
    },
    about: {
      title: "About Me",
      info: `Full-stack developer building scalable, high-performance web applications with React, Next.js, NestJS and PostgreSQL. I work at the Center for the Development of Digital Education and Artificial Intelligence under the Ministry of Higher Education, Science and Innovations of Uzbekistan, developing digital solutions that improve access to education.`,
      btn: "MORE INFO",
    },
    portfolio: {
      title: "PORTFOLIO",
      projects: [
        {
          name: "FOTSPOT.UZ",
          description:
            "A platform that helps grassroots football players in Uzbekistan get discovered. Players build a professional profile backed by video evidence, scouts recommend talent, and academies search by age, position and region, invite players to closed trials and manage squads in one system. Players can also apply directly to open trials. Technologies: Next.js, NestJS, PostgreSQL",
        },
        {
          name: "MY.HEMIS.UZ",
          description:
            'HEMIS (Higher Education Management Information System) - is an information system that allows you to manage the educational process online. The Hemis system included modules such as "Administrative Management", "Educational Process", "Scientific Activities" and "Financial Management". Currently, Hemis is used by more than 217 higher education institutions and more than 1 million users (students and teachers). Used technologies: React + TS, Ant Design',
        },
        {
          name: "TYUTOR.HEMIS.UZ",
          description:
            "The tutor module of the HEMIS ecosystem, built for university tutors who support student groups. Part of the national higher education information system. Technologies: React + TS, Ant Design",
        },
        {
          name: "TEACHER.HEMIS.UZ",
          description:
            "The teacher portal of the HEMIS ecosystem, built for university instructors. Part of the national higher education information system. Technologies: React + TS, Ant Design",
        },
        {
          name: "MUHANDIS.EDU.UZ",
          description:
            "Teachers, students and practicing engineers can participate in the Republican competition in engineering areas conducted by the Ministry of Higher Education and Innovation",
        },
        {
          name: "Checklist Bot",
          description:
            "A customizable task and activity tracker for workouts, learning, and personal goals. Users can create tasks, track progress, and receive daily summaries via Telegram. Features include dark/light mode, multilingual support, and a responsive UI.",
        },
        {
          name: "LESSON-SCHEDULE-REACT",
          description:
            "The lesson-schedule-react package provides a customizable timetable component for React applications. It allows users to create lesson schedules with ease by simply passing schedule items as props. The timetable can display schedules on a daily or weekly basis and supports custom schedule components, multiple languages, and theme customization. It also offers a lightweight version without configurations for more flexibility. Used technologies: React + TS, Ant Design",
        },
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab is an online platform for sharing the necessary and important information for those interested in the world of cryptocurrencies. Conveniently, you'll be able to get detailed information about your favorite cryptocurrencies and see their prices over time, keep up with the latest news, and convert between cryptocurrencies as research. Used technologies: React + TS, Ant Design, Redux-Toolkit",
        },
      ],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      cert: [
        "Full Stack Open (University of Helsinki) - Certificate of Completion",
        "Front End Libraries Certification - freeCodeCamp",
        "Grant Offer from Innopolis University",
        "Udacity Nanodegree of Front End Development",
        "International Informatics Olympiad qualifying round",
      ],
    },
    skills: {
      title: "SKILLS",
      now: "USING NOW",
      learn: "LEARNING",
      other: "OTHER SKILLS",
    },
    contact: {
      title: "CONTACT ME",
      last: "last update:",
    },
  },
  uzb: {
    flag: "uzb.jpg",
    nav: {
      about: "Men Haqimda",
      portfolio: "Portfel",
      skills: "Skillar",
      contact: "Bog'lanish",
    },
    hero: {
      span1: "Assalomu Alaykum! Portfelimga",
      span2: "Xush Kelibsiz, mening ismim",
      fullname: "Hayitov Jahongir",
      job: "Full-Stack dasturchi",
    },
    about: {
      title: "MEN HAQIMDA",
      info: `Kengaytiriladigan, yuqori samarali veb-ilovalarni React, Next.js, NestJS va PostgreSQL yordamida yaratadigan full-stack dasturchiman. Hozirda O‘zbekiston Oliy ta’lim, fan va innovatsiyalar vazirligi huzuridagi “Raqamli ta’lim va sun’iy intellektni rivojlantirish markazi”da ishlayman va ta’lim olish imkoniyatini yaxshilashga qaratilgan raqamli yechimlarni ishlab chiqaman.`,
      btn: "Batafsil",
    },
    portfolio: {
      title: "PORTFEL",
      projects: [
        {
          name: "FOTSPOT.UZ",
          description:
            "O'zbekistondagi mahalla futbolchilariga o'z iste'dodini ko'rsatishda yordam beradigan platforma. Futbolchilar video-isbotga asoslangan professional profil yaratadi, skautlar iste'dodlarni tavsiya qiladi, akademiyalar esa yosh, pozitsiya va hudud bo'yicha qidiradi, yopiq sinovlarga taklif qiladi va tarkibni yagona tizimda boshqaradi. Futbolchilar ochiq sinovlarga bevosita ariza ham bera oladi. Texnologiyalar: Next.js, NestJS, PostgreSQL",
        },
        {
          name: "MY.HEMIS.UZ",
          description:
            'HEMIS (Higher Education Management Information System) - bu ta\'lim jarayonini onlayn boshqarish imkonini beruvchi axborot tizimi. Hemis tizimiga "Ma\'muriy Boshqaruv", "Ta\'lim Jarayoni", "Ilmiy Faoliyatlar" va "Moliyaviy Boshqaruv" kabi modullar kiradi. Hozirda Hemis tizimidan 217 dan ortiq oliy ta\'lim muassasalari va 1 milliondan ortiq foydalanuvchilar (talabalar va o\'qituvchilar) foydalanmoqda. Foydalanilgan texnologiyalar: React + TS, Ant Design',
        },
        {
          name: "TYUTOR.HEMIS.UZ",
          description:
            "HEMIS ekotizimining tyutorlar uchun mo'ljallangan moduli: talabalar guruhlari bilan ishlovchi tyutorlarga xizmat qiladi. Oliy ta'limning yagona axborot tizimi tarkibiga kiradi. Texnologiyalar: React + TS, Ant Design",
        },
        {
          name: "TEACHER.HEMIS.UZ",
          description:
            "HEMIS ekotizimining o'qituvchilar uchun mo'ljallangan portali. Oliy ta'limning yagona axborot tizimi tarkibiga kiradi. Texnologiyalar: React + TS, Ant Design",
        },
        {
          name: "MUHANDIS.EDU.UZ",
          description:
            "Oliy taʼlim va innovatsiyalar vazirligi tomonidan muhandislik yoʻnalishlari boʻyicha oʻtkaziladigan Respublika tanlovida oʻqituvchilar, talabalar va amaliyotchi muhandislar ishtirok etishlari mumkin.",
        },
        {
          name: "Checklist Bot",
          description:
            "Mashqlar, o'rganish va shaxsiy maqsadlar uchun sozlanadigan vazifa va faoliyat kuzatuvchisi. Foydalanuvchilar Telegram orqali vazifalar yaratishi, ishning borishini kuzatishi va kundalik xulosalarni olishlari mumkin. Xususiyatlarga qorong'u/yorug'lik rejimi, ko'p tilli yordam va sezgir UI kiradi.",
        },
        {
          name: "LESSON-SCHEDULE-REACT",
          description:
            "lesson-schedule-react - bu React ilovalari uchun moslashtirilgan jadval komponentini taqdim etuvchi paket. Bu foydalanuvchilarga jadval elementlarini property sifatida berish orqali osonlik bilan dars jadvallarini yaratish imkonini beradi. Jadval kunlik yoki haftalik jadvallarni ko'rsatishi mumkin va maxsus jadval komponentlarini, bir nechta tillarni va mavzuni sozlashni qo'llab-quvvatlaydi. Bundan tashqari, ko'proq moslashuvchanlik uchun konfiguratsiyalarsiz yengil versiyani taklif qiladi. Ishlatilgan texnologiyalar: React + TS, Ant Design",
        },
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab - Kriptovalyutalar dunyosiga qiziquvchilar uchun kerakli va muhim bo'lgan ma'lumotlarni onlayn ulashish platformasi. Qulayliklari, siz o'zingizga yoqgan kripto tangalar haqida batafsil ma'lumot olishingiz va turli davrlar oralig'idagi narxlari bilan tanishib chiqish, eng yangi xabarlardan boxabar bo'lish va tadqiqot sifatida kripto tangalar o'rtasida konvertatsiya qilish imkoniyatiga ega bo'lasiz. Foydalanilgan texnologiyalar: React + TS, Ant Design, Redux-Toolkit",
        },
      ],
    },
    achievements: {
      title: "YUTUQLARIM",
      cert: [
        "Full Stack Open (Helsinki Universiteti) - Bitiruv Sertifikati",
        "Front End Kutubxonalari Sertifikati - freeCodeCamp",
        "Innopolis universitetidan grant taklifi",
        "Front End Development bo'yicha Udacitydan Nanodaraja",
        "Xalqaro informatika olimpiadasining Respublika saralash bosqichi",
      ],
    },
    skills: {
      title: "SKILLAR",
      now: "HOZIR AMALIYOTDA",
      learn: "O'RGANISHDA",
      other: "BOSHQA SKILLAR",
    },
    contact: {
      title: "BOG'LANISH",
      last: "oxirgi yangilanish:",
    },
  },
  deu: {
    flag: "deu.jpg",
    nav: {
      about: "Über mich",
      portfolio: "Portfolio",
      skills: "Fähigkeiten",
      contact: "Kontaktiere",
    },
    hero: {
      span1: "Hallo, willkommen in meinem Portfolio",
      span2: "Mein ganzer Name lautet",
      fullname: "Hayitov Jahongir",
      job: "Full-Stack-Entwickler",
    },
    about: {
      title: "Über mich",
      info: `Full-Stack-Entwickler für skalierbare, leistungsstarke Webanwendungen mit React, Next.js, NestJS und PostgreSQL. Ich arbeite am Zentrum für die Entwicklung digitaler Bildung und Künstlicher Intelligenz des usbekischen Ministeriums für Hochschulbildung, Wissenschaft und Innovation und entwickle digitale Lösungen, die den Zugang zu Bildung verbessern.`,
      btn: "MEHR INFO",
    },
    portfolio: {
      title: "PORTFOLIO",
      projects: [
        {
          name: "FOTSPOT.UZ",
          description:
            "Eine Plattform, die Nachwuchsfußballern in Usbekistan hilft, entdeckt zu werden. Spieler erstellen ein professionelles Profil mit Videobelegen, Scouts empfehlen Talente, Akademien suchen nach Alter, Position und Region, laden zu geschlossenen Probetrainings ein und verwalten Kader in einem System. Spieler können sich auch direkt für offene Probetrainings bewerben. Technologien: Next.js, NestJS, PostgreSQL",
        },
        {
          name: "MY.HEMIS.UZ",
          description:
            'HEMIS (Higher Education Management Information System) - ist ein Informationssystem, das die Verwaltung des Bildungsprozesses online ermöglicht. Das Hemis-System umfasst Module wie "Verwaltungsmanagement", "Bildungsprozess", "Wissenschaftliche Aktivitäten" und "Finanzmanagement". Derzeit wird Hemis von mehr als 217 Hochschulen und über 1 Million Nutzern (Studenten und Lehrern) verwendet. Verwendete Technologien: React + TS, Ant Design',
        },
        {
          name: "TYUTOR.HEMIS.UZ",
          description:
            "Das Tutorenmodul des HEMIS-Ökosystems für Hochschultutoren, die Studierendengruppen betreuen. Teil des nationalen Informationssystems für die Hochschulbildung. Technologien: React + TS, Ant Design",
        },
        {
          name: "TEACHER.HEMIS.UZ",
          description:
            "Das Lehrendenportal des HEMIS-Ökosystems für Hochschuldozenten. Teil des nationalen Informationssystems für die Hochschulbildung. Technologien: React + TS, Ant Design",
        },
        {
          name: "MUHANDIS.EDU.UZ",
          description:
            "Lehrer, Studenten und praktizierende Ingenieure können am republikanischen Wettbewerb in Ingenieurbereichen teilnehmen, der vom Ministerium für Hochschulbildung und Innovation durchgeführt wird",
        },
        {
          name: "Checklist Bot",
          description:
            "Ein anpassbarer Aufgaben- und Aktivitätstracker für Training, Lernen und persönliche Ziele. Nutzer können Aufgaben erstellen, Fortschritte verfolgen und tägliche Zusammenfassungen per Telegram erhalten. Zu den Funktionen gehören Dunkel-/Hellmodus, mehrsprachige Unterstützung und eine responsive Benutzeroberfläche.",
        },
        {
          name: "LESSON-SCHEDULE-REACT",
          description:
            "Das Paket lesson-schedule-react bietet eine anpassbare Stundenplankomponente für React-Anwendungen. Es ermöglicht Benutzern, mühelos Stundenpläne zu erstellen, indem sie einfach Stundenplanelemente als Requisiten übergeben. Der Stundenplan kann Stundenpläne auf täglicher oder wöchentlicher Basis anzeigen und unterstützt benutzerdefinierte Stundenplankomponenten, mehrere Sprachen und die Anpassung von Themen. Es bietet auch eine leichte Version ohne Konfigurationen für mehr Flexibilität. Verwendete Technologien: React + TS, Ant Design",
        },
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab ist eine Online-Plattform zum Austausch notwendiger und wichtiger Informationen für diejenigen, die sich für die Welt der Kryptowährungen interessieren. Praktischerweise können Sie detaillierte Informationen über Ihre bevorzugten Kryptowährungen abrufen und deren Preise im Laufe der Zeit verfolgen, über die neuesten Nachrichten auf dem Laufenden bleiben und als Recherche zwischen Kryptowährungen umrechnen. Verwendete Technologien: React + TS, Ant Design, Redux-Toolkit",
        },
      ],
    },
    achievements: {
      title: "ERFOLGE",
      cert: [
        "Full Stack Open (University of Helsinki) - Certificate of Completion",
        "Front-End-Bibliotheks-Zertifizierung – freeCodeCamp",
        "Stipendienangebot der Innopolis University",
        "Udacity Nanodegree der Front-End-Entwicklung",
        "Republikanische Qualifikationsphase der Internationalen Informatik-olympiade",
      ],
    },
    skills: {
      title: "FÄHIGKEITEN",
      now: "JETZT VERWENDEN",
      learn: "LERNEN",
      other: "ANDERE FÄHIGKEITEN",
    },
    contact: {
      title: "KONTAKTIERE MICH",
      last: "letzte Aktualisierung:",
    },
  },
};

export default langObject;
