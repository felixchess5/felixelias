# Contact Form Backend Setup

This document explains how to set up the contact form backend to send emails to felixelias5@gmail.com.

## Architecture

The contact form uses Netlify Functions (serverless functions) to handle form submissions and send emails. When deployed to Netlify, the form will automatically work without requiring a separate server.

## Files Created

1. **`netlify/functions/contact.js`** - The serverless function that handles contact form submissions
2. **`netlify/functions/package.json`** - Dependencies for the function
3. **`netlify.toml`** - Netlify configuration file
4. **`.env.example`** - Example environment variables

## Setup Instructions

### For Netlify Deployment (Production)

1. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Netlify will automatically detect the `netlify.toml` configuration

2. **Configure Environment Variables in Netlify**:
   - Go to your Netlify site dashboard
   - Navigate to Site settings → Environment variables
   - Add the following variables:

   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=felixelias5@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

3. **Set up Gmail App Password**:
   - Enable 2-factor authentication on your Gmail account
   - Go to Google Account settings → Security → App passwords
   - Generate a new app password for "Mail"
   - Use this password as the `EMAIL_PASS` value

### For Local Development

1. **Create `.env` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. **Fill in your email credentials** in the `.env` file

3. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

4. **Run locally**:
   ```bash
   netlify dev
   ```

## Security Features

- Input validation and sanitization
- Email format validation
- Message length requirements
- CORS headers for cross-origin requests
- HTML sanitization to prevent XSS attacks

## Form Fields

The contact form accepts:
- **Name** (required)
- **Email** (required, validated)
- **Message** (required, minimum 10 characters)

## Email Template

Emails sent to felixelias5@gmail.com include:
- Professional HTML formatting
- Contact person's details
- Full message content
- Timestamp
- Source identification (portfolio website)

## Testing

Once deployed, you can test the contact form by:
1. Visiting your live website
2. Filling out the contact form
3. Submitting the form
4. Checking felixelias5@gmail.com for the email

## Troubleshooting

- If emails aren't being received, check the Netlify function logs
- Verify environment variables are set correctly
- Ensure Gmail app password is valid
- Check spam folder for emails