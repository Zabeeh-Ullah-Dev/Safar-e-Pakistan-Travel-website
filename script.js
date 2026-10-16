/**
 * Safar-e-Pakistan — Premium Tourism & Travel Architecture
 * Vanilla JavaScript Core Application
 */

// ==========================================================================
// 1. Destination Catalog (Authentic Pakistani Locations)
// ==========================================================================
const DESTINATIONS_DATA = [
  {
    id: "hunza-valley",
    name: "Hunza Valley",
    region: "Gilgit-Baltistan",
    category: "Mountains",
    isFeatured: true,
    image: "Assets/passu_cones_hunza_1791880607796.jpg",
    description: "A legendary mountain kingdom surrounded by Rakaposhi, Ultar Sar, and Passu Cones, celebrated for ancient stone forts and warm hospitality.",
    bestSeason: "April to October",
    idealDuration: "5 – 7 Days",
    estimatedBudget: "PKR 75,000 – 140,000 per person",
    highlights: [
      "Baltit & Altit Forts with 900-year history",
      "Attabad Lake turquoise boat cruises",
      "Passu Cathedral mountain spires & hanging bridge",
      "Traditional apricot orchards in blossom or autumn gold"
    ],
    travelTips: "Fly to Gilgit or embark on the iconic Karakoram Highway drive from Islamabad. Ensure warm layers even in summer evenings."
  },
  {
    id: "skardu-valley",
    name: "Skardu & Katpana Desert",
    region: "Gilgit-Baltistan",
    category: "Valleys",
    isFeatured: false,
    image: "Assets/skardu_katpana_desert_1791880708546.jpg",
    description: "The gateway to K2, where the world's highest cold desert dunes meet glacial lakes and the mighty Indus River.",
    bestSeason: "May to September",
    idealDuration: "6 – 8 Days",
    estimatedBudget: "PKR 85,000 – 160,000 per person",
    highlights: [
      "Katpana Cold Desert dunes framed by snow peaks",
      "Upper Kachura and Shangrila (Lower Kachura) Lakes",
      "Deosai National Park — The Land of Giants",
      "Ancient Kharpocho Fort overlooking the valley"
    ],
    travelTips: "Daily flights operate between Islamabad and Skardu weather permitting. 4x4 vehicles are required for Deosai Plains."
  },
  {
    id: "fairy-meadows",
    name: "Fairy Meadows & Nanga Parbat",
    region: "Gilgit-Baltistan",
    category: "Adventure Tourism",
    isFeatured: false,
    image: "Assets/fairy_meadows_nanga_1791880740702.jpg",
    description: "Lush alpine grasslands situated beneath the sheer 8,126-meter north face (Raikot Face) of Nanga Parbat, the 'Killer Mountain'.",
    bestSeason: "June to September",
    idealDuration: "3 – 4 Days",
    estimatedBudget: "PKR 45,000 – 80,000 per person",
    highlights: [
      "Thrilling 4x4 jeep ride on Raikot cliff road",
      "Hike to Nanga Parbat Base Camp (Beyal Camp)",
      "Unpolluted starry night skies and Milky Way views",
      "Rustic wooden alpine cabins surrounded by pines"
    ],
    travelTips: "Sturdy hiking boots and walking poles are strongly recommended for the 3-hour trek from Tato village."
  },
  {
    id: "swat-valley",
    name: "Swat & Kalam Valley",
    region: "Khyber Pakhtunkhwa",
    category: "Valleys",
    isFeatured: true,
    image: "Assets/swat_kalam_valley_1791880775323.jpg",
    description: "Often called the 'Switzerland of the East', Swat boasts emerald river valleys, deodar pine forests, and ancient Gandhara Buddhist heritage.",
    bestSeason: "Year-round (Skiing in winter, hiking in summer)",
    idealDuration: "3 – 5 Days",
    estimatedBudget: "PKR 40,000 – 75,000 per person",
    highlights: [
      "Malam Jabba ski resort & scenic chairlift",
      "Ushu Forest and Mahodand glacial lake",
      "Centuries-old wooden mosques of Kalam",
      "Swat Museum's exquisite Gandhara art artifacts"
    ],
    travelTips: "Connected via the modern Swat Motorway. A comfortable 4-5 hour drive from Islamabad."
  },
  {
    id: "lahore-walled-city",
    name: "Walled City of Lahore & Fort",
    region: "Punjab",
    category: "Historical Places",
    isFeatured: false,
    image: "Assets/badshahi_mosque_lahore_1791880582096.jpg",
    description: "The cultural heart of Pakistan, featuring UNESCO-inscribed Mughal architecture, centuries-old bazaars, and celebrated culinary streets.",
    bestSeason: "October to March",
    idealDuration: "2 – 3 Days",
    estimatedBudget: "PKR 25,000 – 50,000 per person",
    highlights: [
      "Badshahi Mosque and Sheesh Mahal (Palace of Mirrors)",
      "Wazir Khan Mosque with intricate Persian fresco tilework",
      "Shahi Hammam (Royal Baths) restored heritage",
      "Fort Road Food Street overlooking illuminated Mughal domes"
    ],
    travelTips: "Explore on foot or via historic Rangeela Rickshaws inside the 12 historic gates of the Walled City."
  },
  {
    id: "mohenjo-daro",
    name: "Mohenjo-daro & Indus Heritage",
    region: "Sindh",
    category: "Historical Places",
    isFeatured: false,
    image: "Assets/mohenjo_daro_stupa_1791880653157.jpg",
    description: "One of the world's earliest major urban settlements (2500 BCE), showcasing revolutionary Bronze Age drainage, grid planning, and baked-brick engineering.",
    bestSeason: "November to February",
    idealDuration: "2 – 3 Days",
    estimatedBudget: "PKR 35,000 – 65,000 per person",
    highlights: [
      "The Great Bath and ancient Buddhist stupa mound",
      "Pioneering covered brick drainage and grain storage systems",
      "Mohenjo-daro Museum housing Indus seals and pottery",
      "Sindhi folk hospitality along the lower Indus basin"
    ],
    travelTips: "Accessible from Sukkur or Larkana airport. Winter months offer ideal mild temperatures for archaeological walking."
  },
  {
    id: "kund-malir",
    name: "Hingol & Kund Malir Beach",
    region: "Balochistan",
    category: "Beaches",
    isFeatured: false,
    image: "Assets/kund_malir_beach_1791880679996.jpg",
    description: "Where golden desert dunes cascade into the turquoise waters of the Arabian Sea along the dramatic Makran Coastal Highway.",
    bestSeason: "October to March",
    idealDuration: "2 – 3 Days",
    estimatedBudget: "PKR 30,000 – 55,000 per person",
    highlights: [
      "Princess of Hope natural rock formation",
      "The Great Sphinx of Balochistan wind-carved canyon",
      "Pristine beaches along the Makran Coastal Highway",
      "Chandra Gup active mud volcanoes of Hingol"
    ],
    travelTips: "A scenic 4-hour drive from Karachi along Highway N-10. Carry plenty of drinking water and sun protection."
  },
  {
    id: "neelum-valley",
    name: "Neelum Valley & Ratti Gali",
    region: "Azad Jammu and Kashmir",
    category: "Lakes",
    isFeatured: false,
    image: "Assets/neelum_ratti_gali_1791880813658.jpg",
    description: "Bow-shaped river valley filled with alpine meadows, walnut forests, and the sparkling turquoise waters of Ratti Gali glacial lake.",
    bestSeason: "May to September",
    idealDuration: "4 – 5 Days",
    estimatedBudget: "PKR 45,000 – 85,000 per person",
    highlights: [
      "Ratti Gali glacial alpine lake at 12,130 feet",
      "Arang Kel — The pearl village on the mountain ledge",
      "Ancient Sharda Peeth university ruins",
      "Wooden suspension bridges over rushing Neelum River"
    ],
    travelTips: "Accessible via Muzaffarabad. Cable chairlift connects Kel to Arang Kel village with a short uphill hike."
  },
  {
    id: "kumrat-valley",
    name: "Kumrat Valley & Dir",
    region: "Khyber Pakhtunkhwa",
    category: "Valleys",
    isFeatured: false,
    image: "Assets/kumrat_valley_forest_1791880948439.jpg",
    description: "An untouched haven of towering deodar forests, roaring Panjkora River rapids, cascading waterfalls, and serene mountain camping.",
    bestSeason: "May to September",
    idealDuration: "3 – 5 Days",
    estimatedBudget: "PKR 40,000 – 70,000 per person",
    highlights: [
      "Dense virgin Deodar cedar forest trails",
      "Jandrai & Katora glacial alpine lake trek",
      "Riverside camping and trout fishing spots",
      "Do Kala and Thal wooden heritage architecture"
    ],
    travelTips: "Jeeps are required beyond Thal village. Excellent destination for camping and eco-trekking enthusiasts."
  },
  {
    id: "faisal-mosque",
    name: "Faisal Mosque & Margalla Hills",
    region: "Islamabad Capital Territory",
    category: "Cultural Experiences",
    isFeatured: false,
    image: "Assets/faisal_mosque_islamabad_1791880630079.jpg",
    description: "The national mosque of Pakistan, styled after a Bedouin tent against the verdant slopes of the Margalla National Park.",
    bestSeason: "Year-round",
    idealDuration: "1 – 2 Days",
    estimatedBudget: "PKR 15,000 – 35,000 per person",
    highlights: [
      "Contemporary eight-sided concrete shell architecture by Vedat Dalokay",
      "Panoramic Margalla Hills hiking trails (Trail 3 & Trail 5)",
      "Monal and Daman-e-Koh mountain vantage viewpoints",
      "Lok Virsa Folk Heritage Museum showcasing nationwide artisans"
    ],
    travelTips: "Modest attire is required when visiting the mosque interior. Dawn and sunset offer breathtaking light over the marble plaza."
  },
  {
    id: "rohtas-fort",
    name: "Rohtas Fort",
    region: "Punjab",
    category: "Historical Places",
    isFeatured: false,
    image: "Assets/rohtas_fort_jhelum_1791880855711.jpg",
    description: "A monumental 16th-century fortress built by Sher Shah Suri, featuring massive stone defensive walls extending over 4 kilometers.",
    bestSeason: "October to April",
    idealDuration: "1 Day (Day excursion from Islamabad/Lahore)",
    estimatedBudget: "PKR 12,000 – 25,000 per person",
    highlights: [
      "Twelve colossal entry gates including Sohail Gate",
      "Unconquered stone bastions and ramparts",
      "Mughal and Pashtun military architecture fusion",
      "Panoramic views over the Kahahan river gorge"
    ],
    travelTips: "Located near Jhelum, just a 2-hour drive from Islamabad via the Grand Trunk Road."
  },
  {
    id: "ziarat-juniper",
    name: "Ziarat & Juniper Forest",
    region: "Balochistan",
    category: "Mountains",
    isFeatured: false,
    image: "Assets/ziarat_quaid_residency_1791880899504.jpg",
    description: "Home to the world's second-largest juniper forest with trees over 5,000 years old, plus the historic wooden Quaid-e-Azam Residency.",
    bestSeason: "April to October",
    idealDuration: "2 – 3 Days",
    estimatedBudget: "PKR 30,000 – 60,000 per person",
    highlights: [
      "Ancient Juniperus macropoda forest ecosystem",
      "Historic Quaid-e-Azam wooden residency museum",
      "Chashma Walk mountain spring path",
      "Prospect Point scenic lookout over valley gorges"
    ],
    travelTips: "Located approximately 125 km from Quetta. Temperatures remain refreshingly cool throughout summer."
  }
];

// ==========================================================================
// 2. Sample Itineraries Data (Section 11)
// ==========================================================================
const ITINERARIES_DATA = [
  {
    id: "hunza-5-days",
    title: "5 Days in Hunza Valley",
    duration: "5 Days · 4 Nights",
    region: "Gilgit-Baltistan",
    budget: "PKR 85,000 – 135,000",
    image: "Assets/passu_cones_hunza_1791880607796.jpg",
    summary: "From Islamabad fly or drive along the Karakoram Highway to Karimabad, boat on Attabad Lake, and marvel at Passu Cones.",
    days: [
      { day: "Day 1", title: "Arrival in Gilgit & Transfer to Karimabad", text: "Scenic drive along the Hunza River, Rakaposhi viewpoint tea stop, sunset check-in with views of Ultar Sar." },
      { day: "Day 2", title: "Baltit & Altit Forts, Eagle's Nest Sunset", text: "Guided tour through 900-year-old Baltit Fort, traditional walnut cake in Karimabad bazaar, dusk at Duikar." },
      { day: "Day 3", title: "Attabad Lake & Passu Cathedral", text: "Electric boat cruise across turquoise Attabad Lake, traverse the scenic Passu suspension bridge, explore Borith Lake." },
      { day: "Day 4", title: "Khunjerab Pass — The World's Highest Border", text: "Journey through Karakoram National Park up to 4,693 meters at the Pakistan-China border gate." },
      { day: "Day 5", title: "Local Food Tasting & Journey Home", text: "Savor Hunza Chapshuro and dried apricots, return transfer to Gilgit airport." }
    ],
    tips: "Keep original CNIC/passports handy for checkpoints. Hydrate well when ascending above 3,500 meters."
  },
  {
    id: "skardu-7-days",
    title: "7 Days Exploring Skardu & Deosai",
    duration: "7 Days · 6 Nights",
    region: "Gilgit-Baltistan",
    budget: "PKR 110,000 – 175,000",
    image: "Assets/skardu_katpana_desert_1791880708546.jpg",
    summary: "Experience glacial lakes, the surreal Katpana cold desert dunes, and high-altitude wild plains of Deosai.",
    days: [
      { day: "Day 1", title: "Flight to Skardu & Shangrila Resort", text: "Dramatic flight over Nanga Parbat, check-in by Lower Kachura Lake." },
      { day: "Day 2", title: "Upper Kachura Lake & Katpana Dunes", text: "Boat ride on pristine Upper Kachura, sunset over Katpana cold desert." },
      { day: "Day 3", title: "Shigar Valley & Historic Shigar Fort", text: "Visit the restored 17th-century Raja Palace and Sarfaranga cold desert." },
      { day: "Day 4", title: "Deosai National Park Wilderness Safari", text: "Traverse the 4,000m plateau, Sheosar Lake, and search for Himalayan brown bears." },
      { day: "Day 5", title: "Khaplu Palace & Chaqchan Mosque", text: "Timber-and-stone architectural marvels in Ghanche district." },
      { day: "Day 6", title: "Manthal Buddha Rock & Kharpocho Fort", text: "7th-century Buddhist relief carving and citadel hike." },
      { day: "Day 7", title: "Departure", text: "Return flight to Islamabad with memories of the Karakoram giants." }
    ],
    tips: "Deosai is accessible only from mid-June to late September due to heavy snow."
  },
  {
    id: "swat-3-days",
    title: "3 Days in Swat & Kalam",
    duration: "3 Days · 2 Nights",
    region: "Khyber Pakhtunkhwa",
    budget: "PKR 38,000 – 65,000",
    image: "Assets/swat_kalam_valley_1791880775323.jpg",
    summary: "A swift mountain retreat through the Swat motorway to pine forests, river rapids, and crisp alpine air.",
    days: [
      { day: "Day 1", title: "Islamabad to Mingora & Malam Jabba", text: "Drive via Swat Motorway, ride the Malam Jabba chairlift, explore White Palace Marghazar." },
      { day: "Day 2", title: "Ascent to Kalam & Ushu Pine Forest", text: "Drive along the roaring Swat river, walk among towering deodars in Ushu forest." },
      { day: "Day 3", title: "Mahodand Lake & Return", text: "Jeep excursion to trout-rich Mahodand lake and waterfall before returning." }
    ],
    tips: "A perfect weekend getaway from Peshawar or Islamabad. Good asphalt road network."
  },
  {
    id: "lahore-weekend",
    title: "A Weekend in Lahore's Walled City",
    duration: "2 Days · 2 Nights",
    region: "Punjab",
    budget: "PKR 25,000 – 48,000",
    image: "Assets/badshahi_mosque_lahore_1791880582096.jpg",
    summary: "Immerse yourself in Mughal splendor, vibrant spice bazaars, royal hammams, and world-renowned street food.",
    days: [
      { day: "Day 1", title: "The Royal Trail & Badshahi Mosque", text: "Enter Delhi Gate, visit Shahi Hammam, Wazir Khan Mosque, Lahore Fort Sheesh Mahal, dinner at Food Street." },
      { day: "Day 2", title: "Anarkali, Shalimar Gardens & Wagah", text: "Morning stroll in Shalimar Gardens, heritage shopping in Anarkali, afternoon Wagah Border flag ceremony." }
    ],
    tips: "Wear comfortable walking shoes. Early morning is the best time for photography inside Wazir Khan Mosque."
  },
  {
    id: "neelum-4-days",
    title: "4 Days in Neelum Valley & Arang Kel",
    duration: "4 Days · 3 Nights",
    region: "Azad Jammu and Kashmir",
    budget: "PKR 48,000 – 82,000",
    image: "Assets/neelum_ratti_gali_1791880813658.jpg",
    summary: "Rushing crystal rivers, verdant hillside terraces, cable chairlifts, and alpine lakes.",
    days: [
      { day: "Day 1", title: "Islamabad to Keran via Muzaffarabad", text: "Follow the winding Neelum River gorge, riverside evening bonfire in Keran." },
      { day: "Day 2", title: "Sharda University Ruins to Kel", text: "Visit 9th-century stone temple ruins of Sharda Peeth, proceed to Kel." },
      { day: "Day 3", title: "Arang Kel Meadow & Ratti Gali Excursion", text: "Ride chairlift to fairy-tale Arang Kel village, lush forest hike." },
      { day: "Day 4", title: "Scenic Journey Back", text: "Traditional Kashmiri breakfast of Bakarkhani and pink tea, return drive." }
    ],
    tips: "Carry cash as automated ATMs are limited in upper Neelum villages."
  }
];

// ==========================================================================
// 3. Culture Stories Data (Section 9)
// ==========================================================================
const CULTURE_DATA = [
  {
    id: "mughal-architecture",
    title: "Mughal & Gandharan Architecture",
    region: "Punjab & KP",
    image: "Assets/badshahi_mosque_lahore_1791880582096.jpg",
    description: "From the red sandstone courtyards of the Badshahi Mosque to the stone stupas of Taxila, Pakistan's architecture encapsulates millennia of empire and enlightenment.",
    highlights: ["Symmetry and geometric tilework", "Pietra dura marble inlay", "Ancient Gandhara Greco-Buddhist stone friezes"]
  },
  {
    id: "historic-bazaars",
    title: "Centuries-Old Living Bazaars",
    region: "Peshawar & Lahore",
    image: "Assets/peshawar_qissa_khwani_bazar.jpg",
    description: "Peshawar's Qissa Khwani ('Bazaar of the Storytellers') and Lahore's Kashmiri Bazaar have welcomed silk road merchants, storytellers, and spice traders for over seven hundred years.",
    highlights: ["Green cardamom kahwa teahouses", "Handcrafted copper & brassware", "Traditional Peshawari chappal artisans"]
  },
  {
    id: "handicrafts-textiles",
    title: "Master Crafts & Indigenous Textiles",
    region: "Sindh, Punjab & Gilgit",
    image: "Assets/mohenjo_daro_stupa_1791880653157.jpg",
    description: "Indigo-dyed Ajrak block prints from Bhit Shah, Multani blue ceramic pottery, and hand-embroidered woolen pashmina shawls of northern mountain valleys.",
    highlights: ["Natural vegetable and indigo dye methods", "Centuries-old wooden block carving", "Intricate silk geometric threadwork"]
  },
  {
    id: "sufi-tradition",
    title: "Sufi Mysticism, Poetry & Rubab",
    region: "Across All Regions",
    image: "Assets/kumrat_valley_forest_1791880948439.jpg",
    description: "Spiritual poetry by Bulleh Shah, Shah Abdul Latif Bhittai, and Rahman Baba, celebrated with the ecstatic rhythms of Qawwali and the contemplative strums of the Rubab.",
    highlights: ["Ecstatic spiritual gatherings", "Universal themes of peace and human love", "Folk instruments: Rubab, Dhol, and Alghoza"]
  }
];

// ==========================================================================
// 4. Taste Pakistan Culinary Catalog (Section 10)
// ==========================================================================
const FOOD_DATA = [
  {
    name: "Peshawari Chapli Kebab",
    region: "Khyber Pakhtunkhwa",
    image: "Assets/peshawari_chapli_kebab_1791880999885.jpg",
    description: "Crisp-edged minced beef patties blended with crushed pomegranate seeds (anardana), coriander, tomatoes, and fried in pure animal fat on colossal iron tawas.",
    notes: "Spiced with crushed chili, coriander seeds, fresh mint, served with hot naan and tamarind chutney."
  },
  {
    name: "Balochi Sajji",
    region: "Balochistan",
    image: "Assets/balochi_sajji_roast_1791881055099.jpg",
    description: "Tender whole lamb or chicken skewered around open mesquite wood fires, seasoned simply with rock salt and papaya, served alongside fragrant rice.",
    notes: "Slow-roasted for 3-4 hours over embers, capturing pure smoky tenderness with zero artificial spices."
  },
  {
    name: "Sindhi Biryani",
    region: "Sindh",
    image: "Assets/sindhi_biryani_rice_1791881109654.jpg",
    description: "A celebrated layered rice masterpiece featuring tender marinated meat, saffron basmati, tart dried prunes (aaloo bukhara), potatoes, and green chilies.",
    notes: "Renowned across South Asia for its vibrant tanginess, aromatic whole spices, and rich golden color."
  },
  {
    name: "Traditional Hunza Chapshuro",
    region: "Gilgit-Baltistan",
    image: "Assets/hunza_chapshuro_bread_1791881296058.jpg",
    description: "Often called 'Hunza mountain pizza', this wholesome baked flatbread is stuffed with finely chopped meat, onions, cilantro, and pure cold-pressed apricot kernel oil.",
    notes: "Baked over stone griddles; highly nutritious sustenance for high-altitude mountain journeys."
  },
  {
    name: "Lahori Nihari & Karahi",
    region: "Punjab",
    image: "Assets/lahori_nihari_curry_1791881166696.jpg",
    description: "Slow-cooked overnight beef shank stew rich with bone marrow and warming spices, garnished with julienned ginger, crisp green chilies, and fresh lemon.",
    notes: "An imperial Mughal breakfast tradition revered for centuries across Lahore's historic gates."
  },
  {
    name: "Kashmiri Noon Chai (Pink Tea)",
    region: "Azad Kashmir",
    image: "Assets/kashmiri_noon_chai_1791881228350.jpg",
    description: "Distinctive savory rose-pink tea prepared from green tea leaves aerated with sea salt, baking soda, boiled milk, and topped with crushed pistachios and almonds.",
    notes: "Served with traditional Kashmiri bakery items such as Kulcha and Bakarkhani on cold mountain mornings."
  }
];

// ==========================================================================
// 5. State Management & LocalStorage
// ==========================================================================
const STORAGE_KEY = "safarepakistan_saved_v1";

function getSavedDestinations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveDestinationToStorage(id) {
  const current = getSavedDestinations();
  if (!current.includes(id)) {
    current.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  }
  updateSavedBadge();
}

function removeDestinationFromStorage(id) {
  let current = getSavedDestinations();
  current = current.filter(item => item !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  updateSavedBadge();
}

function isDestinationSaved(id) {
  return getSavedDestinations().includes(id);
}

function updateSavedBadge() {
  const count = getSavedDestinations().length;
  const badges = document.querySelectorAll(".saved-counter");
  badges.forEach(b => {
    b.textContent = count;
  });
}

// ==========================================================================
// 6. DOM Initialization & Event Handlers
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHeroParallax();
  renderDestinations(DESTINATIONS_DATA);
  initDestinationFilters();
  initTravelPlanner();
  renderCulinaryCards();
  renderItineraries();
  initModals();
  initSavedDrawer();
  initNewsletter();
  initScrollAnimations();
  initScrollProgress();
  initBackToTop();
  initAnimatedCounters();
  initCardTilt();
  initDeveloperInteractions();
  updateSavedBadge();
});

// --------------------------------------------------------------------------
// Navigation & Mobile Menu
// --------------------------------------------------------------------------
function initNavbar() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const drawerBackdrop = document.querySelector(".drawer-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile Drawer toggles
  function openMobileMenu() {
    mobileToggle.classList.add("active");
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("active");
    mobileToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove("active");
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("active");
    mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  // ESC key closes mobile menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("open")) {
      closeMobileMenu();
    }
  });
}

// --------------------------------------------------------------------------
// Hero Vertical Parallax Effect (Section 4)
// --------------------------------------------------------------------------
function initHeroParallax() {
  const heroSection = document.getElementById("hero-section") || document.querySelector(".hero-section");
  const heroBgImg = document.getElementById("hero-bg-img") || document.querySelector(".hero-bg-img");
  if (!heroSection || !heroBgImg) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroHeight = heroSection.offsetHeight;

    // Only compute while hero is visible in or near viewport
    if (scrollY <= heroHeight + 60) {
      // Subtle vertical speed ratio: 0.32 drift creates natural mountain depth
      const parallaxOffset = scrollY * 0.32;
      heroBgImg.style.transform = `translate3d(0, ${parallaxOffset.toFixed(1)}px, 0) scale(1.05)`;
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Initial calculation on page load
  updateParallax();
}

// --------------------------------------------------------------------------
// Destination Explorer (Section 6)
// --------------------------------------------------------------------------
function renderDestinations(items) {
  const grid = document.getElementById("destinations-grid");
  const countEl = document.getElementById("results-count");
  if (!grid) return;

  if (countEl) {
    countEl.textContent = `Showing ${items.length} ${items.length === 1 ? "destination" : "destinations"}`;
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="destinations-empty">
        <h3>No matching destinations found</h3>
        <p>Try searching for a different Pakistani province, valley, or landmark.</p>
        <button type="button" class="btn btn-secondary mt-4" id="reset-filters-btn">Reset All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const searchInput = document.getElementById("destination-search-input");
        if (searchInput) searchInput.value = "";
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        const allBtn = document.querySelector('.filter-btn[data-category="all"]');
        if (allBtn) allBtn.classList.add("active");
        renderDestinations(DESTINATIONS_DATA);
      });
    }
    return;
  }

  grid.innerHTML = items.map((dest, idx) => {
    const isFeatured = dest.isFeatured && idx % 3 === 0;
    const isSaved = isDestinationSaved(dest.id);
    return `
      <article class="destination-card ${isFeatured ? 'card-featured' : ''}" data-id="${dest.id}">
        <div class="card-image-wrap">
          <img src="${dest.image}" alt="${dest.name}, ${dest.region}" class="card-image" loading="lazy" />
          <button 
            type="button" 
            class="card-save-btn ${isSaved ? 'saved' : ''}" 
            aria-label="${isSaved ? 'Remove from saved' : 'Save destination'} ${dest.name}" 
            data-save-id="${dest.id}"
            title="${isSaved ? 'Saved to your list' : 'Save destination'}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <div class="card-meta-line">
            <span class="card-meta-region">${dest.region}</span>
            <span aria-hidden="true">·</span>
            <span>${dest.category}</span>
          </div>
          <h3 class="card-title">${dest.name}</h3>
          <p class="card-desc">${dest.description}</p>
          <div class="card-footer">
            <span class="card-season">Best: <strong>${dest.bestSeason}</strong></span>
            <button type="button" class="btn-text explore-dest-btn" data-dest-id="${dest.id}">
              Explore Destination
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach card event listeners
  grid.querySelectorAll(".card-save-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-save-id");
      if (isDestinationSaved(id)) {
        removeDestinationFromStorage(id);
        btn.classList.remove("saved");
        btn.querySelector("svg").setAttribute("fill", "none");
      } else {
        saveDestinationToStorage(id);
        btn.classList.add("saved");
        btn.querySelector("svg").setAttribute("fill", "currentColor");
      }
    });
  });

  grid.querySelectorAll(".explore-dest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-dest-id");
      openDestinationModal(id);
    });
  });

  // Re-observe destination cards with Intersection Observer for scroll-triggered animation
  observeDestinationCards();
}

function initDestinationFilters() {
  const searchInput = document.getElementById("destination-search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let activeCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    let filtered = DESTINATIONS_DATA;

    if (activeCategory !== "all") {
      filtered = filtered.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.region.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    renderDestinations(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category") || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
}

// --------------------------------------------------------------------------
// Destination Detail Modal
// --------------------------------------------------------------------------
function openDestinationModal(destId) {
  const dest = DESTINATIONS_DATA.find(d => d.id === destId);
  if (!dest) return;

  const modal = document.getElementById("destination-modal");
  const content = document.getElementById("destination-modal-content");
  if (!modal || !content) return;

  const isSaved = isDestinationSaved(dest.id);

  content.innerHTML = `
    <div class="modal-media-header">
      <img src="${dest.image}" alt="${dest.name}" />
      <div class="modal-media-gradient"></div>
      <div class="modal-header-meta">
        <div class="modal-region">${dest.region} · ${dest.category}</div>
        <h2 class="modal-title">${dest.name}</h2>
      </div>
    </div>
    <div class="modal-body">
      <p style="font-size: 1.1rem; line-height: 1.7; color: var(--charcoal-700); margin-bottom: 1.5rem;">
        ${dest.description}
      </p>

      <h4 class="modal-section-title">Key Experiences & Highlights</h4>
      <div class="modal-highlights-grid">
        ${dest.highlights.map(h => `
          <div class="modal-highlight-item">
            <h5>Highlight</h5>
            <p>${h}</p>
          </div>
        `).join("")}
      </div>

      <div style="background-color: var(--ivory-50); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); padding: 1.25rem 1.5rem; margin-top: 1.5rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--pine-900); margin-bottom: 0.5rem;">Practical Traveler Notes</h4>
        <p style="font-size: 0.88rem; color: var(--charcoal-600); margin-bottom: 0.75rem;">${dest.travelTips}</p>
        <div style="display: flex; gap: 2rem; flex-wrap: wrap; font-size: 0.85rem; color: var(--charcoal-700); border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
          <div>Recommended Stay: <strong>${dest.idealDuration}</strong></div>
          <div>Optimal Weather Window: <strong>${dest.bestSeason}</strong></div>
          <div>Estimated Cost: <strong>${dest.estimatedBudget}</strong></div>
        </div>
      </div>

      <div class="modal-footer-action-bar">
        <button type="button" class="btn btn-secondary modal-save-toggle" data-modal-save="${dest.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          ${isSaved ? 'Saved in Itinerary List' : 'Save to My Places'}
        </button>
        <a href="#planner-section" class="btn btn-emerald close-modal-to-plan" data-dest-name="${dest.name}">
          Plan a Trip to ${dest.name}
        </a>
      </div>
    </div>
  `;

  // Attach modal action listeners
  const saveBtn = content.querySelector(".modal-save-toggle");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      if (isDestinationSaved(dest.id)) {
        removeDestinationFromStorage(dest.id);
        saveBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          Save to My Places
        `;
      } else {
        saveDestinationToStorage(dest.id);
        saveBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          Saved in Itinerary List
        `;
      }
      renderDestinations(DESTINATIONS_DATA);
    });
  }

  const planLink = content.querySelector(".close-modal-to-plan");
  if (planLink) {
    planLink.addEventListener("click", () => {
      closeAllModals();
      const regionSelect = document.getElementById("plan-region");
      if (regionSelect) {
        if (dest.region.includes("Gilgit")) regionSelect.value = "Gilgit-Baltistan";
        else if (dest.region.includes("Khyber")) regionSelect.value = "Khyber Pakhtunkhwa";
        else if (dest.region.includes("Punjab")) regionSelect.value = "Punjab";
        else if (dest.region.includes("Sindh")) regionSelect.value = "Sindh";
        else if (dest.region.includes("Balochistan")) regionSelect.value = "Balochistan";
        else if (dest.region.includes("Kashmir")) regionSelect.value = "Azad Jammu and Kashmir";
      }
    });
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// --------------------------------------------------------------------------
// Interactive Travel Planner (Section 7)
// --------------------------------------------------------------------------
function initTravelPlanner() {
  const form = document.getElementById("travel-planner-form");
  const resultsContainer = document.getElementById("planner-results-container");

  if (!form || !resultsContainer) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const startCity = document.getElementById("plan-start-city").value;
    const region = document.getElementById("plan-region").value;
    const style = document.getElementById("plan-style").value;
    const travelers = parseInt(document.getElementById("plan-travelers").value, 10) || 2;
    const duration = parseInt(document.getElementById("plan-duration").value, 10) || 5;
    const budgetTier = document.getElementById("plan-budget").value;

    // Budget multiplier calculation based on selected tier and travelers
    let perPersonPerDay = 12000;
    let tierLabel = "Comfort Class";

    if (budgetTier === "budget") {
      perPersonPerDay = 7500;
      tierLabel = "Authentic Backpacker & Guesthouse";
    } else if (budgetTier === "luxury") {
      perPersonPerDay = 28000;
      tierLabel = "Premium Heritage & Boutique Hotel";
    }

    const totalEstimatedPKR = perPersonPerDay * duration * travelers;
    const formattedTotalPKR = totalEstimatedPKR.toLocaleString("en-PK");

    // Dynamic suggested region & destination matching
    let targetDestinations = DESTINATIONS_DATA;
    if (region !== "all") {
      targetDestinations = DESTINATIONS_DATA.filter(d => d.region === region);
      if (targetDestinations.length === 0) targetDestinations = DESTINATIONS_DATA.slice(0, 3);
    } else {
      if (style === "Adventure") {
        targetDestinations = DESTINATIONS_DATA.filter(d => d.category === "Mountains" || d.category === "Adventure Tourism");
      } else if (style === "Cultural Tour") {
        targetDestinations = DESTINATIONS_DATA.filter(d => d.category === "Historical Places" || d.category === "Cultural Experiences");
      } else {
        targetDestinations = DESTINATIONS_DATA.slice(0, 3);
      }
    }

    const primaryDest = targetDestinations[0] || DESTINATIONS_DATA[0];

    // Generate dynamic itinerary schedule based on duration
    const schedule = [];
    schedule.push({
      day: "Day 1",
      title: `Departure from ${startCity} to ${primaryDest.region}`,
      desc: `Morning transit from ${startCity}. Enjoy scenic road travel or air connectivity, checking in to local accommodation with evening acclimatization.`
    });

    for (let d = 2; d < duration; d++) {
      const highlight = primaryDest.highlights[(d - 2) % primaryDest.highlights.length] || "Local exploration & scenic excursion";
      schedule.push({
        day: `Day ${d}`,
        title: `Exploring ${primaryDest.name} — ${highlight.split(" ")[0]} Expedition`,
        desc: `Full day dedicated to ${highlight}. Discover local culture, tea traditions, and regional mountain landscapes.`
      });
    }

    schedule.push({
      day: `Day ${duration}`,
      title: `Souvenirs & Return Journey to ${startCity}`,
      desc: `Final stroll through regional artisan bazaars, tasting local tea and dried fruit, before evening return transit to ${startCity}.`
    });

    resultsContainer.innerHTML = `
      <div class="planner-results">
        <div class="planner-results-header">
          <div>
            <span class="eyebrow">YOUR CUSTOMIZED DISCOVERY PLAN</span>
            <h3 class="planner-results-title">${duration} Days ${style} in ${primaryDest.name}</h3>
            <p style="color: var(--charcoal-600); font-size: 0.95rem;">
              Crafted from ${startCity} for ${travelers} ${travelers === 1 ? 'traveler' : 'travelers'} · ${tierLabel}
            </p>
          </div>
          <button type="button" class="btn btn-primary" id="save-plan-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Save This Itinerary
          </button>
        </div>

        <div class="results-grid">
          <div>
            <h4 style="font-family: var(--font-serif); font-size: 1.45rem; color: var(--pine-900); margin-bottom: 1.25rem;">
              Suggested Day-by-Day Schedule
            </h4>
            <div class="suggested-itinerary-card">
              ${schedule.map(step => `
                <div class="itinerary-step">
                  <div class="step-marker">${step.day.replace("Day ", "")}</div>
                  <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.desc}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div>
            <div class="cost-breakdown-card">
              <h4 class="cost-breakdown-title">Estimated Budget Blueprint (PKR)</h4>
              <div class="cost-row">
                <span>Travelers</span>
                <span>${travelers} ${travelers === 1 ? 'person' : 'people'}</span>
              </div>
              <div class="cost-row">
                <span>Trip Duration</span>
                <span>${duration} Days / ${duration - 1} Nights</span>
              </div>
              <div class="cost-row">
                <span>Lodging & Guesthouses</span>
                <span>PKR ${(Math.round(totalEstimatedPKR * 0.42)).toLocaleString('en-PK')}</span>
              </div>
              <div class="cost-row">
                <span>Private Transport & Fuel</span>
                <span>PKR ${(Math.round(totalEstimatedPKR * 0.33)).toLocaleString('en-PK')}</span>
              </div>
              <div class="cost-row">
                <span>Regional Meals & Tea</span>
                <span>PKR ${(Math.round(totalEstimatedPKR * 0.18)).toLocaleString('en-PK')}</span>
              </div>
              <div class="cost-row">
                <span>Local Guides & Entry Passes</span>
                <span>PKR ${(Math.round(totalEstimatedPKR * 0.07)).toLocaleString('en-PK')}</span>
              </div>
              <div class="cost-row total">
                <span>Total Estimated Budget</span>
                <span id="budget-counter-total" style="color: var(--gold-accent);">PKR 0</span>
              </div>
              <div class="estimated-badge">
                * Note: Illustrative planning estimates based on prevailing hospitality rates in Pakistan. Actual costs depend on booking season and vehicle fuel prices.
              </div>
            </div>

            <div style="background-color: var(--ivory-50); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); padding: 1.5rem; margin-top: 1.5rem;">
              <h5 style="font-weight: 700; color: var(--pine-900); margin-bottom: 0.5rem;">Recommended Packing Checklist</h5>
              <ul style="font-size: 0.85rem; color: var(--charcoal-600); list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
                <li>✓ High SPF sun protection and sunglasses (high UV in northern altitudes)</li>
                <li>✓ Sturdy walking footwear and thermal layers for crisp mountain evenings</li>
                <li>✓ Physical cash reserves (ATM networks may have downtime in remote valleys)</li>
                <li>✓ Original CNIC / National ID or valid passport for security checkpoints</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    // Animate the budget number counter
    const budgetCounterEl = document.getElementById("budget-counter-total");
    if (budgetCounterEl) {
      animateNumberValue(budgetCounterEl, totalEstimatedPKR, "PKR ", "", 1200);
    }

    // Smooth scroll down to generated results
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });

    // Save plan button handler
    const savePlanBtn = document.getElementById("save-plan-btn");
    if (savePlanBtn) {
      savePlanBtn.addEventListener("click", () => {
        saveDestinationToStorage(primaryDest.id);
        savePlanBtn.innerHTML = `✓ Itinerary Saved to Bookmarks`;
        savePlanBtn.style.backgroundColor = "var(--emerald-accent)";
      });
    }
  });
}

// --------------------------------------------------------------------------
// Culinary Showcase — Taste Pakistan (Section 10)
// --------------------------------------------------------------------------
function renderCulinaryCards() {
  const container = document.getElementById("food-grid");
  if (!container) return;

  container.innerHTML = FOOD_DATA.map(food => `
    <article class="food-card">
      <div class="food-img-wrap">
        <img src="${food.image}" alt="${food.name}" loading="lazy" />
        <span class="food-region-badge">${food.region}</span>
      </div>
      <div class="food-body">
        <h3 class="food-title">${food.name}</h3>
        <p class="food-desc">${food.description}</p>
        <div class="food-spice-notes">
          <strong>Culinary Notes:</strong> ${food.notes}
        </div>
      </div>
    </article>
  `).join("");
}

// --------------------------------------------------------------------------
// Sample Itineraries (Section 11)
// --------------------------------------------------------------------------
function renderItineraries() {
  const container = document.getElementById("itineraries-grid");
  if (!container) return;

  container.innerHTML = ITINERARIES_DATA.map(itin => `
    <article class="itinerary-card" data-itin-id="${itin.id}">
      <div class="itinerary-thumb">
        <img src="${itin.image}" alt="${itin.title}" loading="lazy" />
      </div>
      <div class="itinerary-card-body">
        <span class="itinerary-duration-tag">${itin.duration} · ${itin.region}</span>
        <h3 class="itinerary-title">${itin.title}</h3>
        <p class="itinerary-snippet">${itin.summary}</p>
        <div class="itinerary-card-footer">
          <span class="itinerary-budget-est">Estimated: <strong>${itin.budget}</strong></span>
          <button type="button" class="btn-text view-itin-btn" data-itin-id="${itin.id}">
            View Itinerary
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".view-itin-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-itin-id");
      openItineraryModal(id);
    });
  });
}

function openItineraryModal(itinId) {
  const itin = ITINERARIES_DATA.find(i => i.id === itinId);
  if (!itin) return;

  const modal = document.getElementById("destination-modal");
  const content = document.getElementById("destination-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-media-header">
      <img src="${itin.image}" alt="${itin.title}" />
      <div class="modal-media-gradient"></div>
      <div class="modal-header-meta">
        <div class="modal-region">${itin.duration} · ${itin.region}</div>
        <h2 class="modal-title">${itin.title}</h2>
      </div>
    </div>
    <div class="modal-body">
      <p style="font-size: 1.05rem; line-height: 1.7; color: var(--charcoal-700); margin-bottom: 2rem;">
        ${itin.summary}
      </p>

      <h4 class="modal-section-title">Complete Day-by-Day Schedule</h4>
      <div class="suggested-itinerary-card" style="margin-bottom: 1.5rem;">
        ${itin.days.map((d, index) => `
          <div class="itinerary-step">
            <div class="step-marker">${index + 1}</div>
            <div class="step-content">
              <h4>${d.day}: ${d.title}</h4>
              <p>${d.text}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <div style="background-color: var(--pine-900); color: var(--ivory-50); border-radius: var(--radius-sm); padding: 1.5rem; margin-top: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 1rem;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--sandstone-300); letter-spacing: 0.1em;">ESTIMATED BUDGET</span>
            <div style="font-size: 1.5rem; font-family: var(--font-serif); font-weight: 700; color: var(--gold-accent);">${itin.budget}</div>
          </div>
          <div style="font-size: 0.82rem; color: var(--ivory-200); max-width: 380px;">
            ${itin.tips}
          </div>
        </div>
      </div>

      <div class="modal-footer-action-bar">
        <button type="button" class="btn btn-secondary close-modal-btn">Close Guide</button>
        <a href="#planner-section" class="btn btn-emerald close-modal-to-plan">Customize in Trip Planner</a>
      </div>
    </div>
  `;

  content.querySelector(".close-modal-btn").addEventListener("click", closeAllModals);
  content.querySelector(".close-modal-to-plan").addEventListener("click", () => {
    closeAllModals();
  });

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// --------------------------------------------------------------------------
// Hunza Valley Spotlight ("Where the mountains touch the sky")
// --------------------------------------------------------------------------
function initHunzaSpotlight() {
  const hunzaBtn = document.getElementById("discover-hunza-btn");
  if (hunzaBtn) {
    hunzaBtn.addEventListener("click", () => {
      openDestinationModal("hunza-valley");
    });
  }
}

// --------------------------------------------------------------------------
// Saved Drawer & Bookmarking
// --------------------------------------------------------------------------
function initSavedDrawer() {
  const trigger = document.getElementById("open-saved-drawer-btn");
  const drawer = document.getElementById("saved-drawer");
  const closeBtn = document.getElementById("close-saved-drawer-btn");
  const backdrop = document.querySelector(".drawer-backdrop");

  function openSavedDrawer() {
    renderSavedDrawerItems();
    drawer.classList.add("open");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeSavedDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (trigger) trigger.addEventListener("click", openSavedDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeSavedDrawer);

  // Expose to window for mobile links
  window.openSavedDrawer = openSavedDrawer;
  window.closeSavedDrawer = closeSavedDrawer;
}

function renderSavedDrawerItems() {
  const container = document.getElementById("saved-items-container");
  if (!container) return;

  const savedIds = getSavedDestinations();

  if (savedIds.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--charcoal-600);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.5;">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <h4 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--pine-900); margin-bottom: 0.5rem;">Your collection is empty</h4>
        <p style="font-size: 0.88rem;">Click the bookmark icon on any destination card to assemble your dream Pakistan travel list.</p>
      </div>
    `;
    return;
  }

  const items = DESTINATIONS_DATA.filter(d => savedIds.includes(d.id));

  container.innerHTML = items.map(item => `
    <div class="saved-item-row" data-saved-row-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" />
      <div class="saved-item-info">
        <h4>${item.name}</h4>
        <span>${item.region} · ${item.category}</span>
        <div style="margin-top: 0.35rem;">
          <button type="button" class="btn-text" style="font-size: 0.8rem;" onclick="openDestinationModal('${item.id}')">View Details</button>
        </div>
      </div>
      <button 
        type="button" 
        class="saved-item-remove-btn" 
        title="Remove destination"
        aria-label="Remove ${item.name} from saved"
        onclick="handleRemoveSavedItem('${item.id}')"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join("");
}

window.handleRemoveSavedItem = function(id) {
  removeDestinationFromStorage(id);
  renderSavedDrawerItems();
  renderDestinations(DESTINATIONS_DATA);
};

window.openDestinationModal = openDestinationModal;

// --------------------------------------------------------------------------
// General Modals
// --------------------------------------------------------------------------
function initModals() {
  const modal = document.getElementById("destination-modal");
  const closeBtn = document.getElementById("close-dest-modal-btn");

  if (closeBtn) closeBtn.addEventListener("click", closeAllModals);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
      if (window.closeSavedDrawer) window.closeSavedDrawer();
    }
  });

  initHunzaSpotlight();
}

function closeAllModals() {
  const modals = document.querySelectorAll(".modal-overlay");
  modals.forEach(m => m.classList.remove("open"));
  document.body.style.overflow = "";
}

// --------------------------------------------------------------------------
// Newsletter Subscription Validation (Section 14)
// --------------------------------------------------------------------------
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  const input = document.getElementById("newsletter-email");
  const feedback = document.getElementById("newsletter-feedback");

  if (!form || !input || !feedback) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (!value) {
      feedback.textContent = "Please provide an email address.";
      feedback.className = "newsletter-feedback error";
      input.focus();
      return;
    }

    if (!emailRegex.test(value)) {
      feedback.textContent = "Please enter a valid email address (e.g., traveler@example.com).";
      feedback.className = "newsletter-feedback error";
      input.focus();
      return;
    }

    feedback.textContent = "Khush Amdeed! You're subscribed to Safar-e-Pakistan journal dispatches.";
    feedback.className = "newsletter-feedback success";
    input.value = "";
  });
}

// --------------------------------------------------------------------------
// Intersection Observer Scroll Animations (Section Headers & Destination Cards)
// --------------------------------------------------------------------------
let destinationCardsObserver = null;

function observeDestinationCards() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cards = document.querySelectorAll("#destinations-grid .destination-card");
  if (!cards.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    cards.forEach(card => card.classList.add("is-revealed"));
    return;
  }

  // Disconnect previous observer instances to prevent duplicate observations on filtered re-renders
  if (destinationCardsObserver) {
    destinationCardsObserver.disconnect();
  }

  destinationCardsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  cards.forEach((card, index) => {
    // Stagger delay based on column position in grid (0s, 0.08s, 0.16s)
    const staggerDelay = (index % 3) * 0.08;
    card.style.setProperty("--stagger-delay", `${staggerDelay}s`);
    destinationCardsObserver.observe(card);
  });
}

function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-on-scroll, .section-header, .destination-card").forEach(el => {
      el.classList.add("is-revealed");
    });
    return;
  }

  // 1. Section Headers Observer: Refined, editorial entrance animations
  const sectionHeaderObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(".section-header").forEach(header => {
    sectionHeaderObserver.observe(header);
  });

  // 2. Generic Scroll Reveal Elements (.reveal-on-scroll)
  const generalObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });

  document.querySelectorAll(".reveal-on-scroll").forEach(el => {
    generalObserver.observe(el);
  });

  // 3. Destination Cards Observer
  observeDestinationCards();
}

// --------------------------------------------------------------------------
// Scroll Progress Indicator (Section 13)
// --------------------------------------------------------------------------
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll <= 0) {
      bar.style.width = "0%";
      return;
    }
    const currentProgress = (window.scrollY / totalScroll) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, currentProgress))}%`;
  }, { passive: true });
}

// --------------------------------------------------------------------------
// Back to Top Action
// --------------------------------------------------------------------------
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// --------------------------------------------------------------------------
// Animated Number Counters (Hero & Highlights)
// --------------------------------------------------------------------------
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll(".hero-metric-num[data-target]");
  if (counterElements.length === 0) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach(el => {
          const target = parseInt(el.getAttribute("data-target"), 10) || 0;
          const suffix = el.getAttribute("data-suffix") || "";
          animateNumberValue(el, target, "", suffix, 1600);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const metricsWrap = document.querySelector(".hero-metrics");
  if (metricsWrap) {
    observer.observe(metricsWrap);
  }
}

function animateNumberValue(element, target, prefix = "", suffix = "", duration = 1200) {
  if (!element) return;
  const startTime = performance.now();
  const startVal = 0;

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Smooth ease-out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.round(startVal + (target - startVal) * easeProgress);

    element.textContent = `${prefix}${currentVal.toLocaleString("en-PK")}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = `${prefix}${target.toLocaleString("en-PK")}${suffix}`;
    }
  }

  requestAnimationFrame(updateCount);
}

// --------------------------------------------------------------------------
// Subtle 3D Card Hover Tilt (Desktop Only)
// --------------------------------------------------------------------------
function initCardTilt() {
  // Only enable on desktop pointer devices
  if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const tiltSelector = ".destination-card, .northern-card, .food-card, .itinerary-card, .dev-social-card";

  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(tiltSelector);
    if (!card) return;
    if (card.classList.contains("destination-card") && !card.classList.contains("is-revealed")) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxDeg = card.classList.contains("dev-social-card") ? 3 : 4;
    const rotateX = ((y - centerY) / centerY) * -maxDeg;
    const rotateY = ((x - centerX) / centerX) * maxDeg;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  });

  document.addEventListener("mouseout", (e) => {
    const card = e.target.closest(tiltSelector);
    if (!card) return;
    if (!card.contains(e.relatedTarget)) {
      card.style.transform = "";
    }
  });

  // Master Developer Card Subtle Parallax Depth
  const devCard = document.getElementById("developer-card");
  if (devCard) {
    devCard.addEventListener("mousemove", (e) => {
      const rect = devCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -1.5;
      const rotateY = ((x - centerX) / centerX) * 1.5;

      devCard.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    devCard.addEventListener("mouseleave", () => {
      devCard.style.transform = "";
    });
  }
}

// --------------------------------------------------------------------------
// Developer Section Quick Copy & Toast Notifications
// --------------------------------------------------------------------------
let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function initDeveloperInteractions() {
  const copyButtons = document.querySelectorAll(".copy-trigger");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      const performSuccessFeedback = () => {
        showToast(`Copied to clipboard: ${textToCopy}`);
        const originalContent = btn.innerHTML;
        btn.classList.add("copied");

        // Swap with animated checkmark
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ${btn.classList.contains("quick-copy-chip") ? '<span style="color: #34D399;">Copied!</span>' : ''}
        `;

        setTimeout(() => {
          btn.innerHTML = originalContent;
          btn.classList.remove("copied");
        }, 2000);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
          .then(performSuccessFeedback)
          .catch(() => {
            fallbackCopy(textToCopy, performSuccessFeedback);
          });
      } else {
        fallbackCopy(textToCopy, performSuccessFeedback);
      }
    });
  });
}

function fallbackCopy(text, callback) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    if (callback) callback();
  } catch (err) {
    showToast(`Address: ${text}`);
  }
  document.body.removeChild(textarea);
}