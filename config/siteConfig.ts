// config/siteConfig.ts

export const SITE_INFO = {
  companyName: 'Taksha Engineering Pvt. Ltd.',
  phone: '+65 6970 9355',
  phoneHref: 'tel:+6569709355',
  email: 'admin@taksha.com.sg',
  emailHref: 'mailto:admin@taksha.com.sg',
  address: {
    line1: '12 Lorong Bakar Batu, #02-01',
    line2: 'Singapore 348745',
    full: '12 Lorong Bakar Batu, #02-01, Singapore 348745',
  },
};

export const SERVICES = [
  {
    label: "Painting Works",
    slug: "painting",
    image: "/services/painting.png",
    subItems: [
    {
        label: "Public Residential",
        image: "/services/Paiting_pubRes.png",
    },
    {
        label: "Private Residential",
        image: "/services/Paiting_priRes.png",
    },
    {
        label: "Institution",
        image: "/services/Paiting_insitution.png",
    },
    {
        label: "Hospital",
        image: "/services/Paiting_hospital.png",
    },
    ]
  },
  {
    label: "Bird Proofing Works",
    slug: "bird-proofing",
    image: "/services/birdProofing.png",
  },
  {
    label: "Façade Cleaning & Sealant Works",
    slug: "facade",
    image: "/services/facadeCleaning.png",
  },
  {
    label: "Tension Membrane Works",
    slug: "tension",
    image: "/services/tensionMembrane.png",
    subItems: [
    {
        label: "Installation",
        image: "/services/tensionMembrane_installation.png",
    },
    {
        label: "Repair & Maintenance",
        image: "/services/tensionMembrane_repair.png",
    },
    ],
  },
  {
    label: "Fire-rated Ceiling & Partition Works",
    slug: "fire-rated",
    image: "/services/frCeiling.png",
  },
  {
    label: "Aluminium Works",
    slug: "aluminium",
    image: "/services/aluminum.png",
    subItems: [
    {
        label: "Ceiling",
        image: "/services/aluminum_ceiling.png",
    },
    {
        label: "Trellis",
        image: "/services/aluminum_trellis.png",
    },
    {
        label: "Louver",
        image: "/services/aluminum_louver.png",
    },
    {
        label: "Cladding",
        image: "/services/aluminum_cladding.png",
    },
    {
        label: "Flashing",
        image: "/services/aluminum_flashing.png",
    },
    ],
  },
  {
    label: "Roofing Works",
    slug: "roofing",
    image: "/services/roofing.png",
    subItems: [
    {
        label: "Metal Roof",
        image: "/services/roofing_metal.png",
    },
    {
        label: "Aluminium Composite Panel Roof",
        image: "/services/roofing_ACP.png",
    },
    ],
  },
  {
    label: "Canopy Works",
    slug: "canopy",
    image: "/services/canopy.png",
    subItems: [
    {
        label: "ACP Canopy",
        image: "/services/canopy_acp.png",
    },
    {
        label: "Polycarbonate Canopy",
        image: "/services/canopy_polycarbonate.png",
    },
    ],
  },
  {
    label: "Glass Works",
    slug: "glass",
    image: "/services/glass.png",
    subItems: [
    {
        label: "Glass Partition and Door",
        image: "/services/glass_doorPartition.png",
    },
    {
        label: "Glass Canopy",
        image: "/services/glass_canopy.png",
    },
    {
        label: "Fire-rated Glass Panel and Door",
        image: "/services/glass_frg.png",
    },
    ],
  },
  {
    label: "General Construction Works",
    slug: "general",
    image: "/services/construction.png",
  },
  {
    label: "Demolition & Reinstatement Works",
    slug: "demolition",
    image: "/services/demolition.png",
  },
  {
    label: "Waterproofing Works",
    slug: "waterproofing",
    image: "/services/waterProofing.png",
  },
];
