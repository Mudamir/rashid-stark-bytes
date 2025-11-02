# Email Setup Guide - EmailJS Integration

This guide will help you connect your contact form to your Gmail account using EmailJS.

## Step 1: Install EmailJS Package

```bash
npm install @emailjs/browser
# or
bun add @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

## Step 3: Configure EmailJS

### A. Add Email Service
1. Go to **Email Services** in the EmailJS dashboard
2. Click **Add New Service**
3. Select **Gmail**
4. Click **Connect Account** and authorize with `rashidcomon09@gmail.com`
5. Copy your **Service ID** (e.g., `service_aqm9deg`)

### B. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Template Name:** `portfolio_contact`

**Subject:** `New Portfolio Contact from {{from_name}}`

**Content:**
```
New message from your portfolio website!

From: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

4. Copy your **Template ID** (e.g., `template_auhfjo8`)

### C. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `NMvZS0s2kbmkeoDP0pkMm`)

## Step 4: Create Environment File

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xXxXxXxXxXxXxXxXx
```

**Important:** Add `.env` to your `.gitignore` to keep your keys private!

## Step 5: Update .gitignore

Add to `.gitignore`:
```
.env
.env.local
```

## Step 6: Verify Setup

1. The Contact.tsx component has been updated with EmailJS integration
2. Test the form on your local site
3. Check your Gmail inbox for test messages

## Troubleshooting

### Gmail API: Insufficient Authentication Scopes Error (412)

**Solution 1: Reconnect Gmail with Full Permissions**
1. Go to EmailJS Dashboard → Email Services
2. Delete the existing Gmail service
3. Add Gmail service again
4. When OAuth popup appears, ensure you grant ALL permissions
5. Specifically allow "Send email on your behalf"

**Solution 2: Use EmailJS Service Instead**
1. Remove Gmail service
2. Add "EmailJS" service (not Gmail)
3. Set Reply-To as rashidcomon09@gmail.com
4. Emails sent via EmailJS servers, replies come to your Gmail

**Solution 3: Switch to Web3Forms (Easier)**
- See "Alternative: Web3Forms" section below
- No OAuth issues, just an access key
- Works immediately, no complex setup

### Not receiving emails?
- Check your EmailJS dashboard for errors
- Verify your Gmail is connected in Email Services
- Check spam folder
- Ensure environment variables are set correctly

### Rate limiting?
- Free tier: 100 emails/month
- Upgrade plan if needed at EmailJS dashboard

## Alternative Solutions

### Option A: Web3Forms (Recommended - Simplest)

**Pros:** No OAuth, no complex setup, free tier, instant setup
**Cons:** Emails come from Web3Forms server

1. Sign up at https://web3forms.com (free)
2. Get your access key
3. Update .env:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
4. I can update the Contact.tsx to use Web3Forms instead

### Option B: Formspree

1. Sign up at https://formspree.io (free - 50 submissions/month)
2. Create a form and get the form ID
3. Simple REST API, no OAuth needed

### Option C: Gmail App Password (Backend Required)

If you prefer direct Gmail SMTP (requires backend):
1. Enable 2FA on your Google account
2. Generate App Password at https://myaccount.google.com/apppasswords
3. Set up Node.js backend with Nodemailer
4. Configure SMTP with app password

---

**Current Status:** ✅ Contact form code updated, troubleshoot OAuth or switch to Web3Forms
