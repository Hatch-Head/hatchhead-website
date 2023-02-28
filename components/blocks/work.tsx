import CaseStudyCard from "../case-studies/CaseStudyCard";

const Work = () => (
  <div className="border-0 border-t border-neutral-1000  dark:border-neutral-700">
    <CaseStudyCard
      to="/work/realiti"
      name="Realiti 360"
      tags={["UI Design", "UX"]}
      image={{
        src: require("../../assets/img/work/irealiti-hero.png"),
      }}
      backdrop={{
        src: require("../../assets/img/work/irealiti-backdrop.png"),
      }}
    >
      Award winning interface made to cater for new and growing features,
      environments and clinician needs.
    </CaseStudyCard>
    {/* <CaseStudyCard
      reverse
      to="/work/always"
      name="Always"
      tags={["Branding", "UI Design", "UX"]}
      image={{
        src: require("../../assets/img/work/always-hero.png"),
      }}
      backdrop={{
        src: require("../../assets/img/work/always-backdrop.png"),
      }}
    >
      How did we help a start-up challenge the biggest dental conglomerate in
      the world?
    </CaseStudyCard> */}
    <CaseStudyCard
      reverse
      to="/work/cru-software"
      name="CruSoftware"
      tags={["Design System", "UI Design"]}
      image={{
        src: require("../../assets/img/work/crusoftware-hero.png"),
      }}
      backdrop={{
        src: require("../../assets/img/work/crusoftware-backdrop.png"),
      }}
    >
      Aimed to facilitate the tasks needed to accomplish by transforming the
      user experience.
    </CaseStudyCard>
  </div>
);

export default Work;
