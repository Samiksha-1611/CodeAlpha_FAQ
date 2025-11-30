// Sample FAQ data
const sampleFAQs = [
    {
        q: "How do I fix battery draining quickly?",
        a: "To fix battery drain: 1) Reduce screen brightness, 2) Close unused apps running in background, 3) Turn off GPS/WiFi/Bluetooth when not needed, 4) Check for battery-intensive apps in settings, 5) Update your device software."
    },
    {
        q: "My device won't turn on, what should I do?",
        a: "If device won't turn on: 1) Charge for at least 30 minutes, 2) Try a different charger and cable, 3) Perform a forced restart (hold power + volume down for 10 seconds), 4) Check for physical damage, 5) Visit service center if issue persists."
    },
    {
        q: "How to improve battery life?",
        a: "Improve battery life by: 1) Using battery saver mode, 2) Limiting background app refresh, 3) Reducing auto-lock time, 4) Disabling unnecessary notifications, 5) Keeping device updated, 6) Avoiding extreme temperatures."
    },
    {
        q: "Why is my phone overheating?",
        a: "Phone overheating causes: 1) Heavy gaming/video usage, 2) Poor signal strength, 3) Faulty battery, 4) Running too many apps, 5) Direct sunlight exposure. Solutions: Close apps, remove case, avoid usage while charging, update software."
    },
    {
        q: "How to reset my device to factory settings?",
        a: "Factory reset steps: 1) Backup your data, 2) Go to Settings > System > Reset, 3) Select 'Factory data reset', 4) Confirm and enter your password, 5) Device will restart and erase all data. Warning: This cannot be undone!"
    }
];

// Language mapping
const languageMap = {
    'en': 'English',
    'hi': 'Hindi', 
    'kn': 'Kannada',
    'te': 'Telugu'
};

// Language responses for common questions
const batteryResponses = {
    'en': "I'd be happy to help with battery issues! For quick battery drain: 1) Lower screen brightness, 2) Close background apps, 3) Turn off unused connections like WiFi/GPS, 4) Update your device software, and 5) Check for battery-hungry apps in settings. If the problem continues, your battery might need replacement.",
    'hi': "मैं बैटरी की समस्या में आपकी मदद कर सकता हूं! तेजी से बैटरी ड्रेन के लिए: 1) स्क्रीन की चमक कम करें, 2) बैकग्राउंड ऐप्स बंद करें, 3) WiFi/GPS जैसे अन्य कनेक्शन बंद करें, 4) अपने डिवाइस का सॉफ्टवेयर अपडेट करें, और 5) सेटिंग्स में बैटरी खाने वाले ऐप्स चेक करें। अगर समस्या बनी रहती है, तो आपकी बैटरी को बदलने की जरूरत हो सकती है।",
    'kn': "ನಾನು ಬ್ಯಾಟರಿ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಸಂತೋಷಪಡುತ್ತೇನೆ! ತ್ವರಿತ ಬ್ಯಾಟರಿ ಡ್ರೈನ್ಗಾಗಿ: 1) ಸ್ಕ್ರೀನ್ ಬ್ರೈಟ್ನೆಸ್ ಕಡಿಮೆ ಮಾಡಿ, 2) ಹಿನ್ನೆಲೆ ಆ್ಯಪ್ಗಳನ್ನು ಮುಚ್ಚಿ, 3) WiFi/GPS ನಂತರದ ಬಳಕೆಯಿಲ್ಲದ ಸಂಪರ್ಕಗಳನ್ನು ಆಫ್ ಮಾಡಿ, 4) ನಿಮ್ಮ ಸಾಧನದ ಸಾಫ್ಟ್ವೇರ್ ಅಪ್ಡೇಟ್ ಮಾಡಿ, ಮತ್ತು 5) ಸೆಟ್ಟಿಂಗ್ಗಳಲ್ಲಿ ಬ್ಯಾಟರಿ ಬಳಸುವ ಆ್ಯಪ್ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ಸಮಸ್ಯೆ ಮುಂದುವರೆದರೆ, ನಿಮ್ಮ ಬ್ಯಾಟರಿ ಬದಲಾವಣೆ ಅಗತ್ಯವಾಗಬಹುದು.",
    'te': "నేను బ్యాటరీ సమస్యలలో మీకు సహాయం చేయడానికి సంతోషిస్తున్నాను! త్వరిత బ్యాటరీ డ్రైన్ కోసం: 1) స్క్రీన్ బ్రైట్నెస్ తగ్గించండి, 2) బ్యాక్గ్రౌండ్ యాప్‌లను మూసివేయండి, 3) WiFi/GPS వంటి ఉపయోగం లేని కనెక్షన్‌లను ఆఫ్ చేయండి, 4) మీ పరికర సాఫ్ట్‌వేర్‌ను నవీకరించండి, మరియు 5) సెట్టింగ్‌లలో బ్యాటరీ తినే యాప్‌లను తనిఖీ చేయండి. సమస్య కొనసాగితే, మీ బ్యాటరీని మార్చాల్సిన అవసరం ఉండవచ్చు."
};

const startupResponses = {
    'en': "If your device won't turn on, try these steps: 1) Charge it for at least 30 minutes, 2) Try a different charger and cable, 3) Perform a forced restart (hold power + volume down for 10-15 seconds), 4) Check for physical damage. If none work, visit a service center.",
    'hi': "अगर आपका डिवाइस चालू नहीं हो रहा है, तो इन चरणों को आजमाएं: 1) इसे कम से कम 30 मिनट के लिए चार्ज करें, 2) एक अलग चार्जर और केबल आजमाएं, 3) फोर्स रीस्टार्ट करें (10-15 सेकंड के लिए पावर + वॉल्यूम डाउन दबाए रखें), 4) भौतिक क्षति की जांच करें। यदि कुछ भी काम नहीं करता है, तो सर्विस सेंटर पर जाएं।",
    'kn': "ನಿಮ್ಮ ಸಾಧನವು ಆನ್ ಆಗದಿದ್ದರೆ, ಈ ಹಂತಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ: 1) ಅದನ್ನು ಕನಿಷ್ಠ 30 ನಿಮಿಷಗಳ ಕಾಲ ಚಾರ್ಜ್ ಮಾಡಿ, 2) ಬೇರೆ ಚಾರ್ಜರ್ ಮತ್ತು ಕೇಬಲ್ ಅನ್ನು ಪ್ರಯತ್ನಿಸಿ, 3) ಫೋರ್ಸ್ ರೀಸ್ಟಾರ್ಟ್ ಮಾಡಿ (10-15 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಪವರ್ + ವಾಲ್ಯೂಮ್ ಡೌನ್ ಅನ್ನು ಹಿಡಿದಿಡಿ), 4) ಭೌತಿಕ ಹಾನಿಯನ್ನು ಪರಿಶೀಲಿಸಿ. ಏನೂ ಕೆಲಸ ಮಾಡದಿದ್ದರೆ, ಸರ್ವಿಸ್ ಸೆಂಟರ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.",
    'te': "మీ పరికరం ఆన్ కాకపోతే, ఈ దశలను ప్రయత్నించండి: 1) దీన్ని కనీసం 30 నిమిషాలు ఛార్జ్ చేయండి, 2) వేరే ఛార్జర్ మరియు కేబుల్‌ను ప్రయత్నించండి, 3) ఫోర్స్డ్ రీస్టార్ట్ చేయండి (10-15 సెకన్ల పాటు పవర్ + వాల్యూమ్ డౌన్ నొక్కండి), 4) భౌతిక నష్టాన్ని తనిఖీ చేయండి. ఏదీ పని చేయకపోతే, సర్వీస్ సెంటర్‌కు వెళ్లండి."
};

const resetResponses = {
    'en': "To factory reset: 1) Backup your data, 2) Go to Settings > System > Reset, 3) Select 'Factory data reset', 4) Confirm and enter password. ⚠️ Warning: This erases all data and cannot be undone!",
    'hi': "फैक्टरी रीसेट करने के लिए: 1) अपना डेटा बैकअप करें, 2) सेटिंग्स > सिस्टम > रीसेट पर जाएं, 3) 'फैक्टरी डेटा रीसेट' चुनें, 4) पुष्टि करें और पासवर्ड दर्ज करें। ⚠️ चेतावनी: यह सभी डेटा मिटा देता है और इसे पूर्ववत नहीं किया जा सकता!",
    'kn': "ಫ್ಯಾಕ್ಟರಿ ರೀಸೆಟ್ ಮಾಡಲು: 1) ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಬ್ಯಾಕಪ್ ಮಾಡಿ, 2) ಸೆಟ್ಟಿಂಗ್ಸ್ > ಸಿಸ್ಟಮ್ > ರೀಸೆಟ್‌ಗೆ ಹೋಗಿ, 3) 'ಫ್ಯಾಕ್ಟರಿ ಡೇಟಾ ರೀಸೆಟ್' ಆಯ್ಕೆಮಾಡಿ, 4) ದೃಢೀಕರಿಸಿ ಮತ್ತು ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ. ⚠️ ಎಚ್ಚರಿಕೆ: ಇದು ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಅಳಿಸುತ್ತದೆ ಮತ್ತು ಇದನ್ನು ಪೂರ್ವಸ್ಥಿತಿಗೆ ತರಲು ಸಾಧ್ಯವಿಲ್ಲ!",
    'te': "ఫ్యాక్టరీ రీసెట్ చేయడానికి: 1) మీ డేటాను బ్యాకప్ చేయండి, 2) సెట్టింగ్స్ > సిస్టమ్ > రీసెట్‌కి వెళ్లండి, 3) 'ఫ్యాక్టరీ డేటా రీసెట్' ఎంచుకోండి, 4) నిర్ధారించండి మరియు పాస్వర్డ్ నమోదు చేయండి. ⚠️ హెచ్చరిక: ఇది అన్ని డేటాను తొలగిస్తుంది మరియు దీన్ని రద్దు చేయడం సాధ్యం కాదు!"
};

const overheatingResponses = {
    'en': "Device overheating solutions: 1) Close unused apps, 2) Remove protective case, 3) Avoid direct sunlight, 4) Don't use while charging, 5) Update software, 6) Check for malware.",
    'hi': "डिवाइस ओवरहीटिंग समाधान: 1) अनुपयोगी ऐप्स बंद करें, 2) सुरक्षात्मक केस हटाएं, 3) सीधी धूप से बचें, 4) चार्ज करते समय उपयोग न करें, 5) सॉफ्टवेयर अपडेट करें, 6) मैलवेयर की जांच करें।",
    'kn': "ಸಾಧನ ಅತಿಯಾಗಿ ಬಿಸಿಯಾಗುವಿಕೆ ಪರಿಹಾರಗಳು: 1) ಬಳಕೆಯಿಲ್ಲದ ಆ್ಯಪ್‌ಗಳನ್ನು ಮುಚ್ಚಿ, 2) ರಕ್ಷಣಾತ್ಮಕ ಕೇಸ್ ತೆಗೆದುಹಾಕಿ, 3) ನೇರ ಸೂರ್ಯನ ಬೆಳಕನ್ನು ತಪ್ಪಿಸಿ, 4) ಚಾರ್ಜ್ ಮಾಡುವಾಗ ಬಳಸಬೇಡಿ, 5) ಸಾಫ್ಟ್‌ವೇರ್ ಅಪ್ಡೇಟ್ ಮಾಡಿ, 6) ಮಾಲ್‌ವೇರ್‌ಗಾಗಿ ಪರಿಶೀಲಿಸಿ.",
    'te': "పరికరం వేడెక్కడం పరిష్కారాలు: 1) ఉపయోగం లేని యాప్‌లను మూసివేయండి, 2) రక్షిత కేస్‌ను తీసివేయండి, 3) ప్రత్యక్ష సూర్యకాంతిని తప్పించండి, 4) ఛార్జ్ చేస్తున్నప్పుడు ఉపయోగించవద్దు, 5) సాఫ్ట్‌వేర్‌ను నవీకరించండి, 6) మాల్‌వేర్‌కు తనిఖీ చేయండి."
};

const defaultResponses = {
    'en': "I understand you're asking about device issues. I have information about battery problems, device startup, overheating, and factory resets. Could you provide more specific details so I can help you better?",
    'hi': "मैं समझता हूं कि आप डिवाइस समस्याओं के बारे में पूछ रहे हैं। मेरे पास बैटरी समस्याओं, डिवाइस स्टार्टअप, ओवरहीटिंग और फैक्टरी रीसेट के बारे में जानकारी है। क्या आप अधिक विशिष्ट विवरण दे सकते हैं ताकि मैं आपकी बेहतर मदद कर सकूं?",
    'kn': "ನೀವು ಸಾಧನ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಕೇಳುತ್ತಿರುವುದನ್ನು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಬ್ಯಾಟರಿ ಸಮಸ್ಯೆಗಳು, ಸಾಧನ ಪ್ರಾರಂಭ, ಅತಿಯಾಗಿ ಬಿಸಿಯಾಗುವಿಕೆ ಮತ್ತು ಫ್ಯಾಕ್ಟರಿ ರೀಸೆಟ್‌ಗಳ ಬಗ್ಗೆ ನನ್ನಲ್ಲಿ ಮಾಹಿತಿ ಇದೆ. ನಾನು ನಿಮಗೆ ಉತ್ತಮ ಸಹಾಯ ಮಾಡಲು ನೀವು ಹೆಚ್ಚು ನಿರ್ದಿಷ್ಟ ವಿವರಗಳನ್ನು ಒದಗಿಸಬಹುದೇ?",
    'te': "మీరు పరికర సమస్యల గురించి అడుగుతున్నారని నేను అర్థం చేసుకున్నాను. బ్యాటరీ సమస్యలు, పరికర ప్రారంభం, వేడెక్కడం మరియు ఫ్యాక్టరీ రీసెట్‌ల గురించి నా వద్ద సమాచారం ఉంది. నేను మీకు మెరుగ్గా సహాయం చేయడానికి మీరు మరింత నిర్దిష్ట వివరాలను అందించగలరా?"
};