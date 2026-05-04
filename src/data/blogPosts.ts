import blogImg1 from '@/assets/blog/champaran-handi-mutton-clay-pot.jpg';
import blogImg2 from '@/assets/blog/mutton-biryani-copper-pot-spices.jpg';
import blogImg3 from '@/assets/blog/grand-mutton-thali-platter.jpg';
import blogImg4 from '@/assets/blog/traditional-indian-mutton-thali.jpg';

export interface BlogPost {
  id: string;
  slug: string;
  titleEn: string;
  titleHi: string;
  excerptEn: string;
  excerptHi: string;
  contentEn: string;
  contentHi: string;
  image1: string;
  image2: string;
  image1Alt: string;
  image2Alt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number; // minutes
  seoKeywords: string;
}

export const blogCategories = [
  { id: 'all', label: 'All Posts' },
  { id: 'food', label: 'Food & Recipes' },
  { id: 'local-seo', label: 'Local Guide' },
  { id: 'culture', label: 'Bihar Culture' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'how-champaran-mutton-is-cooked-traditional-style',
    titleEn: 'How Champaran Mutton is Cooked in Traditional Style',
    titleHi: 'चम्पारण मटन को पारंपरिक तरीके से कैसे पकाया जाता है',
    excerptEn:
      'Discover the ancient art of Champaran Handi cooking — slow-cooked in sealed clay pots with secret spices passed down through generations at Purvi Champaran Handi Meat, Rafiganj.',
    excerptHi:
      'चम्पारण हांडी पकाने की प्राचीन कला की खोज करें — पूर्वी चम्पारण हांडी मीट, रफीगंज में पीढ़ियों से चले आ रहे गुप्त मसालों के साथ बंद मिट्टी के बर्तनों में धीमी आंच पर पकाया जाता है।',
    contentEn: `
## The Secret Behind Champaran Handi Mutton

At **Purvi Champaran Handi Meat, Rafiganj**, we don't just cook mutton — we preserve a centuries-old tradition that originated in the Champaran region of Bihar. Our restaurant, located on the main road of Rafiganj in Gaya district, has been serving this legendary dish to customers from Aurangabad, Sasaram, Dehri-on-Sone, Gaya, and beyond.

### What Makes Champaran Handi Different?

The word *"Handi"* refers to the traditional clay pot (earthen vessel) used for cooking. Unlike modern pressure cookers or steel vessels, the clay pot breathes — it allows moisture to circulate slowly, creating a unique steam environment that infuses every piece of mutton with deep, earthy flavors.

### The Traditional Process

**Step 1 — Selecting the Mutton**
We use only fresh, locally sourced mutton. The quality of meat is the foundation of the dish. At our shop in Rafiganj, we receive fresh mutton daily, ensuring every order is made with the best cuts.

**Step 2 — The Marinade**
The mutton is marinated with a blend of whole spices — not ground powders. This includes whole black cardamom, bay leaves, cloves, cinnamon, and our secret family spice mix that has been passed down through generations. The marinade sits for at least 2–3 hours.

**Step 3 — Sealing the Handi**
This is the most critical step. The marinated mutton, along with mustard oil, onions, garlic, ginger, and the spice blend, is placed inside the clay handi. The lid is then sealed with dough (atta) — a technique called *"dum"* cooking. This seal traps all the steam and flavors inside.

**Step 4 — Slow Cooking on Low Flame**
The sealed handi is placed on a low charcoal or wood flame for 3–4 hours. The slow cooking process allows the mutton to become incredibly tender while absorbing all the spice flavors. No water is added — the mutton cooks in its own juices.

**Step 5 — The Reveal**
When the dough seal is broken at the table, the aroma that escapes is unlike anything else. The mutton falls off the bone, the gravy is rich and thick, and the color is a deep reddish-brown from the slow caramelization.

### Why Visit Purvi Champaran Handi Meat, Rafiganj?

Our restaurant is conveniently located in Rafiganj, making it easily accessible from:
- **Aurangabad** — just 30 km away
- **Gaya** — approximately 40 km
- **Sasaram** — around 50 km
- **Dehri-on-Sone** — about 45 km
- **Kochas** — nearby in Rohtas district

Whether you're traveling on NH-2 or visiting Gaya for religious purposes, Purvi Champaran Handi Meat is the perfect stop for an authentic Bihar meal.

### Order Now

Call us at **+91 7424961362** or order directly via WhatsApp. We serve from 11 AM to 11 PM, seven days a week.
    `,
    contentHi: `
## चम्पारण हांडी मटन का रहस्य

**पूर्वी चम्पारण हांडी मीट, रफीगंज** में हम सिर्फ मटन नहीं पकाते — हम बिहार के चम्पारण क्षेत्र से शुरू हुई सदियों पुरानी परंपरा को जीवित रखते हैं। गया जिले के रफीगंज मुख्य सड़क पर स्थित हमारा रेस्तरां औरंगाबाद, सासाराम, डेहरी-ऑन-सोन, गया और आसपास के ग्राहकों को यह प्रसिद्ध व्यंजन परोसता रहा है।

### चम्पारण हांडी क्या अलग बनाता है?

*"हांडी"* शब्द पकाने के लिए उपयोग किए जाने वाले पारंपरिक मिट्टी के बर्तन को संदर्भित करता है। आधुनिक प्रेशर कुकर या स्टील के बर्तनों के विपरीत, मिट्टी का बर्तन सांस लेता है — यह नमी को धीरे-धीरे प्रसारित होने देता है, जिससे एक अनूठा भाप वातावरण बनता है।

### पारंपरिक प्रक्रिया

**चरण 1 — मटन का चयन**
हम केवल ताजा, स्थानीय रूप से प्राप्त मटन का उपयोग करते हैं। रफीगंज में हमारी दुकान पर रोजाना ताजा मटन आता है।

**चरण 2 — मैरिनेड**
मटन को साबुत मसालों के मिश्रण से मैरीनेट किया जाता है — पिसे हुए पाउडर नहीं। इसमें साबुत काली इलायची, तेज पत्ता, लौंग, दालचीनी और हमारा गुप्त पारिवारिक मसाला मिश्रण शामिल है।

**चरण 3 — हांडी को सील करना**
मैरीनेट किया हुआ मटन, सरसों के तेल, प्याज, लहसुन, अदरक और मसाला मिश्रण के साथ मिट्टी की हांडी में रखा जाता है। फिर ढक्कन को आटे से सील किया जाता है — इसे *"दम"* पकाना कहते हैं।

**चरण 4 — धीमी आंच पर पकाना**
सील की हुई हांडी को 3-4 घंटे के लिए धीमी आंच पर रखा जाता है। कोई पानी नहीं डाला जाता — मटन अपने ही रस में पकता है।

**चरण 5 — परोसना**
जब आटे की सील तोड़ी जाती है, तो जो सुगंध निकलती है वह अतुलनीय होती है।

### अभी ऑर्डर करें

हमें **+91 7424961362** पर कॉल करें या सीधे WhatsApp पर ऑर्डर करें। हम सुबह 11 बजे से रात 11 बजे तक, सप्ताह के सातों दिन सेवा करते हैं।
    `,
    image1: blogImg1,
    image2: blogImg2,
    image1Alt: 'Champaran Handi Mutton in clay pot — Purvi Champaran Handi Meat Rafiganj',
    image2Alt: 'Traditional slow-cooked mutton handi with spices — Bihar style cooking',
    category: 'food',
    tags: ['Champaran Mutton', 'Traditional Recipe', 'Handi Cooking', 'Bihar Food', 'Rafiganj'],
    author: 'Rohit Chauhan',
    publishedAt: '2025-04-10',
    readTime: 6,
    seoKeywords: 'how champaran mutton is cooked, traditional champaran handi recipe, best mutton restaurant Rafiganj, Purvi Champaran Handi Meat, clay pot mutton Bihar',
  },
  {
    id: 'blog-002',
    slug: 'best-non-veg-restaurants-rafiganj-near-gaya-aurangabad',
    titleEn: 'Best Non-Veg Restaurants in Rafiganj Near Gaya & Aurangabad',
    titleHi: 'रफीगंज में सबसे अच्छे नॉन-वेज रेस्तरां — गया और औरंगाबाद के पास',
    excerptEn:
      'Looking for the best mutton dhaba near Gaya, Aurangabad, or Sasaram? Purvi Champaran Handi Meat in Rafiganj is your answer — authentic Bihar food just 30–50 km from major cities.',
    excerptHi:
      'गया, औरंगाबाद या सासाराम के पास सबसे अच्छे मटन ढाबे की तलाश है? रफीगंज में पूर्वी चम्पारण हांडी मीट आपका जवाब है — प्रमुख शहरों से सिर्फ 30-50 किमी दूर।',
    contentEn: `
## Why Rafiganj is Bihar's Hidden Food Gem

When people think of great food in Bihar, they often think of Patna or Gaya. But tucked away on the NH-2 highway, **Rafiganj** in Gaya district is home to one of the most authentic Champaran Handi Mutton experiences in the entire state — **Purvi Champaran Handi Meat**.

### Location & Accessibility

Rafiganj sits at a strategic crossroads, making it easily reachable from several major cities:

| City | Distance | Travel Time |
|------|----------|-------------|
| Aurangabad | ~30 km | ~35 minutes |
| Gaya | ~40 km | ~50 minutes |
| Dehri-on-Sone | ~45 km | ~55 minutes |
| Sasaram | ~50 km | ~60 minutes |
| Kochas (Rohtas) | ~25 km | ~30 minutes |
| Buxar | ~90 km | ~1.5 hours |

If you're traveling between Gaya and Aurangabad, or passing through on NH-2, Rafiganj is the perfect pit stop for a hearty, authentic meal.

### What Makes Purvi Champaran Handi Meat Special?

**1. Multi-Variety Mutton Menu**
Unlike most dhabas that serve just one style, we offer multiple preparations:
- Champaran Handi Mutton (our signature — per kg pricing)
- Champaran Handi Chicken
- Kadhai Chicken
- Mutton Biryani & Chicken Biryani
- Thali options for complete meals

**2. Old Traditional Recipes**
Our recipes haven't changed since the restaurant was established. Owner **Rohit Chauhan** personally oversees the cooking to ensure every dish meets the traditional standard. The spice blends are prepared in-house using whole spices sourced from trusted local suppliers.

**3. Fresh Ingredients Daily**
We source fresh mutton every single day. No frozen meat, no shortcuts. This commitment to freshness is what keeps our customers coming back from Gaya, Aurangabad, and Sasaram.

**4. Affordable Pricing**
Great food doesn't have to be expensive. Our Champaran Handi Mutton starts at ₹250 for 250g, making it accessible for families, travelers, and food lovers on any budget.

### Best Time to Visit

We're open **11 AM to 11 PM, 7 days a week**. For the best experience:
- **Lunch (12 PM – 2 PM)**: Fresh handi is ready, less waiting time
- **Dinner (7 PM – 9 PM)**: Perfect for families, cooler weather enhances the experience
- **Weekends**: We recommend calling ahead for large group orders

### How to Reach Us

**Address**: Main Road, Rafiganj, Gaya District, Bihar — 824125

**From Aurangabad**: Take NH-2 towards Gaya, Rafiganj is on the main highway.
**From Gaya**: Head towards Aurangabad on NH-2, we're on the main road.
**From Sasaram**: Via Dehri-on-Sone, take the road towards Rafiganj.

📞 **Call/WhatsApp**: +91 7424961362
🕐 **Hours**: 11 AM – 11 PM (All days)

### Customer Favorites

Based on our most popular orders:
1. 🥇 **Champaran Handi Mutton** — 1 kg (₹1000) — our bestseller
2. 🥈 **Mutton Handi Thali** — Complete meal (₹300)
3. 🥉 **Champaran Handi Chicken** — 1 kg (₹600)
4. **Mutton Biryani** — Full plate (₹180)

Whether you're a local from Rafiganj or driving through from Gaya or Aurangabad, Purvi Champaran Handi Meat promises an unforgettable meal rooted in Bihar's rich culinary heritage.
    `,
    contentHi: `
## रफीगंज — बिहार का छुपा हुआ फूड जेम

जब लोग बिहार में अच्छे खाने की बात करते हैं, तो वे अक्सर पटना या गया के बारे में सोचते हैं। लेकिन NH-2 हाईवे पर, गया जिले के **रफीगंज** में पूरे राज्य के सबसे प्रामाणिक चम्पारण हांडी मटन अनुभवों में से एक है — **पूर्वी चम्पारण हांडी मीट**।

### स्थान और पहुंच

रफीगंज एक रणनीतिक चौराहे पर स्थित है, जो इसे कई प्रमुख शहरों से आसानी से पहुंचने योग्य बनाता है:

- **औरंगाबाद** — लगभग 30 किमी (~35 मिनट)
- **गया** — लगभग 40 किमी (~50 मिनट)
- **डेहरी-ऑन-सोन** — लगभग 45 किमी (~55 मिनट)
- **सासाराम** — लगभग 50 किमी (~60 मिनट)
- **कोचस (रोहतास)** — लगभग 25 किमी (~30 मिनट)

### पूर्वी चम्पारण हांडी मीट को क्या खास बनाता है?

**1. मल्टी-वैरायटी मटन मेन्यू**
हम कई तरह की तैयारियां प्रदान करते हैं:
- चम्पारण हांडी मटन (हमारी विशेषता)
- चम्पारण हांडी चिकन
- कढ़ाई चिकन
- मटन बिरयानी और चिकन बिरयानी
- पूर्ण भोजन के लिए थाली विकल्प

**2. पुरानी पारंपरिक रेसिपी**
हमारी रेसिपी रेस्तरां की स्थापना के बाद से नहीं बदली है। मालिक **रोहित चौहान** व्यक्तिगत रूप से खाना पकाने की निगरानी करते हैं।

**3. रोजाना ताजी सामग्री**
हम हर दिन ताजा मटन मंगाते हैं। कोई फ्रोजन मीट नहीं, कोई शॉर्टकट नहीं।

### हमसे कैसे पहुंचें

**पता**: मुख्य सड़क, रफीगंज, गया जिला, बिहार — 824125

📞 **कॉल/WhatsApp**: +91 7424961362
🕐 **समय**: सुबह 11 बजे – रात 11 बजे (सभी दिन)
    `,
    image1: blogImg3,
    image2: blogImg4,
    image1Alt: 'Grand mutton thali platter — Purvi Champaran Handi Meat Rafiganj near Gaya Aurangabad',
    image2Alt: 'Traditional Indian mutton thali — best non veg restaurant near Gaya Sasaram Bihar',
    category: 'local-seo',
    tags: ['Rafiganj', 'Gaya', 'Aurangabad', 'Sasaram', 'Non Veg Restaurant', 'Mutton Near Me'],
    author: 'Rohit Chauhan',
    publishedAt: '2025-04-18',
    readTime: 7,
    seoKeywords: 'best non veg restaurant Rafiganj, mutton near Gaya, mutton near Aurangabad, best dhaba near Sasaram, Purvi Champaran Handi Meat Rafiganj Bihar, non veg hotel near Dehri-on-Sone',
  },
];
