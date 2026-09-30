/* =====================================================================
   data.js  —  SETTINGS ONLY (small file, rarely edited)
   ---------------------------------------------------------------------
   The questions do NOT live here any more. Each mock set has its own
   file in the  questions/  folder:

       questions/set-01.js   questions/set-02.js   ...   questions/set-15.js

   To add or edit a set, open that set's file and paste the questions
   inside it (instructions are at the top of each file).
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

  sets: []   // filled automatically by the files in the questions/ folder
};

// Called by each questions/set-XX.js file. Do not edit.
function registerSet(setName, questions) {
  window.QUIZ_DATA.sets.push({ set: setName, questions: questions });
}
