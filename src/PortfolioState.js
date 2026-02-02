// Images
import athlete from "./img/athlete-small.png";
import athlete2 from "./img/athlete2.png";
import theracer from "./img/theracer-small.png";
import theracer2 from "./img/theracer-small.png";
import goodtimes from "./img/goodtimes-small.png";
import goodtimes2 from "./img/goodtimes-small.png";

export const PortfolioState = () => {
  return [
    {
      title: "Summer Portrait Session",
      category: "Portraits",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/summer-portrait-session",
      description: "A vibrant outdoor portrait session capturing natural beauty and personality.",
      details: [
        {
          title: "Natural Lighting",
          description:
            "Captured during golden hour for the most flattering natural light and warm tones.",
        },
        {
          title: "Location Scouting",
          description:
            "Carefully selected outdoor locations that complement the subject's style and personality.",
        },
        {
          title: "Professional Retouching",
          description:
            "Expertly edited to enhance natural features while maintaining authenticity.",
        },
      ],
      gallery: [athlete, athlete2],
    },
    {
      title: "Corporate Event Coverage",
      category: "Events",
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: "/work/corporate-event-coverage",
      description: "Full-day event photography capturing key moments and networking atmosphere.",
      details: [
        {
          title: "Comprehensive Coverage",
          description:
            "From setup to closing remarks, every important moment documented professionally.",
        },
        {
          title: "Candid Moments",
          description:
            "Natural, unposed shots that capture the energy and connections of your event.",
        },
        {
          title: "Quick Turnaround",
          description:
            "Edited highlights delivered within 48 hours for immediate marketing use.",
        },
      ],
      gallery: [goodtimes, goodtimes2],
    },
    {
      title: "Elegant Wedding Photography",
      category: "Weddings",
      mainImg: theracer,
      secondaryImg: theracer2,
      url: "/work/elegant-wedding-photography",
      description: "A beautiful celebration of love captured from ceremony to reception.",
      details: [
        {
          title: "Full Day Coverage",
          description:
            "Complete documentation of your special day, from getting ready to the last dance.",
        },
        {
          title: "Artistic Approach",
          description:
            "Blend of candid moments and artfully composed shots that tell your unique love story.",
        },
        {
          title: "Second Shooter",
          description:
            "Multiple angles ensure no precious moment is missed during your celebration.",
        },
      ],
      gallery: [theracer, theracer2],
    },
    {
      title: "Brand Campaign Shoot",
      category: "Commercial",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/brand-campaign-shoot",
      description: "Professional commercial photography for marketing and advertising campaigns.",
      details: [
        {
          title: "Brand Aligned",
          description:
            "Images crafted to match your brand identity and marketing objectives.",
        },
        {
          title: "Studio Quality",
          description:
            "Professional lighting and equipment for crisp, commercial-grade results.",
        },
        {
          title: "Usage Rights",
          description:
            "Clear licensing terms for web, print, and social media usage.",
        },
      ],
      gallery: [athlete, athlete2],
    },
    {
      title: "Family Portrait Session",
      category: "Portraits",
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: "/work/family-portrait-session",
      description: "Warm, timeless family portraits that you'll treasure for generations.",
      details: [
        {
          title: "Relaxed Atmosphere",
          description:
            "Patient, friendly approach that helps everyone feel comfortable and natural.",
        },
        {
          title: "Multiple Setups",
          description:
            "Variety of poses and groupings to capture all family combinations.",
        },
        {
          title: "Print Ready",
          description:
            "High-resolution files perfect for framing, albums, and holiday cards.",
        },
      ],
      gallery: [goodtimes, goodtimes2],
    },
    {
      title: "Destination Wedding",
      category: "Weddings",
      mainImg: theracer,
      secondaryImg: theracer2,
      url: "/work/destination-wedding",
      description: "Breathtaking destination wedding photography in stunning locations.",
      details: [
        {
          title: "Travel Included",
          description:
            "Experienced with destination shoots and familiar with travel logistics.",
        },
        {
          title: "Location Expertise",
          description:
            "Scout the best spots at your venue for unforgettable wedding portraits.",
        },
        {
          title: "Weather Backup Plans",
          description:
            "Prepared with solutions for any weather to ensure beautiful photos.",
        },
      ],
      gallery: [theracer, theracer2],
    },
  ];
};

export const portfolioCategories = [
  "All",
  "Portraits",
  "Weddings",
  "Events",
  "Commercial",
];
