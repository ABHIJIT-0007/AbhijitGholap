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
  portraitImage: './assets/abhijit-portrait.jpg',
  languages: ['Marathi', 'Hindi', 'English'],
  status: 'Open for Architectural Internships & Collaborations',
};

// =========================================================================
// PORTFOLIO CONTENT PROJECTS (Strictly from Portfolio Content â€” Page 03)
// 01 â€” NGO Learning Centre (Kopar Khairane | 1,000 sqm)
// 02 â€” Rural Development Centre (Shivkar, Panvel | 2,100 sqm)
// 03 â€” The Evolving Museum (Dadar | 5,000 sqm)
// 04 â€” Mizoram State Bhavan (Vashi | 10,000 sqm)
// 05 â€” Tiny House (Compact Living)
// 06 â€” Bungalow Design (Dhasai, Murbad | 201 sqm)
// =========================================================================
export const academicProjects: Project[] = [
  {
    id: 'ngo-learning-centre',
    number: '01',
    name: 'NGO Learning Centre',
    location: 'Kopar Khairane',
    category: 'Academic Project â€” Semester III',
    semester: 'Semester III',
    area: '1,000 sq.m.',
    description:
      'Designed an NGO-run Learning Centre inspired by vernacular architecture, creating a sustainable and child-friendly environment for education and community development. The project integrates locally sourced materials, passive climate-responsive design, natural ventilation, daylighting and flexible learning spaces to provide an inclusive, comfortable and culturally connected educational facility.',
    featured: true,
    coverImage: './images/ngo-learning-centre/page-01.png',
    portfolioSheets: [
      './images/ngo-learning-centre/page-01.png',
      './images/ngo-learning-centre/page-02.png',
      './images/ngo-learning-centre/page-03.png',
      './images/ngo-learning-centre/page-04.png',
    ],
    concept:
      'Rooted in vernacular architecture and community-first spatial planning, the project organizes child-friendly learning modules around an active central courtyard and existing sabhamandap to nurture learning through tactile curiosity and outdoor play.',
    siteAnalysis: [
      'Located in Kopar Khairane with direct pedestrian access from surrounding neighbourhood settlements.',
      'Integration of existing site elements including a central playground and existing sabhamandap structure.',
      'Orientation optimized to channel seasonal breezes and minimize harsh western solar exposure.',
    ],
    conceptDevelopment: [
      'Decentralized cluster layout reducing institutional scale and creating intimate, child-scaled courtyards.',
      'Flexible indoor-outdoor transitional learning spaces under shaded verandas and timber pergolas.',
      'Visual connectivity between administrative hub, classrooms, library, and the central open playground.',
    ],
    formDevelopment: [
      'Stepped pitched rooflines using terracotta Mangalore tiles over exposed brick masonry walls.',
      'Timber pergola walkways casting dappled shade across pedestrian circulation paths.',
      'Deep verandas acting as climatic buffer zones against coastal Mumbai heat and monsoons.',
    ],
    plans: [
      {
        title: 'Ground Floor Master Layout',
        type: 'Site & Floor Plan',
        desc: 'Entrance pavilion, administrative office, classrooms, library, computer lab, landscaped pond, existing sabhamandap, and central playground.',
        image: './images/ngo-learning-centre/page-02.png',
      },
    ],
    sectionsAndElevations: [
      {
        title: 'Front & Side Elevations',
        type: 'Elevation',
        desc: 'Front, left side, and rear elevations showing vernacular pitched roofs, brick textures, and timber pergolas.',
        image: '
  $script: ngoCount = if(!$script: ngoCount) { 0 } else { $script: ngoCount }
  $script: ngoCount++
  if($script: ngoCount - le 2) { './images/ngo-learning-centre/page-0' + (2 + $script: ngoCount) + '.png' }
  else { './portfolio-pages/page-06.png' }
',
      },
{
  title: 'Sections X-Xâ€™, Y-Yâ€™ & Z-Zâ€™',
    type: 'Section',
      desc: 'Demonstrating generous vertical headroom, natural cross-ventilation draft, and perimeter shading.',
        image: '
  $script: ngoCount = if (!$script:ngoCount) { 0 } else { $script: ngoCount }
  $script: ngoCount++
  if ($script: ngoCount - le 2) { './images/ngo-learning-centre/page-0' + (2 + $script:ngoCount) + '.png' }
  else { './portfolio-pages/page-06.png' }
  ',
},
    ],
diagrams: [
  'Passive Microclimatic Cooling & Breeze Channels',
  'Child-Scale Ergonomics & Indoor-Outdoor Transition Hierarchy',
  'Vernacular Material Palette & Construction Joinery',
],
  sustainabilityStrategy: [
    'Locally sourced clay bricks, timber roof trusses, and terracotta tiles minimizing embodied carbon.',
    '100% natural cross-ventilation eliminating mechanical cooling dependencies during school hours.',
    'Passive daylighting through strategically positioned low and high clerestory apertures.',
  ],
    views3D: [
      {
        title: 'Isometric Campus Perspective',
        desc: 'Full-color architectural isometric rendering illustrating the courtyard clusters, landscape pond, and pergolas.',
        image: './images/ngo-learning-centre/page-01.png',
      },
      {
        title: 'Handcrafted Physical Scale Model',
        desc: 'Detailed architectural study model crafted in cardboard, corrugated tiles, and miniature landscape foliage.',
        image: './images/ngo-learning-centre/page-02.png',
      },
    ],
  },
{
  id: 'rural-development-centre',
    number: '02',
      name: 'Rural Development Centre',
        location: 'Shivkar, Panvel',
          category: 'Academic Project â€” Semester IV',
            semester: 'Semester IV',
              area: '2,100 sq.m.',
                description:
  'Designed a Rural Development Centre, aimed at empowering the local community through education, skill development and social engagement. The project responds to the needs of the rural context by integrating training facilities, community spaces, administrative areas, and multifunctional activity zones. The design emphasizes sustainable planning, climate-responsive architecture, and the use of locally available materials to create an environmentally conscious and economically viable development. By fostering community participation and preserving the villageâ€™s cultural identity, the proposal serves as a catalyst for rural growth, self-reliance and improved quality of life.',
    featured: false,
      coverImage: './images/rural-development-centre/page-01.png',
        portfolioSheets: [
          './images/rural-development-centre/page-01.png',
          './images/rural-development-centre/page-02.png',
        ],
          concept:
  'A community empowerment enclave centered on an open circular gathering chowk, combining traditional Konkan masonry crafts with vocational training and civic facilities.',
    siteAnalysis: [
      'Site in Shivkar, Panvel surrounded by rural agrarian settlements and green vegetation.',
      'Service road perimeter wrapping around the building to allow easy logistical access for handicraft goods and farm vehicles.',
      'Zoning segregating medical store and administrative reception from active workshops and anganwadi.',
    ],
      conceptDevelopment: [
        'Radial community heart: circular amphitheatre-style gathering plaza acting as the social and cultural core.',
        'Curvilinear workshop wings housing handicraft training, carpentry workshops, library, and computer education.',
        'Pedestrian and vehicular segregation with dedicated parking for trucks, cars, and two-wheelers.',
      ],
        formDevelopment: [
          'Traditional Howe timber trusses spanning generous multi-activity workshop volumes.',
          'Perforated brick jaali walls providing continuous airflow and diffuse natural daylighting.',
          'Exposed stone plinths and masonry walls that naturally resist weathering during intense monsoons.',
        ],
          plans: [
            {
              title: 'Ground Floor Plan & Master Layout',
              type: 'Plan',
              desc: 'Handicraft workshop, computer lab, library, anganwadi, medical store, administration, circular gathering space, and weekly market area.',
              image: './images/rural-development-centre/page-01.png',
            },
          ],
            sectionsAndElevations: [
              {
                title: 'North, West, South & East Elevations',
                type: 'Elevation',
                desc: 'Rendered architectural elevations showing pitched roofs, brick jaalis, stone plinths, and timber pergolas.',
                image: './images/rural-development-centre/page-02.png',
              },
              {
                title: 'Sections A-Aâ€™, B-Bâ€™ & C-Câ€™',
                type: 'Section',
                desc: 'Sections illustrating Howe truss construction, interior ceiling heights, and shaded verandas.',
                image: './images/rural-development-centre/page-02.png',
              },
            ],
              diagrams: [
                'Howe Timber Truss Detail: Principal rafter, batten, tie beam and stone pad anchor',
                'Perforated Brick Jaali Wall Airflow & Shading Geometry',
                'Village Community Gathering & Handicraft Market Circulation Flow',
              ],
                sustainabilityStrategy: [
                  'High thermal mass basalt stone plinths and exposed brick construction maintaining cool interior temperatures.',
                  'Passive bioclimatic cooling via large roof overhangs, clerestory roof vents, and brick screen walls.',
                  'Rainwater harvesting off pitched roofs directed to community irrigation and recharge wells.',
                ],
                  views3D: [
                    {
                      title: 'Rendered Brickwork Elevations',
                      desc: 'Artistic color presentation board showing the warm brick texture, timber pergolas, and landscape setting.',
                      image: './images/rural-development-centre/page-02.png',
                    },
                    {
                      title: 'Site Plan & Activity Hub',
                      desc: 'Dimensioned technical drawing detailing the circular gathering space and workshop layout.',
                      image: './images/rural-development-centre/page-01.png',
                    },
                  ],
  },
{
  id: 'the-evolving-museum',
    number: '03',
      name: 'The Evolving Museum',
        location: 'Dadar',
          category: 'Academic Project â€” Semester V',
            semester: 'Semester V',
              area: '5,000 sq.m.',
                description:
  'Designed a Historical Museum in Dadar that showcases the evolution of history and cultural heritage through engaging exhibition spaces. The project focuses on creating a seamless visitor experience with well-planned galleries, public spaces and educational facilities. The design combines contemporary architecture with cultural elements to promote learning, heritage preservation and community engagement.',
    featured: false,
      coverImage: './images/the-evolving-museum/page-01.png',
        portfolioSheets: [
          './images/the-evolving-museum/page-01.png',
          './images/the-evolving-museum/page-02.png',
          './images/the-evolving-museum/page-03.png',
        ],
          concept:
  'A sculptural curvilinear monument facing the Arabian Sea and Naarli Baug, orchestrating historical exhibits along continuous fluid viewing terraces and protective architectural louvers.',
    siteAnalysis: [
      'Urban coastal plot in Dadar bounded by Keluskar Road, Sant Dnyaneshwar Marg (10m wide roads), and Naarli Baug.',
      'Orientation designed to capture western sea breezes and frame coastal vistas from upper galleries.',
      'Clear segregation between public pedestrian entry plaza and rear service access / stilt parking.',
    ],
      conceptDevelopment: [
        'Ground level: Reception, Historical Painting Gallery, Performing Art Gallery, Life in Fort Gallery, Warfare & Weapon Gallery, and Fort Architecture Gallery.',
        'First level: 190 sqm Cafeteria, Museum Library, 80 sqm Audio-Visual Theatre, Historical Coin Gallery, and Painting & Model-Making Workshops.',
        'Upper levels: Auditorium (+18m), Co-working Space, Administrative Cabins, and Conference Suites.',
      ],
        formDevelopment: [
          'Dynamic curved facade with stepped-back viewing terraces echoing coastal waves.',
          'Vertical solar screen louvers mitigating intense afternoon western sunlight.',
          'Stilt floor parking supporting urban vehicular requirements without disrupting public street presence.',
        ],
          plans: [
            {
              title: 'Site Plan & Ground Floor Plan',
              type: 'Plan',
              desc: 'Public arrival forecourt, Naarli Baug connection, stilt parking, museum shops, and thematic historical galleries.',
              image: './images/the-evolving-museum/page-02.png',
            },
            {
              title: 'First Floor Educational & Dining Plan',
              type: 'Plan',
              desc: 'Cafeteria, museum library, AV theatre, coin exhibits, and creative workshops.',
              image: './images/the-evolving-museum/page-02.png',
            },
          ],
            sectionsAndElevations: [
              {
                title: 'East, West, North & South Elevations',
                type: 'Elevation',
                desc: 'Complete architectural elevations showing stepped terraces, continuous ribbon glazing, and vertical shading louvers.',
                image: './images/the-evolving-museum/page-03.png',
              },
              {
                title: 'Sections A-Aâ€™ & B-Bâ€™ (Full Height +22.35m)',
                type: 'Section',
                desc: 'Section showing the stilt floor, gallery volumes, double-height cafeteria, and top-floor auditorium.',
                image: './images/the-evolving-museum/page-03.png',
              },
            ],
              diagrams: [
                'Chronological Exhibition Circulation Sequence',
                'Acoustic Buffering & Daylight Filtration Analysis',
                'Coastal Wind Funneling & Stilt Ventilation Matrix',
              ],
                sustainabilityStrategy: [
                  'Vertical architectural louvers providing solar shading, drastically reducing thermal cooling loads.',
                  'Self-shading cantilevered floor plates protecting lower glazed galleries from direct sun exposure.',
                  'Deep stilt ventilation allowing sea breezes to permeate the site microclimate.',
                ],
                  views3D: [
                    {
                      title: 'Physical Curvilinear Model',
                      desc: 'Handmade architectural study model illustrating the sculpted tiered terraces and vertical facade fins.',
                      image: './images/the-evolving-museum/page-01.png',
                    },
                    {
                      title: 'Lumion 3D Architectural Exterior',
                      desc: 'Exterior perspectives highlighting facade materiality, street integration, and stilt parking entry.',
                      image: './images/the-evolving-museum/page-02.png',
                    },
                  ],
  },
{
  id: 'mizoram-state-bhavan',
    number: '04',
      name: 'Mizoram State Bhavan',
        location: 'Vashi',
          category: 'Academic Project â€” Semester VI',
            semester: 'Semester VI',
              area: '10,000 sq.m.',
                description:
  'Designed the Mizoram State Bhavan as a cultural and administrative centre that reflects the heritage of Mizoram through contemporary architecture. The project integrates administrative offices, guest accommodation and cultural spaces while incorporating vernacular design elements to create a functional, welcoming and culturally significant landmark.',
    featured: false,
      coverImage: './images/mizoram-state-bhavan/page-01.png',
        portfolioSheets: [
          './images/mizoram-state-bhavan/page-01.png',
          './images/mizoram-state-bhavan/page-02.png',
          './images/mizoram-state-bhavan/page-03.png',
          './images/mizoram-state-bhavan/page-04.png',
        ],
          concept:
  'Translating traditional Mizo craftsmanship, hill settlement geometries, and vertical green layers into an iconic civic and cultural high-rise landmark in urban Vashi.',
    siteAnalysis: [
      'Prominent corner plot in Vashi positioned along Pranavanandji Marg and Kerala House Lane.',
      'Distinct arrival sequences for state dignitaries, VIP guests, and general public cultural visitors.',
      'Integration of stilt open event area, commercial emporium shops, and vertical tower massing.',
    ],
      conceptDevelopment: [
        'Ground Floor (@0.15 LVL): Stilt event space, commercial shops, reception, vehicular driveway, and lift cores.',
        'First & Second Floors: Dining facilities, kitchen, central lightwell atrium, and cultural exhibition galleries.',
        'Upper Tower Floors: Administrative offices, VIP state guest suites, conference halls, and official residence suites.',
      ],
        formDevelopment: [
          'Geometric facade articulation inspired by traditional Mizo bamboo weaving patterns (Puan).',
          'Continuous stepped planter balconies wrapping each level, bringing vertical landscaping to every floor.',
          'Rooftop pavilion and landscaped deck providing civic gathering areas with panoramic skyline views.',
        ],
          plans: [
            {
              title: 'Ground Floor & Stilt Layout Plan',
              type: 'Plan',
              desc: 'Pranavanandji Marg frontage, vehicle entry, stilt event area, retail shops, and lift cores.',
              image: './images/mizoram-state-bhavan/page-01.png',
            },
            {
              title: 'First & Second Floor Cultural Plans',
              type: 'Plan',
              desc: 'Exhibition galleries, banquet hall, central courtyard void, and administrative offices.',
              image: './images/mizoram-state-bhavan/page-01.png',
            },
          ],
            sectionsAndElevations: [
              {
                title: 'North-West, South-West, South-East & North-East Elevations',
                type: 'Elevation',
                desc: 'Elevations showcasing vertical rhythm, green planter bands, and geometric fenestrations.',
                image: './images/mizoram-state-bhavan/page-03.png',
              },
              {
                title: 'Sections A-Aâ€™ & B-Bâ€™',
                type: 'Section',
                desc: 'Full-height 12-storey structural section through central lightwell atrium, planter boxes, and lift core.',
                image: './images/mizoram-state-bhavan/page-04.png',
              },
            ],
              diagrams: [
                'Integrated Planter Box Detail: Anti-root membrane, gravel drainage, concrete slab & irrigation pipe',
                'Mizo Cultural Motif to Architectural Facade Expression Mapping',
                'Security & Public Zoning Segregation Diagram',
              ],
                sustainabilityStrategy: [
                  'Extensive vertical planter terraces mitigating solar heat gain and lowering surface ambient temperature.',
                  'Central vertical atrium inducing stack ventilation to cool internal circulation corridors naturally.',
                  'Engineered bamboo and regional timber wall cladding for renewable interior finishes and acoustics.',
                ],
                  views3D: [
                    {
                      title: 'Architectural Scale Model',
                      desc: 'Precision physical card model showcasing window aperture framing and lush green floor bands.',
                      image: './images/mizoram-state-bhavan/page-01.png',
                    },
                    {
                      title: 'Lumion 3D Dusk Perspective',
                      desc: 'Hero street-corner view showing evening lighting, illuminated atrium, and rooftop terrace.',
                      image: './images/mizoram-state-bhavan/page-02.png',
                    },
                  ],
  },
{
  id: 'tiny-house',
    number: '05',
      name: 'Tiny House',
        location: 'Academic Project',
          category: 'Academic Project â€” Compact Living Studio',
            semester: 'Semester I / Space Optimization',
              area: '15 sq.m.',
                description:
  'Designed an ultra-efficient compact dwelling that maximizes functionality, comfort and spatial luxury within a minimal 5.50m x 2.70m footprint. Utilizes multifunctional fold-away furniture, vertical storage optimization, and clean contemporary aesthetics to provide a complete, dignified lifestyle for modern independent living.',
    featured: false,
      coverImage: './images/tiny-house/page-01.png',
        portfolioSheets: [
          './images/tiny-house/page-01.png',
        ],
          concept:
  'Micro-spatial efficiency: every square millimeter engineered for dual-purpose utility without compromising comfort, natural daylighting, or visual elegance.',
    siteAnalysis: [
      'Modular prototype footprint (5.50m x 2.70m) adaptable to diverse urban infill or eco-retreat contexts.',
      'Strategic window positioning providing ample cross-ventilation and natural daylight across the living zone.',
    ],
      conceptDevelopment: [
        'Integrated living, dining, and sleeping hub with convertible Murphy bed and concealed shelving.',
        'Ergonomic linear kitchenette equipped with two-burner cooktop, sink, overhead cabinets, and fold-down table.',
        'Private ensuite bathroom (1.81m x 1.00m) complete with shower, toilet, and vanity module.',
      ],
        formDevelopment: [
          'Clean rectilinear spatial geometry enhanced with warm timber veneers, monochrome check flooring, and red accent shelving.',
          'Full-height wall cabinetry maximizing vertical storage volume up to ceiling level.',
        ],
          plans: [
            {
              title: 'Detailed Floor Plan (5.50m x 2.70m)',
              type: 'Plan',
              desc: 'Dimensioned architectural plan showing living lounge, kitchenette, fold-down furniture, and ensuite bathroom.',
              image: './images/tiny-house/page-01.png',
            },
          ],
            sectionsAndElevations: [
              {
                title: 'Longitudinal Section A-Aâ€™',
                type: 'Section',
                desc: 'Section showing internal cabinetry heights, Murphy bed mechanism, and window sill levels.',
                image: './images/tiny-house/page-01.png',
              },
              {
                title: 'Cross Section B-Bâ€™',
                type: 'Section',
                desc: 'Section through bathroom and kitchen service zones detailing wall thickness and plumb lines.',
                image: './images/tiny-house/page-01.png',
              },
            ],
              diagrams: [
                'Micro-Space Ergonomics & Clearance Radii',
                'Day-to-Night Spatial Reconfiguration Flow',
              ],
                sustainabilityStrategy: [
                  'Extremely compact built footprint drastically reducing material usage, embodied energy, and construction waste.',
                  'Low operational energy demand achievable through passive cross-ventilation and 100% natural daytime illumination.',
                ],
                  views3D: [
                    {
                      title: 'Fold-Away Bed Living Space',
                      desc: 'Rendered perspective showing the convertible Murphy bed, modern cabinetry, and checkerboard floor.',
                      image: './images/tiny-house/page-01.png',
                    },
                    {
                      title: 'Axonometric Cutaway View',
                      desc: 'Top-down 3D sectional axonometric showing the spatial relationship between living room, kitchen, and bath.',
                      image: './images/tiny-house/page-01.png',
                    },
                  ],
  },
{
  id: 'bungalow-design',
    number: '06',
      name: 'Bungalow Design',
        location: 'Dhasai, Murbad',
          category: 'Academic Project â€” Semester II',
            semester: 'Semester II',
              area: '201 sq.m.',
                description:
  'The bungalow is a contemporary interpretation of the traditional Maratha Wada. The central courtyard is taken as the primary planning element, but instead of replicating the traditional form, I have transformed it into a modern spatial experience. The courtyard acts as the social heart of the house, bringing light, ventilation, greenery and family interaction into the dwelling.',
    featured: false,
      coverImage: './images/bungalow-design/page-01.png',
        portfolioSheets: [
          './images/bungalow-design/page-01.png',
          './images/bungalow-design/page-02.png',
        ],
          concept:
  'Contemporary interpretation of the traditional Maratha Wada, re-imagining the central courtyard (chowk) as a light-filled social sanctuary linking living, devotional, and private spaces.',
    siteAnalysis: [
      'Peaceful rural/semi-urban parcel (20.10m x 10.00m) situated in Dhasai, Murbad.',
      '3-meter wide entry driveway leading to a private covered car porch.',
      'Oriented to maximize morning sunlight while protecting living zones from afternoon Konkan heat.',
    ],
      conceptDevelopment: [
        'Ground Floor: Porch, living room, devghar (prayer room), kitchen, dining, master bedroom with toilet, and central open courtyard.',
        'First Floor: Two secondary bedrooms, shared bathroom, open terrace/seating area, and upper courtyard gallery.',
        'Terrace Floor: Open recreational terrace overlooking the central courtyard skylight and surrounding landscape.',
      ],
        formDevelopment: [
          'Bold contemporary massing highlighted by an earthy terracotta cantilevered balcony frame that creates dynamic shadow play.',
          'Open-to-sky central courtyard puncturing vertically through the structure to create a microclimatic light well.',
          'Seamless floor-to-ceiling glass openings connecting indoor seating areas directly with the courtyard garden.',
        ],
          plans: [
            {
              title: 'Ground, First & Terrace Plans',
              type: 'Plan',
              desc: 'Dimensioned 20.10m x 10.00m plans showing porch, living room, devghar, courtyard, bedrooms, and terraces.',
              image: './images/bungalow-design/page-01.png',
            },
          ],
            sectionsAndElevations: [
              {
                title: 'Courtyard Spatial Section',
                type: 'Section',
                desc: 'Vertical section demonstrating natural stack ventilation drawing air upward through the open courtyard.',
                image: './images/bungalow-design/page-02.png',
              },
            ],
              diagrams: [
                'Maratha Wada Courtyard Spatial Evolution Diagram',
                'Interactive 3D Walkthrough QR Code Integration',
              ],
                sustainabilityStrategy: [
                  'Passive stack ventilation: hot air escapes through the open roof courtyard, pulling cool ground air through shaded rooms.',
                  'Cantilevered upper balcony providing passive solar shading to ground-level glass openings.',
                  'Rainwater collection basin integrated within the courtyard landscape bed.',
                ],
                  views3D: [
                    {
                      title: 'Modern Cantilevered Front Facade',
                      desc: 'Hero Lumion exterior rendering showing the terracotta framed balcony, car porch, and landscaped perimeter.',
                      image: './images/bungalow-design/page-01.png',
                    },
                    {
                      title: 'Central Light-Filled Courtyard',
                      desc: 'Interior view looking into the double-height stone-clad courtyard with verdant plants and open sky well.',
                      image: './images/bungalow-design/page-02.png',
                    },
                  ],
  },
];

// =========================================================================
// COLLABORATIVE PROFESSIONAL WORK (Portfolio Content â€” Page 28)
// Sports Complex â€” Goa | Mayur Naik & Associates
// =========================================================================
export const professionalProject: ProfessionalProject = {
  id: 'sports-complex-goa',
  name: 'Sports Complex â€” Goa',
  location: 'Goa',
  studio: 'Mayur Naik & Associates',
  principalArchitect: 'Ar. Mayur Naik',
  role: 'Architectural Design Assistance',
  category: 'Collaborative Professional Work',
  description:
    'Sports Complex, Goa â€” A collaborative professional project developed with Mayur Naik & Associates under the guidance of the Principal Architect, Ar. Mayur Naik. I contributed to the architectural planning and design development of the sports complex, including the organization of sports facilities, open spaces, circulation and overall site planning.',
  highlights: [
    'Comprehensive sports facility zoning conforming to standard sports federation guidelines (SAI norms).',
    'Design and spatial coordination of indoor multi-purpose courts, outdoor stadium seating, and spectator amenities.',
    'Pedestrian & vehicular segregation: dedicated motorway, service roads, parking, and spectator avenues.',
    'Total Plot Area: 28,195 sq.m. with only 7.2% road area occupied, maximizing green sports surfaces.',
  ],
  coverImage: './images/sports-complex-goa/page-01.png',
  sheetImage: './images/sports-complex-goa/page-01.png',
  gallery: [
    { title: 'Master Circulation & Zoning Plan', desc: 'Delineation of VIP, athlete, spectator, and emergency service corridors across 28,195 sq.m.' },
    { title: 'Football Ground & Athletic Track', desc: 'Standard Olympic-dimension sports field with spectator pavilions.' },
    { title: 'Indoor Sports & Fitness Arenas', desc: 'Badminton courts, volleyball courts, pickleball courts, and multipurpose sports hall.' },
    { title: 'Olympic Size Swimming Pool & Amenities', desc: 'Competitive swimming facilities with integrated player changing rooms and wellness gym.' },
  ],
};

// =========================================================================
// TECHNICAL WORKING DRAWINGS (Portfolio Content â€” Pages 20â€“27)
// =========================================================================
export const workingDrawings: WorkingDrawing[] = [
  {
    id: 'setting-out-plan',
    title: 'Setting Out Plan',
    sheetNumber: 'WD-01',
    scale: '1:50',
    category: 'Substructure / Site Staking',
    description: 'Precision boundary coordinates, permanent benchmark (PBM), offset lines, and building profile along Sant Dnyaneshwar Marg & Keluskar Road.',
    image: './images/working-drawing/page-01.png',
  },
  {
    id: 'centre-line-plan',
    title: 'Centre Line Plan',
    sheetNumber: 'WD-02',
    scale: '1:50',
    category: 'Substructure / Grids',
    description: 'Grid axes Aâ€“JJ and 1â€“29, column schedule (C1 to C42), shear wall dimensions, and structural reference lines.',
    image: './images/working-drawing/page-02.png',
  },
  {
    id: 'plinth-beam-plan',
    title: 'Plinth Beam Plan',
    scale: '1:50',
    sheetNumber: 'WD-03',
    category: 'Structural Ground Level',
    description: 'Plinth level tie beams (PB1 to PB83), foundation schedule, column footings, and shear wall layouts.',
    image: './images/working-drawing/page-03.png',
  },
  {
    id: 'ground-floor-plan',
    title: 'Ground Floor Plan',
    sheetNumber: 'WD-04',
    scale: '1:50',
    category: 'Architectural Layout',
    description: 'Detailed masonry dimensions, door & window schedule (D1â€“D3, W1, V1), finishes schedule, and stilt parking layouts.',
    image: './images/working-drawing/page-04.png',
  },
  {
    id: 'terrace-plan',
    title: 'Terrace Plan',
    sheetNumber: 'WD-05',
    scale: '1:50',
    category: 'Roof & Drainage',
    description: 'Terrace drainage slopes, 100mm thk waterproofing, parapet masonry, rainwater spouts, and lift machine room.',
    image: './images/working-drawing/page-05.png',
  },
  {
    id: 'sections',
    title: 'Detailed Sections (AAâ€™ & BBâ€™)',
    sheetNumber: 'WD-06',
    scale: '1:25',
    category: 'Sectional Details',
    description: 'Full-height building sections detailing floor heights (+0.6m to +18.0m), slab thicknesses, lintel levels, and finishes.',
    image: './images/working-drawing/page-06.png',
  },
  {
    id: 'staircase-details',
    title: 'Staircase & Railing Details',
    sheetNumber: 'WD-07',
    scale: '1:20',
    category: 'Special Construction Details',
    description: 'Detailed stair sections (AAâ€™ & BBâ€™), 1:20 typical railing detail (stainless steel pipe), and 1:20 tread & riser details with anti-slip grooves.',
    image: './images/working-drawing/page-07.png',
  },
];

// =========================================================================
// SOFTWARE CAPABILITIES & SKILLS (Verified from CV.pdf & Portfolio)
// =========================================================================
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
    category: 'Graphic & Rendering',
    items: ['Adobe Photoshop'],
  },
  {
    category: 'Presentation',
    items: ['MS Office', 'Google Slides', 'Canva'],
  },
  {
    category: 'Architectural Craft',
    items: ['Hand Sketching', 'Model Making', 'Video Editing'],
  },
];

// =========================================================================
// EDUCATION TIMELINE (Verified from CV.pdf)
// =========================================================================
export const educationTimeline: EducationItem[] = [
  {
    period: '2024 â€“ Present',
    degree: 'Bachelor of Architecture (B.Arch)',
    institution: 'Lokmanya Tilak Institute of Architectural and Design Studies',
    location: 'Mumbai University',
    status: 'Currently Pursuing â€” Semester VII',
    notes: 'Focus on sustainable urban design, institutional campus planning, and advanced working drawings.',
  },
  {
    period: '2023 â€“ 2024',
    degree: 'Bachelor of Architecture (B.Arch)',
    institution: 'B.R. Harne College of Architecture',
    location: 'Mumbai University',
    status: 'Academic Transfer',
    notes: 'Core architectural design development, structural principles, and building construction technologies.',
  },
  {
    period: '2022 â€“ 2023',
    degree: 'Higher Secondary Education (12th Standard)',
    institution: 'Mahatma Gandhi Vidyalaya and Junior College',
    location: 'Dhasai',
    notes: 'Higher secondary coursework with emphasis on mathematics and science foundations.',
  },
  {
    period: '2020 â€“ 2021',
    degree: 'Secondary Education (10th Standard)',
    institution: 'Mahatma Gandhi Vidyalaya and Junior College',
    location: 'Dhasai',
    notes: 'Secondary school certificate foundation with high academic standing.',
  },
];

// =========================================================================
// DESIGN PHILOSOPHY (From Portfolio.pdf Page 3: SPACES / PEOPLE / PLANET)
// =========================================================================
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
    symbol: '03 / P',
  },
];

// =========================================================================
// CV PROJECTS (Kept strictly for the CV modal to mirror CV.pdf)
// =========================================================================
export const cvProjects = [
  { semester: 'SEM 1', name: "Artist's Studio", location: 'Vangani', area: '15 sq.m.', desc: 'Designed a creative workspace that integrates artistic activities with the natural landscape.' },
  { semester: 'SEM 2', name: 'Weekend Getaway Bungalow', location: 'Badlapur', area: '170 sq.m.', desc: 'Planned a peaceful holiday home focused on comfort, relaxation, and a strong connection with nature.' },
  { semester: 'SEM 3', name: 'NGO Run Learning Centre', location: 'Kopar Khairane', area: '1000 sq.m.', desc: 'Developed an educational facility that promotes learning and community engagement through functional design.' },
  { semester: 'SEM 4', name: 'Rural Development Centre', location: 'Shivkar, Panvel', area: '2100 sq.m.', desc: 'Designed a community-focused centre to support rural development, skill enhancement, and local empowerment.' },
  { semester: 'SEM 5', name: 'The Evolving Museum', location: 'Dadar', area: '5000 sq.m.', desc: 'Created a museum that offers an interactive and dynamic journey showcasing the evolution of knowledge and culture.' },
  { semester: 'SEM 6', name: 'Mizoram State Bhavan', location: 'Vashi', area: '10000 sq.m.', desc: "Designed a cultural and administrative centre celebrating Mizoram's heritage through contemporary architecture." },
  { semester: 'SEM 7', name: 'Student Housing', location: 'Ghansoli', area: '17630 sq.m.', desc: 'Planned a sustainable student residential campus that fosters learning, interaction, and a vibrant community lifestyle.' },
];

