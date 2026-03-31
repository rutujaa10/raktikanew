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
      },
      mission: {
        vision: "Vision",
        visionContent: "To democratize access to reproductive health diagnostics through affordable, portable, and intelligent devices.",
        missionTitle: "Mission",
        missionContent: "To integrate bioengineering, AI, and mobile technology to create reliable, user-friendly health diagnostic tools for every individual.",
        motto: "Motto",
        mottoContent: "Science that Empowers Wellness."
      },
      device: {
        title: "The Raktika Device",
        subtitle: "An affordable, smartphone-integrated fluorescence detection system that enables at-home hormone testing with laboratory-level precision.",
        f1Title: "Clip-on optical fluorescence module",
        f1Desc: "Seamlessly attaches to your smartphone",
        f2Title: "AI-driven analysis",
        f2Desc: "Smart algorithms through smartphone app",
        f3Title: "Multiple test support",
        f3Desc: "Lateral-flow and fluorescence-based tests",
        f4Title: "Portable & rechargeable",
        f4Desc: "Designed for precision and convenience"
      },
      technology: {
        title: "Technology & Innovation",
        subtitle: "How Raktika Works",
        t1Title: "Hardware",
        t1Desc: "Low-cost optical detection module with smart illumination and emission filtering.",
        t2Title: "Software",
        t2Desc: "AI/ML model processes fluorescence intensity for accurate biomarker quantification.",
        t3Title: "Integration",
        t3Desc: "Works seamlessly with standard FIA/LFA strips.",
        processTitle: "Simple 3-Step Process",
        s1Title: "Insert/Scan Strip",
        s1Desc: "Place your test strip in the device",
        s2Title: "Capture Using Raktika",
        s2Desc: "Device automatically captures fluorescence data",
        s3Title: "Get Instant Report",
        s3Desc: "Receive detailed results on your smartphone app"
      },
      about: {
        badge: "About Us",
        company: "RootNova Technologies Pvt. Ltd.",
        description: "RootNova Technologies, founded by engineering students from VJTI and mentored under IIM Mumbai, is dedicated to developing impactful, affordable health-tech solutions for India's next generation. Our flagship product, Raktika, embodies our mission to blend innovation with accessibility.",
        incubated: "Incubated under IIM Mumbai"
      },
      team: {
        title: "The Innovators Behind Raktika",
        subtitle: "Meet the passionate team driving healthcare innovation",
        roles: {
          productLead: "Product Lead",
          operations: "Operations",
          hardware: "Hardware Engineer"
        },
        moreMembers: "+ RootNova Core Team Members",
        moreDesc: "A dedicated group of engineers and innovators"
      },
      impact: {
        title: "Shaping the Future of Women's Health",
        subtitle: "Making healthcare accessible and affordable for everyone",
        stat1: "of women in India delay reproductive tests due to cost or inaccessibility",
        stat2: "reduction in diagnostic costs with Raktika",
        stat3: "hormonal markers supported, with more to come"
      },
      roadmap: {
        title: "Future Roadmap",
        subtitle: "Our journey to transform healthcare",
        current: "Current",
        m1Year: "2025",
        m1Title: "Prototype & Validation",
        m2Year: "2026",
        m2Title: "Pilot with Clinics & Labs",
        m3Year: "2027",
        m3Title: "Public Launch & Expansion to B2C",
        m4Year: "Beyond",
        m4Title: "Global Scale & Integration with healthcare networks"
      },
      footer: {
        company: "RootNova Technologies Pvt. Ltd.",
        location: "Mumbai, India",
        copyright: "© 2025 RootNova | All Rights Reserved"
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
      },
      mission: {
        vision: "दृष्टिकोण",
        visionContent: "सस्ते, पोर्टेबल और बुद्धिमान उपकरणों के माध्यम से प्रजनन स्वास्थ्य निदान तक पहुंच को लोकतांत्रिक बनाना।",
        missionTitle: "मिशन",
        missionContent: "प्रत्येक व्यक्ति के लिए विश्वसनीय और उपयोग में आसान स्वास्थ्य निदान उपकरण बनाने के लिए बायोइंजीनियरिंग, एआई और मोबाइल प्रौद्योगिकी को एकीकृत करना।",
        motto: "आदर्श वाक्य",
        mottoContent: "कल्याण को सशक्त बनाने वाला विज्ञान।"
      },
      device: {
        title: "रक्तिका उपकरण",
        subtitle: "एक किफायती, स्मार्टफोन-एकीकृत प्रतिदीप्ति (fluorescence) का पता लगाने वाली प्रणाली जो प्रयोगशाला-स्तर की सटीकता के साथ घर पर हार्मोन परीक्षण सक्षम करती है।",
        f1Title: "क्लिप-ऑन ऑप्टिकल प्रतिदीप्ति मॉड्यूल",
        f1Desc: "आपके स्मार्टफोन से सहजता से जुड़ जाता है",
        f2Title: "AI-संचालित विश्लेषण",
        f2Desc: "स्मार्टफोन ऐप के माध्यम से स्मार्ट एल्गोरिदम",
        f3Title: "विभिन्न टेस्ट समर्थन",
        f3Desc: "लेटरल-फ्लो और प्रतिदीप्ति-आधारित परीक्षण",
        f4Title: "पोर्टेबल और रिचार्जेबल",
        f4Desc: "सटीकता और सुविधा के लिए डिज़ाइन किया गया"
      },
      technology: {
        title: "प्रौद्योगिकी और नवाचार",
        subtitle: "रक्तिका कैसे काम करता है",
        t1Title: "हार्डवेयर",
        t1Desc: "स्मार्ट रोशनी और उत्सर्जन फ़िल्टरिंग के साथ कम लागत वाला ऑप्टिकल डिटेक्शन मॉड्यूल।",
        t2Title: "सॉफ्टवेयर",
        t2Desc: "सटीक बायोमार्कर परिमाणीकरण के लिए AI/ML मॉडल प्रतिदीप्ति तीव्रता को प्रोसेस करता है।",
        t3Title: "एकीकरण",
        t3Desc: "मानक FIA/LFA स्ट्रिप्स के साथ निर्बाध रूप से काम करता है।",
        processTitle: "आसान 3-चरणीय प्रक्रिया",
        s1Title: "स्ट्रिप डालें/स्कैन करें",
        s1Desc: "अपनी टेस्ट स्ट्रिप डिवाइस में रखें",
        s2Title: "रक्तिका का उपयोग करके कैप्चर करें",
        s2Desc: "डिवाइस स्वचालित रूप से प्रतिदीप्ति डेटा कैप्चर करता है",
        s3Title: "त्वरित रिपोर्ट प्राप्त करें",
        s3Desc: "अपने स्मार्टफोन ऐप पर विस्तृत परिणाम प्राप्त करें"
      },
      about: {
        badge: "हमारे बारे में",
        company: "रुटनोवा टेक्नोलॉजीज प्राइवेट लिमिटेड",
        description: "वीजेटीआई के इंजीनियरिंग छात्रों द्वारा स्थापित और आईआईएम मुंबई द्वारा निर्देशित रुटनोवा टेक्नोलॉजीज, भारत की अगली पीढ़ी के लिए प्रभावशाली, किफायती स्वास्थ्य-तकनीक समाधान विकसित करने के लिए समर्पित है। हमारा प्रमुख उत्पाद, रक्तिका, पहुंच के साथ नवाचार को जोड़ने के हमारे मिशन का प्रतीक है।",
        incubated: "IIM मुंबई के तहत इनक्यूबेट किया गया"
      },
      team: {
        title: "रक्तिका के पीछे के इनोवेटर्स",
        subtitle: "स्वास्थ्य सेवा नवाचार को चलाने वाली भावुक टीम से मिलें",
        roles: {
          productLead: "उत्पाद प्रमुख",
          operations: "संचालन",
          hardware: "हार्डवेयर इंजीनियर"
        },
        moreMembers: "+ रुटनोवा कोर टीम के सदस्य",
        moreDesc: "इंजीनियरों और नवप्रवर्तकों का एक समर्पित समूह"
      },
      impact: {
        title: "महिलाओं के स्वास्थ्य का भविष्य आकार देना",
        subtitle: "स्वास्थ्य सेवा को सभी के लिए सुलभ और वहनीय बनाना",
        stat1: "भारत में महिलाएं लागत या अप्राप्यता के कारण प्रजनन परीक्षण में देरी करती हैं",
        stat2: "रक्तिका के साथ नैदानिक लागत में कमी",
        stat3: "हार्मोनल मार्कर समर्थित, और भी बहुत कुछ आने वाला है"
      },
      roadmap: {
        title: "भविष्य का रोडमैप",
        subtitle: "स्वास्थ्य सेवा को बदलने की हमारी यात्रा",
        current: "वर्तमान",
        m1Year: "2025",
        m1Title: "प्रोटोटाइप और सत्यापन",
        m2Year: "2026",
        m2Title: "क्लीनिक और लैब्स के साथ पायलट",
        m3Year: "2027",
        m3Title: "सार्वजनिक लॉन्च और B2C में विस्तार",
        m4Year: "आगे",
        m4Title: "वैश्विक स्तर और स्वास्थ्य सेवा नेटवर्क के साथ एकीकरण"
      },
      footer: {
        company: "रुटनोवा टेक्नोलॉजीज प्राइवेट लिमिटेड",
        location: "मुंबई, भारत",
        copyright: "© 2025 रुटनोवा | सर्वाधिकार सुरक्षित"
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
