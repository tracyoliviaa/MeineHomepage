import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
  <Flip top cascade>
    <h1>Experience Journey</h1>
  </Flip>
</div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
    date="03/2022 - 06/2024"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">
      Fachinformatikerin für Anwendungsentwicklung
    </h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      SRH, Heidelberg
    </h6>
    <p>
      Ausbildung zur Fachinformatikerin für Anwendungsentwicklung. Erfahrung in
      Softwareentwicklung, Datenbanken und IT-Unterstützung. Anwendung von agilen Methoden
      wie Scrum.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="01/2018 - 12/2018"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Stromsparhelfer</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Caritas Offenbach
    </h6>
    <p>
      Arbeit als Stromsparhelfer bei der Caritas in Offenbach. Beratung und
      Unterstützung von Haushalten zur Energieeinsparung.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="11/2016 - 03/2017"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Buchhaltung Assistenz</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Seniorenzentrum Offenbach
    </h6>
    <p>
      Assistenz in der Buchhaltung des Seniorenzentrums Offenbach. Unterstützung bei der
      Finanzverwaltung und Buchhaltungsaufgaben.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="01/2013 - 10/2015"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Au Pair</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Familie Stevenson, Phoenix, Arizona
    </h6>
    <p>
      Tätigkeit als Au Pair bei einer Familie in Phoenix, Arizona. Betreuung von Kindern
      und Unterstützung im Haushalt.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="02/1998 - 09/2004"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Kaufmännische Hilfe</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Symbol Dietzenbach
    </h6>
    <p>
      Kaufmännische Unterstützung bei Symbol in Dietzenbach. Erfahrung in administrativen
      und kaufmännischen Aufgaben.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
