import { TestQuestion } from "./types";

export const TEST_QUESTIONS: TestQuestion[] = [
  {
    question: "Mi a szabályzat célja?",
    answers: [
      "Személyes adatok szabad áramlásának elősegítése",
      "Információbiztonsági szintek meghatározása",
      "Adatvédelmi elvek meghatározása és betartatása",
      "Jogosultságkezelési rendszer bevezetése",
      "Incidenskezelési protokollok",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Mi a szabályzat tárgyi hatálya?",
    answers: [
      "Csak a papír alapú dokumentumok",
      "Csak az elektronikus adatok",
      "A Társaság összes informatikai rendszere",
      "Csak az adatvédelmi tisztviselő által kezelt adatok",
      "Csak a GDPR által szabályozott adatok",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Melyik dokumentum nem kapcsolódik közvetlenül a szabályzathoz?",
    answers: [
      "Változáskezelési Szabályzat",
      "Jogosultságkezelési Szabályzat",
      "Értékesítési és Marketing Szabályzat",
      "Incidenskezelési Szabályzat",
      "Informatikai Biztonsági Szabályzat",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Mikor kell az adatvédelmi incidenseket bejelenteni?",
    answers: [
      "Csak ha az adatok elvesznek",
      "Ha a jogosulatlan hozzáférés megtörténik",
      "Csak ha az adatok módosításra kerülnek",
      "Ha az adatok nem nyilvánosak",
      "Ha az adatok már nem szükségesek",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Mi a dokumentált adatvédelmi hatásvizsgálat célja?",
    answers: [
      "Az adatok rendszeres frissítésének biztosítása",
      "Az adatvédelmi kockázatok értékelése",
      "A Társaság éves jelentésének készítése",
      "Az érintettek tájékoztatása",
      "A jogosultságkezelési folyamatok felülvizsgálata",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Mi jellemzi a 'KIEMELT' adatokat?",
    answers: [
      "Csak a Társaság vezetőségének ismert",
      "Tartalmazza az üzleti titkokat és különleges személyes adatokat",
      "Nyilvános adatok",
      "Rendszeres adatok",
      "Alacsony kockázatú adatok",
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Mikor van szükség az adatvédelmi incidensek nyilvántartásának vezetésére?",
    answers: [
      "Csak súlyos incidensek esetén",
      "Mindig, amikor adatvédelmi incidens történik",
      "Csak a vezérigazgató utasítására",
      "Ha az adatok módosításra kerülnek",
      "Évente egyszer, a szabályzat felülvizsgálatakor",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Mikor kell az adatvédelmi szabályzatot felülvizsgálni?",
    answers: [
      "Csak jogszabályi változás esetén",
      "Nagyobb változások, vagy legalább évente",
      "Minden új projekt indításakor",
      "Minden negyedévben",
      "Minden adatvédelmi incidens után",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Melyik nem tartozik a szabályzat személyi hatálya alá?",
    answers: [
      "Munkavállalók",
      "Adatvédelmi tisztviselők",
      "Külső szolgáltatók",
      "Kiszervezett partnerek",
      "Információbiztonsági felelősök",
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "Melyik nem a dokumentumban szereplő adatvédelmi szerepkör?",
    answers: [
      "Adatgazda",
      "Információbiztonsági vezető",
      "Rendszergazda",
      "Adatfeldolgozó",
      "Külső auditáló",
    ],
    correctAnswerIndex: 4,
  },
  {
    question: "Mi jellemzi a 'FOKOZOTT' biztonsági osztályba sorolt adatokat?",
    answers: [
      "Csak nyilvános információk",
      "Csak belső használatra",
      "Nagy mennyiségű személyes adat",
      "Üzleti titkok",
      "Különleges személyes adatok",
    ],
    correctAnswerIndex: 2,
  },
  {
    question:
      "Hogyan kell kezelni az elektronikus formában tárolt személyes adatokat?",
    answers: [
      "Csak papír alapon kell őrizni",
      "Biztonságos adattárolási módszerekkel",
      "Nyilvános hálózatokon szabadon továbbítható",
      "Csak külső szolgáltatóknak adható át",
      "Nincs szabályozva a dokumentumban",
    ],
    correctAnswerIndex: 1,
  },
];
