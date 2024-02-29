import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import styled from "styled-components";


const LingHanSimulacrumTemplate = ({ data }) => {
  const frontmatter = {
    title: "Ling Han",
    date: "2023-10-24",
    tags: ["SSR", "Frost"],
    social_image: '/media/tab_linghan.png',
    description: "Ling Han, featured as an obtainable SSR Simulacrum within the simulacrum system associated with the weapon Alabaster Tiger."
  };

  
  const [selectedSection, setSelectedSection] = useState("awaken");
  const [backgroundImage, setBackgroundImage] = useState("https://telegra.ph/file/ad98e283fddfb7bafbcde.png");


  const handleSectionChange = (section) => {
    setSelectedSection(section);

    // Set the background image based on the selected section
    if (section === "weapon") {
      setBackgroundImage("https://telegra.ph/file/1e9e9b935b71aa637c122.png");
    } else if (section === "prototype") {
      setBackgroundImage("https://telegra.ph/file/ad98e283fddfb7bafbcde.png");
    }
  };

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description || ""}
      socialImage={frontmatter.social_image ? frontmatter.social_image.absolutePath : ""}
    >
      <Wrapper>
        <BackgroundSection>
          <img src={backgroundImage} alt="Simulacrum Background" />
        </BackgroundSection>


        <ContentSection>
        <ToggleButtons>
  <ToggleButton
    onClick={() => handleSectionChange("weapon")}
    isActive={selectedSection === "weapon"}
  >
    Weapon
  </ToggleButton>
  <ToggleButton
    onClick={() => handleSectionChange("prototype")}
    isActive={selectedSection === "prototype"}
  >
    Prototype
  </ToggleButton>
</ToggleButtons>

          <TabNavigation>
  <NavLink onClick={() => handleSectionChange("awaken")} isActive={selectedSection === "awaken"}>
    Awaken
  </NavLink>
  <NavLink onClick={() => handleSectionChange("trait")} isActive={selectedSection === "trait"}>
    Trait
  </NavLink>
  <NavLink onClick={() => handleSectionChange("resonance")} isActive={selectedSection === "resonance"}>
    Resonance
  </NavLink>
  <NavLink onClick={() => handleSectionChange("advance")} isActive={selectedSection === "advance"}>
    Advance
  </NavLink>
  <NavLink onClick={() => handleSectionChange("attacks")} isActive={selectedSection === "attacks"}>
    Attacks
  </NavLink>
  <NavLink onClick={() => handleSectionChange("dodge")} isActive={selectedSection === "dodge"}>
    Dodge
  </NavLink>
  <NavLink onClick={() => handleSectionChange("skill")} isActive={selectedSection === "skill"}>
    Skill
  </NavLink>
  <NavLink onClick={() => handleSectionChange("discharge")} isActive={selectedSection === "discharge"}>
    Discharge
  </NavLink>
</TabNavigation>

          <SimulacrumContent>
            {selectedSection === "awaken" && (
              <div>
                <h2>Governing Blade</h2>
                <br/>
                <p>Increase final damage by 18%. When Alabaster Tiger is equipped, gain damage immunity for 4 seconds when using Sword Art: Icy Beckon (unavailable in Apex League). For every 1 frost weapon equipped, increase frost damage by 2.5%. When 3 frost weapons are equipped, gain an additional 350 weapon charge after the Wanderer uses any frost weapon skill. After using any frost weapon's skill or discharge other than Alabaster Tiger's, deal additional damage equal to 1,456% of ATK to nearby targets.</p>
              </div>
            )}
            {selectedSection === "trait" && (
              <div>
                <h2>Frost Shell</h2>
                <p>When the weapon is fully charged, the next attack will strongly freeze targets for 2 seconds and leave them frostbitten for 6 seconds. Breaking the ice shell causes additional damage equal to 144% of ATK. While frostbitten, the target's weapon charge rate is reduced by 50%.
</p>
              </div>
            )}
            {selectedSection === "resonance" && (
  <div>
    <p>
      <b>Frost Resonance:</b> Increase Frost ATK by 15% and Frost Resistance by 25%. Activate by equipping 2 or more Frost weapons. This set effect works in the off-hand slot. Cannot stack with effects of the same type.
    </p>
    <p>
      <b>Extreme Cold: Unload:</b> After using Sword Art: Shadowy Ice, every second, deal damage equal to 70% of frost ATK plus 10% of the Wanderer's Max HP plus 36% of the sum of all the Wanderer's resistance types plus 135% of crit for 30 seconds. Multiple Unload damage will not stack, and Extreme Cold damage will be counted as skill damage. If there is 1 volt/flame/physical weapon of any kind equipped, Extreme Cold damage is multiplied by 1.3 times. In addition, Extreme Cold damage is not affected by any damage boost effects except from titan equipment's rare stats and won't trigger additional attack effects.
    </p>
  </div>
)}
{selectedSection === "advance" && (
  <div>
    <p>
      <b>1 ★</b> After launching Frost Blades, the Wanderer's frost ATK is increased by 10%, and nearby targets will be dealt damage equal to 80% of ATK every second for 30 seconds.
    </p>
    <br />
    <p>
      <b>3 ★</b> The Wanderer can produce up to 4 Frost Blades, and Temperature Reduction's damage base multiplier is increased to 360%. If the target is the only one affected by Temperature Reduction within 6 seconds, additionally apply Vein Seal to the target, reducing their speed by 30% (unavailable in Apex League and against bosses). If the target receives Frost Blade damage again during Vein Seal's duration, trigger Icy Burst, dealing skill damage equal to 1,700% of ATK plus 2% of the target's HP lost at that point (Icy Burst damage will be no lower than 2,000% of the Wanderer's frost ATK and no higher than 2,200% of the Wanderer's frost ATK). Then, remove the Vein Seal and Temperature Reduction effects on the target.
    </p>
    <br />
    <p>
      <b>5 ★</b> The damage dealt by Crystalline Crack and Cold Air is additionally increased by 50%. Light Steps' use attempts are increased to 10, and recovery rate is increased to 1 attempt every 3 seconds.
    </p>
    <br />
    <p>
      <b>6 ★</b> The Temperature Reduction effect inflicted after firing Frost Blades is now applied to an area and also deals additional damage equal to 990% of ATK to nearby targets.
    </p>
  </div>
)}
{selectedSection === "attacks" && (
  <div>
    <table>
      <tbody>
        <tr>
          <td><b>Sword Art: Mooncutter</b> <img src="https://i.postimg.cc/ryPrQ4N6/Weapon-Alabaster-Tiger-Sword-Art-Mooncutter.png" alt="Sword Art: Mooncutter" /></td>
          <td>
            While on the ground, use your normal attack to land 6 consecutive attacks. <br />
            <b>First Attack:</b> Deal damage equal to 97.8% of ATK + 5 and knock the target back.<br />
            <b>Second Attack:</b> Deal damage equal to 129.4% of ATK + 7 and knock the target back. <br />
            <b>Third Attack:</b> Deal damage equal to 207.2% of ATK + 11 and knock the target back. <br />
            <b>Fourth Attack:</b> Deal damage equal to 125% of ATK + 7 and knock the target back. <br />
            <b>Fifth Attack:</b> Deal damage equal to 226% of ATK + 12 and draw in enemies to the front of the Wanderer. <br />
            <b>Sixth Attack:</b> Deal damage equal to 253.6% of ATK + 13 and launch the target.<br />
            After triggering Sword Art: Mooncutter, tap and hold normal attack to trigger Sword Art: Endless Snow. <br />
            After any of Alabaster Tiger's normal attacks land a hit, apply 1 stack of Crystalline Crack to the target, dealing normal attack damage equal to 48% of ATK every second for 15 seconds. Only 1 stack of Crystalline Crack can be applied to the same target every 4 seconds, stacking up to 3 times. The stacks will disappear one by one after the effect duration is over.
          </td>
        </tr>
        <br />
        <tr>
          <td><b>Sword Art: Plum Swordcry</b> <img src="https://i.postimg.cc/dVMTKKf4/Weapon-Alabaster-Tiger-Sword-Art-Plum-Swordcry.png" alt="Sword Art: Plum Swordcry" /></td>
          <td>
            While in the air, use your normal attack to land 6 consecutive attacks at the expense of stamina. <br />
            <b>First Attack:</b> Deal damage equal to 95.9% of ATK + 5. <br />
            <b>Second Attack:</b> Deal damage equal to 100.7% of ATK + 5. <br />
            <b>Third Attack:</b> Deal damage equal to 218.6% of ATK + 12. <br />
            <b>Fourth Attack:</b> Deal damage equal to 130% of ATK + 7. <br />
            <b>Fifth Attack:</b> Deal damage equal to 213.7% of ATK + 11. <br />
            <b>Sixth Attack:</b> Deal damage equal to 256.9% of ATK + 14.
          </td>
        </tr>
        <br />
        <tr>
          <td><b>Sword Art: Endless Snow</b> <img src="https://i.postimg.cc/C5Xn5yxM/Weapon-Alabaster-Tiger-Sword-Art-Endless-Snow.png" alt="Sword Art: Endless Snow" /></td>
          <td>
            While using normal attack on the ground, tap and hold normal attack to trigger Sword Art: Endless Snow. Use mind control to manipulate the sword while consuming endurance, during which the Wanderer gains hyperbody. Every attack that lands deals damage equal to 140.8% of ATK plus 7 to nearby targets. <br />
            When Sword Art: Endless Snow ends, release a powerful sword aura, dealing damage equal to 422.4% of ATK plus 22 to nearby targets.
          </td>
        </tr>
        <br />
        <tr>
          <td><b>Sword Art: Falling Frost</b> <img src="https://i.postimg.cc/L5nZm4R0/Weapon-Alabaster-Tiger-Sword-Art-Falling-Frost.png" alt="Sword Art: Falling Frost" /></td>
          <td>
            Tap and hold normal attack while airborne (tap when a target is available), or use normal attack while climbing, jumping backward, or using the Jetpack to trigger Sword Art: Falling Frost. <br />
            While falling, deal damage equal to 75% of ATK plus 4 each time a target is hit. Upon landing, deal damage equal to 366.7% of ATK plus 19 to nearby targets.
          </td>
        </tr>
        <br />
        <tr>
          <td><b>Light Steps</b> <img src="https://i.postimg.cc/MTsQkfkQ/Weapon-Alabaster-Tiger-Light-Steps.png" alt="Light Steps" /></td>
          <td>
            While the Wanderer is airborne after double jumping, tap jump to trigger Light Steps. Briefly dash upward before gliding down. While airborne, Light Steps can be used up to 2 times. <br />
            While on the ground, Light Steps recovers 1 use attempt every 10 seconds (switching areas or unequipping Alabaster Tiger will reset the use attempts).
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}

{selectedSection === "dodge" && (
  <div>
    <table>
      <tbody>
        <tr>
          <td><b>Dodge</b> <img src="https://i.postimg.cc/DywWV0QP/Weapon-Common-Dodge.png" alt="Dodge" /></td>
          <td>Dodge right before being hit to trigger Phantasia, reducing the speed of enemies within the area.</td>
        </tr>
        <tr>
          <td><b>Sword Art: Cloud Shower</b> <img src="https://i.postimg.cc/bJYtFH5P/Weapon-Alabaster-Tiger-Sword-Art-Cloud-Shower.png" alt="Sword Art: Cloud Shower" /></td>
          <td>Use normal attack during the short perfect dodge window (use a directional button before dodging) to trigger Sword Art: Cloud Shower, dealing damage up to 305% of ATK plus 16 to targets hit.</td>
        </tr>
        <tr>
          <td><b>Sword Art: Mortal Soul</b> <img src="https://i.postimg.cc/bwQSyBc8/Weapon-Alabaster-Tiger-Sword-Art-Mortal-Soul.png" alt="Sword Art: Mortal Soul" /></td>
          <td>Use normal attack during the short period after dodging to trigger Sword Art: Mortal Soul. Release a White Tiger illusion to deal damage equal to 167.8% of ATK plus 9 to targets ahead.</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
{selectedSection === "skill" && (
  <div>
    <table>
      <tbody>
        <tr>
          <td><b>Sword Art: Shadowy Ice</b> <img src="https://i.postimg.cc/Gpd8HxdD/Weapon-Alabaster-Tiger-Sword-Art-Shadowy-Ice.png" alt="Sword Art: Shadowy Ice" /></td>
          <td>
            Deal damage equal to 370.2% of ATK plus 19 to nearby targets and draw them in. Then, form a Sword Array to summon a heavy rain of swords and strongly freeze targets [unavailable in Apex League and against bosses] for 4 seconds. Cooldown: 30 seconds.
            <br/><br/>
            After successfully using Sword Art: Shadowy Ice, the Wanderer emits Cold Air, dealing damage equal to 68% of ATK to nearby targets every second and reducing the targets' speed by 30% [unavailable in Apex League and against bosses]. At the same time, increase the Wanderer's frost damage by 8% for 35 seconds.
            <br/><br/>
            After completely executing Sword Art: Shadowy Ice, the Wanderer creates a large number of Frost Blades, firing 1 blade every 7.5 seconds at the currently locked-on target, dealing damage equal to 360% of ATK and inflicting Temperature Reduction on the target. There can be up to 3 Frost Blades created initially, and all blades will be removed while in the non-combat state.
            <br/><br/>
            Temperature Reduction: Deal damage equal to 240% of ATK every 3 seconds to nearby targets for 12 seconds.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}

{selectedSection === "discharge" && (
  <div>
    <table>
      <tbody>
        <tr>
          <td><b>Sword Art: Icy Beckon</b> <img src="https://i.postimg.cc/vHx6jm04/Weapon-Alabaster-Tiger-Sword-Art-Icy-Beckon.png" alt="Sword Art: Icy Beckon" /></td>
          <td>
            When weapon charge is full or Phantasia is triggered, upon switching to this weapon, remove all debuffs from the Wanderer and summon a Sword Array around the Wanderer, engulfing the area in cold and dealing damage up to 844.5% of ATK plus 44 to nearby targets. Soon after, summon a White Tiger to deal damage equal to 1,971% of ATK plus 104, during which damage immunity lasts for 1.5 seconds [unavailable in Apex League].
            <br/><br/>
            Passive: After Sword Art: Icy Beckon lands a hit, increase final damage by 8% for 30 seconds.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}

          </SimulacrumContent>
        </ContentSection>
      </Wrapper>
    </Layout>
  );
};



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BackgroundSection = styled.section`
  flex: 1;
  max-height: 300px; /* Adjust the maximum height as needed for smaller screens */

  @media (min-width: 768px) {
    max-height: none;
  }
`;

const ContentSection = styled.section`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ToggleButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    margin-bottom: 2rem; /* Adjust the margin for smaller screens */
  }
`;

const ToggleButton = styled.button`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);
  background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#212122' : 'inherit')};
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  padding: 0.2rem 0.6rem;

  &.active {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)')};
  }

  @media (max-width: 767px) {
    margin-right: 0.6rem;
    margin-top: 3rem; /* Adjust the margin for smaller screens */
  }
`;



const TabNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    flex-wrap: wrap; /* Allow tabs to wrap to the next line on smaller screens */
  }
`;

const NavLink = styled.a`
  margin-right: 0rem;
  margin-bottom: 0rem;
  text-transform: uppercase;
  font-size: var(--size-300);
  background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#212122' : 'inherit')};
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  padding: 0.2rem 0.6rem;

  &.active {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)')};
  }

  @media (max-width: 767px) {
    font-size: 80%; /* Adjust the font size for smaller screens */
    padding: 0.1rem 0.3rem; /* Adjust the padding for smaller screens */
  }
`;


const SimulacrumContent = styled.section`
  /* Add your styles for SimulacrumContent */
`;

export const query = graphql`
  query LingHanSimulacrumBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
        social_image {
          absolutePath
        }
      }
    }
  }
`;

export default LingHanSimulacrumTemplate;

