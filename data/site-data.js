export const business = {
  name: "Urban AC",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappHref: "https://wa.me/919876543210",
  address: "Vadodara, Gujarat 390001",
  serviceHours: "7:00 AM to 10:00 PM",
  city: "Vadodara",
  state: "Gujarat"
};

export const services = [
  {
    slug: "ac-service",
    name: "AC Service",
    sentence: "AC service",
    hero: "AC Service in Vadodara",
    description:
      "Routine AC cleaning, jet wash support, inspection, airflow checks, and same-day doorstep service.",
    keyword: "AC service in Vadodara",
    responseTime: "30-60 minutes",
    types: ["Split AC Service", "Window AC Service", "AC Cleaning", "AC Inspection"],
    includes: [
      "filter and coil cleaning",
      "airflow and cooling checks",
      "drain line attention",
      "dust and odor removal"
    ],
    problems: [
      "weak airflow",
      "dust buildup on coils",
      "odor from the indoor unit",
      "slow room cooling"
    ],
    benefits: [
      "improve cooling performance",
      "support cleaner indoor air",
      "reduce day-to-day strain on the unit",
      "help avoid avoidable repair calls"
    ],
    subservices: [
      {
        slug: "ac-cleaning",
        name: "AC Cleaning",
        sentence: "AC cleaning",
        includes: ["filter cleaning", "coil cleaning", "dust removal"],
        focus: "cleaner cooling and better airflow",
        when: "when dust buildup and smell start affecting performance"
      },
      {
        slug: "ac-jet-wash-service",
        name: "AC Jet Wash Service",
        sentence: "AC jet wash service",
        includes: ["jet wash cleaning", "coil wash", "deeper dirt removal"],
        focus: "deep cleaning for heavily used AC units",
        when: "when regular cleaning is not enough and cooling feels blocked"
      },
      {
        slug: "ac-inspection",
        name: "AC Inspection",
        sentence: "AC inspection",
        includes: ["cooling diagnosis", "electrical checks", "drain and noise review"],
        focus: "finding issues before repair or service is started",
        when: "when the AC shows signs of poor cooling, noise, or leakage"
      }
    ]
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    sentence: "AC repair",
    hero: "AC Repair in Vadodara",
    description:
      "Cooling issue diagnosis, leakage checks, electrical repair support, and urgent doorstep visits.",
    keyword: "AC repair in Vadodara",
    responseTime: "30-60 minutes",
    types: ["Split AC Repair", "Window AC Repair", "Inverter AC Repair", "Cooling Issue Repair"],
    includes: [
      "cooling diagnosis",
      "electrical and capacitor checks",
      "water leakage troubleshooting",
      "basic gas pressure review"
    ],
    problems: [
      "AC not cooling properly",
      "indoor unit leakage",
      "unusual sound or vibration",
      "compressor not starting"
    ],
    benefits: [
      "restore stable cooling faster",
      "prevent bigger part failures",
      "reduce unnecessary power waste",
      "improve day-to-day comfort in peak heat"
    ],
    subservices: [
      {
        slug: "split-ac-repair",
        name: "Split AC Repair",
        sentence: "split AC repair",
        includes: ["indoor and outdoor unit diagnosis", "cooling checks", "noise and drainage checks"],
        focus: "common split AC performance and breakdown issues",
        when: "when a split AC stops cooling, leaks water, or starts making unusual noise"
      },
      {
        slug: "window-ac-repair",
        name: "Window AC Repair",
        sentence: "window AC repair",
        includes: ["cooling review", "fan and airflow checks", "electrical diagnosis"],
        focus: "quick help for older or frequently used window AC units",
        when: "when the unit cools weakly, trips, or sounds rough during use"
      }
    ]
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    sentence: "AC installation",
    hero: "AC Installation in Vadodara",
    description:
      "Split and window AC installation, reinstallation after shifting, and clean setup with testing.",
    keyword: "AC installation Vadodara",
    responseTime: "30-60 minutes",
    types: ["Split AC Installation", "Window AC Installation", "AC Reinstallation", "Copper Pipe Setup"],
    includes: [
      "indoor and outdoor unit mounting",
      "drain and wiring checks",
      "vacuuming and leak testing where required",
      "performance testing after fitting"
    ],
    problems: [
      "poor cooling after a new fitting",
      "water leakage due to bad slope",
      "noise from unstable mounting",
      "gas loss from incorrect jointing"
    ],
    benefits: [
      "improve cooling from the first day",
      "protect the unit from avoidable fitting mistakes",
      "support better drainage and airflow",
      "reduce future repair risk"
    ],
    subservices: [
      {
        slug: "split-ac-installation",
        name: "Split AC Installation",
        sentence: "split AC installation",
        includes: ["wall mounting", "drain alignment", "copper and wiring review"],
        focus: "safe and neat setup for home and office split AC units",
        when: "for new AC fitting or reinstalling a split unit after shifting"
      },
      {
        slug: "window-ac-installation",
        name: "Window AC Installation",
        sentence: "window AC installation",
        includes: ["positioning checks", "mounting support", "cooling test after fitting"],
        focus: "stable fitting for window AC units in homes and commercial rooms",
        when: "when you need a new unit fitted or an older unit repositioned"
      }
    ]
  },
  {
    slug: "ac-gas-filling",
    name: "AC Gas Filling",
    sentence: "AC gas filling",
    hero: "AC Gas Filling in Vadodara",
    description:
      "Pressure inspection, leakage checks, refrigerant refilling, and cooling restoration support.",
    keyword: "AC gas filling in Vadodara",
    responseTime: "30-60 minutes",
    types: ["Split AC Gas Filling", "Window AC Gas Filling", "Leak Check and Refill", "Cooling Pressure Check"],
    includes: [
      "pressure inspection",
      "visible leakage diagnosis",
      "refilling support where required",
      "cooling output test"
    ],
    problems: [
      "insufficient cooling",
      "ice formation on coils",
      "longer cooling cycles",
      "warm air despite compressor activity"
    ],
    benefits: [
      "restore faster cooling",
      "prevent extra compressor stress",
      "improve comfort during harsh weather",
      "help identify leakage before repeat failure"
    ],
    subservices: [
      {
        slug: "r32-gas-filling",
        name: "R32 Gas Filling",
        sentence: "R32 gas filling",
        includes: ["pressure check", "gas top-up support", "cooling test"],
        focus: "R32 refrigerant support for compatible AC systems",
        when: "when an R32 AC starts cooling weakly or shows refrigerant loss signs"
      },
      {
        slug: "r410a-gas-filling",
        name: "R410A Gas Filling",
        sentence: "R410A gas filling",
        includes: ["system pressure review", "refilling support", "leak check guidance"],
        focus: "R410A gas support for residential and office AC units",
        when: "when the cooling is unstable and refrigerant condition needs checking"
      }
    ]
  },
  {
    slug: "ac-maintenance",
    name: "AC Maintenance",
    sentence: "AC maintenance",
    hero: "AC Maintenance in Vadodara",
    description:
      "Routine upkeep, preventive service, electrical checks, and seasonal performance care.",
    keyword: "AC maintenance in Vadodara",
    responseTime: "30-60 minutes",
    types: ["Routine AC Maintenance", "Preventive AC Service", "Seasonal Tune-Up", "Multi-Unit Checkup"],
    includes: [
      "health inspection",
      "filter and coil condition review",
      "electrical safety checks",
      "service planning advice"
    ],
    problems: [
      "unexpected summer breakdowns",
      "reduced efficiency over time",
      "hidden electrical or drainage issues",
      "gradual cooling loss"
    ],
    benefits: [
      "reduce emergency repair chances",
      "keep cooling more dependable",
      "help plan upkeep before major expense",
      "improve daily operating efficiency"
    ],
    subservices: [
      {
        slug: "routine-ac-maintenance",
        name: "Routine AC Maintenance",
        sentence: "routine AC maintenance",
        includes: ["scheduled checks", "filter review", "basic performance testing"],
        focus: "steady upkeep for regular home and office use",
        when: "when you want to prevent sudden breakdowns during peak season"
      },
      {
        slug: "preventive-ac-service",
        name: "Preventive AC Service",
        sentence: "preventive AC service",
        includes: ["early issue detection", "performance review", "seasonal inspection"],
        focus: "planned support before cooling problems become expensive",
        when: "before summer starts or when a unit has been working heavily for months"
      }
    ]
  },
  {
    slug: "ac-amc",
    name: "AC AMC",
    sentence: "AC AMC",
    hero: "AC AMC in Vadodara",
    description:
      "Annual maintenance contracts, home and office AMC plans, and recurring upkeep support.",
    keyword: "AC AMC in Vadodara",
    responseTime: "30-60 minutes",
    types: ["Home AC AMC", "Office AC AMC", "Multi-Unit AMC", "Seasonal Contract Support"],
    includes: [
      "planned maintenance visits",
      "priority booking support",
      "basic inspection and cleaning",
      "recurring service tracking"
    ],
    problems: [
      "missed service schedules",
      "repeat breakdowns from irregular upkeep",
      "difficulty managing multiple units",
      "unplanned maintenance expense"
    ],
    benefits: [
      "keep yearly upkeep more organized",
      "reduce repeat service delays",
      "support better long-term reliability",
      "simplify maintenance planning for homes and offices"
    ],
    subservices: [
      {
        slug: "annual-maintenance-contract",
        name: "Annual Maintenance Contract",
        sentence: "annual maintenance contract",
        includes: ["planned visits", "year-round service planning", "priority support"],
        focus: "structured upkeep for regular home or office AC usage",
        when: "when you want reliable yearly maintenance instead of last-minute repairs"
      },
      {
        slug: "amc-plans-home-office",
        name: "AMC Plans for Home & Office",
        sentence: "AMC plans for home and office",
        includes: ["multi-unit planning", "scheduled cleaning and checks", "support coordination"],
        focus: "organized upkeep for family homes, offices, and commercial units",
        when: "when you need service planning for one or more AC units over the year"
      }
    ]
  }
];

export const locations = [
  {
    slug: "vasna",
    name: "Vasna",
    responseTime: "30-45 minutes",
    landmark: "Vasna Road societies",
    context: "residential societies, family apartments, and busy local housing near Vasna Road",
    nearby: ["akota", "tandalja", "gotri", "bhayli", "productivity-road"]
  },
  {
    slug: "sama",
    name: "Sama",
    responseTime: "30-45 minutes",
    landmark: "Sama-Savli Road and New Sama housing",
    context: "independent homes, new housing blocks, and mixed-use roads in the Sama side",
    nearby: ["harni", "nizampura", "chhani", "fatehgunj", "karelibaug"]
  },
  {
    slug: "alkapuri",
    name: "Alkapuri",
    responseTime: "20-35 minutes",
    landmark: "RC Dutt Road and Genda Circle",
    context: "premium homes, offices, showrooms, and hotel-facing properties in central Vadodara",
    nearby: ["sayajigunj", "race-course", "akota", "productivity-road", "fatehgunj"]
  },
  {
    slug: "gotri",
    name: "Gotri",
    responseTime: "30-45 minutes",
    landmark: "Gotri Road and nearby townships",
    context: "large housing societies, clinics, and expanding west-side residential clusters",
    nearby: ["subhanpura", "bhayli", "vasna", "tandalja", "akota"]
  },
  {
    slug: "manjalpur",
    name: "Manjalpur",
    responseTime: "35-50 minutes",
    landmark: "Manjalpur main road and society pockets",
    context: "older neighborhoods, local markets, and steady family usage across the area",
    nearby: ["makarpura", "akota", "tandalja", "vasna", "waghodia-road"]
  },
  {
    slug: "akota",
    name: "Akota",
    responseTime: "20-35 minutes",
    landmark: "Akota Stadium and Old Padra Road side",
    context: "apartment towers, office spaces, and premium residential demand around Akota",
    nearby: ["vasna", "alkapuri", "race-course", "productivity-road", "tandalja"]
  },
  {
    slug: "fatehgunj",
    name: "Fatehgunj",
    responseTime: "25-40 minutes",
    landmark: "MS University side and key city roads",
    context: "student housing, offices, and active commercial pockets close to central routes",
    nearby: ["sayajigunj", "alkapuri", "sama", "nizampura", "karelibaug"]
  },
  {
    slug: "sayajigunj",
    name: "Sayajigunj",
    responseTime: "20-35 minutes",
    landmark: "Vadodara Junction side and business belt",
    context: "commercial buildings, office movement, and mixed residential use near the station area",
    nearby: ["alkapuri", "fatehgunj", "race-course", "productivity-road", "akota"]
  },
  {
    slug: "subhanpura",
    name: "Subhanpura",
    responseTime: "25-40 minutes",
    landmark: "Subhanpura roads and school-side housing",
    context: "residential blocks, school-side apartments, and family zones needing dependable cooling",
    nearby: ["gotri", "nizampura", "sama", "karelibaug", "bhayli"]
  },
  {
    slug: "karelibaug",
    name: "Karelibaug",
    responseTime: "30-45 minutes",
    landmark: "Karelibaug main road and colony stretches",
    context: "dense local housing, shops, and established inner roads where quick doorstep support matters",
    nearby: ["nizampura", "harni", "sama", "fatehgunj", "chhani"]
  },
  {
    slug: "nizampura",
    name: "Nizampura",
    responseTime: "25-40 minutes",
    landmark: "Nizampura junction and apartment clusters",
    context: "apartment buildings, connected inner roads, and mixed-use residential corridors",
    nearby: ["subhanpura", "karelibaug", "sama", "chhani", "fatehgunj"]
  },
  {
    slug: "makarpura",
    name: "Makarpura",
    responseTime: "35-50 minutes",
    landmark: "Makarpura GIDC and nearby housing",
    context: "industrial offices, staff housing, and family homes needing dependable AC support",
    nearby: ["manjalpur", "tandalja", "akota", "waghodia-road", "vasna"]
  },
  {
    slug: "harni",
    name: "Harni",
    responseTime: "30-45 minutes",
    landmark: "Airport Road and Harni residential side",
    context: "newer housing pockets, airport-side roads, and regular family cooling demand",
    nearby: ["sama", "chhani", "karelibaug", "nizampura", "fatehgunj"]
  },
  {
    slug: "bhayli",
    name: "Bhayli",
    responseTime: "30-45 minutes",
    landmark: "Bhayli gated communities and new developments",
    context: "modern apartments, villas, and newly occupied homes needing neat service and installation support",
    nearby: ["gotri", "vasna", "tandalja", "akota", "subhanpura"]
  },
  {
    slug: "chhani",
    name: "Chhani",
    responseTime: "30-45 minutes",
    landmark: "Chhani Jakat Naka and main road belt",
    context: "residential stretches, small businesses, and roadside properties across north-side roads",
    nearby: ["sama", "harni", "nizampura", "karelibaug", "fatehgunj"]
  },
  {
    slug: "waghodia-road",
    name: "Waghodia Road",
    responseTime: "35-50 minutes",
    landmark: "Waghodia Road societies and roadside complexes",
    context: "long-stretch townships, growing housing demand, and spread-out service coverage needs",
    nearby: ["karelibaug", "makarpura", "manjalpur", "harni", "nizampura"]
  },
  {
    slug: "productivity-road",
    name: "Productivity Road",
    responseTime: "20-35 minutes",
    landmark: "office buildings and commercial frontage",
    context: "corporate offices, clinics, and commercial spaces where downtime needs to stay low",
    nearby: ["alkapuri", "race-course", "akota", "sayajigunj", "tandalja"]
  },
  {
    slug: "race-course",
    name: "Race Course",
    responseTime: "20-35 minutes",
    landmark: "Race Course Circle and nearby residences",
    context: "premium residences, offices, and central roads expecting polished doorstep support",
    nearby: ["alkapuri", "productivity-road", "sayajigunj", "akota", "fatehgunj"]
  },
  {
    slug: "tandalja",
    name: "Tandalja",
    responseTime: "30-45 minutes",
    landmark: "Tandalja Road apartments and local markets",
    context: "apartment buildings, local markets, and mixed residential-commercial use on the western side",
    nearby: ["vasna", "akota", "bhayli", "gotri", "productivity-road"]
  }
];

export const topLocations = ["vasna", "sama", "alkapuri", "gotri", "akota", "race-course"];

export const locationMap = Object.fromEntries(locations.map((location) => [location.slug, location]));
export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));

export const serviceEntries = services.flatMap((service) => [
  {
    kind: "service",
    slug: service.slug,
    parentService: service.slug,
    name: service.name,
    sentence: service.sentence,
    types: service.types,
    includes: service.includes,
    problems: service.problems,
    benefits: service.benefits,
    description: service.description,
    responseTime: service.responseTime
  },
  ...service.subservices.map((subservice) => ({
    kind: "subservice",
    slug: subservice.slug,
    parentService: service.slug,
    name: subservice.name,
    sentence: subservice.sentence,
    types: [subservice.name],
    includes: subservice.includes,
    problems: service.problems,
    benefits: service.benefits,
    description: subservice.focus,
    responseTime: service.responseTime,
    focus: subservice.focus,
    when: subservice.when
  }))
]);

export const serviceEntryMap = Object.fromEntries(serviceEntries.map((entry) => [entry.slug, entry]));

export function getNearbyLocations(location) {
  return location.nearby.map((slug) => locationMap[slug]).filter(Boolean);
}

export function getRelatedSubservices(serviceSlug, locationSlug) {
  const service = serviceMap[serviceSlug];
  return service.subservices.map((subservice) => ({
    ...subservice,
    href: `/${subservice.slug}/${locationSlug}`
  }));
}

export function getLocationIntro(entry, location, seed = 0) {
  const variants = [
    `${entry.sentence} in ${location.name}, ${business.city} should feel simple to book and easy to trust. ${business.name} serves ${location.landmark} and nearby pockets with doorstep support for homes, offices, and commercial spaces. If your unit needs cleaning, inspection, cooling checks, or practical problem-solving before the heat builds up, our local technicians can usually reach ${location.name} within ${location.responseTime}. Many customers searching for AC service near me or AC technician in ${location.name} want fast response, clear communication, and work that solves the issue without confusion. This page is built to do exactly that while keeping the content local and useful.`,
    `Looking for ${entry.sentence} in ${location.name}? ${business.name} provides local doorstep support across ${location.context}, with same-day slots whenever they are available. We regularly attend bookings near ${location.landmark}, so our team understands the traffic flow, building types, and common cooling issues seen in ${location.name}. Whether you are searching for ${entry.sentence} in ${location.name}, AC repair in ${location.name}, or dependable AC service near me, this page explains what the service includes, why it matters, and how to book quickly.`,
    `Need ${entry.sentence} in ${location.name}, ${business.city}? Our team handles routine and urgent AC support for families, tenants, office managers, and shop owners across ${location.context}. At ${business.name}, we keep the process straightforward: book a slot, get a technician visit, understand the issue clearly, and restore better cooling without unnecessary delay. Customers around ${location.landmark} often call us for AC cleaning, repair, maintenance, or installation advice after noticing weak airflow, rising dust, or slower room cooling.`
  ];
  return variants[seed % variants.length];
}

export function getServiceOverview(entry, areaName, landmark) {
  return [
    `${entry.name} in ${areaName} starts with understanding how the AC is behaving in actual use. Our technicians check airflow, cooling output, visible dust, drainage condition, and overall performance so the visit stays practical and result-focused.`,
    `Depending on the unit condition, the work can include ${entry.includes.join(", ")}, followed by testing to confirm the AC is performing better before the visit is closed. This matters around ${landmark} because homes and offices here often run AC units for long hours during warm weather.`,
    `Timely ${entry.sentence} can ${entry.benefits[0]}, ${entry.benefits[1]}, ${entry.benefits[2]}, and ${entry.benefits[3]}. It also helps address complaints like ${entry.problems.join(", ")} before they turn into bigger issues.`
  ];
}

export function getSubserviceOverview(entry, location) {
  return [
    `${entry.name} is one of the most useful targeted support options for customers who want ${entry.focus} without waiting for the issue to become more expensive or harder to diagnose.`,
    `A doorstep visit may include ${entry.includes.join(", ")}, along with practical checks that help confirm the AC is working better after the service. Near ${location.landmark}, this is especially useful for busy households, offices, and rental properties where cooling downtime is disruptive.`,
    `Customers in ${location.name} commonly book ${entry.sentence} ${entry.when}. When handled at the right time, it supports better cooling, cleaner operation, and more reliable day-to-day performance.`
  ];
}

export function getAreaFaqs(entry, location) {
  return [
    {
      question: `How fast can you reach ${location.name} for ${entry.sentence}?`,
      answer: `For ${location.name}, we usually target a response window of ${location.responseTime}, depending on traffic, technician assignment, and slot availability.`
    },
    {
      question: `Do you offer same-day ${entry.sentence} in ${location.name}?`,
      answer: `Yes, we try to provide same-day ${entry.sentence} in ${location.name} whenever slots are open. Earlier booking usually gives better same-day options.`
    },
    {
      question: `What kind of AC issues do you handle during ${entry.sentence} in ${location.name}?`,
      answer: `We commonly help with ${entry.problems.join(", ")}, along with related cleaning, inspection, or performance complaints depending on the service type.`
    }
  ];
}

export function getServiceFaqs(service) {
  return [
    {
      question: `How fast can you reach different areas in ${business.city} for ${service.sentence}?`,
      answer: `For most major service areas in ${business.city}, we aim for a response window of about ${service.responseTime}. Exact timing depends on the location, traffic, and slot availability.`
    },
    {
      question: `What is included in ${service.sentence} in ${business.city}?`,
      answer: `${service.name} usually includes ${service.includes.join(", ")}, depending on the unit condition and whether the visit is routine or issue-based.`
    },
    {
      question: `Do you provide same-day ${service.sentence} in ${business.city}?`,
      answer: `Yes, same-day ${service.sentence} in ${business.city} is available when open slots remain. Calling or messaging earlier in the day usually helps.`
    }
  ];
}

export function getHomepageStats() {
  return [
    { value: "19", label: "service locations covered" },
    { value: "6", label: "core services available" },
    { value: "13", label: "sub-service landing paths" },
    { value: "30-60 min", label: "response goal in major zones" }
  ];
}

export function getAllLocationParams() {
  return serviceEntries.flatMap((entry) =>
    locations.map((location) => ({
      service: entry.slug,
      location: location.slug
    }))
  );
}

export function getAllServiceParams() {
  return services.map((service) => ({
    service: service.slug
  }));
}
