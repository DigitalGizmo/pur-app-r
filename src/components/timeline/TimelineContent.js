const yearArray = [
  1949, 1950, 1951, 1952, 1953, 1954, 
  1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 
  1967, 1968, 1969]
  // 1943, 1944, 1945, 1946, 1947, 1948, 

const timelineContent = [
  {
    "city" : "New York City",
    "class" : "row-nyc",
    "years" : [
       {
          "year": "1943",
          "text": "Metropolitan Life Insurance Co. (MetLife) announces plans to build Stuyvesant Town apartment complex on the Lower East Side of Manhattan. The city grants MetLife the power of eminent domain.",
       },
       {
          "year": "1949",
          "text": "Stuyvesant Town housing development reaches full occupancy. Most residents are World War II veterans and their families.",
          "hasImage": "true",
          "thrulines": [1,4]
       },
       {
          "year": "1950",
          "text": "U.S. Supreme Court declines to hear anti-discrimination lawsuit, Dorsey v. Stuyvesant Town Corp. Later that year, Stuyvesant Town management attempts to evict tenants protesting segregation. ",
       },
       {
          "year": "1951",
          "text": "New York City law prohibits discrimination in publicly-aided housing, including Stuyvesant Town. Future violations are misdemeanors punishable by a $500 fine. ",
          "thrulines": [2,3]
       },
       {
          "year": "1952",
          "text": "Stuyvesant Town management drops eviction proceedings and grants first lease to an African American family. Management proposes first rent increase.",
       },
       {
          "year": "1954",
          "text": "New York State Appeals Court affirms right to increase rent by more than 14%.",
       },
       {
          "year": "1957",
          "text": "Voters re-elect Mayor Robert Wagner, a strong supporter of redevelopment.",
       },
       {
          "year": "1958",
          "text": "H   C  @The Sharkey-Brown-Isaacs Law gives the City the power to investigate and hold hearings on allegations of discrimination in private housing. It is the first law in the nation to do so.",
       },
       {
          "year": "1959",
          "text": "H   O  @The Metropolitan Council on Housing, a grassroots organization, is formed to prevent neighborhood destruction and tenant displacement due to urban renewal.",
       },
       {
          "year": "1960",
          "text": "U  @David Rockefeller, Vice-Chairman of Chase Manhattan Bank and the governor's brother, proposes building a World Trade Center in lower Manhattan. His goal is to bolster the city's flagging financial district.",
       },
       {
          "year": "1961",
          "text": "D  ~~ \nBy the time West Side Story hits movie theaters, the streets where the opening sequence was filmed in 1960 had been demolished to make way for Lincoln Center.",
       },
       {
          "year": "1962",
          "text": "P  @Mayor Robert Wagner establishes the Landmarks Preservation Commission to protect the city's architectural heritage. But until 1965, when City Council passes the Landmarks Law, the new commission proves relatively toothless.",
       },
       {
          "year": "1963",
          "text": "D   R  @Both the demolition of Penn Station and the construction of Lincoln Center begin.",
       },
       {
          "year": "1964",
          "text": "The World's Fair opens in Flushing Meadows, Queens. Wallace Harrison's iconic New York Hall of Science is still in use today. ",
       },
       {
          "year": "1965",
          "text": "D  @Triborough Bridge and Tunnel Authority chairman, Robert Moses, calls for increased relocation compensation to displaced residents and business owners. His goal is to speed up highway construction.",
       },
       {
          "year": "1966",
          "text": "H   P~~\nMayor John Lindsay's Task Force on Housing publishes 50 recommendations--among them, prioritizing rehabilitation over demolition of architecturally sound but dilapidated structures. ",
       },
       {
          "year": "1967",
          "text": "President Lyndon Johnson's Commission on Urban Problems conducts hearings in New York and 17 other major cities. The commission's final report includes a critique of the federal urban renewal program.",
       },
       {
          "year": "1968",
          "text": "H  @Real estate developer Harry Helmsley buys MetLife's Parkchester apartment complex in the Bronx. He plans to convert rental units into condominiums.",
       },
       {
          "year": "1969",
          "text": "H~~City passes rent stabilization law.",
       },

    ]
 },
 {
    "city" : "Newburgh",
    "class" : "row-newburgh",
    "years" : [
       {
          "year": "1953",
          "text": "State authorizes construction of Newburgh-Beacon Bridge.",
       },
       {
          "year": "1956",
          "text": "U~~Newburgh  receives federal urban renewal survey and planning grant.",
          "thrulines": [0,5]
       },
       {
          "year": "1957",
          "text": "O C~~NAACP leaders protest the City's plan to target Black neighborhoods for renewal.",
       },
       {
          "year": "1958",
          "text": "U   H @Federal officials reject city's relocation plan due to the lack of adequate housing for displaced residents. Black families are the majority of those who will be displaced.",
       },
       {
          "year": "1959",
          "text": "U   H  @Under federal pressure, City leaders develop a plan to build public housing for displaced families. This plan will ultimately prove unworkable.",
       },
       {
          "year": "1960",
          "text": "Census data shows that the city's Black population has more than doubled over the past decade. During the same period, the city's white majority declined dramatically.",
       },
       {
          "year": "1961",
          "text": "O  D  C  @The federal government approves execution of Water Street Urban Renewal Project. The local NAACP protests low reimbursement payments to displaced property owners.",
       },
       {
          "year": "1962",
          "text": "O   C  @NBC airs \"Battle of Newburgh,\" a documentary about the city's racist welfare policies and protests against it.",
       },
       {
          "year": "1963",
          "text": "Voters elect a new mayor, Democrat Joseph Mulllin, who promises to end the conflicts over race and urban renewal that characterized past couple years.",
       },
       {
          "year": "1964",
          "text": "U  @Planner David Rosen advocates expanding Newburgh's urban renewal area and building public housing in a predominantly white section of the city. The latter is the more controversial recommendation.",
       },
       {
          "year": "1965",
          "text": "O   H  @The West End Citizens Committee sues to stop construction of a low-income public housing complex for displaced families in all-white West Newburgh.",
       },
       {
          "year": "1966",
          "text": "O   H   C  @Led by the NAACP, 500-600 people march from Ebenezer Baptist Church to City Hall to protest housing discrimination in Newburgh.",
       },
       {
          "year": "1967",
          "text": "H   U   C  @The congregation of AME Zion Church applies to sponsor a moderate income housing complex, Varick Homes, in the predominantly Black Water Street Urban Renewal Area. This decision divides the local civil rights community.",
       },
       {
          "year": "1968",
          "text": "R   S~~\nNewburgh's city council unanimously approves an agreement to work with New York State Urban Development Corporation (UDC). It is the first of many cities to sign such an agreement. A citywide fundraising campaign to help pay for planning is the first step in this collaboration.",
       },
    ]
 },
 {
    "city" : "Kingston",
    "class" : "row-kingston",
    "years" : [

      {
          "year": "1957",
          "text": "Kingston-Rhinecliff Bridge opens, routing traffic away from the city downtown Rondout area and uptown shopping district.",
       },
       {
          "year": "1958",
          "text": "U  @Kingston receives its first federal urban renewal survey and planning grant.",
       },
       {
          "year": "1959",
          "text": "U  @Kingston hires the firm of Raymond & May to advise city leaders on urban renewal and to develop a citywide comprehensive plan.",
       },
       {
          "year": "1960",
          "text": "S~~City of Kingston holds its first public hearing on urban renewal. Those present support the City's plans for the downtown Rondout neighborhood.",
       },
       {
          "year": "1961",
          "text": "S~~Kingston Chamber of Commerce and the Rondout Area Business Men's Association both endorse the City's urban renewal program.",
       },
       {
          "year": "1962",
          "text": "U  @Federal government approves planning funds for Kingston's Uptown urban renewal program. Better parking is the mayor and local business leaders' first priority.",
       },
       {
          "year": "1963",
          "text": "S~~To build support for urban renewal, Mayor John Schwenk unveils a model of Rondout after renewal. The model includes new housing and shopping along with a rehabilitated industrial area. “It’s too good to be true,\" comments one onlooker.",
       },
       {
          "year": "1964",
          "text": "City hires Eric Hemphill to lead the newly formed Kingston Urban Renewal Agency. Hemphill brings with him eight years of experience working for the Philadelphia Redevelopment Authority.  ",
       },
       {
          "year": "1965",
          "text": "O   D  @Federal government approves execution of Broadway East Urban Renewal program in Rondout. Protests erupt once KURA begins relocating residents. Among the leaders is Alderman Leonard Van Dyke, the city's first Black alderman.",
       },
       {
          "year": "1966",
          "text": "O   P   R  @Raymond Garraghan is elected mayor. He brings a plan to promote private development in Rondout through construction of a new city hall. The 1967 vote to move forward with this plan will spark preservationist organizing to protect Kingston's historic Midtown City Hall.  ",
       },
       {
          "year": "1967",
          "text": "O  ~~ \nLed by Congressman Joseph Resnick, critics of urban renewal in Rondout force the urban renewal agency's leadership to resign en masse.",
       },
       {
          "year": "1968",
          "text": "O  @Uptown homeowners organize to protest plans to demolish their property. Like their Rondout counterparts, they complain of low reimbursement payments. ",
       },
    ]
 },
 {
    "city" : "Albany",
    "class" : "row-albany",
    "years" : [
       {
          "year": "1951",
          "text": "State unveils plans to build $80-million office campus on 400 acres in uptown Albany.",
       },
       {
          "year": "1955",
          "text": "State begins construction of uptown office campus.",
       },
       {
          "year": "1957",
          "text": "First uptown office building opens.",
       },
       {
          "year": "1958",
          "text": "H  @Albany Housing Authority begins clearing land for construction of new public housing project, John Boyd Thacher Homes. By the time the four 12-story towers are completed, crime is already a problem. Conditions will only grow worse.   ",
       },
       {
          "year": "1959",
          "text": "U~~Princess Beatrix of the Netherlands visits Albany. Gov. Nelson Rockefeller will later describe this visit as the origin of his plan to renew Albany.",
       },
       {
          "year": "1960",
          "text": "State Investigation Commission looks into property tax delinquency and municipal corruption in Albany.",
       },
       {
          "year": "1961",
          "text": "U  @Temporary State Commission on the Capital City established to select a location for a new capital complex.",
       },
       {
          "year": "1962",
          "text": "D  @State seizes 98.5 acres of downtown Albany for construction of the South Mall, later renamed the Gov. Nelson A. Rockefeller Empire State Plaza. Demolition begins that summer.",
       },
       {
          "year": "1963",
          "text": "S  R~~Gov. Nelson Rockefeller unveils architectural models of the Empire State Plaza. The critical response is mixed.",
       },
       {
          "year": "1964",
          "text": "D  @Last family moves out of the South Mall redevelopment site just before Christmas. Emma Leonard speaks for the family, telling a local reporter, “It’s very hard for us to pull up roots. We had a lovely life here.”",
       },
       {
          "year": "1965",
          "text": "R   O   C  @Construction of the Empire State Plaza begins. Over the next thirteen years, well-paid construction jobs will support thousands of young men and their families. Inequitable access to such jobs sparked civil rights activism.",
       },
       {
          "year": "1966",
          "text": "H   C  @William Kennedy (a future Pulitzer Prize winning novelist) publishes his \"Slum Series\" on segregation and exploitive housing practices in the Times Union.",
       },
       {
          "year": "1967",
          "text": "U   H  @City unveils plans for Roosevelt Terrace, a State-funded low- and moderate-income housing development. It is to be built on land adjacent to the Empire State Plaza. Due to higher than anticipated construction costs, this plan is never realized.",
       },
       {
          "year": "1968",
          "text": "P   C   O   Preservationists, neighborhood leaders, and civil rights activists join forces to oppose construction of an arterial highway from the Empire State Plaza through residential sections of the city.",
       },
    ]
 },
 {
    "city" : "New York State",
    "class" : "row-nystate",
    "years" : [
       {
          "year": "1949",
          "text": "Court of Appeals upholds Stuyvesant town's discrimination policy.",
       },
       {
          "year": "1950",
          "text": "Wicks-Austin Law prohibits discrimination in state-aided housing.",
       },
       {
          "year": "1954",
          "text": "New York Thruway opens.",
       },
       {
          "year": "1955",
          "text": "Mitchell-Lama Law provides tax abatement for middle-income housing.",
       },
       {
          "year": "1958",
          "text": "U  @Architect Victor Gruen's plan for Midtown Plaza, a downtown shopping center, is unveiled in Rochester. Thereafter, most urban renewal plans will include a similar feature.",
       },
       {
          "year": "1959",
          "text": "Nelson Rockefeller takes office as Governor, Malcolm Wilson as Lieutenant Governor.",
       },
       {
          "year": "1960",
          "text": "Nelson Rockefeller runs for the Republican nomination to become President of the United States. He is defeated by Richard Nixon but will try again in 1964 and 1968. ",
       },
       {
          "year": "1961",
          "text": "H   C  @The State Advisory Committee on Civil Rights reports that many urban renewal programs \"seem geared to perpetuating discrimination and segregation in housing.\"  ",
       },
       {
          "year": "1962",
          "text": "R  @The State University Construction Fund is established as a public benefit corporation. Its mission is to design, build, and improve college campuses across the state.  ",
       },
       {
          "year": "1963",
          "text": "H   C  @\"It may be well for our federal government to take a cue from New York,\" says State Senator George Metcalf, co-sponsor of the Metcalf-Baker Fair Housing Law. The law prohibits discrimination in most housing transactions.",
       },
       {
          "year": "1964",
          "text": "O   H   C  @Uprisings in Harlem, Brooklyn, and Rochester prompt calls for housing improvements in minority communities.",
       },
       {
          "year": "1965",
          "text": "H   D  @James Gaynor, Commissioner of the Department of Housing and Community Renewal, chides local officials for failing to build new housing for displaced residents. \"Everyone wants to get rid of the slums,\" he comments, \"but no one wants to have the former slum dweller live down the block.\" ",
       },
       {
          "year": "1966",
          "text": "H  @In response to an attack on two children in Stuyvesant Town, the state legislature passes a law requiring city police to patrol private housing developments.",
       },
       {
          "year": "1967",
          "text": "Gov. Nelson Rockefeller supports adoption of a new state constitution, despite his concern that it might inhibit spending on \"the urban problem.\" His loyal lieutenant governor, Malcolm Wilson, publicly disagrees. Voters side with Wilson, rejecting the ballot measure by a wide margin.",
       },
       {
          "year": "1968",
          "text": "R  @Gov. Nelson Rockefeller establishes a new public benefit corporation, the Urban Development Corp. Under Edward Logue's leadership, it is charged with redeveloping cleared land passed over by private builders.",
       },
    ]
 },
 {
    "city" : "United States",
    "class" : "row-us",
    "years" : [
       {
          "year": "1944",
          "text": "Congress passes the GI Bill of Rights unanimously. It provided World War II veterans with numerous benefits, including access to low-interest mortgages. But federal rules and local administrators prevented Black veterans from accessing many of these benefits.",
       },
       {
          "year": "1945",
          "text": "World War II ends. National leaders fear that returning veterans will face a severe housing shortage.",
       },
       {
          "year": "1949",
          "text": "On April 20, five US Senators tour a Washington, DC slum near the Capitol. One newspaper account reported that they \"gagged over the evil stench from the hovels.\" Soon after, Congress passes the Housing Act of 1949, which includes aid to cities for \"slum clearance\" and redevelopment, or \"urban renewal. President Harry S. Truman signs the bill into law in July.",
       },
       {
          "year": "1950",
          "text": "Something about the 1950 Census and the Second Great Migration?",
          "hasImage": "true",
       },
       {
          "year": "1954",
          "text": "Housing Act of 1954 allows clearance of non \"slum\" areas for nonresidential construction. Communitywide 'workable programs\" to prevent blight become a funding requirement. ~~OR: PRESIDENT DWIGHT EISENHOWER ANNOUNCES FORMATION OF PRO-URBAN RENEWAL ORGANIZATION, AMERICAN COUNCIL TO IMPROVE OUR NEIGHBORHOODS. ~~and embed parts of film \"Man of ACTION\" ",
       },
       {
          "year": "1955",
          "text": "Under the leadership of Mayor Richard Lee and administrator Edward Logue, New Haven, CT launches the most ambitious urban renewal program in the nation. Over the next 20 years, total spending amounts to about $1,800 per capita.",
       },
       {
          "year": "1956",
          "text": "Congress passes the Federal Highway Act, providing for construction of  41,000 miles of interstate highways and urban expressways.",
       },
       {
          "year": "1957",
          "text": "",
       },
       {
          "year": "1958",
          "text": "S~~\"None of us is prepared willingly to accept the consequences, in dollars, delinquency and shame, of allowing slums and blight to spread,\" New Haven Development Administrator Edward Logue writes in the New York Times. He argues for more federal funds to combat urban problems.",
          "thruLies" : ["S"]
       },
       {
          "year": "1959",
          "text": "S~~\"No subject has received as much attention ... as urban renewal, and rightly so. There are no isolated communities in the city. Blight is not a threat to just one area. It is a threat to all our neighborhoods,\" says Chicago Mayor Richard Daley at his second inauguration.",
       },
       {
          "year": "1960",
          "text": "The 1960 census finds that rate of poverty in central cities is three times that in other areas.",
       },
       {
          "year": "1961",
          "text": "U   P  @Jane Jacobs begins her book, The Death and Life of Great American Cities, with: \"This book is an attack on current city planning and rebuilding.\" She shakes up the philosophy and practice of urban planning.",
       },
       {
          "year": "1962",
          "text": "The US and Soviet Union face off in the Cuban Missile Crisis, the closest approach to nuclear war. The standoff increases calls for urban decentralization as a civil defense measure.",
       },
       {
          "year": "1963",
          "text": "O   C   @Writer James Baldwin famously describes urban renewal as \"negro removal\" on television. He charges the federal government with being \"an accomplice to this fact.\"",
       },
       {
          "year": "1964",
          "text": "President Lyndon Johnson declares \"war on poverty.\" Later that year, following the Gulf of Tonking Incident, the U.S. enters the Vietnam War. The cost of the war in Vietnam will drain resources that might otherwise have funded efforts to rebuild Amercian cities. ",
       },
       {
          "year": "1965",
          "text": "H  @The Department of Housing and Urban Development is established. President Lyndon Johnson chooses Robert Weaver, the first African American cabinet secretary, to lead it.",
       },
       {
          "year": "1966",
          "text": "O   H   C   \nMartin Luther King and the Southern Christian Leadership Conference take the civil rights movement north to Chicago. King and family move into a slum apartment to dramatize housing discrimination. ",
       },
       {
          "year": "1967",
          "text": "O   ~~Uprisings break out in over 150 American cities across the nation during the \"Long Hot Summer.\" In response, President Lyndon Johnson empanels his National Advisory Commission on Civil Disorders, better known as the Kerner Commission.",
       },
       {
          "year": "1968",
          "text": "H   C  @Martin Luther King is assassinated on April 4. A week later, President Lyndon Johnson signs the Civil Rights Act into law. It includes the Fair Housing Act, outlawing racial discrimination in housing.  ",
       },
    ]
 },

]

export {yearArray}
export {timelineContent}