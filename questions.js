const quizDataFromFile = [
  {
    "question": "the compliment",
    "correct": "das Kompliment",
    "choices": [
      "sich vor jemandem fürchten",
      "das Kompliment",
      "sich beteiligen an etwas",
      "die Voraussetzung"
    ]
  },
  {
    "question": "suggest",
    "correct": "nahelegen",
    "choices": [
      "nahelegen",
      "mit jemandem fertig werden",
      "die Hürde",
      "fit sein"
    ]
  },
  {
    "question": "spread",
    "correct": "verbreiten",
    "choices": [
      "das Argument, Begründung",
      "abgewinnen",
      "verbreiten",
      "die Umschulung"
    ]
  },
  {
    "question": "sign,&nbsp;indication",
    "correct": "das Indiz",
    "choices": [
      "nieseln",
      "einstecken",
      "das Indiz",
      "der Braumeister"
    ]
  },
  {
    "question": "the school readiness",
    "correct": "die Schulreife",
    "choices": [
      "die Nuklearwaffe",
      "der Schluchzer",
      "die Schulreife",
      "aufteilen"
    ]
  },
  {
    "question": "cheating",
    "correct": "das Schummeln",
    "choices": [
      "das Schummeln",
      "die Tierwelt",
      "verdrahten",
      "nachahmen"
    ]
  },
  {
    "question": "see through",
    "correct": "durchschauen",
    "choices": [
      "durchschauen",
      "rücksichtsvoll",
      "konfiszieren",
      "einstecken"
    ]
  },
  {
    "question": "intellectual development",
    "correct": "intellektuelle Entwiklung",
    "choices": [
      "die Gipslösung",
      "die Herausforderung",
      "intellektuelle Entwiklung",
      "die Haube"
    ]
  },
  {
    "question": "we talk about it ...",
    "correct": "man spricht davon ...",
    "choices": [
      "der Forumsbeitrag",
      "ich bin der Ansicht",
      "man spricht davon ...",
      "das Baugewerbe"
    ]
  },
  {
    "question": "the rethinking",
    "correct": "das Umdenken",
    "choices": [
      "das Umdenken",
      "die Absicht",
      "derer",
      "der Zugewandert"
    ]
  },
  {
    "question": "the nerve cell",
    "correct": "die Nervenzelle",
    "choices": [
      "die Nervenzelle",
      "salopp",
      "die Runde",
      "die Vorlage"
    ]
  },
  {
    "question": "neurological",
    "correct": "neurologisch",
    "choices": [
      "sich herausstellen",
      "die Einwandererfamilie",
      "leistungsfähig",
      "neurologisch"
    ]
  },
  {
    "question": "presuppose, require",
    "correct": "vorraussetzen",
    "choices": [
      "sich ärgern über ...&nbsp;",
      "vorraussetzen",
      "die Arbeitstechnik",
      "das Contra"
    ]
  },
  {
    "question": "autistic",
    "correct": "autistisch",
    "choices": [
      "unbewusst",
      "autistisch",
      "die allgemeine Relativitätstheorie",
      "die Überstunde"
    ]
  },
  {
    "question": "require",
    "correct": "erfordern",
    "choices": [
      "der Elfmeter",
      "die Handlungsbereitschaft",
      "inwiefern",
      "erfordern"
    ]
  },
  {
    "question": "developed",
    "correct": "entwickelt",
    "choices": [
      "entwickelt",
      "die Übersicht",
      "der Gastgeber",
      "das Hockey"
    ]
  },
  {
    "question": "the capacity",
    "correct": "die Kapazität",
    "choices": [
      "die Kapazität",
      "der Schlummer",
      "hageln",
      "gewaltsam"
    ]
  },
  {
    "question": "be able to",
    "correct": "fähig sein zu + D",
    "choices": [
      "ausnutzen",
      "fähig sein zu + D",
      "das Porträt",
      "die Hürde"
    ]
  },
  {
    "question": "the liar",
    "correct": "der Lügner",
    "choices": [
      "der Lügner",
      "traumhaft",
      "die Krume",
      "nachlassen"
    ]
  },
  {
    "question": "the deception",
    "correct": "die Täuschung",
    "choices": [
      "der Arbeitsablauf",
      "die Unternehmenskultur",
      "die Täuschung",
      "verbreiten"
    ]
  },
  {
    "question": "the male",
    "correct": "das Männchen",
    "choices": [
      "das Männchen",
      "die Gipslösung",
      "das Weibchen",
      "woran liegt es?"
    ]
  },
  {
    "question": "the female",
    "correct": "das Weibchen",
    "choices": [
      "das Weibchen",
      "gering",
      "klarmachen",
      "die Geldanlage"
    ]
  },
  {
    "question": "the marmot",
    "correct": "das Murmeltier",
    "choices": [
      "der Athlet",
      "das Murmeltier",
      "schnallen",
      "bedingen"
    ]
  },
  {
    "question": "wildlife",
    "correct": "die Tierwelt",
    "choices": [
      "schief",
      "flechten",
      "die Tierwelt",
      "bestätigen"
    ]
  },
  {
    "question": "the marriage fraud",
    "correct": "der Heiratsschwindel",
    "choices": [
      "der Ruf",
      "rechtzeitig",
      "der Knabe",
      "der Heiratsschwindel"
    ]
  },
  {
    "question": "the cheater, con man",
    "correct": "der Betrüger",
    "choices": [
      "schüchtern",
      "tolerieren",
      "regelrecht",
      "der Betrüger"
    ]
  },
  {
    "question": "say",
    "correct": "besagen",
    "choices": [
      "das Satzglied",
      "die Depression",
      "besagen",
      "annehmen"
    ]
  },
  {
    "question": "the laziness",
    "correct": "die Faulheit",
    "choices": [
      "das Schneckenhaus",
      "die Faulheit",
      "herfallen über",
      "führen zu + D"
    ]
  },
  {
    "question": "take advantage",
    "correct": "Vorteil ausziehen",
    "choices": [
      "Vorteil ausziehen",
      "jemandem etwas beibringen",
      "der Scherz",
      "hochgezogen"
    ]
  },
  {
    "question": "desirable",
    "correct": "wünschenwert",
    "choices": [
      "verwirrt",
      "der Vorgang",
      "wünschenwert",
      "angeben"
    ]
  },
  {
    "question": "sincerely",
    "correct": "aufrichtig",
    "choices": [
      "aufrichtig",
      "entspannend",
      "der Arbeitgeber",
      "der Staatsanwalt"
    ]
  },
  {
    "question": "honest",
    "correct": "redlich",
    "choices": [
      "redlich",
      "die Fluggesellschaft",
      "auftreten",
      "die Ausspannung"
    ]
  },
  {
    "question": "understanding",
    "correct": "verständnisvoll",
    "choices": [
      "die Erleichterung",
      "verständnisvoll",
      "das kam zum Streit",
      "die Behörde"
    ]
  },
  {
    "question": "loyal",
    "correct": "loyal",
    "choices": [
      "die Nuklearwaffe",
      "gegnerisch",
      "loyal",
      "wie wär's, wenn ..."
    ]
  },
  {
    "question": "truthful",
    "correct": "wahrheitliebend",
    "choices": [
      "die Notkühlung",
      "wahrheitliebend",
      "die Auswertung",
      "stammen aus"
    ]
  },
  {
    "question": "rating",
    "correct": "das Prädikat",
    "choices": [
      "die Frechheit",
      "das Prädikat",
      "das Fach",
      "sichAkk. einstellen"
    ]
  },
  {
    "question": "lying",
    "correct": "lügnerisch",
    "choices": [
      "seitdem",
      "vertreiben",
      "befolgen",
      "lügnerisch"
    ]
  },
  {
    "question": "uncover, reveal",
    "correct": "enttarnen",
    "choices": [
      "der Winkel",
      "enttarnen",
      "jeweils",
      "lebenswichtig, unerläßig"
    ]
  },
  {
    "question": "unthinkable",
    "correct": "undenkbar",
    "choices": [
      "das Bedürfnis",
      "von Bedeutung sein",
      "salopp",
      "undenkbar"
    ]
  },
  {
    "question": "pedagogy",
    "correct": "die Erziehungswissenschaft",
    "choices": [
      "die Oberfläche",
      "die Konkurrenz",
      "die Erziehungswissenschaft",
      "entgegnen"
    ]
  },
  {
    "question": "to keep,&nbsp;remember",
    "correct": "behalten",
    "choices": [
      "der Unterbegriff",
      "der Betrüger",
      "jemand fernliegen&nbsp;",
      "behalten"
    ]
  },
  {
    "question": "lied",
    "correct": "gelogen",
    "choices": [
      "mehrdeutig",
      "die Anerkennung",
      "die Barriere",
      "gelogen"
    ]
  },
  {
    "question": "darling",
    "correct": "der Liebling",
    "choices": [
      "insbesondere",
      "der Liebling",
      "sowie",
      "ausschließlich"
    ]
  },
  {
    "question": "wonderful, gorgeous",
    "correct": "großartig",
    "choices": [
      "das Rollenspiel",
      "der Maßstab",
      "großartig",
      "der Ekel"
    ]
  },
  {
    "question": "mirror image,&nbsp;the reflection",
    "correct": "das Spiegelbild",
    "choices": [
      "erfinden",
      "das Spiegelbild",
      "ewig",
      "einsprachig"
    ]
  },
  {
    "question": "never",
    "correct": "nicht einmal",
    "choices": [
      "der Tippfehler",
      "zahlungskräftig",
      "sich konzentrieren auf + A",
      "nicht einmal"
    ]
  },
  {
    "question": "self-praise",
    "correct": "das Eigenlob",
    "choices": [
      "demnach",
      "quälen",
      "das Eigenlob",
      "die Gepäckermittlerin"
    ]
  },
  {
    "question": "grant",
    "correct": "gönnen",
    "choices": [
      "das Geflüster",
      "nicht einmal",
      "gönnen",
      "gealtert"
    ]
  },
  {
    "question": "apparently",
    "correct": "anscheinend",
    "choices": [
      "anscheinend",
      "der Gepard",
      "spinnen",
      "männlich"
    ]
  },
  {
    "question": "mood, state of mind",
    "correct": "die Stimmung",
    "choices": [
      "ewig",
      "die Gestaltung",
      "die Grundausstattung",
      "die Stimmung"
    ]
  },
  {
    "question": "lie to",
    "correct": "belügen",
    "choices": [
      "das Vermögen",
      "belügen",
      "der Geschmack",
      "sowie"
    ]
  },
  {
    "question": "be available",
    "correct": "zur Verfügung stehen",
    "choices": [
      "das Teilchen",
      "die Rente",
      "instruieren",
      "zur Verfügung stehen"
    ]
  },
  {
    "question": "from time immemorial,&nbsp;always",
    "correct": "von jeher",
    "choices": [
      "der Auftakt",
      "die Anziehungskraft",
      "schleppend",
      "von jeher"
    ]
  },
  {
    "question": "block, ban",
    "correct": "sperren",
    "choices": [
      "die Übersicht",
      "sperren",
      "einsperren",
      "vergüten"
    ]
  },
  {
    "question": "imprison, put in jail",
    "correct": "einsperren",
    "choices": [
      "das Fachabi",
      "einsperren",
      "kläffend",
      "das Hindernis"
    ]
  },
  {
    "question": "take off, decrease",
    "correct": "abnehmen",
    "choices": [
      "das Arbeitstempo",
      "abnehmen",
      "durchaus",
      "die Weiche"
    ]
  },
  {
    "question": "feel, emotion",
    "correct": "das Gespür",
    "choices": [
      "das Gespür",
      "genervt",
      "auflegen",
      "das Kompositum"
    ]
  },
  {
    "question": "conclude",
    "correct": "daraus schließen",
    "choices": [
      "durchlaufen",
      "hängende Mundwinkel",
      "verbauen",
      "daraus schließen"
    ]
  },
  {
    "question": "proficient, powerful",
    "correct": "leistungsfähig",
    "choices": [
      "der Tadel",
      "leistungsfähig",
      "ruhend",
      "die Entdeckung"
    ]
  },
  {
    "question": "fight",
    "correct": "bekämpfen",
    "choices": [
      "der Kerl&nbsp;",
      "der Ausschnitt",
      "bekämpfen",
      "ausgeprägt"
    ]
  },
  {
    "question": "the canteen coma",
    "correct": "das Kantinenkoma",
    "choices": [
      "ausbremsen",
      "mitkriegen",
      "wälzen",
      "das Kantinenkoma"
    ]
  },
  {
    "question": "nap",
    "correct": "das Nickerchen",
    "choices": [
      "quälen",
      "die Rhetorik",
      "das Nickerchen",
      "kulturspezifisch"
    ]
  },
  {
    "question": "coffin",
    "correct": "der Sarg",
    "choices": [
      "der Sarg",
      "beliebig",
      "der Büroschlaf",
      "rücksichtsvoll"
    ]
  },
  {
    "question": "box",
    "correct": "die Box",
    "choices": [
      "bis auf",
      "annehmen",
      "die Box",
      "schuldig"
    ]
  },
  {
    "question": "the fundamental right",
    "correct": "das Grundrecht",
    "choices": [
      "rekonstruieren",
      "die Übersicht",
      "decken",
      "das Grundrecht"
    ]
  },
  {
    "question": "to establish",
    "correct": "festschreiben",
    "choices": [
      "das Weibchen",
      "auf die kumpelhafte Art",
      "festschreiben",
      "bereits, schon"
    ]
  },
  {
    "question": "the constitution law",
    "correct": "die Verfassung",
    "choices": [
      "instinktiv",
      "die Verfassung",
      "anhand eines Beispiels",
      "sich qualifizieren zu"
    ]
  },
  {
    "question": "the infarct",
    "correct": "der Infarkt",
    "choices": [
      "der Infarkt",
      "die Verästelung",
      "der Reiz",
      "das System"
    ]
  },
  {
    "question": "pilot",
    "correct": "der Pilot",
    "choices": [
      "die Rhetorik",
      "unwahrscheinlich",
      "halt mal die Luft an!",
      "der Pilot"
    ]
  },
  {
    "question": "consider something to be",
    "correct": "ansehen als",
    "choices": [
      "umgekehrt",
      "ansehen als",
      "die Urteilskraft",
      "proben"
    ]
  },
  {
    "question": "lower Saxony",
    "correct": "das Niedersachsen",
    "choices": [
      "der Auftritt",
      "die Bedrohung",
      "abgefischt",
      "das Niedersachsen"
    ]
  },
  {
    "question": "connection",
    "correct": "der Anschluss",
    "choices": [
      "steinreich",
      "der Anschluss",
      "der Aufwand",
      "die Strukturierung"
    ]
  },
  {
    "question": "attempt, advance",
    "correct": "der Vorstoß",
    "choices": [
      "bei Gott",
      "der Vorstoß",
      "nachtanken",
      "überfluten"
    ]
  },
  {
    "question": "bitingly, sarcastically",
    "correct": "bissig",
    "choices": [
      "das Schimpfen",
      "bissig",
      "diesbezügleich",
      "besprechen"
    ]
  },
  {
    "question": "the reputation damage",
    "correct": "die Rufschädigung",
    "choices": [
      "durchsetzen",
      "die Überwachung",
      "gewalttätig",
      "die Rufschädigung"
    ]
  },
  {
    "question": "to sue",
    "correct": "verklagen",
    "choices": [
      "verklagen",
      "die Faulheit",
      "durchspielen",
      "die Anmerkung"
    ]
  },
  {
    "question": "sleep",
    "correct": "der Schlummer",
    "choices": [
      "ausstellen",
      "der Schlummer",
      "die Höflichkeit",
      "die Vorführung"
    ]
  },
  {
    "question": "the office sleep",
    "correct": "der Büroschlaf",
    "choices": [
      "die Trägheit",
      "der Büroschlaf",
      "hageln",
      "die Gegensprechanlage"
    ]
  },
  {
    "question": "allow, permit",
    "correct": "zulassen",
    "choices": [
      "einhalten",
      "einfließen",
      "zulassen",
      "persönlich nehmen"
    ]
  },
  {
    "question": "subsequently",
    "correct": "hinterher",
    "choices": [
      "hinterher",
      "stammeln",
      "abschießen",
      "indem"
    ]
  },
  {
    "question": "by itself",
    "correct": "von selbst",
    "choices": [
      "der Erfinder",
      "am einfachsten",
      "das Grundstück",
      "von selbst"
    ]
  },
  {
    "question": "about, concerning",
    "correct": "ums",
    "choices": [
      "harmoniesüchtig",
      "woran liegt es?",
      "ums",
      "die Militarisierung"
    ]
  },
  {
    "question": "Humanities scientist",
    "correct": "der Geisteswissenschaftler",
    "choices": [
      "der Geisteswissenschaftler",
      "der Beleg",
      "der Kasus",
      "gerichtet"
    ]
  },
  {
    "question": "thesis",
    "correct": "die These",
    "choices": [
      "der Clown",
      "zeitig",
      "zurückerlangen",
      "die These"
    ]
  },
  {
    "question": "discovery",
    "correct": "die Entdeckung",
    "choices": [
      "das Entwicklungspotenzial",
      "die Entdeckung",
      "bewohnt",
      "leuchten"
    ]
  },
  {
    "question": "to calculate",
    "correct": "berechnen",
    "choices": [
      "zutreffen",
      "tröstlich",
      "einheitlich",
      "berechnen"
    ]
  },
  {
    "question": "explore",
    "correct": "erforschen",
    "choices": [
      "der Industriekaufmann",
      "das Feuerholz",
      "erforschen",
      "bereits, schon"
    ]
  },
  {
    "question": "laboratory technician",
    "correct": "der Laborant",
    "choices": [
      "krönender Abschluss",
      "der Laborant",
      "abwerten",
      "das Umfeld"
    ]
  },
  {
    "question": "hypothesis, supposition",
    "correct": "die Hypothese",
    "choices": [
      "der Vokal",
      "die Hypothese",
      "die Anstrengung",
      "der Gatte"
    ]
  },
  {
    "question": "lecture hall",
    "correct": "der Hörsaal",
    "choices": [
      "bedingt",
      "der Hörsaal",
      "da sind Sie zu beneiden",
      "die Qualität"
    ]
  },
  {
    "question": "Library",
    "correct": "die Bibliothek",
    "choices": [
      "die Bibliothek",
      "übernehmen",
      "empfinden als",
      "jeglicher Art"
    ]
  },
  {
    "question": "survey, elevation",
    "correct": "die Erhebung",
    "choices": [
      "der Arbeitgeber",
      "der Ökologe",
      "die Erhebung",
      "festlegen"
    ]
  },
  {
    "question": "portioning",
    "correct": "portionieren",
    "choices": [
      "aufstellen",
      "zumindest",
      "portionieren",
      "der Ingwer"
    ]
  },
  {
    "question": "subregion",
    "correct": "der Teilbereich",
    "choices": [
      "das Zeitalter",
      "erstaunt sein über + A",
      "die Arbeitstechnik",
      "der Teilbereich"
    ]
  },
  {
    "question": "term",
    "correct": "der Unterbegriff",
    "choices": [
      "beitragen zu + D",
      "sich mit jemandem vertragen",
      "verbindlich",
      "der Unterbegriff"
    ]
  },
  {
    "question": "generic term",
    "correct": "der Oberbegriff",
    "choices": [
      "die Ausgeglichenheit",
      "das Stottern",
      "angebracht",
      "der Oberbegriff"
    ]
  },
  {
    "question": "speaking intention",
    "correct": "die&nbsp;Sprechabsicht",
    "choices": [
      "der Jugendtreff",
      "die&nbsp;Sprechabsicht",
      "die Einstellung",
      "steinreich"
    ]
  },
  {
    "question": "determination, purpose,&nbsp;regulation",
    "correct": "die Bestimmung",
    "choices": [
      "die Bestimmung",
      "bestätigen",
      "das Jahrzehnt",
      "zurückhaltend"
    ]
  },
  {
    "question": "entitled",
    "correct": "berechtigt",
    "choices": [
      "die Störung",
      "berechtigt",
      "vertreten",
      "gleichermaßen"
    ]
  },
  {
    "question": "remove, detach",
    "correct": "ablösen",
    "choices": [
      "der Berufsverkehr",
      "die Arbeitsweise",
      "der Erfinder",
      "ablösen"
    ]
  },
  {
    "question": "guardianship, custody",
    "correct": "die Erziehungsberechtigung",
    "choices": [
      "die Anklage",
      "die Erziehungsberechtigung",
      "vielseitig",
      "jeglicher Art"
    ]
  },
  {
    "question": "offspring",
    "correct": "der Nachwuchs",
    "choices": [
      "einigermaßen",
      "Mitleid haben mit",
      "der Nachwuchs",
      "bescheiden"
    ]
  },
  {
    "question": "Youth Protection Terms",
    "correct": "die Jugendschutzbestimmung",
    "choices": [
      "der Konzern",
      "senkrecht",
      "die Jugendschutzbestimmung",
      "der Schlag"
    ]
  },
  {
    "question": "scholastic",
    "correct": "schulisch",
    "choices": [
      "schulisch",
      "das Imitieren",
      "einigermaßen",
      "die Gleichberechtigung"
    ]
  },
  {
    "question": "weakness",
    "correct": "die Schwäche",
    "choices": [
      "antrainieren",
      "es ist es soweit ...",
      "die Schwäche",
      "die Absurdität"
    ]
  },
  {
    "question": "impairment, limitation",
    "correct": "Beeinträchtigung",
    "choices": [
      "inflationär",
      "umformulieren",
      "Beeinträchtigung",
      "wie wär's, wenn ..."
    ]
  },
  {
    "question": "disorder",
    "correct": "die Störung",
    "choices": [
      "wie wär's, wenn ...",
      "die Neuheit",
      "wie sehr",
      "die Störung"
    ]
  },
  {
    "question": "talent",
    "correct": "die Begabung",
    "choices": [
      "die Begabung",
      "gelogen",
      "das Kompositum",
      "der Triumph"
    ]
  },
  {
    "question": "coordinate",
    "correct": "koordinieren",
    "choices": [
      "Einerseits ..., andererseits",
      "koordinieren",
      "der Dachdecker&nbsp;",
      "sich nach jemandem richten"
    ]
  },
  {
    "question": "Foundation, endowment",
    "correct": "die Stiftung",
    "choices": [
      "die Stiftung",
      "ausüben",
      "schwindelfrei",
      "grundlegend"
    ]
  },
  {
    "question": "to&nbsp;sponsor",
    "correct": "sponsern",
    "choices": [
      "je nach etwas",
      "der Anschluss",
      "sponsern",
      "bewahren"
    ]
  },
  {
    "question": "donate",
    "correct": "stiften",
    "choices": [
      "zeitig",
      "stiften",
      "der Verlauf",
      "der Bestandteil"
    ]
  },
  {
    "question": "unsalaried,&nbsp;honorary",
    "correct": "ehrenamtlich",
    "choices": [
      "im Zusammenhang mit",
      "ehrenamtlich",
      "sich auf jemanden oder etwas einigen",
      "führen zu"
    ]
  },
  {
    "question": "yearly",
    "correct": "jährlich",
    "choices": [
      "die Disziplin",
      "dividieren",
      "jährlich",
      "die Sammelbezeichnung"
    ]
  },
  {
    "question": "allocate,&nbsp;forgive",
    "correct": "vergeben",
    "choices": [
      "das Hindernis",
      "der Berufsabschluss",
      "vergeben",
      "unbelastet"
    ]
  },
  {
    "question": "comprehend",
    "correct": "nachvollziehen",
    "choices": [
      "das Entwicklungspotenzial",
      "nachvollziehen",
      "die Schulreife",
      "der Meilenstein"
    ]
  },
  {
    "question": "precaution",
    "correct": "die Vorkehrung",
    "choices": [
      "das Ereignis",
      "die Vorkehrung",
      "der Leim",
      "verschränken"
    ]
  },
  {
    "question": "curiosity",
    "correct": "die Neugier",
    "choices": [
      "ausschütten",
      "die Neugier",
      "im Zusammenhang mit",
      "gehen in der Brüche"
    ]
  },
  {
    "question": "transform, convert",
    "correct": "verwandeln",
    "choices": [
      "vergüten",
      "geliebt",
      "verwandeln",
      "der Gatte"
    ]
  },
  {
    "question": "italic",
    "correct": "kursiv",
    "choices": [
      "das Magisterstudium",
      "kursiv",
      "der Alltag",
      "der Lebensunterhalt"
    ]
  },
  {
    "question": "glue",
    "correct": "der Leim",
    "choices": [
      "spinnt",
      "der Leim",
      "ausschreiben",
      "viele Leute sind der Meinung, dass ..."
    ]
  },
  {
    "question": "unfasten,&nbsp;untie",
    "correct": "aufbinden",
    "choices": [
      "aufbinden",
      "vergleichbar",
      "neigen",
      "die Vertrautheit"
    ]
  },
  {
    "question": "hurtful",
    "correct": "verletzend",
    "choices": [
      "verletzend",
      "der Vordergrund",
      "das Martinshorn",
      "ums"
    ]
  },
  {
    "question": "advance, walk",
    "correct": "der Anmarsch",
    "choices": [
      "der Anmarsch",
      "konstruktiv",
      "ablesen an",
      "führend"
    ]
  },
  {
    "question": "dress up",
    "correct": "verkleiden",
    "choices": [
      "die Herausforderung",
      "entfallen",
      "verkleiden",
      "aufbrechen"
    ]
  },
  {
    "question": "cover",
    "correct": "der Deckmantel",
    "choices": [
      "übernehmen",
      "woran liegt es?",
      "der Deckmantel",
      "durchhalten"
    ]
  },
  {
    "question": "Convenience",
    "correct": "die Bequemlichkeit",
    "choices": [
      "entlocken",
      "entfalten",
      "die Verfassung",
      "die Bequemlichkeit"
    ]
  },
  {
    "question": "do, perform",
    "correct": "antun",
    "choices": [
      "antun",
      "autistisch",
      "alltaglich",
      "die Vorkehrung"
    ]
  },
  {
    "question": "necessary",
    "correct": "das Bedürfnis",
    "choices": [
      "die Ermunterung",
      "zerrissen",
      "längen",
      "das Bedürfnis"
    ]
  },
  {
    "question": "sink",
    "correct": "versinken",
    "choices": [
      "blamieren",
      "der Deckmantel",
      "versinken",
      "zurückhaltend"
    ]
  },
  {
    "question": "honesty",
    "correct": "die Ehrlichkeit",
    "choices": [
      "die Ehrlichkeit",
      "die Zeitverschiebung",
      "zudem",
      "der Drang"
    ]
  },
  {
    "question": "quality of being oldfashioned",
    "correct": "die Spießigkeit",
    "choices": [
      "der Liegestütz",
      "quietschen",
      "die These",
      "die Spießigkeit"
    ]
  },
  {
    "question": "radiate",
    "correct": "strahlen",
    "choices": [
      "die Schlafmütze",
      "speziell",
      "strahlen",
      "instruieren"
    ]
  },
  {
    "question": "gentle",
    "correct": "schonend",
    "choices": [
      "preisgekrönt",
      "schonend",
      "inflationär",
      "am häufigsten"
    ]
  },
  {
    "question": "figure",
    "correct": "die Figur",
    "choices": [
      "die Figur",
      "der Strauß",
      "sichtlich",
      "vielmehr ist es so, dass ..."
    ]
  },
  {
    "question": "guilty",
    "correct": "schuldig",
    "choices": [
      "instinktiv",
      "schuldig",
      "verkürzt",
      "reichend"
    ]
  },
  {
    "question": "to&nbsp;sparkle",
    "correct": "funkeln",
    "choices": [
      "undeutlich",
      "funkeln",
      "entspannend",
      "unbewaffnet"
    ]
  },
  {
    "question": "extinct",
    "correct": "erloschen",
    "choices": [
      "erloschen",
      "spendieren",
      "die Sammelbezeichnung",
      "neurologisch"
    ]
  },
  {
    "question": "confess",
    "correct": "gestehen",
    "choices": [
      "schleppend",
      "gestehen",
      "erfinden",
      "der Überfluss"
    ]
  },
  {
    "question": "helpful",
    "correct": "hilfreich",
    "choices": [
      "festschreiben",
      "schrumpfen",
      "sich mit jemandem vertragen",
      "hilfreich"
    ]
  },
  {
    "question": "appropriate",
    "correct": "angebracht",
    "choices": [
      "angebracht",
      "das Nickerchen",
      "die Karriere",
      "anregend"
    ]
  },
  {
    "question": "done",
    "correct": "erledigt",
    "choices": [
      "beunruhigen",
      "erledigt",
      "der Streber",
      "die Lust"
    ]
  },
  {
    "question": "pour out",
    "correct": "ausschütten",
    "choices": [
      "die Schande",
      "ausschütten",
      "die Elektrizität",
      "sündigen"
    ]
  },
  {
    "question": "good-natured",
    "correct": "gutmütig",
    "choices": [
      "mehrdeutig",
      "lügnerisch",
      "gutmütig",
      "das Grundrecht"
    ]
  },
  {
    "question": "the Proud",
    "correct": "der Stolz",
    "choices": [
      "überwiegen",
      "der Stolz",
      "führen zu",
      "der Winkel"
    ]
  },
  {
    "question": "mixture",
    "correct": "die Mischung",
    "choices": [
      "die Nachbereitung",
      "die Mischung",
      "anbrüllen",
      "einen Vortrag halten"
    ]
  },
  {
    "question": "disregard",
    "correct": "missachten",
    "choices": [
      "erfahren",
      "der Zeitmangel",
      "missachten",
      "ausschlafen"
    ]
  },
  {
    "question": "relief, easement",
    "correct": "die Erleichterung",
    "choices": [
      "für etwas gerade stehen",
      "die Disziplin",
      "sich befassen mit",
      "die Erleichterung"
    ]
  },
  {
    "question": "decency, politeness",
    "correct": "der Anstand",
    "choices": [
      "der Geisteswissenschaftler",
      "geschäftlich",
      "der Allesfresser",
      "der Anstand"
    ]
  },
  {
    "question": "drag out",
    "correct": "hinschleppen",
    "choices": [
      "der Begriff",
      "hinschleppen",
      "tadeln",
      "der Gegner"
    ]
  },
  {
    "question": "play through",
    "correct": "durchspielen",
    "choices": [
      "dick (freund)",
      "durchspielen",
      "gestehen",
      "die Männerdomäne"
    ]
  },
  {
    "question": "bell button",
    "correct": "der Klingelknopf",
    "choices": [
      "der Klingelknopf",
      "umsetzen",
      "begabt",
      "rastlos"
    ]
  },
  {
    "question": "conceal",
    "correct": "verschweigen",
    "choices": [
      "die&nbsp;Zuverdienerinnen",
      "verschweigen",
      "erwerben",
      "die Urzeit"
    ]
  },
  {
    "question": "rudeness, blatancy",
    "correct": "die Unverschämtheit",
    "choices": [
      "die Unverschämtheit",
      "die Bestimmung",
      "der Ansprechpartner",
      "der Kampfgeist"
    ]
  },
  {
    "question": "either this way or that way",
    "correct": "so oder so",
    "choices": [
      "grundlegend",
      "intuitiv",
      "so oder so",
      "es ist allgemein bekannt, dass ..."
    ]
  },
  {
    "question": "forgetfulness",
    "correct": "die Vergesslichkeit",
    "choices": [
      "anhand",
      "trauen",
      "die Rezension",
      "die Vergesslichkeit"
    ]
  },
  {
    "question": "save",
    "correct": "abspeichern",
    "choices": [
      "demnach",
      "ungeahnt",
      "der Trost",
      "abspeichern"
    ]
  },
  {
    "question": "reduce, ease up",
    "correct": "nachlassen",
    "choices": [
      "jemandem zu etwas verhelfen",
      "undenkbar",
      "erzeugen",
      "nachlassen"
    ]
  },
  {
    "question": "possibly",
    "correct": "womöglich",
    "choices": [
      "verliehen",
      "das Handzeichen",
      "die Feuersirene",
      "womöglich"
    ]
  },
  {
    "question": "possibly",
    "correct": "möglicherweise",
    "choices": [
      "gebürtig",
      "anhalten",
      "möglicherweise",
      "berechnen"
    ]
  },
  {
    "question": "mostly, by far the most",
    "correct": "allermeist",
    "choices": [
      "allermeist",
      "der Junggeselle",
      "die Rollenverteilung",
      "geschaffene Strukturen"
    ]
  },
  {
    "question": "stress-related",
    "correct": "stressbedingt",
    "choices": [
      "der Auftakt",
      "strahlen",
      "das Kantinenkoma",
      "stressbedingt"
    ]
  },
  {
    "question": "wander, walk about",
    "correct": "einhergehen",
    "choices": [
      "beinhalten",
      "einhergehen",
      "der Niedriglohnsektor",
      "ehrenamtlich"
    ]
  },
  {
    "question": "mechanism",
    "correct": "der&nbsp;Mechanismus",
    "choices": [
      "die Bemühung",
      "der&nbsp;Mechanismus",
      "sich lustig machen",
      "der Zirkus"
    ]
  },
  {
    "question": "recall",
    "correct": "abrufen",
    "choices": [
      "verschließen",
      "offenbar",
      "abrufen",
      "je nach etwas"
    ]
  },
  {
    "question": "gay",
    "correct": "der Schwule",
    "choices": [
      "sich versetzen an jemands Lage",
      "der Schwule",
      "schuldig",
      "besagen"
    ]
  },
  {
    "question": "search for",
    "correct": "aufsuchen",
    "choices": [
      "die Abgrenzung",
      "einstürzen",
      "aufsuchen",
      "inflationär"
    ]
  },
  {
    "question": "wire up",
    "correct": "verdrahten",
    "choices": [
      "verdrahten",
      "hängenbleiben",
      "der Leistungsdruck",
      "der/die Graffiti"
    ]
  },
  {
    "question": "to dock",
    "correct": "andocken",
    "choices": [
      "andocken",
      "auswirken auf",
      "das Grundstück",
      "die Nachfrage"
    ]
  },
  {
    "question": "mostly",
    "correct": "zumeist",
    "choices": [
      "anlügen",
      "führen zu",
      "geradezu",
      "zumeist"
    ]
  },
  {
    "question": "interruption",
    "correct": "die&nbsp;Unterbrechung",
    "choices": [
      "das Randalieren",
      "die Eigenheit",
      "angeben",
      "die&nbsp;Unterbrechung"
    ]
  },
  {
    "question": "to screw",
    "correct": "schrauben",
    "choices": [
      "schrauben",
      "das Ressort",
      "zerbrechen",
      "unwahrscheinlich"
    ]
  },
  {
    "question": "ramification",
    "correct": "die Verästelung",
    "choices": [
      "die Verästelung",
      "etwas in Angriff nehmen",
      "die Steuerung",
      "die Stammelei"
    ]
  },
  {
    "question": "processing",
    "correct": "die Verarbeitung",
    "choices": [
      "das Verkaufsgespräch",
      "die Verarbeitung",
      "betten",
      "der Erinnerungsschwund"
    ]
  },
  {
    "question": "reception, absorption",
    "correct": "die Aufnahme",
    "choices": [
      "besetzen",
      "nachgeben",
      "festsetzen",
      "die Aufnahme"
    ]
  },
  {
    "question": "to divide",
    "correct": "dividieren",
    "choices": [
      "führen zu + D",
      "dividieren",
      "indem",
      "meiner Meinung nach ..."
    ]
  },
  {
    "question": "brain",
    "correct": "das Hirn",
    "choices": [
      "gehen in der Brüche",
      "teilnahmslos",
      "übersichtlich",
      "das Hirn"
    ]
  },
  {
    "question": "resign, put down",
    "correct": "niederlegen",
    "choices": [
      "niederlegen",
      "drauflosreden",
      "verkleiden",
      "oder Ähnliches"
    ]
  },
  {
    "question": "especially",
    "correct": "insbesondere",
    "choices": [
      "oder Ähnliches",
      "täuschen",
      "ehrenamtlich",
      "insbesondere"
    ]
  },
  {
    "question": "interlinking",
    "correct": "die Verknüpfung",
    "choices": [
      "der Bildband",
      "die Verknüpfung",
      "alteingesessen",
      "punkten"
    ]
  },
  {
    "question": "imperative, vital",
    "correct": "unerlässlich",
    "choices": [
      "der Wohlstand",
      "unerlässlich",
      "die Verweigerung",
      "die Latte"
    ]
  },
  {
    "question": "any,&nbsp;arbitrary",
    "correct": "beliebig",
    "choices": [
      "beliebig",
      "die Elektrizität",
      "die Ermunterung",
      "begehen"
    ]
  },
  {
    "question": "inflationary",
    "correct": "inflationär",
    "choices": [
      "inflationär",
      "necken",
      "die&nbsp;Streckenlänge",
      "dämlich"
    ]
  },
  {
    "question": "interaction",
    "correct": "die Wechselwirkung",
    "choices": [
      "wach",
      "die&nbsp;Sprechabsicht",
      "unerlässlich",
      "die Wechselwirkung"
    ]
  },
  {
    "question": "know memory",
    "correct": "der&nbsp;Wissensspeicher",
    "choices": [
      "die Bedrohung",
      "das Ruder",
      "der Blick",
      "der&nbsp;Wissensspeicher"
    ]
  },
  {
    "question": "appeal, request",
    "correct": "appellieren",
    "choices": [
      "appellieren",
      "die Echtzeit",
      "salopp",
      "der Beschützer"
    ]
  },
  {
    "question": "above average",
    "correct": "überdurchschnittlich",
    "choices": [
      "überdurchschnittlich",
      "gestehen",
      "borniert",
      "sich auf etwas beschränken"
    ]
  },
  {
    "question": "harmony",
    "correct": "der Einklang",
    "choices": [
      "der Tadel",
      "die Auseinandersetzung",
      "der Einklang",
      "zumindest"
    ]
  },
  {
    "question": "show, demonstrate",
    "correct": "aufweisen",
    "choices": [
      "berücksichtigen",
      "der Planet",
      "die Filmkulisse",
      "aufweisen"
    ]
  },
  {
    "question": "sleep in",
    "correct": "ausschlafen",
    "choices": [
      "ausschlafen",
      "erlernbar",
      "der&nbsp;Ermittler",
      "der Gebrauch"
    ]
  },
  {
    "question": "to sin",
    "correct": "sündigen",
    "choices": [
      "redlich",
      "zerschneiden",
      "die Stimmung",
      "sündigen"
    ]
  },
  {
    "question": "saying",
    "correct": "das&nbsp;Sprichwort",
    "choices": [
      "ungeahnt",
      "das Geflüster",
      "das&nbsp;Sprichwort",
      "einhören"
    ]
  },
  {
    "question": "sleepyhead",
    "correct": "die Schlafmütze",
    "choices": [
      "das Ressort",
      "anfügen",
      "die Schlafmütze",
      "die Oberflächenspannung"
    ]
  },
  {
    "question": "feasible",
    "correct": "durchführbar",
    "choices": [
      "die Arbeitszeit",
      "undenkbar",
      "durchführbar",
      "typisch"
    ]
  },
  {
    "question": "combine",
    "correct": "kombinieren",
    "choices": [
      "entspannend",
      "autistisch",
      "kombinieren",
      "einfließen"
    ]
  }
];