import React, { Component } from "react";
import "./App.css";
import Companies from "./components/companies";

class App extends Component {
  state = {
    companies: [
      {
        id: 2,
        company_name: "3AM Innovations",
        founded_year: 2015,
        description:
          "3AM has designed an IPS solution that utilizes state-of-the-art sensors, communication technologies, and software called FLARE.",
        official_url: "https://www.3aminnovations.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/3am-innovations"
      },
      {
        id: 3,
        company_name: "Accela",
        founded_year: 1999,
        description:
          "Accela provides civic engagement solutions and improves core processes for city, county, state and federal governments.",
        official_url: "https://www.accela.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/accela#section-overview"
      },
      {
        id: 4,
        company_name: "Acivilate",
        founded_year: 2014,
        description:
          "They are a Software-as-a-Service (SaaS) company committed to reducing recidivism.",
        official_url: "https://acivilate.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/acivilate"
      },
      {
        id: 5,
        company_name: "APPCityLife®, Inc.",
        founded_year: 2009,
        description:
          "APPCityLife is an end-to-end platform transforming the way cities and agencies produce mobile apps.",
        official_url: "https://www.appcitylife.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/appcitylife"
      },
      {
        id: 6,
        company_name: "ArchiveSocial",
        founded_year: 2011,
        description:
          "ArchiveSocial is a social media archiving solution for business compliance and legal protection activities in enterprises.",
        official_url: "https://archivesocial.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/archivesocial#section-overview"
      },
      {
        id: 7,
        company_name: "Avenu Insights & Analytics",
        founded_year: 1989,
        description:
          "Avenu Insights & Analytics is the provider of revenue enhancement, technology, and consulting services for government agencies.",
        official_url: "https://www.avenuinsights.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/avenu-insights-analytics#section-overview"
      },
      {
        id: 8,
        company_name: "Axon",
        founded_year: 1993,
        description:
          "Axon provides electronic control devices to law enforcement and corrections agencies.",
        official_url: "https://www.appcitylife.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/appcitylife"
      },
      {
        id: 9,
        company_name: "Balancing Act by Engaged Public",
        founded_year: 1998,
        description:
          "Balancing Act is a suite of tools to help government engage citizens on budget priorities and financial issues. Product of Engaged Public.",
        official_url: "https://www.axon.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/taser-international"
      },
      {
        id: 10,
        company_name: "Bang the Table",
        founded_year: 2007,
        description:
          "Bang the Table offers an online citizen engagement platform for local government.",
        official_url: "https://bangthetable.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/bang-the-table"
      },
      {
        id: 11,
        company_name: "Binti",
        founded_year: 2014,
        description:
          "Binti is a for-profit mission driven tech company with the goal of helping children have safe, loving and stable families.",
        official_url: "https://binti.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/binti"
      },
      {
        id: 12,
        company_name: "Biobot Analytics",
        founded_year: 2017,
        description:
          "Biobot Analytics analyzes city sewage to estimate opioid consumption.",
        official_url: "http://www.biobot.io/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/biobot-analytics"
      },
      {
        id: 13,
        company_name: "BlueLine Grid",
        founded_year: 2013,
        description:
          "BlueLine Grid operates the premier mass notification and critical collaboration platform for corporations and government agencies.",
        official_url: "https://www.bluelinegrid.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/bratton-technologies-inc"
      },
      {
        id: 14,
        company_name: "BondLink",
        founded_year: 2016,
        description:
          "BondLink builds technology products and tools to help modernize the municipal bond market.",
        official_url: "https://www.bondlink.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/bondlink"
      },
      {
        id: 15,
        company_name: "Callyo",
        founded_year: 2010,
        description:
          "Advancing mobile technology for law enforcement investigators to create a safer world for children",
        official_url: "https://callyo.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/callyo"
      },
      {
        id: 16,
        company_name: "Calytera",
        founded_year: 1989,
        description:
          "CSDC provides software to help governments efficiently manage resources & processes to enable growth and seamlessly interact with citizens.",
        official_url: "https://www.calytera.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/csdc-systems"
      },
      {
        id: 17,
        company_name: "Cardinality.ai",
        founded_year: 2017,
        description: "Super Charged Citizen Experience, Out of the Box!",
        official_url: "http://www.cardinality.ai/",
        crunchbase_url: "https://www.crunchbase.com/organization/cardinality-ai"
      },
      {
        id: 18,
        company_name: "Cartegraph",
        founded_year: 1994,
        description:
          "Cartegraph makes modern operations management software for local governments.",
        official_url: "https://www.cartegraph.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/cartegraph"
      },
      {
        id: 19,
        company_name: "Casebook PBC",
        founded_year: 2017,
        description:
          "We are the developer of the patent-pending, award-winning Casebook SaaS platform for Human Services.",
        official_url: "http://www.casebook.net/",
        crunchbase_url: "https://www.crunchbase.com/organization/casebook-pbc"
      },
      {
        id: 20,
        company_name: "CentralSquare Technologies",
        founded_year: 1979,
        description:
          "CentralSquare is a new type of technology leader innovating on behalf of the public sector.",
        official_url: "https://www.centralsqr.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/centralsquare-technologies"
      },
      {
        id: 21,
        company_name: "Citibot",
        founded_year: 2016,
        description:
          "Citibot is the tool for citizens and their governments to use for communication and civic change.",
        official_url: "https://www.citibot.io/",
        crunchbase_url: "https://www.crunchbase.com/organization/citibot"
      },
      {
        id: 22,
        company_name: "Citymart",
        founded_year: 2011,
        description:
          "Citymart transforms the way cities solve problems, connecting them with new ideas through open challenges to entrepreneurs and citizens.",
        official_url: "http://citymart.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/citymart"
      },
      {
        id: 23,
        company_name: "CivicActions",
        founded_year: 2004,
        description:
          "CivicActions helps agencies and organizations successfully execute large-scale software projects using open standards technologies.",
        official_url: "https://civicactions.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/civicactions"
      },
      {
        id: 24,
        company_name: "CivicPlus",
        founded_year: 1994,
        description:
          "CivicPlus provides integrated software for cities and counties across North America. (Websites, HRMS, Mass Notfications and more)",
        official_url: "http://www.civicplus.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/civic-plus#section-overview"
      },
      {
        id: 25,
        company_name: "Civis Analytics",
        founded_year: 2013,
        description:
          "Civis Analytics helps leading commercial, nonprofit and government organizations leverage data to make better decisions.",
        official_url: "http://www.civisanalytics.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/civis-analytics"
      },
      {
        id: 26,
        company_name: "Clear Ballot Group, Inc.",
        founded_year: 2009,
        description:
          "Clear Ballot is re-imagining elections with the world's most innovative and transparent voting system.",
        official_url: "http://www.clearballot.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/clear-ballot-group-inc"
      },
      {
        id: 27,
        company_name: "ClearGov",
        founded_year: 2015,
        description:
          "ClearGov is helping citizens better understand their local government's financial performance.",
        official_url: "https://www.cleargov.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/cleargov"
      },
      {
        id: 28,
        company_name: "CoInspect",
        founded_year: 2014,
        description:
          "CoInspect builds mobile software to manage compliance, quality assurance, and brand standards.",
        official_url: "https://coinspectapp.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/mewe-inc-"
      },
      {
        id: 29,
        company_name: "Compology",
        founded_year: 2012,
        description:
          "Compology offers camera monitoring for waste container management.",
        official_url: "http://www.compology.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/compology"
      },
      {
        id: 30,
        company_name: "Computronix",
        founded_year: 1979,
        description:
          "Computronix provides permitting, licensing, inspection and compliance solutions for government, based on our award-winning POSSE platform.",
        official_url: "https://www.computronix.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/computronix"
      },
      {
        id: 31,
        company_name: "Coord",
        founded_year: 2016,
        description:
          "Coord is a mobility company that creates seamless mobility and self-driving experiences today through deep integrations.",
        official_url: "https://www.coord.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/coord#section-overview"
      },
      {
        id: 32,
        company_name: "coUrbanize",
        founded_year: 2013,
        description:
          "coUrbanize is an online community engagement platform connecting real estate developers and municipalities with residents.",
        official_url: "https://www.courbanize.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/courbanize"
      },
      {
        id: 33,
        company_name: "Cubic Corporation",
        founded_year: 1951,
        description:
          "Cubic Corporation (Cubic) is an international provider of systems and solutions that address the mass transit and global defense markets.",
        official_url: "http://cubic.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/cubic-corporation"
      },
      {
        id: 34,
        company_name: "EasyVote Solutions",
        founded_year: 2013,
        description:
          "EasyVote Solutions delivers a SaaS platform to city, county and state election offices to help manage the process of running elections.",
        official_url: "http://www.easyvotesolutions.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/easyvote-solutions"
      },
      {
        id: 35,
        company_name: "Electro Scan Inc.",
        founded_year: 2011,
        description:
          "Designs, develops, and markets, next generation sensors and cloud applications to assess water, sewer, and gas pipelines.",
        official_url: "https://www.electroscan.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/electro-scan-inc"
      },
      {
        id: 36,
        company_name: "Elucd",
        founded_year: 2016,
        description:
          "Elucd is a GovTech company that provides cities with near-realtime understanding of how citizens feel about their government.",
        official_url: "https://www.elucd.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/elucd"
      },
      {
        id: 37,
        company_name: "Esri",
        founded_year: 1969,
        description:
          "Esri offers geographic information system software, web GIS, and geodatabase management applications.",
        official_url: "https://www.esri.com/en-us/home",
        crunchbase_url: "https://www.crunchbase.com/organization/esri"
      },
      {
        id: 38,
        company_name: "FATHOM",
        founded_year: 2003,
        description:
          "FATHOM are transforming the water utility paradigm by unleashing the power of data.",
        official_url: "http://www.gwfathom.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/fathom-3"
      },
      {
        id: 39,
        company_name: "Forensic Logic",
        founded_year: 2003,
        description:
          "Forensic Logic is a company founded on a simple idea: there is too much crime on our streets because critical information is inaccessible",
        official_url: "http://www.forensiclogic.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/forensic-logic"
      },
      {
        id: 40,
        company_name: "GCR Inc.",
        founded_year: 1979,
        description:
          "GCR Inc., a professional services firm, delivers expert consulting services and cutting-edge technology solutions",
        official_url: "http://www.gcrinc.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/gcr-associates"
      },
      {
        id: 41,
        company_name: "GovPilot",
        founded_year: 2014,
        description:
          "GovPilot is a web-based Management Platform developed exclusively for local government.",
        official_url: "https://www.govpilot.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/govpilot"
      },
      {
        id: 42,
        company_name: "GovQA",
        founded_year: 2002,
        description:
          "GovQA, provides SaaS-based, collaboration tools enabling the nation's top cities, counties, and state agencies process complex work.",
        official_url: "http://www.govqa.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/govqa"
      },
      {
        id: 43,
        company_name: "GovSense",
        founded_year: 2014,
        description:
          "GovSense is cloud-based permitting, licensing and financial software for state and local government.",
        official_url: "http://www.govsense.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/govsense"
      },
      {
        id: 44,
        company_name: "Granicus",
        founded_year: 1999,
        description:
          "Granicus provides technology that empowers government organizations to create better lives for the people they serve.",
        official_url: "https://granicus.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/granicus"
      },
      {
        id: 45,
        company_name: "Gridics",
        founded_year: 2015,
        description: "Intelligent 3D Zoning and Data Platform",
        official_url: "https://www.gridics.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/gridics"
      },
      {
        id: 46,
        company_name: "GTY Technology Holdings",
        founded_year: 2016,
        description:
          "GTY Holdings is a gov tech acquisitions company comprising a number of smaller startups.",
        official_url: "https://www.gtytechnology.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/gty-technology-holdings"
      },
      {
        id: 47,
        company_name: "HAAS Alert",
        founded_year: 2015,
        description:
          "HAAS uses mobile data to alert drivers (and cyclists) of approaching emergency vehicles through vehicle-to-vehicle notifications.",
        official_url: "http://www.haasalert.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/haasalert"
      },
      {
        id: 48,
        company_name: "IPS Group",
        founded_year: 1995,
        description:
          "IPS Group globally delivers smart city tech within an Internet of Things framework.",
        official_url: "http://ipsgroupinc.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/ips-group"
      },
      {
        id: 49,
        company_name: "Itron",
        founded_year: 1977,
        description:
          "Itron is a technology company that offers products and services on energy and water resource management.",
        official_url: "https://www.itron.com/na/",
        crunchbase_url: "https://www.crunchbase.com/organization/itron"
      },
      {
        id: 50,
        company_name: "LiveStories",
        founded_year: 2013,
        description:
          "LiveStories is a data hub that includes a civic data library, team collaboration, and online publishing—all on one platform.",
        official_url: "https://www.livestories.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/livestories"
      },
      {
        id: 51,
        company_name: "LotaData, Inc.",
        founded_year: 2015,
        description:
          "LOTADATA transforms time, place, activity into actionable context, insights and segments for mobile analytics and business intelligence",
        official_url: "https://lotadata.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/lotadata--inc-"
      },
      {
        id: 52,
        company_name: "Mark43",
        founded_year: 2012,
        description:
          "Mark43 develops law enforcement software that allows police to collect, manage, analyze and share information.",
        official_url: "http://mark43.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/mark43"
      },
      {
        id: 53,
        company_name: "Maximus",
        founded_year: 1975,
        description:
          "Maximus is an operator of government health and human services programs that help serve citizens with compassion and efficacy.",
        official_url: "http://www.maximus.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/maximus"
      },
      {
        id: 54,
        company_name: "Moovit",
        founded_year: 2012,
        description:
          "Moovit is leading Mobility as a Service (MaaS) provider and #1 public transit app.",
        official_url: "https://moovit.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/moovitapp"
      },
      {
        id: 55,
        company_name: "Motorola Solutions",
        founded_year: 1928,
        description:
          "Motorola Solutions creates mission-critical communication solutions and services for public safety and commercial customers.",
        official_url: "http://www.motorolasolutions.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/motorola-solutions"
      },
      {
        id: 56,
        company_name: "Munetrix",
        founded_year: 2010,
        description:
          "Munetrix is a web-based information source providing financial information and forecasting tools for municipal governments and schools.",
        official_url: "http://munetrix.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/munetrix"
      },
      {
        id: 57,
        company_name: "Municode",
        founded_year: 1951,
        description:
          "Municode provides website design & development, electronic payment processing, codification, and publishing services to local governments.",
        official_url: "https://www.municode.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/municipal-code-corporation"
      },
      {
        id: 58,
        company_name: "Neighborland",
        founded_year: 2011,
        description:
          "Neighborland enables residents to collaborate with local organizations and take action on their area-related issues.",
        official_url: "http://neighborland.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/neighborland"
      },
      {
        id: 59,
        company_name: "NEOGOV",
        founded_year: 1999,
        description:
          "NEOGOV is the market and technology leader in on-demand human resources software for the public sector.",
        official_url: "http://www.neogov.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/neogov"
      },
      {
        id: 60,
        company_name: "Nextdoor",
        founded_year: 2010,
        description:
          "Nextdoor is the world's largest private social network used by 90% of US neighborhoods and over 5,000 public agencies to build stronger, safer, happier communities.",
        official_url: "http://nextdoor.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/nextdoor"
      },
      {
        id: 61,
        company_name: "NextRequest",
        founded_year: 2015,
        description:
          "NextRequest makes public records requests friendlier for the public and easier for governments.",
        official_url: "https://www.nextrequest.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/nextrequest"
      },
      {
        id: 62,
        company_name: "NIC",
        founded_year: 1992,
        description:
          "NIC is a provider of innovative digital government solutions and secure payment processing.",
        official_url: "http://www.egov.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/nic"
      },
      {
        id: 63,
        company_name: "Numetric",
        founded_year: 2015,
        description:
          "Numetric works with Departments of Transportation in making their roadways better and safer, through cloud-based software and data services.",
        official_url: "http://www.numetric.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/numetric"
      },
      {
        id: 64,
        company_name: "One Concern",
        founded_year: 2015,
        description:
          "One Concern is a disaster solutions company that provides damage estimates using artificial intelligence on natural phenomena sciences.",
        official_url: "https://www.oneconcern.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/oneconcern"
      },
      {
        id: 65,
        company_name: "OpenDataSoft",
        founded_year: 2011,
        description:
          "OpenDataSoft is a cloud-based turnkey platform for data publishing and API management.",
        official_url: "http://www.opendatasoft.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/opendatasoft"
      },
      {
        id: 66,
        company_name: "OpenGov",
        founded_year: 2012,
        description:
          "OpenGov is the first complete cloud solution for public sector budgeting, operational performance, and citizen engagement.",
        official_url: "https://opengov.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/opengov"
      },
      {
        id: 67,
        company_name: "Passport",
        founded_year: 2010,
        description:
          "Passport specializes in enterprise business applications and payments for parking and transportation.",
        official_url: "https://passportshipping.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/passport"
      },
      {
        id: 68,
        company_name: "PayIt",
        founded_year: 2013,
        description:
          "PayIt simplifies doing business with state, local and federal government through it's mobile transaction and payment platform.",
        official_url: "https://www.payitgov.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/payit"
      },
      {
        id: 69,
        company_name: "Periscope Holdings",
        founded_year: 2001,
        description:
          "Periscope Holdings helps organizations build a better procurement process.",
        official_url: "http://www.periscopeholdings.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/periscope-holdings"
      },
      {
        id: 70,
        company_name: "Planet",
        founded_year: 2010,
        description:
          "Planet builds small satellites and delivers information about the changing planet.",
        official_url: "https://www.planet.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/planet-labs"
      },
      {
        id: 71,
        company_name: "Pondera Solutions",
        founded_year: 2011,
        description:
          "Pondera offers a comprehensive cloud solution to help you detect, investigate, and enforce fraud, waste, and abuse.",
        official_url: "http://www.ponderasolutions.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/pondera-solutions"
      },
      {
        id: 72,
        company_name: "PredPol",
        founded_year: 2012,
        description:
          "PredPol predicts crime using cloud software technology that identifies the highest risk times and places in near real-time.",
        official_url: "http://www.predpol.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/predpol"
      },
      {
        id: 73,
        company_name: "PrimeGov",
        founded_year: 2014,
        description:
          "PrimeGov is committed to providing world-class customer service in its delivery of innovative legislative management solutions.",
        official_url: "http://primegov.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/primegov"
      },
      {
        id: 74,
        company_name: "Promise",
        founded_year: 0,
        description:
          "Promise provides a cost-effective, humane alternative to incarceration by improving long-term outcomes for individuals and communities.",
        official_url: "https://joinpromise.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/promise"
      },
      {
        id: 75,
        company_name: "ProudCity",
        founded_year: 2016,
        description:
          "ProudCity is a software company providing cities with websites and online government services.",
        official_url: "https://proudcity.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/proudcity"
      },
      {
        id: 76,
        company_name: "Quicket Solutions",
        founded_year: 2013,
        description:
          "Quicket provides a cloud-based data management and operational intelligence platform for sensitive government workloads.",
        official_url: "https://www.quicketsolutions.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/quicket-solutions"
      },
      {
        id: 77,
        company_name: "Rachio",
        founded_year: 2012,
        description:
          "Rachio is a technology company offering a smart irrigation controller with cloud-based software and web-based dashboards.",
        official_url: "http://rachio.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/rachio"
      },
      {
        id: 78,
        company_name: "RapidDeploy",
        founded_year: 2013,
        description:
          "RapidDeploy is a Cloud–based Computer Aided Dispatch (CAD) and Analytics platform.",
        official_url: "http://www.rapiddeploy.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/rapiddeploy"
      },
      {
        id: 79,
        company_name: "RapidSOS",
        founded_year: 2013,
        description: "RapidSOS is an advanced emergency communication company.",
        official_url: "https://rapidsos.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/rapidsos"
      },
      {
        id: 80,
        company_name: "Remix",
        founded_year: 2014,
        description: "Remix is a planning platform for public transit.",
        official_url: "https://www.remix.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/remix"
      },
      {
        id: 81,
        company_name: "Replica",
        founded_year: 0,
        description:
          "Replica is a next-generation urban planning tool that can help cities answer key transportation questions",
        official_url: "https://replicahq.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/replica#section-overview"
      },
      {
        id: 82,
        company_name: "RoadBotics",
        founded_year: 2016,
        description:
          "AI technology that monitors and manages roadways around the world.",
        official_url: "https://www.roadbotics.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/roadbotics-inc"
      },
      {
        id: 83,
        company_name: "Rock Solid Technologies",
        founded_year: 1994,
        description:
          "Rock Solid Technologies is a software products research and development company.",
        official_url: "https://www.rocksolid.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/rock-solid-technologies"
      },
      {
        id: 84,
        company_name: "Sagitec Solutions LLC",
        founded_year: 2004,
        description:
          "We design & deliver tailor-made pension, provident fund, unemployment insurance, and healthcare and life sciences software solutions.",
        official_url: "https://www.sagitec.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/sagitec-solutions-llc"
      },
      {
        id: 85,
        company_name: "SeamlessDocs",
        founded_year: 2011,
        description:
          "SeamlessDocs is a eSig and form automation platform that specializes in working with govs to help them digitize their PDF & form processes.",
        official_url: "http://www.seamlessdocs.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/seamlessdocs"
      },
      {
        id: 86,
        company_name: "ShotSpotter",
        founded_year: 1996,
        description:
          "ShotSpotter, a public company, is the global leader in gunfire detection and location technology. It is used by more than 90 cities.",
        official_url: "https://www.shotspotter.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/shotspotter"
      },
      {
        id: 87,
        company_name: "Sidewalk Labs",
        founded_year: 2014,
        description:
          "Sidewalk Labs works with cities to build products that address urban problems.",
        official_url: "http://www.sidewalkinc.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/sidewalk-labs"
      },
      {
        id: 88,
        company_name: "Smarking",
        founded_year: 2014,
        description:
          "Smarking turns parking data into instant actionable insights.",
        official_url: "https://smarking.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/smarking"
      },
      {
        id: 89,
        company_name: "StreetLight Data",
        founded_year: 2010,
        description:
          "StreetLight Data is a data analytics company transforming urban planning and transportation design with the power of geospatial data.",
        official_url: "http://www.streetlightdata.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/streetlight-data"
      },
      {
        id: 90,
        company_name: "Swiftly",
        founded_year: 2014,
        description:
          "Swiftly is changing transportation, mobility, and cities through better data",
        official_url: "http://goswift.ly/",
        crunchbase_url: "https://www.crunchbase.com/organization/swiftlyinc"
      },
      {
        id: 91,
        company_name: "The Boring Company",
        founded_year: 2016,
        description:
          "The Boring Company aims to dig tunnels efficiently to facilitate an underground transportation network.",
        official_url: "https://boringcompany.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/the-boring-company"
      },
      {
        id: 92,
        company_name: "Tyler Technologies",
        founded_year: 1966,
        description:
          "Tyler Technologies is a software company providing integrated software and technology services to the public sector.",
        official_url: "http://www.tylertech.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/tyler-technologies"
      },
      {
        id: 93,
        company_name: "UrbanLeap",
        founded_year: 2017,
        description:
          "UrbanLeap offers software that helps governments run pilot projects to test new technologies.",
        official_url: "http://www.urbanleap.io/",
        crunchbase_url: "https://www.crunchbase.com/organization/urbanleap-co"
      },
      {
        id: 94,
        company_name: "Utilidata",
        founded_year: 1983,
        description:
          "Utilidata works with utilities to save energy, increase reliability and better detect grid anomalies.",
        official_url: "http://www.utilidata.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/utilidata"
      },
      {
        id: 95,
        company_name: "Utilis Inc.",
        founded_year: 2013,
        description:
          "Utilis uses satellite imagery to monitor underground water systems and detect leaks.",
        official_url: "http://utiliscorp.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/utilis-israel-inc-co"
      },
      {
        id: 96,
        company_name: "Varuna",
        founded_year: 2018,
        description:
          "Varuna provides alerts, recommendations, and predictions to help water utility leaders to effectively manage a water system.",
        official_url: "https://www.varunaiot.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/varuna-co"
      },
      {
        id: 97,
        company_name: "Visionary Integration Professionals",
        founded_year: 1996,
        description:
          "VIP makes business strategy software for governments and corporations.",
        official_url: "http://www.trustvip.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/visionary-integration-professionals"
      },
      {
        id: 98,
        company_name: "Voyage",
        founded_year: 2017,
        description: "Voyage serves communities with autonomous vehicles",
        official_url: "http://voyage.auto/",
        crunchbase_url: "https://www.crunchbase.com/organization/voyage"
      },
      {
        id: 99,
        company_name: "WaterSmart Software",
        founded_year: 2009,
        description:
          "WaterSmart Software uses mobile and online tools to help water utilities educate and engage their customers to save water and money.",
        official_url: "http://www.watersmart.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/watersmart-software"
      },
      {
        id: 100,
        company_name: "Waycare",
        founded_year: 2016,
        description:
          "WayCare optimizes traffic management systems leveraging predictive analytics, and enables two way vehicle to city communication.",
        official_url: "http://www.waycaretech.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/waycare"
      },
      {
        id: 101,
        company_name: "AmigoCloud",
        founded_year: 2011,
        description:
          "AmigoCloud is a geospatial platform that helps you collect, manage, analyze, visualize, and publish your location data.",
        official_url: "https://www.amigocloud.com/en/",
        crunchbase_url: "https://www.crunchbase.com/organization/amigocloud"
      },
      {
        id: 102,
        company_name: "Boundless Spatial",
        founded_year: 2012,
        description:
          "Boundless is a provider of open source product support, training and core development to meet geospatial requirements.",
        official_url: "https://www.boundless.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/boundless"
      },
      {
        id: 103,
        company_name: "Buildingeye",
        founded_year: 2012,
        description:
          "Buildingeye is a user friendly planning information portal specializing in GIS and data visualization.",
        official_url: "https://buildingeye.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/buildingeye"
      },
      {
        id: 104,
        company_name: "CityInsight",
        founded_year: 0,
        description:
          "CityInsight creates mobile and desktop applications for municipal government.",
        official_url: "https://one.rocksolid.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/cityinsight"
      },
      {
        id: 105,
        company_name: "CitySourced",
        founded_year: 2006,
        description:
          "CitySourced is an enterprise civic engagement platform in the world, connecting citizens with their local government.",
        official_url: "https://www.citysourced.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/citysourced"
      },
      {
        id: 106,
        company_name: "Cityzenith",
        founded_year: 2009,
        description:
          "Cityzenith provides the world's leading data visualization platform software and applications for IoT and Smart Cities.",
        official_url: "http://www.cityzenith.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/cityzenith"
      },
      {
        id: 107,
        company_name: "CivicScape",
        founded_year: 2017,
        description: "A New Standard for Real-Time Policing",
        official_url: "https://www.civicscape.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/civicscape"
      },
      {
        id: 108,
        company_name: "CivicSmart",
        founded_year: 2015,
        description:
          "CivicSmart is a technology services and engineering company specializing in Smart City parking solutions.",
        official_url: "http://www.civicsmart.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/civicsmart-inc"
      },
      {
        id: 109,
        company_name: "CIVIQ Smartscapes",
        founded_year: 2015,
        description:
          "CIVIQ Smartscapes designs and manufactures interactive smart city communications structures",
        official_url: "http://www.civiqsmartscapes.com/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/civiq-smartscapes"
      },
      {
        id: 110,
        company_name: "GRIDSMART Technologies, Inc.",
        founded_year: 2006,
        description:
          "GRIDSMART uses a single camera to actuate intersections and gather data on arterials and highways.",
        official_url: "https://gridsmart.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/aldis"
      },
      {
        id: 111,
        company_name: "Hyperloop Transportation Technologies",
        founded_year: 2013,
        description:
          "Hyperloop Transportation Technologies is a global team that focuses on removing barriers of speed and congestion in travel.",
        official_url: "http://hyperloop.global/",
        crunchbase_url:
          "https://www.crunchbase.com/organization/hyperloop-transportation-technologies"
      },
      {
        id: 112,
        company_name: "Neighborly",
        founded_year: 2012,
        description:
          "Neighborly modernizes access to public finance, the $1 billion dollar per day market that funds vital public projects like schools & parks.",
        official_url: "https://neighborly.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/neighborly"
      },
      {
        id: 113,
        company_name: "SeeClickFix",
        founded_year: 2008,
        description:
          "SeeClickFix provides tools for residents and governments to communicate for all sizes, populations, and budgets.",
        official_url: "http://www.seeclickfix.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/seeclickfix"
      },
      {
        id: 114,
        company_name: "ViewPoint",
        founded_year: 1995,
        description:
          "ViewPoint Cloud makes it easy to manage permit and license requests from intake to issuance.",
        official_url: "http://www.viewpointcs.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/viewpoint"
      },
      {
        id: 115,
        company_name: "Votem Corp",
        founded_year: 2014,
        description:
          "Votem enables citizens around the world to easily vote online with unprecedented verifiability, accessibility, security, and transparency.",
        official_url: "http://www.votem.com/",
        crunchbase_url: "https://www.crunchbase.com/organization/votem-corp"
      },
      {
        id: 116,
        company_name: "Aclara Technologies",
        founded_year: 1972,
        description:
          "Aclara Technologies is a supplier of smart infrastructure solutions (SIS) to water, gas, and electric utilities globally.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/aclara-technologies"
      },
      {
        id: 117,
        company_name: "CITYBASE",
        founded_year: 2015,
        description:
          "CityBase is a gov tech platform that connects cities and citizens to make government more accessible and efficient.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/409555065"
      },
      {
        id: 118,
        company_name: "Court Innovations",
        founded_year: 2013,
        description:
          "Court Innovations develops and implements online negotiation systems for courts and constituents.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/court-innovations"
      },
      {
        id: 119,
        company_name: "CRIMEWATCH",
        founded_year: 2012,
        description: "Crowd Sourced Crime Fighting",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/crimewatch"
      },
      {
        id: 120,
        company_name: "Envisio Solutions Inc.",
        founded_year: 2012,
        description:
          "Envisio helps governments achieve greater transparency & accountability by making it easy to track and report on strategic plans.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/envisio-solutions-inc"
      },
      {
        id: 121,
        company_name: "Govlist",
        founded_year: 2016,
        description:
          "Govlist is a procurement solution helping governments and vendors make better decisions, move faster, and simplify the procurement process.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/govlist"
      },
      {
        id: 122,
        company_name: "OpenCounter",
        founded_year: 2012,
        description:
          "OpenCounter combines Silicon Valley and public-sector talent to create best-of-class products for modern governments.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/opencounter"
      },
      {
        id: 123,
        company_name: "Paladin Data Systems",
        founded_year: 1994,
        description:
          "Paladin Data streamlines community development. SMARTGOV is SaaS solution that streamlines permitting, licensing, code enforcement and more.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/paladin-data-systems"
      },
      {
        id: 124,
        company_name: "PermitZone",
        founded_year: 2016,
        description:
          "Providing contractors and DIY pro’s, visibility into municipal knowledge, permitting requirements and the ability to pull permits online.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/permitzone"
      },
      {
        id: 125,
        company_name: "Pluto AI",
        founded_year: 2016,
        description:
          "Pluto is an analytics platform for smart water management.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/pluto-ai"
      },
      {
        id: 126,
        company_name: "PublicInput.com",
        founded_year: 2014,
        description:
          "PublicInput.com helps organizations engage their audience and collect valuable insights.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/cityzen"
      },
      {
        id: 127,
        company_name: "Questica, Inc.",
        founded_year: 1998,
        description:
          "Questica’s software suite includes fully featured web-based budgeting, performance and data visualization solutions.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/questica-inc"
      },
      {
        id: 128,
        company_name: "Safe Fleet Holdings",
        founded_year: 2013,
        description:
          "Leading global provider of safety solutions for fleet vehicles.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/safe-fleet-holdings"
      },
      {
        id: 129,
        company_name: "SceneDoc",
        founded_year: 2011,
        description:
          "SceneDoc is a provider of the leading smartphone/tablet-based investigation and field documentation platform.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/-scenedoc"
      },
      {
        id: 130,
        company_name: "Seabourne",
        founded_year: 2010,
        description: "Seabourne is a technology and data strategy firm.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/seabourne"
      },
      {
        id: 131,
        company_name: "Securus Technologies",
        founded_year: 1986,
        description:
          "Securus Technologies, Inc. is one of the largest providers of detainee communications, parolee tracking, and government information",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/securus-technologies"
      },
      {
        id: 132,
        company_name: "SmartProcure",
        founded_year: 2011,
        description:
          "SmartProcure is a procurement database company for businesses and government agencies.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/smartprocure"
      },
      {
        id: 133,
        company_name: "Socrata",
        founded_year: 2007,
        description:
          "Socrata is a cloud-based software company, enables users to access the data of PS organizations via web, mobile, and M2M interfaces.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/socrata"
      },
      {
        id: 134,
        company_name: "SPIDR Tech",
        founded_year: 2015,
        description:
          "SPIDR Tech is a law enforcement technology development company.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/spidr-tech"
      },
      {
        id: 135,
        company_name: "SpotCrime",
        founded_year: 2007,
        description:
          "SpotCrime is an online crime data and mapping aggregation website.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/spotcrime"
      },
      {
        id: 136,
        company_name: "TriTech Software Systems",
        founded_year: 1992,
        description:
          "TriTech Software Systems develops highly integrated public safety products and services for police, fire, and EMS agencies worldwide.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/tritech"
      },
      {
        id: 137,
        company_name: "Valor Water Analytics",
        founded_year: 2013,
        description:
          "Valor Water Analytics develops customized financial data and dashboard tools for water utilities and businesses.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/valor-water-analytics"
      },
      {
        id: 138,
        company_name: "VaultRMS",
        founded_year: 2013,
        description:
          "VaultRMS is a cloud-based technology platform for public safety agencies.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/vaultrms"
      },
      {
        id: 139,
        company_name: "Vision Internet",
        founded_year: 1995,
        description:
          "Vision is a website design, development, hosting, and software company for local governments.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/vision-internet"
      },
      {
        id: 140,
        company_name: "Vizalytics Technology",
        founded_year: 2012,
        description:
          "Vizalytics creates location-specific business intelligence from open and private data for enterprise, government, and institutional clients.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/468381163"
      },
      {
        id: 141,
        company_name: "Xcential Legislative Technologies",
        founded_year: 2002,
        description:
          "Xcential provides SaaS-based solutions enable legislatures and regulatory to more efficiently create/publish legislation and regulations.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/xcential-legislative-technologies"
      },
      {
        id: 142,
        company_name: "Appallicious",
        founded_year: 2010,
        description:
          "Appallicious is an open data visualization company that creates products to help government better serve its citizens.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/appallicious"
      },
      {
        id: 143,
        company_name: "Aunt Bertha",
        founded_year: 2010,
        description:
          "Aunt Bertha enables individuals to find and apply for government and charitable social service programs.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/aunt-bertha"
      },
      {
        id: 144,
        company_name: "Bidgely",
        founded_year: 2010,
        description:
          "Bidgely is a disruptive technology company developing an energy monitoring and management solution for eco-friendly energy saving.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/bidgely"
      },
      {
        id: 145,
        company_name: "Citizinvestor",
        founded_year: 2012,
        description:
          "Citizinvestor is a crowdfunding and civic engagement platform for government projects.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/citizinvestor"
      },
      {
        id: 146,
        company_name: "CityGrows",
        founded_year: 2015,
        description:
          "CityGrows is the transparency-first process management platform for government.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/city-grows"
      },
      {
        id: 147,
        company_name: "CityView",
        founded_year: 1982,
        description:
          "CityView is a developer of local government business process automation software.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/cityview"
      },
      {
        id: 148,
        company_name: "Cityworks",
        founded_year: 1986,
        description:
          "Cityworks provides a platform that helps manage, track, and analyze your infrastructure assets.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/cityworks"
      },
      {
        id: 149,
        company_name: "CivicConnect",
        founded_year: 1999,
        description:
          "Civic Connect develops and distributes cloud-based technology solutions for civic organizations.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/civic-connect"
      },
      {
        id: 150,
        company_name: "COBAN Technologies",
        founded_year: 2002,
        description:
          "COBAN manufactures state-of-the-art in-car video, body cameras, mobile computers, and evidence management solutions for law enforcement.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/coban-technologies"
      },
      {
        id: 151,
        company_name: "Comcate",
        founded_year: 2000,
        description:
          "Comcate develops customer service software solutions for public agencies.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/comcate"
      },
      {
        id: 152,
        company_name: "CyPhy Works",
        founded_year: 2008,
        description:
          "CyPhy works develops unmanned air vehicles for search and rescue missions and bridge inspections.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/cyphy-works"
      },
      {
        id: 153,
        company_name: "Department of Better Technology",
        founded_year: 2013,
        description:
          "Department of Better Technology makes great software that helps governments and non-profits better serve their communities.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/department-of-better-technology"
      },
      {
        id: 154,
        company_name: "DigitalTown",
        founded_year: 1980,
        description:
          "DigitalTown is building the leading platform for online community management powered by content, community and commerce.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/digitaltown"
      },
      {
        id: 155,
        company_name: "EagleEye Intelligence, LLC",
        founded_year: 2015,
        description:
          "EagleEye Intelligence provides incident management and aerial platform solutions for public safety and security",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/409569725"
      },
      {
        id: 156,
        company_name: "ElectSolve",
        founded_year: 2000,
        description:
          "ElectSolve is a full service provider of technical services, consulting and advanced data management solutions.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/electsolve"
      },
      {
        id: 157,
        company_name: "Enigma",
        founded_year: 2011,
        description:
          "Enigma sells operational data management and intelligence, and supports the open data community by making its vast library of data public.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/enigma"
      },
      {
        id: 158,
        company_name: "EvoGov",
        founded_year: 1997,
        description:
          "EvoGov is an internet provider offering website hosting, design, and other services to many types of organizations.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/evogov"
      },
      {
        id: 159,
        company_name: "Fast Enterprises",
        founded_year: 1997,
        description:
          "Fast Enterprises (FAST) provides software and information technology consulting services for government agencies.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/409718785"
      },
      {
        id: 160,
        company_name: "FiscalNote",
        founded_year: 2013,
        description:
          "FiscalNote uses artificial intelligence and big data to deliver predictive analytics of governmental action to determine its impact.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/fiscalnote"
      },
      {
        id: 161,
        company_name: "GovDelivery",
        founded_year: 2000,
        description:
          "GovDelivery enables public sector organizations to connect with more people and to get those people to take action.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/govdelivery"
      },
      {
        id: 162,
        company_name: "Junar",
        founded_year: 2010,
        description:
          "Junar offers a cloud-based open data platform allowing businesses to free their data to drive opportunities, collaboration and transparency.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/junar"
      },
      {
        id: 163,
        company_name: "Meter Feeder",
        founded_year: 2014,
        description:
          "Meter Feeder provides a low cost payment and enforcement solution for small to mid-sized governments.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/meter-feeder"
      },
      {
        id: 164,
        company_name: "MetroTech",
        founded_year: 2011,
        description:
          "MetroTech Net is a software-analytics company, focused on the integration of new technologies for the smarter city.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/metrotech"
      },
      {
        id: 165,
        company_name: "mySidewalk",
        founded_year: 2010,
        description:
          "mySidewalk is a city intelligence tool that helps local analysts track, analyze, and communicate progress on citywide goals.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/mysidewalk"
      },
      {
        id: 166,
        company_name: "PingThings",
        founded_year: 2014,
        description:
          "PingThings is a venture-backed software company, brings best-of-breed big-data software and data science techniques to the utility industry.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/pingthings"
      },
      {
        id: 167,
        company_name: "QScend Technologies, Inc.",
        founded_year: 1998,
        description:
          "QScend Technologies provides Web-based software solutions and services for municipalities.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/qscend-technologies-inc"
      },
      {
        id: 168,
        company_name: "Recovers",
        founded_year: 2011,
        description:
          "Recovers is a software company making disaster preparedness and recovery smarter.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/recovers"
      },
      {
        id: 169,
        company_name: "Seneca Systems",
        founded_year: 2014,
        description:
          "Seneca Systems provides next-generation software purpose-built for government.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/seneca-systems"
      },
      {
        id: 170,
        company_name: "Twenty First Century Utilities",
        founded_year: 2015,
        description:
          "Twenty First Century Utilities, LLC is working to transform regulated utilities with a twenty first century model.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/twenty-first-century-utilities"
      },
      {
        id: 171,
        company_name: "WiredBlue",
        founded_year: 2011,
        description:
          "WiredBlue is an advance technology company focused specifically on law enforcement.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/wiredblue"
      },
      {
        id: 172,
        company_name: "2FA",
        founded_year: 2006,
        description:
          "2FA Inc. is a veteran-owned, cybersecurity company created on the single vision of simplifying authentication.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/2fa"
      },
      {
        id: 173,
        company_name: "AutoGrid",
        founded_year: 2011,
        description:
          "AutoGrid Systems organizes energy data and employs big data analytics to generate real-time predictions that create actionable data.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/autogrid"
      },
      {
        id: 174,
        company_name: "BasicGov Systems",
        founded_year: 2006,
        description:
          "Empowering governments to efficiently serve. BasicGov is a cloud-based SaaS solution making government operations more efficient.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/basicgov"
      },
      {
        id: 175,
        company_name: "BS&A Software",
        founded_year: 1987,
        description:
          "BS&A Software provides integrated systems of financial management and property tax products designed specifically for municipalities.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/bsa-software"
      },

      {
        id: 177,
        company_name: "Captricity",
        founded_year: 2011,
        description:
          "Captricity is a cloud-based service that converts information on paper to digital data rapidly and effectively.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/captricity"
      },
      {
        id: 178,
        company_name: "CityScan",
        founded_year: 2011,
        description:
          "CityScan provides street-level intelligence services for municipalities in the United States.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/cityscan"
      },
      {
        id: 179,
        company_name: "Civil Maps",
        founded_year: 2015,
        description:
          "Civil Maps provides a sensor-agnostic cognition platform that enables real-time mapping+localization and crowdsourcing.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/civilmaps"
      },
      {
        id: 180,
        company_name: "Civinomics",
        founded_year: 2011,
        description:
          "Civinomics is a community-based web platform that provides crowdsourced solutions to local problems and fostering engagement.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/civinomics"
      },
      {
        id: 181,
        company_name: "Connected Bits",
        founded_year: 0,
        description:
          "ConnectedBits develops mobile applications to connect governments and other organizations with their communities.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/connectedbits"
      },
      {
        id: 182,
        company_name: "CrimeStar",
        founded_year: 1999,
        description:
          "Crimestar is an information management tools for law enforcement and public safety.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/crimestar"
      },
      {
        id: 183,
        company_name: "DataMade",
        founded_year: 2012,
        description:
          "DataMade is a civic technology company that builds open source technology using open data.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/datamade"
      },
      {
        id: 184,
        company_name: "DoubleMap",
        founded_year: 2009,
        description:
          "DoubleMap is the provider of an innovative Automatic Vehicle Location (AVL) platform for university and public transit systems.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/doublemap"
      },
      {
        id: 185,
        company_name: "Dropcountr",
        founded_year: 0,
        description:
          "Dropcountr connects people and their utilities on the mobile devices they use everyday.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/dropcountr"
      },
      {
        id: 186,
        company_name: "eGov Strategies",
        founded_year: 2001,
        description:
          "eGov Strategies provides governments with enterprise payment services, content management and additional interactive service delivery tools.",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/egov-strategies"
      },
      {
        id: 187,
        company_name: "EngagePoint",
        founded_year: 2007,
        description:
          "EngagePoint is an IT service company that accelerates the government’s transition to a modern, integrated, sustainable enterprise.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/engagepoint"
      },
      {
        id: 188,
        company_name: "ePermitHub",
        founded_year: 0,
        description:
          "ePermitHub is a web-based portal based in Florida that allows its users to track, review, and inspect their permits.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/epermithub"
      },
      {
        id: 189,
        company_name: "FireStop",
        founded_year: 2013,
        description:
          "FireStop is a cloud-based response software that helps firefighters share critical response information and leverage data in real time.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/firestop"
      },
      {
        id: 190,
        company_name: "GovInvest",
        founded_year: 2014,
        description:
          "GovInvest helps governments visualize and understand complex actuarial data.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/govinvest"
      },
      {
        id: 191,
        company_name: "iWorQ Systems",
        founded_year: 2001,
        description: "iWorQ Systems provides municipal management software.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/iworq"
      },
      {
        id: 192,
        company_name: "LocalData",
        founded_year: 0,
        description:
          "LocalData makes digital tools to collect and analyze information about urban infrastructure.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/localdata"
      },
      {
        id: 193,
        company_name: "Localisto",
        founded_year: 2011,
        description:
          "Localisto is a new way to discover your community. Find topics and events that matter to you with location-based search and preference",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/localisto"
      },
      {
        id: 194,
        company_name: "Loci Controls",
        founded_year: 2013,
        description:
          "Loci Controls is a developer of wireless sensor and actor network devices for optimizing the extraction of methane from landfills.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/loci-controls"
      },
      {
        id: 195,
        company_name: "Loveland Technologies",
        founded_year: 2012,
        description:
          "LOVELAND Technologies develops crowdfunding and social mapping systems, with a unique creative culture and brand that mixes virtualand real.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/loveland"
      },
      {
        id: 196,
        company_name: "Measured Voice",
        founded_year: 2010,
        description:
          "Measured Voice is a social media management tool for government.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/measuredvoice"
      },
      {
        id: 197,
        company_name: "Metropia",
        founded_year: 2012,
        description:
          "Metropia optimizes transportation systems by using behavioral economics to influence drivers to shift departure times, routes and modes.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/metropia"
      },

      {
        id: 199,
        company_name: "Municibid",
        founded_year: 2006,
        description:
          "Municibid is a compliant, online auction and marketing platform.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/municibid"
      },
      {
        id: 200,
        company_name: "MuniLogic Municipal Management Software",
        founded_year: 1973,
        description:
          "MuniLogic provides property management and administration software.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/munilogic"
      },
      {
        id: 201,
        company_name: "MuniRent",
        founded_year: 2014,
        description:
          "MuniRent helps government agencies share heavy duty equipment internally within their fleet.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/munirent"
      },
      {
        id: 202,
        company_name: "Opower",
        founded_year: 2007,
        description:
          "Opower is a SaaS-based customer engagement and energy efficiency company providing the tools consumers need to make better energy decisions.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/opower"
      },

      {
        id: 204,
        company_name: "OppSites",
        founded_year: 2014,
        description:
          "OppSites drives economic development by connecting Cities and Real Estate Professionals in a single marketplace",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/oppsites"
      },
      {
        id: 205,
        company_name: "Peak Democracy",
        founded_year: 2007,
        description:
          "Peak Democracy offers a cloud-based online civic engagement platform called Open Town Hall.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/peak-democracy"
      },
      {
        id: 206,
        company_name: "Placemeter",
        founded_year: 2012,
        description:
          "Placemeter is an urban intelligence platform. We quantify modern cities worldwide. The answers you need are all around you.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/placemeter"
      },
      {
        id: 207,
        company_name: "ProductBio",
        founded_year: 2012,
        description:
          "ProductBio is a database of product category information for the procurement process.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/productbio"
      },
      {
        id: 208,
        company_name: "Revelstone Labs",
        founded_year: 2010,
        description:
          "Revelstone data analytics and reporting platform scaled for small and medium sized jurisidictions.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/revelstone"
      },
      {
        id: 209,
        company_name: "SABR",
        founded_year: 2015,
        description:
          "SABR monitors multiple blockchains to identify and locate criminal activity.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/sabrio"
      },
      {
        id: 210,
        company_name: "SnapSense",
        founded_year: 2011,
        description:
          "To help community leaders lead by harnessing big data at a local level.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/snapsense"
      },
      {
        id: 211,
        company_name: "StreetCred Software",
        founded_year: 2012,
        description: "Fugitive and offender case management",
        official_url: "",
        crunchbase_url:
          "https://www.crunchbase.com/organization/streetcred-software"
      },
      {
        id: 212,
        company_name: "TransparaGov",
        founded_year: 2011,
        description:
          "TransparaGov provides analytical, management, and outcomes measurement software to governments.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/transparagov"
      },
      {
        id: 213,
        company_name: "Urban Engines",
        founded_year: 2014,
        description:
          "Urban Engines combines big data and spatial analytics to improve urban mobility.",
        official_url: "",
        crunchbase_url: "https://www.crunchbase.com/organization/urban-engines"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Companies companies={this.state.companies} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
