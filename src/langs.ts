import { description, name } from "commander";

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
      info: `I am a ${
        new Date().getFullYear() - 2004
      } year old Web Developer. Currently, I am a Frontend developer at the "Center for the Development of Digital Education Technologies" under the Ministry of Higher Education, Science, and Innovations of the Republic of Uzbekistan. Innopolis University courses helped me to learn the basic concepts of "Software Design", "Data Structures and Algorithms", especially "Graph Theory". In addition, I try to solve problems of various difficulties on the Leetcode platform every day using my favorite programming languages JavaScript and C++. I think these skills of mine will help you!`,
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
          name: "LESSON-SCHEDULE-REACT",
          description:
            "The lesson-schedule-react package provides a customizable timetable component for React applications. It allows users to create lesson schedules with ease by simply passing schedule items as props. The timetable can display schedules on a daily or weekly basis and supports custom schedule components, multiple languages, and theme customization. It also offers a lightweight version without configurations for more flexibility. Used technologies: React + TS, Ant Design",
        },
        {
          name: "Sertifikat.edu.uz",
          description:
            "This website provides a database of international certificates for languages ​​and general education subjects recognized in the Republic of Uzbekistan. The site's main purpose is to provide information about educational tools, pedagogues, government agencies, international certification control processes, and security. Used technologies: Next.js, React + TS, Ant Design",
        },
        {
          name: "EDUCAP Tournament Website",
          description:
            "The ESports EDUCAP Tournament website showcases the 2024 e-sports competition organized by the Ministry of Higher Education, Science, and Innovation in Tashkent, held from May 10-23. The event aimed to popularize e-sports and train students to work with information systems, equipping them with the skills to host large-scale tournaments in the future. Used technologies: Next.js, React + TS, Ant Design",
        },
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab is an online platform for sharing the necessary and important information for those interested in the world of cryptocurrencies. Conveniently, you'll be able to get detailed information about your favorite cryptocurrencies and see their prices over time, keep up with the latest news, and convert between cryptocurrencies as research. Used technologies: React + TS, Ant Design, Redux-Toolkit",
        },
        {
          name: "Pomodoro 25+5",
          description: `This project is among the assignments of the "freeCodeCamp" course. A Pomodoro app is a time management tool that helps users break their work into intervals called "pomodoros," traditionally 25 minutes in length, separated by short breaks. The Pomodoro technique aims to improve productivity and focus by breaking down work into manageable chunks. Used technologies: React + TS, SASS`,
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
      info: `Men ${
        new Date().getFullYear() - 2004
      } yoshli Web Dasturchiman. Hozirda O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi huzuridagi "Raqamli ta'lim texnologiyalarini rivojlantirish markazi"da Frontend dasturchiman. Innopolis Universiteti kurslari menga "Dasturiy Ta'minotni Loyihalash", "Ma'lumotlar Tuzilmalari va Algoritmlar"ning asosiy tushunchalarini, ayniqsa "Graf Nazariyasi"ni o'rganishga yordam berdi. Bundan tashqari, men har kuni Leetcode platformasidagi turli qiyinchilikdagi masalalarni sevimli JavaScript va C++ dasturlash tillari yordamida yechishga harakat qilaman. O'ylashimcha, mening bu qobiliyatlarim sizga yordam beradi!`,
      btn: "Ko'proq Bilish",
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
          name: "LESSON-SCHEDULE-REACT",
          description:
            "lesson-schedule-react - bu React ilovalari uchun moslashtirilgan jadval komponentini taqdim etuvchi paket. Bu foydalanuvchilarga jadval elementlarini property sifatida berish orqali osonlik bilan dars jadvallarini yaratish imkonini beradi. Jadval kunlik yoki haftalik jadvallarni ko'rsatishi mumkin va maxsus jadval komponentlarini, bir nechta tillarni va mavzuni sozlashni qo'llab-quvvatlaydi. Bundan tashqari, ko'proq moslashuvchanlik uchun konfiguratsiyalarsiz yengil versiyani taklif qiladi. Ishlatilgan texnologiyalar: React + TS, Ant Design",
        },
        {
          name: "Sertifikat.edu.uz",
          description:
            "Ushbu veb-sayt Oʻzbekiston Respublikasida tan olingan tillar va umumtaʼlim fanlari boʻyicha xalqaro sertifikatlar maʼlumotlar bazasini taqdim etadi. Saytning asosiy maqsadi ta’lim vositalari, pedagoglar, davlat idoralari, xalqaro sertifikatlashtirish nazorati jarayonlari va xavfsizlik haqida ma’lumot berishdir. Foydalanilgan texnologiyalar: Next.js, React + TS, Ant Design",
        },
        {
          name: "EDUCAP Turniri Web-sayti",
          description:
            "ESports EDUCAP Turniri veb-saytida 10-23 may kunlari Toshkentda Oliy taʼlim, fan va innovatsiyalar vazirligi tomonidan oʻtkaziladigan 2024 yilgi e-sport musobaqasi namoyish etilgan. Tadbirdan ko‘zlangan maqsad kibersportni ommalashtirish va o‘quvchilarni axborot tizimlari bilan ishlashga o‘rgatish, ularni kelajakda keng ko‘lamli turnirlar o‘tkazish ko‘nikmasini shakllantirishdan iborat edi. Foydalanilgan texnologiyalar: Next.js, React + TS, Ant Design",
        },
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab - Kriptovalyutalar dunyosiga qiziquvchilar uchun kerakli va muhim bo'lgan ma'lumotlarni onlayn ulashish platformasi. Qulayliklari, siz o'zingizga yoqgan kripto tangalar haqida batafsil ma'lumot olishingiz va turli davrlar oralig'idagi narxlari bilan tanishib chiqish, eng yangi xabarlardan boxabar bo'lish va tadqiqot sifatida kripto tangalar o'rtasida konvertatsiya qilish imkoniyatiga ega bo'lasiz. Foydalanilgan texnologiyalar: React + TS, Ant Design, Redux-Toolkit",
        },
        {
          name: "Pomodoro 25+5",
          description: `Ushbu loyiha "freeCodeCamp" kursining topshiriqlari qatoriga kiradi. Pomodoro ilovasi vaqtni boshqarish vositasi boʻlib, foydalanuvchilarga oʻz ishlarini qisqa tanaffuslar bilan ajratilgan, anʼanaviy ravishda 25 daqiqalik “pomodorolar” deb nomlangan intervallarga ajratishga yordam beradi. Pomodoro texnikasi ishni boshqariladigan bo'laklarga bo'lish orqali samaradorlikni oshirish va diqqatni jamlashga qaratilgan. Foydalanilgan texnologiyalar: React + TS, SASS`,
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
      info: `Ich bin ein ${
        new Date().getFullYear() - 2004
      }-jähriger Webentwickler. Derzeit bin ich Frontend-Entwickler im "Zentrum für die Entwicklung digitaler Bildungstechnologien" unter dem Ministerium für Hochschulbildung, Wissenschaft und Innovationen der Republik Usbekistan. Die Kurse der Innopolis University haben mir geholfen, die Grundkonzepte von „Softwaredesign“, „Datenstrukturen und Algorithmen“ und insbesondere „Graphentheorie“ zu erlernen. Darüber hinaus versuche ich täglich, Probleme unterschiedlicher Schwierigkeitsgrade auf der Leetcode-Plattform zu lösen, indem ich meine Lieblingsprogrammiersprachen JavaScript und C++ verwende. Ich denke, diese meiner Fähigkeiten werden Ihnen helfen!`,
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
          name: "LESSON-SCHEDULE-REACT",
          description:
            "Das Paket lesson-schedule-react bietet eine anpassbare Stundenplankomponente für React-Anwendungen. Es ermöglicht Benutzern, mühelos Stundenpläne zu erstellen, indem sie einfach Stundenplanelemente als Requisiten übergeben. Der Stundenplan kann Stundenpläne auf täglicher oder wöchentlicher Basis anzeigen und unterstützt benutzerdefinierte Stundenplankomponenten, mehrere Sprachen und die Anpassung von Themen. Es bietet auch eine leichte Version ohne Konfigurationen für mehr Flexibilität. Verwendete Technologien: React + TS, Ant Design",
        },
        {
          name: "Sertifikat.edu.uz",
          description:
            "Diese Website bietet eine Datenbank mit internationalen Zertifikaten für Sprachen und allgemeinbildende Fächer, die in der Republik Usbekistan anerkannt sind. Der Hauptzweck der Website besteht darin, Informationen über Bildungsinstrumente, Pädagogen, Regierungsbehörden, internationale Zertifizierungskontrollprozesse und Sicherheit bereitzustellen. Verwendete Technologien: Next.js, React + TS, Ant Design",
        },
        {
          name: "EDUCAP-Turnier Website",
          description:
            "Auf der Website des ESports EDUCAP Tournament wird der E-Sport-Wettbewerb 2024 vorgestellt, der vom Ministerium für Hochschulbildung, Wissenschaft und Innovation in Taschkent organisiert wird und vom 10. bis 23. Mai stattfindet. Ziel der Veranstaltung war es, E-Sport populär zu machen und Studenten im Umgang mit Informationssystemen auszubilden, um sie mit den Fähigkeiten auszustatten, in Zukunft große Turniere auszurichten. Verwendete Technologien: Next.js, React + TS, Ant Design",
        },
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab ist eine Online-Plattform zum Austausch notwendiger und wichtiger Informationen für diejenigen, die sich für die Welt der Kryptowährungen interessieren. Praktischerweise können Sie detaillierte Informationen über Ihre bevorzugten Kryptowährungen abrufen und deren Preise im Laufe der Zeit verfolgen, über die neuesten Nachrichten auf dem Laufenden bleiben und als Recherche zwischen Kryptowährungen umrechnen. Verwendete Technologien: React + TS, Ant Design, Redux-Toolkit",
        },
        {
          name: "Pomodoro 25+5",
          description: `Dieses Projekt gehört zu den Aufgaben des Kurses „freeCodeCamp“. Eine Pomodoro-App ist ein Zeitmanagement-Tool, das Benutzern hilft, ihre Arbeit in Intervalle namens „Pomodoros“ aufzuteilen, die traditionell 25 Minuten lang sind und durch kurze Pausen getrennt sind. Die Pomodoro-Technik zielt darauf ab, die Produktivität und Konzentration zu verbessern, indem sie die Arbeit in überschaubare Abschnitte aufteilt. Verwendete Technologien: React + TS, SASS`,
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
