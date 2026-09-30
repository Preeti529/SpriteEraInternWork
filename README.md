# Vajra LED — Official Brand Portal & B2B Solutions Platform

A responsive, high-performance web portal built for **Vajra LED** ([vajraled.com](https://vajraled.com/)) as part of the frontend internship project at **SpriteEra IT Solutions**.

This application replicates the official corporate visual identity and catalog of Vajra LED — featuring their signature Royal Blue (`#035FA6`) & White theme, real consumer and commercial product lines, dealer trust network, marketplace links (Amazon, Flipkart, Meesho, GeM), and an integrated B2B inquiry system for contractors, distributors, and bulk buyers across India.

---

## 📸 Key Features & Sections

- **Top Utility & Brand Navigation:** Top helpline bar (`+91-05444297283`), corporate email, brand search, and sticky navigation with category jumping.
- **Hero Banner Showcase:** Dynamic image carousel showcasing official Vajra LED product banners with automatic transition, pause-on-hover, and manual slider controls.
- **"Made in India" Indigenous Strip:** Signature blue banner emphasizing local manufacturing and indigenous LED advancements.
- **Authorized Dealer Network:** Highlights the 4 key dealer trust pillars: *Authentic Products*, *Expert Installation*, *After-Sales Service*, and *Technical Support*.
- **Real Product Catalog Grid:** Filterable live catalog across Domestic, Commercial, Industrial, and Lithium Battery categories with real wattage options, MRPs, discounted pricing, and instant quotation modal triggers.
- **Why Choose Vajra LED:** Highlights the core product advantages: *Energy Efficiency*, *Long Lasting Durability*, *Instant Brightness*, and *Eco-Friendly Design*.
- **B2B Business Solutions (6 Tiers):** Dedicated partnership tiers for *Dealers*, *Distributors*, *Contractors & MEP*, *Architects & Designers*, *Institutional Procurement*, and *Bulk Orders*.
- **Factory Quotation & Inquiry Form:** Clean inquiry form with category pre-fill, input validation, and real-time submission confirmation.
- **Official FAQ Accordion:** Interactive, expandable accordion answering the 7 most common customer and business queries.
- **Corporate Footer:** Comprehensive dark footer (`#212121`) featuring verified marketplace badges (Flipkart, Meesho, Amazon, GeM), product categories, legal policies, company address, and development credits.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` with custom theme tokens)
- **Icons:** FontAwesome Free (bundled locally as an npm package to prevent third-party tracking prevention errors in Chromium/Edge)
- **Deployment & Standalone:** Zero-config production build + single-file `standalone.html` fallback.

---

## 📂 Project Structure

Following the recommended repository layout (similar to [skhr26/SpriteEraInternWork](https://github.com/skhr26/SpriteEraInternWork)), the codebase is cleanly modularized inside a dedicated `frontend/` directory:

```
vajra-led-business/
├── frontend/
│   ├── public/
│   │   ├── favicon.svg              # Custom Vajra LED icon
│   │   └── icons.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx           # Top hotline & main sticky navbar
│   │   │   ├── Hero.jsx             # Official banner slider with autoplay
│   │   │   ├── MadeInIndiaStrip.jsx # Indigenous LED promotion banner
│   │   │   ├── DealerHighlight.jsx  # Authorized dealer network & 4 trust cards
│   │   │   ├── ProductsGrid.jsx     # Real product catalog with category filter & quote triggers
│   │   │   ├── WhyChooseUs.jsx      # 4 core value proposition cards
│   │   │   ├── BusinessSolutions.jsx# 6 B2B partner & dealer tiers
│   │   │   ├── EnquiryAndFAQ.jsx    # Factory quotation form & 7 official FAQs
│   │   │   └── Footer.jsx           # Marketplace links, sitemap & contact
│   │   ├── App.jsx                  # Root application state & smooth scrolling
│   │   ├── main.jsx                 # React root mounting
│   │   └── index.css                # Tailwind styling & custom utility classes
│   ├── index.html                   # HTML entry point with automatic file:// fallback
│   ├── vite.config.js               # Relative asset bundling configuration
│   ├── package.json                 # Project dependencies
│   └── standalone.html              # Standalone bundled preview
│
├── standalone.html                  # Single-file HTML version (runs instantly in any browser)
├── .gitignore                       # Git ignore file
└── README.md                        # Project documentation
```

---

## 🚀 How to Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Steps:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/<your-username>/vajra-led-business.git
   cd vajra-led-business
   ```

2. **Navigate into the `frontend` folder:**
   ```bash
   cd frontend
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```
   *(or whichever port Vite displays in your terminal)*

---

## 📦 Production Build

To build the project for production deployment:

```bash
cd frontend
npm run build
```

This compiles and minifies all React code, Tailwind styles, and FontAwesome assets into `frontend/dist/`. 

To preview the production build locally:
```bash
npm run preview
```

---

## 💡 Notes on Common Issues Fixed

- **Edge / Chrome Tracking Prevention:**  
  Previously, importing FontAwesome via CDN (`cdnjs.cloudflare.com`) caused browsers like Microsoft Edge to flag and block storage/cookies with tracking prevention warnings. In this project, FontAwesome is installed locally via npm (`@fortawesome/fontawesome-free`), so all webfonts are served directly from the application bundle with zero external tracking requests.

- **`file:///` Origin CORS Warning:**  
  Opening modern Vite-generated React projects directly by double-clicking `index.html` triggers browser security CORS blocks on ES modules (`<script type="module">`). To make reviewing seamless, a fully functional single-file `standalone.html` is provided both in the root and in `frontend/`, allowing anyone to double-click and preview the full website instantly without running a local web server.

---

## 🤝 Submission Information

- **Internship:** SpriteEra Frontend Engineering Internship
- **Client / Case Study:** [Vajra LED](https://vajraled.com/)
- **Author:** Intern
