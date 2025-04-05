# 🌤️ SkyCast Application

A responsive and interactive **Weather Application** built with HTML, CSS, and JavaScript. This app allows users to search real-time weather conditions for any city using the **OpenWeatherMap API**.

---

## 🚀 Features

- **User-Friendly Interface** – Simple, clean, and intuitive UI.
- **Real-Time Weather Data** – Fetches temperature, wind speed, and humidity.
- **Error Handling** – Alerts users when an invalid city is entered.
- **Interactive UI** – Smooth hover effects and dynamic updates.
- **Responsive Design** – Works seamlessly on mobile and desktop devices.

---

## 🧱 Project Structure

```
weather-app/
├── index.html     # App structure and elements
├── style.css      # Responsive and styled UI
└── script.js      # API calls and interactivity
```

---

## 📄 index.html

- Input field for city name
- Search button
- Sections to display temperature, humidity, and wind speed

---

## 🎨 style.css

- Centered layout with clean weather cards
- Smooth transitions and button hover effects
- Media queries for mobile responsiveness

---

## ⚙️ script.js

- `fetchWeatherData()` – Calls OpenWeatherMap API
- Parses and updates the DOM with weather data
- Error handling for invalid inputs

---

## 🔑 API Integration

Uses **OpenWeatherMap API**:

```javascript
https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY
```

👉 Replace `YOUR_API_KEY` in `script.js` with a valid key.

Temperature is converted from **Kelvin to Celsius** before display.

---

## 🛠️ Installation & Usage

### 1. Clone the Repo

```bash
git clone https://github.com/Kaustubh-S8/SkyCast.git
```

### 2. Setup API Key

In `script.js`, replace the placeholder with your API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

### 3. Run the App

Just open `index.html` in any modern browser.

---

## ✅ Requirements

- Modern web browser
- Internet connection for API requests
- JavaScript enabled

---

## 📱 Responsive Design

Optimized for both desktop and mobile views using CSS media queries.

---

## ⚠️ Notes

- Displays a warning for invalid city names.
- Weather information only appears after a valid search.

---

## 📜 License

MIT License. Free to use, modify, and distribute.

---

## 📧 Contact

**Kaustubh Satam**  
✉️ satamkaustubh@gmail.com  
🔗 [GitHub - Kaustubh-S8](https://github.com/Kaustubh-S8)

---

### ☁️ Get the weather instantly – anytime, anywhere!
