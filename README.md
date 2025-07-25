# 🌐 Mock Portfolio

This is a mock developer portfolio built as part of a test project. It was built using **Next.js 15**, **Tailwind CSS**, and follows modern front-end practices.

## 🔗 Live Demo

👉 [View Live Site](https://mock-portfolio-liard.vercel.app/)

## 📁 Project Structure

/
├── src/
│ ├── app/ → App directory (Next.js routing)
│ │ ├── page.js → Homepage
│ │ ├── about/ → About page
│ │ ├── projects/ → Projects page
│ │ └── contact/ → Contact page
│ ├── components/ → Reusable UI components like Navbar
│ ├── data/ → Project data (JSON file)
├── public/ → Static files
├── styles/ or globals.css → Global Tailwind styles


---

## 🧰 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: JavaScript (No TypeScript)
- **Deployment**: [Vercel](https://vercel.com/)
- **Version Control**: Git + GitHub

---

## 📌 Features

- ⚡️ Clean and responsive UI
- 🌗 Dark/light friendly (based on browser default)
- ✅ Uses Next.js `App Router` and `src/` structure
- 💬 Contact form using API Route (POST)
- 🧩 Reusable `Navbar` component
- 🗂 Project data stored in JSON for flexibility

---

## 🚀 Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/Exoticdrey/mock-portfolio.git
cd mock-portfolio
npm install
npm run dev


Contact Form (API Route)
The contact form uses a simple POST API route under src/app/api/contact/route.js. You can expand this to connect with services like EmailJS or Nodemailer.

🧪 Future Improvements
Integrate a backend for real-time form submission

Add animations with Framer Motion

Add testimonials section

Add downloadable resume

🙋🏽‍♀️ About Me
This project was built by Drey as part of a junior full-stack developer assessment. I’m passionate about clean code, elegant UI, and solving real problems with tech.

📜 License
This project is for educational and assessment purposes.