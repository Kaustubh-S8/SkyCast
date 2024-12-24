# Weather Application

This project is a responsive weather application that allows users to search for real-time weather data by entering a city name. It uses the OpenWeatherMap API to retrieve and display weather information like temperature, wind speed, and humidity.

---

## Features

- **User-Friendly Interface**: Simple, clean, and responsive design.
- **Real-Time Weather Data**: Fetches and displays temperature, wind speed, and humidity for a given city.
- **Error Handling**: Notifies the user if an invalid location is entered.
- **Interactive UI**: Includes hover effects and dynamic updates.

---

## Project Structure

### HTML (`index.html`)
- Provides the structure of the app.
- Includes input fields, buttons, and sections for displaying weather data.
- Elements:
  - Input field for city name.
  - Button to trigger the search.
  - Sections to display weather details.

### CSS (`style.css`)
- Styles the layout and components of the application.
- Key features:
  - Centered `main-container` for the app interface.
  - Stylish `article` card design.
  - Responsive design for mobile devices.
  - Smooth button hover effects.

### JavaScript (`script.js`)
- Handles the core functionality of the app.
- Key functions:
  - Fetches weather data from the OpenWeatherMap API using `fetchWeatherData()`.
  - Dynamically updates the UI with weather details.
  - Handles errors like invalid locations.

---

## Installation and Usage

1. **Setup**:
   - Clone or download the repository.
   - Ensure you have a valid API key from OpenWeatherMap.
   - Replace the placeholder API key in `script.js`:
     ```javascript
     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY`
     ```

2. **Run the App**:
   - Open the `index.html` file in a web browser.

3. **Usage**:
   - Enter the name of a city in the input field and press the "Search" button.
   - The weather details will be displayed if the city is valid.

---

## API Integration

- The app integrates with the OpenWeatherMap API to fetch weather data.
- API URL format:
  ```
  https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API_KEY}
  ```
- Temperature is converted from Kelvin to Celsius for display.

---

## Requirements

- Web browser with JavaScript enabled.
- Internet connection for API requests.

---

## Notes

- **Error Handling**:
  - Displays a message if an invalid city name is entered.
  - Hides weather data sections until valid data is fetched.
- **Responsive Design**:
  - Optimized for desktop and mobile screens.

---



