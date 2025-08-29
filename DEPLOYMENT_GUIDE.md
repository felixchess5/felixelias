# GoDaddy Deployment Guide

## Files to Upload

Upload all files from the `public` folder to your GoDaddy hosting account's root directory (usually `public_html` or `httpdocs`).

### Important Files:
- **All files in `/public` folder** - Your built website
- **`contact.php`** - Contact form backend (already in public folder)
- **`.htaccess`** - Server configuration (already in public folder)

## Deployment Steps

### 1. Access GoDaddy File Manager
1. Log into your GoDaddy account
2. Go to your hosting dashboard
3. Open File Manager or use FTP/SFTP

### 2. Upload Files
1. Navigate to your domain's root directory (`public_html` or `httpdocs`)
2. Upload ALL contents from the `public` folder to the root directory
3. Ensure `contact.php` and `.htaccess` are uploaded

### 3. File Structure on GoDaddy
Your GoDaddy server should have this structure:
```
public_html/ (or httpdocs/)
├── index.html
├── contact.php
├── .htaccess
├── static/
├── icons/
├── manifest.webmanifest
├── sitemap-pages.xml
├── page-data/
└── ... (other Gatsby build files)
```

### 4. PHP Configuration
GoDaddy shared hosting supports PHP by default. The contact form should work immediately after upload.

### 5. SSL/HTTPS Setup
1. In GoDaddy dashboard, enable SSL for your domain
2. The `.htaccess` file will automatically redirect HTTP to HTTPS

## Contact Form Configuration

The contact form is configured to:
- Send emails to: **felixelias5@gmail.com**
- Use PHP's built-in `mail()` function
- Include proper validation and security measures

### Testing the Contact Form
1. Visit your deployed website
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email at felixelias5@gmail.com

## Domain Configuration

### If using a custom domain:
1. Update DNS settings in GoDaddy to point to your hosting
2. Wait 24-48 hours for DNS propagation

### If using GoDaddy subdomain:
Your site will be available at: `yourdomain.godaddysites.com`

## Troubleshooting

### Contact Form Not Working:
1. Check PHP error logs in GoDaddy dashboard
2. Verify `contact.php` uploaded correctly
3. Ensure your hosting plan supports PHP mail function

### 404 Errors:
1. Verify `.htaccess` file uploaded correctly
2. Check if GoDaddy supports mod_rewrite

### SSL Issues:
1. Enable SSL in GoDaddy dashboard
2. Clear browser cache
3. Check mixed content warnings

## File Permissions
If you encounter permission errors:
- PHP files: 644
- Directories: 755
- .htaccess: 644

## Performance Optimization
The `.htaccess` file includes:
- Gzip compression
- Browser caching
- Security headers

Your site should load quickly with these optimizations.

## Support
For GoDaddy-specific issues, contact GoDaddy support.
For website functionality issues, check the contact form and file uploads.