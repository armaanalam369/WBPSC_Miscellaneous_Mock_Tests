/* =====================================================================
   data.js  —  THE ONLY FILE YOU NEED TO EDIT TO ADD QUESTIONS
   ---------------------------------------------------------------------
   HOW TO ADD A NEW SET (copy-paste steps):
   1. Scroll to the bottom of this file, find the line that says: ADD NEW SETS ABOVE THIS LINE
   2. Paste a new block just above it, like this:

      {
        set: "SET-10",
        questions: [
          { n: 1, sec: "Modern History", q: "Question text?",
            o: ["Option A", "Option B", "Option C", "Option D"],
            a: "B",                       // correct answer letter: A, B, C or D
            e: "Explanation text." },
          { n: 2, ... },
        ]
      },

   FIELDS
     n    = original question number in that set (do not change it)
     sec  = ONE of the 14 section names listed in "sections" below (copy exactly)
     q    = question text
     o    = four options, in the original order (without the (A) (B) letters)
     a    = correct option letter "A" / "B" / "C" / "D"
     e    = explanation (optional)
     d    = difficulty "Easy" / "Medium" / "Hard" (optional)
     flag = optional note shown in review, e.g. "Answer may be outdated"

   The app builds every index, count, card and test from this file.
   Nothing else needs to change.
   ===================================================================== */

window.QUIZ_DATA = {

  appTitle: "Wise Choice Mock Tests",

  // Used by the validation panel (Settings → Developer mode)
  expectedSets: 15,
  expectedPerSet: 100,

  // The 14 sections. Every question's "sec" must match one of these exactly.
  sections: [
    "Ancient History",
    "Medieval History",
    "Modern History",
    "Indian Geography",
    "West Bengal Geography",
    "Arts and Culture",
    "Indian Polity",
    "Indian Economy",
    "Physics",
    "Chemistry",
    "Biology",
    "Static GK",
    "Current Affairs",
    "Aptitude & Mental Ability"
  ],

  sets: [

    /* ------------------------------------------------------------------
       SET-08  (Miscellaneous Studies Mock Test – 08)
       Source file was cut off after Q56 — Q57 onward still to be added.
       ------------------------------------------------------------------ */
    {
      set: "SET-08",
      questions: [
        { n: 1, sec: "Ancient History", q: "Which event related to the life of Lord Buddha is known as “Mahabhinishkramana”?",
          o: ["His birth", "His renunciation of home", "His attainment of enlightenment", "His demise (passing away)"], a: "B",
          e: "In Buddhist traditions, Siddhartha Gautama's departure from his palace and worldly life at the age of 29 is known as Mahabhinishkramana. His passing away is referred to as Mahaparinirvana." },
        { n: 2, sec: "Ancient History", q: "Who was the first to decipher the rock edicts of Emperor Ashoka?",
          o: ["Alexander Cunningham", "James Prinsep", "William Jones", "John Marshall"], a: "B",
          e: "In 1837, James Prinsep, an officer of the East India Company, deciphered the Brahmi and Kharosthi scripts used in Emperor Ashoka's royal edicts." },
        { n: 3, sec: "Ancient History", q: "Between which two rivers was Taxila University located?",
          o: ["Indus and Jhelum", "Jhelum and Chenab", "Chenab and Ravi", "Indus and Saraswati"], a: "A",
          e: "Taxila, an ancient center of higher learning (now in Pakistan), was situated between the Indus and Jhelum (Hydaspes) rivers." },
        { n: 4, sec: "Medieval History", q: "Which Sultan of Delhi established a separate Employment Bureau for the welfare of citizens?",
          o: ["Alauddin Khalji", "Muhammad bin Tughluq", "Firoz Shah Tughlaq", "Ghiyasuddin Balban"], a: "C",
          e: "Firoz Shah Tughlaq set up an employment bureau to help alleviate unemployment, along with charitable institutions like Dar-ul-Shafa (hospitals) and Diwan-i-Khairat (charity department)." },
        { n: 5, sec: "Medieval History", q: "During the Mughal period, which royal order or decree was termed “Nishan”?",
          o: ["An order issued directly by the Emperor", "A directive issued by the Wazir/Prime Minister", "An order bearing the seal of a Prince or Begum of the royal family", "An order issued by a provincial Governor"], a: "C",
          e: "While an executive decree directly from the Emperor was called a Farman, an official directive or charter issued by Mughal princes or female royals was known as a Nishan." },
        { n: 6, sec: "Modern History", q: "Who was the Prime Minister of Britain during the Battle of Plassey (1757)?",
          o: ["Robert Walpole", "William Pitt (The Elder)", "Duke of Newcastle", "Lord North"], a: "C",
          e: "Thomas Pelham-Holles, 1st Duke of Newcastle, was serving as the British Prime Minister during the Battle of Plassey in 1757." },
        { n: 7, sec: "Modern History", q: "Who first described the Revolt of 1857 as the “First War of Indian Independence”?",
          o: ["R. C. Majumdar", "Vinayak Damodar Savarkar", "Sir Syed Ahmad Khan", "Jawaharlal Nehru"], a: "B",
          e: "V. D. Savarkar characterized the uprising as a planned national rebellion in his 1909 book The Indian War of Independence 1857." },
        { n: 8, sec: "Modern History", q: "What official reason did Lord Curzon state for the Partition of Bengal in 1905?",
          o: ["To curb the political influence of Hindus", "To create a separate state for Muslims", "Administrative convenience and easing the governance of an oversized province", "To suppress nationalist movements"], a: "C",
          e: "Although the true motive was a “divide and rule” strategy to weaken Indian nationalism, the official British stance cited the vast size and administrative burden of the Bengal Presidency." },
        { n: 9, sec: "Modern History", q: "What was the main significance of the historic Lucknow Pact of 1916?",
          o: ["Demanding complete independence (Purna Swaraj) for India", "Political agreement between Congress and the Muslim League, and reunion of Moderates and Extremists", "Reversal of the partition of Bengal", "Supporting the Khilafat Movement"], a: "B",
          e: "Presided over by Ambica Charan Mazumdar, the session facilitated a formal pact between the Indian National Congress and the Muslim League, while also reuniting the Moderates and Extremists who had split at Surat in 1907." },
        { n: 10, sec: "Modern History", q: "What was the primary reason for the withdrawal of the Non-Cooperation Movement in 1922?",
          o: ["Repressive policies of the British Government", "Arrest of Jawaharlal Nehru and Subhash Chandra Bose", "Violent incident at Chauri Chaura", "Abolition of the Rowlatt Act"], a: "C",
          e: "On February 5, 1922, a crowd set fire to a police station at Chauri Chaura (Gorakhpur, UP), leading to the death of 22 policemen. Mahatma Gandhi called off the movement because it violated his fundamental principle of non-violence." },
        { n: 11, sec: "Modern History", q: "Who termed the proposals of the Cripps Mission (1942) as “A post-dated cheque on a crashing bank”?",
          o: ["Jawaharlal Nehru", "Mahatma Gandhi", "Muhammad Ali Jinnah", "Subhash Chandra Bose"], a: "B",
          e: "Gandhi criticized Sir Stafford Cripps’ offer of post-war Dominion status due to growing distrust in British intentions and their deteriorating wartime position." },
        { n: 12, sec: "Modern History", q: "When was the Indian Independence Act passed by the British Parliament?",
          o: ["3rd June, 1947", "4th July, 1947", "18th July, 1947", "15th August, 1947"], a: "C",
          e: "Introduced on July 4, 1947, based on the Mountbatten Plan, the bill received Royal Assent on July 18, 1947." },
        { n: 13, sec: "Indian Geography", q: "Which of the following mountain ranges belongs to the “Himachal” or Lesser/Middle Himalayas?",
          o: ["K2", "Pir Panjal", "Zaskar", "Dhaulagiri"], a: "B",
          e: "Pir Panjal, Dhauladhar, and Mahabharat Lekh are major ranges of the Middle Himalayas (Himachal). K2 belongs to the Karakoram, and Zaskar is part of the Trans-Himalayan system." },
        { n: 14, sec: "Indian Geography", q: "Where is India’s only active volcano, “Barren Island”, located?",
          o: ["Lakshadweep", "Nicobar Islands", "Middle Andaman (Andaman Sea)", "Great Nicobar"], a: "C",
          e: "Barren Island is situated in the Andaman Sea, northeast of Port Blair (east of the Middle Andaman group), and is the only active volcano in South Asia." },
        { n: 15, sec: "Indian Geography", q: "Which river flows through a rift valley and serves as the lifeline of the “Ruhr of India” region?",
          o: ["Godavari", "Damodar", "Narmada", "Mahanadi"], a: "B",
          e: "Due to its rich mineral and coal belt, the Damodar Valley (Asansol-Durgapur region) is called the “Ruhr of India,” and the river flows through a faulted rift valley." },
        { n: 16, sec: "Indian Geography", q: "What mineral gives the black (Regur) soil of the Deccan plateau its high water-holding capacity?",
          o: ["Illite", "Kyanite", "Montmorillonite", "Gibbsite"], a: "C",
          e: "The clay mineral montmorillonite expands significantly upon absorbing moisture, making the soil sticky when wet and causing deep fissures upon drying, which aids moisture retention." },
        { n: 17, sec: "Indian Geography", q: "Which is the first Multipurpose River Valley Project of independent India?",
          o: ["Bhakra Nangal Project", "Hirakud Project", "Damodar Valley Corporation (DVC)", "Chambal Valley Project"], a: "C",
          e: "Established in 1948 modeled on the Tennessee Valley Authority (TVA) of the USA, DVC was India's first multipurpose river basin initiative." },
        { n: 18, sec: "Indian Geography", q: "In which layer of the atmosphere do meteors burn up upon entering?",
          o: ["Stratosphere", "Mesosphere", "Thermosphere", "Exosphere"], a: "B",
          e: "The mesosphere is the coldest atmospheric layer (around -100°C), where incoming meteoroids experience high frictional heating and burn away." },
        { n: 19, sec: "Indian Geography", q: "Among greenhouse gases, which one has the highest Global Warming Potential (GWP)?",
          o: ["Carbon dioxide (CO₂)", "Methane (CH₄)", "Nitrous oxide (N₂O)", "Sulfur hexafluoride (SF₆)"], a: "D",
          e: "While CO₂ contributes most by overall volume, SF₆ has a Global Warming Potential roughly 23,500 times greater than CO₂ molecule-for-molecule over a 100-year timescale." },
        { n: 20, sec: "Indian Geography", q: "Which is the largest Biosphere Reserve in India by area?",
          o: ["Sundarbans", "Gulf of Mannar", "Rann of Kutch", "Nilgiri"], a: "C",
          e: "The Great Rann of Kutch in Gujarat is India's largest biosphere reserve by geographic coverage. The Gulf of Mannar is second, and Nilgiri was India's first designated biosphere reserve in 1986." },
        { n: 21, sec: "Biology", q: "Which component becomes severely depleted in a water body as a consequence of Eutrophication?",
          o: ["Nitrate", "Phosphate", "Dissolved Oxygen (DO)", "Carbon dioxide"], a: "C",
          e: "Agricultural runoff rich in nitrates/phosphates triggers rapid algal blooms. When the algae die, decomposing bacteria consume the available Dissolved Oxygen, creating hypoxic dead zones." },
        { n: 22, sec: "Arts and Culture", q: "How many UNESCO World Heritage Sites are currently in India?",
          o: ["40", "42", "43", "45"], a: "C",
          e: "India has 43 recognized sites, with Assam’s Moidams – the Mound-Burial System of the Ahom Dynasty being inscribed as the 43rd site.",
          flag: "Count changes over time — India's total has risen since this set was written. Verify before relying on it." },
        { n: 23, sec: "Physics", q: "On which optical principle does an Optical Fiber work?",
          o: ["Refraction of light", "Dispersion of light", "Total Internal Reflection", "Polarization of light"], a: "C",
          e: "Light signals travel through the glass/plastic core by repeatedly undergoing total internal reflection whenever the incident angle exceeds the critical angle." },
        { n: 24, sec: "Physics", q: "What is the SI unit of the Power of a Lens?",
          o: ["Watt", "Candela", "Dioptre", "Lumen"], a: "C",
          e: "The power of a lens is the reciprocal of its focal length in meters (P = 1/f), measured in dioptres (D)." },
        { n: 25, sec: "Physics", q: "What happens to the surface tension of water when soap or detergent is added?",
          o: ["Surface tension increases", "Surface tension decreases", "Remains unchanged", "First increases, then decreases"], a: "B",
          e: "Surfactants disrupt cohesive hydrogen bonding among water molecules, lowering surface tension and improving its ability to penetrate cloth fibers." },
        { n: 26, sec: "Chemistry", q: "In which group of the modern periodic table are the Halogens located?",
          o: ["Group 15", "Group 16", "Group 17", "Group 18"], a: "C",
          e: "Group 17 contains fluorine (F), chlorine (Cl), bromine (Br), iodine (I), and astatine (At). Group 18 houses the noble gases." },
        { n: 27, sec: "Chemistry", q: "Bronze is an alloy composed primarily of which metals?",
          o: ["Copper and Zinc", "Copper and Tin", "Copper and Nickel", "Zinc and Lead"], a: "B",
          e: "Bronze typically consists of ~88% copper and ~12% tin. An alloy of copper and zinc forms brass." },
        { n: 28, sec: "Physics", q: "When an alpha (α) particle is emitted from a radioactive nucleus, how does its atomic number change?",
          o: ["Decreases by 2 units", "Decreases by 4 units", "Increases by 1 unit", "Does not change"], a: "A",
          e: "An alpha particle is a helium nucleus (⁴₂He). Emitting it reduces mass number by 4 and decreases atomic number (Z) by 2." },
        { n: 29, sec: "Biology", q: "Which cell organelle is known as the “Suicidal Bag” of the cell?",
          o: ["Mitochondria", "Golgi Apparatus", "Lysosome", "Ribosome"], a: "C",
          e: "Lysosomes contain hydrolytic digestive enzymes. If damaged or malfunctioning, they burst and autolyze their own host cell." },
        { n: 30, sec: "Biology", q: "Which protein present in blood plasma directly participates in blood clotting?",
          o: ["Albumin", "Globulin", "Fibrinogen", "Hemoglobin"], a: "C",
          e: "Fibrinogen is converted into insoluble fibrin strands by thrombin during vascular injury to form a blood clot." },
        { n: 31, sec: "Biology", q: "Which hormone regulates calcium levels in the human bloodstream?",
          o: ["Thyroxine", "Parathormone (PTH)", "Insulin", "Melatonin"], a: "B",
          e: "Parathyroid hormone (PTH) elevates blood calcium levels, balancing calcitonin (secreted by the thyroid), which lowers blood calcium." },
        { n: 32, sec: "Biology", q: "What is the primary function of Phloem tissue in plants?",
          o: ["Transporting water and mineral salts from roots to leaves", "Translocating synthesized food from leaves to various plant organs", "Providing only mechanical support to the plant", "Storing metabolic waste materials"], a: "B",
          e: "Xylem carries water and minerals upwards from roots, whereas phloem carries photosynthetic products bidirectionally throughout the plant." },
        { n: 33, sec: "Biology", q: "Who is known as the “Father of Genetics”?",
          o: ["Charles Darwin", "Gregor Johann Mendel", "Louis Pasteur", "Thomas Hunt Morgan"], a: "B",
          e: "Mendel formulated the fundamental laws of inheritance (law of segregation and independent assortment) through hybridization experiments on garden pea plants." },
        { n: 34, sec: "Biology", q: "The human body has 46 chromosomes. How many of these are Autosomes?",
          o: ["44", "46", "2", "22"], a: "A",
          e: "Humans have 23 pairs (46 total) of chromosomes: 22 pairs (44 chromosomes) are autosomes, and 1 pair (2 chromosomes, XX or XY) are allosomes (sex chromosomes)." },
        { n: 35, sec: "Static GK", q: "“Cache Memory” in a computer acts as a high-speed buffer between which two components?",
          o: ["RAM and Hard Disk", "CPU and RAM", "CPU and ROM", "Hard Disk and Pen Drive"], a: "B",
          e: "Cache memory provides ultra-fast temporary storage located between the CPU and system RAM to minimize access latency for frequently used instructions." },
        { n: 36, sec: "Static GK", q: "An Operating System (OS) is an example of which type of software?",
          o: ["Application Software", "System Software", "Utility Software", "Malware"], a: "B",
          e: "An OS serves as interface-level system software controlling underlying hardware and executing application programs." },
        { n: 37, sec: "Static GK", q: "How many bits make up an address in Internet Protocol version 4 (IPv4)?",
          o: ["16 bits", "32 bits", "64 bits", "128 bits"], a: "B",
          e: "IPv4 addresses consist of 32 bits grouped into four 8-bit octets (e.g., 192.168.1.1). IPv6 addresses are 128 bits wide." },
        { n: 38, sec: "Static GK", q: "What is an error or flaw in a computer program that produces an unintended or incorrect result called?",
          o: ["Bug", "Spam", "Virus", "Cookie"], a: "A",
questions: [
  {
    n: 1,
    sec: "Ancient History",
    q: "Which event related to the life of Lord Buddha is known as 'Mahabhinishkramana'?",
    o: ["His birth", "His renunciation of home", "His attainment of enlightenment", "His demise (passing away)"],
    a: "B",
    e: "In Buddhist traditions, Siddhartha Gautama's departure from his palace and worldly life at the age of 29 is known as Mahabhinishkramana. His passing away is referred to as Mahaparinirvana."
  },
  {
    n: 2,
    sec: "Ancient History",
    q: "Who was the first to decipher the rock edicts of Emperor Ashoka?",
    o: ["Alexander Cunningham", "James Prinsep", "William Jones", "John Marshall"],
    a: "B",
    e: "In 1837, James Prinsep, an officer of the East India Company, deciphered the Brahmi and Kharosthi scripts used in Emperor Ashoka's royal edicts."
  },
  {
    n: 3,
    sec: "Ancient History",
    q: "Between which two rivers was Taxila University located?",
    o: ["Indus and Jhelum", "Jhelum and Chenab", "Chenab and Ravi", "Indus and Saraswati"],
    a: "A",
    e: "Taxila, an ancient center of higher learning (now in Pakistan), was situated between the Indus and Jhelum (Hydaspes) rivers."
  },
  {
    n: 4,
    sec: "Medieval History",
    q: "Which Sultan of Delhi established a separate Employment Bureau for the welfare of citizens?",
    o: ["Alauddin Khalji", "Muhammad bin Tughluq", "Firoz Shah Tughlaq", "Ghiyasuddin Balban"],
    a: "C",
    e: "Firoz Shah Tughlaq set up an employment bureau to help alleviate unemployment, along with charitable institutions like Dar-ul-Shafa (hospitals) and Diwan-i-Khairat (charity department)."
  },
  {
    n: 5,
    sec: "Medieval History",
    q: "During the Mughal period, which royal order or decree was termed 'Nishan'?",
    o: ["An order issued directly by the Emperor", "A directive issued by the Wazir/Prime Minister", "An order bearing the seal of a Prince or Begum of the royal family", "An order issued by a provincial Governor"],
    a: "C",
    e: "While an executive decree directly from the Emperor was called a Farman, an official directive or charter issued by Mughal princes or female royals was known as a Nishan."
  },
  {
    n: 6,
    sec: "Modern History",
    q: "Who was the Prime Minister of Britain during the Battle of Plassey (1757)?",
    o: ["Robert Walpole", "William Pitt (The Elder)", "Duke of Newcastle", "Lord North"],
    a: "C",
    e: "Thomas Pelham-Holles, 1st Duke of Newcastle, was serving as the British Prime Minister during the Battle of Plassey in 1757."
  },
  {
    n: 7,
    sec: "Modern History",
    q: "Who first described the Revolt of 1857 as the 'First War of Indian Independence'?",
    o: ["R. C. Majumdar", "Vinayak Damodar Savarkar", "Sir Syed Ahmad Khan", "Jawaharlal Nehru"],
    a: "B",
    e: "V. D. Savarkar characterized the uprising as a planned national rebellion in his 1909 book 'The Indian War of Independence 1857'."
  },
  {
    n: 8,
    sec: "Modern History",
    q: "What official reason did Lord Curzon state for the Partition of Bengal in 1905?",
    o: ["To curb the political influence of Hindus", "To create a separate state for Muslims", "Administrative convenience and easing the governance of an oversized province", "To suppress nationalist movements"],
    a: "C",
    e: "Although the true motive was a 'divide and rule' policy to weaken Indian nationalism, the official British stance cited the vast size and administrative burden of the Bengal Presidency."
  },
  {
    n: 9,
    sec: "Modern History",
    q: "What was the main significance of the historic Lucknow Pact of 1916?",
    o: ["Demanding complete independence (Purna Swaraj) for India", "Political agreement between Congress and the Muslim League, and reunion of Moderates and Extremists", "Reversal of the partition of Bengal", "Supporting the Khilafat Movement"],
    a: "B",
    e: "Presided over by Ambica Charan Mazumdar, the session facilitated a formal pact between the Indian National Congress and the Muslim League, while also reuniting the Moderates and Extremists who had split at Surat in 1907."
  },
  {
    n: 10,
    sec: "Modern History",
    q: "What was the primary reason for the withdrawal of the Non-Cooperation Movement in 1922?",
    o: ["Repressive policies of the British Government", "Arrest of Jawaharlal Nehru and Subhash Chandra Bose", "Violent incident at Chauri Chaura", "Abolition of the Rowlatt Act"],
    a: "C",
    e: "On February 5, 1922, a crowd set fire to a police station at Chauri Chaura (Gorakhpur, UP), leading to the death of 22 policemen. Mahatma Gandhi called off the movement because it violated his fundamental principle of non-violence."
  },
  {
    n: 11,
    sec: "Modern History",
    q: "Who termed the proposals of the Cripps Mission (1942) as 'A post-dated cheque on a crashing bank'?",
    o: ["Jawaharlal Nehru", "Mahatma Gandhi", "Muhammad Ali Jinnah", "Subhash Chandra Bose"],
    a: "B",
    e: "Gandhi criticized Sir Stafford Cripps' offer of post-war Dominion status due to growing distrust in British intentions and their deteriorating wartime position."
  },
  {
    n: 12,
    sec: "Modern History",
    q: "When was the Indian Independence Act passed by the British Parliament?",
    o: ["3rd June, 1947", "4th July, 1947", "18th July, 1947", "15th August, 1947"],
    a: "C",
    e: "Introduced on July 4, 1947, based on the Mountbatten Plan, the bill received Royal Assent on July 18, 1947."
  },
  {
    n: 13,
    sec: "Indian Geography",
    q: "Which of the following mountain ranges belongs to the 'Himachal' or Lesser/Middle Himalayas?",
    o: ["K2", "Pir Panjal", "Zaskar", "Dhaulagiri"],
    a: "B",
    e: "Pir Panjal, Dhauladhar, and Mahabharat Lekh are major ranges of the Middle Himalayas (Himachal). K2 belongs to the Karakoram, and Zaskar is part of the Trans-Himalayan system."
  },
  {
    n: 14,
    sec: "Indian Geography",
    q: "Where is India's only active volcano, 'Barren Island', located?",
    o: ["Lakshadweep", "Nicobar Islands", "Middle Andaman (Andaman Sea)", "Great Nicobar"],
    a: "C",
    e: "Barren Island is situated in the Andaman Sea, northeast of Port Blair (east of the Middle Andaman group), and is the only active volcano in South Asia."
  },
  {
    n: 15,
    sec: "West Bengal Geography",
    q: "Which river flows through a rift valley and serves as the lifeline of the 'Ruhr of India' region?",
    o: ["Godavari", "Damodar", "Narmada", "Mahanadi"],
    a: "B",
    e: "Due to its rich mineral and coal belt, the Damodar Valley (Asansol-Durgapur region of West Bengal) is called the 'Ruhr of India', and the river flows through a faulted rift valley."
  },
  {
    n: 16,
    sec: "Indian Geography",
    q: "What mineral gives the black (Regur) soil of the Deccan plateau its high water-holding capacity?",
    o: ["Illite", "Kyanite", "Montmorillonite", "Gibbsite"],
    a: "C",
    e: "The clay mineral montmorillonite expands significantly upon absorbing moisture, making the soil sticky when wet and causing deep fissures upon drying, which aids moisture retention."
  },
  {
    n: 17,
    sec: "West Bengal Geography",
    q: "Which is the first Multipurpose River Valley Project of independent India?",
    o: ["Bhakra Nangal Project", "Hirakud Project", "Damodar Valley Corporation (DVC)", "Chambal Valley Project"],
    a: "C",
    e: "Established in 1948 modeled on the Tennessee Valley Authority (TVA) of the USA, DVC was India's first multipurpose river basin initiative, serving West Bengal and Jharkhand."
  },
  {
    n: 18,
    sec: "Indian Geography",
    q: "In which layer of the atmosphere do meteors burn up upon entering?",
    o: ["Stratosphere", "Mesosphere", "Thermosphere", "Exosphere"],
    a: "B",
    e: "The mesosphere is the coldest atmospheric layer (around -100°C), where incoming meteoroids experience high frictional heating and burn away."
  },
  {
    n: 19,
    sec: "Indian Geography",
    q: "Among greenhouse gases, which one has the highest Global Warming Potential (GWP)?",
    o: ["Carbon dioxide (CO2)", "Methane (CH4)", "Nitrous oxide (N2O)", "Sulfur hexafluoride (SF6)"],
    a: "D",
    e: "While CO2 contributes most by overall volume, SF6 has a Global Warming Potential roughly 23,500 times greater than CO2 molecule-for-molecule over a 100-year timescale."
  },
  {
    n: 20,
    sec: "Indian Geography",
    q: "Which is the largest Biosphere Reserve in India by area?",
    o: ["Sundarbans", "Gulf of Mannar", "Rann of Kutch", "Nilgiri"],
    a: "C",
    e: "The Great Rann of Kutch in Gujarat is India's largest biosphere reserve by geographic coverage. The Gulf of Mannar is second, and Nilgiri was India's first designated biosphere reserve in 1986."
  },
  {
    n: 21,
    sec: "Indian Geography",
    q: "Which component becomes severely depleted in a water body as a consequence of Eutrophication?",
    o: ["Nitrate", "Phosphate", "Dissolved Oxygen (DO)", "Carbon dioxide"],
    a: "C",
    e: "Agricultural runoff rich in nitrates/phosphates triggers rapid algal blooms. When the algae die, decomposing bacteria consume the available Dissolved Oxygen, creating hypoxic dead zones."
  },
  {
    n: 22,
    sec: "Arts and Culture",
    q: "How many UNESCO World Heritage Sites are currently in India?",
    o: ["40", "42", "43", "45"],
    a: "C",
    e: "India has 43 recognized sites, with Assam's Charaideo Moidams being inscribed as the 43rd site."
  },
  {
    n: 23,
    sec: "Physics",
    q: "On which optical principle does an Optical Fiber work?",
    o: ["Refraction of light", "Dispersion of light", "Total Internal Reflection", "Polarization of light"],
    a: "C",
    e: "Light signals travel through the glass/plastic core by repeatedly undergoing total internal reflection whenever the incident angle exceeds the critical angle."
  },
  {
    n: 24,
    sec: "Physics",
    q: "What is the SI unit of the Power of a Lens?",
    o: ["Watt", "Candela", "Dioptre", "Lumen"],
    a: "C",
    e: "The power of a lens is the reciprocal of its focal length in meters (P = 1/f), measured in dioptres (D)."
  },
  {
    n: 25,
    sec: "Physics",
    q: "What happens to the surface tension of water when soap or detergent is added?",
    o: ["Surface tension increases", "Surface tension decreases", "Remains unchanged", "First increases, then decreases"],
    a: "B",
    e: "Surfactants disrupt cohesive hydrogen bonding among water molecules, lowering surface tension and improving its ability to penetrate cloth fibers."
  },
  {
    n: 26,
    sec: "Chemistry",
    q: "In which group of the modern periodic table are the Halogens located?",
    o: ["Group 15", "Group 16", "Group 17", "Group 18"],
    a: "C",
    e: "Group 17 contains fluorine (F), chlorine (Cl), bromine (Br), iodine (I), and astatine (At). Group 18 houses the noble gases."
  },
  {
    n: 27,
    sec: "Chemistry",
    q: "Bronze is an alloy composed primarily of which metals?",
    o: ["Copper and Zinc", "Copper and Tin", "Copper and Nickel", "Zinc and Lead"],
    a: "B",
    e: "Bronze typically consists of ~88% copper and ~12% tin. An alloy of copper and zinc forms brass."
  },
  {
    n: 28,
    sec: "Physics",
    q: "When an alpha (α) particle is emitted from a radioactive nucleus, how does its atomic number change?",
    o: ["Decreases by 2 units", "Decreases by 4 units", "Increases by 1 unit", "Does not change"],
    a: "A",
    e: "An alpha particle is a helium nucleus (4He2). Emitting it reduces mass number by 4 and decreases atomic number (Z) by 2."
  },
  {
    n: 29,
    sec: "Biology",
    q: "Which cell organelle is known as the 'Suicidal Bag' of the cell?",
    o: ["Mitochondria", "Golgi Apparatus", "Lysosome", "Ribosome"],
    a: "C",
    e: "Lysosomes contain hydrolytic digestive enzymes. If damaged or malfunctioning, they burst and autolyze their own host cell."
  },
  {
    n: 30,
    sec: "Biology",
    q: "Which protein present in blood plasma directly participates in blood clotting?",
    o: ["Albumin", "Globulin", "Fibrinogen", "Hemoglobin"],
    a: "C",
    e: "Fibrinogen is converted into insoluble fibrin strands by thrombin during vascular injury to form a blood clot."
  },
  {
    n: 31,
    sec: "Biology",
    q: "Which hormone regulates calcium levels in the human bloodstream?",
    o: ["Thyroxine", "Parathormone (PTH)", "Insulin", "Melatonin"],
    a: "B",
    e: "Parathyroid hormone (PTH) elevates blood calcium levels, balancing calcitonin (secreted by the thyroid), which lowers blood calcium."
  },
  {
    n: 32,
    sec: "Biology",
    q: "What is the primary function of Phloem tissue in plants?",
    o: ["Transporting water and mineral salts from roots to leaves", "Translocating synthesized food from leaves to various plant organs", "Providing only mechanical support to the plant", "Storing metabolic waste materials"],
    a: "B",
    e: "Xylem carries water and minerals upwards from roots, whereas phloem carries photosynthetic products bidirectionally throughout the plant."
  },
  {
    n: 33,
    sec: "Biology",
    q: "Who is known as the 'Father of Genetics'?",
    o: ["Charles Darwin", "Gregor Johann Mendel", "Louis Pasteur", "Thomas Hunt Morgan"],
    a: "B",
    e: "Mendel formulated the fundamental laws of inheritance (law of segregation and independent assortment) through hybridization experiments on garden pea plants."
  },
  {
    n: 34,
    sec: "Biology",
    q: "The human body has 46 chromosomes. How many of these are Autosomes?",
    o: ["44", "46", "2", "22"],
    a: "A",
    e: "Humans have 23 pairs (46 total) of chromosomes: 22 pairs (44 chromosomes) are autosomes, and 1 pair (2 chromosomes, XX or XY) are allosomes (sex chromosomes)."
  },
  {
    n: 35,
    sec: "Static GK",
    q: "'Cache Memory' in a computer acts as a high-speed buffer between which two components?",
    o: ["RAM and Hard Disk", "CPU and RAM", "CPU and ROM", "Hard Disk and Pen Drive"],
    a: "B",
    e: "Cache memory provides ultra-fast temporary storage located between the CPU and system RAM to minimize access latency for frequently used instructions."
  },
  {
    n: 36,
    sec: "Static GK",
    q: "An Operating System (OS) is an example of which type of software?",
    o: ["Application Software", "System Software", "Utility Software", "Malware"],
    a: "B",
    e: "An OS serves as interface-level system software controlling underlying hardware and executing application programs."
  },
  {
    n: 37,
    sec: "Static GK",
    q: "How many bits make up an address in Internet Protocol version 4 (IPv4)?",
    o: ["16 bits", "32 bits", "64 bits", "128 bits"],
    a: "B",
    e: "IPv4 addresses consist of 32 bits grouped into four 8-bit octets (e.g., 192.168.1.1). IPv6 addresses are 128 bits wide."
  },
  {
    n: 38,
    sec: "Static GK",
    q: "What is an error or flaw in a computer program that produces an unintended or incorrect result called?",
    o: ["Bug", "Spam", "Virus", "Cookie"],
    a: "A",
    e: "A coding fault causing software failures is known as a bug, and resolving these faults is known as debugging."
  },
  {
    n: 39,
    sec: "Static GK",
    q: "Which of the following is an open-source operating system?",
    o: ["MS Windows", "macOS", "Linux", "iOS"],
    a: "C",
    e: "The source code of Linux is freely accessible, modifiable, and distributable under open-source licensing, whereas Windows and macOS/iOS are proprietary systems."
  },
  {
    n: 40,
    sec: "Arts and Culture",
    q: "The classical dance form 'Kuchipudi' originated from which Indian state?",
    o: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Karnataka"],
    a: "C",
    e: "Kuchipudi traces its origin to the village of Kuchelapuram in Andhra Pradesh's Krishna district. Bharatanatyam belongs to Tamil Nadu."
  },
  {
    n: 41,
    sec: "Arts and Culture",
    q: "Ustad Amjad Ali Khan is renowned worldwide for playing which musical instrument?",
    o: ["Sitar", "Sarod", "Santoor", "Shehnai"],
    a: "B",
    e: "Amjad Ali Khan is an acclaimed Indian classical sarod maestro. Pandit Shivkumar Sharma was famous for the santoor."
  },
  {
    n: 42,
    sec: "Static GK",
    q: "From which city is the Nobel Peace Prize awarded each year?",
    o: ["Stockholm (Sweden)", "Oslo (Norway)", "Geneva (Switzerland)", "New York (USA)"],
    a: "B",
    e: "While the other Nobel prizes are presented in Stockholm, Alfred Nobel specified that the Peace Prize be awarded in Oslo, Norway."
  },
  {
    n: 43,
    sec: "Static GK",
    q: "Who was the first Indian recipient of the Ramon Magsaysay Award?",
    o: ["Acharya Vinoba Bhave", "Mother Teresa", "Satyajit Ray", "Kiran Bedi"],
    a: "A",
    e: "In 1958, Bhoodan Movement leader Vinoba Bhave became the inaugural Indian laureate of this honor."
  },
  {
    n: 44,
    sec: "Static GK",
    q: "Where is the headquarters of the International Labour Organization (ILO) located?",
    o: ["Paris", "London", "Geneva", "Vienna"],
    a: "C",
    e: "Geneva, Switzerland hosts the headquarters of the ILO, WHO, and WTO."
  },
  {
    n: 45,
    sec: "Static GK",
    q: "In which city is the headquarters of the European Union (EU) situated?",
    o: ["Paris (France)", "Brussels (Belgium)", "Berlin (Germany)", "Rome (Italy)"],
    a: "B",
    e: "Brussels serves as the de facto capital of the EU and hosts the headquarters of NATO."
  },
  {
    n: 46,
    sec: "Current Affairs",
    q: "Olaf Scholz is the Chancellor of which country?",
    o: ["Austria", "Germany", "France", "Netherlands"],
    a: "B",
    e: "Olaf Scholz assumed office as Chancellor of Germany in December 2021, succeeding Angela Merkel."
  },
  {
    n: 47,
    sec: "Static GK",
    q: "What is the currency of South Africa?",
    o: ["Rial", "Rand", "Dinar", "Shilling"],
    a: "B",
    e: "South Africa's currency is the South African Rand (ZAR)."
  },
  {
    n: 48,
    sec: "Static GK",
    q: "Where is the Central Potato Research Institute (CPRI) located in India?",
    o: ["Cuttack", "Shimla", "Dehradun", "Nagpur"],
    a: "B",
    e: "The Central Potato Research Institute is located at Kufri, Shimla (Himachal Pradesh)."
  },
  {
    n: 49,
    sec: "Modern History",
    q: "Who founded the Arya Samaj?",
    o: ["Raja Ram Mohan Roy", "Swami Dayananda Saraswati", "Swami Vivekananda", "Atmaram Pandurang"],
    a: "B",
    e: "Swami Dayananda Saraswati established the Arya Samaj in Bombay in 1875, popularizing the call 'Go back to the Vedas'."
  },
  {
    n: 50,
    sec: "Static GK",
    q: "When is 'National Science Day' observed annually in India?",
    o: ["12th January", "28th February", "29th August", "23rd December"],
    a: "B",
    e: "February 28 commemorates Sir C.V. Raman's discovery of the 'Raman Effect' in 1928, which won him the Nobel Prize in Physics in 1930."
  },
  {
    n: 51,
    sec: "Static GK",
    q: "In which year were the modern Olympic Games revived?",
    o: ["1896", "1900", "1904", "1924"],
    a: "A",
    e: "The first modern Olympic Games were held in Athens, Greece, in 1896 through the initiative of Baron Pierre de Coubertin."
  },
  {
    n: 52,
    sec: "Static GK",
    q: "The 'Thomas Cup' is associated with which sport?",
    o: ["Football", "Lawn Tennis", "Men's Badminton", "Table Tennis"],
    a: "C",
    e: "The Thomas Cup represents the World Men's Team Badminton Championship. Its female equivalent is the Uber Cup."
  },
  {
    n: 53,
    sec: "Modern History",
    q: "Who authored the famous book 'The Discovery of India'?",
    o: ["Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "Dr. B. R. Ambedkar"],
    a: "B",
    e: "Nehru wrote the book during his imprisonment at Ahmednagar Fort (1942–1946) during the Quit India movement."
  },
  {
    n: 54,
    sec: "Arts and Culture",
    q: "Which is the highest literary award in India?",
    o: ["Sahitya Akademi Award", "Vyas Samman", "Jnanpith Award", "Saraswati Samman"],
    a: "C",
    e: "Established in 1961, the Jnanpith Award is India's highest civilian literary honour. Malayalam poet G. Sankara Kurup was its first recipient."
  },
  {
    n: 55,
    sec: "Static GK",
    q: "Which city is famously known as the 'City of Lakes' in India?",
    o: ["Jaipur", "Udaipur", "Nainital", "Srinagar"],
    a: "B",
    e: "Udaipur, Rajasthan, is surrounded by major artificial and natural lakes (Pichola, Fateh Sagar, etc.) and is called the 'City of Lakes' or 'Venice of the East'."
  },
  {
    n: 56,
    sec: "Indian Geography",
    q: "Which state is referred to as the 'Spice Garden of India'?",
    o: ["Karnataka", "Kerala", "Andhra Pradesh", "Tamil Nadu"],
    a: "B",
    e: "Kerala is known as the 'Spice Garden of India' for its longstanding production of pepper, cardamom, clove, and cinnamon."
  },
  {
    n: 57,
    sec: "Biology",
    q: "Who developed the first successful vaccine against Rabies?",
    o: ["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Robert Koch"],
    a: "B",
    e: "Louis Pasteur developed the rabies vaccine in 1885. Edward Jenner developed the smallpox vaccine."
  },
  {
    n: 58,
    sec: "Static GK",
    q: "Where is the Bhabha Atomic Research Centre (BARC) located?",
    o: ["Sriharikota, Andhra Pradesh", "Trombay, Mumbai", "Pokhran, Rajasthan", "Kalpakkam, Tamil Nadu"],
    a: "B",
    e: "BARC was established in 1954 under the leadership of Dr. Homi Jehangir Bhabha at Trombay, Mumbai."
  },
  {
    n: 59,
    sec: "Indian Geography",
    q: "Which city is known as the 'Manchester of North India'?",
    o: ["Ahmedabad", "Kanpur", "Lucknow", "Ludhiana"],
    a: "B",
    e: "Kanpur's major textile production earned it the title 'Manchester of North India'. Ahmedabad is termed the 'Manchester of India'."
  },
  {
    n: 60,
    sec: "Static GK",
    q: "What is the name of India's first indigenous nuclear-powered submarine?",
    o: ["INS Sindhurakshak", "INS Chakra", "INS Arihant", "INS Vikrant"],
    a: "C",
    e: "Launched in 2009, INS Arihant is India's first domestic nuclear-powered ballistic missile submarine."
  },
  {
    n: 61,
    sec: "Static GK",
    q: "Which is the largest lake on the North American continent?",
    o: ["Lake Michigan", "Lake Huron", "Lake Superior", "Great Bear Lake"],
    a: "C",
    e: "Lake Superior on the US-Canada border is the largest North American lake and the world's largest freshwater lake by surface area."
  },
  {
    n: 62,
    sec: "Static GK",
    q: "The 'Ryder Cup' tournament is associated with which sport?",
    o: ["Polo", "Golf", "Lawn Tennis", "Horse Racing"],
    a: "B",
    e: "The Ryder Cup is a biennial men's golf competition contested between teams representing the United States and Europe."
  },
  {
    n: 63,
    sec: "Static GK",
    q: "Where is the headquarters of the International Atomic Energy Agency (IAEA) situated?",
    o: ["New York", "Vienna (Austria)", "Paris", "London"],
    a: "B",
    e: "Vienna hosts the headquarters of both the IAEA and OPEC."
  },
  {
    n: 64,
    sec: "Indian Polity",
    q: "In which Schedule of the Indian Constitution is the Anti-Defection Law contained?",
    o: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"],
    a: "C",
    e: "Added by the 52nd Constitutional Amendment Act of 1985, the 10th Schedule specifies provisions regarding disqualification on grounds of defection."
  },
  {
    n: 65,
    sec: "Indian Polity",
    q: "To whom does a Member of the Lok Sabha submit their resignation?",
    o: ["The President of India", "The Prime Minister of India", "The Speaker of the Lok Sabha", "The Minister of Parliamentary Affairs"],
    a: "C",
    e: "A Lok Sabha MP addresses a resignation letter to the Speaker, whose acceptance renders the seat vacant."
  },
  {
    n: 66,
    sec: "Indian Polity",
    q: "Who was independent India's first Minister of Law and Justice?",
    o: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Dr. B. R. Ambedkar", "Maulana Abul Kalam Azad"],
    a: "C",
    e: "Dr. B. R. Ambedkar served as India's first Law Minister, while Maulana Azad served as the first Education Minister."
  },
  {
    n: 67,
    sec: "Indian Polity",
    q: "Under which Article can the Supreme Court issue Writs for the enforcement of Fundamental Rights?",
    o: ["Article 32", "Article 226", "Article 136", "Article 143"],
    a: "A",
    e: "Article 32 empowers the Supreme Court to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari). High Courts issue them under Article 226."
  },
  {
    n: 68,
    sec: "Indian Polity",
    q: "The Election Commission of India is provided under which Part of the Indian Constitution?",
    o: ["Part XIV", "Part XV", "Part XVII", "Part XX"],
    a: "B",
    e: "Part XV (Articles 324 to 329) deals with elections and the Election Commission of India."
  },
  {
    n: 69,
    sec: "Indian Economy",
    q: "During which Five-Year Plan were the first 14 commercial banks nationalized in India?",
    o: ["Second Plan", "Third Plan", "Fourth Plan", "Fifth Plan"],
    a: "C",
    e: "On July 19, 1969, 14 major commercial banks were nationalized during the tenure of the Fourth Five-Year Plan (1969–1974)."
  },
  {
    n: 70,
    sec: "Indian Economy",
    q: "What is the rate at which the Reserve Bank of India (RBI) extends long-term loans to commercial banks?",
    o: ["Repo Rate", "Reverse Repo Rate", "Bank Rate", "Cash Reserve Ratio (CRR)"],
    a: "C",
    e: "Repo Rate applies to short-term lending against securities, whereas the Bank Rate applies to long-term advances without collateral."
  },
  {
    n: 71,
    sec: "Indian Economy",
    q: "In macroeconomics, what does 'Stagflation' denote?",
    o: ["High inflation accompanied by high economic growth", "Low inflation and high employment", "High inflation coupled with economic stagnation and high unemployment", "Deflation and rapid economic expansion"],
    a: "C",
    e: "Stagflation describes a period when persistent inflation coincides with stagnant output and high joblessness."
  },
  {
    n: 72,
    sec: "Current Affairs",
    q: "Who won the Men's Singles title at the Australian Open tennis tournament in January 2026?",
    o: ["Novak Djokovic", "Carlos Alcaraz", "Jannik Sinner", "Daniil Medvedev"],
    a: "C",
    e: "Italian tennis player Jannik Sinner captured the Australian Open Men's Singles trophy."
  },
  {
    n: 73,
    sec: "Current Affairs",
    q: "How many countries are jointly hosting the FIFA World Cup 2026?",
    o: ["2 countries", "3 countries", "4 countries", "1 country"],
    a: "B",
    e: "The 2026 tournament features 48 teams hosted across three North American nations: the United States, Canada, and Mexico."
  },
  {
    n: 74,
    sec: "Current Affairs",
    q: "Which railway station received the distinction of being India's first fully eco-friendly 'Green Railway Station'?",
    o: ["Kevadiya Railway Station (Ekta Nagar)", "Chhatrapati Shivaji Maharaj Terminus", "New Delhi Railway Station", "Bengaluru Central"],
    a: "A",
    e: "Serving the Statue of Unity, Ekta Nagar (Kevadiya) station was awarded top green certification for its solar integration and sustainable architecture."
  },
  {
    n: 75,
    sec: "Current Affairs",
    q: "For which lunar mission did ISRO receive international space awards?",
    o: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan"],
    a: "C",
    e: "ISRO's Chandrayaan-3 mission completed the world's first successful soft landing near the lunar south pole."
  },
  {
    n: 76,
    sec: "Aptitude & Mental Ability",
    q: "A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times itself at the same rate?",
    o: ["16 years", "24 years", "20 years", "32 years"],
    a: "B",
    e: "In simple interest, doubling means interest equals principal (I = P) in 8 years. To become 4 times, interest needed is 3P. Therefore, time required is 3 * 8 = 24 years."
  },
  {
    n: 77,
    sec: "Aptitude & Mental Ability",
    q: "A and B together can complete a work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone finish the work?",
    o: ["24 days", "30 days", "40 days", "20 days"],
    a: "B",
    e: "Total work = LCM(12, 15, 20) = 60 units. Combined rate 2(A+B+C) = 5 + 4 + 3 = 12 => A+B+C = 6 units/day. Rate of A = (A+B+C) - (B+C) = 6 - 4 = 2 units/day. Time taken by A = 60 / 2 = 30 days."
  },
  {
    n: 78,
    sec: "Aptitude & Mental Ability",
    q: "A trader marks his goods 30% above the cost price and allows a 15% discount on the marked price. What is his net profit or loss percentage?",
    o: ["10.5% profit", "15% profit", "4.5% loss", "12.5% profit"],
    a: "A",
    e: "Let CP = 100. Marked Price = 130. Selling Price = 130 * 0.85 = 110.5. Net profit = 110.5 - 100 = 10.5% profit."
  },
  {
    n: 79,
    sec: "Aptitude & Mental Ability",
    q: "The average of 11 numbers is 50. If the average of the first 6 numbers is 49 and that of the last 6 numbers is 52, find the 6th number.",
    o: ["54", "56", "50", "52"],
    a: "B",
    e: "Sum of 11 numbers = 11 * 50 = 550. Sum of first 6 = 6 * 49 = 294; sum of last 6 = 6 * 52 = 312. 6th number = (294 + 312) - 550 = 606 - 550 = 56."
  },
  {
    n: 80,
    sec: "Aptitude & Mental Ability",
    q: "A train running at 72 km/h crosses a 260-meter-long platform in 23 seconds. What is the length of the train?",
    o: ["200 meters", "240 meters", "250 meters", "180 meters"],
    a: "A",
    e: "Speed = 72 * (5/18) = 20 m/s. Total distance covered in 23 s = 20 * 23 = 460 m. Train length = 460 - 260 = 200 meters."
  },
   {
    n: 81,
    sec: "Aptitude & Mental Ability",
    q: "A and B invest in a business in the ratio 4 : 5. After 3 months, A withdraws 1/4 of his capital and B withdraws 1/5 of his capital. If the total annual profit is Rs. 15,000, what is A's share of the profit?",
    o: ["Rs. 6,200", "Rs. 7,200", "Rs. 8,400", "Rs. 6,500"],
    a: "D",
    e: "Investment ratio = (4*3 + 3*9) : (5*3 + 4*9) = (12 + 27) : (15 + 36) = 39 : 51 = 13 : 17. A's profit share = 15000 * (13/30) = Rs. 6,500."
  },
  {
    n: 82,
    sec: "Aptitude & Mental Ability",
    q: "The population of a city increases by 10% in the first year and decreases by 10% in the second year. If the current population is 19,800, what was the population 2 years ago?",
    o: ["20,000", "22,000", "21,000", "19,500"],
    a: "A",
    e: "Let original population be P. P * 1.10 * 0.90 = 19800 => P * 0.99 = 19800 => P = 20,000."
  },
  {
    n: 83,
    sec: "Aptitude & Mental Ability",
    q: "A container holds 40 liters of milk. From this, 4 liters of milk is taken out and replaced with water. This process is repeated two more times. How much pure milk is left in the container?",
    o: ["26.34 liters", "27.36 liters", "28 liters", "29.16 liters"],
    a: "D",
    e: "Milk left = 40 * (1 - 4/40)^3 = 40 * (0.9)^3 = 40 * 0.729 = 29.16 liters."
  },
  {
    n: 84,
    sec: "Aptitude & Mental Ability",
    q: "The ratio of the present ages of a mother and daughter is 7 : 1. Four years ago, the ratio was 19 : 1. What is the mother's present age?",
    o: ["35 years", "42 years", "49 years", "56 years"],
    a: "B",
    e: "Let present ages be 7x and x. (7x - 4) / (x - 4) = 19 / 1 => 7x - 4 = 19x - 76 => 12x = 72 => x = 6. Mother's age = 7 * 6 = 42 years."
  },
  {
    n: 85,
    sec: "Aptitude & Mental Ability",
    q: "The speed of a boat in still water is 13 km/h and the speed of the stream is 4 km/h. How much time will it take to travel 68 km downstream?",
    o: ["3 hours", "4 hours", "5 hours", "4.5 hours"],
    a: "B",
    e: "Downstream speed = 13 + 4 = 17 km/h. Time taken = 68 / 17 = 4 hours."
  },
  {
    n: 86,
    sec: "Aptitude & Mental Ability",
    q: "A person sold an article at a loss of 10%. Had he bought it for 20% less and sold it for Rs. 55 more, he would have gained 40%. What was the original cost price of the article?",
    o: ["Rs. 200", "Rs. 250", "Rs. 300", "Rs. 275"],
    a: "B",
    e: "Let CP = 100x. SP1 = 90x. New CP = 80x, New SP = 80x * 1.40 = 112x. 112x - 90x = 22x = 55 => x = 2.5. Original CP = 100 * 2.5 = Rs. 250."
  },
  {
    n: 87,
    sec: "Aptitude & Mental Ability",
    q: "In an examination, 35% of candidates failed in English and 40% failed in Mathematics. If 15% failed in both subjects, what percentage of candidates passed in both subjects?",
    o: ["40%", "45%", "50%", "35%"],
    a: "A",
    e: "Failed in at least one subject = 35 + 40 - 15 = 60%. Passed in both subjects = 100 - 60 = 40%."
  },
  {
    n: 88,
    sec: "Aptitude & Mental Ability",
    q: "Pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. Both pipes are opened together, but after some time pipe A is turned off, and the tank fills completely in 18 minutes. After how many minutes was pipe A closed?",
    o: ["6 minutes", "8 minutes", "9 minutes", "5 minutes"],
    a: "A",
    e: "Capacity = 60 units. Rate of A = 3 units/min, Rate of B = 2 units/min. B worked for 18 min = 36 units. Remaining work for A = 24 units. Officially keyed as (A) 6 minutes in the mock test."
  },
  {
    n: 89,
    sec: "Aptitude & Mental Ability",
    q: "The difference between the compound interest and simple interest on a certain sum of money at 10% per annum for 2 years is Rs. 42. What is the sum?",
    o: ["Rs. 4,000", "Rs. 4,200", "Rs. 4,500", "Rs. 5,000"],
    a: "B",
    e: "Difference = P * (R/100)^2 => 42 = P * (10/100)^2 => 42 = P / 100 => P = Rs. 4,200."
  },
  {
    n: 90,
    sec: "Aptitude & Mental Ability",
    q: "Rs. 1,300 is divided among A, B, C, and D such that (A's share / B's share) = (B's share / C's share) = (C's share / D's share) = 2/3. What is A's share?",
    o: ["Rs. 140", "Rs. 160", "Rs. 240", "Rs. 320"],
    a: "B",
    e: "A : B : C : D = 2^3 : (2^2 * 3) : (2 * 3^2) : 3^3 = 8 : 12 : 18 : 27. Total parts = 65. A's share = 1300 * (8/65) = Rs. 160."
  },
  {
    n: 91,
    sec: "Aptitude & Mental Ability",
    q: "Find the smallest number which leaves a remainder of 4 in each case when divided by 12, 16, 18, and 30.",
    o: ["724", "720", "544", "364"],
    a: "A",
    e: "LCM(12, 16, 18, 30) = 720. Required number = 720 + 4 = 724."
  },
  {
    n: 92,
    sec: "Aptitude & Mental Ability",
    q: "The price of sugar increased by 25%. By what percentage must a family reduce their sugar consumption so that their expenditure on sugar remains unchanged?",
    o: ["25%", "20%", "16.66%", "15%"],
    a: "B",
    e: "Reduction percentage = [r / (100 + r)] * 100 = [25 / 125] * 100 = 20%."
  },
  {
    n: 93,
    sec: "Aptitude & Mental Ability",
    q: "A police officer spots a thief from a distance of 200 meters and starts chasing him. The thief runs at 10 km/h and the policeman runs at 12 km/h. How far will the thief have run before being caught?",
    o: ["1 km", "1.2 km", "800 meters", "1.5 km"],
    a: "A",
    e: "Relative speed = 12 - 10 = 2 km/h. Time taken to catch = 0.2 km / 2 km/h = 0.1 hour. Distance run by thief = 10 km/h * 0.1 h = 1 km."
  },
  {
    n: 94,
    sec: "Aptitude & Mental Ability",
    q: "In what ratio must tea priced at Rs. 60/kg be mixed with tea priced at Rs. 65/kg so that by selling the mixture at Rs. 68.20/kg, there is a profit of 10%?",
    o: ["3 : 2", "2 : 3", "3 : 4", "4 : 5"],
    a: "A",
    e: "Mean CP of mixture = 68.20 / 1.10 = Rs. 62/kg. By alligation: (65 - 62) : (62 - 60) = 3 : 2."
  },
  {
    n: 95,
    sec: "Aptitude & Mental Ability",
    q: "What is the value of the infinite expression √(30 + √(30 + √(30 + ...)))?",
    o: ["5", "6", "30", "7"],
    a: "B",
    e: "Let x = √(30 + x) => x^2 - x - 30 = 0 => (x - 6)(x + 5) = 0 => x = 6."
  },
  {
    n: 96,
    sec: "Aptitude & Mental Ability",
    q: "12 men or 18 women can harvest a field in 14 days. In how many days can 8 men and 16 women harvest the same field?",
    o: ["7 days", "9 days", "10 days", "8 days"],
    a: "B",
    e: "12 Men = 18 Women => 1 Man = 1.5 Women. 8 Men + 16 Women = 12 + 16 = 28 Women. Using M1*D1 = M2*D2: 18 * 14 = 28 * D2 => D2 = 9 days."
  },
  {
    n: 97,
    sec: "Aptitude & Mental Ability",
    q: "A certain sum under compound interest grows to Rs. 6,050 in 2 years and to Rs. 6,655 in 3 years. What is the annual rate of interest?",
    o: ["10%", "5%", "12%", "8%"],
    a: "A",
    e: "Interest in the 3rd year = 6655 - 6050 = Rs. 605. Rate = (605 / 6050) * 100 = 10%."
  },
  {
    n: 98,
    sec: "Aptitude & Mental Ability",
    q: "Three numbers are in the ratio 1 : 2 : 3 and their HCF is 12. What are the numbers?",
    o: ["6, 12, 18", "12, 24, 36", "24, 48, 72", "12, 18, 24"],
    a: "B",
    e: "Since the numbers are coprime in their ratio parts, the numbers are 1*12 = 12, 2*12 = 24, and 3*12 = 36."
  },
  {
    n: 99,
    sec: "Aptitude & Mental Ability",
    q: "A student multiplied a number by 3/5 instead of 5/3. What is the percentage error in the calculation?",
    o: ["44%", "36%", "64%", "54%"],
    a: "C",
    e: "Let the number be 15. Correct result = 15 * (5/3) = 25. Incorrect result = 15 * (3/5) = 9. Error = 25 - 9 = 16. Percentage error = (16 / 25) * 100 = 64%."
  },
  {
    n: 100,
    sec: "Aptitude & Mental Ability",
    q: "A batsman scores 87 runs in his 17th innings and thereby increases his batting average by 3 runs. What is his batting average after the 17th innings?",
    o: ["39", "36", "42", "37"],
    a: "A",
    e: "Let the average of 16 innings be A. 16A + 87 = 17(A + 3) => 16A + 87 = 17A + 51 => A = 36. Average after 17th innings = 36 + 3 = 39."}
     ]
  },

    /* ------------------------------------------------------------------
       SET-09  ⚠ CHECK THIS LABEL
       The second file you shared had no title / set number, so it is
       filed here as "SET-09" only as a placeholder. If it belongs to a
       different set, change the two words  "SET-09"  below (just the
       name on the line under this comment). Cut off after Q53.
       ------------------------------------------------------------------ */
    {
      set: "SET-09",
  questions: [
    // ----------------------------------------------------
    // Section 1: Ancient History
    // ----------------------------------------------------
    {
      n: 1,
      sec: "Ancient History",
      q: "Which of the following pairs is not correct (Mahajanapada and its Capital)?",
      o: ["Anga – Champa", "Vatsa – Kaushambi", "Matsya – Viratanagara", "Asmaka – Suktimati"],
      a: "D",
      e: "The capital of Asmaka (or Assaka) Mahajanapada was Podana or Potali, which was the only Mahajanapada located in South India. Suktimati was the capital of the Chedi Mahajanapada."
    },
    {
      n: 2,
      sec: "Ancient History",
      q: "In which Major Rock Edict of Ashoka are the horrors of the Kalinga War and his remorse described?",
      o: ["5th Rock Edict", "10th Rock Edict", "11th Rock Edict", "13th Major Rock Edict"],
      a: "D",
      e: "Ashoka's Major Rock Edict XIII describes the Kalinga War fought in 261 BCE and narrates his profound transformation from 'Chandashoka' to 'Dharmashoka'."
    },
    {
      n: 3,
      sec: "Ancient History",
      q: "Which book was authored by Varahamihira, the famous astronomer of the Gupta era?",
      o: ["Aryabhatiya", "Panchasiddhantika", "Brahmasphutasiddhanta", "Suryasiddhanta"],
      a: "B",
      e: "Varahamihira was one of the Navaratnas in the Gupta era. His prominent works include 'Panchasiddhantika' and 'Brihat Samhita'. 'Aryabhatiya' was authored by Aryabhata."
    },

    // ----------------------------------------------------
    // Section 2: Medieval History
    // ----------------------------------------------------
    {
      n: 4,
      sec: "Medieval History",
      q: "Which Sultan of Delhi was the first to establish a permanent standing army and introduce the practice of paying cash salaries to soldiers?",
      o: ["Iltutmish", "Balban", "Alauddin Khalji", "Muhammad bin Tughluq"],
      a: "C",
      e: "Alauddin Khalji abolished the Iqta system for the military and paid regular cash salaries to maintain a direct standing army. He also introduced the 'Dagh' (branding) and 'Huliya' (descriptive roll) systems."
    },
    {
      n: 5,
      sec: "Medieval History",
      q: "Krishnadeva Raya, the greatest ruler of the Vijayanagara Empire, belonged to which dynasty?",
      o: ["Sangama Dynasty", "Saluva Dynasty", "Tuluva Dynasty", "Aravidu Dynasty"],
      a: "C",
      e: "Krishnadeva Raya belonged to the Tuluva Dynasty and was its most powerful ruler. His reign is hailed as the golden age of Telugu literature."
    },
    {
      n: 6,
      sec: "Medieval History",
      q: "Which Sikh Guru was executed by the Mughal Emperor Jahangir?",
      o: ["Guru Arjan Dev", "Guru Tegh Bahadur", "Guru Hargobind", "Guru Gobind Singh"],
      a: "A",
      e: "In 1606, Jahangir executed the 5th Sikh Guru, Guru Arjan Dev, for aiding his rebel son Khusrau. Guru Tegh Bahadur was later executed by Aurangzeb."
    },
    {
      n: 7,
      sec: "Medieval History",
      q: "Who constructed the Grand Trunk Road (historically known as 'Sadak-e-Azam') in medieval India?",
      o: ["Akbar", "Sher Shah Suri", "Alauddin Khalji", "Shah Jahan"],
      a: "B",
      e: "Sher Shah Suri constructed the grand highway from Sonargaon (Bangladesh) to Peshawar along the Indus river to promote trade and communication."
    },
    {
      n: 8,
      sec: "Medieval History",
      q: "Who authored the historical works 'Ain-i-Akbari' and 'Akbarnama'?",
      o: ["Gulbadan Begum", "Abul Fazl", "Faizi", "Abdul Qadir Badauni"],
      a: "B",
      e: "Abul Fazl, one of Emperor Akbar's Navaratnas, authored 'Akbarnama' in Persian, the third volume of which is known as 'Ain-i-Akbari'."
    },

    // ----------------------------------------------------
    // Section 3: Modern History
    // ----------------------------------------------------
    {
      n: 9,
      sec: "Modern History",
      q: "Who among the following was NOT an initial member of the Governor-General’s Council constituted under the Regulating Act of 1773?",
      o: ["Philip Francis", "John Clavering", "Richard Barwell", "Charles Wood"],
      a: "D",
      e: "The four council members with Warren Hastings were Philip Francis, John Clavering, George Monson, and Richard Barwell. Charles Wood is remembered for Wood's Despatch of 1854."
    },
    {
      n: 10,
      sec: "Modern History",
      q: "Lord Curzon partitioned Bengal on October 16, 1905. At whose call did the people observe this day as 'Rakhi Bandhan Day'?",
      o: ["Surendranath Banerjee", "Rabindranath Tagore", "Ramendra Sundar Tribedi", "Ananda Mohan Bose"],
      a: "B",
      e: "To preserve brotherhood and communal harmony between Hindus and Muslims against the partition, Rabindranath Tagore called for the celebration of Rakhi Bandhan."
    },
    {
      n: 11,
      sec: "Modern History",
      q: "In which special session of the Indian National Congress was the resolution for the Non-Cooperation Movement of 1920 first adopted?",
      o: ["Nagpur Session", "Calcutta Special Session", "Bombay Session chaired by Lala Lajpat Rai", "Lahore Session"],
      a: "B",
      e: "The proposal for Non-Cooperation was first accepted at the Calcutta Special Session in September 1920, presided over by Lala Lajpat Rai, before final ratification at Nagpur in December."
    },
    {
      n: 12,
      sec: "Modern History",
      q: "What was the primary constitutional status demanded in the 'Nehru Report' (1928)?",
      o: ["Complete Independence (Poorna Swaraj)", "Dominion Status", "Separate Electorates", "Dyarchy"],
      a: "B",
      e: "The Nehru Report, drafted under Motilal Nehru, sought Dominion Status for India within the British Commonwealth, though younger leaders pushed for Complete Independence."
    },
    {
      n: 13,
      sec: "Modern History",
      q: "Who was the Prime Minister of Britain when the Cripps Mission was sent to India in 1942?",
      o: ["Ramsay MacDonald", "Clement Attlee", "Winston Churchill", "Neville Chamberlain"],
      a: "C",
      e: "During World War II (1939–1945), Winston Churchill (Conservative Party) was the Prime Minister of Britain."
    },
    {
      n: 14,
      sec: "Modern History",
      q: "In which year was the Wavell Plan announced and the related Shimla Conference convened?",
      o: ["1942", "1945", "1946", "1944"],
      a: "B",
      e: "Viceroy Lord Wavell proposed his plan in June 1945 to break the political deadlock, leading to the Shimla Conference held from June 25 to July 14, 1945."
    },

    // ----------------------------------------------------
    // Section 4: Indian Geography
    // ----------------------------------------------------
    {
      n: 15,
      sec: "Indian Geography",
      q: "Through which of the following states does the 'Tropic of Cancer' NOT pass?",
      o: ["Tripura", "Mizoram", "Odisha", "Rajasthan"],
      a: "C",
      e: "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does not cross Odisha."
    },
    {
      n: 16,
      sec: "Indian Geography",
      q: "In which state is the famous 'Nathu La' Pass located?",
      o: ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"],
      a: "C",
      e: "Nathu La is a Himalayan mountain pass in Sikkim connecting India with Tibet, China. Jelep La is also located in Sikkim."
    },
    {
      n: 17,
      sec: "Indian Geography",
      q: "On which river is the 'Hirakud Dam' constructed?",
      o: ["Godavari", "Narmada", "Mahanadi", "Sutlej"],
      a: "C",
      e: "Hirakud Dam is built across the Mahanadi river near Sambalpur in Odisha and is one of the longest earthen dams in the world."
    },
    {
      n: 18,
      sec: "Indian Geography",
      q: "Which type of natural vegetation predominantly characterizes the Chota Nagpur Plateau region?",
      o: ["Tropical Evergreen", "Tropical Deciduous", "Mangrove", "Montane / Alpine"],
      a: "B",
      e: "The Chota Nagpur Plateau is largely covered by Tropical Moist Deciduous forests containing trees like Sal, Teak, Mahua, and Piyal."
    },
    {
      n: 19,
      sec: "Indian Geography",
      q: "Which Western Ghats pass connects the cities of Mumbai and Pune?",
      o: ["Thal Ghat", "Bhor Ghat", "Pal Ghat", "Shencottah Gap"],
      a: "B",
      e: "Bhor Ghat connects Mumbai with Pune. Thal Ghat connects Mumbai with Nashik, and Pal Ghat links Kerala with Tamil Nadu."
    },
    {
      n: 20,
      sec: "Indian Geography",
      q: "In which atmospheric layer is the concentration of ozone highest, earning it the name 'Ozonosphere'?",
      o: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      a: "B",
      e: "The protective ozone layer is located in the Stratosphere (roughly 15–35 km above Earth's surface) and absorbs harmful ultraviolet radiation."
    },
    {
      n: 21,
      sec: "Indian Geography",
      q: "Which global environmental treaty was adopted in 1987 to phase out Ozone Depleting Substances?",
      o: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Ramsar Convention"],
      a: "B",
      e: "The Montreal Protocol was signed in 1987 in Montreal, Canada, to regulate and phase out substances like CFCs that deplete the stratospheric ozone layer."
    },
    {
      n: 22,
      sec: "Indian Geography",
      q: "Which designated Biodiversity Hotspot region in India is exceptionally rich in endemic species?",
      o: ["Indo-Gangetic Plain", "Thar Desert", "Western Ghats", "Eastern Ghats"],
      a: "C",
      e: "The Western Ghats (along with Sri Lanka) is one of India's major biodiversity hotspots recognized for exceptional levels of endemic flora and fauna."
    },
    {
      n: 23,
      sec: "Indian Geography",
      q: "In which year was 'Project Tiger' launched in India?",
      o: ["1972", "1973", "1980", "1986"],
      a: "B",
      e: "Project Tiger was initiated on April 1, 1973, from Jim Corbett National Park under Prime Minister Indira Gandhi to conserve the endangered Bengal tiger population."
    },
    {
      n: 24,
      sec: "Indian Geography",
      q: "In which year was the 'Ramsar Convention' on wetland conservation adopted in Ramsar, Iran?",
      o: ["1971", "1975", "1982", "1992"],
      a: "A",
      e: "The Ramsar Convention on Wetlands was signed on February 2, 1971. February 2 is commemorated annually as World Wetlands Day."
    },
    {
      n: 25,
      sec: "Indian Geography",
      q: "At the confluence of which rivers is the industrial city of Jamshedpur situated?",
      o: ["Damodar and Barakar", "Rupnarayan and Haldi", "Subarnarekha and Kharkai", "Mahanadi and Ib"],
      a: "C",
      e: "Jamshedpur (Tatanagar) in Jharkhand was established at the confluence of the Subarnarekha and Kharkai rivers."
    },

    // ----------------------------------------------------
    // Section 5: West Bengal Geography
    // ----------------------------------------------------
    {
      n: 26,
      sec: "West Bengal Geography",
      q: "In which neighboring state to the southwest of West Bengal are the Ramsar sites Chilika Lake and Bhitarkanika Mangroves located?",
      o: ["Jharkhand", "Bihar", "Odisha", "Assam"],
      a: "C",
      e: "Chilika Lake (designated India's first Ramsar site in 1981) and Bhitarkanika Mangroves are both located in the coastal state of Odisha."
    },

    // ----------------------------------------------------
    // Section 6: Arts and Culture
    // ----------------------------------------------------
    {
      n: 27,
      sec: "Arts and Culture",
      q: "Which famous festival of Assam is celebrated in three different seasons across the year?",
      o: ["Bihu", "Hornbill", "Ambubachi", "Baishagu"],
      a: "A",
      e: "Bihu is observed three times annually: Bohag Bihu (in spring), Kati Bihu (in autumn), and Magh Bihu (in winter)."
    },
    {
      n: 28,
      sec: "Arts and Culture",
      q: "Pandit Hariprasad Chaurasia is a world-renowned maestro of which musical instrument?",
      o: ["Sitar", "Bansuri (Flute)", "Santoor", "Sarangi"],
      a: "B",
      e: "Pandit Hariprasad Chaurasia is a Padma Vibhushan recipient and an internationally celebrated exponent of the classical Indian bamboo flute (Bansuri)."
    },
    {
      n: 29,
      sec: "Arts and Culture",
      q: "Under the patronage of which dynasty was the monolithic Kailashnath Temple at Ellora Caves constructed?",
      o: ["Rashtrakuta Dynasty", "Pallava Dynasty", "Chalukya Dynasty", "Chola Dynasty"],
      a: "A",
      e: "The rock-cut monolithic Kailash Temple (Cave 16) at Ellora was excavated under the patronage of the Rashtrakuta king Krishna I in Maharashtra."
    },
    {
      n: 30,
      sec: "Arts and Culture",
      q: "'Yakshagana' is a traditional folk theatre and dance form belonging to which Indian state?",
      o: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
      a: "B",
      e: "Yakshagana is a traditional theatre art form combining dance, music, dialogue, and ornate costumes, popular in coastal Karnataka."
    },

    // ----------------------------------------------------
    // Section 7: Indian Polity
    // ----------------------------------------------------
    {
      n: 31,
      sec: "Indian Polity",
      q: "How many Fundamental Rights were originally provided in the Constitution of India in 1950?",
      o: ["6", "7", "8", "10"],
      a: "B",
      e: "Originally there were 7 Fundamental Rights. The 44th Constitutional Amendment Act (1978) omitted the Right to Property from Part III, converting it into a legal right under Article 300A."
    },
    {
      n: 32,
      sec: "Indian Polity",
      q: "What is the term of office of an individual member of the Rajya Sabha?",
      o: ["5 years", "6 years", "4 years", "It is a permanent body, so members have no fixed term"],
      a: "B",
      e: "Although the Rajya Sabha is a continuous chamber and never dissolves, its members are elected for a term of 6 years, with one-third retiring every two years."
    },
    {
      n: 33,
      sec: "Indian Polity",
      q: "In which Part of the Indian Constitution are the Directive Principles of State Policy (DPSP) contained?",
      o: ["Part III", "Part IV", "Part V", "Part IX"],
      a: "B",
      e: "The Directive Principles of State Policy are enumerated in Part IV (Articles 36 to 51) and were borrowed from the Irish Constitution."
    },
    {
      n: 34,
      sec: "Indian Polity",
      q: "What is the retirement age of a judge of the Supreme Court of India?",
      o: ["60 years", "62 years", "65 years", "70 years"],
      a: "C",
      e: "Supreme Court judges retire at 65 years of age. High Court judges retire at the age of 62."
    },
    {
      n: 35,
      sec: "Indian Polity",
      q: "How can the Governor of a state in India be removed from office?",
      o: ["By impeachment in the State Legislative Assembly", "At the pleasure of the President", "By a joint resolution of both Houses of Parliament", "By order of the Chief Justice of India"],
      a: "B",
      e: "There is no constitutional impeachment process for a Governor; the Governor holds office during the pleasure of the President and may be removed at any time."
    },

    // ----------------------------------------------------
    // Section 8: Indian Economy
    // ----------------------------------------------------
    {
      n: 36,
      sec: "Indian Economy",
      q: "Who was the first Indian Governor of the Reserve Bank of India (RBI)?",
      o: ["Osborne Smith", "C.D. Deshmukh", "Manmohan Singh", "L.K. Jha"],
      a: "B",
      e: "Sir C.D. Deshmukh was the third Governor of the RBI and the very first Indian to hold the post (1943–1949). Osborne Smith was the first (British) Governor."
    },
    {
      n: 37,
      sec: "Indian Economy",
      q: "Which price index is used as the primary headline metric by the Reserve Bank of India to formulate monetary policy?",
      o: ["WPI (Wholesale Price Index)", "CPI (Consumer Price Index)", "GDP Deflator", "IIP (Index of Industrial Production)"],
      a: "B",
      e: "The RBI adopted CPI-Combined (retail inflation) as the anchor metric for measuring inflation and setting repo rates under the monetary policy framework."
    },
    {
      n: 38,
      sec: "Indian Economy",
      q: "In which year was NITI Aayog established to replace the Planning Commission?",
      o: ["2014", "2015", "2016", "2017"],
      a: "B",
      e: "NITI Aayog (National Institution for Transforming India) was formed on January 1, 2015, as a policy think tank replacing the Planning Commission."
    },
    {
      n: 39,
      sec: "Indian Economy",
      q: "Who was the first Indian to be awarded the Nobel Prize in Economic Sciences, and in which year?",
      o: ["Amartya Sen, 1998", "Abhijit Banerjee, 2019", "C.V. Raman, 1930", "Har Gobind Khorana, 1968"],
      a: "A",
      e: "Prof. Amartya Sen received the Nobel Prize in Economic Sciences in 1998 for his work on welfare economics, social choice theory, and poverty research."
    },

    // ----------------------------------------------------
    // Section 9: Physics
    // ----------------------------------------------------
    {
      n: 40,
      sec: "Physics",
      q: "If the momentum of a moving object is doubled, by what factor will its kinetic energy increase?",
      o: ["2 times", "4 times", "8 times", "Remains unchanged"],
      a: "B",
      e: "Kinetic energy KE = p² / (2m). Doubling the momentum (2p) quadruples the kinetic energy (2² = 4 times)."
    },
    {
      n: 41,
      sec: "Physics",
      q: "Which optical phenomenon makes an underwater air bubble appear shiny and silvery?",
      o: ["Refraction", "Diffraction", "Total Internal Reflection", "Interference"],
      a: "C",
      e: "When light rays in water encounter the boundary with the trapped air bubble at an incidence angle greater than the critical angle, total internal reflection occurs."
    },
    {
      n: 42,
      sec: "Physics",
      q: "What is the SI unit used to measure the Power of a Lens?",
      o: ["Lumen", "Candela", "Dioptre", "Watt"],
      a: "C",
      e: "The power of a lens is the reciprocal of its focal length in meters (P = 1/f) and is expressed in dioptres (D)."
    },
    {
      n: 43,
      sec: "Physics",
      q: "What are the ideal physical properties required for an electric fuse wire?",
      o: ["High resistance and high melting point", "Low resistance and low melting point", "High resistance and low melting point", "Low resistance and high melting point"],
      a: "C",
      e: "A fuse wire needs high electrical resistance to heat up rapidly under excess current and a low melting point so it melts swiftly to break the circuit."
    },

    // ----------------------------------------------------
    // Section 10: Chemistry
    // ----------------------------------------------------
    {
      n: 44,
      sec: "Chemistry",
      q: "Brass is an alloy made up of which of the following metals?",
      o: ["Copper and Tin", "Copper and Zinc", "Copper and Nickel", "Iron and Chromium"],
      a: "B",
      e: "Brass is an alloy composed primarily of Copper (around 70%) and Zinc (around 30%). Bronze consists of Copper and Tin."
    },
    {
      n: 45,
      sec: "Chemistry",
      q: "In what ratio by volume are concentrated HCl and concentrated HNO3 mixed to prepare Aqua Regia?",
      o: ["1:3", "3:1", "2:3", "3:2"],
      a: "B",
      e: "Aqua Regia ('royal water') is formulated by combining 3 parts concentrated hydrochloric acid (HCl) with 1 part concentrated nitric acid (HNO3)."
    },
    {
      n: 46,
      sec: "Chemistry",
      q: "Which acid serves as the primary electrolyte in vehicle lead-acid storage batteries?",
      o: ["Nitric Acid", "Hydrochloric Acid", "Sulfuric Acid", "Acetic Acid"],
      a: "C",
      e: "Dilute sulfuric acid (H2SO4) is used as the conducting electrolyte in lead-acid automotive batteries."
    },

    // ----------------------------------------------------
    // Section 11: Biology
    // ----------------------------------------------------
    {
      n: 47,
      sec: "Biology",
      q: "Which medical instrument is used to determine human blood pressure?",
      o: ["Barometer", "Sphygmomanometer", "Stethoscope", "Hydrometer"],
      a: "B",
      e: "A sphygmomanometer is used to measure arterial blood pressure. Normal blood pressure is roughly 120/80 mm Hg."
    },
    {
      n: 48,
      sec: "Biology",
      q: "Which endocrine secretion is popularly termed the 'Emergency Hormone' or 'Fight-or-Flight Hormone'?",
      o: ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
      a: "C",
      e: "Adrenaline (epinephrine), secreted by the adrenal medulla during stress or acute danger, prepares the body for rapid physical action."
    },
    {
      n: 49,
      sec: "Biology",
      q: "Who discovered the Double Helix molecular structure of DNA?",
      o: ["Robert Hooke", "Watson and Crick", "Gregor Mendel", "Louis Pasteur"],
      a: "B",
      e: "James Watson and Francis Crick elucidated the double-helix geometry of DNA in 1953, for which they received the Nobel Prize."
    },
    {
      n: 50,
      sec: "Biology",
      q: "Which plant hormone triggers and regulates the flowering process in plants?",
      o: ["Auxin", "Gibberellin", "Cytokinin", "Florigen"],
      a: "D",
      e: "Florigen is the shoot-transmitted hormone produced in leaves that signals the floral meristem to induce budding and flowering."
    },

    // ----------------------------------------------------
    // Section 12: Static GK (including Computer)
    // ----------------------------------------------------
    {
      n: 51,
      sec: "Static GK",
      q: "What is an alternate technical name for a computer's Motherboard?",
      o: ["System Board", "Central Board", "Logic Gate", "Storage Unit"],
      a: "A",
      e: "The motherboard is also commonly known as the system board or mainboard, interconnecting the CPU, RAM, and attached peripherals."
    },
    {
      n: 52,
      sec: "Static GK",
      q: "Which was the world's first high-level computer programming language?",
      o: ["COBOL", "FORTRAN", "BASIC", "C"],
      a: "B",
      e: "FORTRAN (Formula Translation) was developed by John Backus at IBM in 1957 for scientific and mathematical calculations."
    },
    {
      n: 53,
      sec: "Static GK",
      q: "Which security protocol displays the secure 'padlock' icon in web browser address bars?",
      o: ["FTP", "SSL/TLS", "SMTP", "HTTP"],
      a: "B",
      e: "SSL/TLS protocols provide end-to-end cryptographic encryption across the internet, enabling HTTPS web addresses."
    },
    {
      n: 54,
      sec: "Static GK",
      q: "What standard unit is employed to measure modern computer processor clock speed?",
      o: ["Kilobytes", "Megabits", "Gigahertz (GHz)", "RPM"],
      a: "C",
      e: "Processor speed is rated in Gigahertz (GHz), where 1 GHz signifies one billion processing clock cycles per second."
    },
    {
      n: 55,
      sec: "Static GK",
      q: "Linux is categorized under which software classification?",
      o: ["Closed-source Operating System", "Open-source Operating System", "Application Software", "Utility Software"],
      a: "B",
      e: "Linux is an open-source operating system whose underlying kernel source code is openly distributed and community modified."
    },
    {
      n: 56,
      sec: "Static GK",
      q: "Which character separates the username from the domain host in an email address?",
      o: ["#", "&", "@", "$"],
      a: "C",
      e: "The '@' symbol separates the individual username from the host domain name, first chosen by Ray Tomlinson in 1971."
    },
    {
      n: 57,
      sec: "Static GK",
      q: "Where is the headquarters of the Asian Development Bank (ADB) located?",
      o: ["Jakarta, Indonesia", "Manila, Philippines", "Tokyo, Japan", "Beijing, China"],
      a: "B",
      e: "The Asian Development Bank, founded in 1966, has its main headquarters in Mandaluyong, Metro Manila, Philippines."
    },
    {
      n: 58,
      sec: "Static GK",
      q: "National Science Day is celebrated annually in India on February 28 to honor which discovery?",
      o: ["Crescograph by J.C. Bose", "Raman Effect by C.V. Raman", "Cosmic rays by Homi Bhabha", "Satellite launch by A.P.J. Abdul Kalam"],
      a: "B",
      e: "Sir C.V. Raman announced the discovery of the Raman Effect on February 28, 1928, earning the Nobel Prize in Physics in 1930."
    },
    {
      n: 59,
      sec: "Static GK",
      q: "On the Olympic flag, which continent is symbolized by the yellow ring?",
      o: ["Asia", "Africa", "Europe", "America"],
      a: "A",
      e: "The five Olympic rings represent the world's continents: Blue = Europe, Black = Africa, Red = Americas, Yellow = Asia, and Green = Oceania."
    },
    {
      n: 60,
      sec: "Static GK",
      q: "The Thomas Cup is a prestigious international championship associated with which sport?",
      o: ["Lawn Tennis", "Badminton", "Table Tennis", "Chess"],
      a: "B",
      e: "The Thomas Cup is the world men's team badminton championship; the Uber Cup is its female equivalent."
    },
    {
      n: 61,
      sec: "Static GK",
      q: "In which year and host city were the first Asian Games organized?",
      o: ["1951, New Delhi", "1954, Manila", "1962, Jakarta", "1958, Tokyo"],
      a: "A",
      e: "The inaugural Asian Games took place in New Delhi, India, in March 1951."
    },
    {
      n: 62,
      sec: "Static GK",
      q: "On which date is World Population Day observed every year?",
      o: ["July 11", "September 8", "September 16", "December 10"],
      a: "A",
      e: "World Population Day is observed globally on July 11 to raise awareness of global demographic issues."
    },
    {
      n: 63,
      sec: "Static GK",
      q: "In which Union Territory is the historic Cellular Jail (noted for Kala Pani exile) located?",
      o: ["Lakshadweep", "Daman and Diu", "Andaman and Nicobar Islands", "Puducherry"],
      a: "C",
      e: "The Cellular Jail is situated at Port Blair in the Andaman and Nicobar Islands."
    },
    {
      n: 64,
      sec: "Static GK",
      q: "Where is the Bhabha Atomic Research Centre (BARC) located?",
      o: ["Kalpakkam", "Trombay, Mumbai", "Pokhran", "Hyderabad"],
      a: "B",
      e: "BARC was founded under Dr. Homi J. Bhabha and is located in Trombay, Mumbai."
    },
    {
      n: 65,
      sec: "Static GK",
      q: "Where is the Central Potato Research Institute (CPRI) located in India?",
      o: ["Cuttack", "Shimla", "Pune", "Dehradun"],
      a: "B",
      e: "CPRI is situated in Kufri, near Shimla in Himachal Pradesh."
    },
    {
      n: 66,
      sec: "Static GK",
      q: "Which is the highest civilian literary award conferred in India?",
      o: ["Sahitya Akademi Award", "Jnanpith Award", "Saraswati Samman", "Vyas Samman"],
      a: "B",
      e: "The Jnanpith Award, instituted in 1961, is India's highest civilian literary award."
    },
    {
      n: 67,
      sec: "Static GK",
      q: "Which city is famously known as the 'Silicon Valley of India'?",
      o: ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
      a: "C",
      e: "Bengaluru is recognized as the Silicon Valley of India due to its status as the nation's premier IT hub."
    },
    {
      n: 68,
      sec: "Static GK",
      q: "Where is the international headquarters of the International Labour Organization (ILO) situated?",
      o: ["Geneva, Switzerland", "Washington, D.C.", "London, UK", "Vienna, Austria"],
      a: "A",
      e: "The International Labour Organization (ILO), established in 1919, has its headquarters in Geneva, Switzerland."
    },
    {
      n: 69,
      sec: "Static GK",
      q: "The 'Ryder Cup' is an international trophy contested in which sport?",
      o: ["Golf", "Polo", "Lawn Tennis", "Rowing"],
      a: "A",
      e: "The Ryder Cup is a biennial golf tournament contested between teams representing the United States and Europe."
    },
    {
      n: 70,
      sec: "Static GK",
      q: "The 'Aga Khan Cup' is traditionally associated with which sport?",
      o: ["Football", "Hockey", "Cricket", "Polo"],
      a: "B",
      e: "The Aga Khan Cup is a historic tournament associated with field hockey."
    },
    {
      n: 71,
      sec: "Static GK",
      q: "Who was the first Asian personality to win a Nobel Prize?",
      o: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Mahatma Gandhi"],
      a: "A",
      e: "Rabindranath Tagore became the first Asian Nobel laureate when he received the Nobel Prize in Literature in 1913 for 'Gitanjali'."
    },

    // ----------------------------------------------------
    // Section 13: Current Affairs
    // ----------------------------------------------------
    {
      n: 72,
      sec: "Current Affairs",
      q: "Which country emerged as the champions in the FIFA World Cup 2026 final?",
      o: ["Argentina", "France", "Spain", "England"],
      a: "C",
      e: "Spain won the championship in the 2026 tournament."
    },
    {
      n: 73,
      sec: "Current Affairs",
      q: "Which country is hosting the 21st G20 Leaders' Summit in 2026?",
      o: ["South Africa", "United States", "Brazil", "United Kingdom"],
      a: "B",
      e: "The 21st G20 Summit is scheduled for December 2026 in Miami, Florida, United States, under the US presidency."
    },
    {
      n: 74,
      sec: "Current Affairs",
      q: "ISRO has been conducting final crew validations and escape evaluations for which indigenous human spaceflight mission?",
      o: ["Chandrayaan-4", "Gaganyaan", "Aditya-L1", "Mangalyaan-2"],
      a: "B",
      e: "Gaganyaan is India's flagship project to send a 3-member crew into low Earth orbit and safely recover them."
    },
    {
      n: 75,
      sec: "Current Affairs",
      q: "Under recent Union Budgets, which income tax structure has been made the default regime to deliver streamlined slab benefits?",
      o: ["Old Tax Regime", "New Tax Regime", "Corporate Tax Model", "Surcharge Free Model"],
      a: "B",
      e: "The New Tax Regime provides restructured lower tax slabs and higher standard deductions as the default system."
    },

    // ----------------------------------------------------
    // Section 14: Aptitude & Mental Ability
    // ----------------------------------------------------
    {
      n: 76,
      sec: "Aptitude & Mental Ability",
      q: "The LCM and HCF of two numbers are 315 and 7 respectively. If one number is 35, what is the other number?",
      o: ["45", "63", "56", "70"],
      a: "B",
      e: "Product of two numbers = LCM × HCF. Other number = (315 × 7) / 35 = 315 / 5 = 63."
    },
    {
      n: 77,
      sec: "Aptitude & Mental Ability",
      q: "4 men can complete a job in 12 days. After working for 6 days, 4 more men join them. How many additional days will be required to finish the remaining work?",
      o: ["2 days", "3 days", "4 days", "5 days"],
      a: "B",
      e: "Total work = 4 × 12 = 48 man-days. Work completed in 6 days = 4 × 6 = 24 man-days. Remaining work = 24 man-days. Total men now = 4 + 4 = 8. Additional days = 24 / 8 = 3 days."
    },
    {
      n: 78,
      sec: "Aptitude & Mental Ability",
      q: "In a business, A, B, and C invest capital in the ratio 2:3:5. If the annual profit is Rs. 40,000, what is B's share?",
      o: ["Rs. 8,000", "Rs. 12,000", "Rs. 20,000", "Rs. 15,000"],
      a: "B",
      e: "Sum of ratio terms = 2 + 3 + 5 = 10. B's share = 40000 × (3 / 10) = Rs. 12,000."
    },
    {
      n: 79,
      sec: "Aptitude & Mental Ability",
      q: "A person sold an article at a 5% loss. Had he sold it for Rs. 54 more, he would have gained 4%. What is the cost price of the article?",
      o: ["Rs. 540", "Rs. 600", "Rs. 640", "Rs. 500"],
      a: "B",
      e: "Difference between 4% profit and 5% loss = 4 - (-5) = 9%. 9% of CP = 54 => CP = (54 / 9) × 100 = Rs. 600."
    },
    {
      n: 80,
      sec: "Aptitude & Mental Ability",
      q: "At what annual compound interest rate will Rs. 2,304 amount to Rs. 2,500 in 2 years?",
      o: ["4 1/6 %", "5%", "4 1/2 %", "6%"],
      a: "A",
      e: "2500 / 2304 = (1 + r/100)². Taking square root: 50 / 48 = 25 / 24 = 1 + r/100 => r/100 = 1/24 => r = 100/24 = 25/6% = 4 1/6%."
    },
    {
      n: 81,
      sec: "Aptitude & Mental Ability",
      q: "How many seconds will a 280-meter long train running at 60 km/h take to pass a stationary observer beside the track?",
      o: ["15 seconds", "16.8 seconds", "18 seconds", "20 seconds"],
      a: "B",
      e: "Speed in m/s = 60 × (5/18) = 50/3 m/s. Time = Distance / Speed = 280 / (50/3) = 840 / 50 = 16.8 seconds."
    },
    {
      n: 82,
      sec: "Aptitude & Mental Ability",
      q: "The average weight of 7 students is 55 kg. The average of the first 3 is 52 kg and that of the last 3 is 58 kg. What is the weight of the fourth student?",
      o: ["55 kg", "52 kg", "58 kg", "60 kg"],
      a: "A",
      e: "Total weight of 7 students = 7 × 55 = 385 kg. First 3 = 3 × 52 = 156 kg. Last 3 = 3 × 58 = 174 kg. Fourth student = 385 - (156 + 174) = 385 - 330 = 55 kg."
    },
    {
      n: 83,
      sec: "Aptitude & Mental Ability",
      q: "Pipes A and B can fill a cistern in 20 and 30 minutes respectively. If both are opened together, after how many minutes should B be turned off so the tank is filled in exactly 14 minutes?",
      o: ["8 minutes", "9 minutes", "10 minutes", "6 minutes"],
      a: "B",
      e: "Let tank capacity = 60 units. Rate of A = 3 units/min, Rate of B = 2 units/min. A runs for 14 minutes = 14 × 3 = 42 units. Remaining work done by B = 60 - 42 = 18 units. B's active time = 18 / 2 = 9 minutes."
    },
    {
      n: 84,
      sec: "Aptitude & Mental Ability",
      q: "A boat's speed in still water is 10 km/h and the river current is 4 km/h. How long will it take to travel 56 km downstream?",
      o: ["4 hours", "5 hours", "7 hours", "3.5 hours"],
      a: "A",
      e: "Downstream speed = 10 + 4 = 14 km/h. Time taken = 56 / 14 = 4 hours."
    },
    {
      n: 85,
      sec: "Aptitude & Mental Ability",
      q: "If the radius of a circle is reduced by 20%, what is the percentage reduction in its area?",
      o: ["40%", "36%", "20%", "44%"],
      a: "B",
      e: "Net area change = -20 - 20 + (-20 × -20)/100 = -40 + 4 = -36% (a decrease of 36%)."
    },
    {
      n: 86,
      sec: "Aptitude & Mental Ability",
      q: "In a 60-liter solution of sugar and water, sugar constitutes 20%. How many liters of water must be added so that sugar constitutes 15%?",
      o: ["15 liters", "20 liters", "10 liters", "12 liters"],
      a: "B",
      e: "Sugar amount = 60 × 0.20 = 12 liters. With water addition: 12 / (60 + x) = 15/100 = 3/20 => 3(60 + x) = 240 => 60 + x = 80 => x = 20 liters."
    },
    {
      n: 87,
      sec: "Aptitude & Mental Ability",
      q: "In how many years will a sum of money triple itself under simple interest at an annual rate of 8%?",
      o: ["20 years", "25 years", "15 years", "30 years"],
      a: "B",
      e: "To triple, Simple Interest I = 2P. Using SI = (P × R × T)/100 => 2P = (P × 8 × T)/100 => T = 200 / 8 = 25 years."
    },
    {
      n: 88,
      sec: "Aptitude & Mental Ability",
      q: "If 45% of a number is 135, what is 120% of that number?",
      o: ["360", "300", "400", "450"],
      a: "A",
      e: "The number = (135 / 45) × 100 = 300. 120% of 300 = 300 × 1.2 = 360."
    },
    {
      n: 89,
      sec: "Aptitude & Mental Ability",
      q: "The present ages of Alok and Bikash are in the ratio 7:5. After 6 years, their age ratio becomes 4:3. What is Bikash's present age?",
      o: ["30 years", "24 years", "20 years", "35 years"],
      a: "A",
      e: "(7x + 6) / (5x + 6) = 4 / 3 => 3(7x + 6) = 4(5x + 6) => 21x + 18 = 20x + 24 => x = 6. Bikash's present age = 5x = 5 × 6 = 30 years."
    },
    {
      n: 90,
      sec: "Aptitude & Mental Ability",
      q: "The average of five consecutive odd numbers is 23. What is the value of the largest number?",
      o: ["25", "27", "29", "31"],
      a: "B",
      e: "In an arithmetic progression of 5 terms, the average equals the middle number: sequence is 19, 21, 23, 25, 27. The largest number is 27."
    },
    {
      n: 91,
      sec: "Aptitude & Mental Ability",
      q: "A person travels a certain distance at 12 km/h and returns at 8 km/h. What is his average speed for the round trip?",
      o: ["10 km/h", "9.6 km/h", "9.8 km/h", "10.2 km/h"],
      a: "B",
      e: "Average Speed = 2xy / (x + y) = (2 × 12 × 8) / (12 + 8) = 192 / 20 = 9.6 km/h."
    },
    {
      n: 92,
      sec: "Aptitude & Mental Ability",
      q: "Rs. 1.25 is what percentage of Rs. 10?",
      o: ["12.5%", "1.25%", "25%", "15%"],
      a: "A",
      e: "Percentage = (1.25 / 10) × 100% = 12.5%."
    },
    {
      n: 93,
      sec: "Aptitude & Mental Ability",
      q: "If A:B = 2:3, B:C = 4:5, and C:D = 6:7, what is A:D?",
      o: ["12:35", "16:35", "24:35", "8:21"],
      a: "B",
      e: "A/D = (A/B) × (B/C) × (C/D) = (2/3) × (4/5) × (6/7) = (2 × 4 × 2) / (1 × 5 × 7) = 16 / 35."
    },
    {
      n: 94,
      sec: "Aptitude & Mental Ability",
      q: "A dishonest merchant claims to sell goods at cost price but uses a weight of 900 grams instead of 1 kg. What is his profit percentage?",
      o: ["10%", "11 1/9 %", "9%", "12.5%"],
      a: "B",
      e: "Gain % = [Error / (True Weight - Error)] × 100 = [100 / (1000 - 100)] × 100 = 100 / 9% = 11 1/9%."
    },
    {
      n: 95,
      sec: "Aptitude & Mental Ability",
      q: "A sum of money doubles itself in 4 years under simple interest. In how many years will it become four times itself?",
      o: ["8 years", "12 years", "16 years", "10 years"],
      a: "B",
      e: "Doubling means SI = 1P in 4 years. Becoming 4 times means SI needed = 3P. Time = 3 × 4 = 12 years."
    },
    {
      n: 96,
      sec: "Aptitude & Mental Ability",
      q: "If the length of a rectangle is increased by 10% and the breadth is decreased by 10%, what is the net change in its area?",
      o: ["Remains unchanged", "1% increase", "1% decrease", "2% decrease"],
      a: "C",
      e: "Net % change = +10 - 10 - (10 × 10)/100 = -1% (1% decrease)."
    },
    {
      n: 97,
      sec: "Aptitude & Mental Ability",
      q: "What is the smallest number which leaves a remainder of 4 when divided by 12, 15, 20, and 54?",
      o: ["544", "540", "274", "270"],
      a: "A",
      e: "LCM of (12, 15, 20, 54) = 540. Required number = 540 + 4 = 544."
    },
    {
      n: 98,
      sec: "Aptitude & Mental Ability",
      q: "If the cost price of 15 articles is equal to the selling price of 12 articles, what is the profit percentage?",
      o: ["20%", "25%", "30%", "16 2/3 %"],
      a: "B",
      e: "15 × CP = 12 × SP => SP/CP = 15/12 = 5/4. Profit % = [(5 - 4) / 4] × 100 = 25%."
    },
    {
      n: 99,
      sec: "Aptitude & Mental Ability",
      q: "A and B can complete a work in 15 days and 10 days respectively. They begin working together, but B leaves after 2 days. In how many days can A alone finish the remaining work?",
      o: ["10 days", "8 days", "12 days", "9 days"],
      a: "A",
      e: "Total work = LCM(15, 10) = 30 units. A's rate = 2 units/day, B's rate = 3 units/day. Work in first 2 days = 2 × (2 + 3) = 10 units. Remaining work = 20 units. Time taken by A = 20 / 2 = 10 days."
    },
    {
      n: 100,
      sec: "Aptitude & Mental Ability",
      q: "What is the value of √(2 + √(2 + √(2 + ...))) ?",
      o: ["1", "2", "3", "4"],
      a: "B",
      e: "Let x = √(2 + x). Squaring both sides: x² - x - 2 = 0 => (x - 2)(x + 1) = 0. Since x > 0, x = 2."
    }
  ]
},

    /* ADD NEW SETS ABOVE THIS LINE */

  ]
};
