/************************
 BUTTON EVENT LISTNERS
 ***********************/

document.querySelector("#selectWebsite").addEventListener('click', selectWebsite);
document.querySelector("#selectNewspaper").addEventListener('click', selectNewspaper);
document.querySelector("#selectJournal").addEventListener('click', selectJournal);
document.querySelector("#selectGovernmentReport").addEventListener('click', selectGovernmentReport);
document.querySelector("#selectCompanyReport").addEventListener('click', selectCompanyReport); 

/******************
 SOURCE SELECTION 
 *******************/
let sourceSelected = "website";

 function selectWebsite() {
    clearSourceSelection();
    document.querySelector('#selectWebsite').classList.add('highlightButton');
    document.querySelector('.websiteSourceInfo').style.display = 'block';

    if (sourceSelected !== "website") {
        resetForms();
    }

    sourceSelected = "website";
 };

 function selectNewspaper() { 
    clearSourceSelection();
    document.querySelector('#selectNewspaper').classList.add('highlightButton');
    document.querySelector('.newspaperSourceInfo').style.display = 'block';

    if (sourceSelected !== "newspaper") {
        resetForms();
    }

    sourceSelected = "newspaper";
 };

 function selectJournal() { 
    clearSourceSelection();
    document.querySelector('#selectJournal').classList.add('highlightButton');
    document.querySelector('.journalSourceInfo').style.display = 'block';

    if (sourceSelected !== "journal") {
        resetForms();
    }

    sourceSelected = "journal";

 };

 function selectGovernmentReport() {
    clearSourceSelection();
    document.querySelector('#selectGovernmentReport').classList.add('highlightButton');
    document.querySelector('.governmentReportSourceInfo').style.display = 'block';

    if (sourceSelected !== "governmentReport") {
        resetForms();
    }

    sourceSelected = "governmentReport";

 };

 function selectCompanyReport() { 
    clearSourceSelection();
    document.querySelector('#selectCompanyReport').classList.add('highlightButton');
    document.querySelector('.companyReportSourceInfo').style.display = 'block';

    if (sourceSelected !== "companyReport") {
        resetForms();
    }

    sourceSelected = "companyReport";
    
 };

 // Clear Source Selection
 function clearSourceSelection() {
    clearHighlight();
    ClearContextForm();
 }

 //Reset Forms
 function resetForms() { 
    document.querySelector("#coreForm").reset();
    document.querySelector("#websiteForm").reset();
    document.querySelector("#newspaperForm").reset();
    document.querySelector("#journalForm").reset();
    document.querySelector("#governmentReportForm").reset();
    document.querySelector("#companyReportForm").reset();
 }
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