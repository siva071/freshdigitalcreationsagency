// Google Apps Script for handling form submissions to Google Sheets
// This script should be deployed as a Web App in Google Apps Script

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet (replace with your actual spreadsheet ID)
    const SPREADSHEET_ID = '2PACX-1vRcOvHMZWyKOslg9DjP2dlInThBa_zOvAiJvKFaME50F_pZSAUm4Pgi-S-1gL0xXrAvd9NJUb_wPAZu';
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    if (data.type === 'contact') {
      // Handle contact form submissions
      handleContactSubmission(spreadsheet, data);
    } else if (data.type === 'newsletter') {
      // Handle newsletter subscriptions
      handleNewsletterSubmission(spreadsheet, data);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleContactSubmission(spreadsheet, data) {
  // Get or create "Contact Submissions" sheet
  let sheet = spreadsheet.getSheetByName('Contact Submissions');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Contact Submissions');
    // Add headers
    sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Name', 'Email', 'Message']]);
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  }
  
  // Add the new submission
  const newRow = [
    new Date(data.timestamp),
    data.name,
    data.email,
    data.message
  ];
  
  sheet.appendRow(newRow);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, 4);
  
  console.log('Contact submission added to sheet:', data.name, data.email);
}

function handleNewsletterSubmission(spreadsheet, data) {
  // Get or create "Newsletter Subscriptions" sheet
  let sheet = spreadsheet.getSheetByName('Newsletter Subscriptions');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Newsletter Subscriptions');
    // Add headers
    sheet.getRange(1, 1, 1, 2).setValues([['Timestamp', 'Email']]);
    sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  }
  
  // Check if email already exists (prevent duplicates)
  const emailColumn = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
  const emailExists = emailColumn.some(row => row[0] === data.email);
  
  if (!emailExists) {
    // Add the new subscription
    const newRow = [
      new Date(data.timestamp),
      data.email
    ];
    
    sheet.appendRow(newRow);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 2);
    
    console.log('Newsletter subscription added to sheet:', data.email);
  } else {
    console.log('Email already subscribed:', data.email);
  }
}

// Optional: Function to set up the spreadsheet with proper formatting
function setupSpreadsheet() {
  const SPREADSHEET_ID = '2PACX-1vRcOvHMZWyKOslg9DjP2dlInThBa_zOvAiJvKFaME50F_pZSAUm4Pgi-S-1gL0xXrAvd9NJUb_wPAZu';
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  // Setup Contact Submissions sheet
  let contactSheet = spreadsheet.getSheetByName('Contact Submissions');
  if (!contactSheet) {
    contactSheet = spreadsheet.insertSheet('Contact Submissions');
  }
  contactSheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Name', 'Email', 'Message']]);
  contactSheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  contactSheet.getRange(1, 1, 1, 4).setBackground('#4285f4');
  contactSheet.getRange(1, 1, 1, 4).setFontColor('white');
  
  // Setup Newsletter Subscriptions sheet
  let newsletterSheet = spreadsheet.getSheetByName('Newsletter Subscriptions');
  if (!newsletterSheet) {
    newsletterSheet = spreadsheet.insertSheet('Newsletter Subscriptions');
  }
  newsletterSheet.getRange(1, 1, 1, 2).setValues([['Timestamp', 'Email']]);
  newsletterSheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  newsletterSheet.getRange(1, 1, 1, 2).setBackground('#34a853');
  newsletterSheet.getRange(1, 1, 1, 2).setFontColor('white');
  
  console.log('Spreadsheet setup complete');
}
