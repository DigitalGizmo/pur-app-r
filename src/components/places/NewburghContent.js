const images = [
  'newburgh-aerial-1',
  'newburgh-aerial-2',
  'newburgh-aerial-2-map1',
  'newburgh-aerial-2-map2',
  'newburgh-aerial-2-map3',
  'newburgh-aerial-2-map4',
  'newburgh-post-office',
  'newburgh-front&water',
  'newburgh-guided-map1',
  'newburgh-guided-map1a',
  'newburgh-guided-map1b',
  'Feasability_Survey_Area_Map3-sized',
  'Feasability_Survey_Area_Map3-fair',
  'Feasability_Survey_Area_Map3-deterior',
  'newburgh-map3-5a',
  'Feasability_Survey_Area_Map3-sized',
  'newburgh-map3-5b',
  'newburgh-map3-5c',
  '196GrandSt-hodges-house',
  'Williams-Montgomery-St-96-98',
  'newburgh-guided-map4',
  '176-178-Montgomery-before',
  '176-178-Montgomery-after',
  'newburgh-map-2',
  'newburgh-map-15',
  'newburgh-guided-map10',
  'newburgh-guided-map10a',
  'newburgh-guided-map10b',
  'newburgh-guided-map10c',
  'newburgh-guided-map10d',
  'newburgh-guided-map10',
  'newburgh-map-20',
  'newburgh-map-20',
  'newburgh-map-22',
  'newburgh-map-22',
  'newburgh-map19',
  'newburgh-map19',
  'Front&Water-housing',
  'Front&Water-empty-lot',
];

const sectionTitles = [
  'The View from Above',
  'East Newburgh',
  'The Appraiser\'s Advice',
  'Good, Fair, Deteriorating, Deteriorated',
  'Missing from the Planners\' Perspective',
  'The Homeowners\' Perspective',
  'Preservation and Demolition',
  'Repackaging East Newburgh',
  'A New Map of East Newburgh',
  'Middle-class Comforts',
  'Urban Amenities',
  'Plan vs. Reality',  
]
  const captions = [
    {
      label: 'text-1a image: aerial photo - The View from Above',
      titleIndex: 0,
      text: '<p>Looking down on East Newburgh, urban planners saw blighted buildings, obsolete land-use patterns, and an outdated street grid. The city\'s population, as well as its tax base, was in decline. The planners\' solution to this cluster of problems was to start over from scratch.</p>',
    },
    {
      label: 'text-1b image: zoomed in aerial photo - The View from Above',
      titleIndex: null,
      text: '<p>This was the logic of urban renewal:</p><p>Demolition of existing homes and shops was the first step toward transforming a blighted area.</p>'
    },
    {
      label: 'text-1c image: - The View from Above',
      titleIndex: null,
      text: '<p>Once cleared, small lots could be repackaged into larger parcels for sale to private developers.</p>'
    },
    {
      label: 'text-1d image: - The View from Above',
      titleIndex: null,
      text: '<p>Those developers would build modern housing and commercial developments.</p>'
    },
    {
      label: 'text-1e image: - The View from Above',
      titleIndex: null,
      text: '<p>New people (whiter and wealthier than their predecessors) would move into the new homes. New businesses would rent space in the commercial structures.</p>'
    },
    {
      label: 'text-1f image: - The View from Above',
      titleIndex: null,
      text: '<p>These new businesses and residents would stabilize municipal finances.</p>'
    },
    {
      label: 'text-2a image: newburgh-post-office - East Newburgh',
      titleIndex: 1,
      text: '<p>The east side of Newburgh is the oldest section of the city. It was once home to Newburgh\'s white elite. That was no longer true by 1960.</p>'
    },
    {
      label: 'text-2b image: newburgh-front&water - East Newburgh',
      titleIndex: null,
      text: '<p>Between 1950 and 1960, Newburgh\'s Black population more than doubled.</p><p>Many were Southern migrants, part of what is known as the Great Migration. Between World War I and the 1970s, roughly six million African Americans moved from the rural South to the urban North in search of a better life.</p> <p>In Newburgh, these migrants made their homes in the eastern section of the city, along the Hudson River. (White realtors and property owners prevented them from settling anywhere else.)</p> <p>During that same period of time, white city residents moved from east to west or out to the suburbs. Federally-backed mortgages facilitated these moves, described collectively as white flight.</p>'
    },
    {
      label: 'text-3a image: - The Appraisers Advice',
      titleIndex: 2,
      text: '<p>In 1964, Newburgh\'s city council hired the planning firm of David Rosen Associates. Urban renewal was already underway.</p>'
    },
    {
      label: 'text-3b image: - The Appraisers Advice',
      titleIndex: null,
      text: '<p>The planners\' job was to assess the \"feasibility\" of expanding the urban renewal area to include East Newburgh.</p>'
    },
    {
      label: 'text-3c image: - The Appraisers Advice',
      titleIndex: null,
      text: '<p>The justification for this expansion was a 1961 report by real estate appraiser Humes Flynn. From the appraiser\'s perspective, the Water Street Urban Renewal Project was \"only the beginning.\" Urban renewal would be a \"miserable failure,\" if more buildings weren\'t demolished. Should the City fail to heed his advice, Mr. Flynn predicted, \"whatever is built in the present area will be greatly reduced in value and effectiveness by the condition of the properties in the surrounding areas.\"</p>'
    },
    {
      label: 'text-4a image: Feasability_Survey_Area_Map3-sized - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: 3,
      text: '<p>The planners started with the assumption that \"blight and deterioration\" were rampant in the renewal area.</p>'
    },
    {
      label: 'text-4b image: Feasability_Survey_Area_Map3-fair - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: null,
      text: '<p>While the planners classified some buildings as being in \"good\" or \"fair\" condition...</p>'
    },
    {
      label: 'text-4c image: Feasability_Survey_Area_Map3-deterior - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: null,
      text: '...they regarded most as \"deteriorating\" or \"deteriorated.\"</p>'
    },
    {
      label: 'text-4d image: newburgh-map3-5a - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: null,
      text: '<p>Contemporary photographs show that many East Newburgh buildings were in poor repair. In part this was due to redlining. Redlining was the practice of denying home loans in inner-city neighborhoods or to non-white borrowers.</p>'
    },
    {
      label: 'text-4d image: Feasability_Survey_Area_Map3-sized- Good, Fair, Deteriorating, Deteriorated',
      titleIndex: null,
      text: '<p>But redlining doesn\'t completely explain the planners\' map.</p>'
    },
    {
      label: 'text-5a image: newburgh-map3-5b with good condition photos -Missing from the Planners&rsquo; Perspective',
      titleIndex: 4,
      text: '<p>David Rosen later admitted that he and his colleagues missed some well-maintained properties in the renewal area.</p>'
    },
    {
      label: 'text-5c image: newburgh-map3-5c with churches etc photos',
      titleIndex: null,
      text: '<p>They also missed what these places (no matter their condition) meant to the people who lived, worked, played, and prayed there.</p><p>When urban planners looked at people living in renewal areas, they saw households to be counted and moved somewhere else.</p><p>The neighborhood ties that bound people together were beyond the scope of planning studies. Severing these ties would prove devastating to displaced communities in Newburgh and across the nation.</p>'
    },
    {
      label: 'text-6a image: Hodges Home & Funeral Parlor -The Homeowners&rsquo; Perspective',
      titleIndex: 5,
      text: '<p>Addressing a public meeting of the Newburgh Urban Renewal Agency in 1967, Kathleen Hodge stated flatly that she did not want to move. Her elegant, historic home also housed the Hodge family funeral parlor.</p><p>While the Hodge home and business escaped the bulldozer, most area residents were not so lucky.</p>'
    },
    {
      label: 'text-6b image: Williams Home',
      titleIndex: null,
      text: '<p>Mattie Williams attended the same meeting. The 67-year-old widow owned two Montgomery Street houses. One was her home, the other, a rental property.</p><p>When it was her turn to speak, Mrs. Williams emphasized the inequity of urban renewal. She pointed out that \"the heart\" of the renewal area was in the heavily segregated city’s \"Negro section.\"</p><p>Those facing displacement \"are our people,\" Mrs. Williams said. \"They are not your people.\"</p>'
    },
    {
      label: 'text-7a image: newburgh-guided-map4 - Preservation and Demolition',
      titleIndex: 6,
      text: '<p>In 1964, David Rosen Associates identified only a small number of structures (shaded black) for preservation. Most were institutional buildings–churches, the YMCA, the public library. All the rest were to be demolished.</p>'
    },
    {
      label: 'text-7b image: 176-178-Montgomery-before (nice house) - Preservation and Demolition',
      titleIndex: null,
      text: '<p>Public criticism and a closer inspection of the stately homes along Grand Street would eventually change the planners\' minds. In the end, more houses were preserved than initially planned.</p>'
    },
    {
      label: 'text-7c image: 176-178-Montgomery-after (sad house) - Preservation and Demolition',
      titleIndex: null,
      text: '<p>But property owners were understandably reluctant to repair buildings slated for demolition. In the meantime, those buildings grew increasingly dilapidated. Once vacated, buildings in the renewal area became targets of vandalism.</p>'
    },
    {
      label: 'text-8a image: newburgh-guided-map2 (existing land use) - Repackaging East Newburgh',
      titleIndex: 7,
      text: '<p>The purpose of demolishing existing structures was to make room for new construction. The juxtaposition of these two maps shows how the planners proposed to combine cleared lots into larger parcels that the City could sell to private developers.</p>'
    },
    {
      label: 'text-8b image: newburgh-guided-map15 (proposed parcels) - Repackaging East Newburgh',
      titleIndex: null,
      text: '<p>In theory, the developers would build the structures designated for those spaces.</p><p>This process of reorganizing and rebuilding was key to the creation of a renewed East Newburgh. In the planners\' words, an \"important new neighborhood\" would take the place of \"an area of blight and physical disorder.\"</p>'
    },
    {
      label: 'text-9a image: newburgh-guided-map10 (rendering - full view) - A New Map of East Newburgh',
      titleIndex: 8,
      text: '<p>This map does not represent any particular plan. Rather, it envisions a possible future. Planners and city officials used images such as this to foster public support for urban renewal.</p>'
    },
    {
      label: 'text-9b image: newburgh-guided-map10a (rendering - zoomed a bit) - A New Map of East Newburgh',
      titleIndex: null,
      text: '<p>This version of Newburgh separated residential from commercial functions.</p>'
    },
    {
      label: 'text-9c image: newburgh-guided-map10b (rendering - zoomed to offices) - A New Map of East Newburgh',
      titleIndex: null,
      text: '<p>It featured modern office buildings,...</p>'
    },
    {
      label: 'text-9d image: newburgh-guided-map10c (rendering - zoomed a bit) - A New Map of East Newburgh',
      titleIndex: null,
      text: '<p>&hellip;a new public park,&hellip;</p>'
    },
    {
      label: 'text-9e image: newburgh-guided-map10d (rendering - zoomed a bit) - A New Map of East Newburgh',
      titleIndex: null,
      text: '<p>&hellip;and garden apartments&hellip;</p>'
    },        
    {
      label: 'text-9f image: newburgh-guided-map10 (rendering - full view) - A New Map of East Newburgh',
      titleIndex: null,
      text: '<p>all connected by a redesigned circulation system consisting of roads, parking lots, and pedestrian walkways.</p>'
    },
    {
      label: 'text-10a image: newburgh-map-20 (rendering - mall) - Middle-class Comforts',
      titleIndex: 9,
      text: '<p>Here the perspective shifts from the clouds above to street level. Who and what do you see?</p>'
    },
    {
      label: 'text-10b image: newburgh-map-20 (rendering - mall) - Middle-class Comforts',
      titleIndex: null,
      text: '<p>The Rosen plan aimed to replace &ldquo;an area of blight and physical disorder&rdquo; with &ldquo;a totally new environment &hellip; carefully adjusted to the needs of attracting new residents.&rdquo;</p>'
    },
    {
      label: 'text-10c image: newburgh-map-22 (rendering - interior) - Middle-class Comforts',
      titleIndex: null,
      text: '<p>Planners imagined these new residents as white and middle- or upper-income, drawn by modern housing and scenic views of the Hudson River and Mount Beacon.</p>'
    },
    {
      label: 'text-10d image: newburgh-map-22 (rendering - interior) - Middle-class Comforts',
      titleIndex: null,
      text: '<p>The Rosen plan did not completely banish former residents. One of the structures to be retained was a public housing complex built for Black families in the 1950s.</p><p>In fact, racial integration was part of the justification for renewal. The planners recommended building replacement housing for displaced families on vacant land in all-white West Newburgh. (That part of the plan generated the most local controversy.)</p>'
    },
    {
      label: 'text-11 image: newburgh-map-19 (rendering - mall) - Urban Amenities',
      titleIndex: 10,
      text: '<p>Key to the plan was a &ldquo;community plaza&rdquo; at the base of Broadway, Newburgh&rsquo;s main thoroughfare.</p><p>This element of the plan was more fully fleshed out in a later report, which described the plaza as &ldquo;an attractive pedestrian circulation and congregating area.&rdquo; Closed to traffic, it would feature benches, fountains, and well-lit walkways.</p>'
    }, 
    {
      label: 'text-11 same image: newburgh-map-19 (rendering - mall) - Urban Amenities',
      titleIndex: null,
      text: '<p>Just east of the plaza was space for a future civic amphitheater, designed to take advantage of a steep slope that precluded other uses.</p>'
    },
    {
      label: 'text-12 image: Front&Water-housing - Plan vs. Reality',
      titleIndex: 11,
      text: '<p>Some elements of the Rosen and later plans were eventually implemented.</p>'
    },     
    {
      label: 'text-12a image: Front&Water-empty-lot - Plan vs. Reality',
      titleIndex: null,
      text: '<p>But a large section of the East Newburgh Urban Renewal Area is still undeveloped.</p><p>Although some private developers were drawn to East Newburgh by its natural beauty or its potential as a deep-water port, none invested the time or money to turn this area into the place envisioned by the Rosen plan.</p>'
    },
  ]


export {images}
export {sectionTitles}
export {captions}