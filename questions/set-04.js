/* =====================================================================
   questions/set-04.js  —  SET-04
   ---------------------------------------------------------------------
   Add this set's questions inside the [ ... ] below, one block per question:

     { n: 1, sec: "Modern History", q: "Question text?",
       o: ["Option A", "Option B", "Option C", "Option D"],
       a: "B",                 // correct letter: A, B, C or D
       e: "Explanation text." },

   n = original question number · sec = one of the 14 section names in data.js
   (copy exactly) · e = explanation (optional) · d = "Easy"/"Medium"/"Hard" (optional)
   flag = optional warning shown in review, e.g. "Answer may be outdated"
   ===================================================================== */
// Source: West Bengal Urdu Academy Pre-Recruitment Coaching (WBUA MISC-2024 PH-I VST-4, Date: 17.09.2026). Complete: 100 questions.
// Questions with a "flag" highlight official answer key discrepancies or printing errata (Q6, Q75, Q77, Q94).

registerSet("SET-04", [

  // ==================================================================
  // 01. ANCIENT HISTORY  —  7 questions  (Q1, Q2, Q3, Q4, Q5, Q6, Q7)
  // ==================================================================
  { n: 1, sec: "Ancient History", q: "Who among the following was the first Mauryan ruler who tried to spread his message to the people through inscriptions?",
    o: ["Chandragupta","Ashoka","Brihadratha","Bindusara"], a: "B",
    e: "Emperor Ashoka was the first Indian ruler to communicate royal edicts, moral principles, and Dhamma directly to the public through rock and pillar inscriptions." },
  { n: 2, sec: "Ancient History", q: "What was the capital of the Satavahana Dynasty ?",
    o: ["Pratishthana","Vidisha","Patliputra","Vanji"], a: "A",
    e: "Pratishthana (modern Paithan in Aurangabad district, Maharashtra) along the Godavari River served as the primary capital of the Satavahana dynasty." },
  { n: 3, sec: "Ancient History", q: "Chola inscriptions describe Tirunamattukkani as",
    o: ["land gifted to Brahmanas","land of non-Brahmana peasant proprietors","land donated to Jaina institutions.","land gifted to temples"], a: "D",
    e: "In Chola epigraphy, land grants gifted to temples were termed 'Tirunamattukkani' or 'Devadana', whereas land gifted to Brahmanas was known as 'Brahmadeya'." },
  { n: 4, sec: "Ancient History", q: "During the reign of which of the following Pallavas, Hiuen Tsang visited the Pallava capital, Kanchi?",
    o: ["Narasimhavarman I","Narasimhavarman II","Mahendravarman II","Mahendravarman I"], a: "A",
    e: "The Chinese pilgrim Hiuen Tsang visited Kanchipuram around 640 CE during the reign of the Pallava king Narasimhavarman I (Mamalla)." },
  { n: 5, sec: "Ancient History", q: "Which of the following was a compilation of the teachings of Buddha in around 5th to 4th century BCE?",
    o: ["Tipitaka","Tattvartha","Avesta","Ashtanga Hridayam"], a: "A",
    e: "The Tipitaka (Three Baskets: Vinaya Pitaka, Sutta Pitaka, and Abhidhamma Pitaka) forms the definitive Pali canon preserving the teachings and monastic rules of Gautama Buddha." },
  { n: 6, sec: "Ancient History", q: "Where did Buddha give the last sermon before his Mahanirvana?",
    o: ["Vaishali","Sarnath","Lumbini","Kushinagar"], a: "D",
    e: "The official answer key marks (D) Kushinagar. In Buddhist traditions, Buddha delivered his last formal sermon to the assembly at Vaishali and gave his final personal instruction to Subhadda at Kushinagar.",
    flag: "Official key gives Kushinagar; traditionally the Buddha delivered his last formal public sermon at Vaishali before proceeding to his Mahaparinirvana at Kushinagar." },
  { n: 7, sec: "Ancient History", q: "Who was the most famous Shaka ruler known for his inscription at Girnar?",
    o: ["Menander","Demetrius","Rudrabhuti","Rudradaman"], a: "D",
    e: "The Western Kshatrapa ruler Rudradaman I is celebrated for his Junagadh (Girnar) rock inscription (c. 150 CE), the first major chaste Sanskrit royal inscription." },

  // ==================================================================
  // 02. MEDIEVAL HISTORY  —  1 question  (Q48)
  // ==================================================================
  { n: 48, sec: "Medieval History", q: "Gol Gumbaz is in",
    o: ["Jaipur","Junagadh","Bijapur","Gwalior"], a: "C",
    e: "Gol Gumbaz is the circular-domed mausoleum of Mohammed Adil Shah, Sultan of Bijapur (now Vijayapura in Karnataka), constructed in 1656." },

  // ==================================================================
  // 03. MODERN HISTORY  —  3 questions  (Q8, Q9, Q10)
  // ==================================================================
  { n: 8, sec: "Modern History", q: "Who among the following was the first Indian to unfurl the tricolour on foreign land?",
    o: ["Annie Besant","Bhikaiji Cama","Begum Hazrat Mahal","Lakshmi Sehgal"], a: "B",
    e: "Madam Bhikaiji Cama unfurled the first version of the Indian national flag at the International Socialist Conference held in Stuttgart, Germany, in August 1907." },
  { n: 9, sec: "Modern History", q: "Who among the following was the Nizam of Hyderabad in 1947?",
    o: ["Osman Ali","Nasir Jung","Mir Mahbub Ali Khan","Akbar Ali Khan"], a: "A",
    e: "Mir Osman Ali Khan (Asaf Jah VII) was the last reigning Nizam of Hyderabad when India achieved independence in 1947." },
  { n: 10, sec: "Modern History", q: "Who among the following assassinated Sir William Hutt Curzon Wyllie in London?",
    o: ["Sukhdev Thapar","Surya Sen","Madan Lal Dhingra","Khudiram Bose"], a: "C",
    e: "Madan Lal Dhingra, an associate of the India House in London, assassinated Sir William Hutt Curzon Wyllie on 1 July 1909." },

  // ==================================================================
  // 04. INDIAN GEOGRAPHY  —  16 questions  (Q14, Q15, Q16, Q17, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q51, Q74, Q75)
  // ==================================================================
  { n: 14, sec: "Indian Geography", q: "A portion of landmass from the shore line up to the shelf break that is submerged under shallow water is known as:",
    o: ["Trenches","Continental Drift","Oceanic Basin","Continental Shelf"], a: "D",
    e: "The continental shelf is the gently sloping, shallow marine terrace extending seaward from the coastline to the steeper continental slope." },
  { n: 15, sec: "Indian Geography", q: "Which of the following oceans is surrounded by the continent of North America and South America to the east?",
    o: ["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"], a: "A",
    e: "The Pacific Ocean is bordered by Asia and Australia to the west, and by North America and South America to its east." },
  { n: 16, sec: "Indian Geography", q: "Which country is the biggest producer of rice?",
    o: ["Russia","China","Brazil","Bangladesh"], a: "B",
    e: "China is the world's largest producer of paddy rice, followed by India." },
  { n: 17, sec: "Indian Geography", q: "Which of the following is NOT an example of Millets or coarse grains?",
    o: ["Jowar","Ragi","Wheat","Bajra"], a: "C",
    e: "Jowar (sorghum), bajra (pearl millet), and ragi (finger millet) are coarse cereals/millets, whereas wheat is a major staple cereal grain." },
  { n: 20, sec: "Indian Geography", q: "Which of the following is one of the basic plant nutrients of fertilizers that are commonly used in agriculture?",
    o: ["Arsenic","Potassium","Mercury","Sodium"], a: "B",
    e: "Nitrogen (N), Phosphorus (P), and Potassium (K) are the three essential primary macronutrients in agricultural fertilizers." },
  { n: 21, sec: "Indian Geography", q: "Which of the following factors is NOT responsible for the loss of fertility of agricultural land?",
    o: ["Higher cation exchange capacity of soil","Alkalisation of soil","Salinisation of soil","Waterlogging"], a: "A",
    e: "A higher Cation Exchange Capacity (CEC) enhances a soil's ability to retain and deliver essential mineral nutrients, thus preserving fertility." },
  { n: 22, sec: "Indian Geography", q: "Which is the largest continental shelf in the world?",
    o: ["The shelf of India","The Indian Ocean shelf","The shelf in the Pacific Ocean","The Siberian shelf in the Arctic Ocean"], a: "D",
    e: "The Siberian Shelf in the Arctic Ocean extends up to 1,500 km off the northern coast of Russia, making it the widest continental shelf on Earth." },
  { n: 23, sec: "Indian Geography", q: "Millions of years ago the Indian subcontinent was separated from the mainland by a large sea known as the:",
    o: ["Typhon","Prometheus","Tethys","Aegina"], a: "C",
    e: "The ancient Tethys Sea separated the supercontinents of Gondwana (including peninsular India) and Laurasia prior to the Himalayan orogeny." },
  { n: 24, sec: "Indian Geography", q: "Which of the following waterfalls is located in Madhya Pradesh?",
    o: ["Khandadhar","Shivasamudram","Dudhsagar","Dhuandhar"], a: "D",
    e: "Dhuandhar Falls is located on the Narmada River at Bhedaghat near Jabalpur in Madhya Pradesh." },
  { n: 25, sec: "Indian Geography", q: "In which of the following states is Anchar Lake located?",
    o: ["Jammu and Kashmir","Bihar","Meghalaya","Assam"], a: "A",
    e: "Anchar Lake is a freshwater lake located in Srinagar, Jammu and Kashmir, connected to the Dal Lake via the Amir Khan Nallah canal." },
  { n: 26, sec: "Indian Geography", q: "Which of the following Indian cities is situated at the banks of Lake Pichola?",
    o: ["Agra","Ahmedabad","Kurnool","Udaipur"], a: "D",
    e: "Lake Pichola is an artificial freshwater lake built in 1362 CE situated in Udaipur, Rajasthan." },
  { n: 27, sec: "Indian Geography", q: "As of 2021, which is the world's largest drainage basin with an area of about 70,00,000 km²?",
    o: ["Amazon basin","Congo basin","Amur basin","Nile basin"], a: "A",
    e: "The Amazon River basin covers approximately 7,000,000 km² across South America, representing the world's largest hydrological drainage basin." },
  { n: 28, sec: "Indian Geography", q: "Which of the following is also known as the White Mountain?",
    o: ["K2","Manaslu","Dhaulagiri I","Nanga Parbat"], a: "C",
    e: "Dhaulagiri I, the seventh-highest mountain peak in the world located in Nepal, derives its name from the Sanskrit word 'Dhavala' meaning 'dazzling white'." },
  { n: 51, sec: "Indian Geography", q: "Lucknow is situated on the bank of",
    o: ["Gomati","Ganga","Yamuna","Son"], a: "A",
    e: "Lucknow, the capital of Uttar Pradesh, lies along the banks of the Gomti River, a tributary of the Ganga." },
  { n: 74, sec: "Indian Geography", q: "The number of agro-climatic regions in India as per planning commission is -",
    o: ["12","13","14","15"], a: "D",
    e: "The Planning Commission delineated India into 15 broad agro-climatic zones based on topography, rainfall, temperature, and cropping patterns." },
  { n: 75, sec: "Indian Geography", q: "Which one of the following major seaports of India does not have natural harbour?",
    o: ["Mumbai","Cochin","Marmagao","Paradeep"], a: "C",
    e: "The answer sheet marks (C) Marmagao. However, Marmagao, Mumbai, and Cochin are natural harbours, whereas ports like Chennai are artificial harbours.",
    flag: "Official key marks (C) Marmagao; note that Marmagao is physically a natural protected estuary harbour." },

  // ==================================================================
  // 05. WEST BENGAL GEOGRAPHY  —  2 questions  (Q68, Q69)
  // ==================================================================
  { n: 68, sec: "West Bengal Geography", q: "In which year Darjeeling Himalayan Railway was recognised as world heritage site by UNESCO?",
    o: ["1989","1993","1995","1999"], a: "D",
    e: "The Darjeeling Himalayan Railway (toy train) was inscribed as a UNESCO World Heritage Site on 5 December 1999." },
  { n: 69, sec: "West Bengal Geography", q: "Which one is the largest district according to population in West Bengal?",
    o: ["Burdwan","Murshidabad","N. 24 Pargana","Hooghly"], a: "C",
    e: "According to the 2011 Census of India, North 24 Parganas is the most populous district in West Bengal (and the second most populous in India)." },

  // ==================================================================
  // 06. ARTS AND CULTURE  —  4 questions  (Q31, Q32, Q33, Q40)
  // ==================================================================
  { n: 31, sec: "Arts and Culture", q: "Who among the following wrote the novel 'Gora'?",
    o: ["Rabindranath Tagore","Abanindranath Tagore","Premchand","Mahatma Gandhi"], a: "A",
    e: "'Gora' is an epic Bengali novel written by Rabindranath Tagore, first published in book form in 1910." },
  { n: 32, sec: "Arts and Culture", q: "'Povadas' is a popular folk dance from the state of",
    o: ["Maharashtra","Gujarat","Rajasthan","Kerala"], a: "A",
    e: "Powada (or Povada) is a traditional Marathi ballad and dramatic folk dance form narrating heroic exploits, particularly those of Chhatrapati Shivaji Maharaj." },
  { n: 33, sec: "Arts and Culture", q: "Pt. Shiv Kumar Sharma, an accomplished Santoor player, originally hails from the State/UT of:",
    o: ["Jammu and Kashmir","Himachal Pradesh","Assam","Lakshadweep"], a: "A",
    e: "Pandit Shivkumar Sharma, the pioneer who introduced the Kashmiri folk santoor to Hindustani classical music, was born in Jammu, Jammu and Kashmir." },
  { n: 40, sec: "Arts and Culture", q: "Who among the following is worshipped as Nataraja before many classical dance performances in India?",
    o: ["Indra","Vishnu","Brahma","Shiva"], a: "D",
    e: "Lord Shiva is worshipped as Nataraja ('King of Dance'), embodying the cosmic cycle of creation and dissolution through the Tandava." },

  // ==================================================================
  // 07. INDIAN POLITY  —  0 questions
  // ==================================================================
  // (no questions from this section in this set)

  // ==================================================================
  // 08. INDIAN ECONOMY  —  6 questions  (Q11, Q12, Q13, Q18, Q36, Q42)
  // ==================================================================
  { n: 11, sec: "Indian Economy", q: "What type of unemployment will be generated in the agricultural sector in case it employs additional labourers only for some time of the year like the harvest season?",
    o: ["Cyclic unemployment","Structural unemployment","Disguised unemployment","Seasonal unemployment"], a: "D",
    e: "Seasonal unemployment occurs when agrarian workers find employment only during peak agricultural cycles such as sowing and harvesting." },
  { n: 12, sec: "Indian Economy", q: "The ________ was set up in 1963 with responsibilities in the field of seed production, particularly the foundation stock of HYV seeds.",
    o: ["New Cooperative Development","Agricultural seeds corporation","National Seeds Corporation","National Farm Corporation"], a: "C",
    e: "The National Seeds Corporation (NSC) was established in March 1963 under the Ministry of Agriculture to initiate commercial production of high-yielding varieties." },
  { n: 13, sec: "Indian Economy", q: "Which industry do cotton, jute, silk, woollen textiles, sugar and edible oil, etc. belong to?",
    o: ["agro based industry","heavy industry","joint sector industry","mineral based industry"], a: "A",
    e: "Agro-based industries obtain raw inputs directly from agricultural produce (fibres, cane, oilseeds)." },
  { n: 18, sec: "Indian Economy", q: "\"Agricultural Census\" is conducted in India at an interval of",
    o: ["six years","five years","four years","ten years"], a: "B",
    e: "The Agricultural Census has been conducted quinquennially (every 5 years) in India since 1970–71 by the Department of Agriculture and Farmers Welfare." },
  { n: 36, sec: "Indian Economy", q: "Which of the following events happened in 1950?",
    o: ["First Five-Year Plan was started","The Planning Commission was set up","First National Agricultural Policy was adopted","Industrial Policy Resolution was adopted."], a: "B",
    e: "The Planning Commission was established by an executive resolution of the Government of India on 15 March 1950 under the chairmanship of Jawaharlal Nehru." },
  { n: 42, sec: "Indian Economy", q: "Who among the following was the Prime Minister when the Globalisation Policy as part of 'New Economic Policy' was introduced?",
    o: ["Manmohan Singh","PV Narasimha Rao","Narendra Modi","Atal Bihari Vajpayee"], a: "B",
    e: "P. V. Narasimha Rao was the Prime Minister of India when the New Industrial and Economic Policy of 1991 (LPG reforms) was launched, with Manmohan Singh as Finance Minister." },

  // ==================================================================
  // 09. PHYSICS  —  8 questions  (Q39, Q52, Q53, Q54, Q55, Q56, Q57, Q60)
  // ==================================================================
  { n: 39, sec: "Physics", q: "A javelin thrown by an athlete is in ________ motion.",
    o: ["rectilinear","periodic","curvilinear","oscillatory"], a: "C",
    e: "A thrown javelin moves under the influence of gravity along a parabolic curved trajectory, which is an example of curvilinear (projectile) motion." },
  { n: 52, sec: "Physics", q: "The principle of 'Black hole' was enunciated by",
    o: ["C.V. Raman","H.J. Bhabha","S. Chandrashekhar","H. Khurana"], a: "C",
    e: "Indian-American astrophysicist Subrahmanyan Chandrasekhar determined the maximum mass limit for stable white dwarfs (Chandrasekhar limit), foundational to black hole formation." },
  { n: 53, sec: "Physics", q: "The velocity of sound in a gas depends on-",
    o: ["Wavelength only","Density and elasticity of gas","Intensity only","Amplitude and frequency"], a: "B",
    e: "The velocity of sound in a gaseous medium is determined by the medium's bulk elasticity and volumetric density: v = √(γP/ρ)." },
  { n: 54, sec: "Physics", q: "A sphere rolls down on two inclined planes of different angles but same height, it does so-",
    o: ["In the same time","With the same speed","In the same time with the same speed","In the same time with the same kinetic energy"], a: "B",
    e: "By conservation of mechanical energy (mgh = 1/2 mv² + 1/2 Iω²), the linear velocity at the bottom depends only on vertical height h, reaching the base with the same speed but differing times." },
  { n: 55, sec: "Physics", q: "When a body is immersed in a fluid, then force acting on it -",
    o: ["Upward thrust","Weight","Mass","Both (A) and (B)"], a: "D",
    e: "An immersed body experiences two acting forces: the downward gravitational attraction (weight) and the upward buoyant force (thrust)." },
  { n: 56, sec: "Physics", q: "Cream gets separated out from milk when it is churned. This is due to-",
    o: ["Gravitational Force","Centripetal Force","Centrifugal Force","Frictional Force"], a: "C",
    e: "Centrifugal action pushes the denser aqueous milk fractions toward the exterior wall while the lighter lipid cream concentrates centrally." },
  { n: 57, sec: "Physics", q: "Motion of a train is an example of",
    o: ["Rotatory motion","Spin motion","Projectile motion","Translatory motion"], a: "D",
    e: "A train progressing along railroad tracks moves as a macroscopic body whose points travel identical paths in a given timeframe (translatory motion)." },
  { n: 60, sec: "Physics", q: "When a metal is heated in a flame, the electrons absorb energy and jump to higher energy state. On coming back to the lower energy state, they emit light, which we can observe in",
    o: ["Raman spectra","Absorption spectra","Emission spectra","Fluorescence"], a: "C",
    e: "Photons emitted by de-exciting electrons falling back to ground or lower energy states produce characteristic atomic emission spectra (flame emission)." },

// ==================================================================
  // 10. CHEMISTRY  —  8 questions  (Q58, Q59, Q61, Q62, Q63, Q64, Q65, Q66, Q67)
  // ==================================================================
  { n: 58, sec: "Chemistry", q: "All isotopes of the same element have-",
    o: ["Different atomic numbers and different atomic mass","Different atomic numbers and the same atomic mass","The same atomic number but different atomic mass","The same atomic number and the same atomic mass"], a: "C",
    e: "Isotopes possess identical nuclear charge / atomic number (same number of protons) but different atomic masses due to varying neutron counts." },
  { n: 59, sec: "Chemistry", q: "CN- ion is isoelectronic with-",
    o: ["N2","CO","Both A & B","None"], a: "C",
    e: "CN⁻ has 6 (from C) + 7 (from N) + 1 (charge) = 14 electrons. N₂ has 7 + 7 = 14 electrons, and CO has 6 + 8 = 14 electrons. Thus, it is isoelectronic with both." },
  { n: 61, sec: "Chemistry", q: "The Modern Periodic table consists of 18 groups and 7 periods. What is the atomic number of the element placed in the 2nd group and the 4th period?",
    o: ["20","22","18","10"], a: "A",
    e: "The element in Period 4, Group 2 is Calcium, which has atomic number 20 and electronic configuration [Ar] 4s²." },
  { n: 62, sec: "Chemistry", q: "Water has high boiling point because it -",
    o: ["Is Ionic","Is Covalent","Has High Dielectric Constant","Is having Hydrogen Bonding"], a: "D",
    e: "Intermolecular hydrogen bonding between polarized oxygen and hydrogen atoms requires substantial thermal energy to break, conferring an anomalously high boiling point on water." },
  { n: 63, sec: "Chemistry", q: "The oxidation number of sulphur in S8, S2F2 and H2S respectively are-",
    o: ["0, +1 and -2","+2, +1 and -2","0, +1 and +2","-2, +1 and -2"], a: "A",
    e: "In elemental octa-sulfur S8, oxidation state = 0. In S2F2, fluorine is -1 so 2S - 2 = 0 => S = +1. In H2S, hydrogen is +1 so S = -2." },
  { n: 64, sec: "Chemistry", q: "Spinach contains",
    o: ["Lactic Acid","Oxalic Acid","Carbonic Acid","Formic Acid"], a: "B",
    e: "Spinach (Spinacia oleracea) contains high concentrations of oxalic acid (oxalates)." },
  { n: 65, sec: "Chemistry", q: "Washing soda is chemically called as",
    o: ["Sodium carbonate","Sodium chloride","Sodium hydroxide","Potassium nitrate"], a: "A",
    e: "Washing soda is chemically sodium carbonate decahydrate (Na₂CO₃·10H₂O)." },
  { n: 66, sec: "Chemistry", q: "Which among the following CANNOT be used as indicators?",
    o: ["China rose","Phenolphthalein","Common salt","Turmeric"], a: "C",
    e: "China rose, turmeric, and phenolphthalein change color at different pH levels and serve as acid-base indicators; common salt (NaCl) is a neutral salt with no indicator properties." },
  { n: 67, sec: "Chemistry", q: "Which base is present in milk of magnesia?",
    o: ["Magnesium hydroxide","Ammonium hydroxide","Sodium hydroxide","Calcium hydroxide"], a: "A",
    e: "Milk of magnesia is an aqueous suspension of magnesium hydroxide, Mg(OH)₂, used as an antacid and laxative." },

  // ==================================================================
  // 11. BIOLOGY  —  0 questions
  // ==================================================================
  // (no biological taxonomy questions in this set; physiology/biochem covered under chemistry)

  // ==================================================================
  // 12. STATIC GK  —  17 questions  (Q19, Q29, Q30, Q34, Q35, Q37, Q38, Q41, Q43, Q44, Q45, Q46, Q47, Q49, Q50, Q70, Q71, Q72, Q73)
  // ==================================================================
  { n: 19, sec: "Static GK", q: "According to Census of India 2011, how many districts are there in India?",
    o: ["630","640","610","620"], a: "B",
    e: "As recorded in the Census of India 2011, there were a total of 640 districts across 28 states and 7 union territories." },
  { n: 29, sec: "Static GK", q: "Who among the following wrote the novel 'Rangbhumi: The Arena of Life'?",
    o: ["Rabindranath Tagore","Abanindranath Tagore","Munshi Premchand","Mahatma Gandhi"], a: "C",
    e: "'Rangbhumi' is an acclaimed Hindi novel published in 1924 by Munshi Premchand depicting peasant struggles against industrial encroachment." },
  { n: 30, sec: "Static GK", q: "Who among the following published a set of Ashokan inscriptions in the year 1877?",
    o: ["DC Sircar","Colin Mackenzie","MS Vats","Alexander Cunningham"], a: "D",
    e: "Alexander Cunningham compiled and published Corpus Inscriptionum Indicarum, Vol. I (Inscriptions of Asoka) in 1877." },
  { n: 34, sec: "Static GK", q: "Prof M Yunus won the Nobel peace prize in which year?",
    o: ["2002","2006","2004","2001"], a: "B",
    e: "Bangladeshi economist Muhammad Yunus and Grameen Bank jointly received the Nobel Peace Prize in 2006 for their pioneering microcredit work." },
  { n: 35, sec: "Static GK", q: "As of June 2023, which of the following is the longest train route in India?",
    o: ["Jammu Tawi-Kanyakumari","Dibrugarh -Kanyakumari","Guwahati- Trivandrum","Amritsar -Kochuveli"], a: "B",
    e: "The Vivek Express running between Dibrugarh in Assam and Kanyakumari in Tamil Nadu covers 4,189 km, making it India's longest train route by distance and time." },
  { n: 37, sec: "Static GK", q: "How many players are there on each side of the Kabaddi Team in the field?",
    o: ["9","10","8","7"], a: "D",
    e: "A standard kabaddi squad consists of 12 players, with 7 active players taking the mat on each side during play." },
  { n: 38, sec: "Static GK", q: "Which of the following terms is NOT related to cricket?",
    o: ["No Ball","Wide Ball","Deuce","Wicket"], a: "C",
    e: "'Deuce' is a scoring term used in racket sports like tennis and badminton; No Ball, Wide Ball, and Wicket are standard cricket terms." },
  { n: 41, sec: "Static GK", q: "Which government scheme's main aim is to 'transform rural poor youth into an economically independent and globally relevant workforce'?",
    o: ["Shyama Prasad Mukherjee Rurban Mission","National Career Service","Deen Dayal Upadhyaya Grameen Kaushalya Yojana","Deendayal Antyoday Yojana-National Rural Livelihood Mission"], a: "C",
    e: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY), launched under the Ministry of Rural Development in 2014, focuses on market-led skill development for rural youth." },
  { n: 43, sec: "Static GK", q: "The Nobel Prize for deciphering the language of bee was awarded to",
    o: ["H.G. Khurana","K.V. Frisch","Julian Huxley","Dorothy Hodgkin"], a: "B",
    e: "Austrian ethologist Karl von Frisch was awarded the Nobel Prize in Physiology or Medicine in 1973 for deciphering the 'waggle dance' communication of honeybees." },
  { n: 44, sec: "Static GK", q: "Sir C.V. Raman received Nobel Prize for Physics in the year",
    o: ["1928","1930","1932","1950"], a: "B",
    e: "Sir C.V. Raman was awarded the Nobel Prize in Physics in 1930 for his discovery of the inelastic scattering of light (the Raman Effect) announced on 28 February 1928." },
  { n: 45, sec: "Static GK", q: "In which of the following States lies Sriharikota, the spaceport of India?",
    o: ["Maharashtra","Andhra Pradesh","Tamil Nadu","Kerala"], a: "B",
    e: "Sriharikota barrier island, home to the Satish Dhawan Space Centre (SDSC SHAR), is located in Tirupati district of Andhra Pradesh." },
  { n: 46, sec: "Static GK", q: "To which foreigner was 'Bharat Ratna' awarded in 1990?",
    o: ["Nelson Mandela","Mikhail Gorbachov","Abdul Ghaffar","Yasir Arafat"], a: "A",
    e: "Former South African President and anti-apartheid leader Nelson Mandela received India's highest civilian honour, the Bharat Ratna, in 1990. (Khan Abdul Ghaffar Khan received it in 1987)." },
  { n: 47, sec: "Static GK", q: "Taiwan was earlier known as",
    o: ["Tai Pei","Hongkong","Yangon","Formosa"], a: "D",
    e: "Portuguese navigators who sighted Taiwan in 1542 named it 'Ilha Formosa' (Beautiful Island); it remained widely known as Formosa until the 20th century." },
  { n: 49, sec: "Static GK", q: "Venice of the East is",
    o: ["Shillong","Kolkata","Alappuzha","Bengaluru"], a: "C",
    e: "Lord Curzon famously described Alappuzha (Alleppey) in Kerala as the 'Venice of the East' because of its intricate network of backwaters and lagoons." },
  { n: 50, sec: "Static GK", q: "The city of seven Hills is",
    o: ["Milan","Athens","Barcelona","Rome"], a: "D",
    e: "Rome, Italy, is traditionally known as the 'City of Seven Hills' (Aventine, Caelian, Capitoline, Esquiline, Palatine, Quirinal, and Viminal)." },
  { n: 70, sec: "Static GK", q: "Settlement pattern in a region is affected in India by:",
    o: ["Social infrastructure","Physical Linkages","Population growth rate","Agricultural Practices"], a: "D",
    e: "The official answer key marks (D) Agricultural Practices; land tenancy, soil fertility, and farming practices heavily shape nucleated and dispersed village settlements across rural India." },
  { n: 71, sec: "Static GK", q: "In which year Family Planning Programme of India renamed as Family Welfare Programme?",
    o: ["1982","1954","1973","1976"], a: "D",
    e: "The Family Planning Programme was officially renamed as the Family Welfare Programme in 1976–1977 to reflect a broader, comprehensive health and maternal-child welfare approach." },
  { n: 72, sec: "Static GK", q: "Agricultural population per unit area of cultivated land is called",
    o: ["Agricultural density","Economic density","Physiological density","Nutritional density"], a: "A",
    e: "Agricultural density is defined as the ratio of the agricultural population (farmers and cultivators) to the total cultivated or arable land area." },
  { n: 73, sec: "Static GK", q: "Regressive stage of demographic transition is -",
    o: ["In which both birth and death rates are high","In which birth rate and death rate are low and declining","In which birth and death rates are unchanged over a long period of time.","None of the above"], a: "B",
    e: "In the late or regressive stage of demographic transition, birth and death rates reach low levels, with fertility frequently falling below replacement, leading to population decline." },

  // ==================================================================
  // 13. CURRENT AFFAIRS  —  0 questions
  // ==================================================================
  // (no specific current affairs questions in this set)

  // ==================================================================
  // 14. APTITUDE & MENTAL ABILITY  —  25 questions  (Q76 to Q100)
  // ==================================================================
  { n: 76, sec: "Aptitude & Mental Ability", q: "(1 - 1/3)(1 - 1/4)(1 - 1/5) ... (1 - 1/n) is equal to",
    o: ["1 / 2n","1 / 5n","1 / 3n","1 / n"], a: "D",
    e: "The terms evaluate as (2/3) × (3/4) × (4/5) × ... × ((n-1)/n) = 2/n. The printed answer key marks (D) 1/n.",
    flag: "The telescoping product (2/3)(3/4)...((n-1)/n) evaluates strictly to 2/n; the official key marks (D) 1/n." },
  { n: 77, sec: "Aptitude & Mental Ability", q: "The greatest number of four digits which when divided by 3, 5, 7 and 9 leaves remainders 1, 3, 5 and 7, respectively is",
    o: ["9763","9764","9766","9765"], a: "D",
    e: "Divisors minus remainders: 3-1 = 5-3 = 7-5 = 9-7 = 2. LCM(3, 5, 7, 9) = 315. The greatest 4-digit multiple of 315 is 9765. The number is 9765 - 2 = 9763. The answer key marks (D) 9765.",
    flag: "Official key gives (D) 9765; the exact value after subtracting the common difference of 2 is 9763 (A)." },
  { n: 78, sec: "Aptitude & Mental Ability", q: "The average of nine numbers is 50. The average of the first five numbers is 54 and that of the last three numbers is 52. Then, the sixth number is",
    o: ["34","24","44","30"], a: "B",
    e: "Sum of 9 numbers = 9 × 50 = 450. Sum of first 5 numbers = 5 × 54 = 270. Sum of last 3 numbers = 3 × 52 = 156. Sixth number = 450 - (270 + 156) = 450 - 426 = 24." },
  { n: 79, sec: "Aptitude & Mental Ability", q: "The average of 6 observations is 45.5. If one new observation is added to the previous observations, then the new average becomes 47. The new observation is",
    o: ["58","56","50","46"], a: "B",
    e: "Old total = 6 × 45.5 = 273. New total = 7 × 47 = 329. New observation = 329 - 273 = 56." },
  { n: 80, sec: "Aptitude & Mental Ability", q: "The ratio of the ages of a father and his son 10 years hence will be 5: 3, while 10 years ago, it was 3: 1. The ratio of the ages of the son to that of the father today is",
    o: ["1:2","1:3","2:3","2:5"], a: "A",
    e: "Let ages 10 years ago be 3x and x. 20 years later: (3x + 20) / (x + 20) = 5 / 3 => 9x + 60 = 5x + 100 => 4x = 40 => x = 10. Present father = 30 + 10 = 40; son = 10 + 10 = 20. Son:Father = 20:40 = 1:2." },
  { n: 81, sec: "Aptitude & Mental Ability", q: "A number is increased by 10% and then the increased number is decreased by 10%. The net increase or decrease is",
    o: ["1% decrease","2% increase","0.1% increase","0.2% decrease"], a: "A",
    e: "Net change = +10 - 10 - (10 × 10)/100 = -1% (1% decrease)." },
  { n: 82, sec: "Aptitude & Mental Ability", q: "Two numbers x and y are respectively 20% and 50% more than a third number. x is how much per cent of y?",
    o: ["30","45","60","80"], a: "D",
    e: "Let the third number be 100 => x = 120, y = 150. (x / y) × 100 = (120 / 150) × 100 = (4/5) × 100 = 80%." },
  { n: 83, sec: "Aptitude & Mental Ability", q: "In one litre of mixture of alcohol and water, water is 30%. The amount of alcohol that must be added to the mixture, so that the part of water in the mixture becomes 15%, is",
    o: ["1000 mL","700 mL","300 mL","900 mL"], a: "A",
    e: "Water = 30% of 1000 mL = 300 mL. In the new mixture, 300 mL represents 15% => Total volume = 300 / 0.15 = 2000 mL. Alcohol to add = 2000 - 1000 = 1000 mL." },
  { n: 84, sec: "Aptitude & Mental Ability", q: "In an examination, a student had to obtain 33% of the maximum marks to pass. He got 125 marks and failed by 40 marks. The maximum marks were",
    o: ["500","600","800","1000"], a: "A",
    e: "Passing marks = 125 + 40 = 165. 33% of Max Marks = 165 => Maximum Marks = 165 / 0.33 = 500." },
  { n: 85, sec: "Aptitude & Mental Ability", q: "A shopkeeper sold two bicycles for Rs. 1500 each. On one, he gains 25% and on the other he loses 20%. His gain or loss per cent in the whole transaction is",
    o: ["loss 2 18/41%","gain 2 18/41%","2% gain","2% loss"], a: "A",
    e: "Total SP = ₹3000. CP1 = 1500 / 1.25 = ₹1200. CP2 = 1500 / 0.80 = ₹1875. Total CP = ₹3075. Loss = 3075 - 3000 = ₹75. Loss % = (75 / 3075) × 100 = 100 / 41 = 2 18/41% loss." },
  { n: 86, sec: "Aptitude & Mental Ability", q: "12 copies of a book were sold for Rs. 1800, thereby gaining cost price of 3 copies. The cost price of a copy is:",
    o: ["Rs. 120","Rs. 150","Rs. 1200","Rs. 1500"], a: "A",
    e: "SP of 12 copies - CP of 12 copies = CP of 3 copies => SP of 12 copies = CP of 15 copies. 15 × CP = 1800 => CP of 1 copy = 1800 / 15 = ₹120." },
  { n: 87, sec: "Aptitude & Mental Ability", q: "A and B can do a piece of work in 12 days, B and C in 8 days and C and A in 6 days. How long would B take to do the same work alone?",
    o: ["24 days","32 days","40 days","48 days"], a: "D",
    e: "Work per day: 2(A + B + C) = 1/12 + 1/8 + 1/6 = (2 + 3 + 4)/24 = 9/24 => A + B + C = 9/48 = 3/16. B's daily work = (A + B + C) - (A + C) = 3/16 - 1/6 = (9 - 8)/48 = 1/48. B alone takes 48 days." },
  { n: 88, sec: "Aptitude & Mental Ability", q: "2 men and 5 women can do a work in 12 days. 5 men and 2 women can do that work in 9 days. Only 3 women can finish the same work in:",
    o: ["36 days","21 days","30 days","42 days"], a: "A",
    e: "12(2M + 5W) = 9(5M + 2W) => 24M + 60W = 45M + 18W => 21M = 42W => 1M = 2W. Total work = 12(2(2W) + 5W) = 12 × 9W = 108 W-days. Time for 3 women = 108 / 3 = 36 days." },
  { n: 89, sec: "Aptitude & Mental Ability", q: "A person covers half of his journey at 30 Km/h and the remaining half at 20 Km/h. The average speed for the whole journey is:",
    o: ["25 Km/h","28 Km/h","32 Km/h","None of these"], a: "D",
    e: "Average speed = (2 × v1 × v2) / (v1 + v2) = (2 × 30 × 20) / (30 + 20) = 1200 / 50 = 24 km/h ('None of these')." },
  { n: 90, sec: "Aptitude & Mental Ability", q: "A man can row 6 Km/h in still water. If the speed of the current is 2 Km/h, it takes 3 hrs more in upstream than in the downstream for the same distance. The distance is:",
    o: ["30 Km","24 Km","20 Km","32 Km"], a: "B",
    e: "Downstream speed = 6 + 2 = 8 km/h. Upstream speed = 6 - 2 = 4 km/h. d/4 - d/8 = 3 => d/8 = 3 => d = 24 km." },
  { n: 91, sec: "Aptitude & Mental Ability", q: "The difference between the compound interest and simple interest on a certain sum at 5% for 2 years is Rs. 1.50. The sum is:",
    o: ["Rs. 700","Rs. 600","Rs. 500","None of these"], a: "B",
    e: "Difference = P(r/100)² => 1.50 = P(5/100)² = P(1/400) => P = 1.50 × 400 = ₹600." },
  { n: 92, sec: "Aptitude & Mental Ability", q: "A sum of money is divided among A, B, C and D in the ratio of 2:3:7:11, respectively. If the share of C is Rs. 2755 more than the share of A, then what is the total amount of money of B and D together?",
    o: ["Rs. 4408","Rs. 5510","Rs. 6612","Rs. 7714"], a: "D",
    e: "Difference between C and A = 7x - 2x = 5x = 2755 => x = 551. Total amount of B and D = 3x + 11x = 14x = 14 × 551 = ₹7714." },
  { n: 93, sec: "Aptitude & Mental Ability", q: "If a² + b² + c² = 2(a - b - c) - 3, then the value of (a - b + c) is:",
    o: ["-1","3","1","-2"], a: "C",
    e: "(a² - 2a + 1) + (b² + 2b + 1) + (c² + 2c + 1) = 0 => (a - 1)² + (b + 1)² + (c + 1)² = 0 => a = 1, b = -1, c = -1. Therefore, a - b + c = 1 - (-1) + (-1) = 1 + 1 - 1 = 1." },
  { n: 94, sec: "Aptitude & Mental Ability", q: "The sides of a triangle are in the ratio 3: 4: 5. If its perimeter is 36 cm, then the area of the triangle is :",
    o: ["57 m²","54 m²","56.5 m²","None of these"], a: "B",
    e: "3x + 4x + 5x = 12x = 36 => x = 3 cm. Sides are 9, 12, 15 cm (a right-angled triangle). Area = (1/2) × 9 × 12 = 54 cm². (The question paper printed units as m² instead of cm²).",
    flag: "The numerical value is 54, but the paper prints the units as m² instead of cm²." },
  { n: 95, sec: "Aptitude & Mental Ability", q: "If all the sides of a triangle are increased by 200%, then the area of the triangle will increase by :",
    o: ["400%","600%","800%","None of these"], a: "C",
    e: "Each side becomes 1 + 2 = 3 times its original length. Since area is proportional to the square of linear dimensions, new area = 3² = 9 times the original area. Percentage increase = (9 - 1) × 100 = 800%." },
  { n: 96, sec: "Aptitude & Mental Ability", q: "If the circumference of a circle is equal to the perimeter of a square, what is the ratio of the area of the circle to the area of the square?",
    o: ["22: 7","14:11","11:7","4:1"], a: "B",
    e: "2πr = 4a => a = (πr)/2. Area of circle / Area of square = (πr²) / [(π²r²)/4] = 4/π = 4 / (22/7) = 28/22 = 14:11." },
  { n: 97, sec: "Aptitude & Mental Ability", q: "If the measures of a diagonal and the area of a rectangle are 25 cm and 168 cm² respectively, what is the length of the rectangle?",
    o: ["31 cm","24 cm","17 cm","27 cm"], a: "B",
    e: "l² + b² = 25² = 625 and l × b = 168. (l + b)² = 625 + 2(168) = 961 => l + b = 31. (l - b)² = 625 - 2(168) = 289 => l - b = 17. 2l = 48 => l = 24 cm." },
  { n: 98, sec: "Aptitude & Mental Ability", q: "A and B are two alloys of gold and copper prepared by mixing metals in the ratio 7 : 2 and 7 : 11 respectively. If equal quantities of the alloys are melted to form a third alloy C, the ratio of gold and copper in C will be:",
    o: ["5:7","5:9","7:5","9:5"], a: "C",
    e: "Alloy A gold = 7/9 = 14/18; copper = 2/9 = 4/18. Alloy B gold = 7/18; copper = 11/18. Total gold = 14 + 7 = 21; Total copper = 4 + 11 = 15. Ratio of gold to copper = 21 : 15 = 7 : 5." },
  { n: 99, sec: "Aptitude & Mental Ability", q: "If 738A6A is divisible by 11, then the value of A is :",
    o: ["6","3","9","1"], a: "C",
    e: "Difference between sum of odd-placed digits and even-placed digits: (A + A + 3) - (6 + 8 + 7) = 2A + 3 - 21 = 2A - 18. For divisibility by 11, 2A - 18 = 0 => 2A = 18 => A = 9." },
  { n: 100, sec: "Aptitude & Mental Ability", q: "What is the ratio of the perimeter of the shaded region to the circumference of the circle?",
    o: ["3/4","(4 + π) / 4π","2π / (4 + π)","(4 + π) / 2π"], a: "B",
    e: "For a shaded quadrant: perimeter includes arc length (πr/2) plus two radii (2r) = 2r + πr/2 = r(4 + π)/2. Circumference = 2πr. Ratio = [r(4 + π)/2] / (2πr) = (4 + π) / 4π." },

]);