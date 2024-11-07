const userConfirmationTemplate = (name, subject) => `
 <html>
  <head>
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f2f2f2;
        color: #333;
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        padding: 30px;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
      .header {
        background-color: #1e87c8;
        padding: 15px;
        border-radius: 10px 10px 0 0;
        color: white;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
      }
      .content {
        padding: 20px;
        font-size: 16px;
        line-height: 1.6;
        color: #555;
      }
      .highlight {
        color: #1e87c8;
        font-weight: bold;
      }
      .contact-details {
        background-color: #f9f9f9;
        padding: 15px;
        margin: 20px 0;
        border-radius: 8px;
        font-size: 14px;
        color: #666;
      }
      .contact-button {
        display: inline-block;
        margin-top: 10px;
        padding: 12px 20px;
        background-color: #1e87c8;
        color: white;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }
     
      .website-link {
        color: #1e87c8;
        text-decoration: none;
        font-weight: bold;
      }
      .footer {
        font-size: 12px;
        color: #888;
        text-align: center;
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">Asmak Muscat Int'l LLC</div>
      <div class="content">
        <p>Hello <span class="highlight">${name}</span>,</p>
        <p>
          Thank you for reaching out to Asmak Muscat Int'l! We are pleased to
          receive your message on "<strong>${subject}</strong>". Our team will
          carefully review your inquiry and respond promptly.
        </p>
        <p>
          If your matter is urgent, or if you’d like to learn more about our
          services, please feel free to contact us directly or explore our
          website at
          <a href="https://www.asmakmct.com/" class="website-link"
            >www.asmakmct.com</a
          >.
        </p>

        <div class="contact-details">
          <strong>Get in Touch:</strong>
          <ul>
            <li><strong>📱 Mobile:</strong> +968 92850600</li>
            <li><strong>📞 Tel:</strong> +968 24050604</li>
            <li><strong>📧 Email:</strong> info@asmakmct.com</li>
            <li>
              <strong>📍 Address:</strong> P.O. BOX 1741, Postal Code 122, Al
              Mabellah, Sultanate of Oman
            </li>
          </ul>
          <a href="mailto:info@asmakmct.com" class="contact-button"
            >Email Us Directly</a
          >
        </div>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Asmak Muscat Int'l. All rights
        reserved.
        <br />
        Visit our website:
        <a href="https://www.asmakmct.com/" class="website-link"
          >www.asmakmct.com</a
        >
      </div>
    </div>
  </body>
</html>

`;

export default userConfirmationTemplate;
