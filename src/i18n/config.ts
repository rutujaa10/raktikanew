import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        mission: "Mission",
        device: "Device",
        technology: "Technology",
        about: "About",
        team: "Team",
        impact: "Impact",
        roadmap: "Roadmap",
        contact: "Contact"
      },
      hero: {
        title: "Revolutionizing Hemoglobin Testing in India",
        subtitle: "Non-invasive, AI-powered, instant results for everyone",
        cta: "Join the Revolution",
        joinWaitlist: "Join Waitlist"
      },
      waitlist: {
        title: "Join the Raktika Waitlist",
        subtitle: "Be among the first to test our revolutionary non-invasive device",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        interests: "Why are you interested in Raktika?",
        submit: "Join Waitlist",
        success: "Successfully Joined!",
        successMessage: "Thank you for joining the waitlist. We'll keep you updated on Raktika's launch.",
        close: "Close"
      },
      contact: {
        title: "Let's Build the Future of Health Together",
        subtitle: "Get in touch with us to learn more or collaborate",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        orEmail: "Or email us directly",
        success: "Message Sent!",
        successMessage: "Thank you for reaching out. We'll get back to you soon."
      },
      chat: {
        title: "Chat with Us",
        placeholder: "Type your message...",
        send: "Send",
        welcome: "Hello! How can we help you today?"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        mission: "मिशन",
        device: "उपकरण",
        technology: "प्रौद्योगिकी",
        about: "हमारे बारे में",
        team: "टीम",
        impact: "प्रभाव",
        roadmap: "रोडमैप",
        contact: "संपर्क करें"
      },
      hero: {
        title: "भारत में हीमोग्लोबिन परीक्षण में क्रांति",
        subtitle: "गैर-आक्रामक, AI-संचालित, सभी के लिए त्वरित परिणाम",
        cta: "क्रांति में शामिल हों",
        joinWaitlist: "वेटलिस्ट में शामिल हों"
      },
      waitlist: {
        title: "रक्तिका वेटलिस्ट में शामिल हों",
        subtitle: "हमारे क्रांतिकारी गैर-आक्रामक उपकरण का परीक्षण करने वाले पहले लोगों में शामिल हों",
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        interests: "आप रक्तिका में क्यों रुचि रखते हैं?",
        submit: "वेटलिस्ट में शामिल हों",
        success: "सफलतापूर्वक शामिल हुए!",
        successMessage: "वेटलिस्ट में शामिल होने के लिए धन्यवाद। हम आपको रक्तिका के लॉन्च के बारे में अपडेट करते रहेंगे।",
        close: "बंद करें"
      },
      contact: {
        title: "आइए मिलकर स्वास्थ्य का भविष्य बनाएं",
        subtitle: "अधिक जानने या सहयोग करने के लिए हमसे संपर्क करें",
        name: "नाम",
        email: "ईमेल",
        message: "संदेश",
        send: "संदेश भेजें",
        orEmail: "या सीधे हमें ईमेल करें",
        success: "संदेश भेज दिया गया!",
        successMessage: "संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।"
      },
      chat: {
        title: "हमसे चैट करें",
        placeholder: "अपना संदेश लिखें...",
        send: "भेजें",
        welcome: "नमस्ते! हम आज आपकी कैसे मदद कर सकते हैं?"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
