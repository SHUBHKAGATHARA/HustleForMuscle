# 📧 EmailJS Setup Instructions

## Step-by-Step Guide to Enable Contact Form

### 1️⃣ Create EmailJS Account

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** (it's free)
3. Verify your email address

---

### 2️⃣ Add Email Service

1. In EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Or any other SMTP service
3. Click **"Connect Account"**
4. Authorize EmailJS to send emails
5. **Copy the Service ID** (e.g., `service_abc123`)

---

### 3️⃣ Create Email Template

1. Go to **"Email Templates"** tab
2. Click **"Create New Template"**
3. **Template Name:** Contact Form - Hustle For Muscle
4. **Template Content:**

```
Subject: New Contact Form Submission - Hustle For Muscle

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the Hustle For Muscle website contact form.
```

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz789`)

---

### 4️⃣ Get Public Key

1. Click on **"Account"** in the top menu
2. Go to **"API Keys"** section
3. **Copy your Public Key** (e.g., `Abc123XyZ456`)

---

### 5️⃣ Update Your Code

Open `src/pages/Contact.jsx` in your editor.

**Find lines 32-34:**
```javascript
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

**Replace with your actual IDs:**
```javascript
const serviceID = 'service_abc123';      // Your Service ID
const templateID = 'template_xyz789';    // Your Template ID
const publicKey = 'Abc123XyZ456';        // Your Public Key
```

**Find line 43 and uncomment it:**
```javascript
await emailjs.send(serviceID, templateID, templateParams, publicKey);
```

**Find line 46 and comment it out:**
```javascript
// await new Promise(resolve => setTimeout(resolve, 1500));
```

---

### 6️⃣ Test Your Contact Form

1. Refresh your website (http://localhost:3001/)
2. Go to **Contact page**
3. Fill out the form:
   - **Name:** John Doe
   - **Email:** test@example.com
   - **Phone:** +1234567890
   - **Message:** Test message
4. Click **"Send Message"**
5. Check your email inbox for the submission

---

## 🎉 Success!

Your contact form is now fully functional!

### ⚙️ Optional Configuration

#### Auto-Reply to Users
Create a second template to automatically send a confirmation email to users:

1. Create new template: **"Contact Form Auto Reply"**
2. Use this content:
```
Subject: Thank you for contacting Hustle For Muscle!

Hi {{from_name}},

Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.

Your message:
{{message}}

Best regards,
Hustle For Muscle Team
```

3. In your code, add a second `emailjs.send()` call:
```javascript
// Send to gym
await emailjs.send(serviceID, templateID, templateParams, publicKey);

// Auto-reply to user
await emailjs.send(serviceID, 'template_autoreply_id', {
  to_email: data.email,
  from_name: data.name,
  message: data.message
}, publicKey);
```

---

## 📊 EmailJS Free Tier Limits

- ✅ **200 emails/month** (free)
- ✅ Unlimited email services
- ✅ Unlimited templates
- 💡 Upgrade for more emails if needed

---

## 🐛 Troubleshooting

### "Failed to send message"
- ✅ Check your Service ID, Template ID, and Public Key are correct
- ✅ Verify your email service is connected in EmailJS dashboard
- ✅ Check browser console for error details (F12)

### Emails not received
- ✅ Check spam/junk folder
- ✅ Verify template variables match the code
- ✅ Ensure email service is properly authorized

### Rate limit exceeded
- ✅ You've hit the 200 emails/month free tier limit
- ✅ Upgrade your EmailJS plan
- ✅ Wait for the next month

---

## 📝 Template Variables Reference

These variables are sent from your contact form:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | User's name | John Doe |
| `{{from_email}}` | User's email | john@example.com |
| `{{phone}}` | User's phone | +1234567890 |
| `{{message}}` | User's message | I want to join the gym |
| `{{to_name}}` | Your gym name | Hustle For Muscle |

---

## ✅ Quick Reference

**Your EmailJS Settings:**
```
Service ID:   ________________
Template ID:  ________________
Public Key:   ________________
```

Fill these in after setup for quick reference!

---

**Need Help?** Visit [EmailJS Documentation](https://www.emailjs.com/docs/)
