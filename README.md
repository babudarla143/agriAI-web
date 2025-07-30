
markdown
Copy
Edit
# 🌿 AgriAdvisor AI

AgriAdvisor AI is a simple web application that provides personalized agricultural advice using AI, based on user-input crop, growth stage, and location. It also shows basic weather data and allows users to copy the advice to their clipboard.

---

## 📦 Project Structure

agri-advisor-ai/
│
├── backend/
│ └── index.js # Express backend server
│ └── routes/advice.js # API route for AI advice generation
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── App.jsx # Main app component
│ │ ├── index.js
│ │ ├── styles.css # Custom CSS styling
│ │ └── components/
│ │ ├── CropForm.jsx # Form to input crop info
│ │ ├── AdviceBox.jsx # AI advice display box
│ │ ├── WeatherBox.jsx # Static weather UI
│ │ └── api/
│ │ └── adviceApi.js # Axios or fetch-based API call
│
├── package.json # For root or backend dependencies
├── README.md # You're reading it!

yaml
Copy
Edit

---

## 🚀 Features

- 🧠 AI-powered crop advice based on selected crop, stage, and location
- 🌤️ Static weather display box with 8 metrics (UV, Wind, Humidity, etc.)
- 📋 Clipboard copy button for quick advice sharing
- 💡 Responsive layout and clean styling with CSS

---

## 🧰 Technologies Used

- **Frontend**: React (with plain CSS)
- **Backend**: Node.js + Express
- **Optional AI**: Any AI logic or mock response from `routes/advice.js`

---

## 🔧 Setup Instructions

### 1️⃣ Backend

```bash
cd backend
npm install
node index.js
Server will run at: http://localhost:5000

Make sure to define the advice endpoint in routes/advice.js, e.g.:

js
Copy
Edit
app.post('/api/advice', (req, res) => {
  const { crop, stage, location } = req.body;
  res.json({ advice: `Mock advice for ${crop} at ${stage} stage in ${location}` });
});
2️⃣ Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
App runs at: http://localhost:3000

🗂 Key Files Overview
📄 CropForm.jsx
Form to select crop, stage, and location. Calls backend to get advice and stores it in localStorage.

📄 AdviceBox.jsx
Displays the stored advice and provides a button to copy it.

📄 WeatherBox.jsx
Static weather information with icons for 8 different metrics.

📄 styles.css
Your global styling file:

css
Copy
Edit
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
...
📤 API Interface
POST /api/advice
Request:

json
Copy
Edit
{
  "crop": "Rice",
  "stage": "Maturity",
  "location": "USA"
}
Response:

json
Copy
Edit
{
  "advice": "Apply nitrogen fertilizer moderately during maturity."
}
🧪 Testing the Flow
Select a crop (e.g., Rice)

Choose a growth stage (e.g., Growth)

Type in your location

Click 🍃 Get AI Advice

Advice appears below, and you can copy it with 📋

🛠️ Future Improvements
Live weather API integration

Multilingual support

Location auto-detection

AI model integration for real advice

📄 License
MIT License. Free to use and modify.

👨‍💻 Author
Built by [D HariBabu.....!].
Feel free to contribute or suggest improvements.

yaml
Copy
Edit

---

Let me know if:

- You want the README split into `frontend/README.md` and `backend/README.md`
- You want instructions for Docker, deployment, or `.env` setup
- You’re using an actual AI model and need to document that too