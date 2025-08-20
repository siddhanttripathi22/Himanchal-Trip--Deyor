# Himachal Pradesh Travel Package Website

A modern, responsive website built with React.js and Tailwind CSS to showcase travel packages for Himachal Pradesh. This project displays detailed itineraries, accommodations, and booking information for adventure travel packages.

## 🚀 Features

- **Modern Landing Page**: Eye-catching hero section with floating particle animations
- **Interactive Star Ratings**: Visual hotel and experience rating system
- **Animated UI Elements**: Floating particles for enhanced visual appeal
- **Responsive Navigation**: Mobile-friendly navigation with smooth transitions
- **Modular Architecture**: Clean separation of UI components, layouts, and pages
- **Interactive Itinerary**: Day-by-day breakdown of the 8-day Himachal Pradesh adventure
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Travel Package Details**: Complete information about accommodations, meals, transportation
- **Contact Integration**: Easy booking and inquiry system
- **Professional Footer**: Company information and legal details

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm/yarn

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation & Development Setup

### File Organization


```






1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd himachal-travel-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the website in action.

## 📁 Project Structure

```
himachal-travel-website/
├── public/
│   ├── images/
│   │   ├── hero-himalaya.jpg
│   │   ├── sangla-mansion.jpg
│   │   ├── kalpa-views.jpg
│   │   └── chandrataal-lake.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── StarRating.jsx
│   │   │   └── FloatingParticles.jsx
│   │   ├── Hero.jsx
│   │   ├── Itinerary.jsx
│   │   └── Accommodations.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   └── TripDetails.jsx
│   ├── data/
│   │   ├── tripData.js
│   │   └── navigationData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Data Structure

The project uses a clean data separation approach:

- **`src/data/tripData.js`**: Contains all travel package information including:
  - Trip duration and dates
  - Destinations and activities
  - Hotel accommodations
  - Meal plans
  - Transportation details
  - Pricing information
  
- **`src/data/navigationData.js`**: Navigation menu structure and routing information

### Component Architecture

The project follows a modular component structure:

#### UI Components (`src/components/ui/`)
- **`StarRating.jsx`**: Interactive star rating component for hotel reviews
- **`FloatingParticles.jsx`**: Animated particle background effects

#### Layout Components (`src/layout/`)
- **`Navigation.jsx`**: Main navigation header with responsive menu
- **`Footer.jsx`**: Site footer with company info and legal links

#### Main Components (`src/components/`)
- **`Hero.jsx`**: Landing section with call-to-action
- **`Itinerary.jsx`**: Day-by-day travel schedule display
- **`Accommodations.jsx`**: Hotel and lodging showcase with ratings

#### Pages (`src/pages/`)
- **`Home.jsx`**: Main landing page combining all components
- **`Contact.jsx`**: Booking form and inquiry system
- **`TripDetails.jsx`**: Detailed trip information and pricing

### Styling

This project uses Tailwind CSS for styling. Key customization areas:

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Update font families and sizes
- **Spacing**: Adjust margins and padding throughout components
- **Responsive Breakpoints**: Customize for different screen sizes
- **Animations**: Floating particles and interactive elements

## 🚢 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Various Platforms

**Netlify**:
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages**:
```bash
npm run build
npm run deploy
```

## 📱 Key Pages & Sections

### Home Page
- Hero section with stunning Himalayan imagery
- Trip overview and highlights
- Call-to-action buttons for booking

### Itinerary Section
- **Day 1**: Chandigarh to Shimla (115km, 4-5 hours)
- **Day 2**: Shimla to Sangla (220km, 7-8 hours)
- **Day 3**: Sangla to Kalpa via Chitkul Village
- **Day 4**: Kalpa to Kaza with monastery visits
- **Day 5**: Local sightseeing in Kaza
- **Day 6**: Kaza to Chandrataal Lake
- **Day 7**: Chandrataal to Manali
- **Day 8**: Manali to Chandigarh departure

### Accommodations Featured
- **Sangla Mansion** (Deluxe Rooms)
- **Kalpa Mansion** (Mountain Views)
- **Chandrataal Camps** (Luxury Camping)
- **River Pine Resorts & Spa, Manali**

### Package Details
- **Duration**: 7 Nights / 8 Days
- **Group Size**: 4 Adults
- **Transportation**: Private Ertiga vehicle
- **Meals**: Dinner + Breakfast included
- **Trip ID**: 2047802

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact Information

**Deyor Adventures**
- **Address**: 2nd Floor, Enkay Centre, Wing - B, Udyog Vihar Phase V, Sector 19, Gurugram, Haryana 122022
- **UPI ID**: deyor.adventures@icici
- **Bank**: HDFC Bank (Account: 50200020693595)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images courtesy of Himachal Pradesh Tourism
- Built with love for adventure travelers
- Special thanks to the Deyor Adventures team

