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
  'Feasability_Survey_Area_Map3-deterior',
  'newburgh-map3-5a',
  'newburgh-map3-5b',
  'newburgh-map3-5c',
  '196GrandSt-hodges-house',
  'Williams-Montgomery-St-96-98',
  'newburgh-guided-map4',
  'newburgh-guided-map4',
  'newburgh-guided-map4',
  'newburgh-map-2',
  'newburgh-map-15',
  'newburgh-guided-map10',
  'newburgh-map-20',
  'newburgh-map-20',
  'newburgh-map-20',
  'newburgh-map-20',
  'newburgh-map19',
  'RRtrestle-WaterStGone',
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
      label: 'text-4a image: - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: 3,
      text: '<p>The planners started with the assumption that \"blight and deterioration\" were rampant in the renewal area.</p>'
    },
    {
      label: 'text-4b image:  - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: null,
      text: '<p>While the planners classified some buildings as being in \"good\" or \"fair\" condition, they regarded most as \"deteriorating\" or \"deteriorated.\"</p>'
    },
    {
      label: 'text-4c image:  - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: null,
      text: 'Contemporary photographs show that many East Newburgh buildings were in poor repair. In part this was due to redlining. Redlining was the practice of denying home loans in inner-city neighborhoods or to non-white borrowers.</p>'
    },
    {
      label: 'text-4d image:  - Good, Fair, Deteriorating, Deteriorated',
      titleIndex: null,
      text: '<p>But redlining doesn\'t completely explain the planners\' map.</p>'
    },


    {
      label: 'text-5a image: map 3 with poor condition photos -Missing from the Planners&rsquo; Perspective',
      titleIndex: 4,
      text: '<p>Contemporary photographs show that many East Newburgh buildings were in poor condition. In part this was due redlining. Redlining was the practice of restricting bank financing to white borrowers and middle-class neighborhoods. But redlining doesn&rsquo;t completely explain this map.</p>'
    },
    {
      label: 'text-5b image: map 3 with better condition photos',
      titleIndex: null,
      text: '<p>David Rosen later admitted that he and his colleagues missed some well-maintained properties in the renewal area.</p>'
    }, 
    {
      label: 'text-5c image: map 3 with better condition photos',
      titleIndex: null,
      text: '<p>They also missed what these places (no matter their condition) meant to the people who lived, worked, played, and prayed there. When urban planners looked at people living in renewal areas, they saw households to be counted and moved somewhere else. The neighborhood ties that bound people together were beyond the scope of planning studies. Severing these ties would prove devastating to displaced communities in Newburgh and across the nation.</p>'
    },
    {
      label: 'text-6a image: Hodges Home & Funeral Parlor -The Homeowners&rsquo; Perspective',
      titleIndex: null,
      text: '<p>Addressing a public meeting of the Newburgh Urban Renewal Agency in 1967, Kathleen Hodge stated flatly that she did not want to move. Her elegant, historic home also housed the Hodge family funeral parlor. While the Hodge home and business escaped the bulldozer, most area residents were not so lucky.</p>'
    },
    {
      label: 'text-6b image: Williams Home',
      titleIndex: null,
      text: '<p>Mattie Williams attended the same meeting. The 67-year-old widow owned two Montgomery Street houses. One was her home, the other, a rental property. When it was her turn to speak, Mrs. Williams emphasized the inequity of urban renewal. She pointed out that &ldquo;the heart&rdquo; of the renewal area was in the heavily segregated city&rsquo;s &ldquo;Negro section.&rdquo; Those facing displacement &ldquo;are our people,&rdquo; she said. &ldquo;They are not your people.&rdquo; The lack of housing for displaced residents was another problem, one agency representative acknowledged. His statement, according to the minutes, received &ldquo;the first applause of the evening.&rdquo;</p>'
    },

  ]


export {images}
export {sectionTitles}
export {captions}