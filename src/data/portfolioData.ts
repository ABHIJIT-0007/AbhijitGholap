import { Project, ProfessionalProject, WorkingDrawing, SkillCategory, EducationItem } from '../types';

export const personalInfo = {
  name: 'Abhijit Gholap',
  title: 'Architecture Student',
  degree: 'Bachelor of Architecture (B.Arch)',
  currentLevel: 'Semester VII',
  university: 'Mumbai University',
  location: 'Navi Mumbai, India',
  email: 'abhijitgholap000@gmail.com',
  alternateEmail: 'abhijitgholap79@gmail.com',
  phone: '+91 9834330754',
  heroIntro: 'Exploring architecture through design, planning, sustainability and innovative spatial solutions.',
  aboutBio:
    'A dedicated and enthusiastic Architecture student passionate about architectural design, planning and sustainable development. I enjoy exploring innovative design solutions that balance functionality, aesthetics and environmental responsibility.',
  languages: ['Marathi', 'Hindi', 'English'],
  status: 'Open for Architectural Internships & Collaborations',
};

export const academicProjects: Project[] = [
  {
    id: 'student-housing',
    number: '01',
    name: 'Student Housing',
    location: 'Ghansoli',
    category: 'Academic Project — Semester VII',
    semester: 'Semester VII',
    area: '17,630 sq.m.',
    description:
      'Planned a sustainable student residential campus that fosters learning, interaction and a vibrant community lifestyle.',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?q=80&w=1600&auto=format&fit=crop',
    concept:
      'A community-centric student enclave organizing modular residential clusters around semi-public courtyards, green spill-out zones, and shaded pedestrian arteries to encourage collaborative student life.',
    siteAnalysis: [
      'Site strategically positioned in Ghansoli with proximity to educational hubs and arterial transit routes.',
      'Analysis of prevailing southwest monsoons and intense afternoon solar radiation guided building mass orientation.',
      'Integration of natural topography to minimize cut-and-fill and establish passive storm-water collection basins.',
    ],
    conceptDevelopment: [
      'Macro zoning segregating noisy sports and amphitheatre zones from contemplative study quads.',
      'Decentralized cluster layout reducing institutional monotony and building micro-neighbourhoods of 24–32 students.',
      'Vertical layering: active student amenities at ground, residential units on upper floors.',
    ],
    formDevelopment: [
      'Staggered building blocks configured to create self-shading internal courtyards and wind funnels.',
      'Perforated terracotta and concrete screen facades providing privacy while maximizing cross-ventilation.',
      'Terraced roof gardens functioning as thermal buffer layers and student leisure decks.',
    ],
    plans: [
      { title: 'Master Site Layout', type: 'Site Plan', desc: 'Pedestrian spines, bicycle pathways, emergency vehicular ring road, and landscape zones.' },
      { title: 'Cluster Ground Floor Plan', type: 'Floor Plan', desc: 'Dining hall, student collaborative lounges, laundromat, and warden suites.' },
      { title: 'Typical Residential Floor Plan', type: 'Floor Plan', desc: 'Twin-sharing and quad study dormitories with shared washroom modules and open loggias.' },
    ],
    sectionsAndElevations: [
      { title: 'Transverse Longitudinal Section', type: 'Section', desc: 'Section through central courtyard, showing double-height atrium and passive ventilation stacks.' },
      { title: 'North-South Courtyard Elevation', type: 'Elevation', desc: 'Rhythmic fenestration, louvered screens, and stepped green terraces.' },
    ],
    diagrams: [
      'Microclimate & Wind Circulation Matrix',
      'Solar Radiation & Shading Envelope Analysis',
      'Pedestrian vs Service Circulation Hierarchy',
    ],
    sustainabilityStrategy: [
      'Passive daylighting strategies reducing artificial lighting requirements during daytime by 65%.',
      'Rainwater harvesting system integrated into underground storage cells for campus landscape irrigation.',
      'Use of locally sourced fly ash bricks, terracotta jaalis, and permeable paving.',
    ],
    views3D: [
      { title: 'Central Courtyard Perspective', desc: 'Gathering amphitheatre under indigenous tree canopies with textured concrete facades.' },
      { title: 'Aerial Campus Masterview', desc: 'Axonometric view showcasing cluster rhythm and contiguous green corridors.' },
      { title: 'Student Lounge & Double-Height Atrium', desc: 'Internal visual connectivity between study pods and recreational hubs.' },
    ],
  },
  {
    id: 'mizoram-state-bhavan',
    number: '02',
    name: 'Mizoram State Bhavan',
    location: 'Vashi',
    category: 'Academic Project — Semester VI',
    semester: 'Semester VI',
    area: '10,000 sq.m.',
    description:
      "Designed a cultural and administrative centre celebrating Mizoram's heritage through contemporary architecture.",
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    concept:
      'Translating traditional Mizo craftsmanship, bamboo joinery geometries, and sloped hill settlement forms into an iconic civic and cultural landmark in urban Vashi.',
    siteAnalysis: [
      'Prominent urban corner plot in Vashi with high visibility from commercial boulevards.',
      'Evaluation of pedestrian footfall from transit junctions against ceremonial vehicular arrivals.',
    ],
    conceptDevelopment: [
      'Bifurcated program separating high-security state dignitary suites from public cultural exhibition pavilions.',
      'Central ceremonial atrium functioning as a contemporary interpretation of the traditional Zawlbuk (community hall).',
    ],
    formDevelopment: [
      'Geometric folding canopy inspired by traditional Mizo weaving patterns (Puan).',
      'Podium and tower massing balancing street-level public openness with private VIP guest floors.',
    ],
    plans: [
      { title: 'Ground Floor Cultural Promenade', type: 'Plan', desc: 'Exhibition galleries, craft emporium, auditorium, and banquet hall.' },
      { title: 'Level 03 Administrative & VIP Suites', type: 'Plan', desc: 'State representative offices, conference suites, and official residence quarters.' },
    ],
    sectionsAndElevations: [
      { title: 'Longitudinal Section across Cultural Atrium', type: 'Section', desc: 'Showing triple-height skylit atrium with decorative timber ceiling ribs.' },
      { title: 'Front Civic Facade Elevation', type: 'Elevation', desc: 'Modern curtain glazing layered with custom bronze sunscreen motifs.' },
    ],
    diagrams: [
      'Cultural Symbolism to Architectural Form Mapping',
      'Security & Public Zoning Segregation Diagram',
    ],
    sustainabilityStrategy: [
      'Solar responsive screen facade minimizing solar heat gain on western frontage.',
      'Integration of engineered bamboo wall claddings for acoustic and renewable interior finishes.',
    ],
    views3D: [
      { title: 'Grand Entry Plaza & Canopy View', desc: 'Hero view showing the angular illuminated roof canopy at dusk.' },
      { title: 'Cultural Exhibition Hall', desc: 'Atmospheric gallery with focused spot illumination and warm timber textures.' },
    ],
  },
  {
    id: 'the-evolving-museum',
    number: '03',
    name: 'The Evolving Museum',
    location: 'Dadar',
    category: 'Academic Project — Semester V',
    semester: 'Semester V',
    area: '5,000 sq.m.',
    description:
      'Created a museum that offers an interactive and dynamic journey showcasing the evolution of knowledge and culture.',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    concept:
      'An architectural spatial spiral where visitors experience the progression of time and human knowledge through continuous vertical movement, light, and materiality.',
    siteAnalysis: [
      'Dense urban fabric of Dadar demanding sound mitigation and an introverted spatial experience.',
      'Preservation of existing mature heritage trees incorporated into entry forecourts.',
    ],
    conceptDevelopment: [
      'Chronological experiential ramp looping through distinct thematic eras.',
      'Interplay of light: descending from dark, subterranean ancestral archives to sunlit contemporary galleries.',
    ],
    formDevelopment: [
      'Monolithic sculpted concrete volume punctured by deliberate geometric light shafts.',
      'Cantilevered viewing box framing Dadar urban vistas at the conclusion of the museum sequence.',
    ],
    plans: [
      { title: 'Ground Level Entry & Amphitheatre Plan', type: 'Plan', desc: 'Ticketing pavilion, orientation hall, cafe, and sculpture courtyard.' },
      { title: 'Helical Gallery Level Plan', type: 'Plan', desc: 'Continuous barrier-free exhibit circulation with tactile display pockets.' },
    ],
    sectionsAndElevations: [
      { title: 'Central Void Spiral Section', type: 'Section', desc: 'Continuous experiential ramp and top-lit light well illuminating all levels.' },
    ],
    diagrams: [
      'Visitor Chronological Experience Loop',
      'Controlled Indirect Daylight Penetration Diagram',
    ],
    sustainabilityStrategy: [
      'Thermal mass of board-marked insulated concrete keeping gallery temperatures stable.',
      'Indirect north-light skylights eliminating glare and UV damage on historical exhibits.',
    ],
    views3D: [
      { title: 'Monolithic Facade Composition', desc: 'Sculptural concrete planes with dramatic shadow lines in bright daylight.' },
      { title: 'Spiral Gallery Interior Void', desc: 'Dramatic vertical shaft with ascending bridges and floating display volumes.' },
    ],
  },
  {
    id: 'rural-development-centre',
    number: '04',
    name: 'Rural Development Centre',
    location: 'Shivkar, Panvel',
    category: 'Academic Project — Semester IV',
    semester: 'Semester IV',
    area: '2,100 sq.m.',
    description:
      'Designed a community-focused centre to support rural development, skill enhancement and local empowerment.',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
    concept:
      'A low-impact vernacular campus built with participatory design principles, using locally available stone, CSEB blocks, and expansive pitched roofs.',
    siteAnalysis: [
      'Rural agrarian site in Shivkar with natural water runoff channels and gentle slopes.',
      'Assessment of village path networks ensuring direct accessibility for local artisans and farmers.',
    ],
    conceptDevelopment: [
      'Cluster arrangement reminiscent of traditional Indian wada architecture with central shared chowk.',
      'Multi-purpose training workshops that can open outwards for weekly rural haats and gatherings.',
    ],
    formDevelopment: [
      'Deep overhangs protecting rammed earth and stone masonry walls from heavy Konkan monsoons.',
      'Sloped roofs harvesting roof runoff directed into community percolation ponds.',
    ],
    plans: [
      { title: 'Campus Master Ground Plan', type: 'Plan', desc: 'Artisan workshops, vocational classrooms, agro-testing clinic, and central courtyard.' },
    ],
    sectionsAndElevations: [
      { title: 'Courtyard Section showing Timber Truss Roofs', type: 'Section', desc: 'Natural ventilation through high clerestory vents beneath Mangalore tiled roofs.' },
    ],
    diagrams: [
      'Community Gathering & Circulation Patterns',
      'Vernacular Material Lifecycle & Sourcing Radius',
    ],
    sustainabilityStrategy: [
      'Compressed stabilized earth blocks (CSEB) manufactured on site using local soil.',
      'Zero-energy passive cooling achieved via orientation, high thermal mass, and shaded verandas.',
    ],
    views3D: [
      { title: 'Courtyard Chowk View', desc: 'Warm earth tones, exposed timber posts, and stone plinths under leafy canopies.' },
    ],
  },
  {
    id: 'ngo-learning-centre',
    number: '05',
    name: 'NGO Learning Centre',
    location: 'Kopar Khairane',
    category: 'Academic Project — Semester III',
    semester: 'Semester III',
    area: '1,000 sq.m.',
    description:
      'Developed an educational facility that promotes learning and community engagement through functional design.',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    concept:
      'Flexible, playful educational architecture that breaks the rigid classroom mold to nurture curiosity, collaboration, and safe play for underprivileged youth.',
    siteAnalysis: [
      'Compact plot in Kopar Khairane nestled within a bustling residential neighbourhood.',
      'Strict setback constraints demanding optimized floor plate efficiency.',
    ],
    conceptDevelopment: [
      'Movable partitions allowing classrooms to expand into larger community assembly halls.',
      'Integrated play elements: steps acting as seating, walls as chalkboards, and wide corridors as informal reading nooks.',
    ],
    formDevelopment: [
      'Interlocking geometric volumes creating varied ceiling heights to stimulate sensory experience.',
      'Perforated screen facade offering privacy from neighbouring streets while letting in gentle dappled light.',
    ],
    plans: [
      { title: 'Ground Floor Flexible Learning Plan', type: 'Plan', desc: 'Early learning studios, computer lab, community pantry, and open deck.' },
    ],
    sectionsAndElevations: [
      { title: 'Stepped Activity Section', type: 'Section', desc: 'Multi-level play and study sequence demonstrating visual connectivity.' },
    ],
    diagrams: ['Multi-Use Spatial Reconfiguration Diagrams'],
    sustainabilityStrategy: [
      'Cross-ventilation reducing dependence on mechanical air conditioning.',
      'Non-toxic interior paints and recyclable rubberized flooring.',
    ],
    views3D: [
      { title: 'Sunlit Multi-Purpose Learning Atrium', desc: 'Bright, cheerful spaces with flexible timber modular furniture.' },
    ],
  },
  {
    id: 'weekend-getaway-bungalow',
    number: '06',
    name: 'Weekend Getaway Bungalow',
    location: 'Badlapur',
    category: 'Academic Project — Semester II',
    semester: 'Semester II',
    area: '170 sq.m.',
    description:
      'Planned a peaceful holiday home focused on comfort, relaxation and a strong connection with nature.',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    concept:
      'A retreat pavilion blurring boundaries between indoors and outdoors, oriented towards picturesque views of the Sahyadri foothills.',
    siteAnalysis: [
      'Gently contoured rural parcel in Badlapur surrounded by fruit orchards and stream frontage.',
      'Wind breezes flowing across the stream during dawn and dusk.',
    ],
    conceptDevelopment: [
      'Linear organization keeping living, dining, and sleeping spaces along the panoramic view edge.',
      'Expansive wrap-around deck stepping down into natural rock gardens.',
    ],
    formDevelopment: [
      'Cantilevered flat and butterfly roof planes creating dramatic horizontality.',
      'Floor-to-ceiling glass sliding doors that retract completely into wall pockets.',
    ],
    plans: [
      { title: 'Ground Floor Layout Plan', type: 'Plan', desc: 'Open-concept living lounge, kitchenette, master suite, and viewing terrace.' },
    ],
    sectionsAndElevations: [
      { title: 'Longitudinal Elevation Facing Orchard', type: 'Elevation', desc: 'Exposed black basalt stone foundation with sleek steel and timber roof.' },
    ],
    diagrams: ['Indoor-Outdoor Spatial Threshold Diagram'],
    sustainabilityStrategy: [
      'Locally quarried basalt stone for thermal mass foundations.',
      'Deep roof overhangs shielding interiors from direct summer sun.',
    ],
    views3D: [
      { title: 'Evening Dusk View from Deck', desc: 'Illuminated living spaces opening directly to the private pool and orchard.' },
    ],
  },
  {
    id: 'artists-studio',
    number: '07',
    name: "Artist's Studio",
    location: 'Vangani',
    category: 'Academic Project — Semester I',
    semester: 'Semester I',
    area: '15 sq.m.',
    description:
      'Designed a creative workspace that integrates artistic activities with the natural landscape.',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop',
    concept:
      'A compact, contemplative micro-sanctuary tailored for a visual artist, celebrating northern daylight, timber warmth, and direct contact with nature.',
    siteAnalysis: [
      'Secluded wooded setting in Vangani with gentle elevation and quiet acoustics.',
      'Unobstructed north light availability essential for painting and sculpting.',
    ],
    conceptDevelopment: [
      'Minimalist footprint maximizing every cubic meter through built-in furniture and loft storage.',
      'Angled north-facing skylight casting glare-free diffuse light onto the working easel.',
    ],
    formDevelopment: [
      'Crisp asymmetric pavilion resting lightly on minimal pile footings to protect tree roots.',
    ],
    plans: [
      { title: 'Studio Floor Plan & Loft Level', type: 'Plan', desc: 'Workstation, easel zone, wash sink, material racks, and mezzanine rest perch.' },
    ],
    sectionsAndElevations: [
      { title: 'Cross Section through Light Well', type: 'Section', desc: 'Demonstrating northern roof angle and natural stack ventilation draft.' },
    ],
    diagrams: ['Micro-space Ergonomics & Light Angle Geometry'],
    sustainabilityStrategy: [
      'Lightweight prefabricated timber frame with minimal ground disruption.',
      'Natural linseed oil finishes and wood fiber insulation.',
    ],
    views3D: [
      { title: 'Studio in the Woods', desc: 'Weathered timber facade blending organically into surrounding forest foliage.' },
    ],
  },
];

export const professionalProject: ProfessionalProject = {
  id: 'sports-complex-goa',
  name: 'Sports Complex — Goa',
  location: 'Goa',
  studio: 'Mayur Naik & Associates',
  principalArchitect: 'Ar. Mayur Naik',
  role: 'Architectural Design Assistance',
  category: 'Collaborative Professional Work',
  description:
    'A collaborative professional project developed with Mayur Naik & Associates under the guidance of Principal Architect Ar. Mayur Naik. Contributed to the architectural planning and design development of the sports complex, including organization of sports facilities, open spaces, circulation and overall site planning.',
  highlights: [
    'Comprehensive sports facility zoning conforming to standard sports federation guidelines (SAI norms).',
    'Design and spatial coordination of indoor multi-purpose courts, outdoor stadium seating, and spectator amenities.',
    'Pedestrian vehicular segregation ensuring safe movement during peak event crowds and tournament days.',
    'Integration of tropical climate response strategies suitable for Goa coastal humidity and high monsoon rainfall.',
  ],
  coverImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop',
  gallery: [
    { title: 'Master Site Circulation Plan', desc: 'Clear delineation of VIP, athlete, spectator, and emergency service corridors.' },
    { title: 'Indoor Arena Volume & Roof Structure', desc: 'Long-span steel trusses with acoustic paneling and high clerestory ventilation.' },
    { title: 'Outdoor Sports Pavilion & Seating', desc: 'Tiered spectator grandstands shaded by lightweight tensile membrane canopies.' },
    { title: 'Landscape & Open Recreational Plaza', desc: 'Permeable sports plaza connecting the community grounds with training facilities.' },
  ],
};

export const workingDrawings: WorkingDrawing[] = [
  {
    id: 'setting-out-plan',
    title: 'Setting Out Plan',
    sheetNumber: 'WD-01',
    scale: '1:50',
    category: 'Substructure',
    description: 'Precision boundary coordinates, grid offsets, and benchmark references for physical site staking.',
  },
  {
    id: 'centre-line-plan',
    title: 'Centre Line Plan',
    sheetNumber: 'WD-02',
    scale: '1:50',
    category: 'Substructure',
    description: 'Column grid intersections, dimensional alignments, and grid reference axes for structural execution.',
  },
  {
    id: 'plinth-beam-plan',
    title: 'Plinth Beam Plan',
    sheetNumber: 'WD-03',
    scale: '1:50',
    category: 'Structural',
    description: 'Plinth level tie beams, reinforcement callouts, depth notations, and foundational slab connections.',
  },
  {
    id: 'ground-floor-plan',
    title: 'Ground Floor Plan',
    sheetNumber: 'WD-04',
    scale: '1:50',
    category: 'Architectural',
    description: 'Comprehensive architectural layout with masonry dimensions, door/window schedules, and level markings.',
  },
  {
    id: 'terrace-plan',
    title: 'Terrace Plan',
    sheetNumber: 'WD-05',
    scale: '1:50',
    category: 'Roof & Drainage',
    description: 'Terrace slopes, rainwater drainage spouts, parapet details, waterproofing layers, and lift machine room.',
  },
  {
    id: 'sections',
    title: 'Detailed Sections',
    sheetNumber: 'WD-06',
    scale: '1:25',
    category: 'Sectional Details',
    description: 'Full-height architectural section detailing foundation step-downs, lintel levels, slab thicknesses, and floor finishes.',
  },
  {
    id: 'staircase-details',
    title: 'Staircase Details',
    sheetNumber: 'WD-07',
    scale: '1:20',
    category: 'Special Details',
    description: 'Tread-to-riser ratios, waist slab reinforcement, handrail balustrade fixings, and nosing profiles.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: '2D Drafting',
    items: ['AutoCAD'],
  },
  {
    category: '3D Modelling',
    items: ['SketchUp'],
  },
  {
    category: '3D Rendering',
    items: ['Lumion'],
  },
  {
    category: 'Graphic / Image Editing',
    items: ['Adobe Photoshop'],
  },
  {
    category: 'Presentation',
    items: ['MS Office', 'Google Slides', 'Canva'],
  },
  {
    category: 'Other Architectural Skills',
    items: ['Hand Sketching', 'Model Making', 'Video Editing'],
  },
];

export const educationTimeline: EducationItem[] = [
  {
    period: '2024 – Present',
    degree: 'Bachelor of Architecture (B.Arch)',
    institution: 'Lokmanya Tilak Institute of Architectural and Design Studies',
    location: 'Mumbai University',
    status: 'Currently Pursuing — Semester VII',
    notes: 'Focus on sustainable urban design, large-scale institutional campuses, and environmental planning.',
  },
  {
    period: '2023 – 2024',
    degree: 'Bachelor of Architecture (B.Arch)',
    institution: 'B.R. Harne College of Architecture',
    location: 'Mumbai University',
    status: 'Academic Transfer',
    notes: 'Core architectural design development, structural principles, and building construction technologies.',
  },
  {
    period: '2022 – 2023',
    degree: 'Higher Secondary Education (12th Standard)',
    institution: 'Mahatma Gandhi Vidyalaya and Junior College',
    location: 'Dhasai',
    notes: 'Higher secondary coursework with emphasis on mathematics and science.',
  },
  {
    period: '2020 – 2021',
    degree: 'Secondary Education (10th Standard)',
    institution: 'Mahatma Gandhi Vidyalaya and Junior College',
    location: 'Dhasai',
    notes: 'Secondary school certificate foundation with high academic standing.',
  },
];

export const designPhilosophy = [
  {
    pillar: 'SPACES',
    tagline: 'Form, Function & Meaning',
    description:
      'Creating functional, meaningful and engaging architectural environments that elevate daily life through deliberate proportions, lighting, and tactile materiality.',
    symbol: '01 / S',
  },
  {
    pillar: 'PEOPLE',
    tagline: 'Community & Human Scale',
    description:
      'Designing spaces that encourage interaction, comfort, community and human experience, putting inhabitant well-being and social connectivity at the heart of every layout.',
    symbol: '02 / P',
  },
  {
    pillar: 'PLANET',
    tagline: 'Sustainability & Stewardship',
    description:
      'Exploring sustainable, climate-responsive and environmentally responsible architecture through passive bioclimatic strategies, local materiality, and renewable systems.',
    symbol: '03 / E',
  },
];
