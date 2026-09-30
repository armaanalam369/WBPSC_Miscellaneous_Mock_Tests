/* =====================================================================
   questions/set-09.js  —  SET-09
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
// Source: Miscellaneous Studies Mock Test – 09 (Vision Academy Bangla, Miscellaneous Studies (P) 2024, Test – 09). Complete: 100 questions.
// Q1–53 come from the English version; Q54–100 are translated from the Bengali PDF (answers follow the paper's key).
// Questions with a "flag" show a warning in review (wrong / unclear key) — see the flag on Q77.

registerSet("SET-09", [

  // ==================================================================
  // 01. ANCIENT HISTORY  —  3 questions  (Q1, Q2, Q3)
  // ==================================================================
  { n: 1, sec: "Ancient History", q: "Which of the following pairs is not correct (Mahajanapada and its Capital)?",
    o: ["Anga – Champa","Vatsa – Kaushambi","Matsya – Viratanagara","Asmaka – Suktimati"], a: "D",
    e: "The capital of Asmaka (or Assaka) Mahajanapada was Podana or Potali (the only Mahajanapada located in South India). Suktimati was the capital of the Chedi Mahajanapada. All other pairs are correct." },
  { n: 2, sec: "Ancient History", q: "In which Major Rock Edict of Ashoka are the horrors of the Kalinga War and his remorse described?",
    o: ["5th Rock Edict","10th Rock Edict","11th Rock Edict","13th Major Rock Edict"], a: "D",
    e: "Ashoka's Major Rock Edict XIII describes the Kalinga War fought in 261 BCE and narrates his profound transformation from ‘Chandashoka’ to ‘Dharmashoka’." },
  { n: 3, sec: "Ancient History", q: "Which book was authored by Varahamihira, the famous astronomer of the Gupta era?",
    o: ["Aryabhatiya","Panchasiddhantika","Brahmasphutasiddhanta","Suryasiddhanta"], a: "B",
    e: "Varahamihira was one of the Navaratnas of the Gupta court. His major works include Panchasiddhantika and Brihat Samhita. Aryabhatiya was written by Aryabhata." },

  // ==================================================================
  // 02. MEDIEVAL HISTORY  —  5 questions  (Q4, Q5, Q6, Q56, Q57)
  // ==================================================================
  { n: 4, sec: "Medieval History", q: "Which Sultan of Delhi was the first to establish a permanent standing army and introduce the practice of paying cash salaries to soldiers?",
    o: ["Iltutmish","Balban","Alauddin Khalji","Muhammad bin Tughluq"], a: "C",
    e: "Alauddin Khalji ended the Iqta system for soldiers and began paying them cash salaries directly from the state treasury. He also introduced the systems of Dagh (branding of horses) and Huliya (descriptive roll of soldiers) to prevent corruption." },
  { n: 5, sec: "Medieval History", q: "Krishnadeva Raya, the greatest ruler of the Vijayanagara Empire, belonged to which dynasty?",
    o: ["Sangama Dynasty","Saluva Dynasty","Tuluva Dynasty","Aravidu Dynasty"], a: "C",
    e: "Krishnadeva Raya was the third and most powerful ruler of the Tuluva Dynasty. His reign is regarded as the golden age of Telugu literature." },
  { n: 6, sec: "Medieval History", q: "Which Sikh Guru was executed by the Mughal Emperor Jahangir?",
    o: ["Guru Arjan Dev","Guru Tegh Bahadur","Guru Hargobind","Guru Gobind Singh"], a: "A",
    e: "In 1606, Jahangir executed the 5th Sikh Guru, Guru Arjan Dev, for aiding his rebel son Khusrau. The 9th Sikh Guru, Guru Tegh Bahadur, was executed by Aurangzeb." },
  { n: 56, sec: "Medieval History", q: "Who built the Grand Trunk Road (‘Sadak-e-Azam’) in the medieval period?",
    o: ["Akbar","Sher Shah Suri","Alauddin Khalji","Shah Jahan"], a: "B",
    e: "Sher Shah, the founder of the Sur dynasty, built this long road from Sonargaon (Bangladesh) up to the Indus river or Peshawar to make trade and travel easier." },
  { n: 57, sec: "Medieval History", q: "Who was the author of the books ‘Ain-i-Akbari’ and ‘Akbarnama’?",
    o: ["Gulbadan Begum","Abul Fazl","Faizi","Abdul Qadir Badauni"], a: "B",
    e: "Abul Fazl, a courtier and one of the Navaratnas of Akbar, wrote in Persian the biographical history Akbarnama (its 3rd volume is the Ain-i-Akbari)." },

  // ==================================================================
  // 03. MODERN HISTORY  —  6 questions  (Q7, Q8, Q9, Q10, Q11, Q12)
  // ==================================================================
  { n: 7, sec: "Modern History", q: "Who among the following was NOT an initial member of the Governor-General’s Council formed under the Regulating Act of 1773?",
    o: ["Philip Francis","John Clavering","Richard Barwell","Charles Wood"], a: "D",
    e: "The four council members serving alongside Governor-General Warren Hastings were Philip Francis, John Clavering, George Monson, and Richard Barwell. Charles Wood was associated with the Wood's Despatch of 1854." },
  { n: 8, sec: "Modern History", q: "Lord Curzon formally implemented the Partition of Bengal on October 16, 1905. At whose call did Bengalis observe this day as ‘Raksha Bandhan Day’?",
    o: ["Surendranath Banerjee","Rabindranath Tagore","Ramendra Sundar Tribedi","Ananda Mohan Bose"], a: "B",
    e: "To foster communal harmony and solidarity between Hindus and Muslims, Rakhi Bandhan was observed across Bengal upon the call of Rabindranath Tagore." },
  { n: 9, sec: "Modern History", q: "In which special session of the Indian National Congress was the resolution of the Non-Cooperation Movement of 1920 first adopted?",
    o: ["Nagpur Session","Calcutta Special Session","Bombay Session chaired by Lala Lajpat Rai","Lahore Session"], a: "B",
    e: "In September 1920, the resolution for the Non-Cooperation Movement was initially adopted at the Special Session in Calcutta presided over by Lala Lajpat Rai. It received formal ratification at the regular Nagpur session in December of the same year." },
  { n: 10, sec: "Modern History", q: "What was the primary demand or goal of the ‘Nehru Report’ drafted in 1928?",
    o: ["Complete Independence (Poorna Swaraj)","Dominion Status","Separate Electorates","Dyarchy"], a: "B",
    e: "The report, prepared under the chairmanship of Motilal Nehru, recommended ‘Dominion Status’ for India. Younger leaders like Subhas Chandra Bose and Jawaharlal Nehru opposed this and pressed for complete independence (Poorna Swaraj)." },
  { n: 11, sec: "Modern History", q: "Who was the Prime Minister of Britain when the Cripps Mission arrived in India (1942)?",
    o: ["Ramsay MacDonald","Clement Attlee","Winston Churchill","Neville Chamberlain"], a: "C",
    e: "During World War II (1939–1945), Winston Churchill (Conservative Party) served as the British Prime Minister. Clement Attlee (Labour Party) was Prime Minister when India achieved independence in 1947." },
  { n: 12, sec: "Modern History", q: "In which year was the Wavell Plan announced, and the related Shimla Conference held?",
    o: ["1942","1945","1946","1944"], a: "B",
    e: "Viceroy Lord Wavell proposed a plan in June 1945 to break the political deadlock in India. The Shimla Conference met between June 25 and July 14, 1945, to discuss these proposals." },

  // ==================================================================
  // 04. INDIAN GEOGRAPHY  —  12 questions  (Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q44, Q52)
  // ==================================================================
  { n: 13, sec: "Indian Geography", q: "Through which of the following states does the ‘Tropic of Cancer’ NOT pass?",
    o: ["Tripura","Mizoram","Odisha","Rajasthan"], a: "C",
    e: "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does not traverse Odisha." },
  { n: 14, sec: "Indian Geography", q: "In which state is the famous ‘Nathu La’ Pass located?",
    o: ["Himachal Pradesh","Uttarakhand","Sikkim","Arunachal Pradesh"], a: "C",
    e: "Nathu La Pass connects Sikkim with China's Tibet Autonomous Region. Another vital Himalayan pass in Sikkim is Jelep La." },
  { n: 15, sec: "Indian Geography", q: "On which river valley or course is the ‘Hirakud Dam’ constructed?",
    o: ["Godavari","Narmada","Mahanadi","Sutlej"], a: "C",
    e: "Hirakud Dam is built across the Mahanadi river near Sambalpur in Odisha. It is one of the longest earthen dams in the world." },
  { n: 16, sec: "Indian Geography", q: "Which type of natural vegetation predominantly covers the Chota Nagpur Plateau region of India?",
    o: ["Tropical Evergreen","Tropical Deciduous","Mangrove","Montane / Alpine"], a: "B",
    e: "The Chota Nagpur Plateau primarily hosts tropical moist deciduous forests. Prominent tree species include Sal, Mahua, Piyal, and Teak." },
  { n: 17, sec: "Indian Geography", q: "Which mountain pass in the Western Ghats connects the cities of Mumbai and Pune?",
    o: ["Thal Ghat","Bhor Ghat","Pal Ghat","Shencottah Gap"], a: "B",
    e: "Bhor Ghat connects Mumbai with Pune. Thal Ghat links Mumbai with Nashik. Pal Ghat links Kerala (Palakkad) with Tamil Nadu (Coimbatore)." },
  { n: 18, sec: "Indian Geography", q: "In which atmospheric layer is the concentration of ozone gas highest, leading it to be called the ‘Ozonosphere’?",
    o: ["Troposphere","Stratosphere","Mesosphere","Thermosphere"], a: "B",
    e: "The ozone layer sits predominantly in the lower stratosphere, roughly 15 to 35 km above Earth's surface, where it absorbs harmful ultraviolet (UV) radiation." },
  { n: 19, sec: "Indian Geography", q: "Which of the following is a global environmental treaty signed to phase out ‘Ozone Depleting Substances’ (ODS)?",
    o: ["Kyoto Protocol","Montreal Protocol","Paris Agreement","Ramsar Convention"], a: "B",
    e: "Finalized in 1987 in Montreal, Canada, this treaty aimed to phase out substances like chlorofluorocarbons (CFCs) responsible for ozone depletion. The Kyoto Protocol deals with greenhouse gas emissions." },
  { n: 20, sec: "Indian Geography", q: "Which Biodiversity Hotspot region in India is exceptionally rich in endemic species?",
    o: ["Indo-Gangetic Plain","Thar Desert","Western Ghats","Eastern Ghats"], a: "C",
    e: "Among the recognized global biodiversity hotspots present in India, the Western Ghats (extending to Sri Lanka) has very high floral and faunal endemism." },
  { n: 21, sec: "Indian Geography", q: "In which year was ‘Project Tiger’ launched in India?",
    o: ["1972","1973","1980","1986"], a: "B",
    e: "Launched on April 1, 1973, under Prime Minister Indira Gandhi at Jim Corbett National Park, Project Tiger was instituted to halt the decline of Bengal tigers. The Wildlife Protection Act was passed earlier in 1972." },
  { n: 22, sec: "Indian Geography", q: "In which year was the ‘Ramsar Convention’ on wetland conservation adopted in Ramsar, Iran?",
    o: ["1971","1975","1982","1992"], a: "A",
    e: "Adopted on February 2, 1971, in the Iranian city of Ramsar, this international treaty provides the framework for national action and international cooperation regarding wetland conservation. February 2 is observed globally as World Wetlands Day." },
  { n: 44, sec: "Indian Geography", q: "In which Indian state are the Ramsar sites ‘Chilika Lake’ and ‘Bhitarkanika Mangroves’ located?",
    o: ["West Bengal","Andhra Pradesh","Odisha","Tamil Nadu"], a: "C",
    e: "Both wetlands are located in Odisha. In 1981, Chilika Lake was designated as India's first Ramsar site of international importance." },
  { n: 52, sec: "Indian Geography", q: "The industrial steel city of Jamshedpur is situated at the confluence of which rivers?",
    o: ["Damodar","Rupnarayan","Subarnarekha and Kharkai","Mahanadi"], a: "C",
    e: "Jamshedpur (Tatanagar) in Jharkhand sits at the meeting point of the Subarnarekha and Kharkai rivers. Tata Steel (TISCO) was established here in 1907." },

  // ==================================================================
  // 05. WEST BENGAL GEOGRAPHY  —  0 questions
  // ==================================================================
  // (no questions from this section in this set)

  // ==================================================================
  // 06. ARTS AND CULTURE  —  5 questions  (Q40, Q41, Q50, Q51, Q58)
  // ==================================================================
  { n: 40, sec: "Arts and Culture", q: "Which famous festival of Assam is celebrated three times a year across different seasons?",
    o: ["Bihu","Hornbill","Ambubachi","Baishagu"], a: "A",
    e: "Bihu is celebrated in three distinct phases: Bohag Bihu (spring/seeding), Kati Bihu (autumn/crop protection), and Magh Bihu (winter/harvest)." },
  { n: 41, sec: "Arts and Culture", q: "Pandit Hariprasad Chaurasia is a world-renowned maestro associated with which musical instrument?",
    o: ["Sitar","Bansuri (Flute)","Santoor","Sarangi"], a: "B",
    e: "Pandit Hariprasad Chaurasia is an internationally acclaimed classical flautist and Padma Vibhushan recipient." },
  { n: 50, sec: "Arts and Culture", q: "The monolithic ‘Kailashnath Temple’ at the Ellora Caves was constructed during the reign of which dynasty?",
    o: ["Rashtrakuta Dynasty","Pallava Dynasty","Chalukya Dynasty","Chola Dynasty"], a: "A",
    e: "Located in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra, this rock-cut temple complex was commissioned by the Rashtrakuta king Krishna I." },
  { n: 51, sec: "Arts and Culture", q: "‘Yakshagana’ is a traditional folk theatre dance form native to which Indian state?",
    o: ["Kerala","Karnataka","Tamil Nadu","Andhra Pradesh"], a: "B",
    e: "Yakshagana is a traditional theatre art form from coastal and malenadu regions of Karnataka combining dance, music, dialogue, and costume, usually based on episodes from the Epics." },
  { n: 58, sec: "Arts and Culture", q: "Which is India's highest civilian literary award for outstanding contribution in the field of literature?",
    o: ["Sahitya Akademi Award","Jnanpith Award","Saraswati Samman","Vyas Samman"], a: "B",
    e: "Established in 1961 and awarded since 1965, the Jnanpith Award is India's highest literary honour. The first recipient was G. Sankara Kurup." },

  // ==================================================================
  // 07. INDIAN POLITY  —  5 questions  (Q64, Q65, Q66, Q67, Q68)
  // ==================================================================
  { n: 64, sec: "Indian Polity", q: "How many Fundamental Rights were listed in the original Constitution of India (1950)?",
    o: ["6","7","8","10"], a: "B",
    e: "The original Constitution had 7 fundamental rights. But through the 44th Amendment in 1978, the ‘Right to Property’ was removed from the list of fundamental rights and made a legal right under Article 300-A. As a result there are now 6 fundamental rights." },
  { n: 65, sec: "Indian Polity", q: "What is the term (in years) of the members of the Rajya Sabha?",
    o: ["5 years","6 years","4 years","It is a permanent house, so there is no fixed term"], a: "B",
    e: "The Rajya Sabha is a permanent body that can never be dissolved. But the term of its members is 6 years, and every 2 years one-third (1/3rd) of its members retire." },
  { n: 66, sec: "Indian Polity", q: "In which Part of the Indian Constitution are the Directive Principles of State Policy (DPSP) described?",
    o: ["Part III","Part IV","Part V","Part IX"], a: "B",
    e: "Articles 36 to 51 of Part IV of the Constitution describe the directive principles for running the state and building a welfare state; they were borrowed from the Irish constitution. Part III covers the Fundamental Rights." },
  { n: 67, sec: "Indian Polity", q: "What is the retirement age fixed for the judges of the Supreme Court?",
    o: ["60 years","62 years","65 years","70 years"], a: "C",
    e: "Judges of the Supreme Court can hold office until the age of 65. For High Court judges the retirement age is 62." },
  { n: 68, sec: "Indian Polity", q: "By whom, or how, can the Governor of a state be removed from office?",
    o: ["By impeachment by the legislative assembly of the concerned state","At the pleasure of the President","By a resolution passed by both Houses of Parliament","By the order of the Chief Justice of the Supreme Court"], a: "B",
    e: "The Constitution has no specific impeachment procedure for removing a Governor. The President can remove the Governor at any time at his pleasure. The Governor's normal term is 5 years." },

  // ==================================================================
  // 08. INDIAN ECONOMY  —  3 questions  (Q69, Q70, Q71)
  // ==================================================================
  { n: 69, sec: "Indian Economy", q: "Who was the first Indian Governor of the Reserve Bank of India?",
    o: ["Osborne Smith","C. D. Deshmukh","Manmohan Singh","L. K. Jha"], a: "B",
    e: "Sir Chintaman Dwarkanath Deshmukh (C. D. Deshmukh) was the 3rd and first Indian Governor of the RBI, from 1943 to 1949. Osborne Smith was the very first (British) Governor of the Reserve Bank." },
  { n: 70, sec: "Indian Economy", q: "Which index is currently used as the main indicator for measuring ‘inflation’ in the Indian economy?",
    o: ["WPI (Wholesale Price Index)","CPI (Consumer Price Index)","GDP Deflator","IIP"], a: "B",
    e: "The Reserve Bank of India uses the Consumer Price Index (Combined), which measures the change in prices of goods and services at the consumer or retail level, as its main yardstick for setting monetary policy and measuring inflation." },
  { n: 71, sec: "Indian Economy", q: "In which year was NITI Aayog formed in place of the Planning Commission?",
    o: ["2014","2015","2016","2017"], a: "B",
    e: "On 1 January 2015, NITI (National Institution for Transforming India) Aayog was formed as a Think Tank of the central government. By virtue of his office, its Chairperson is the Prime Minister of the country." },

  // ==================================================================
  // 09. PHYSICS  —  4 questions  (Q27, Q28, Q29, Q33)
  // ==================================================================
  { n: 27, sec: "Physics", q: "If the momentum of an object is doubled, by what factor will its kinetic energy increase?",
    o: ["2 times","4 times","8 times","Remains unchanged"], a: "B",
    e: "Kinetic energy is given by KE = p²/2m. If momentum p is doubled to 2p, the new kinetic energy becomes (2p)²/2m = 4 × (p²/2m) = 4 × KE." },
  { n: 28, sec: "Physics", q: "Which optical phenomenon causes an underwater air bubble to shine?",
    o: ["Refraction","Diffraction","Total Internal Reflection","Interference"], a: "C",
    e: "When light travelling in water hits the water-air interface at an angle exceeding the critical angle, total internal reflection occurs, making the bubble appear silvery and brilliant." },
  { n: 29, sec: "Physics", q: "What is the unit of measurement for the Power of a Lens?",
    o: ["Lumen","Candela","Dioptre","Watt"], a: "C",
    e: "Lens power is calculated as the reciprocal of focal length in meters (P = 1/f), with the SI unit expressed in dioptres (D)." },
  { n: 33, sec: "Physics", q: "What should be the ideal characteristics of an electric ‘Fuse Wire’?",
    o: ["High resistance and high melting point","Low resistance and low melting point","High resistance and low melting point","Low resistance and high melting point"], a: "C",
    e: "A fuse wire needs relatively high resistance so that excess current generates sufficient Joule heat (I²Rt), and a low melting point so it melts rapidly to break the circuit safely. It is usually made from an alloy of lead and tin." },

  // ==================================================================
  // 10. CHEMISTRY  —  3 questions  (Q30, Q31, Q32)
  // ==================================================================
  { n: 30, sec: "Chemistry", q: "Brass is an alloy composed of which metals?",
    o: ["Copper and Tin","Copper and Zinc","Copper and Nickel","Iron and Chromium"], a: "B",
    e: "Brass typically consists of roughly 70% copper and 30% zinc. Bronze is an alloy primarily composed of copper and tin." },
  { n: 31, sec: "Chemistry", q: "In what volume ratio are concentrated HCl and concentrated HNO₃ mixed to prepare Aqua Regia?",
    o: ["1:3","3:1","2:3","3:2"], a: "B",
    e: "Aqua Regia consists of 3 parts concentrated hydrochloric acid (HCl) and 1 part concentrated nitric acid (HNO₃) by volume. It dissolves noble metals such as gold and platinum." },
  { n: 32, sec: "Chemistry", q: "Which acid is primarily used as an electrolyte in automobile lead-acid batteries?",
    o: ["Nitric Acid","Hydrochloric Acid","Sulfuric Acid","Acetic Acid"], a: "C",
    e: "Car batteries (lead-acid cells) use dilute sulfuric acid (H₂SO₄) as the electrolyte." },

  // ==================================================================
  // 11. BIOLOGY  —  4 questions  (Q23, Q24, Q25, Q26)
  // ==================================================================
  { n: 23, sec: "Biology", q: "Which instrument is used to measure human blood pressure?",
    o: ["Barometer","Sphygmomanometer","Stethoscope","Hydrometer"], a: "B",
    e: "A sphygmomanometer measures arterial blood pressure. Typical resting blood pressure in a healthy adult is approximately 120/80 mm Hg." },
  { n: 24, sec: "Biology", q: "Which hormone is termed the ‘Emergency Hormone’?",
    o: ["Insulin","Thyroxine","Adrenaline","Estrogen"], a: "C",
    e: "Secreted rapidly by the adrenal medulla during stress or fear, adrenaline triggers the physiological “fight-or-flight” response." },
  { n: 25, sec: "Biology", q: "Who discovered the Double Helix structure of DNA?",
    o: ["Robert Hooke","Watson and Crick","Gregor Johann Mendel","Louis Pasteur"], a: "B",
    e: "In 1953, James Watson and Francis Crick elucidated the double-helix model of DNA, which later earned them the Nobel Prize." },
  { n: 26, sec: "Biology", q: "Which plant hormone helps in the initiation of flowering?",
    o: ["Auxin","Gibberellin","Cytokinin","Florigen"], a: "D",
    e: "Florigen is a shoot-transmissible protein/hormone synthesized in the leaves that induces floral transition in the apical meristem." },

  // ==================================================================
  // 12. STATIC GK  —  21 questions  (Q34, Q35, Q36, Q37, Q38, Q39, Q42, Q43, Q45, Q46, Q47, Q48, Q49, Q53, Q54, Q55, Q59, Q60, Q61, Q62, Q63)
  // ==================================================================
  { n: 34, sec: "Static GK", q: "What is another name for a computer's main circuit board or ‘Motherboard’?",
    o: ["System Board","Central Board","Logic Gate","Storage Unit"], a: "A",
    e: "The motherboard is also referred to as the system board or mainboard. It houses the CPU, memory, and expansion slots for peripherals." },
  { n: 35, sec: "Static GK", q: "Which was the first high-level computer programming language?",
    o: ["COBOL","FORTRAN","BASIC","C"], a: "B",
    e: "Developed by John Backus at IBM in 1957, FORTRAN (Formula Translation) was designed for complex numeric and scientific computations." },
  { n: 36, sec: "Static GK", q: "Which cryptographic security protocol displays the ‘padlock’ icon in a web browser's address bar to safeguard data over the internet?",
    o: ["FTP","SSL/TLS","SMTP","HTTP"], a: "B",
    e: "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) encrypt network communication, serving content via secure HTTPS." },
  { n: 37, sec: "Static GK", q: "What is the standard modern unit used to measure the clock speed of a computer processor?",
    o: ["Kilobytes","Megabits","Gigahertz (GHz)","RPM"], a: "C",
    e: "Modern CPU frequencies are stated in Gigahertz (GHz) or Megahertz (MHz). 1 GHz represents 1 billion clock cycles per second." },
  { n: 38, sec: "Static GK", q: "Linux is an example of what type of software?",
    o: ["Closed-source Operating System","Open-source Operating System","Application Software","Utility Software"], a: "B",
    e: "Linux is an open-source operating system whose source code is freely available, editable, and redistributable." },
  { n: 39, sec: "Static GK", q: "Which symbol separates the two main parts (username and domain name) of an email address?",
    o: ["#","&","@","$"], a: "C",
    e: "The ‘@’ symbol divides the username from the destination domain name (e.g., username@domain.com). It was introduced for network email addresses by Ray Tomlinson in 1971." },
  { n: 42, sec: "Static GK", q: "Who was the first Indian (or person of Indian origin) to receive the Nobel Memorial Prize in Economic Sciences, and in which year?",
    o: ["Amartya Sen, 1998","Abhijit Banerjee, 2019","C.V. Raman, 1930","Har Gobind Khorana, 1968"], a: "A",
    e: "Professor Amartya Sen received the Nobel Prize in 1998 for his contributions to welfare economics and poverty research. Abhijit Banerjee was awarded the prize in 2019." },
  { n: 43, sec: "Static GK", q: "Where is the headquarters of the Asian Development Bank (ADB) located?",
    o: ["Jakarta, Indonesia","Manila, Philippines","Tokyo, Japan","Beijing, China"], a: "B",
    e: "Established in 1966, the ADB is headquartered in Mandaluyong, Metro Manila, Philippines." },
  { n: 45, sec: "Static GK", q: "Every year on February 28, ‘National Science Day’ is observed to commemorate the scientific discovery of which Indian scientist?",
    o: ["Jagadish Chandra Bose","C.V. Raman","Homi J. Bhabha","A.P.J. Abdul Kalam"], a: "B",
    e: "On February 28, 1928, Sir C.V. Raman discovered the inelastic scattering of light, known as the Raman Effect, for which he was awarded the Nobel Prize in Physics in 1930." },
  { n: 46, sec: "Static GK", q: "The Olympic flag consists of five interlocking rings of different colors. Which continent is represented by the ‘yellow’ ring?",
    o: ["Asia","Africa","Europe","America"], a: "A",
    e: "The rings correspond to five major continents: Blue = Europe, Black = Africa, Red = Americas, Yellow = Asia, and Green = Oceania (Australia)." },
  { n: 47, sec: "Static GK", q: "With which sport is the prestigious ‘Thomas Cup’ (men's category) associated?",
    o: ["Lawn Tennis","Badminton","Table Tennis","Chess"], a: "B",
    e: "The Thomas Cup is the world men's team championship in badminton. Its female equivalent is the Uber Cup. India won its historic maiden Thomas Cup title in 2022." },
  { n: 48, sec: "Static GK", q: "In which year and city were the 1st Asian Games held?",
    o: ["1951, New Delhi","1954, Manila","1962, Jakarta","1958, Tokyo"], a: "A",
    e: "The inaugural Asian Games took place in New Delhi in March 1951, with India serving as the host and a principal founding nation." },
  { n: 49, sec: "Static GK", q: "On which date is ‘World Population Day’ observed globally?",
    o: ["July 11","September 8","September 16","December 10"], a: "A",
    e: "Established by the United Nations Development Programme in 1989, World Population Day is marked every year on July 11. September 16 is World Ozone Day." },
  { n: 53, sec: "Static GK", q: "In which Union Territory of India is the historic ‘Cellular Jail’ (known as Kala Pani) situated?",
    o: ["Lakshadweep","Daman and Diu","Andaman and Nicobar Islands","Puducherry"], a: "C",
    e: "The Cellular Jail is located in Port Blair, Andaman and Nicobar Islands. It was used by the British colonial government to exile and imprison political prisoners." },
  { n: 54, sec: "Static GK", q: "Where is the Bhabha Atomic Research Centre (BARC) located?",
    o: ["Kalpakkam","Trombay, Mumbai","Pokhran","Hyderabad"], a: "B",
    e: "In 1954, under the leadership of Dr. Homi Jehangir Bhabha, it was established as India's atomic energy establishment at Trombay, and its name was later changed in 1967 to Bhabha Atomic Research Centre (BARC)." },
  { n: 55, sec: "Static GK", q: "Where is India's Central Potato Research Institute (CPRI) located?",
    o: ["Cuttack","Shimla","Pune","Dehradun"], a: "B",
    e: "The Central Potato Research Institute is located at Kufri near Shimla in Himachal Pradesh." },
  { n: 59, sec: "Static GK", q: "Which city of India is called the ‘Silicon Valley of India’?",
    o: ["Hyderabad","Pune","Bengaluru","Chennai"], a: "C",
    e: "Because it is India's main information technology (IT) hub, Bengaluru, the capital of Karnataka, is compared with America's Silicon Valley in California and given this name." },
  { n: 60, sec: "Static GK", q: "Where is the headquarters of the International Labour Organization (ILO) located?",
    o: ["Geneva, Switzerland","Washington DC","London, UK","Vienna, Austria"], a: "A",
    e: "Established in 1919 under the League of Nations, the main office of the ILO is at Geneva, Switzerland. It is now a specialised agency of the United Nations." },
  { n: 61, sec: "Static GK", q: "The ‘Ryder Cup’ is a famous international competition trophy of which sport?",
    o: ["Golf","Polo","Lawn Tennis","Rowing"], a: "A",
    e: "The Ryder Cup is a prestigious tournament held every two years between the men's golf teams of the USA and Europe." },
  { n: 62, sec: "Static GK", q: "The ‘Aga Khan Cup’ is traditionally associated with which sport?",
    o: ["Football","Hockey","Cricket","Polo"], a: "B",
    e: "The Aga Khan Cup is a very old and famous hockey tournament of India." },
  { n: 63, sec: "Static GK", q: "Who was the first Asian person to win a Nobel Prize?",
    o: ["Rabindranath Tagore","C. V. Raman","Mother Teresa","Mahatma Gandhi"], a: "A",
    e: "Poet Rabindranath Tagore won the Nobel Prize in Literature in 1913 for his poetry collection ‘Gitanjali’ (Song Offerings), becoming the first non-European and first Asian laureate." },

  // ==================================================================
  // 13. CURRENT AFFAIRS  —  4 questions  (Q72, Q73, Q74, Q75)
  // ==================================================================
  { n: 72, sec: "Current Affairs", q: "Which country became the champion in the final of the FIFA World Cup 2026?",
    o: ["Argentina","France","Spain","England"], a: "C" },
  { n: 73, sec: "Current Affairs", q: "In which country is the 21st G20 summit of 2026 going to be held?",
    o: ["South Africa","United States of America","Brazil","United Kingdom"], a: "B",
    e: "The 21st G20 Summit of 2026 is scheduled to be held in the city of Miami, in the US state of Florida, on 14–15 December, under the chairmanship of US President Donald Trump. Earlier, Brazil chaired the G20 in 2024 and South Africa in 2025." },
  { n: 74, sec: "Current Affairs", q: "Which crewed space mission of the Indian Space Research Organisation (ISRO) is it currently working on at full speed, including final-stage tests and training of astronauts?",
    o: ["Chandrayaan-4","Gaganyaan","Aditya-L1","Mangalyaan-2"], a: "B",
    e: "Gaganyaan is India's first crewed space mission, which aims to send 3 astronauts (selected from the Indian Air Force) to space and bring them back safely to Earth." },
  { n: 75, sec: "Current Affairs", q: "According to the Economic Survey 2023–24 and the Budget proposals for 2025–26, under which system have ordinary citizens been given a major benefit in income-tax slabs, for simplifying India's tax system?",
    o: ["Old Tax Regime","New Tax Regime","Corporate Tax Model","Surcharge-free model"], a: "B",
    e: "In recent budgets the central government has made the ‘New Tax Regime’ the default and, under it, has raised the standard deduction and the tax-free income limit to encourage the general middle class to choose the new structure." },

  // ==================================================================
  // 14. APTITUDE & MENTAL ABILITY  —  25 questions  (Q76, Q77, Q78, Q79, Q80, Q81, Q82, Q83, Q84, Q85, Q86, Q87, Q88, Q89, Q90, Q91, Q92, Q93, Q94, Q95, Q96, Q97, Q98, Q99, Q100)
  // ==================================================================
  { n: 76, sec: "Aptitude & Mental Ability", q: "The LCM and HCF of two numbers are 315 and 7 respectively. If one number is 35, what is the other number?",
    o: ["45","63","56","70"], a: "B" },
  { n: 77, sec: "Aptitude & Mental Ability", q: "8 men can do a piece of work in 12 days. After working for 6 days, 4 more men join the work. How many more days will it take to finish the remaining work?",
    o: ["2 days","3 days","4 days","5 days"], a: "C",
    flag: "Key looks wrong — the paper's key is (B) 3 days, but the working gives 4 days (C): 8 men × 12 days = 96 man-days; 6 days of work = 48; the remaining 48 ÷ 12 men = 4 days. To fix, change a: \"B\" to a: \"C\" in set-09.js." },
  { n: 78, sec: "Aptitude & Mental Ability", q: "In a business, the capitals of A, B and C are in the ratio 2 : 3 : 5. If the total profit at the end of the year is ₹40,000, how much will B get?",
    o: ["₹8,000","₹12,000","₹20,000","₹15,000"], a: "B" },
  { n: 79, sec: "Aptitude & Mental Ability", q: "A man sold a watch at a 5% loss. If he had sold the watch for ₹54 more, he would have made a 4% profit. What is the cost price of the watch?",
    o: ["₹540","₹600","₹640","₹500"], a: "B" },
  { n: 80, sec: "Aptitude & Mental Ability", q: "At what annual rate of compound interest will ₹2304 become ₹2500 in 2 years?",
    o: ["4 1/6%","5%","4 1/2%","6%"], a: "A" },
  { n: 81, sec: "Aptitude & Mental Ability", q: "A 280-metre-long train running at 60 km/h will take how much time to cross a man standing beside the track?",
    o: ["15 seconds","16.8 seconds","18 seconds","20 seconds"], a: "B" },
  { n: 82, sec: "Aptitude & Mental Ability", q: "The average weight of 7 students is 55 kg. If the average weight of the first 3 students is 52 kg and the average weight of the last 3 students is 58 kg, what is the weight of the fourth student?",
    o: ["55 kg","52 kg","58 kg","60 kg"], a: "A" },
  { n: 83, sec: "Aptitude & Mental Ability", q: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together and pipe B is closed after some time, the tank is filled in a total of 14 minutes. After how long was pipe B closed?",
    o: ["8 minutes","9 minutes","10 minutes","6 minutes"], a: "B" },
  { n: 84, sec: "Aptitude & Mental Ability", q: "The speed of a boat in still water is 10 km/h and the speed of the stream is 4 km/h. How much time will the boat take to travel 56 km downstream (along the current)?",
    o: ["4 hours","5 hours","7 hours","3.5 hours"], a: "A" },
  { n: 85, sec: "Aptitude & Mental Ability", q: "If the radius of a circle is decreased by 20%, by what percentage will the area of the circle decrease?",
    o: ["40%","36%","20%","44%"], a: "B" },
  { n: 86, sec: "Aptitude & Mental Ability", q: "A 60-litre mixture of sugar and water contains 20% sugar. How many litres of water must be added to the mixture so that the amount of sugar becomes 15%?",
    o: ["15 litres","20 litres","10 litres","12 litres"], a: "B" },
  { n: 87, sec: "Aptitude & Mental Ability", q: "In how many years will a sum of money become 3 times (amount) at 8% per annum simple interest?",
    o: ["20 years","25 years","15 years","30 years"], a: "B" },
  { n: 88, sec: "Aptitude & Mental Ability", q: "If 45% of a number is 135, what will 120% of the number be?",
    o: ["360","300","400","450"], a: "A" },
  { n: 89, sec: "Aptitude & Mental Ability", q: "The present age ratio of Alok and Vikash is 7 : 5. After 6 years the ratio of their ages will be 4 : 3. What is Vikash's present age?",
    o: ["30 years","24 years","20 years","35 years"], a: "A" },
  { n: 90, sec: "Aptitude & Mental Ability", q: "If the average of five consecutive odd numbers is 23, what is the largest number?",
    o: ["25","27","29","31"], a: "B" },
  { n: 91, sec: "Aptitude & Mental Ability", q: "A person goes to a certain distance at a speed of 12 km/h and returns at a speed of 8 km/h. What was his average speed for the whole journey?",
    o: ["10 km/h","9.6 km/h","9.8 km/h","10.2 km/h"], a: "B" },
  { n: 92, sec: "Aptitude & Mental Ability", q: "What percent of ₹10 is ₹1.25?",
    o: ["12.5%","1.25%","25%","15%"], a: "A" },
  { n: 93, sec: "Aptitude & Mental Ability", q: "If A : B = 2 : 3, B : C = 4 : 5 and C : D = 6 : 7, what is A : D?",
    o: ["12 : 35","16 : 35","24 : 35","8 : 21"], a: "B" },
  { n: 94, sec: "Aptitude & Mental Ability", q: "A dishonest trader claims to sell goods at cost price by cheating in weight, but he gives 900 grams instead of 1 kg. What is his percentage profit?",
    o: ["10%","11 1/9%","9%","12.5%"], a: "B" },
  { n: 95, sec: "Aptitude & Mental Ability", q: "A sum of money doubles in 4 years at simple interest. In how many years will it become four times?",
    o: ["8 years","12 years","16 years","10 years"], a: "B" },
  { n: 96, sec: "Aptitude & Mental Ability", q: "If the length of a rectangle is increased by 10% and its breadth is decreased by 10%, what will be the change in its area?",
    o: ["No change","Increase by 1%","Decrease by 1%","Decrease by 2%"], a: "C" },
  { n: 97, sec: "Aptitude & Mental Ability", q: "What is the smallest number which leaves a remainder of 4 when divided by each of 12, 15, 20 and 54?",
    o: ["544","540","274","270"], a: "A" },
  { n: 98, sec: "Aptitude & Mental Ability", q: "If the cost price of 15 articles is equal to the selling price of 12 articles, what is the percentage profit?",
    o: ["20%","25%","30%","16 2/3%"], a: "B" },
  { n: 99, sec: "Aptitude & Mental Ability", q: "A and B can do a piece of work in 15 days and 10 days respectively. They start working together, but B leaves after 2 days. In how many days will A alone finish the remaining work?",
    o: ["10 days","8 days","12 days","9 days"], a: "A" },
  { n: 100, sec: "Aptitude & Mental Ability", q: "What is the value of √(2 + √(2 + √(2 + …)))?",
    o: ["1","2","3","4"], a: "B" },

]);
