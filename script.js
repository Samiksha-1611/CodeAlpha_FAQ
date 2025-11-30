// Global state
let currentLanguage = 'auto';
let currentTone = 'friendly and supportive';
let isProcessing = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

// Initialize the application
function initializeApp() {
    console.log("App initialized with sample FAQs");
    document.getElementById('submit-btn').disabled = false;
    populateFAQList();
}

// Set up event listeners
function setupEventListeners() {
    // Language selection
    document.getElementById('lang-auto').addEventListener('click', () => selectLanguage('auto'));
    document.getElementById('lang-en').addEventListener('click', () => selectLanguage('en'));
    document.getElementById('lang-hi').addEventListener('click', () => selectLanguage('hi'));
    document.getElementById('lang-kn').addEventListener('click', () => selectLanguage('kn'));
    document.getElementById('lang-te').addEventListener('click', () => selectLanguage('te'));
    
    // Tone selection
    document.getElementById('tone-friendly').addEventListener('click', () => selectTone('friendly and supportive'));
    document.getElementById('tone-technical').addEventListener('click', () => selectTone('technical and detailed'));
    document.getElementById('tone-professional').addEventListener('click', () => selectTone('formal and professional'));
    document.getElementById('tone-simplified').addEventListener('click', () => selectTone('simplified and easy to understand'));
    document.getElementById('tone-humorous').addEventListener('click', () => selectTone('humorous and casual'));
    
    // Input handling
    document.getElementById('user-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    document.getElementById('submit-btn').addEventListener('click', sendMessage);
}

// Populate FAQ list
function populateFAQList() {
    const faqList = document.getElementById('faq-list');
    faqList.innerHTML = sampleFAQs.map(faq => 
        `<div class="faq-item p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div class="flex items-start">
                <div class="bg-indigo-100 text-indigo-800 p-2 rounded-lg mr-3">
                    <i class="fas fa-question-circle"></i>
                </div>
                <div>
                    <h4 class="font-medium text-gray-800">${faq.q}</h4>
                    <p class="text-sm text-gray-600 mt-1">Click to ask this question</p>
                </div>
            </div>
        </div>`
    ).join('');
    
    // Add click events to FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function() {
            const question = this.querySelector('h4').textContent;
            document.getElementById('user-input').value = question;
            document.getElementById('user-input').focus();
        });
    });
}

// Select language
function selectLanguage(lang) {
    currentLanguage = lang;
    
    // Update UI
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.classList.remove('bg-indigo-500', 'text-white');
        option.classList.add('bg-white', 'border', 'border-gray-300');
    });
    
    document.getElementById(`lang-${lang}`).classList.remove('bg-white', 'border', 'border-gray-300');
    document.getElementById(`lang-${lang}`).classList.add('bg-indigo-500', 'text-white');
    
    // Hide language indicator if not auto
    if (lang !== 'auto') {
        document.getElementById('detected-language').classList.add('hidden');
    }
}

// Select tone
function selectTone(tone) {
    currentTone = tone;
    
    // Update UI
    const toneOptions = document.querySelectorAll('.tone-option');
    toneOptions.forEach(option => {
        option.classList.remove('active', 'bg-indigo-500', 'text-white');
        option.classList.add('bg-white', 'border', 'border-gray-300');
    });
    
    const toneId = tone.split(' ')[0]; // Get first word of tone
    document.getElementById(`tone-${toneId}`).classList.add('active', 'bg-indigo-500', 'text-white');
}

// Detect language from text
async function detectLanguage(text) {
    const indicator = document.getElementById('detected-language');
    const langName = document.getElementById('detected-lang-name');
    indicator.classList.remove('hidden');
    indicator.classList.add('detecting');
}