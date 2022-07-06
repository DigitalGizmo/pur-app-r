import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Theme = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('themes');
    document.title = 'Essay: Contract Sales';
  }, [changePageName])

  return (
    <div>
      <header className="basic-page">
        <h1>Buyer Beware: Contract Sales</h1>
        <h4>David Hochfelder, Professor of History, University of Albany, SUNY</h4>
      </header>

      <section>
        <div className="image-full">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/contract-sales.jpg"
              alt='meaningful alt text'/>
        </div>

        <div className="theme">
          <p className="caption first">"Buy or Rent - Same amount monthly" Sales pitches like this made contract sales agreements appealing to people of limited means. Source <em>Times Union</em>.</p>

          <article className="narrative">
        
            <p className="intro">From the 1920s through the 1970s, banks typically refused to make mortgages or home improvement loans in areas they considered undesirable. This practice, commonly known as &ldquo;redlining,&rdquo; gained the sanction of the federal government during the 1930s. The term arose from the color used on the Home Owners Loan Corporation&rsquo;s Residential Security Maps to designate areas ending considered poor lending risks  due to the presence of foreign-born, Black, and low-income families. Banks typically refused to lend money to black and brown buyers, no matter what neighborhood they sought to buy into.</p>
            <p>Because of these discriminatory lending practices, many Black home buyers were forced to resort to disadvantageous financial arrangements. A common method was the contract sale. This was effectively a rent-to-own scheme, usually at an inflated price and a high interest rate (often the maximum allowed by state usury laws), whereby the seller held the deed until the contract was fully paid off. In addition to monthly purchase payments, the buyer was responsible for all taxes, repairs, and insurance costs. If the buyer missed a payment, the seller could evict him or her for non-performance of the contract. The buyer built no equity in the meantime, and the seller was under no obligation to return payments received.</p>
            <p>Contract sales occurred all across the country. However, information about them is hard to come by. Traditional home purchases are typically recorded with the county clerk. Contract sales were not. Nevertheless, investigative reporters and fair housing activists helped expose this exploitative practice during the 1960s. Combined with contemporary reporting, our archival research has helped bring this practice to light in Newburgh and Albany.</p>
            <p>In  Newburgh, real estate appraiser Humes M. Flynn discovered that contract sales were common in the East End, &ldquo;because mortgage financing is practically non-existent.&rdquo;  He found that contract sellers typically inflated the purchase price &ldquo;in order to increase the interest which, by law, is limited to 6%.&rdquo; And because buyers could be evicted for missing payments, Flynn reported to City officials that he sometimes found &ldquo;double and triple contracts on one piece of property.&rdquo;</p>
            <p>Two years later, in the summer of 1963, Evening News reporter Joseph Ritz confirmed Flynn&rsquo;s findings in a series on housing discrimination. Ritz revealed that most African American families were unable to get traditional bank mortgages, irrespective of their ability to pay or the location of the property they tried to buy. Furthermore, banks typically refused to write mortgages in the East End, where nearly all of the city&rsquo;s Black population lived. One bank president rhetorically asked Ritz, &ldquo;If you had money in our bank, would you want us to invest in a declining area?&rdquo;</p>
            <p>Times Union reporter William Kennedy found similar evidence of contract sales in Albany. In a draft of his 1965 &ldquo;slum series,&rdquo; he described &ldquo;an unwritten law well known to Albany bankers and lawyers, that nobody gets a mortgage below Lark Street,&rdquo; home to the vast majority of Blacks in Albany. Into this void stepped two real estate lawyers, Sidney Albert and Irving Kirsch, who recognized a lucrative business opportunity. Kennedy found that in 1961, their firm owned 668 properties in Albany and nearby Troy; 390 of those properties were contract sales.</p>
            <p>These contracts were extremely lucrative for sellers&mdash;and highly exploitative of buyers. Flynn in Newburgh and Kennedy in Albany both found that sellers charged what the discriminatory market would bear. For example, one Albany buyer signed a 15-year contract with Albert &amp; Kirsch in 1964 for a house assessed at $3,200. The buyer agreed to pay $13,500 at 6% interest for a total payment of nearly $24,500. And buyers often defaulted on the contract terms&mdash;Kennedy noted that &ldquo;the scuttlebutt in the slums&rdquo; is that a contract buyer &ldquo;will hardly ever take title to his property.&rdquo; Then, &ldquo;the landlords can start over again, selling the same house from scratch.&rdquo;</p>
            <p>Although fair housing and lending legislation in the 1960s and 1970s sharply reduced the market for contract sales, this practice has persisted into the 21st century. In 2016, a New York Times exposé revealed the rise of contract sales in cities hard-hit by the 2008 financial crisis and the wave of foreclosures that followed. Whereas contract sellers in the urban renewal era were local operators, today&rsquo;s sellers are hedge funds and real estate investment trusts with portfolios of thousands of homes in distressed cities across the country. (Link to Carrie Wilson story in Newburgh and Robinson / 45 Jefferson in Albany)</p>
          
          </article>
        </div>
      </section>
    </div>
  );

}

export default Theme;