# Smart FAQ Assistant 🤖

A smart, multilingual FAQ chatbot for device troubleshooting.  
It supports English, Hindi, Kannada, and Telugu with different response tones (friendly, technical, professional, simplified, and humorous), and includes an interactive FAQ knowledge base UI. 

---

## ✨ Features

- **Chat-style FAQ assistant UI** with user and bot chat bubbles. :contentReference[oaicite:0]{index=0}  
- **Multi-language support** for:
  - English (`en`)
  - Hindi (`hi`)
  - Kannada (`kn`)
  - Telugu (`te`) :contentReference[oaicite:1]{index=1}  
- **Auto language detection** based on the user’s input script. :contentReference[oaicite:2]{index=2}  
- **Tone control**:
  - Friendly & supportive  
  - Technical & detailed  
  - Formal & professional  
  - Simplified & easy to understand  
  - Humorous & casual :contentReference[oaicite:3]{index=3}  
- **Clickable FAQ knowledge base** — click a FAQ card to auto-fill the question into the input box. :contentReference[oaicite:4]{index=4}  
- **No backend required** – fully front-end (HTML + CSS + JavaScript).  
- **Responsive layout** built with Tailwind CSS and custom styling. :contentReference[oaicite:5]{index=5}  

---

## 📂 Project Structure

```text
.
├── index.html    # Main UI layout and structure
├── style.css     # Custom styling for chat bubbles, layout, and animations
├── data.js       # FAQ data + language-specific response templates
├── script.js     # App logic: language detection, tone handling, chat flow
