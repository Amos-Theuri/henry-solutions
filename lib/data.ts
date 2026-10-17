export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  equipment: string[];
  idealFor: string;
  badge?: string;
}

export const CONTACT_INFO = {
  name: "Henry Solutions",
  title: "Low-Voltage Systems Technician & Contractor",
  location: "Nairobi, Kenya",
  phone: "0712867832",
  phoneFormatted: "+254 712 867 832",
  phoneTel: "tel:+254712867832",
  whatsapp: "0712867832",
  whatsappUrl: "https://wa.me/254712867832?text=Hello%20Henry%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  email: "henrysolutions@gmail.com",
  emailMailto: "mailto:henrysolutions@gmail.com",
  operatingHours: "Monday - Saturday: 7:30 AM - 7:00 PM | Emergency Fault Calls: 24/7",
  coverageKenya: "All 47 Counties in Kenya (Nairobi base with nationwide travel)",
  coverageEastAfrica: "Open to cross-border projects across East Africa (Uganda, Tanzania, Rwanda)",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "dstv-installation-repair",
    title: "DSTV Installation, Repair & Maintenance",
    shortDescription:
      "Precision satellite dish alignment, Explora decoder setup, ExtraView multi-room linking, and immediate signal loss diagnosis.",
    fullDescription:
      "Full-spectrum DSTV services for residential apartments, standalone homes, hospitality venues, and residential estates. We handle fresh dish mounting, smart LNB configuration, coaxial cable runs, decoder migrations, and restoration of degraded or lost signal (E48-32 errors).",
    features: [
      "Precision satellite alignment using digital signal spectrum meters",
      "DStv Explora, HD Zapper, and ExtraView multi-decoder linking",
      "Smart LNB, unicable splitters, and multiswitch network installations",
      "Resolution of signal fading, weather dropouts, and cable faults",
      "Neat wall-mount trunking and clean concealed cable routing",
    ],
    equipment: ["Smart LNBs", "Heavy-gauge Galvanized Dish Brackets", "RG6 Coaxial with Compression F-Connectors", "Digital Signal Finders"],
    idealFor: "Homeowners, tenants, hotels, sports lounges, and apartments needing zero-downtime entertainment.",
    badge: "Popular Service",
  },
  {
    id: "satellite-tv",
    title: "Satellite TV Services",
    shortDescription:
      "Installation and tuning of Free-to-Air (FTA), international feeds, faith-based broadcasts, and commercial multi-satellite setups.",
    fullDescription:
      "Comprehensive satellite receiver setups beyond standard pay-TV. We configure motorized or multi-LNB dishes to capture free international channels, European/Middle Eastern broadcasts, African regional stations, and institutional transmission feeds.",
    features: [
      "Free-to-Air (FTA) satellite dish positioning and transponder tuning",
      "Multi-LNB setups for tracking multiple orbital satellites on one dish",
      "C-Band and Ku-Band receiver dish installation",
      "Distribution networks for schools, colleges, mission hospitals, and embassies",
      "Receiver box software updates and transponder frequency scans",
    ],
    equipment: ["Ku-Band & C-Band Dishes", "Universal LNBs", "Satellite Distribution Amplifiers", "FTA HD Receivers"],
    idealFor: "Embassies, international staff residences, religious institutions, and educational centers.",
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance Systems",
    shortDescription:
      "End-to-end IP network and HD analog camera installation, NVR/DVR storage, night vision, and live phone viewing.",
    fullDescription:
      "Robust video surveillance architecture built to safeguard premises against unauthorized intrusion, stock shrinkage, and perimeter breaches. We install bullet, dome, and PTZ cameras with secure remote streaming to your smartphone or guardhouse workstation.",
    features: [
      "IP camera networks (PoE) and high-definition analog HD-TVI/AHD systems",
      "Remote mobile streaming on iOS and Android with secure credentials",
      "Color-at-night technology, wide dynamic range, and infrared illuminators",
      "Network Video Recorder (NVR) and DVR configuration with redundant hard drives",
      "Motion detection perimeter alerts and camera angle optimization",
    ],
    equipment: ["Hikvision & Dahua OEM Hardware", "Cat6 Solid Copper Shielded Cables", "Surveillance-grade Hard Drives", "PoE Switches"],
    idealFor: "Private residences, commercial warehouses, retail shops, farmsteads, and office complexes.",
    badge: "High Demand",
  },
  {
    id: "smart-home",
    title: "Smart Home Integration",
    shortDescription:
      "Unified automation for lighting, video doorbells, smart locks, remote gate opening, and whole-house Wi-Fi backbone.",
    fullDescription:
      "Transforming ordinary residential setups into intuitive automated living spaces. We integrate smart video door phones, automated driveway gate triggers, biometric entry, smart circuit breakers, and mesh Wi-Fi backbones that prevent dead spots.",
    features: [
      "Smart video intercoms with two-way audio and phone chime relay",
      "Biometric keypad and card access locks for front doors and offices",
      "Automated lighting controls and smart scene scheduling",
      "Low-voltage gate motor trigger modules and phone remote access",
      "Mesh Wi-Fi deployment for reliable IoT device connectivity",
    ],
    equipment: ["Tuya/Sonoff Smart Relays", "Biometric Smart Locks", "Video Intercom Units", "Gigabit Wi-Fi Access Points"],
    idealFor: "Modern homes, executive townhouses, Airbnbs, and smart offices.",
  },
  {
    id: "equipment-procurement",
    title: "Equipment Procurement",
    shortDescription:
      "Direct sourcing of verified low-voltage hardware, certified cables, decoders, cameras, and energizers at contractor prices.",
    fullDescription:
      "Avoid counterfeit hardware, undersized copper cables, and substandard power supplies. Henry Solutions leverages direct distributor relationships in Nairobi to procure tested, durable, and warrantied equipment on behalf of clients.",
    features: [
      "100% pure copper Cat6 Ethernet and RG6 coaxial cables",
      "Genuine DStv accessories (original remotes, power bricks, smart LNBs)",
      "High-output electric fence energizer units with battery backups",
      "IP-rated weatherproof camera housings and outdoor junction boxes",
      "Bulk hardware discounts passed directly to the client",
    ],
    equipment: ["Nemtek & JVA Energizers", "Genuine Multichoice Hardware", "Surge Suppressors", "Schneider / Chint Breakers"],
    idealFor: "Clients undertaking renovations, new construction projects, and facility managers.",
  },
  {
    id: "electric-fence",
    title: "Electric Fence Installation & Maintenance",
    shortDescription:
      "High-tensile perimeter security fences, wall-top razor wire integrations, energizer alarms, and siren monitors.",
    fullDescription:
      "Physical and psychological perimeter defense that stops intrusions before intruders reach your walls. We build free-standing and wall-top electric fences fitted with high-voltage pulse energizers, siren warnings, strobe indicators, and backup battery supplies.",
    features: [
      "Wall-top bracket mounting (flat or angled) with high-tensile stainless/galvanized wire",
      "Heavy-duty energizer installation with tamper detection and siren triggers",
      "Concertina razor wire integration for high-security boundaries",
      "Earthing system installation with copper ground rods to ensure shock output",
      "Fence vegetation clearing, wire tensioning, and broken insulator replacement",
    ],
    equipment: ["High-Tensile Wire", "Porcelain & Nylon Insulators", "Warning Signs", "8J-16J Energizers with Battery Backup"],
    idealFor: "Gated compounds, standalone villas, industrial parks, and perimeter walls.",
    badge: "Critical Security",
  },
  {
    id: "fault-inspection",
    title: "Fault Inspection & Diagnostic Diagnostics",
    shortDescription:
      "Emergency on-site troubleshooting for dead cameras, intermittent fence alarms, scrambled TV signals, and cable shorts.",
    fullDescription:
      "When security equipment fails or video feeds cut out, you need accurate diagnosis rather than guesswork. Henry Solutions conducts structured point-to-point electrical and signal continuity testing to identify damaged cables, blown fuses, or failed hardware.",
    features: [
      "Digital insulation testing to find earthing leakage along electric fences",
      "Cable continuity, PoE voltage drop, and Ethernet loop testing",
      "Spectrum analysis for satellite frequency drift or damaged dish arms",
      "Power surge impact assessment on DVR power supplies and energizers",
      "Detailed inspection report with itemized repair recommendations",
    ],
    equipment: ["RF Field Strength Meter", "Digital Multimeter & Insulation Tester", "Network Cable Certifier", "Fence Voltmeter"],
    idealFor: "Existing installations suffering persistent false alarms, blackout feeds, or poor signal.",
    badge: "24/7 Response",
  },
];

export const SERVICE_AREAS = {
  nairobi: [
    "Westlands & Parklands",
    "Kilimani, Kileleshwa & Lavington",
    "Karen & Lang'ata",
    "Runda, Gigiri & Muthaiga",
    "South B, South C & Nairobi West",
    "Kasarani, Roysambu & Thika Road Corridor",
    "Embakasi, Donholm & Eastlands",
    "Ruaka, Kiambu Road & Two Rivers Zone",
  ],
  counties: [
    "Nairobi", "Kiambu", "Machakos", "Kajiado", "Nakuru", "Mombasa", "Kilifi",
    "Kisumu", "Uasin Gishu (Eldoret)", "Nyeri", "Meru", "Laikipia (Nanyuki)",
    "Kakamega", "Kericho", "Embu", "Trans Nzoia (Kitale)", "Murang'a",
    "Kilifi & Diani", "Kisii", "Bomet", "And all remaining Kenyan counties",
  ],
  eastAfrica: [
    { country: "Uganda", notes: "Kampala, Entebbe, Jinja and commercial project sites" },
    { country: "Tanzania", notes: "Arusha, Moshi, Dar es Salaam cross-border facilities" },
    { country: "Rwanda", notes: "Kigali residential and commercial installations" },
  ],
};
