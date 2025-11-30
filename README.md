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

##Tech Stack
HTML5 – structure and layout
CSS3 + Tailwind CSS + custom styles – design and responsiveness 
index
Vanilla JavaScript (ES6) – app logic, language detection, tone-based responses 
script
Font Awesome – icons for bot, user, controls

##How to Use
Ask a question
Type your question in the input box (e.g., “How do I fix battery draining quickly?”). 
index
Select response language
Choose Auto-detect or manually select English/Hindi/Kannada/Telugu from the “Response language” panel. 
index
Choose a tone
Pick how you want the assistant to respond: friendly, technical, professional, simplified, or humorous. 
index
Use the FAQ cards
Click any FAQ in the “Knowledge base” section to auto-fill that question into the input box. Then hit “Send”. 
index
Read the reply
The assistant will reply in the chosen language and tone, based on keyword matching for topics like:
Battery issues
Device not turning on
Overheating
Factory reset steps 
data
