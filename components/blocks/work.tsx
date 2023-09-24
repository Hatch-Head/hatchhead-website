import CaseStudyCard from "../case-studies/CaseStudyCard";

const Work = () => (
  <div className="container">
    <CaseStudyCard
      to="/work/always"
      name="Always"
      tags={[
        "UX",
        "UI",
        "Product Strategy",
        "Service Design",
        "Delivery",
      ]}
      image={{
        src: require("../../assets/img/always-thumbnail.png"),
      }}
      backdrop={{
        src: require("../../assets/img/work/irealiti-backdrop.png"),
      }}
    >
      Designing a dental startup delivering a clinic's essentials to their door.
    </CaseStudyCard>
    <CaseStudyCard
      reverse
      to="/work/audeara"
      name="Audeara"
      tags={["UI", "UX"]}
      image={{
        src: require("../../assets/img/audeara-thumbnail.png"),
      }}
      backdrop={{
        src: require("../../assets/img/work/irealiti-backdrop.png"),
      }}
    >
      Revamping the mobile experience for an audio wellness company's flagship product.
    </CaseStudyCard>
    <CaseStudyCard
      to="/work/realiti"
      name="REALITi"
      tags={["UI", "UX"]}
      image={{
        src: require("../../assets/img/work/irealiti-hero.png"),
      }}
      backdrop={{
        src: require("../../assets/img/work/irealiti-backdrop.png"),
      }}
    >
      Redesigning an interface made to cater for new and growing features,
      environments and clinician needs.
    </CaseStudyCard>
    <CaseStudyCard
      reverse
      to="/work/cru-software"
      name="Cru Software"
      tags={["Design System", "UI Design"]}
      image={{
        src: require("../../assets/img/work/crusoftware-hero.png"),
      }}
      backdrop={{
        src: require("../../assets/img/work/crusoftware-backdrop.png"),
      }}
    >
      Delivering a design system to bring consistency to a remote team across a series of products.
    </CaseStudyCard>
  </div>
);

export default Work;
