# 🏕️ The Wild Oasis Website  

A **modern cabin booking platform** built with **Next.js App Router, Supabase, Tailwind CSS, and NextAuth.js**. 
<img width="1915" height="864" alt="image" src="https://github.com/user-attachments/assets/89d27daa-59ae-43c7-a893-583b9b955d12" />


This app simulates a **real-world booking system** where users can: 

<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/094db010-3b29-4245-b74a-1c765aba6b30" />

✅ Browse beautiful cabins  
<img width="1916" height="870" alt="image" src="https://github.com/user-attachments/assets/6116d0af-d79d-423d-82dd-af985b0c7f91" />

✅ View detailed information & availability 

<img width="1487" height="857" alt="image" src="https://github.com/user-attachments/assets/966e1424-d3e5-46ea-a758-02626b82e922" />
<img width="1345" height="862" alt="image" src="https://github.com/user-attachments/assets/ab272db1-ad51-4631-823a-7a719d23295e" />


✅ Log in with Google securely 

<img width="1908" height="676" alt="image" src="https://github.com/user-attachments/assets/957936ef-6ab9-437b-be1c-d272000620d9" />

✅ Make, view, and cancel reservations

<img width="1918" height="860" alt="image" src="https://github.com/user-attachments/assets/c56c8b9c-3747-453e-bfc0-33ebdeb991b9" />

✅ Manage their profile and country preferences 

<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/d7ffb9b7-eef7-425c-ab2a-50360f29ef6c" />


It’s **fully serverless** (no custom backend needed)—Supabase handles **database, storage, and authentication**.  

---

This project brings all of that in a **scalable Next.js application** with **App Router** features like **server actions, dynamic routing, loading states, error handling, and layouts**.  

---

## ✨ Core Features  

### 🏠 **Cabin Browsing**  
- `/cabins` lists all cabins in a grid layout  
- Each cabin has its **own page** `/cabins/[cabinId]` with full details  
- Fast-loading images, skeleton loaders (`loading.js`)  

### 📅 **Booking Flow**  
- Interactive date picker (`DateSelector.js`) for available nights  
- Smart pricing calculation before checkout  
- Booking confirmation page (`cabins/thankyou`)  
- Server actions (`_lib/actions.js`) to securely create reservations  

### 🔐 **Authentication & Security**  
- Google OAuth login via **NextAuth.js** (`/api/auth/[...nextauth]`)  
- **Protected routes** (middleware ensures only logged-in users can see `/account`)  

### 🙍 **User Account & Reservations**  
- `/account` dashboard shows profile info  
- `/account/reservations` lists all bookings  
- **Cancel reservation** with a single click (`DeleteReservation.js`)  
- Update profile info & country preferences (`UpdateProfileForm.js`)  

### ⚡ **Modern UX**  
- Built with **Next.js App Router**  
- Fully responsive & mobile-friendly with **Tailwind CSS**  
- Smooth loading states (`Spinner.js`, `loading.js`)  
- Error boundaries (`error.js`, `not-found.js`)  

### 🗄 **Database & API**  
- **Supabase** as the backend  
- Server routes like `/api/cabins/[cabinId]`  
- Secure server actions (`_lib/data-service.js`)  

---

## 🏗️ Architecture  

This is a **serverless, full-stack app** using:  

- **Next.js App Router** → Pages, layouts, server actions, API routes  
- **Supabase** → PostgreSQL DB + auth + storage  
- **NextAuth.js** → Google login  
- **Tailwind CSS** → Styling & layout  
- **Vercel** → Hosting + edge middleware  

**How it works:**  
1. User visits `/cabins` → Next.js fetches cabins from Supabase  
2. Selecting dates triggers a **server action** → calculates availability & total cost  
3. Authenticated user confirms booking → stored in Supabase  
4. `/account` fetches user’s reservations via Supabase APIs  

---

## 🚀 Live Demo  

🔗 **[Visit The Wild Oasis Website](https://the-wild-oasis-website-tau-eight.vercel.app/)**  

---

## 🛠 Tech Stack  

- **Next.js 14+ (App Router)** – Routing, layouts, server actions  
- **Supabase** – Database, authentication, and storage  
- **NextAuth.js** – OAuth login with Google  
- **Tailwind CSS** – Styling  
- **React Day Picker + date-fns** – Calendar & date handling  
- **Vercel** – Hosting & edge middleware  

---
## 📂 File System
```
the-wild-oasis-website/
├── app/
│   ├── about/
│   │   └── page.js
│   │
│   ├── account/
│   │   ├── profile/
│   │   │   └── page.js
│   │   ├── reservations/
│   │   │   ├── [bookingId]/
│   │   │   │   └── page.js
│   │   │   └── page.js
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.js
│   │   └── cabins/
│   │       └── [cabinId]/
│   │           └── route.js
│   │
│   ├── cabins/
│   │   ├── thankyou/
│   │   │   └── page.js
│   │   ├── [cabinId]/
│   │   │   ├── not-found.js
│   │   │   └── page.js
│   │   ├── loading.js
│   │   └── page.js
│   │
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   │
│   ├── login/
│   │   └── page.js
│   │
│   ├── _components/
│   │   ├── Cabin.js
│   │   ├── CabinCard.js
│   │   ├── CabinList.js
│   │   ├── Counter.js
│   │   ├── DateSelector.js
│   │   ├── DeleteReservation.js
│   │   ├── Filter.js
│   │   ├── Header.js
│   │   ├── LoginMessage.js
│   │   ├── Logo.js
│   │   ├── Navigation.js
│   │   ├── Reservation.js
│   │   ├── ReservationCard.js
│   │   ├── ReservationContext.js
│   │   ├── ReservationForm.js
│   │   ├── ReservationList.js
│   │   ├── ReservationReminder.js
│   │   ├── SelectCountry.js
│   │   ├── SideNavigation.js
│   │   ├── SignInButton.js
│   │   ├── SignOutButton.js
│   │   ├── Spinner.js
│   │   ├── SpinnerMini.js
│   │   ├── SubmitButton.js
│   │   ├── TextExpander.js
│   │   └── UpdateProfileForm.js
│   │
│   ├── _lib/
│   │   ├── actions.js
│   │   ├── auth.js
│   │   ├── data-service.js
│   │   └── supabase.js
│   │
│   ├── _styles/
│   │   └── globals.css
│   │
│   ├── error.js
│   ├── icon.png
│   ├── layout.js
│   ├── loading.js
│   ├── not-found.js
│   └── page.js
│
├── public/
│   ├── about-1.jpg
│   ├── about-2.jpg
│   ├── bg.png
│   └── logo.png
│
├── starter/
│   ├── components/
│   │   └── Price.js
│   │
│   ├── others/
│   │   ├── colors.json
│   │   ├── error.js
│   │   └── not-found.js
│   │
│   └── pages/
│       ├── about-page.js
│       ├── cabin-page.js
│       ├── cabins-page.js
│       ├── home-page.js
│       ├── profile-page.js
│       └── reservations-page.js
│
├── .env.local
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
```
