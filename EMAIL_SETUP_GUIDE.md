# 📧 UkUniAdviser Email Setup Guide

## 🎯 Overview
This guide will help you set up email functionality so consultation form submissions are automatically sent to `contact@ukuniadviser.com`.

## ⚙️ Gmail Configuration Steps

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification**
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to **Security** → **App passwords**
2. Sign in with your Google account
3. Select **Mail** as the app
4. Select **Other (custom name)** as the device
5. Enter "UkUniAdviser" as the custom name
6. Click **Generate**
7. **Copy the 16-character password** (this is your `EMAIL_PASS`)

### Step 3: Update Environment Variables
Update your `.env` file with your actual credentials:

```bash
EMAIL_USER=your_actual_gmail@gmail.com
EMAIL_PASS=your_16_character_app_password
EMAIL_TO=contact@ukuniadviser.com
```

## 🧪 Testing Email Functionality

### Test 1: Form Submission
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"1234567890","preferredContactMethod":"Email","areaOfInterest":"Undergraduate Courses"}' \
  http://localhost:5001/api/book-consultation
```

### Test 2: Check Server Logs
The server will log email sending status:
- ✅ `"Email sent successfully to: contact@ukuniadviser.com"`
- ❌ `"Email not sent - EMAIL_USER and EMAIL_PASS not configured"`

## 📧 Email Template Features

When properly configured, emails include:

### 📋 Form Data
- Full Name
- Email Address
- Phone Number
- Preferred Contact Method
- Area of Interest
- Additional Message (if provided)

### 🎨 Professional Formatting
- HTML email with UK Flag branding
- Professional styling
- Mobile-responsive design
- Clear call-to-action for consultants

### 📊 Email Headers
- From: Your Gmail address
- To: contact@ukuniadviser.com
- Reply-To: Submitter's email address
- Subject: "🎓 New Consultation Request: [Name] — [Area of Interest]"

## 🔧 Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Verify your Gmail credentials are correct
   - Ensure you're using the App Password (not your regular password)
   - Check that 2FA is enabled

2. **"Email not sent"**
   - Check server logs for specific error messages
   - Verify EMAIL_USER and EMAIL_PASS are set in .env
   - Ensure the server has restarted after configuration changes

3. **Emails going to spam**
   - Add your Gmail address to contacts in Gmail
   - Check spam folder initially
   - Consider setting up SPF/DKIM records for better deliverability

## 📞 Support

If you encounter issues:
1. Check the server console for error messages
2. Verify your `.env` file configuration
3. Test with the curl commands above
4. Ensure your Gmail account allows less secure apps or use App Passwords

## ✅ Success Indicators

- ✅ Server logs show: `"Email sent successfully to: contact@ukuniadviser.com"`
- ✅ Emails arrive in contact@ukuniadviser.com inbox
- ✅ Form submissions work without errors
- ✅ No 403 Forbidden errors

---

**🚀 Once configured, every form submission will automatically send a professional email to your consultation team!**
