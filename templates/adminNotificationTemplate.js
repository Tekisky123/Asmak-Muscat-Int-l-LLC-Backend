const adminNotificationTemplate = (name, email, subject, message) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f7f7f7;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .email-container {
          max-width: 650px;
          margin: 30px auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }
          a{
           text-decoration: none;
           }
        .header {
          background-color:  #1e87c8;
          padding: 15px;
          border-radius: 10px 10px 0 0;
          color: white;
          text-align: center;
          font-size: 26px;
          font-weight: bold;
        }
        .content {
          padding: 25px;
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }
        .content p {
          margin-bottom: 15px;
        }
        .highlight {
          color:  #1e87c8;
          font-weight: bold;
        }
        .message-container {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          border-left: 5px solid  #1e87c8;
          font-size: 14px;
          color: #333;
          margin-bottom: 20px;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #777;
          text-align: center;
        }
        .call-to-action {
          display: inline-block;
          padding: 12px 25px;
          margin-top: 20px;
          background-color:  #1e87c8;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          text-align: center;
          transition: background-color 0.3s ease;
        }
        .call-to-action:hover {
          background-color:  #1e87c8;
        }
        
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">New Contact Form Submission</div>
        <div class="content">
          <p><strong class="highlight">From:</strong> ${name}</p>
          <p><strong class="highlight">Email:</strong> ${email}</p>
          <p><strong class="highlight">Subject:</strong> ${subject}</p>
          
          <div class="message-container">
            <strong>Message:</strong>
            <p>${message}</p>
          </div>

          <p class="animated-text">Please follow up with the contact as soon as possible.</p>

          <a href="mailto:${email}" class="call-to-action">Reply to this contact</a>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Asmak Muscat Int'l. All rights reserved.
        </div>
      </div>
    </body>
  </html>
`;

export default adminNotificationTemplate;
