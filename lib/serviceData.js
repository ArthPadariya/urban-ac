export const sharedWhyChooseUs = [
  {
    icon: "\u26a1",
    title: "Quick Response Service",
    desc: "Fast booking confirmation with technician arrival within 30-45 minutes across {{area}}."
  },
  {
    icon: "\ud83c\udfe0",
    title: "Doorstep AC Service",
    desc: "We arrive fully equipped with tools and materials for complete on-site AC service."
  },
  {
    icon: "\ud83d\udee0\ufe0f",
    title: "Skilled & Certified Technicians",
    desc: "Experienced professionals handling split AC, window AC, and all major brands."
  },
  {
    icon: "\ud83d\udcb0",
    title: "Transparent & Fair Pricing",
    desc: "Upfront pricing shared before work begins - no hidden charges or extra costs."
  }
];

export const sharedRelatedServices = [
  { label: "AC Repair", slug: "ac-repair" },
  { label: "AC Service", slug: "ac-service" },
  { label: "AC Installation", slug: "ac-installation" },
  { label: "AC Gas Filling", slug: "ac-gas-filling" },
  { label: "AMC", slug: "ac-maintenance-amc" },
  { label: "Split AC Repair", slug: "split-ac-repair" },
  { label: "PCB Repair", slug: "ac-pcb-repair" },
  { label: "AC Cleaning", slug: "ac-cleaning-service" }
];

export const sharedNearbyAreaSlugs = [
  "harni",
  "new-vip-road",
  "chhani",
  "fatehgunj",
  "nizampura",
  "alkapuri",
  "manjalpur",
  "karelibaug",
  "gotri",
  "vasna",
  "subhanpura",
  "akota",
  "sayajigunj"
];

export const sharedStats = [
  { end: 1500, suffix: "+", label: "Happy Customers", sub: "in Vadodara" },
  { end: 30, suffix: " Min", label: "Fast Technician Visit", sub: "Urban AC" },
  { end: 10, suffix: " Min", label: "Instant Booking", sub: "Quick Confirmation" },
  { end: 5, suffix: "+ Years", label: "Field Experience", sub: "in AC Installation" }
];

export const serviceData = {
  "ac-repair": {
    hero: {
      title: "AC Repair",
      description:
        "Split AC and window AC repair by expert technicians in {{area}}. We diagnose cooling issues, gas problems, noise, and electrical faults with fast same-day support and transparent pricing.",
      primaryLabel: "Call AC Repair",
      highlights: [
        "\u2713 Verified AC Technicians",
        "\u2713 Same-Day AC Repair",
        "\u2713 Affordable Repair Pricing"
      ]
    },
    details: {
      chip: "Urban AC - Service Details",
      title: "Professional AC Repair In {{area}}",
      paragraphs: [
        "Urban AC provides professional AC repair services in {{area}}, {{city}}, ensuring fast issue detection and long-lasting solutions for your air conditioner. Whether your AC is not cooling, making noise, leaking water, or facing electrical issues, our expert technicians handle everything with precision and care.",
        "Our AC repair service in {{area}} includes complete fault diagnosis, cooling performance checks, gas pressure inspection, electrical troubleshooting, and quick resolution of issues. We make sure your AC runs efficiently without noise, leakage, or cooling problems."
      ]
    },
    types: {
      chip: "AC Repair - Urban AC",
      title: "Types of AC Repair",
      description: "Common AC Repair Problems - Fixed by Local Experts in {{area}}.",
      items: [
        {
          title: "Split AC Repair",
          desc: "Fix cooling issues, gas leakage, noise problems, and performance faults in split AC units.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Window AC Repair",
          desc: "Repair airflow issues, cooling failure, electrical faults, and drainage problems in window ACs.",
          icon: "\ud83e\ude9f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "AC Gas & Cooling Repair",
          desc: "Identify low cooling issues, refill gas, and restore optimal AC performance quickly.",
          icon: "\ud83d\udd04",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "Electrical & PCB Repair",
          desc: "Fix PCB issues, sensor faults, wiring problems, and unexpected AC shutdown errors.",
          icon: "\ud83d\udce6",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How AC Repair Service Works",
      description: "Simple steps - from booking to fixing your AC issues quickly.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Tell us your AC issue and {{area}} address. We respond within minutes."
        },
        {
          num: "02",
          title: "Schedule Visit",
          desc: "Choose a same-day or next-day slot based on your availability."
        },
        {
          num: "03",
          title: "Diagnosis & Repair",
          desc: "Our technician identifies the issue, fixes cooling, gas, or electrical problems on-site."
        },
        {
          num: "04",
          title: "Testing & Completion",
          desc: "We test cooling performance and ensure your AC runs smoothly before leaving."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our AC Repair Service",
      description: "Real customer feedback from {{area}} and nearby areas.",
      items: [
        {
          name: "Rakesh Yadav",
          loc: "Sama, Vadodara",
          text: "\"My AC suddenly stopped cooling. The technician quickly diagnosed the issue and fixed it within an hour. Very fast and reliable repair service.\"",
          tag: "AC Repair"
        },
        {
          name: "Neha Joshi",
          loc: "New VIP Road",
          text: "\"There was a gas leakage issue in my AC. The team handled it professionally and explained everything clearly. Cooling is now perfect again!\"",
          tag: "Gas Filling"
        },
        {
          name: "Amit Sharma",
          loc: "Harni",
          text: "\"Excellent service! My AC had noise and cooling issues. They repaired it properly without unnecessary charges. Highly recommend Urban AC.\"",
          tag: "Split AC Repair"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ AC Repair in {{area}}",
      title: "Questions - AC Repair in {{area}}",
      description: "Everything you need to know before booking.",
      items: [
        {
          q: "How quickly can you provide AC repair in {{area}}?",
          a: "We offer same-day AC repair in {{area}}, {{city}}. Our response time is typically 30-45 minutes, and in most cases, repairs are completed on the same visit."
        },
        {
          q: "Do you repair both split AC and window AC?",
          a: "Yes, we repair both split and window AC units. Our technicians are experienced with all major brands like Voltas, Daikin, Blue Star, LG, and Samsung."
        },
        {
          q: "What is included in a standard AC repair visit?",
          a: "Complete fault diagnosis, issue fixing (cooling, gas, electrical, or noise), minor part adjustments, and final performance testing to ensure proper cooling."
        },
        {
          q: "Is there a warranty on the repair work?",
          a: "Yes. We provide a service warranty on repairs depending on the issue type. This covers the specific repair work done by our technician."
        },
        {
          q: "Can I book AC repair for the same day?",
          a: "Absolutely. Same-day repair slots are available in {{area}} and nearby areas. Call or WhatsApp us to check live availability."
        }
      ]
    },
    checklist: [
      {
        text: "Accurate fault diagnosis",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Optimized cooling restoration",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Leak and gas issue fixing",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Complete performance testing",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Repair In {{area}}",
      description:
        "Urban AC Offers Complete AC Services in {{area}}, {{city}}, Covering Repair, Service, Installation, and Maintenance for all types of air conditioners. Whether you need quick AC repair, regular servicing, or new AC installation, our experienced technicians provide reliable doorstep solutions across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For AC Repair",
      description: "We serve {{area}} and all surrounding localities in {{city}} with fast and reliable support."
    },
    quality: {
      chip: "AC Repair Quality",
      title: "Professional AC Repair In {{area}} You Can Trust",
      description:
        "Good AC repair is about more than just fixing the issue. At Urban AC, we focus on accurate diagnosis, proper troubleshooting, and long-lasting solutions so your AC performs efficiently from day one in {{area}}."
    },
    cta: {
      title: "Need AC Repair",
      highlight: "Today in {{area}}?",
      bullets: [
        "Same-Day Repair Service Available In {{area}}",
        "Expert Certified Technicians Near You",
        "Affordable & Transparent Pricing"
      ]
    }
  },
  "ac-service": {
    hero: {
      title: "AC Service",
      description:
        "Whether your AC needs regular servicing, deep cleaning, or performance optimization, our expert technicians handle everything with precision and care.",
      primaryLabel: "Book AC Service",
      highlights: [
        "\u2713 Verified AC Technicians",
        "\u2713 Same-Day AC Service",
        "\u2713 Affordable Service Pricing"
      ]
    },
    details: {
      chip: "Urban AC - Service Details",
      title: "Professional AC Service In {{area}}",
      paragraphs: [
        "Urban AC provides professional AC service in {{area}}, {{city}}, ensuring efficient cooling and longer life for your air conditioner. Whether your AC needs regular servicing, deep cleaning, or performance optimization, our expert technicians handle everything with precision and care.",
        "Our AC service in {{area}} includes complete filter cleaning, coil cleaning, airflow inspection, gas pressure check, and overall performance testing. We make sure your AC delivers proper cooling, runs efficiently, and stays free from issues like low cooling, bad airflow, or unusual noise."
      ]
    },
    types: {
      chip: "AC Service - Urban AC",
      title: "Types of AC Services",
      description:
        "Every Type of AC Service - Handled by Local Experts in {{area}} for Better Cooling and Performance.",
      items: [
        {
          title: "Split AC Service",
          desc: "Filter cleaning, coil cleaning, gas pressure check, and cooling performance optimization.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Window AC Service",
          desc: "Complete internal cleaning, airflow alignment, drainage check, and performance testing.",
          icon: "\ud83e\ude9f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "AC Maintenance Service",
          desc: "Regular servicing including cleaning, inspection, and performance checks for long-term efficiency.",
          icon: "\ud83d\udd04",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "Cooling Issue Service",
          desc: "Diagnosis and fixing of low cooling, airflow problems, and performance-related issues.",
          icon: "\ud83d\udce6",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How The AC Service Visit Works",
      description: "Four simple steps - from booking to efficient AC performance.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Tell us your AC issue and {{area}} location. We respond quickly with the right solution."
        },
        {
          num: "02",
          title: "Schedule Visit",
          desc: "Choose a same-day or next-day service slot based on your convenience."
        },
        {
          num: "03",
          title: "AC Service",
          desc: "Complete AC servicing including cleaning, airflow check, filter wash, and performance optimization."
        },
        {
          num: "04",
          title: "Testing & Completion",
          desc: "We test cooling performance, airflow, and ensure everything works efficiently before leaving."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our AC Service",
      description: "Real feedback from AC service customers in {{area}} and nearby areas.",
      items: [
        {
          name: "Karan Patel",
          loc: "Sama, Vadodara",
          text: "\"Booked AC service for my split unit. The technician cleaned everything properly and improved cooling instantly. Very professional service.\"",
          tag: "AC Service"
        },
        {
          name: "Riya Pandya",
          loc: "New VIP Road",
          text: "\"My AC was not cooling properly. The team did full servicing and explained everything clearly. Cooling performance is much better now.\"",
          tag: "Cooling Issue"
        },
        {
          name: "Rahul Sharma",
          loc: "Harni",
          text: "\"Very impressed with the service quality. Complete cleaning, airflow check, and testing were done properly without rushing. Will book again.\"",
          tag: "AC Cleaning"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ AC Service in {{area}}",
      title: "Questions - AC Service in {{area}}",
      description: "Everything you need to know about AC servicing, cleaning, and support in {{area}}.",
      items: [
        {
          q: "How quickly can you provide AC service in {{area}}?",
          a: "We offer same-day AC service in {{area}}, {{city}}. Our response time is usually 30-45 minutes, and we try to schedule visits within the same day whenever slots are available."
        },
        {
          q: "Do you service both split AC and window AC?",
          a: "Yes, we service both split and window AC units. Our technicians handle all major brands like Voltas, Daikin, Blue Star, LG, and Samsung."
        },
        {
          q: "What is included in a standard AC service?",
          a: "A standard AC service includes filter cleaning, coil cleaning, airflow check, drainage inspection, and overall performance testing to ensure proper cooling."
        },
        {
          q: "Do you offer deep cleaning or jet service?",
          a: "Yes, we provide deep cleaning services using advanced tools to remove dust, bacteria, and blockages for better cooling and air quality."
        },
        {
          q: "Can I book AC service for the same day?",
          a: "Absolutely. Same-day AC service is available in {{area}} and nearby areas. Contact us via call or WhatsApp to check real-time availability."
        }
      ]
    },
    checklist: [
      {
        text: "Thorough AC cleaning & servicing",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Optimized cooling performance",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Drainage & airflow check",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Complete performance testing",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Services In {{area}}",
      description:
        "Urban AC offers professional AC service in {{area}}, {{city}}, including routine servicing, deep cleaning, cooling performance checks, and airflow optimization for all types of air conditioners. Whether your AC needs regular maintenance, filter cleaning, or improved cooling efficiency, our experienced technicians provide fast and reliable doorstep service across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For AC Service",
      description: "We provide fast and reliable AC service across {{area}} and nearby areas in {{city}}."
    },
    quality: {
      chip: "AC SERVICE QUALITY",
      title: "Professional AC Service In {{area}} You Can Trust",
      description:
        "Good AC service is about more than just basic cleaning. At Urban AC, we focus on deep cleaning, airflow optimization, proper drainage checks, and complete performance testing to ensure your AC runs efficiently and delivers strong cooling in {{area}}."
    },
    cta: {
      title: "Need AC Service",
      highlight: "Today in {{area}}?",
      bullets: [
        "Same-Day AC Service Slots Available In {{area}}",
        "Expert Certified Technicians Near You",
        "Affordable & Transparent Service Pricing"
      ]
    }
  },
  "ac-cleaning-service": {
    hero: {
      title: "AC Cleaning Service",
      description:
        "Whether you need basic servicing or deep cleaning, we ensure your AC runs smoothly, delivers better cooling, and consumes less electricity.",
      primaryLabel: "Book AC Cleaning Service",
      highlights: [
        "\u2713 Deep Cleaning For Better Cooling",
        "\u2713 Dust And Bacteria Removal Experts",
        "\u2713 Improved Airflow And Efficiency"
      ]
    },
    details: {
      chip: "Urban AC - Service Details",
      title: "Professional AC Cleaning Service In {{area}}",
      paragraphs: [
        "Urban AC provides professional AC cleaning services in {{area}}, {{city}}, helping improve cooling performance and air quality. Over time, dust and dirt accumulate inside your AC, reducing efficiency and causing poor airflow.",
        "Our expert technicians perform thorough cleaning of filters, coils, and internal components to restore optimal performance."
      ]
    },
    types: {
      chip: "AC Cleaning Service - Urban AC",
      title: "Types of AC Cleaning Service",
      description:
        "Every Major AC Cleaning Service Need - Handled By Local Experts In {{area}}.",
      items: [
        {
          title: "General AC Cleaning",
          desc: "Basic cleaning of filters, panels, and airflow components for better cooling.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Deep AC Cleaning",
          desc: "Complete indoor and outdoor unit cleaning including coil and blower wash.",
          icon: "\ud83e\ude9f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Water Jet Cleaning",
          desc: "High-pressure jet cleaning to remove dust, dirt, and stubborn blockages.",
          icon: "\ud83d\udd04",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "Cooling Performance Boost",
          desc: "Cleaning service focused on improving cooling efficiency and airflow.",
          icon: "\ud83d\udce6",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How The AC Cleaning Service Visit Works",
      description: "Four simple steps - from booking to a perfectly cooling AC.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Share your AC type and cleaning requirement. We respond quickly."
        },
        {
          num: "02",
          title: "Schedule Visit",
          desc: "Choose a same-day or next-day slot that suits your timing."
        },
        {
          num: "03",
          title: "AC Cleaning",
          desc: "Technician performs complete cleaning using proper tools and methods."
        },
        {
          num: "04",
          title: "Testing & Check",
          desc: "We ensure proper airflow, cooling, and system performance before leaving."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our AC Cleaning Service Service",
      description: "Real feedback from {{area}} and surrounding areas.",
      items: [
        {
          name: "Amit Patel",
          loc: "Sama, Vadodara",
          text: "\"My AC cooling improved instantly after cleaning. Very neat and professional work.\"",
          tag: "AC Cleaning"
        },
        {
          name: "Neha Shah",
          loc: "New VIP Road",
          text: "\"Deep cleaning removed all dust and smell issues. The technician was very skilled.\"",
          tag: "Deep Cleaning"
        },
        {
          name: "Rakesh Mehta",
          loc: "Harni",
          text: "\"Quick service and proper cleaning. Airflow is much better now. Highly recommended.\"",
          tag: "General Cleaning"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ AC Cleaning in {{area}}",
      title: "Questions - AC Cleaning in {{area}}",
      description: "Everything you need to know before booking.",
      items: [
        {
          q: "How often should I get my AC cleaned?",
          a: "We recommend cleaning your AC every 3-6 months depending on usage and dust conditions."
        },
        {
          q: "What is included in AC cleaning service?",
          a: "Filter cleaning, coil cleaning, blower cleaning, drainage check, and airflow testing."
        },
        {
          q: "Do you provide deep cleaning service?",
          a: "Yes, we offer deep cleaning including water jet cleaning for complete dust removal."
        },
        {
          q: "How long does AC cleaning take?",
          a: "Typically 45-90 minutes depending on the AC type and cleaning level required."
        },
        {
          q: "Will cleaning improve cooling performance?",
          a: "Yes, proper cleaning improves airflow, cooling efficiency, and reduces power consumption."
        }
      ]
    },
    checklist: [
      {
        text: "Thorough filter and coil cleaning",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Improved cooling efficiency",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Dust and bacteria removal",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Complete airflow and drainage check",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Services In {{area}}",
      description:
        "Urban AC Offers Complete AC Services in {{area}}, {{city}}, Covering Repair, Service, Installation, and Maintenance for all types of air conditioners. Whether you need quick AC repair, regular servicing, or new AC installation, our experienced technicians provide reliable doorstep solutions across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For AC Cleaning Service",
      description: "We serve {{area}} and all surrounding localities in {{city}} with fast and reliable support."
    },
    quality: {
      chip: "AC Cleaning Service Quality",
      title: "Professional AC Cleaning Service In {{area}} You Can Trust",
      description:
        "Our expert technicians perform thorough cleaning of filters, coils, and internal components to restore optimal performance."
    },
    cta: {
      title: "Need AC Cleaning Service",
      highlight: "Today in {{area}}?",
      bullets: [
        "Same-Day AC Cleaning Service In {{area}}",
        "Expert Technicians For Deep Cleaning",
        "Improved Cooling And Airflow Guaranteed"
      ]
    }
  },
  "ac-gas-filling": {
    hero: {
      title: "AC Gas Filling",
      description:
        "Low cooling? Get professional AC gas refilling for split and window AC with same-day service in {{area}}. Fast, safe, and reliable solutions.",
      primaryLabel: "Call For Gas Filling",
      highlights: [
        "\u2713 Same-Day Gas Filling",
        "\u2713 Proper Pressure Testing",
        "\u2713 Affordable Pricing"
      ]
    },
    details: {
      chip: "Urban AC - Service Details",
      title: "Professional AC Gas Filling In {{area}}",
      paragraphs: [
        "Urban AC provides professional AC gas filling in {{area}}, {{city}}, ensuring fast cooling restoration and long-term performance for your air conditioner. Whether your AC is not cooling or takes too long to cool, our expert technicians diagnose the issue and refill gas accurately.",
        "Our AC gas filling service includes complete gas pressure inspection, leak detection, refrigerant refilling, and final cooling performance testing. We ensure your AC runs efficiently without cooling loss, noise, or repeated gas issues."
      ]
    },
    types: {
      chip: "AC Gas Filling - Urban AC",
      title: "Types of AC Gas Filling Services",
      description: "Every Gas Filling Need - Handled by Experts in {{area}}",
      items: [
        {
          title: "Split AC Gas Filling",
          desc: "Accurate refrigerant refilling with pressure check and leak inspection for split AC units.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Window AC Gas Filling",
          desc: "Complete gas refill service with cooling performance check for window AC systems.",
          icon: "\ud83e\ude9f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Gas Leak Detection",
          desc: "Identify and fix refrigerant leaks before refilling to ensure long-lasting cooling.",
          icon: "\ud83d\udd0d",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "Cooling Optimization",
          desc: "Post gas filling cooling check and system optimization for maximum performance.",
          icon: "\ud83d\udca1",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How The Gas Filling Visit Works",
      description: "Four simple steps - from booking to a perfectly cooling AC.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Tell us your AC issue and location in {{area}}. We respond quickly."
        },
        {
          num: "02",
          title: "Technician Visit",
          desc: "Our expert checks gas level, pressure, and possible leakage."
        },
        {
          num: "03",
          title: "Gas Refilling",
          desc: "Proper refrigerant filling using correct pressure standards."
        },
        {
          num: "04",
          title: "Cooling Test",
          desc: "Final performance check to ensure optimal cooling output."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our AC Gas Filling Service",
      description: "Real feedback from {{area}} and surrounding areas.",
      items: [
        {
          name: "Manoj Patel",
          loc: "Sama, Vadodara",
          text: "\"My AC was not cooling properly. They checked gas pressure and refilled it perfectly. Cooling is now like new!\"",
          tag: "Gas Filling"
        },
        {
          name: "Sneha Mehta",
          loc: "New VIP Road",
          text: "\"Very professional service. They detected a small leak before filling gas and fixed it properly. Highly recommended.\"",
          tag: "Leak Fix"
        },
        {
          name: "Karan Shah",
          loc: "Harni",
          text: "\"Quick service and affordable pricing. My AC cooling improved immediately after gas refill.\"",
          tag: "Split AC"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ AC Gas Filling in {{area}}",
      title: "Questions - AC Gas Filling in {{area}}",
      description: "Everything you need to know before booking.",
      items: [
        {
          q: "How do I know if my AC needs gas filling?",
          a: "If your AC is not cooling properly, takes longer to cool, or airflow is normal but temperature is not dropping, it may need gas refilling."
        },
        {
          q: "Do you check for gas leakage before filling?",
          a: "Yes. We always check for leaks before refilling gas to ensure long-lasting performance and avoid repeat issues."
        },
        {
          q: "How long does gas filling take?",
          a: "Typically 30-60 minutes depending on the condition of the AC and whether leak fixing is required."
        },
        {
          q: "Is gas filling safe for my AC?",
          a: "Yes. We use proper tools and pressure standards to safely refill gas without damaging your system."
        },
        {
          q: "Can I book same-day gas filling service?",
          a: "Yes. Same-day service is available in {{area}} and nearby areas. Call or WhatsApp us for instant booking."
        }
      ]
    },
    checklist: [
      {
        text: "Accurate gas pressure check",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Leak detection & fixing",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Efficient cooling restoration",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Safe and proper gas handling",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Services In {{area}}",
      description:
        "Urban AC Offers Complete AC Services in {{area}}, {{city}}, Covering Repair, Service, Installation, and Maintenance for all types of air conditioners. Whether you need quick AC repair, regular servicing, or new AC installation, our experienced technicians provide reliable doorstep solutions across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For AC Gas Filling",
      description: "We serve {{area}} and all surrounding localities in {{city}} with fast and reliable support."
    },
    quality: {
      chip: "Professional Gas Filling Quality",
      title: "Professional AC Gas Filling in {{area}} You Can Trust",
      description:
        "Low cooling is often caused by low refrigerant levels. At Urban AC, we provide accurate AC gas filling in {{area}} with proper pressure checks, leak detection, and performance testing to restore your cooling efficiency quickly and safely."
    },
    cta: {
      title: "Low Cooling? Get",
      highlight: "AC Gas Filling Today in {{area}}",
      primaryLabel: "Call for Gas Filling",
      bullets: [
        "Same-day gas refill service",
        "Leak check included",
        "Fast cooling restoration"
      ]
    }
  },
  "ac-maintenance-amc": {
    hero: {
      title: "AC Maintenance & AMC",
      description:
        "Keep your AC running efficiently with regular maintenance and AMC plans in {{area}}. Our expert technicians provide complete servicing, cleaning, and performance checks with same-day availability and transparent pricing.",
      primaryLabel: "Book AMC Plan",
      highlights: [
        "\u2713 Verified AC Technicians",
        "\u2713 Same-Day AC Service Available",
        "\u2713 Affordable AMC Plans"
      ]
    },
    details: {
      chip: "Urban AC - Maintenance Details",
      title: "Professional AC Maintenance in {{area}} ",
      paragraphs: [
        "Urban AC provides expert AC maintenance and AMC services in {{area}}, {{city}} to ensure your air conditioner delivers consistent cooling and energy efficiency. Whether it's routine servicing or yearly AMC plans, our trained technicians handle every detail with precision.",
        "Our service includes deep cleaning, cooling performance optimization, gas pressure inspection, and complete system health checks. With scheduled AMC visits and priority support, you can avoid breakdowns and enjoy uninterrupted comfort all year round."
      ]
    },
    types: {
      chip: "AC Maintenance & AMC - Urban AC",
      title: "Types of AC Maintenance",
      description: "Every Major AC Maintenance Need - Handled By Local Experts In {{area}}.",
      items: [
        {
          title: "General AC Servicing",
          desc: "Routine maintenance including filter cleaning, airflow check, and basic performance testing.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Deep Cleaning Service",
          desc: "Complete indoor and outdoor unit cleaning for better airflow and cooling efficiency.",
          icon: "\ud83e\uddfc",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "AMC Plans",
          desc: "Annual maintenance contracts with scheduled servicing and priority support.",
          icon: "\ud83d\udcc5",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "Cooling Issue Diagnosis",
          desc: "Inspection and servicing for low cooling, noise, or performance problems.",
          icon: "\ud83d\udd0d",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How The AC Maintenance Visit Works",
      description: "Four simple steps - from booking to a perfectly cooling AC.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Share your AC type and location in {{area}}. We respond quickly."
        },
        {
          num: "02",
          title: "Schedule Visit",
          desc: "Choose a convenient same-day or next-day time slot."
        },
        {
          num: "03",
          title: "Maintenance Service",
          desc: "Deep cleaning, filter wash, and complete AC servicing."
        },
        {
          num: "04",
          title: "Cooling Check",
          desc: "Final performance test to ensure proper cooling and airflow."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our AC Maintenance & AMC Service",
      description: "Real feedback from {{area}} and surrounding areas.",
      items: [
        {
          name: "Amit Sharma",
          loc: "Sama, Vadodara",
          text: "\"Booked AC servicing before summer. Cooling improved instantly and the technician cleaned everything properly. Very satisfied.\"",
          tag: "AC Servicing"
        },
        {
          name: "Neha Patel",
          loc: "New VIP Road",
          text: "\"Took AMC plan for both ACs. Timely service and no follow-up needed. Great experience so far.\"",
          tag: "AMC Plan"
        },
        {
          name: "Rohit Desai",
          loc: "Harni",
          text: "\"My AC had low cooling issue. They serviced and fixed airflow problem quickly. Works perfectly now.\"",
          tag: "Cooling Issue"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ AC Maintenance & AMC  in {{area}}",
      title: "Questions - AC Maintenance in {{area}}",
      description: "Everything you need to know before booking.",
      items: [
        {
          q: "How often should I service my AC?",
          a: "It is recommended to service your AC every 3-4 months for best cooling performance, especially during summer usage."
        },
        {
          q: "What is included in AC maintenance service?",
          a: "Our service includes filter cleaning, coil cleaning, airflow check, drainage inspection, and overall system performance testing."
        },
        {
          q: "What are AMC plans?",
          a: "AMC (Annual Maintenance Contract) includes scheduled servicing, regular inspections, and priority support for your AC throughout the year."
        },
        {
          q: "Do you provide same-day AC servicing in {{area}}?",
          a: "Yes, we offer same-day AC maintenance service in {{area}} and nearby areas depending on slot availability."
        },
        {
          q: "Will servicing improve AC cooling?",
          a: "Yes, regular maintenance improves cooling efficiency, reduces power consumption, and increases AC lifespan."
        },
        {
          q: "Do you service all AC brands?",
          a: "Yes, we service all major AC brands including LG, Daikin, Voltas, Blue Star, Samsung, and more."
        }
      ]
    },
    checklist: [
      {
        text: "Deep cleaning of filters & coils",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Cooling efficiency optimization",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Airflow & drainage inspection",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Complete system health check",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Services In {{area}}",
      description:
        "Urban AC offers complete AC services in {{area}}, {{city}}, including maintenance, AMC plans, repair, installation, and gas filling for all types of air conditioners. Whether you need routine servicing or yearly maintenance contracts, our technicians provide reliable doorstep support across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For AC Maintenance & AMC",
      description: "We provide fast AC maintenance and AMC services across {{area}} and nearby areas in {{city}}."
    },
    quality: {
      chip: "AC Maintenance & AMC  Quality",
      title: "Professional AC Maintenance in {{area}} You Can Trust",
      description:
        "Regular AC maintenance is essential to ensure efficient cooling, lower electricity bills, and longer unit life. At Urban AC, we provide professional AC maintenance and AMC services in {{area}}, {{city}}, designed to keep your air conditioner running smoothly all year round."
    },
    cta: {
      title: "Need AC Maintenance & AMC",
      highlight: "Today in {{area}}?",
      bullets: [
        "Same-Day Servicing Available In {{area}}",
        "Expert Certified AC Technicians Near You",
        "Affordable AMC plans with priority support"
      ]
    }
  },
  "ac-pcb-repair": {
    hero: {
      title: "AC PCB Repair",
      description:
        "AC not turning on or showing display issues? Urban AC provides expert PCB repair services in {{area}} with fast diagnosis and reliable solutions. Our technicians repair circuit boards at component level, helping you avoid costly replacements and restore your AC performance quickly.",
      primaryLabel: "Book AC PCB Repair",
      highlights: [
        "\u2713 Accurate PCB Fault Diagnosis",
        "\u2713 Component-Level Repair Experts",
        "\u2713 Safe And Reliable AC Performance"
      ]
    },
    details: {
      chip: "Urban AC - Service Details",
      title: "Professional AC PCB Repair In {{area}}",
      paragraphs: [
        "Urban AC offers professional AC PCB repair services in {{area}}, {{city}} for all major AC brands. The PCB (Printed Circuit Board) controls all core functions of your AC, and even a small fault can stop the system completely. Our experienced technicians carefully inspect the board, identify damaged components, and repair them with precision",
        "Our PCB repair service includes circuit testing, sensor checks, wiring inspection, and performance validation after repair. We ensure your AC works safely and efficiently without recurring issues, saving both time and money."
      ]
    },
    types: {
      chip: "AC PCB Repair - Urban AC",
      title: "Types of AC PCB Repair",
      description: "Every Major AC PCB Repair Need - Handled By Urban AC Experts In {{area}}.",
      items: [
        {
          title: "AC PCB Repair",
          desc: "Fix no power, display errors, and circuit board faults in AC units.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "PCB Component Repair",
          desc: "Repair damaged ICs, relays, capacitors, and other board components.",
          icon: "\ud83e\ude9f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Electrical & Sensor Fix",
          desc: "Resolve voltage issues, sensor faults, and wiring affecting PCB.",
          icon: "\ud83d\udd04",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "PCB Replacement",
          desc: "Replace completely damaged boards with compatible original parts.",
          icon: "\ud83d\udce6",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How The AC PCB Repair Visit Works",
      description: "Four simple steps - from booking to a perfectly cooling AC.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Share your AC issue and location in {{area}}."
        },
        {
          num: "02",
          title: "Technician Visit",
          desc: "Our expert inspects the PCB and identifies the problem."
        },
        {
          num: "03",
          title: "Repair / Replace",
          desc: "Faulty components are repaired or replaced carefully."
        },
        {
          num: "04",
          title: "Testing & Handover",
          desc: "Full testing to ensure proper AC performance."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our AC PCB Repair Service",
      description: "Real feedback from {{area}} and surrounding areas.",
      items: [
        {
          name: "Karan Patel",
          loc: "Sama, Vadodara",
          text: "\"My AC was not turning on due to PCB issue. They repaired it instead of replacing. Very satisfied!\"",
          tag: "PCB Repair"
        },
        {
          name: "Riya Shah",
          loc: "New VIP Road",
          text: "\"Quick diagnosis and clean repair work. Display issue fixed perfectly.\"",
          tag: "Electrical Fix"
        },
        {
          name: "Vishal Mehta",
          loc: "Harni",
          text: "\"Professional service and reasonable pricing. AC working like new again.\"",
          tag: "AC Repair"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ AC PCB Repair in {{area}}",
      title: "Questions - AC PCB Repair in {{area}}",
      description: "Everything you need to know before booking.",
      items: [
        {
          q: "What are signs of AC PCB failure?",
          a: "AC not turning on, display issues, remote not responding, or random shutdowns are common signs."
        },
        {
          q: "Can PCB be repaired instead of replaced?",
          a: "Yes, most PCB issues can be repaired by fixing damaged components instead of full replacement."
        },
        {
          q: "How long does PCB repair take?",
          a: "Typically 1-2 hours depending on the complexity of the issue."
        },
        {
          q: "Do you repair all AC brands?",
          a: "Yes, we repair PCB issues for all major AC brands like LG, Daikin, Voltas, Samsung, and more."
        },
        {
          q: "Is PCB repair expensive?",
          a: "No, PCB repair is usually much cheaper than replacing the entire board."
        }
      ]
    },
    checklist: [
      {
        text: "Accurate PCB fault diagnosis",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Component-level repair expertise",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Safe electrical and circuit handling",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Complete system testing",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Services In {{area}}",
      description:
        "Urban AC Offers Complete AC Services in {{area}}, {{city}}, Covering Repair, Service, Installation, and Maintenance for all types of air conditioners. Whether you need quick AC repair, regular servicing, or new AC installation, our experienced technicians provide reliable doorstep solutions across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For AC PCB Repair",
      description: "We serve {{area}} and all surrounding localities in {{city}} with fast and reliable support."
    },
    quality: {
      chip: "AC PCB Repair Quality",
      title: "Professional AC PCB Repair In {{area}} You Can Trust",
      description:
        "Our PCB repair service includes circuit testing, sensor checks, wiring inspection, and performance validation after repair. We ensure your AC works safely and efficiently without recurring issues, saving both time and money."
    },
    cta: {
      title: "Need AC PCB Repair",
      highlight: "Today in {{area}}?",
      bullets: [
        "Same-Day AC PCB Repair In {{area}}",
        "Expert Technicians For Circuit-Level Repairs",
        "Affordable Repair Instead Of Costly Replacement"
      ]
    }
  },
  "split-ac-repair": {
    hero: {
      title: "Split AC Repair",
      description:
        "Facing cooling issues with your split AC in {{area}}? Urban AC offers fast and reliable split AC repair services handled by experienced technicians. From low cooling and gas leakage to water dripping and electrical faults, we fix everything with same-day availability and transparent pricing so your AC works like new again.",
      primaryLabel: "Book Split AC Repair",
      highlights: [
        "\u2713 Verified AC Technicians",
        "\u2713 Same-Day AC Installation",
        "\u2713 Affordable Pricing"
      ]
    },
    details: {
      chip: "Urban AC - Service Details",
      title: "Professional Split AC Repair In {{area}}",
      paragraphs: [
        "Urban AC provides professional split AC repair services in {{area}}, {{city}}, ensuring efficient cooling and long-term performance of your air conditioner. Whether your AC is not cooling properly, leaking water, making noise, or facing gas issues, our expert team quickly identifies the problem and fixes it with precision and care.",
        "Our repair service includes complete inspection, fault diagnosis, gas leak detection, electrical checking, and necessary part repairs or replacements. We make sure your AC runs smoothly, delivers proper cooling, and avoids recurring issues, giving you reliable performance throughout the season."
      ]
    },
    types: {
      chip: "AC Split AC Repair - Urban AC",
      title: "Types of Split AC Repair",
      description: "Every Major AC Split Ac Repair Need - Handled By Local Experts In {{area}}.",
      items: [
        {
          title: "Split AC Repair",
          desc: "Complete repair for cooling issues, gas leaks, water leakage, and electrical faults.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Gas Leak Repair",
          desc: "Leak detection, fixing, and proper gas refilling for optimal cooling performance.",
          icon: "\ud83d\udd27",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Water Leakage Fix",
          desc: "Drain pipe cleaning, alignment, and blockage removal to stop water dripping issues.",
          icon: "\ud83d\udca7",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "Noise & Performance Fix",
          desc: "Fix unusual noise, vibration, and low cooling problems with complete inspection.",
          icon: "\ud83d\udd0a",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How The Split AC Repair Visit Works",
      description: "Four simple steps - from booking to a perfectly cooling AC.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Tell us your issue and location in {{area}}. We respond within minutes."
        },
        {
          num: "02",
          title: "Technician Visit",
          desc: "Our expert visits your location and inspects the AC problem."
        },
        {
          num: "03",
          title: "Repair Work",
          desc: "We fix cooling, leakage, gas, or electrical issues quickly and safely."
        },
        {
          num: "04",
          title: "Test & Handover",
          desc: "Full cooling and performance test before completing the job."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our Split AC Repair Service",
      description: "Real feedback from {{area}} and surrounding areas.",
      items: [
        {
          name: "Amit Patel",
          loc: "Sama, Vadodara",
          text: "\"My split AC was not cooling. The technician quickly found the issue and fixed it within an hour. Great service!\"",
          tag: "Cooling Repair"
        },
        {
          name: "Neha Shah",
          loc: "New VIP Road",
          text: "\"Had water leakage problem. They cleaned the drain and fixed alignment perfectly. No issues since then.\"",
          tag: "Leak Fix"
        },
        {
          name: "Rohit Mehta",
          loc: "Harni",
          text: "\"Very professional service. Gas leak was fixed and cooling is now like new. Highly recommended!\"",
          tag: "Gas Repair"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ Split AC Repair in {{area}}",
      title: "Questions - AC Split AC Repair in {{area}}",
      description: "Everything you need to know before booking.",
      items: [
        {
          q: "How quickly can you repair a split AC in {{area}}?",
          a: "We provide same-day repair service in {{area}}. Our technician usually arrives within 30-45 minutes after booking."
        },
        {
          q: "What are common split AC problems you fix?",
          a: "We fix cooling issues, gas leakage, water leakage, noise problems, and electrical faults for all AC brands."
        },
        {
          q: "Do you provide gas refilling during repair?",
          a: "Yes, if required. We first detect and fix leaks, then refill gas to ensure long-term cooling performance."
        },
        {
          q: "How much does split AC repair cost?",
          a: "Repair cost depends on the issue. Basic servicing starts low, and we always inform pricing before work begins."
        },
        {
          q: "Do you repair all AC brands?",
          a: "Yes, we handle all major brands including LG, Daikin, Voltas, Blue Star, Samsung, and more."
        }
      ]
    },
    checklist: [
      {
        text: "Accurate fault diagnosis",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Efficient cooling restoration",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Leak-free gas & drainage fixes",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Complete performance testing",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Services In {{area}}",
      description:
        "Urban AC Offers Complete AC Services in {{area}}, {{city}}, Covering Repair, Service, Installation, and Maintenance for all types of air conditioners. Whether you need quick AC repair, regular servicing, or new AC installation, our experienced technicians provide reliable doorstep solutions across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For Split AC Repair",
      description: "We serve {{area}} and all surrounding localities in {{city}} with fast and reliable support."
    },
    quality: {
      chip: "Split AC Repair Quality",
      title: "Professional Split AC Repair In {{area}} You Can Trust",
      description:
        "Good AC repair is not just about fixing the issue temporarily. At Urban AC, we focus on accurate diagnosis, proper repair, and complete performance testing to ensure your AC works efficiently after service. Our goal is to provide long-lasting repair solutions so you don't face the same problem again."
    },
    cta: {
      title: "Need Split AC Repair",
      highlight: "Today in {{area}}?",
      bullets: [
        "Same-Day Split AC Repair In {{area}}",
        "Expert Technicians For All AC Brands",
        "Affordable Repair With Quick Service"
      ]
    }
  },
  "ac-installation": {
    hero: {
      title: "AC Installation",
      description:
        "Split AC, window AC, reinstallation and shifting by certified technicians in {{area}} with same-day availability and transparent pricing.",
      primaryLabel: "Book Installation",
      highlights: [
        "\u2713 Verified AC Technicians",
        "\u2713 Same-Day AC Installation",
        "\u2713 Affordable Pricing"
      ]
    },
    details: {
      chip: "Urban AC - Service Details",
      title: "Professional AC Installation In {{area}}",
      paragraphs: [
        "Urban AC provides professional AC installation in {{area}}, {{city}}, ensuring efficient cooling and long-term performance for your air conditioner. Whether you are installing a new split AC at home or a window AC in your office, the expert team at Urban AC in {{area}} handles every step with precision and care.",
        "Our AC installation service in {{area}} includes complete site inspection, correct indoor and outdoor unit placement, copper pipe setup, electrical connection, and proper drainage alignment. We make sure your AC is installed according to safety standards so you get optimal cooling without leakage, noise, or performance issues."
      ]
    },
    types: {
      chip: "AC Installation - Urban AC",
      title: "Types of AC Installation",
      description: "Every Major AC Installation Need - Handled By Local Experts In {{area}}.",
      items: [
        {
          title: "Split AC Installation",
          desc: "Indoor and outdoor unit fitting, copper piping, electrical connection, and cooling test.",
          icon: "\u2744\ufe0f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#6366f1] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "Window AC Installation",
          desc: "Secure frame fitting, airflow alignment, drainage check, and performance test.",
          icon: "\ud83e\ude9f",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#1d4ed8] hover:shadow-[0_22px_48px_rgba(59,130,246,0.22)]"
        },
        {
          title: "AC Reinstallation",
          desc: "Safe reinstallation of an existing unit to a new wall position with full testing.",
          icon: "\ud83d\udd04",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#22c55e] hover:to-[#14b8a6] hover:shadow-[0_22px_48px_rgba(20,184,166,0.22)]"
        },
        {
          title: "AC Shifting Support",
          desc: "Careful unit shifting for home or office relocation with no damage guarantee.",
          icon: "\ud83d\udce6",
          cardClass:
            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#d946ef] hover:shadow-[0_22px_48px_rgba(139,92,246,0.22)]"
        }
      ]
    },
    process: {
      title: "How The Installation Visit Works",
      description: "Four simple steps - from booking to a perfectly cooling AC.",
      steps: [
        {
          num: "01",
          title: "Call / WhatsApp",
          desc: "Tell us your AC type and {{area}} address. We respond within minutes."
        },
        {
          num: "02",
          title: "Schedule Slot",
          desc: "Pick a same-day or next-day window that works for you."
        },
        {
          num: "03",
          title: "Installation",
          desc: "Expert mounting, piping, wiring, and finishing - done neatly and correctly."
        },
        {
          num: "04",
          title: "Test & Handover",
          desc: "Full cooling, drainage, and safety test before we leave."
        }
      ]
    },
    reviews: {
      title: "What Customers Say About Our Installation Service",
      description: "Real feedback from {{area}} and surrounding areas.",
      items: [
        {
          name: "Jignesh Patel",
          loc: "Sama, Vadodara",
          text: "\"Booked split AC installation for our flat. The technician arrived on time, mounted perfectly, and checked cooling before leaving. Truly professional.\"",
          tag: "Split AC"
        },
        {
          name: "Priya Shah",
          loc: "New VIP Road",
          text: "\"We needed quick reinstallation after shifting. The team explained everything clearly and finished cleanly in under 2 hours. Highly recommend!\"",
          tag: "AC Reinstallation"
        },
        {
          name: "Rahul Mehta",
          loc: "Harni",
          text: "\"Very impressed with the quality. Mounting, drain pipe setup, and final testing were all done properly without rushing. Will book again.\"",
          tag: "Window AC"
        }
      ]
    },
    faqs: {
      chip: "Urban AC - FAQ AC Installation in {{area}}",
      title: "Questions - AC Installation in {{area}}",
      description: "Everything you need to know before booking.",
      items: [
        {
          q: "How quickly can you provide AC installation in {{area}}?",
          a: "We offer same-day installation in {{area}}, {{city}}. Our response time is typically 30-45 minutes and we can confirm a slot within 24 hours."
        },
        {
          q: "Do you install both split AC and window AC?",
          a: "Yes, we handle both. Our technicians have experience with all major brands and AC types including Voltas, Daikin, Blue Star, LG, and Samsung."
        },
        {
          q: "What is included in a standard installation visit?",
          a: "Wall mounting, copper pipe connection, drain pipe setup, gas pressure check, electrical wiring, and a final cooling test. We include standard installation materials."
        },
        {
          q: "Is there a warranty on the installation work?",
          a: "Yes. We provide a 6-month warranty on all installation work covering mounting, piping, or quality issues. Manufacturer warranty on the unit remains separate."
        },
        {
          q: "Can I book for the same day?",
          a: "Absolutely. Same-day slots are available for {{area}} and nearby areas. WhatsApp or call us to check real-time availability."
        }
      ]
    },
    checklist: [
      {
        text: "Strong and precise installation",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(99,102,241,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Optimized cooling check",
        barClass: "bg-[#3b82f6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(29,78,216,0.03))]",
        dotClass: "bg-[#3b82f6]/55"
      },
      {
        text: "Leak-free drainage alignment",
        barClass: "bg-[#22c55e]",
        tintClass: "bg-[linear-gradient(90deg,rgba(34,197,94,0.12),rgba(20,184,166,0.03))]",
        dotClass: "bg-[#22c55e]/55"
      },
      {
        text: "Complete system testing",
        barClass: "bg-[#8b5cf6]",
        tintClass: "bg-[linear-gradient(90deg,rgba(139,92,246,0.12),rgba(217,70,239,0.03))]",
        dotClass: "bg-[#8b5cf6]/55"
      }
    ],
    related: {
      title: "Related AC Services In {{area}}",
      description:
        "Urban AC Offers Complete AC Services in {{area}}, {{city}}, Covering Repair, Service, Installation, and Maintenance for all types of air conditioners. Whether you need quick AC repair, regular servicing, or new AC installation, our experienced technicians provide reliable doorstep solutions across {{area}}."
    },
    nearby: {
      title: "Nearby Areas For AC Installation",
      description: "We serve {{area}} and all surrounding localities in {{city}} with fast and reliable support."
    },
    quality: {
      chip: "Installation Quality",
      title: "Professional AC Installation In {{area}} You Can Trust",
      description:
        "Good AC installation is about more than just fitting the unit. At Urban AC, we focus on clean mounting, correct alignment, stable drainage, and final performance checks so your AC starts strong from day one in {{area}}."
    },
    cta: {
      title: "Need AC Installation",
      highlight: "Today in {{area}}?",
      bullets: [
        "Same-day slots available in {{area}}",
        "Expert certified technicians near you",
        "6-month installation warranty included"
      ]
    }
  }
};
