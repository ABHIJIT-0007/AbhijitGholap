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
    id: 'bungalow-design',
    number: '01',
    name: 'Bungalow Design',
    location: 'Dhasai, Murbad',
    category: 'Academic Project — Courtyard Bungalow',
    semester: 'Semester V',
    area: '201 sq.m.',
    description:
      'A contemporary interpretation of the traditional Maratha Wada, organizing spatial experience around a central courtyard as the social and ecological heart of the home.',
    featured: true,
    coverImage: '/images/bungalow-design/cover.png',
    pdfUrl: '/documents/bungalow-design.pdf',
    fullPdfPages: ['/images/bungalow-design/page_1.png', '/images/bungalow-design/page_2.png'],
    concept:
      'The bungalow is a contemporary interpretation of the traditional Maratha Wada. The central courtyard is taken as the primary planning element, but instead of replicating the traditional form, I have transformed it into a modern spatial experience. The courtyard acts as the social heart of the house, bringing light, ventilation, greenery and family interaction into the dwelling.',
    siteAnalysis: [
      'Location in Dhasai, Murbad with plot dimensions of 20.10m x 10.00m.',
      '3m wide entry access road guiding ceremonial and domestic approach.',
      'Natural breeze and solar angles leveraged for sky-courtyard illumination.',
    ],
    conceptDevelopment: [
      'Traditional Maratha Wada spatial hierarchy updated with modern residential zoning.',
      'Central open courtyard acting as an environmental stack for air circulation and microclimate cooling.',
      'Integration of private master suite, devghar, kitchen, and living room around the central green core.',
    ],
    formDevelopment: [
      'Clean rectilinear geometric massing with bold framed balcony cutouts on the upper level.',
      'Double-height sky courtyard connecting lower living areas directly to the sky and monsoon rain.',
      'Terrace seating and open balcony overlooking lush exterior landscaping.',
    ],
    plans: [
      {
        title: 'Ground Floor Plan',
        type: 'Floor Plan',
        desc: 'Living room, Devghar, Kitchen, Master Bedroom with toilet, Porch, and Central Open Courtyard.',
        image: '/images/bungalow-design/ground_floor_plan.png',
      },
      {
        title: 'First Floor Plan',
        type: 'Floor Plan',
        desc: 'Two bedrooms, shared bathroom, central open courtyard void, and open terrace seating area.',
        image: '/images/bungalow-design/first_floor_plan.png',
      },
      {
        title: 'Terrace Plan',
        type: 'Roof Plan',
        desc: 'Roof deck with central open sky void above the courtyard.',
        image: '/images/bungalow-design/terrace_plan.png',
      },
    ],
    sectionsAndElevations: [
      {
        title: 'Courtyard Spatial Section & Elevation',
        type: 'Section',
        desc: 'Demonstrating double-height vertical light well and green courtyard buffer.',
        image: '/images/bungalow-design/render_courtyard_sky.png',
      },
    ],
    diagrams: [
      'Wada Spatial Transformation Matrix',
      'Passive Solar & Sky Courtyard Air Stack',
      'Circulation & Privacy Hierarchy',
    ],
    sustainabilityStrategy: [
      'Microclimate cooling through central open courtyard stack effect.',
      'Passive daylit interiors reducing artificial lighting demands during peak hours.',
      'Lush indoor vegetation integrated directly into living area floor plates.',
    ],
    views3D: [
      { title: 'Modern Wada Exterior Elevation', desc: 'Framed balcony and warm textured plaster finish.', image: '/images/bungalow-design/cover.png' },
      { title: 'Living Room & Courtyard Connection', desc: 'Seamless view from living space into the green courtyard.', image: '/images/bungalow-design/render_interior.png' },
      { title: 'Double Height Sky Courtyard View', desc: 'Upward view through open courtyard skylight.', image: '/images/bungalow-design/render_courtyard_sky.png' },
      { title: 'First Floor Balcony Deck', desc: 'Open terrace seating area overlooking surrounding landscape.', image: '/images/bungalow-design/render_balcony.png' },
    ],
  },
  {
    id: 'tiny-house',
    number: '02',
    name: 'Tiny House',
    location: 'Navi Mumbai',
    category: 'Compact Micro-Housing Project',
    semester: 'Semester III',
    area: '15 sq.m. (5.5m x 2.7m)',
    description:
      'An efficiently planned micro-housing unit featuring multi-functional space saving mechanisms, integrated storage walls, and sleek modern interior styling.',
    featured: false,
    coverImage: '/images/tiny-house/cover.png',
    pdfUrl: '/documents/tiny-house.pdf',
    fullPdfPages: ['/images/tiny-house/page_1.png'],
    concept:
      'Maximizing living quality within a compact 15 sq.m footprint through ergonomic vertical layering, wall-mounted foldaway furniture, and clean open circulation.',
    siteAnalysis: [
      'Optimized for dense urban micro-plots requiring self-contained living, cooking, and sanitary facilities.',
      'Strict 5.50m x 2.70m envelope designed for maximum spatial utility.',
    ],
    conceptDevelopment: [
      'Bifurcated layout separating active kitchen/dining zone from living and sleeping quarters.',
      'Custom wall unit integrating TV console, book shelving, and fold-down bed mechanism.',
    ],
    formDevelopment: [
      'Compact rectilinear module with full-height floor-to-ceiling storage walls.',
      'Monochrome checkerboard flooring providing visual depth to micro interiors.',
    ],
    plans: [
      {
        title: 'Tiny House Floor Plan',
        type: 'Floor Plan',
        desc: 'Living area (2.70m x 1.81m), Kitchen counter (2.35m x 1.81m), and Compact Bath.',
        image: '/images/tiny-house/plan.png',
      },
    ],
    sectionsAndElevations: [
      {
        title: 'Section A-A\' (Transverse Wall Section)',
        type: 'Section',
        desc: 'Full height cabinetry and TV wall elevation.',
        image: '/images/tiny-house/sections.png',
      },
      {
        title: 'Section B-B\' (Sanitary Section)',
        type: 'Section',
        desc: 'Compact bathroom and plumbing shaft layout.',
        image: '/images/tiny-house/sections.png',
      },
    ],
    diagrams: [
      'Space Efficiency & Foldable Furniture Ergonomics',
      'Plumbing & Compact Utility Core Matrix',
    ],
    sustainabilityStrategy: [
      'Minimal material footprint utilizing modular timber and laminate panels.',
      'Compact energy-efficient appliances and water-saving sanitary fixtures.',
    ],
    views3D: [
      { title: 'Interior Living & Foldable Bed', desc: 'Space-saving wall bed system folded down into living area.', image: '/images/tiny-house/render_foldable_bed.png' },
      { title: 'Kitchen Counter & Dining Alcove', desc: 'Compact kitchen counter with twin burner stove and drop-leaf table.', image: '/images/tiny-house/render_kitchen.png' },
      { title: 'TV Wall & Storage Shelf Unit', desc: 'Custom wood accent wall with embedded shelving.', image: '/images/tiny-house/render_tv_shelf.png' },
      { title: '3D Axonometric Cutaway', desc: 'Overall spatial volume showing all micro-zones in 3D.', image: '/images/tiny-house/cover.png' },
    ],
  },
  {
    id: 'mizoram-state-bhavan',
    number: '03',
    name: 'Mizoram State Bhavan',
    location: 'Vashi',
    category: 'Academic Project — Semester VI',
    semester: 'Semester VI',
    area: '10,000 sq.m.',
    description:
      "Designed a cultural and administrative centre celebrating Mizoram's heritage through contemporary architecture.",
    featured: true,
    coverImage: '/images/mizoram-state-bhavan/page-01.png',
    pdfUrl: '/documents/Mizoram State Bhavan.pdf',
    fullPdfPages: [
      '/images/mizoram-state-bhavan/page-01.png',
      '/images/mizoram-state-bhavan/page-02.png',
      '/images/mizoram-state-bhavan/page-03.png',
      '/images/mizoram-state-bhavan/page-04.png',
    ],
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
      {
        title: 'Master Layout & Site Zoning Plan',
        type: 'Master Plan',
        desc: 'Site entrance, vehicular drop-off, parking zoning, and landscaped courtyard connections.',
        image: '/images/mizoram-state-bhavan/page-02.png',
      },
      {
        title: 'Ground & Level Architectural Floor Plans',
        type: 'Floor Plan',
        desc: 'Exhibition galleries, craft emporium, administration, and VIP residence suites.',
        image: '/images/mizoram-state-bhavan/page-03.png',
      },
    ],
    sectionsAndElevations: [
      {
        title: 'Building Sections & Facade Elevations',
        type: 'Section / Elevation',
        desc: 'Longitudinal sections showing central skylit atrium, bamboo ceiling structures, and solar screen facade.',
        image: '/images/mizoram-state-bhavan/page-04.png',
      },
    ],
    diagrams: [
      'Cultural Symbolism to Architectural Form Mapping',
      'Security & Public Zoning Segregation Diagram',
      'Bamboo Lattice & Thermal Buffer Envelope',
    ],
    sustainabilityStrategy: [
      'Solar responsive screen facade minimizing solar heat gain on western frontage.',
      'Integration of engineered bamboo wall claddings for acoustic and renewable interior finishes.',
      'Deep verandas and high thermal mass podium reducing artificial cooling demand.',
    ],
    views3D: [
      { title: 'Sheet 01 - Concept & Cultural Context', desc: 'Site concept, zoning, and cultural design philosophy.', image: '/images/mizoram-state-bhavan/page-01.png' },
      { title: 'Sheet 02 - Master Plan & Site Layout', desc: 'Master plan, ground layout, and circulation diagrams.', image: '/images/mizoram-state-bhavan/page-02.png' },
      { title: 'Sheet 03 - Detailed Architectural Floor Plans', desc: 'Detailed floor plans and spatial program distribution.', image: '/images/mizoram-state-bhavan/page-03.png' },
      { title: 'Sheet 04 - Sections & Structural Details', desc: 'Building sections, structural details, and elevation views.', image: '/images/mizoram-state-bhavan/page-04.png' },
    ],
  },
  {
    id: 'the-evolving-museum',
    number: '04',
    name: 'The Evolving Museum',
    location: 'Dadar',
    category: 'Academic Project — Semester V',
    semester: 'Semester V',
    area: '5,000 sq.m.',
    description:
      'Created a museum that offers an interactive and dynamic journey showcasing the evolution of knowledge and culture.',
    featured: false,
    coverImage: '/images/the-evolving-museum/page-01.png',
    pdfUrl: '/documents/The Evolution of Museum.pdf',
    fullPdfPages: [
      '/images/the-evolving-museum/page-01.png',
      '/images/the-evolving-museum/page-02.png',
      '/images/the-evolving-museum/page-03.png',
    ],
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
      {
        title: 'Master Layout & Entry Level Plan',
        type: 'Floor Plan',
        desc: 'Ticketing pavilion, orientation hall, central open courtyard, and sculpture gardens.',
        image: '/images/the-evolving-museum/page-02.png',
      },
      {
        title: 'Helical Gallery Circulation Plan',
        type: 'Gallery Plan',
        desc: 'Continuous barrier-free exhibit circulation with tactile display alcoves.',
        image: '/images/the-evolving-museum/page-03.png',
      },
    ],
    sectionsAndElevations: [
      {
        title: 'Longitudinal & Void Spiral Sections',
        type: 'Section',
        desc: 'Continuous experiential ramp and top-lit light well illuminating all gallery levels.',
        image: '/images/the-evolving-museum/page-03.png',
      },
    ],
    diagrams: [
      'Visitor Chronological Experience Loop',
      'Controlled Indirect Daylight Penetration Diagram',
      'Acoustical Buffer & Concrete Thermal Massing',
    ],
    sustainabilityStrategy: [
      'Thermal mass of board-marked insulated concrete keeping gallery temperatures stable.',
      'Indirect north-light skylights eliminating glare and UV damage on historical exhibits.',
    ],
    views3D: [
      { title: 'Sheet 01 - Concept & Dadar Site Context', desc: 'Concept statement, site location in Dadar, and urban contextual analysis.', image: '/images/the-evolving-museum/page-01.png' },
      { title: 'Sheet 02 - Architectural Layout & Floor Plans', desc: 'Detailed floor plans, orientation hall, and courtyard layouts.', image: '/images/the-evolving-museum/page-02.png' },
      { title: 'Sheet 03 - Sections, Light Shafts & Helical Ramp', desc: 'Architectural sections, helical ramp circulation, and light well details.', image: '/images/the-evolving-museum/page-03.png' },
    ],
  },
  {
    id: 'rural-development-centre',
    number: '05',
    name: 'Rural Development Centre',
    location: 'Shivkar, Panvel',
    category: 'Academic Project — Semester IV',
    semester: 'Semester IV',
    area: '2,100 sq.m.',
    description:
      'Designed a community-focused centre to support rural development, skill enhancement and local empowerment.',
    featured: false,
    coverImage: '/images/rural-development-centre/page-01.png',
    pdfUrl: '/documents/Portfolio.pdf',
    fullPdfPages: [
      '/images/rural-development-centre/page-01.png',
      '/images/rural-development-centre/page-02.png',
    ],
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
      {
        title: 'Campus Master Layout & Vernacular Plan',
        type: 'Master Plan',
        desc: 'Artisan workshops, vocational classrooms, agro-testing clinic, and central courtyard.',
        image: '/images/rural-development-centre/page-01.png',
      },
    ],
    sectionsAndElevations: [
      {
        title: 'Courtyard Sections & Roof Details',
        type: 'Section',
        desc: 'Natural ventilation through high clerestory vents beneath Mangalore tiled roofs.',
        image: '/images/rural-development-centre/page-02.png',
      },
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
      { title: 'Sheet 01 - Campus Master Layout & Workshops', desc: 'Master plan, workshop clusters, and courtyard spaces.', image: '/images/rural-development-centre/page-01.png' },
      { title: 'Sheet 02 - Vernacular Sections & Earth Construction', desc: 'Building sections, CSEB details, and timber roof trusses.', image: '/images/rural-development-centre/page-02.png' },
    ],
  },
  {
    id: 'ngo-learning-centre',
    number: '06',
    name: 'NGO Learning Centre',
    location: 'Kopar Khairane',
    category: 'Academic Project — Semester III',
    semester: 'Semester III',
    area: '1,000 sq.m.',
    description:
      'Developed an educational facility that promotes learning and community engagement through functional design.',
    featured: false,
    coverImage: '/images/ngo-learning-centre/page-01.png',
    pdfUrl: '/documents/Portfolio.pdf',
    fullPdfPages: [
      '/images/ngo-learning-centre/page-01.png',
      '/images/ngo-learning-centre/page-02.png',
      '/images/ngo-learning-centre/page-03.png',
      '/images/ngo-learning-centre/page-04.png',
    ],
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
      {
        title: 'Flexible Learning Floor Plans',
        type: 'Floor Plan',
        desc: 'Early learning studios, computer lab, community pantry, and open deck.',
        image: '/images/ngo-learning-centre/page-02.png',
      },
    ],
    sectionsAndElevations: [
      {
        title: 'Building Elevations & Facade Detailing',
        type: 'Elevation',
        desc: 'Front, left side, and rear elevations showing pitched roofs, brick textures, and timber pergolas.',
        image: '/images/ngo-learning-centre/page-03.png',
      },
      {
        title: "Stepped Activity Sections X-X' & Y-Y'",
        type: 'Section',
        desc: 'Demonstrating generous vertical headroom and natural cross-ventilation draft.',
        image: '/images/ngo-learning-centre/page-04.png',
      },
    ],
    diagrams: [
      'Multi-Use Spatial Reconfiguration Diagrams',
      'Microclimatic Breeze Channels & Daylight Optimization',
    ],
    sustainabilityStrategy: [
      'Cross-ventilation reducing dependence on mechanical air conditioning.',
      'Non-toxic interior paints and recyclable rubberized flooring.',
    ],
    views3D: [
      { title: 'Sheet 01 - Master Concept & Spatial Zoning', desc: 'Master concept and spatial organization.', image: '/images/ngo-learning-centre/page-01.png' },
      { title: 'Sheet 02 - Learning Studios & Floor Layouts', desc: 'Floor plans and learning space layouts.', image: '/images/ngo-learning-centre/page-02.png' },
      { title: 'Sheet 03 - Elevations & Brick Materiality', desc: 'Elevations and structural details.', image: '/images/ngo-learning-centre/page-03.png' },
      { title: 'Sheet 04 - Longitudinal & Cross Sections', desc: 'Sections and microclimatic breeze channels.', image: '/images/ngo-learning-centre/page-04.png' },
    ],
  },
  {
    id: 'weekend-getaway-bungalow',
    number: '07',
    name: 'Weekend Getaway Bungalow',
    location: 'Badlapur',
    category: 'Academic Project — Semester II',
    semester: 'Semester II',
    area: '170 sq.m.',
    description:
      'Planned a peaceful holiday home focused on comfort, relaxation and a strong connection with nature.',
    featured: false,
    coverImage: '/portfolio-pages/page-24.png',
    pdfUrl: '/documents/Portfolio.pdf',
    fullPdfPages: ['/portfolio-pages/page-24.png'],
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
      { title: 'Ground Floor Layout Plan', type: 'Plan', desc: 'Open-concept living lounge, kitchenette, master suite, and viewing terrace.', image: '/portfolio-pages/page-24.png' },
    ],
    sectionsAndElevations: [
      { title: 'Longitudinal Elevation Facing Orchard', type: 'Elevation', desc: 'Exposed black basalt stone foundation with sleek steel and timber roof.', image: '/portfolio-pages/page-24.png' },
    ],
    diagrams: ['Indoor-Outdoor Spatial Threshold Diagram'],
    sustainabilityStrategy: [
      'Locally quarried basalt stone for thermal mass foundations.',
      'Deep roof overhangs shielding interiors from direct summer sun.',
    ],
    views3D: [
      { title: 'Portfolio Presentation Page 24', desc: 'Illuminated living spaces opening directly to private terrace and orchard.', image: '/portfolio-pages/page-24.png' },
    ],
  },
  {
    id: 'artists-studio',
    number: '08',
    name: "Artist's Studio",
    location: 'Vangani',
    category: 'Academic Project — Semester I',
    semester: 'Semester I',
    area: '15 sq.m.',
    description:
      'Designed a creative workspace that integrates artistic activities with the natural landscape.',
    featured: false,
    coverImage: '/portfolio-pages/page-25.png',
    pdfUrl: '/documents/Portfolio.pdf',
    fullPdfPages: ['/portfolio-pages/page-25.png'],
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
      { title: 'Studio Floor Plan & Loft Level', type: 'Plan', desc: 'Workstation, easel zone, wash sink, material racks, and mezzanine rest perch.', image: '/portfolio-pages/page-25.png' },
    ],
    sectionsAndElevations: [
      { title: 'Cross Section through Light Well', type: 'Section', desc: 'Demonstrating northern roof angle and natural stack ventilation draft.', image: '/portfolio-pages/page-25.png' },
    ],
    diagrams: ['Micro-space Ergonomics & Light Angle Geometry'],
    sustainabilityStrategy: [
      'Lightweight prefabricated timber frame with minimal ground disruption.',
      'Natural linseed oil finishes and wood fiber insulation.',
    ],
    views3D: [
      { title: 'Portfolio Presentation Page 25', desc: 'Weathered timber facade blending organically into surrounding forest foliage.', image: '/portfolio-pages/page-25.png' },
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
    'A collaborative professional project involving architectural planning and design development of a sports complex, including the organization of sports facilities, open spaces, circulation, and overall site planning.',
  pdfUrl: '/documents/Portfolio.pdf',
  sheetImage: '/images/sports-complex-goa/page-01.png',
  fullSheetImage: '/images/sports-complex-goa/page-01.png',
  coverImage: '/images/sports-complex-goa/page-01.png',
  plotArea: '28,195 sq.m.',
  totalArea: '24,268 sq.m.',
  roadOccupancy: '2,040 sq.m. (7.2%)',
  highlights: [
    'Architectural planning and comprehensive spatial layout for 28,195 sq.m. sports infrastructure plot in Goa.',
    'Clear vehicular and pedestrian circulation hierarchy delineating motorways, service roads, and organized parking.',
    'Multi-disciplinary sports zoning integrating an Olympic-size swimming pool, 65m radius cricket ground, football stadium, and indoor stadium.',
    'Formulation of area statements, structural PEB considerations, and standard sports flooring specifications.',
  ],
  plans: [
    {
      title: 'Master Plan Layout',
      image: '/images/sports-complex-goa/page-01.png',
      tag: 'Site Plan',
      desc: 'Overall 12-zone master plan including football ground, athletic track, cricket ground, racquet courts, and viewing decks.',
    },
    {
      title: 'Circulation Plan',
      image: '/images/sports-complex-goa/page-01.png',
      tag: 'Circulation Strategy',
      desc: 'Clear circulation routing separating motorways, service ring roads, spectator flow, and designated parking areas.',
    },
    {
      title: 'Zoning Plan',
      image: '/images/sports-complex-goa/page-01.png',
      tag: 'Macro Zoning',
      desc: 'Strategic division between sports activity zones, administrative services, refreshment hubs, and parking enclaves.',
    },
    {
      title: 'Area Statement & Metrics',
      image: '/images/sports-complex-goa/page-01.png',
      tag: 'Program Metrics',
      desc: 'Complete quantitative breakdown across 5 key sectors: Indoor Stadium, Outdoor Sports, Swimming, Fitness & Parking.',
    },
  ],
  facilities: [
    {
      name: 'Multipurpose Sports Hall',
      specs: 'PEB Steel structure, PU/Wooden sports flooring, acoustic wall panels, suspended acoustic ceiling, LED sports lighting.',
      image: '/images/sports-complex-goa/page-01.png',
      area: '1,461 sq.m.',
    },
    {
      name: 'Cricket Ground & Viewing Deck',
      specs: '65m radius natural grass outfield, clay match pitch with subsurface drainage, integrated spectator viewing deck.',
      image: '/images/sports-complex-goa/page-01.png',
      area: '8,551 sq.m.',
    },
    {
      name: 'Football Ground & Athletics Track',
      specs: '100m x 64m standard football field with 8-lane synthetic polyurethane anti-skid running track.',
      image: '/images/sports-complex-goa/page-01.png',
      area: '5,882 sq.m.',
    },
    {
      name: 'Olympic Size Swimming Facility',
      specs: '50m Olympic competition pool, dedicated 25m x 50m diving pool area, with dedicated locker and shower suites.',
      image: '/images/sports-complex-goa/page-01.png',
      area: '1,875 sq.m.',
    },
    {
      name: 'Pickleball & Badminton Courts',
      specs: 'Concrete/asphalt sub-base with UV-resistant anti-skid acrylic sports coating and professional lighting.',
      image: '/images/sports-complex-goa/page-01.png',
      area: '1,035 sq.m.',
    },
    {
      name: 'Indoor Fitness, Yoga & Spa',
      specs: 'Multi-layer rubberized & vinyl impact flooring, mirror assemblies, exposed acoustic baffles, and wellness zones.',
      image: '/images/sports-complex-goa/page-01.png',
      area: '310 sq.m.',
    },
  ],
  gallery: [
    {
      title: 'Architectural Presentation Sheet',
      desc: 'Complete portfolio master sheet combining zoning, circulation, area statement, master plan, and material specs.',
      image: '/images/sports-complex-goa/page-01.png',
    },
    {
      title: 'Master Plan & Facility Layout',
      desc: 'Comprehensive master plan detailing outdoor stadiums, athletic tracks, indoor halls, and spectator zones.',
      image: '/images/sports-complex-goa/page-01.png',
    },
    {
      title: 'Circulation & Road Network',
      desc: 'Pedestrian and vehicular circulation strategy occupying 7.2% of total site area for seamless accessibility.',
      image: '/images/sports-complex-goa/page-01.png',
    },
    {
      title: 'Functional Zoning Strategy',
      desc: 'Color-coded macro zoning segregating sports activities, services, refreshment zones, and parking lots.',
      image: '/images/sports-complex-goa/page-01.png',
    },
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
    image: '/images/working-drawings/wd_01_setting_out_plan.png',
    pdfUrl: '/documents/working-drawings.pdf',
    pdfPage: 1,
  },
  {
    id: 'centre-line-plan',
    title: 'Centre Line Plan',
    sheetNumber: 'WD-02',
    scale: '1:50',
    category: 'Substructure',
    description: 'Column grid intersections, dimensional alignments, and grid reference axes for structural execution.',
    image: '/images/working-drawings/wd_02_centre_line_plan.png',
    pdfUrl: '/documents/working-drawings.pdf',
    pdfPage: 2,
  },
  {
    id: 'plinth-beam-plan',
    title: 'Plinth Beam Plan',
    sheetNumber: 'WD-03',
    scale: '1:50',
    category: 'Structural',
    description: 'Plinth level tie beams, reinforcement callouts, depth notations, and foundational slab connections.',
    image: '/images/working-drawings/wd_03_plinth_beam_plan.png',
    pdfUrl: '/documents/working-drawings.pdf',
    pdfPage: 3,
  },
  {
    id: 'ground-floor-plan',
    title: 'Ground Floor Plan',
    sheetNumber: 'WD-04',
    scale: '1:50',
    category: 'Architectural',
    description: 'Comprehensive architectural layout with masonry dimensions, door/window schedules, and level markings.',
    image: '/images/working-drawings/wd_04_ground_floor_plan.png',
    pdfUrl: '/documents/working-drawings.pdf',
    pdfPage: 4,
  },
  {
    id: 'terrace-plan',
    title: 'Terrace Plan',
    sheetNumber: 'WD-05',
    scale: '1:50',
    category: 'Roof & Drainage',
    description: 'Terrace slopes, rainwater drainage spouts, parapet details, waterproofing layers, and lift machine room.',
    image: '/images/working-drawings/wd_05_terrace_plan.png',
    pdfUrl: '/documents/working-drawings.pdf',
    pdfPage: 5,
  },
  {
    id: 'sections',
    title: 'Detailed Sections',
    sheetNumber: 'WD-06',
    scale: '1:25',
    category: 'Sectional Details',
    description: 'Full-height architectural section detailing foundation step-downs, lintel levels, slab thicknesses, and floor finishes.',
    image: '/images/working-drawings/wd_06_sections.png',
    pdfUrl: '/documents/working-drawings.pdf',
    pdfPage: 6,
  },
  {
    id: 'staircase-details',
    title: 'Staircase Details',
    sheetNumber: 'WD-07',
    scale: '1:20',
    category: 'Special Details',
    description: 'Tread-to-riser ratios, waist slab reinforcement, handrail balustrade fixings, and nosing profiles.',
    image: '/images/working-drawings/wd_08_staircase_detail.png',
    pdfUrl: '/documents/working-drawings.pdf',
    pdfPage: 8,
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
