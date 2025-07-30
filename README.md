
# 🌿 AgriAdvisor AI

AgriAdvisor AI is a user-friendly web application that provides personalized agricultural advice using AI. Users can select their crop, stage, and location to get smart recommendations. The app also displays a static weather box and supports clipboard copying of advice.

---

## 📁 Project Structure

```
agri-advisor-ai/
│
├── backend/
│   ├── index.js               # Express backend server
│   └── routes/advice.js       # API route for AI advice generation
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx            # Main React app component
│   │   ├── index.js
│   │   ├── styles.css         # Global CSS styling
│   │   └── components/
│   │       ├── CropForm.jsx   # Form to input crop info
│   │       ├── AdviceBox.jsx  # AI advice display
│   │       ├── WeatherBox.jsx # Static weather UI
│   │       └── api/
│   │           └── adviceApi.js # API call logic
│
├── package.json               # Root or backend dependencies
└── README.md                  # This file
```

---

## 🚀 Features

- 🧠 AI-generated crop advice based on crop, stage, and location
- 🌤️ Static weather UI with 8 essential metrics
- 📋 One-click copy to clipboard for advice
- 💅 Clean UI and fully responsive layout with plain CSS

---

## 🛠 Technologies Used

- **Frontend**: React (JavaScript), CSS
- **Backend**: Node.js + Express
- **Optional AI**: Mock logic in `/routes/advice.js` (can be replaced with real AI)

---

## 🔧 Setup Instructions

### 🖥 Backend

```bash
cd backend
npm install
node index.js
```

> Server runs at: `http://localhost:5000`

Sample mock API in `routes/advice.js`:

```js
app.post('/api/advice', (req, res) => {
  const { crop, stage, location } = req.body;
  res.json({ advice: `Mock advice for ${crop} at ${stage} stage in ${location}.` });
});
```

---

### 💻 Frontend

```bash
cd frontend
npm install
npm start
```

> App runs at: `http://localhost:3000`

---

## 📂 Key Components Overview

### 📄 `CropForm.jsx`
A form to select crop, stage, and location. Submits data to backend and stores advice in localStorage.

### 📄 `AdviceBox.jsx`
Displays the AI-generated advice. Includes a clipboard copy button.

### 📄 `WeatherBox.jsx`
Static weather UI showing UV index, wind, humidity, and other details.

---

## 🎨 Global Styling (styles.css)

```css
body {
  background-color: #fefce8;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  color: #14532d;
}

button {
  background: #f87171;
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #ef4444;
}

input,
select {
  padding: 10px;
  width: 100%;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.weather-icon {
  font-size: 48px;
  text-align: center;
}

.copy-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}
```

---

## 📤 API Interface

### POST `/api/advice`

**Request:**

```json
{
  "crop": "Rice",
  "stage": "Maturity",
  "location": "USA"
}
```

**Response:**

```json
{
  "advice": "Apply nitrogen fertilizer moderately during maturity."
}
```

---

## 🧪 Testing the Flow

1. Select a crop (e.g., Rice)
2. Choose a growth stage (e.g., Growth)
3. Enter your location (e.g., Odisha)
4. Click **🍃 Get AI Advice**
5. View the AI response below and click 📋 to copy it

---

## 📈 Future Improvements

- 🔄 Live weather API integration
- 🌐 Multilingual language support
- 📍 Auto-detect user location
- 🤖 Integration with real AI model (e.g., LLM, fine-tuned BERT)

---

## 📄 License

MIT License. Free to use and modify.

---

## 👨‍💻 Author

Built by **D HariBabu** 🙌  
Feel free to contribute or suggest improvements via pull requests or issues.

---
