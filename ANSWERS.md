# Dev Weekends Fellowship 2026 — Assessment Answers

---

# 1. How to run the project

## Requirements

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Internet connection

## Steps to run

### 1. Clone the repository

```bash
git clone <repository-link>
```

### 2. Move into the project directory

```bash
cd DevWeekends_Assessment/BillSplitter
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

The project will run at:

```bash
http://localhost:5173
```

## Deployed URL

```bash
https://amna67devweekendsassessment.vercel.app
```

---

# 2. Stack & design choices

I used React with Vite for this project because the main requirement was handling multiple user inputs (bill amount, tip percentage, and number of people) and updating the UI instantly based on changes.

React was useful because it allows easy state management using `useState`, which made real-time calculations simple and clean without needing manual refresh or a submit button.

Vite was used because it provides a fast development server and quick build process.

## Design decisions

### 1. Live calculation without a button

I designed the app so that results update instantly as the user types. This improves user experience and makes the app feel interactive instead of form-based.

### 2. Centered card layout

I used a centered card UI instead of a full-page layout to keep the focus on the calculator and make the interface simple and clean.

---

# 3. Responsive & accessibility

## Mobile (360px width)

On mobile devices, the layout becomes single-column. Input fields take full width and tip buttons stack vertically for easier touch interaction.

## Desktop (1440px width)

On larger screens, the calculator stays centered with a fixed maximum width so the UI does not stretch too much.

## Accessibility consideration

All input fields have proper labels which improves usability and keyboard navigation.

## Limitation

I did not implement advanced accessibility features like screen reader optimization due to time constraints and focus on core functionality.

---

# 4. AI usage

I used AI as a development and writing assistant during this project.

On the development side, AI helped me understand React structure, state handling, and debugging issues like validation and reset functionality.

On the writing side, I used AI to structure and refine documentation such as README and this ANSWERS.md file. I provided my own understanding and experience, and AI helped convert it into a clean and structured format.

I also modified AI-generated logic in some places, especially around controlled inputs and reset behavior, to fix issues that were not working correctly in the initial version.

---

# 5. Honest gap

One area I still need improvement in is UI/UX design and visual refinement.

While I am comfortable building functional React applications and handling logic, I still need to improve the visual polish and design consistency of my projects.

If I had more time, I would improve:

- spacing consistency
- typography hierarchy
- smoother UI transitions
- overall visual refinement
