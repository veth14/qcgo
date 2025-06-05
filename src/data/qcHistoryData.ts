import React from 'react';
import { FaMusic, FaBook, FaPalette, FaTheaterMasks, FaDrum, FaUtensils } from 'react-icons/fa';

export interface TimelineItem {
  year: string;
  date: string;
  event: string;
  description?: string;
  image?: string;
}

export interface CulturalItem {
  title: string;
  description: string;
  icon: string;
  details: string[];
  image: string;
}

export interface DistrictData {
  name: string;
  description: string;
  historicalFacts: string[];
  landmarks: string[];
  image: string;
}

// Interactive timeline data with detailed historical events
export const interactiveTimelineData: TimelineItem[] = [
  { 
    year: "1939", 
    date: "October 12, 1939", 
    event: "Quezon City Founded", 
    description: "President Manuel L. Quezon signed Commonwealth Act No. 502, officially establishing Quezon City as a new urban center outside Manila.",
    image: "/qchistory/qcfounded.jpg"
  },
  { 
    year: "1940", 
    date: "July 17, 1940", 
    event: "First City Planning Commission Created", 
    description: "The commission was tasked with designing a modern capital city with wide boulevards, government centers, and residential districts.",
    image: "/qchistory/qccityplan.jpg"
  },
  { 
    year: "1945", 
    date: "February 3, 1945", 
    event: "Liberation from Japanese Occupation", 
    description: "After World War II, Quezon City began reconstruction efforts under Mayor Ponciano Bernardo.",
    image: "/qchistory/qcliberation.jpg"
  },
  { 
    year: "1946", 
    date: "November 15, 1946", 
    event: "First Municipal Elections Held", 
    description: "This marked the first democratic election in the city following the end of World War II.",
    image: "/qchistory/qcelection.jpg"
  },
  { 
    year: "1948", 
    date: "July 17, 1948", 
    event: "Designated as Capital of the Philippines", 
    description: "President Elpidio Quirino signed Republic Act No. 333, making Quezon City the official capital.",
    image: "/qchistory/qcdesignatedcapital.jpg"
  },
  { 
    year: "1949", 
    date: "February 12, 1949", 
    event: "UP Diliman Campus Inaugurated", 
    description: "The University of the Philippines moved its main campus to Diliman, establishing Quezon City as an educational center.",
    image: "/qchistory/qcupdiliman.jpg"
  },
  { 
    year: "1950", 
    date: "January 1, 1950", 
    event: "Quezon City General Hospital Established", 
    description: "The hospital was created to provide healthcare services to the growing population.",
    image: "/qchistory/generalhospital.jpg"
  },
  { 
    year: "1954", 
    date: "April 21, 1954", 
    event: "City Charter Revised", 
    description: "Republic Act No. 537 updated the city's governing framework to accommodate its growth.",
    image: "/qchistory/qcrevise.jpg"
  },
  { 
    year: "1962", 
    date: "August 19, 1962", 
    event: "Quezon Memorial Shrine Construction Begins", 
    description: "Construction started on the iconic monument dedicated to President Manuel L. Quezon.",
    image: "/qchistory/qcconstruction.jpg"
  },
  { 
    year: "1967", 
    date: "November 29, 1967", 
    event: "Araneta Coliseum Hosts Historic Boxing Match", 
    description: "The venue hosted the Muhammad Ali vs. Ernie Terrell fight, putting Quezon City on the global sports map.",
    image: "/qchistory/qchostevent.jpg"
  },
  { 
    year: "1972", 
    date: "September 23, 1972", 
    event: "Martial Law Period Begins", 
    description: "President Marcos' declaration of Martial Law significantly impacted city governance and development.",
    image: "/qchistory/martiallaw.png"
  },
  { 
    year: "1976", 
    date: "November 7, 1976", 
    event: "Integration into Metropolitan Manila", 
    description: "Quezon City became part of the newly established Metropolitan Manila area through Presidential Decree No. 824.",
    image: "/qchistory/qcmetropolitan.jpg"
  },
  { 
    year: "1978", 
    date: "July 11, 1978", 
    event: "Quezon Memorial Shrine Completed", 
    description: "The 66-meter monument was finally completed and opened to the public.",
    image: "/qchistory/qcshrinecomplete.jpg"
  },
  { 
    year: "1986", 
    date: "February 22-25, 1986", 
    event: "EDSA People Power Revolution", 
    description: "Parts of EDSA in Quezon City became the site of the peaceful revolution that ousted Ferdinand Marcos.",
    image: "/qchistory/edsapeoplepower.jpg"
  },
  { 
    year: "1992", 
    date: "May 24, 1992", 
    event: "Manila Reinstated as Capital", 
    description: "While Manila became the capital again, Quezon City remained the seat of many government institutions.",
    image: "/qchistory/manilacapital.jpg"
  },
  { 
    year: "2000", 
    date: "October 1, 2000", 
    event: "Eastwood City Cyberpark Established", 
    description: "This development marked Quezon City's transition to becoming an IT and business process outsourcing hub.",
    image: "/qchistory/eastwood.png"
  },
  { 
    year: "2005", 
    date: "August 13, 2005", 
    event: "La Mesa Ecopark Opens", 
    description: "This ecological park became an important green space and water conservation area.",
    image: "/qchistory/lamesa-ecopark.jpg"
  },
  { 
    year: "2010", 
    date: "June 30, 2010", 
    event: "Herbert Bautista Begins Mayoralty", 
    description: "His three-term administration focused on modernizing city services and infrastructure.",
    image: "/qchistory/herbert.jpg"
  },
  { 
    year: "2015", 
    date: "March 17, 2015", 
    event: "Green Building Ordinance Implemented", 
    description: "This pioneering environmental legislation required sustainable practices in new constructions.",
    image: "/qchistory/qcgreeneconomic.jpg"
  },
  { 
    year: "2020", 
    date: "March 15, 2020", 
    event: "COVID-19 Community Quarantine Begins", 
    description: "Quezon City implemented comprehensive pandemic response measures under Mayor Joy Belmonte.",
    image: "/qchistory/qcquarantine.jpg"
  },
  { 
    year: "2022", 
    date: "February 14, 2022", 
    event: "Joy Belmonte Wins Second Term", 
    description: "Her administration continued to focus on digital transformation and social inclusion programs.",
    image: "/qchistory/joy2ndterm.jpg"
  }
];

// Cultural heritage data
export const culturalHeritageData: CulturalItem[] = [
  {
    title: "Traditional Music",
    description: "Quezon City has preserved various traditional Filipino musical forms while nurturing contemporary expressions.",
    icon: "FaMusic",
    details: [
      "Home to the Philippine Philharmonic Orchestra and numerous music institutions",
      "Annual 'Himig ng Quezon' music festival showcases local talent",
      "Venues like Araneta Coliseum have hosted historic international and local performances",
      "UP Conservatory of Music trains world-class musicians and preserves traditional forms"
    ],
    image: "/aboutqc/music.jpg"
  },
  {
    title: "Literary Heritage",
    description: "The city has been a center of Filipino literature and intellectual development.",
    icon: "FaBook",
    details: [
      "Houses the National Library of the Philippines and numerous publishing houses",
      "Birthplace of significant literary movements through the UP Writers Club",
      "Annual Quezon City Book Festival celebrates local authors and promotes reading",
      "Home to award-winning writers, poets, and playwrights who shaped Filipino literature"
    ],
    image: "/aboutqc/literature.jpg"
  },
  {
    title: "Visual Arts",
    description: "Quezon City has a vibrant visual arts scene spanning traditional and contemporary expressions.",
    icon: "FaPalette",
    details: [
      "The Vargas Museum houses significant collections of Filipino art",
      "Street art and murals throughout the city tell stories of community history",
      "Art in the Park and other exhibitions showcase emerging artists",
      "UP College of Fine Arts has produced many National Artists for Visual Arts"
    ],
    image: "/aboutqc/arts.jpg"
  },
  {
    title: "Theater & Cinema",
    description: "The city has played a central role in the development of Filipino theater and film.",
    icon: "FaTheaterMasks",
    details: [
      "Houses major production studios including ABS-CBN and GMA Network",
      "UP Theater is a landmark venue for significant theatrical productions",
      "QCinema International Film Festival promotes independent filmmaking",
      "Home to the Film Development Council of the Philippines and film archives"
    ],
    image: "/aboutqc/cinema.jpg"
  },
  {
    title: "Traditional Dances",
    description: "Various folk dances and contemporary dance forms are preserved and developed in the city.",
    icon: "FaDrum",
    details: [
      "The Bayanihan Dance Company, based in QC, preserves traditional Filipino dances",
      "Annual Galaw-Galaw Dance Festival celebrates various dance traditions",
      "Dance schools throughout the city train performers in both Filipino and international styles",
      "Community dance programs make cultural heritage accessible to youth"
    ],
    image: "/aboutqc/dance.jpg"
  },
  {
    title: "Culinary Traditions",
    description: "Quezon City's food scene reflects the diversity of Filipino culinary heritage.",
    icon: "FaUtensils",
    details: [
      "Maginhawa Street and Teachers Village are famous food destinations",
      "QC Food Festival celebrates local delicacies and culinary innovations",
      "Home to restaurants preserving traditional recipes and cooking techniques",
      "Culinary schools and programs document and preserve Filipino food heritage"
    ],
    image: "/aboutqc/food.jpg"
  }
];

// Historical facts about each district
export const districtHistoryData: DistrictData[] = [
  {
    name: "District I",
    description: "The westernmost district covering areas like Project 6, Munoz, and San Francisco del Monte.",
    historicalFacts: [
      "San Francisco del Monte was founded in 1590 by Franciscan missionaries",
      "Project 6 was one of the first planned communities in the city",
      "Contains some of the city's oldest churches and religious institutions",
      "Home to the original Frisco (San Francisco del Monte) Market established in the 1950s"
    ],
    landmarks: ["San Francisco del Monte Church", "Veterans Memorial Medical Center", "Project 6 Market"],
    image: "/aboutqc/district1.jpg"
  },
  {
    name: "District II",
    description: "Covers Novaliches and includes the La Mesa Watershed and nature reserve.",
    historicalFacts: [
      "Novaliches was named after the Marquis of Novaliches, a Spanish governor-general",
      "Once intended to be a separate municipality before being incorporated into Quezon City",
      "La Mesa Dam and Reservoir were constructed in the 1920s and expanded in the 1940s",
      "Site of the 'Battle of Novaliches' during the Philippine-American War"
    ],
    landmarks: ["La Mesa Eco Park", "Novaliches Cathedral", "Lagro Reservoir Park"],
    image: "/aboutqc/district2.jpg"
  },
  {
    name: "District III",
    description: "Includes Araneta City, Cubao, and parts of Kamias and New Manila.",
    historicalFacts: [
      "Cubao developed as a commercial center in the 1950s with the construction of Araneta Coliseum",
      "New Manila was established in the 1940s as an exclusive residential area for wealthy Manila residents",
      "Hosted the 1960 FIBA World Championship at Araneta Coliseum",
      "Ali Mall, opened in 1976, was named after Muhammad Ali following his victory in the 'Thrilla in Manila'"
    ],
    landmarks: ["Araneta Coliseum", "Ali Mall", "Gateway Mall", "New Manila mansions"],
    image: "/aboutqc/district3.jpg"
  },
  {
    name: "District IV",
    description: "Encompasses Diliman, UP Campus, Teachers Village, and Timog Avenue areas.",
    historicalFacts: [
      "UP Diliman campus was established in 1949 after moving from Manila",
      "Diliman was designed as the civic center in the original QC master plan",
      "Teachers Village was developed in the 1950s specifically for UP faculty",
      "The Elliptical Road and Quezon Memorial Circle became the city's iconic center"
    ],
    landmarks: ["Quezon Memorial Circle", "UP Diliman Campus", "Ninoy Aquino Parks & Wildlife Center"],
    image: "/aboutqc/district4.jpg"
  },
  {
    name: "District V",
    description: "Includes Fairview, Commonwealth Avenue, and Batasan Hills areas.",
    historicalFacts: [
      "Batasan Hills was developed in the 1970s to house the Batasang Pambansa (National Legislature)",
      "Commonwealth Avenue was constructed as the widest avenue in the Philippines",
      "Fairview was largely agricultural until the 1980s when residential development began",
      "The area saw rapid urbanization in the 1990s and 2000s"
    ],
    landmarks: ["Batasan Pambansa Complex", "Fairview Park", "Commonwealth Market"],
    image: "/aboutqc/district5.jpg"
  },
  {
    name: "District VI",
    description: "The newest district, created in 2012, includes Mindanao Avenue and North Fairview areas.",
    historicalFacts: [
      "Formed in 2012 by separating certain areas from District II",
      "Contains some of the newest residential developments in Quezon City",
      "Mindanao Avenue was developed as a major thoroughfare in the early 2000s",
      "The area has seen significant commercial development since 2010"
    ],
    landmarks: ["Mindanao Avenue commercial strip", "North Fairview Park", "QC Science High School"],
    image: "/aboutqc/district6.jpg"
  }
]; 