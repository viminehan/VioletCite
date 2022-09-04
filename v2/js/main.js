/***********************
 GLOBAL DECLARATIONS
 ************************/
 let sourceSelected = "website";
 let currentContributors = 1;

 /**********************
 BUTTON EVENT LISTNERS
 ***********************/
//Choose a Source
document.querySelector("#selectWebsite").addEventListener('click', selectWebsite);
document.querySelector("#selectNewspaper").addEventListener('click', selectNewspaper);
document.querySelector("#selectJournal").addEventListener('click', selectJournal);
document.querySelector("#selectGovernmentReport").addEventListener('click', selectGovernmentReport);
document.querySelector("#selectCompanyReport").addEventListener('click', selectCompanyReport); 

//Add a new Contributor
document.querySelector("#contributorAddButton").addEventListener('click', addContributorButtonClick);

//Delete Contributors
document.querySelector("#delContributor2").addEventListener('click', delContributor2);
document.querySelector("#delContributor3").addEventListener('click', delContributor3);
document.querySelector("#delContributor4").addEventListener('click', delContributor4);
document.querySelector("#delContributor5").addEventListener('click', delContributor5);
document.querySelector("#delContributor6").addEventListener('click', delContributor6);
document.querySelector("#delContributor7").addEventListener('click', delContributor7);
document.querySelector("#delContributor8").addEventListener('click', delContributor8);

//Citation Buttons
document.querySelector("#completeCitationButton").addEventListener('click', completeCitation);
document.querySelector("#clearCitationButton").addEventListener('click', clearCitation);

/******************
 SOURCE SELECTION 
 *******************/
 function selectWebsite() {
    clearSourceSelection();
    document.querySelector('#selectWebsite').classList.add('highlightButton');
    document.querySelector('.websiteSourceInfo').style.display = 'block';

    if (sourceSelected !== "website") {
        resetForms();
        resetCitationBoxes();
    }

    sourceSelected = "website";
 };

 function selectNewspaper() { 
    clearSourceSelection();
    document.querySelector('#selectNewspaper').classList.add('highlightButton');
    document.querySelector('.newspaperSourceInfo').style.display = 'block';

    if (sourceSelected !== "newspaper") {
        resetForms();
        resetCitationBoxes();
    }

    sourceSelected = "newspaper";
 };

 function selectJournal() { 
    clearSourceSelection();
    document.querySelector('#selectJournal').classList.add('highlightButton');
    document.querySelector('.journalSourceInfo').style.display = 'block';

    if (sourceSelected !== "journal") {
        resetForms();
        resetCitationBoxes();
    }

    sourceSelected = "journal";

 };

 function selectGovernmentReport() {
    clearSourceSelection();
    document.querySelector('#selectGovernmentReport').classList.add('highlightButton');
    document.querySelector('.governmentReportSourceInfo').style.display = 'block';

    if (sourceSelected !== "governmentReport") {
        resetForms();
        resetCitationBoxes();
    }

    sourceSelected = "governmentReport";

 };

 function selectCompanyReport() { 
    clearSourceSelection();
    document.querySelector('#selectCompanyReport').classList.add('highlightButton');
    document.querySelector('.companyReportSourceInfo').style.display = 'block';

    if (sourceSelected !== "companyReport") {
        resetForms();
        resetCitationBoxes();
    }

    sourceSelected = "companyReport";
    
 };

 // Clear Source Selection
 function clearSourceSelection() {
    clearHighlight();
    ClearContextForm();
 };

 //Reset Forms
 function resetForms() { 
    document.querySelector("#coreForm").reset();
    document.querySelector("#websiteForm").reset();
    document.querySelector("#newspaperForm").reset();
    document.querySelector("#journalForm").reset();
    document.querySelector("#governmentReportForm").reset();
    document.querySelector("#companyReportForm").reset();
 };
 // Clear Highlight
 function clearHighlight() { 
    document.querySelector('#selectWebsite').classList.remove('highlightButton');
    document.querySelector('#selectNewspaper').classList.remove('highlightButton');
    document.querySelector('#selectJournal').classList.remove('highlightButton');
    document.querySelector('#selectGovernmentReport').classList.remove('highlightButton');
    document.querySelector('#selectCompanyReport').classList.remove('highlightButton');
 };
 
 //Clear ContextForm
 function ClearContextForm() { 
    document.querySelector('.websiteSourceInfo').style.display = 'none';
    document.querySelector('.newspaperSourceInfo').style.display = 'none';
    document.querySelector('.journalSourceInfo').style.display = 'none';
    document.querySelector('.governmentReportSourceInfo').style.display = 'none';
    document.querySelector('.companyReportSourceInfo').style.display = 'none';
 };

 /******************** 
CONTRIBUTOR HANDLING
**********************/
function addContributorButtonClick() {
   revealNextContributor();
   increaseCurrentContributors();
   testMaxContributors();
};

//Increase Contributor Count by 1
function increaseCurrentContributors() {
   currentContributors = currentContributors + 1;
   console.log("Current Contributors: " + currentContributors);
};

//De Contributor Count by 1 
function decreaseCurrentContributors() { 
   currentContributors = currentContributors - 1;
   console.log("Current Contributors: " + currentContributors)
}

//If Contributors is at Maximum, remove Add Contributor Button
function testMaxContributors() { 
   if (currentContributors == 8) {
      document.querySelector('#contributorAddButton').style.display = 'none';
   } else {
      document.querySelector('#contributorAddButton').style.display = 'flex';
   }
};

//Reveal next contributor
function revealNextContributor() {
   if (currentContributors == 1) { 
      document.querySelector('#contributor2').style.display = 'flex';
   } else if (currentContributors == 2) { 
      document.querySelector('#contributor3').style.display = 'flex';
      document.querySelector('#delContributor2').style.display = 'none';
   } else if (currentContributors == 3) { 
      document.querySelector('#contributor4').style.display = 'flex';
      document.querySelector('#delContributor3').style.display = 'none';
   } else if (currentContributors == 4) { 
      document.querySelector('#contributor5').style.display = 'flex';
      document.querySelector('#delContributor4').style.display = 'none';
   } else if (currentContributors == 5) { 
      document.querySelector('#contributor6').style.display = 'flex';
      document.querySelector('#delContributor5').style.display = 'none';
   } else if (currentContributors == 6) { 
      document.querySelector('#contributor7').style.display = 'flex';
      document.querySelector('#delContributor6').style.display = 'none';
   } else if (currentContributors == 7) { 
      document.querySelector('#contributor8').style.display = 'flex';
      document.querySelector('#delContributor7').style.display = 'none';
   } else { 
      console.log('Contributor Add Error.')
   }
}

/**********************
 DELETING CONTRIBUTORS
 ***********************/
 function delContributor2() { 
   clearC2();
   document.querySelector('#contributor2').style.display = 'none';
   deleteContributor();
 };

 function delContributor3() { 
   clearC3();
   document.querySelector('#contributor3').style.display = 'none';
   document.querySelector('#delContributor2').style.display = 'flex';
   deleteContributor();
 };

 function delContributor4() { 
   clearC4();
   document.querySelector('#contributor4').style.display = 'none';
   document.querySelector('#delContributor3').style.display = 'flex';
   deleteContributor();
 };

 function delContributor5() { 
   clearC5();
   document.querySelector('#contributor5').style.display = 'none';
   document.querySelector('#delContributor4').style.display = 'flex';
   deleteContributor();
 };

 function delContributor6() { 
   clearC6();
   document.querySelector('#contributor6').style.display = 'none';
   document.querySelector('#delContributor5').style.display = 'flex';
   deleteContributor();
 };

 function delContributor7() {
   clearC7(); 
   document.querySelector('#contributor7').style.display = 'none';
   document.querySelector('#delContributor6').style.display = 'flex';
   deleteContributor();
 };

 function delContributor8() { 
   clearC8();
   document.querySelector('#contributor8').style.display = 'none';
   document.querySelector('#delContributor7').style.display = 'flex';
   deleteContributor();
 };

function deleteContributor() { 
   decreaseCurrentContributors();
   testMaxContributors();
};

function clearC1() { 
   document.querySelector('#pos1').value = "";
   document.querySelector('#n1').value = "";
   document.querySelector('#m1').value = "";
   document.querySelector('#l1').value = "";
   document.querySelector('#s1').value = "";
}

function clearC2() { 
   document.querySelector('#pos2').value = "";
   document.querySelector('#n2').value = "";
   document.querySelector('#m2').value = "";
   document.querySelector('#l2').value = "";
   document.querySelector('#s2').value = "";
}

function clearC3() { 
   document.querySelector('#pos3').value = "";
   document.querySelector('#n3').value = "";
   document.querySelector('#m3').value = "";
   document.querySelector('#l3').value = "";
   document.querySelector('#s3').value = "";
}

function clearC4() { 
   document.querySelector('#pos4').value = "";
   document.querySelector('#n4').value = "";
   document.querySelector('#m4').value = "";
   document.querySelector('#l4').value = "";
   document.querySelector('#s4').value = "";
}

function clearC5() { 
   document.querySelector('#pos5').value = "";
   document.querySelector('#n5').value = "";
   document.querySelector('#m5').value = "";
   document.querySelector('#l5').value = "";
   document.querySelector('#s5').value = "";
}

function clearC6() { 
   document.querySelector('#pos6').value = "";
   document.querySelector('#n6').value = "";
   document.querySelector('#m6').value = "";
   document.querySelector('#l6').value = "";
   document.querySelector('#s6').value = "";
}

function clearC7() { 
document.querySelector('#pos7').value = "";
document.querySelector('#n7').value = "";
document.querySelector('#m7').value = "";
document.querySelector('#l7').value = "";
document.querySelector('#s7').value = "";
}

function clearC8() { 
   document.querySelector('#pos8').value = "";
   document.querySelector('#n8').value = "";
   document.querySelector('#m8').value = "";
   document.querySelector('#l8').value = "";
   document.querySelector('#s8').value = "";
}

/***************************
 CITATION MENU
 **************************/
function clearCitation() { 
   console.log("Clearing Citation....");
   resetForms();
   resetCitationBoxes();
}

function resetCitationBoxes() { 
   delContributor2();
   delContributor3();
   delContributor4();
   delContributor5();
   delContributor6();
   delContributor7();
   delContributor8();
   currentContributors = 1;
   console.log("Current Contributors: " + currentContributors);
}

/*
function retriveCoreData()  {
sourceTitle = document.querySelector('#sourceTitle').value;
}

function retriveContextData() { 
if (sourceSelected == "website") { 
   retrieveWebsiteData();
} else if (sourceSelected == "newspaper") { 
   retrieveNewspaperData();
} else if (sourceSelected == "journal") { 
   retrieveJournalData();
} else if (sourceSelected == "governmenteport") { 
   retrieveGovernmentReportData();
} else if (sourceSelected == "companyReport") { 
   retrieveCompanyReportData();
};
}


function dataConsolelog() { 
console.log("Source Title: " + sourceTitle)
};
*/

//Complete Citation Click
function completeCitation() { 
   citeContributors();
   citeYearPublished();
   logCitation();
}

function logCitation() {
   console.log(citation)
};
   
//General Data Declarations
let citation = [];
let contributor = [];

//Contributor Data Declrations

let l1 = "";
let m1 = "";
let n1 = "";

let l2 = "";
let m2 = "";
let n2 = "";

let l3 = "";
let m3 = "";
let n3 = "";

let l4 = "";
let m4 = "";
let n4 = "";

let l5 = "";
let m5 = "";
let n5 = "";

let l6 = "";
let m6 = "";
let n6 = "";

let l7 = "";
let m7 = "";
let n7 = "";

let l8 = "";
let m8 = "";
let n8 = "";

//Website Data Declarations
let websiteYearPublished = "";


function citeContributors() { 
   l1 = document.querySelector('#l1').value
   m1 = document.querySelector('#m1').value
   n1 = document.querySelector('#n1').value

   l2 = document.querySelector('#l2').value
   m2 = document.querySelector('#m2').value
   n2 = document.querySelector('#n2').value

   l3 = document.querySelector('#l3').value
   m3 = document.querySelector('#m3').value
   n3 = document.querySelector('#n3').value

   l4 = document.querySelector('#l4').value
   m4 = document.querySelector('#m4').value
   n4 = document.querySelector('#n4').value

   l5 = document.querySelector('#l5').value
   m5 = document.querySelector('#m5').value
   n5 = document.querySelector('#n5').value

   l6 = document.querySelector('#l6').value
   m6 = document.querySelector('#m6').value
   n6 = document.querySelector('#n6').value

   l7 = document.querySelector('#l7').value
   m7 = document.querySelector('#m7').value
   n7 = document.querySelector('#n7').value

   l8 = document.querySelector('#l8').value
   m8 = document.querySelector('#m8').value
   n8 = document.querySelector('#n8').value

   //Needs to be re-written to be arrays
   if (l1 !== "") { 
      contributor[0] = `${l1} ${m1.substring(0,1)} ${n1.substring(0,1)}`;
      currentContributors = 1;
   }

   if (l2 !== "") { 
      contributor[1] = `${l2} ${m2.substring(0,1)} ${n2.substring(0,1)}`;
      currentContributors = 2;
   }

   if (l3 !== "") { 
      contributor[2] = `${l3} ${m3.substring(0,1)} ${n3.substring(0,1)}`;
      currentContributors = 3;
   }

   if (l4 !== "") { 
      contributor[3] = `${l4} ${m4.substring(0,1)} ${n4.substring(0,1)}`;
      currentContributors = 4;
   }

   if (l5 !== "") { 
      contributor[4] = `${l5} ${m5.substring(0,1)} ${n5.substring(0,1)}`;
      currentContributors = 5;
   }

   if (l6 !== "") { 
      contributor[5] = `${l6} ${m6.substring(0,1)} ${n6.substring(0,1)}`;
      currentContributors = 6;
   }

   if (l7 !== "") { 
      contributor[6] = `${l7} ${m7.substring(0,1)} ${n7.substring(0,1)}`;
      currentContributors = 7;
   }

   if (l8 !== "") { 
      contributor[7] = l8 + m8.substring(0,1) + n8.substring(0,1);
      currentContributors = 8;
   }

   if (currentContributors == 1) {
      citation[0] = `${contributor[0]}`;
   } else if (currentContributors == 2) { 
      citation[0] = `${contributor[0]} & ${contributor[1]}`;
   } else if (currentContributors == 3) { 
      citation[0] = `${contributor[0]}, ${contributor[1]} & ${contributor[2]}`;
   } else if (currentContributors == 4) { 
      citation[0] = `${contributor[0]}, ${contributor[1]}, ${contributor[2]} & ${contributor[3]}`;
   } else if (currentContributors == 5) { 
      citation[0] = `${contributor[0]}, ${contributor[1]}, ${contributor[2]}, ${contributor[3]} & ${contributor[4]}`;
   } else if (currentContributors == 6) { 
      citation[0] = `${contributor[0]}, ${contributor[1]}, ${contributor[2]}, ${contributor[3]}, ${contributor[4]} & ${contributor[5]}`;
   } else if (currentContributors == 7) { 
      citation[0] = `${contributor[0]}, ${contributor[1]}, ${contributor[2]}, ${contributor[3]}, ${contributor[4]}, ${contributor[5]} & ${contributor[6]}`;
   } else if (currentContributors == 8) { 
      citation[0] = `${contributor[0]}, ${contributor[1]}, ${contributor[2]}, ${contributor[3]}, ${contributor[4]}, ${contributor[5]}, ${contributor[6]} & ${contributor[7]}`;
   }
}


function citeYearPublished() { 
   websiteYearPublished = document.querySelector('#websiteYearPublishedInput').value
   citation[1] = `(${websiteYearPublished})`;
}