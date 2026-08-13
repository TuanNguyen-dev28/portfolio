# Developer Portfolio Website

A modern, professional, and responsive developer portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section** - Eye-catching introduction with animated elements
- **About Me** - Personal introduction and career objectives
- **Skills Section** - Categorized technical skills with visual indicators
- **Featured Projects** - Showcase your best work with detailed project pages
- **GitHub Integration** - Dynamic display of your GitHub repositories
- **Experience & Education** - Timeline-based presentation
- **Contact Section** - Professional contact form and social links
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark Theme** - Modern, professional dark mode design
- **Smooth Animations** - Subtle, professional animations throughout

## Quick Start

```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Configuration

### 1. Update Personal Information

Edit `src/data/portfolio.js` to update your personal information:

```javascript
export const personalInfo = {
  name: "[YOUR NAME]",
  title: "Backend / Full-stack Developer",
  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  location: "[YOUR LOCATION]",
  github: "[YOUR GITHUB USERNAME]",
  linkedin: "[YOUR LINKEDIN USERNAME]",
  avatar: "/avatar.png",  // Add your photo to public folder
  cv: "/cv.pdf",         // Add your CV to public folder
};
```

### 2. Update GitHub Username

Edit `src/data/projects.js`:

```javascript
export const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";
```

### 3. Update Projects

Edit `src/data/projects.js` to add your projects:

```javascript
export const featuredProjects = [
  {
    id: "your-project",
    name: "Your Project Name",
    shortDesc: "Brief description",
    description: "Full description",
    problem: "What problem does this solve?",
    features: ["Feature 1", "Feature 2"],
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "",  // Leave empty if no live demo
  },
];
```

### 4. Update Education & Experience

Edit `src/data/portfolio.js` to update education and experience:

```javascript
export const educationContent = {
  items: [
    {
      school: "Your University",
      degree: "Your Degree",
      duration: "2020 - 2024",
      gpa: "Your GPA",
      relevantCourses: ["Course 1", "Course 2"],
    },
  ],
};

export const experienceContent = {
  items: [
    {
      title: "Position",
      company: "Company",
      duration: "2024 - Present",
      description: "Description",
      technologies: ["Tech 1", "Tech 2"],
    },
  ],
};
```

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── avatar.png      # Add your photo here
│   └── cv.pdf          # Add your CV here
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── GitHubSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Icons.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/
│   │   ├── portfolio.js
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **lucide-react** - Icon library

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Build Static Files

```bash
npm run build
```

The built files will be in the `dist` folder, which can be deployed to any static hosting service.

## Customization

### Changing Colors

Edit `src/index.css` to change the color scheme:

```css
--color-primary: #6366f1;   /* Change primary color */
--color-secondary: #8b5cf6;  /* Change secondary color */
--color-accent: #06b6d4;     /* Change accent color */
```

### Adding More Sections

Add new components in `src/components/` and import them in `src/pages/Home.jsx`.

## License

This project is open source and available for personal and commercial use.

---

Built with passion and code.
