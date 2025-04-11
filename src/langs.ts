const langObject = {
  eng: {
    flag: "eng.jpg",
    nav: {
      latest: "Pomodoro",
      about: "About Me",
      portfolio: "Portfolio",
      skills: "Skills",
      contact: "Contact Me",
    },
    hero: {
      span1: "Hi, Welcome to my Portfolio",
      span2: "My fullname is",
      fullname: "Hayitov Jahongir Akrom ugli",
      job: "I am a Web Developer and JavaScript Enthusiast",
    },
    about: {
      title: "About Me",
      info: `I am a passionate frontend developer with a solid foundation in JavaScript, TypeScript, and React. Driven by a problem-solving mindset, I specialize in building scalable, high-performance web applications. Currently, I work at the Center for the Development of Digital Education Technologies under the Ministry of Higher Education, Science, and Innovations of Uzbekistan, where I contribute to developing digital solutions aimed at improving access to education`,
      btn: "MORE INFO",
    },
    portfolio: {
      title: "PORTFOLIO",
      projects: [
        {
          name: "MY.HEMIS.UZ",
          description:
            'HEMIS (Higher Education Management Information System) - is an information system that allows you to manage the educational process online. The Hemis system included modules such as "Administrative Management", "Educational Process", "Scientific Activities" and "Financial Management". Currently, Hemis is used by more than 217 higher education institutions and more than 1 million users (students and teachers).. Used technologies: React + TS, Ant Design',
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
        {
          name: "Scivenia Beta Project",
          description: `As part of this university software project, we created a specific functionality of a bigger web app. The purpose of this function is to visually represent the scientific collaboration between researchers and scientists. I used Breadth First Search algorithm in the client side to find all collaborators of the researcher. Used technologies: React JS and Sigma JS`,
        },
        {
          name: "68th School App",
          description: `68-DIMI WebApp - This application was created for students of our school in Uzbekistan. In this project, the students can play games, solve problems, take tests and compete to win. It has a leaderboard to show top students who collect points by taking tests and exams which being organized by the App. Used technologies: HTML, CSS, JavaScript and PHP`,
        },
        {
          name: "Frontend Mentor Profile",
          description: `You can see my other frontend related work. I think this platform is one of the best for learning and gaining experience, I have had a lot of good results through the many practices I have done on this platform.`,
          btn: `Click To See <i class="fas fa-link"></i>`,
        },
      ],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      cert: [
        "Full Stack Open (Univeristy of Helsinki) - Certificate of Completion",
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
      made: `Made with <i class="fas fa-heart red-color"></i>`,
      last: "last update:",
    },
  },
  uzb: {
    flag: "uzb.jpg",
    nav: {
      latest: "Pomodoro",
      about: "Men Haqimda",
      portfolio: "Portfel",
      skills: "Skillar",
      contact: "Bog'lanish",
    },
    hero: {
      span1: "Assalomu Alaykum! Portfelimga",
      span2: "Xush Kelibsiz, mening ismim",
      fullname: "Hayitov Jahongir Akrom o'g'li",
      job: "Men JavaScriptga ishtiyoqmand Web Dasturchiman ",
    },
    about: {
      title: "MEN HAQIMDA",
      info: `Men JavaScript, TypeScript va React-da mustahkam poydevorga ega ishtiyoqli frontend dasturchisiman. Muammolarni hal qilish nuqtai nazaridan men kengaytiriladigan, yuqori samarali veb-ilovalarni yaratishga ixtisoslashganman. Hozirda men O‘zbekiston Oliy ta’lim, fan va innovatsiyalar vazirligi huzuridagi “Raqamli ta’lim texnologiyalarini rivojlantirish markazi”da ishlayman va u yerda ta’lim olish imkoniyatini yaxshilashga qaratilgan raqamli yechimlarni ishlab chiqishga hissa qo‘shaman`,
      btn: "Batafsil",
    },
    portfolio: {
      title: "PORTFEL",
      projects: [
        {
          name: "MY.HEMIS.UZ",
          description:
            'HEMIS (Higher Education Management Information System) - bu ta\'lim jarayonini onlayn boshqarish imkonini beruvchi axborot tizimi. Hemis tizimiga "Ma\'muriy Boshqaruv", "Ta\'lim Jarayoni", "Ilmiy Faoliyatlar" va "Moliyaviy Boshqaruv" kabi modullar kiradi. Hozirda Hemis tizimidan 217 dan ortiq oliy ta\'lim muassasalari va 1 milliondan ortiq foydalanuvchilar (talabalar va o\'qituvchilar) foydalanmoqda. Foydalanilgan texnologiyalar: React + TS, Ant Design',
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
        {
          name: "Scivenia Beta Loyihasi",
          description: `Ushbu universitet dasturiy loyihasining bir qismi sifatida biz kattaroq veb-ilovaning o'ziga xos funksiyasini yaratdik. Ushbu funktsiyaning maqsadi tadqiqotchilar va olimlar o'rtasidagi ilmiy hamkorlikni vizual ko'rinishda namoyish qilishdir. Men tadqiqotchining barcha hamkorlarini topish uchun mijoz tomonida "Kenglik Bo'yicha Qidirish" algoritmidan foydalandim. Foydalanilgan texnologiyalar: React JS va Sigma JS`,
        },
        {
          name: "68-DIMI App",
          description: `68-DIMI WebApp - Ushbu ilova G'uzor tumanidagi 68-sonli ixtisoslashtirilgan maktabimiz o'quvchilari uchun yaratilgan. Ushbu loyihada o'quvchilar o'yin o'ynashlari, muammolarni hal qilishlari, testlarni yechishlari va g'alaba qozonish uchun kurashishlari mumkin. Ilova tomonidan tashkil etilgan test va imtihonlarni topshirish orqali ball to'plagan eng yaxshi talabalarni ko'rsatish uchun peshqadamlar jadvali mavjud. Foydalanilgan texnologiyalar: HTML, CSS, JavaScript va PHP`,
        },
        {
          name: "Frontend Mentor Profilim",
          description: `Frontend bilan bog'liq boshqa ishlarimni ko'rishingiz mumkin. O'ylaymanki, bu platforma o'rganish va tajriba orttirish uchun eng yaxshilaridan biri, men ushbu platformada qilgan ko'plab amaliyotlarim orqali juda ko'p yaxshi natijalarga erishdim.`,
          btn: `Ko'rish Uchun Bosing <i class="fas fa-link"></i>`,
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
      made: `<i class="fas fa-heart red-color"></i> bilan qilingan!`,
      last: "oxirgi yangilanish:",
    },
  },
  deu: {
    flag: "deu.jpg",
    nav: {
      latest: "Pomodoro",
      about: "Über mich",
      portfolio: "Portfolio",
      skills: "Fähigkeiten",
      contact: "Kontaktiere",
    },
    hero: {
      span1: "Hallo, willkommen in meinem Portfolio",
      span2: "Mein ganzer Name lautet",
      fullname: "Hayitov Jahongir Akrom ugli",
      job: "Ich bin ein Webentwickler mit einer Leidenschaft für JavaScript",
    },
    about: {
      title: "Über mich",
      info: `Ich bin ein leidenschaftlicher Frontend-Entwickler mit fundierten Kenntnissen in JavaScript, TypeScript und React. Angetrieben von einer lösungsorientierten Denkweise habe ich mich auf die Entwicklung skalierbarer, leistungsstarker Webanwendungen spezialisiert. Derzeit arbeite ich am Zentrum für die Entwicklung digitaler Bildungstechnologien des usbekischen Ministeriums für Hochschulbildung, Wissenschaft und Innovation und trage dort zur Entwicklung digitaler Lösungen zur Verbesserung des Bildungszugangs bei`,
      btn: "MEHR INFO",
    },
    portfolio: {
      title: "PORTFOLIO",
      projects: [
        {
          name: "MY.HEMIS.UZ",
          description:
            'HEMIS (Higher Education Management Information System) - ist ein Informationssystem, das die Verwaltung des Bildungsprozesses online ermöglicht. Das Hemis-System umfasst Module wie "Verwaltungsmanagement", "Bildungsprozess", "Wissenschaftliche Aktivitäten" und "Finanzmanagement". Derzeit wird Hemis von mehr als 217 Hochschulen und über 1 Million Nutzern (Studenten und Lehrern) verwendet. Verwendete Technologien: React + TS, Ant Design',
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
        {
          name: "Scivenia Beta-Projekt",
          description: `Im Rahmen dieses universitären Softwareprojekts haben wir ein einzigartiges Feature einer größeren Webanwendung erstellt. Der Zweck dieser Funktion besteht darin, die wissenschaftliche Zusammenarbeit zwischen Forschern und Wissenschaftlern visuell darzustellen. Ich habe einen clientseitigen Latitude Search-Algorithmus verwendet, um alle Partner des Forschers zu finden. Verwendete Technologien: React JS und Sigma JS`,
        },
        {
          name: "68. Schulapp",
          description: `68-DIMI WebApp – Diese Anwendung wurde für Schüler unserer Fachschule Nr. 68 im Bezirk Guzor erstellt. In diesem Projekt können Schüler Spiele spielen, Probleme lösen, Tests lösen und um den Sieg kämpfen. Es gibt eine Bestenliste, auf der die besten Schüler angezeigt werden, die bei den von der App organisierten Tests und Prüfungen Punkte erzielt haben. Verwendete Technologien: HTML, CSS, JavaScript und PHP`,
        },
        {
          name: "Frontend-Mentor-Profil",
          description: `Sie können meine anderen Frontend-bezogenen Arbeiten sehen. Ich denke, dass diese Plattform eine der besten zum Lernen und Sammeln von Erfahrungen ist. Ich habe durch die vielen Übungen, die ich auf dieser Plattform durchgeführt habe, viele gute Ergebnisse erzielt.`,
          btn: `Klicke um es zu sehen <i class="fas fa-link"></i>`,
        },
      ],
    },
    achievements: {
      title: "ERFOLGE",
      cert: [
        "Full Stack Open (Univeristy of Helsinki) - Certificate of Completion",
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
      made: `Gemacht mit <i class="fas fa-heart red-color"></i>`,
      last: "letzte Aktualisierung:",
    },
  },
};

export default langObject;
