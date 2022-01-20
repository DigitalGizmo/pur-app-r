const images = [
  'newburgh-aerial-1-title',
  'newburgh-aerial-2-title',
  'newburgh-guided-map1-title',
  'newburgh-guided-map1a-title',
  'newburgh-guided-map1b-title',
  'newburgh-front&water',
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

  const captions = [
    {
      label: 'text-1a',
      title: 'The View from Above',
      text: '<p>Looking down on East Newburgh, urban planners saw blighted buildings, obsolete land-use patterns, and an outdated street grid. The city&rsquo;s population, as well as its tax base, was in decline. The planners&rsquo; solution to this cluster of problems was to start over from scratch.</p>',
    },
    {
      label: 'text-1b',
      title: '',
      text: '<p>This was the logic of urban renewal: Demolition of existing homes and shops was the first step toward transforming a blighted area. Once cleared, small lots could be repackaged into larger parcels for sale to private developers. Those developers would build modern housing and commercial developments. New people (whiter and wealthier than their predecessors) would move into the new homes. New businesses would rent space in the commercial structures. These new businesses and residents would stabilize municipal finances.</p>'
    },
    {
      label: 'text-2a',
      title: 'The Appraiser&rsquo;s Advice',
      text: '<p>In 1964, when Newburgh&rsquo;s city council hired the planning firm of David Rosen Associates, urban renewal was already underway.</p>'
    },
    {
      label: 'text-2b',
      title: '',
      text: '<p>The planning firm&rsquo;s job was to assess the &ldquo;feasibility&rdquo; of expanding the urban renewal area.</p>'
    },
    {
      label: 'text-2c',
      title: '',
      text: '<p>Justifying this expansion was an earlier analysis by real estate appraiser Humes Flynn. In 1961, Mr. Flynn wrote that the earlier Water Street Urban Renewal Project, &ldquo;is only the beginning. The project will be a miserable failure if a future project does not extend from South Street to Water Street on both sides of Smith  and High Streets, and also should include First Street, both sides of Colden Street and South Water Street from Water Street to Washington Street. These areas must in the very near future be demolished, or whatever is built in the present area will be greatly reduced in value and effectiveness by the condition of the properties in the surrounding areas.&rdquo;</p>'
    },
    {
      label: 'text-3',
      title: 'The East Newburgh Urban Renewal Area',
      text: '<p>The East Newburgh Urban Renewal Area included some of the oldest sections of the city. It was once home to Newburgh&rsquo;s white elite. That was no longer true by 1960.<br>Between 1950 and 1960, the city&rsquo;s Black population more than doubled. Many were Southern migrants, part of what is known as the Great Migration. Between World War I and the 1970s, roughly six million African Americans moved from the rural South to the urban North in search of a better life. In Newburgh, these migrants made their homes in the eastern section of the city. (White property owners prevented them from settling anywhere else.)<br>During the same period of time, white city residents moved from east to west or to the suburbs. Federally-backed mortgages facilitated these moves, described collectively as white flight.</p>'
    },
    {
      label: 'text-4a image: plain map3',
      title: 'Good, Fair, Deteriorating, Deteriorated',
      text: '<p>The planners started with the assumption that &ldquo;blight and deterioration&rdquo; were rampant in the renewal area.</p>'
    },
    {
      label: 'text-4b image: map 3 with categories highlighted',
      title: '',
      text: '<p>Most of the buildings on this map were classified as &ldquo;deteriorating&rdquo; or &ldquo;deteriorated.&rdquo; </p>'
    },
    {
      label: 'text-5a image: map 3 with poor condition photos',
      title: 'Missing from the Planners&rsquo; Perspective',
      text: '<p>Contemporary photographs show that many East Newburgh buildings were in poor condition. In part this was due redlining. Redlining was the practice of restricting bank financing to white borrowers and middle-class neighborhoods. But redlining doesn&rsquo;t completely explain this map.</p>'
    },
    {
      label: 'text-5b image: map 3 with better condition photos',
      title: '',
      text: '<p>David Rosen later admitted that he and his colleagues missed some well-maintained properties in the renewal area.</p>'
    }, 
    {
      label: 'text-5c image: map 3 with better condition photos',
      title: '',
      text: '<p>They also missed what these places (no matter their condition) meant to the people who lived, worked, played, and prayed there. When urban planners looked at people living in renewal areas, they saw households to be counted and moved somewhere else. The neighborhood ties that bound people together were beyond the scope of planning studies. Severing these ties would prove devastating to displaced communities in Newburgh and across the nation.</p>'
    },
    {
      label: 'text-6a image: Hodges Home & Funeral Parlor',
      title: 'The Homeowners&rsquo; Perspective',
      text: '<p>Addressing a public meeting of the Newburgh Urban Renewal Agency in 1967, Kathleen Hodge stated flatly that she did not want to move. Her elegant, historic home also housed the Hodge family funeral parlor. While the Hodge home and business escaped the bulldozer, most area residents were not so lucky.</p>'
    },
    {
      label: 'text-6b image: Williams Home',
      title: '',
      text: '<p>Mattie Williams attended the same meeting. The 67-year-old widow owned two Montgomery Street houses. One was her home, the other, a rental property. When it was her turn to speak, Mrs. Williams emphasized the inequity of urban renewal. She pointed out that &ldquo;the heart&rdquo; of the renewal area was in the heavily segregated city&rsquo;s &ldquo;Negro section.&rdquo; Those facing displacement &ldquo;are our people,&rdquo; she said. &ldquo;They are not your people.&rdquo; The lack of housing for displaced residents was another problem, one agency representative acknowledged. His statement, according to the minutes, received &ldquo;the first applause of the evening.&rdquo;</p>'
    },
    {
      label: 'text-7a image: Map 4',
      title: 'Preservation and Demolition',
      text: '<p>In 1964, David Rosen Associates identified only a small number of structures (shaded black) for preservation. The rest were to be demolished.</p>'
    },
    {
      label: 'text-7a image: Map 4',
      title: 'Preservation and Demolition',
      text: '<p>Public criticism and a closer inspection of the stately homes along Grand Street would eventually change the planners&rsquo; minds. In the end, more houses than planned would be spared.</p>'
    },
    {
      label: 'text-7a image: Map 4',
      title: '',
      text: '<p>But property owners were understandably reluctant to repair buildings slated for demolition. In the meantime, those buildings grew increasingly dilapidated.</p>'
    },
    {
      label: 'text-8a image: Map 2',
      title: 'Repackaging East Newburgh',
      text: '<p>The purpose of demolishing existing structures was to make room for new construction. The juxtaposition of these two maps shows how the planners proposed to combine cleared lots into larger parcels that the City could sell to private developers.</p>'
    },
    {
      label: 'text-8b image: Map 15',
      title: '',
      text: '<p>In theory, the developers would build the structures designated for those spaces. This process of reorganizing and rebuilding was key to rebranding East Newburgh.</p>'
    },
    {
      label: 'text-9 image: rendering of full plan',
      title: 'A New Map of East Newburgh',
      text: '<p>This map does not represent any particular plan. Rather, it envisions a possible future. Planners and city officials used maps such as this to foster public support for urban renewal. This version of Newburgh renewed is characterized by modern residential and commercial architecture, the buildings connected by a new system of parks, walkways, and parking lots.</p>'
    },
    {
      label: 'text-10 image: rendering of pedestrian mall',
      title: 'Middle-class Comforts',
      text: '<p>Here the perspective shifts from the clouds above to street level. Who and what do you see?</p>'
    },
    {
      label: 'text-10 image: rendering of pedestrian mall',
      title: '',
      text: '<p>The Rosen plan aimed to replace &ldquo;an area of blight and physical disorder&rdquo; with &ldquo;a totally new environment &hellip; carefully adjusted to the needs of attracting new residents.&rdquo;</p>'
    },
    {
      label: 'text-10 image: rendering of pedestrian mall',
      title: '',
      text: '<p>Planners imagined these new residents as white and middle- or upper-income, drawn by modern housing and scenic views of the Hudson River and Mount Beacon.</p>'
    },
    {
      label: 'text-10 image: rendering of pedestrian mall',
      title: '',
      text: '<p>The plan did not completely banish former residents. One of the structures to be retained was a public housing complex built for Black families in the 1950s. Furthermore, Rosen recommended building housing for displaced families in all-white West Newburgh. That part of the plan generated the most controversy.</p>'
    },
    {
      label: 'text-11 image: rendering of pedestrian mall',
      title: 'Urban Amenities',
      text: '<p>Key to the plan was a &ldquo;Community Plaza&rdquo; at the base of Broadway, Newburgh&rsquo;s main thoroughfare. This element of the plan was more fully fleshed out in a later report. The report described the plaza as &ldquo;an attractive pedestrian circulation and congregating area,&rdquo; closed to traffic and featuring benches, fountains, and well-lit walkways. Just east of the plaza was space for a future civic amphitheater, designed to take advantage of a steep slope that precluded other uses.</p>'
    },
    {
      label: 'text-12 image: wintery view across the Hudson',
      title: 'Plan vs. Reality',
      text: '<p>Some elements of the Rosen and later plans were eventually implemented. But most redevelopment was publicly funded or subsidized.<br/><br/>Although some private developers were initially drawn to East Newburgh by its natural beauty or its potential as a deepwater port, none invested the time or money to turn this area into the new neighborhood Rosen envisioned.</p>'
    },
  ]


export {images}
export {captions}