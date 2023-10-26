import puppeteer from 'puppeteer';

export default async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to your local page
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  const pdf = await page.pdf({ format: 'A4', printBackground: true });

  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=document.pdf');
  res.setHeader('Content-Length', pdf.length);
  res.send(pdf);
};
