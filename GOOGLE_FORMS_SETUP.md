# Google Sheets Integration Setup Guide

## Overview
Your website now integrates with Google Sheets to store all contact form submissions and newsletter subscriptions directly in spreadsheets. This provides better data management than Google Forms.

## Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet titled "Website Data"
3. Copy the spreadsheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project titled "Website Form Handler"
3. Replace the default code with the content from `google-apps-script.js`
4. Update the `SPREADSHEET_ID` variable with your actual spreadsheet ID

## Step 3: Deploy as Web App

1. In Google Apps Script, click **"Deploy"** → **"New deployment"**
2. Choose **"Web app"** as the type
3. Set **"Execute as"** to **"Me"**
4. Set **"Who has access"** to **"Anyone"**
5. Click **"Deploy"**
6. Copy the **Web App URL** (looks like: `https://script.google.com/macros/s/SCRIPT_ID/exec`)

## Step 4: Update Your Code

### Contact Form Integration
Edit `app/api/contact/route.ts` line 65:
```typescript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec'
```

### Newsletter Integration
Edit `app/api/newsletter/route.ts` line 16:
```typescript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec'
```

## Step 5: Test the Integration

1. Save your changes
2. Restart your development server
3. Test both forms on your website
4. Check your Google Sheets to verify data is being received

## What You'll Get

### Contact Submissions Sheet
- **Timestamp** - When the form was submitted
- **Name** - Contact person's name
- **Email** - Contact person's email
- **Message** - Their message/inquiry

### Newsletter Subscriptions Sheet
- **Timestamp** - When they subscribed
- **Email** - Subscriber's email address
- **Duplicate prevention** - Same email won't be added twice

## Benefits of Google Sheets Integration

✅ **Direct Data Storage** - No intermediate forms needed
✅ **Real-time Updates** - Data appears instantly
✅ **Better Organization** - Separate sheets for different data types
✅ **Easy Analysis** - Use spreadsheet functions and charts
✅ **Data Export** - Download as CSV/Excel anytime
✅ **Email Notifications** - Set up alerts for new data
✅ **Duplicate Prevention** - Newsletter emails won't be duplicated

## Advanced Features

### Email Notifications
1. In Google Sheets, go to **Tools** → **Notification rules**
2. Set up alerts for when new rows are added
3. Choose email frequency (immediately, daily, weekly)

### Data Analysis
- Use Google Sheets functions to analyze submission trends
- Create charts and graphs from your data
- Filter and sort submissions by date, email, etc.

### Data Backup
- Google automatically backs up your data
- You can also download regular backups as Excel/CSV files

## Troubleshooting

- **No data received**: Check the Web App URL and deployment settings
- **Permission errors**: Ensure the script has proper permissions
- **CORS errors**: Normal with `mode: 'no-cors'` - data still submits
- **Duplicate sheets**: The script automatically creates sheets if they don't exist

## File Structure

```
portfolio/
├── app/api/contact/route.ts          # Contact form API (updated)
├── app/api/newsletter/route.ts       # Newsletter API (updated)
├── google-apps-script.js             # Apps Script code
└── GOOGLE_FORMS_SETUP.md            # This setup guide
```
