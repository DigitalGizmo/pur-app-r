const images = [
  'newburgh-aerial-1', // The View From Above
  'newburgh-aerial-2', // The View From Above
  'newburgh-aerial-2-map1', // The View From Above
  'newburgh-aerial-2-map2', // The View From Above
  'newburgh-aerial-2-map3', // The View From Above
  'newburgh-aerial-2-map4', // The View From Above
  'newburgh-post-office', // East Newburgh
  'newburgh-front&water', // East Newburgh
  'Newburgh-Colden-Washington', // East Newburgh (new pic of black neighborhood here)
  'montgomeryward', // East Newburgh (new pic of white suburbs here)
  'newburgh-guided-map1', // The Appraisers Advice
  'newburgh-guided-map1a', // The Appraisers Advice
  'newburgh-guided-map1b', // The Appraisers Advice
  'newburgh-guided-map1b', // The Appraisers Advice
  'Feasability_Survey_Area_Map3-sized', // Good, Fair, Deteriorating, Deteriorated
  'Feasability_Survey_Area_Map3-fair', // Good, Fair, Deteriorating, Deteriorated
  'Feasability_Survey_Area_Map3-deterior', // Good, Fair, Deteriorating, Deteriorated
  'newburgh-map3-5a', // Good, Fair, Deteriorating, Deteriorated
  'Feasability_Survey_Area_Map3-sized', // Good, Fair, Deteriorating, Deteriorated
  'newburgh-map3-5b', // Missing from the Planners Perspective
  'newburgh-map3-5c', // Missing from the Planners Perspective
  '196GrandSt-hodges-house', // The Homeowners Perspective
  'Williams-Montgomery-St-96-98', // The Homeowners Perspective
  'newburgh-guided-map4',// Preservation and Demolition
  'newburgh-guided-map4-photos',// Preservation and Demolition
  '176-178-Montgomery-before', // Preservation and Demolition
  '176-178-Montgomery-after', // Preservation and Demolition
  'newburgh-map-2', // Repackaging East Newburgh
  'newburgh-map-15', // Repackaging East Newburgh
  'newburgh-guided-map10', // A New Map of East Newburgh
  'newburgh-guided-map10a', // A New Map of East Newburgh
  'newburgh-guided-map10b', // A New Map of East Newburgh
  'newburgh-guided-map10c', // A New Map of East Newburgh
  'newburgh-guided-map10d', // A New Map of East Newburgh
  'newburgh-guided-map10', // A New Map of East Newburgh
  'newburgh-map-20', // Middle-class Comforts
  'newburgh-map-20', // Middle-class Comforts
  'newburgh-map-22', // Middle-class Comforts
  'newburgh-map-22', // Middle-class Comforts
  'newburgh-map19', // Urban Amenities
  'newburgh-map19', // Urban Amenities
  'Front&Water-housing', // Plan vs. Reality
  'Front&Water-empty-lot', // Plan vs. Reality
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
      label: 'The View from Above, text-1a, image: newburgh-aerial-1 (aerial photo)',
      titleIndex: 0,
      text: '<p>Looking down on East Newburgh, urban planners saw blighted buildings, obsolete land-use patterns, and an outdated street grid. The city\'s population, as well as its tax base, was in decline. The planners\' solution to this cluster of problems was to start over from scratch.</p>',
    },
    {
      label: 'The View from Above, text-1b image: newburgh-aerial-2 (zoomed in aerial photo)',
      titleIndex: 0,
      text: '<p>This was the logic of urban renewal:</p><p>Demolition of existing homes and shops was the first step toward transforming a blighted area.</p>'
    },
    {
      label: 'The View from Above, text-1c image: newburgh-aerial-2-map1 (aerial w/ map1)',
      titleIndex: 0,
      text: '<p>Once cleared, small lots could be repackaged into larger parcels for sale to private developers.</p>'
    },
    {
      label: 'The View from Above, text-1d image: newburgh-aerial-2-map2 (aerial w/ map2)',
      titleIndex: 0,
      text: '<p>Those developers would build modern housing and commercial developments.</p>'
    },
    {
      label: 'The View from Above, text-1e image: newburgh-aerial-2-map3 (aerial w/ map3)',
      titleIndex: 0,
      text: '<p>New people (whiter and wealthier than their predecessors) would move into the new homes. New businesses would rent space in the commercial structures.</p>'
    },
    {
      label: 'The View from Above, text-1f image: newburgh-aerial-2-map4 (aerial w/ map4)',
      titleIndex: 0,
      text: '<p>These new businesses and residents would stabilize municipal finances.</p>'
    },
    {
      label: 'East Newburgh, text-2a image: newburgh-post-office',
      titleIndex: 1,
      text: '<p>The east side of Newburgh is the oldest section of the city. It was once home to Newburgh\'s white elite. That was no longer true by 1960.</p>'
    },
    {
      label: 'East Newburgh, text-2b image: newburgh-front&water',
      titleIndex: 1,
      text: '<p>Between 1950 and 1960, Newburgh\'s Black population more than doubled.</p><p>Many were Southern migrants, part of what is known as the Great Migration. Between World War I and the 1970s, roughly six million African Americans moved from the rural South to the urban North in search of a better life.</p>'
    },
    {
      label: 'East Newburgh, text-2c image: Newburgh-Colden-Washington.jpg (new image of downtown black neighborhood)',
      titleIndex: 1,
      text: '<p>In Newburgh, these migrants made their homes in the eastern section of the city, along the Hudson River. (White realtors and property owners prevented them from settling anywhere else.)</p>'
    },
    {
      label: 'East Newburgh, text-2d image: montgomeryward (new image of white suburbs)',
      titleIndex: 1,
      text: '<p>During that same period of time, white city residents moved from east to west or out to the suburbs. Federally-backed mortgages facilitated these moves, described collectively as white flight.</p>'
    },
    {
      label: 'The Appraisers Advice, text-3a image: newburgh-guided-map1 (map plain)',
      titleIndex: 2,
      text: '<p>In 1964, Newburgh\'s city council hired the planning firm of David Rosen Associates. Urban renewal was already underway.</p>'
    },
    {
      label: 'The Appraisers Advice, text-3b image: newburgh-guided-map1a (map with original take are hilited)',
      titleIndex: 2,
      text: '<p>The planners\' job was to assess the &quot;feasibility&quot; of expanding the urban renewal area.</p>'
    },
    {
      label: 'The Appraisers Advice, text-3c image: newburgh-guided-map1b (map with expanded take are hilited)',
      titleIndex: 2,
      text: '<p>The justification for this expansion was a 1961 report by real estate appraiser Humes Flynn.</p><p>From the appraiser\'s perspective, the Water Street Urban Renewal Project was &quot;only the beginning.&quot; Urban renewal would be a &quot;miserable failure,&quot; if more buildings weren\'t demolished.</p>'
    },
    {
      label: 'The Appraisers Advice, text-3c image: newburgh-guided-map1b (map with expanded take are hilited)',
      titleIndex: 2,
      text: '<p>Should the City fail to heed his advice, Mr. Flynn predicted, &quot;whatever is built in the present area will be greatly reduced in value and effectiveness by the condition of the properties in the surrounding areas.&quot;</p>'
    },
    {
      label: 'Good, Fair, Deteriorating, Deteriorated, text-4a image: Feasability_Survey_Area_Map3-sized (plain map)',
      titleIndex: 3,
      text: '<p>The planners started with the assumption that &quot;blight and deterioration&quot; were rampant in the renewal area.</p>'
    },
    {
      label: 'Good, Fair, Deteriorating, Deteriorated, text-4b image: Feasability_Survey_Area_Map3-fair (map w good, fair areas hilited)',
      titleIndex: 3,
      text: '<p>While the planners classified some buildings as being in &quot;good&quot; or &quot;fair&quot; condition...</p>'
    },
    {   
      label: 'Good, Fair, Deteriorating, Deteriorated, text-4c image: Feasability_Survey_Area_Map3-deterior (map w deteriorated areas hilited)',
      titleIndex: 3,
      text: '...they regarded most as &quot;deteriorating&quot; or &quot;deteriorated.&quot;</p>'
    },
    {
      label: 'Good, Fair, Deteriorating, Deteriorated, text-4d image: newburgh-map3-5a (map w pictures overlaid)',
      titleIndex: 3,
      text: '<p>Contemporary photographs show that many East Newburgh buildings were in poor repair. In part this was due to redlining.</p><p>Redlining was the practice of denying home loans in inner-city neighborhoods or to non-white borrowers.</p>'
    },
    {
      label: 'Good, Fair, Deteriorating, Deteriorated, text-4d image: Feasability_Survey_Area_Map3-sized (back to plain map)',
      titleIndex: 3,
      text: '<p>But redlining doesn\'t completely explain the planners\' map.</p>'
    },
    {
      label: 'Missing from the Planners Perspective, text-5a image: newburgh-map3-5b (map with good condition photos overlaid)',
      titleIndex: 4,
      text: '<p>David Rosen later admitted that he and his colleagues missed some well-maintained properties in the renewal area.</p>'
    },
    {
      label: 'Missing from the Planners Perspective, text-5c image: newburgh-map3-5c (map with churches etc photos overlaid)',
      titleIndex: 4,
      text: '<p>They also missed what these places (no matter their condition) meant to the people who lived, worked, played, and prayed there.</p><p>When urban planners looked at people living in renewal areas, they saw households to be counted and moved somewhere else.</p><p>The neighborhood ties that bound people together were beyond the scope of planning studies. Severing these ties would prove devastating to displaced communities in Newburgh and across the nation.</p>'
    },
    {
      label: 'The Homeowners Perspective, text-6a image: 196GrandSt-hodges-house (Hodges Home & Funeral Parlor)',
      titleIndex: 5,
      text: '<p>Addressing a public meeting of the Newburgh Urban Renewal Agency in 1967, Kathleen Hodge stated flatly that she did not want to move. Her elegant, historic home also housed the Hodge family funeral parlor.</p><p>While the Hodge home and business escaped the bulldozer, most area residents were not so lucky.</p>'
    },
    {
      label: 'The Homeowners Perspective, text-6b image: Williams-Montgomery-St-96-98 (Williams Home)',
      titleIndex: 5,
      text: '<p>Mattie Williams attended the same meeting. The 67-year-old widow owned two Montgomery Street houses. One was her home, the other, a rental property.</p><p>When it was her turn to speak, Mrs. Williams emphasized the inequity of urban renewal. She pointed out that &quot;the heart&quot; of the renewal area was in the heavily segregated city’s &quot;Negro section.&quot;</p><p>Those facing displacement &quot;are our people,&quot; Mrs. Williams said. &quot;They are not your people.&quot;</p>'
    },
    {
      label: 'Preservation and Demolition, text-7a image: newburgh-guided-map4 (map of buildings to be preserved)',
      titleIndex: 6,
      text: '<p>In 1964, David Rosen Associates identified only a small number of structures (shaded black) for preservation. Most were institutional buildings–churches, the YMCA, the public library. All the rest were to be demolished.</p>'
    },
    {
      label: 'Preservation and Demolition, text-7b image: newburgh-guided-map4-photos (map of buildings to be preserved with photos)',
      titleIndex: 6,
      text: '<p>Public criticism and a closer inspection of the stately homes along Grand Street would eventually change the planners\' minds. In the end, more houses were preserved than initially planned.</p>'
    },
    {
      label: 'Preservation and Demolition, text-7c image: 176-178-Montgomery-before (nice house)',
      titleIndex: 6,
      text: '<p>But property owners were understandably reluctant to repair buildings slated for demolition.</p>'
    },
    {
      label: 'Preservation and Demolition, text-7d image: 176-178-Montgomery-after (sad house)',
      titleIndex: 6,
      text: '<p>In the meantime, those buildings grew increasingly dilapidated. Once vacated, buildings in the renewal area became targets of vandalism.</p>'
    },
    {
      label: 'Repackaging East Newburgh, text-8a image: newburgh-guided-map2 (map of existing land use) - ',
      titleIndex: 7,
      text: '<p>The purpose of demolishing existing structures was to make room for new construction. The juxtaposition of these two maps shows how the planners proposed to combine cleared lots into larger parcels that the City could sell to private developers.</p>'
    },
    {
      label: 'Repackaging East Newburgh, text-8b image: newburgh-guided-map15 (map of proposed parcels)',
      titleIndex: 7,
      text: '<p>In theory, the developers would build the structures designated for those spaces.</p><p>This process of reorganizing and rebuilding was key to the creation of a renewed East Newburgh. In the planners\' words, an &quot;important new neighborhood&quot; would take the place of &quot;an area of blight and physical disorder.&quot;</p>'
    },
    {
      label: 'A New Map of East Newburgh, text-9a image: newburgh-guided-map10 (rendering - full view)',
      titleIndex: 8,
      text: '<p>This map does not represent any particular plan. Rather, it envisions a possible future. Planners and city officials used images such as this to foster public support for urban renewal.</p>'
    },
    {
      label: 'A New Map of East Newburgh, text-9b image: newburgh-guided-map10a (rendering - zoomed a bit)',
      titleIndex: 8,
      text: '<p>This version of Newburgh separated residential from commercial functions.</p>'
    },
    {
      label: 'A New Map of East Newburgh, text-9c image: newburgh-guided-map10b (rendering - zoomed to offices)',
      titleIndex: 8,
      text: '<p>It featured modern office buildings,&hellip;</p>'
    },
    {
      label: 'A New Map of East Newburgh, text-9d image: newburgh-guided-map10c (rendering - zoomed a bit)',
      titleIndex: 8,
      text: '<p>&hellip;a new public park,&hellip;</p>'
    },
    {
      label: 'A New Map of East Newburgh, text-9e image: newburgh-guided-map10d (rendering - zoomed a bit)',
      titleIndex: 8,
      text: '<p>&hellip;and garden apartments&hellip;</p>'
    },        
    {
      label: 'A New Map of East Newburgh, text-9f image: newburgh-guided-map10 (rendering - full view)',
      titleIndex: 8,
      text: '<p>all connected by a redesigned circulation system consisting of roads, parking lots, and pedestrian walkways.</p>'
    },
    {
      label: 'Middle-class Comforts, text-10a image: newburgh-map-20 (rendering - mall)',
      titleIndex: 9,
      text: '<p>Here the perspective shifts from the clouds above to street level. Who and what do you see?</p>'
    },
    {
      label: 'Middle-class Comforts, text-10b image: newburgh-map-20 (rendering - mall)',
      titleIndex: 9,
      text: '<p>The Rosen plan aimed to replace &ldquo;an area of blight and physical disorder&rdquo; with &ldquo;a totally new environment &hellip; carefully adjusted to the needs of attracting new residents.&rdquo;</p>'
    },
    {
      label: 'Middle-class Comforts, text-10c image: newburgh-map-22 (rendering - interior)',
      titleIndex: 9,
      text: '<p>Planners imagined these new residents as white and middle- or upper-income, drawn by modern housing and scenic views of the Hudson River and Mount Beacon.</p>'
    },
    {
      label: 'Middle-class Comforts, text-10d image: newburgh-map-22 (rendering - interior)',
      titleIndex: 9,
      text: '<p>The Rosen plan did not completely banish former residents. One of the structures to be retained was a public housing complex built for Black families in the 1950s.</p><p>In fact, racial integration was part of the justification for renewal. The planners recommended building replacement housing for displaced families on vacant land in all-white West Newburgh. (That part of the plan generated the most local controversy.)</p>'
    },
    {
      label: 'Urban Amenities, text-11 image: newburgh-map-19 (rendering - mall)',
      titleIndex: 10,
      text: '<p>Key to the plan was a &ldquo;community plaza&rdquo; at the base of Broadway, Newburgh&rsquo;s main thoroughfare.</p><p>This element of the plan was more fully fleshed out in a later report, which described the plaza as &ldquo;an attractive pedestrian circulation and congregating area.&rdquo; Closed to traffic, it would feature benches, fountains, and well-lit walkways.</p>'
    }, 
    {
      label: 'Urban Amenities, text-11 same image: newburgh-map-19 (rendering - mall)',
      titleIndex: 10,
      text: '<p>Just east of the plaza was space for a future civic amphitheater, designed to take advantage of a steep slope that precluded other uses.</p>'
    },
    {
      label: 'Plan vs. Reality, text-12 image: Front&Water-housing (housing near river)',
      titleIndex: 11,
      text: '<p>Some elements of the Rosen and later plans were eventually implemented.</p>'
    },     
    {
      label: 'Plan vs. Reality, text-12a image: Front&Water-empty-lot (empty lot near river) ',
      titleIndex: 11,
      text: '<p>But a large section of the East Newburgh Urban Renewal Area is still undeveloped.</p><p>Although some private developers were drawn to East Newburgh by its natural beauty or its potential as a deep-water port, none invested the time or money to turn this area into the place envisioned by the Rosen plan.</p>'
    },
  ]


export {images}
export {sectionTitles}
export {captions}