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
      } year old Web Developer. I am currently studying at the Tashkent Institute of Textile and Light Industry in Uzbekistan and in my spare time I am studying modern libraries and frameworks in the field of Web Development, and I have tried myself in several small projects so far. Innopolis University courses helped me to learn the basic concepts of "Software Design", "Data Structures and Algorithms", especially "Graph Theory". In addition, I try to solve problems of various difficulties on the Leetcode platform every day using my favorite programming languages JavaScript and C++. I think these skills of mine will help you!`,
      btn: "MORE INFO",
    },
    portfolio: {
      title: "PORTFOLIO",
      projects: [
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab is an online platform for sharing the necessary and important information for those interested in the world of cryptocurrencies. Conveniently, you'll be able to get detailed information about your favorite cryptocurrencies and see their prices over time, keep up with the latest news, and convert between cryptocurrencies as research. Used technologies: React + TS, Ant Design, Redux-Toolkit",
        },
        {
          name: "Pomodoro 25+5",
          description: `This project is among the assignments of the "freeCodeCamp" course. A Pomodoro app is a time management tool that helps users break their work into intervals called "pomodoros," traditionally 25 minutes in length, separated by short breaks. The Pomodoro technique aims to improve productivity and focus by breaking down work into manageable chunks.`,
        },
        {
          name: "Pokemono",
          description: `"Pokemon" is a web application that I created in the RS School project. It allows users to view a list of Pokemon. Provides details such as Pokemon's name, picture, and other relevant information. It uses an architecture based on React components to efficiently manage and update the User Interface, providing a responsive and interactive experience for users interested in learning Pokemon information. Technologies used: React JS, TypeScript, Sass`,
        },
        {
          name: "Todo List App",
          description: `I used Binary Search Algorithm to make Reactive state manually in JavaScript by efficiently finding the index of the clicked element from the list of Todos, this enhanced the process of editing and deleting a list. Before deleting, it will show you a modal. I added "Clear All" button to clear everything and a new "read the whole text" function since the text content for list is limited`,
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
          name: "Apple Layout",
          description: `I was going to sharpen my CSS skills to work with Flexbox ang Grid Layouts. I choose Apple's website and tried to build its clone. I hope this layout looks like the real Apple Website. Used technologies: HTML and CSS`,
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
      } yoshli Web Dasturchiman. Hozirda O‘zbekistondagi Toshkent to‘qimachilik va yengil sanoat institutida tahsil olyapman va bo‘sh vaqtimda Web Development bo‘yicha ushbu sohadagi zamonaviy kutubxona va freymvorklarni o‘rganyapman, shuningdek, hozirgacha bir qancha kichik loyihalarda o'zimni sinab ko'rganman. Innopolis Universiteti kurslari menga "Dasturiy Ta'minotni Loyihalash", "Ma'lumotlar Tuzilmalari va Algoritmlar"ning asosiy tushunchalarini, ayniqsa "Graf Nazariyasi"ni o'rganishga yordam berdi. Bundan tashqari, men har kuni Leetcode platformasidagi turli qiyinchilikdagi masalalarni sevimli JavaScript va C++ dasturlash tillari yordamida yechishga harakat qilaman. O'ylashimcha, mening bu qobiliyatlarim sizga yordam beradi!`,
      btn: "Ko'proq Bilish",
    },
    portfolio: {
      title: "PORTFEL",
      projects: [
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab - Kriptovalyutalar dunyosiga qiziquvchilar uchun kerakli va muhim bo'lgan ma'lumotlarni onlayn ulashish platformasi. Qulayliklari, siz o'zingizga yoqgan kripto tangalar haqida batafsil ma'lumot olishingiz va turli davrlar oralig'idagi narxlari bilan tanishib chiqish, eng yangi xabarlardan boxabar bo'lish va tadqiqot sifatida kripto tangalar o'rtasida konvertatsiya qilish imkoniyatiga ega bo'lasiz. Foydalanilgan texnologiyalar: React + TS, Ant Design, Redux-Toolkit",
        },
        {
          name: "Pomodoro 25+5",
          description: `Ushbu loyiha "freeCodeCamp" kursining topshiriqlari qatoriga kiradi. Pomodoro ilovasi vaqtni boshqarish vositasi boʻlib, foydalanuvchilarga oʻz ishlarini qisqa tanaffuslar bilan ajratilgan, anʼanaviy ravishda 25 daqiqalik “pomodorolar” deb nomlangan intervallarga ajratishga yordam beradi. Pomodoro texnikasi ishni boshqariladigan bo'laklarga bo'lish orqali samaradorlikni oshirish va diqqatni jamlashga qaratilgan.`,
        },
        {
          name: "Pokemono",
          description: `"Pokemono" bu men RS School loyihasida yaratgan veb-ilovadir. U foydalanuvchilarga Pokemonlar roʻyxatini koʻrish imkonini beradi. Pokemonlarning nomi, rasmi va boshqa tegishli maʼlumotlari kabi tafsilotlarni taqdim etadi. U Foydalanuvchi Interfeysini samarali boshqarish va yangilash uchun React komponentlariga asoslangan arxitekturadan foydalanadi, bu Pokemon ma'lumotlarini o'rganishga qiziqqan foydalanuvchilar uchun sezgir va interaktiv tajribani taqdim etadi. Amaldagi texnologiyalar: React JS, TypeScript, Sass`,
        },
        {
          name: "Todo List App",
          description: `Qilmoqchi bo'lgan ishlaringiz roʻyxatidan bosilgan element indeksini samarali topib, JavaScriptda qoʻlbola reaktiv state yaratish uchun "Ikkilik Qidiruv" algoritmidan foydalandim, bu roʻyxatni tahrirlash va oʻchirish jarayonini kuchaytirdi. O'chirishdan oldin u sizga modalni ko'rsatadi. Men hamma narsani tozalash uchun "Hammasini tozalash" tugmasini va yangi "butun matnni o'qish" funksiyasini qo'shdim, chunki ro'yxatdagi matn tarkibi cheklangan`,
        },
        {
          name: "Scivenia Beta Loyihasi",
          description: `Ushbu universitet dasturiy loyihasining bir qismi sifatida biz kattaroq veb-ilovaning o'ziga xos funksiyasini yaratdik. Ushbu funktsiyaning maqsadi tadqiqotchilar va olimlar o'rtasidagi ilmiy hamkorlikni vizual ko'rinishda namoyish qilishdir. Men tadqiqotchining barcha hamkorlarini topish uchun mijoz tomonida "Kenglik Bo'yicha Qidirish" algoritmidan foydalandim. Ishlatilgan texnologiyalar: React JS va Sigma JS`,
        },
        {
          name: "68-DIMI App",
          description: `68-DIMI WebApp - Ushbu ilova G'uzor tumanidagi 68-sonli ixtisoslashtirilgan maktabimiz o'quvchilari uchun yaratilgan. Ushbu loyihada o'quvchilar o'yin o'ynashlari, muammolarni hal qilishlari, testlarni yechishlari va g'alaba qozonish uchun kurashishlari mumkin. Ilova tomonidan tashkil etilgan test va imtihonlarni topshirish orqali ball to'plagan eng yaxshi talabalarni ko'rsatish uchun peshqadamlar jadvali mavjud. Ishlatilgan texnologiyalar: HTML, CSS, JavaScript va PHP`,
        },
        {
          name: "Apple Maketi",
          description: `Men Flexbox va Grid maketlar bilan ishlash uchun stillash ko'nikmalarimni oshirmoqchi edim. Men Apple veb-saytini tanladim va uning o'xshash klonini yaratishga harakat qildim. Umid qilamanki, bu maket haqiqiy Apple veb-saytiga o'xshadi. Ishlatilgan texnologiyalar: HTML va CSS`,
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
      }-jähriger Webentwickler. Ich studiere derzeit am Tashkent Institute of Textile and Light Industry in Usbekistan und beschäftige mich in meiner Freizeit mit modernen Bibliotheken und Frameworks in diesem Bereich der Webentwicklung und habe mich bisher in mehreren kleinen Projekten versucht. Die Kurse der Innopolis University haben mir geholfen, die Grundkonzepte von „Softwaredesign“, „Datenstrukturen und Algorithmen“ und insbesondere „Graphentheorie“ zu erlernen. Darüber hinaus versuche ich täglich, Probleme unterschiedlicher Schwierigkeitsgrade auf der Leetcode-Plattform zu lösen, indem ich meine Lieblingsprogrammiersprachen JavaScript und C++ verwende. Ich denke, diese meiner Fähigkeiten werden Ihnen helfen!`,
      btn: "MEHR INFO",
    },
    portfolio: {
      title: "PORTFOLIO",
      projects: [
        {
          name: "Crypto Lab",
          description:
            "Crypto Lab ist eine Online-Plattform zum Austausch notwendiger und wichtiger Informationen für diejenigen, die sich für die Welt der Kryptowährungen interessieren. Praktischerweise können Sie detaillierte Informationen über Ihre bevorzugten Kryptowährungen abrufen und deren Preise im Laufe der Zeit verfolgen, über die neuesten Nachrichten auf dem Laufenden bleiben und als Recherche zwischen Kryptowährungen umrechnen. Verwendete Technologien: React + TS, Ant Design, Redux-Toolkit",
        },
        {
          name: "Pomodoro 25+5",
          description: `Dieses Projekt gehört zu den Aufgaben des Kurses „freeCodeCamp“. Eine Pomodoro-App ist ein Zeitmanagement-Tool, das Benutzern hilft, ihre Arbeit in Intervalle namens „Pomodoros“ aufzuteilen, die traditionell 25 Minuten lang sind und durch kurze Pausen getrennt sind. Die Pomodoro-Technik zielt darauf ab, die Produktivität und Konzentration zu verbessern, indem sie die Arbeit in überschaubare Abschnitte aufteilt.`,
        },
        {
          name: "Pokemono",
          description: `„Pokemono“ ist eine Webanwendung, die ich im RS School-Projekt erstellt habe. Es ermöglicht Benutzern, eine Liste von Pokémon anzuzeigen. Bietet Details wie den Namen, das Bild und andere relevante Informationen des Pokémon. Es verwendet eine Architektur, die auf React-Komponenten basiert, um die Benutzeroberfläche effizient zu verwalten und zu aktualisieren und Benutzern, die Pokemon-Informationen lernen möchten, ein reaktionsfähiges und interaktives Erlebnis zu bieten. Verwendete Technologien: React JS, TypeScript, Sass`,
        },
        {
          name: "Todo Listen App",
          description: `Um den Index eines angeklickten Elements in Ihrer To-Do-Liste effektiv zu finden, habe ich den binären Suchalgorithmus verwendet, um einen Dummy-Reaktionszustand in JavaScript zu erstellen, der den Prozess des Bearbeitens und Löschens der Liste vereinfacht. Vor dem Löschen wird Ihnen das Modal angezeigt. Ich habe eine Schaltfläche „Alle löschen“ und eine neue Funktion „Gesamten Text lesen“ hinzugefügt, um alles zu löschen, da der Textinhalt in der Liste begrenzt ist`,
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
          name: "Apple-Layout",
          description: `Ich wollte meine CSS-Kenntnisse verbessern, um mit Flexbox und Grid-Layouts arbeiten zu können. Ich habe die Website von Apple ausgewählt und versucht, einen Klon davon zu erstellen. Ich hoffe, dass dieses Layout wie die echte Apple-Website aussieht. Verwendete Technologien: HTML und CSS`,
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
