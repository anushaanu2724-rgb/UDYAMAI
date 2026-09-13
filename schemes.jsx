import { useState } from "react"
function Schemes() {
  const [selectedScheme,setSelectedScheme] = useState(null);
  const savedDetails = localStorage.getItem("udyamaiUserDetails");

let userDetails = {};

try {
  userDetails = savedDetails ? JSON.parse(savedDetails) : {};
} catch (error) {
  console.log("Invalid saved details:", error);
}

  const businessType =
    userDetails.businessType?.toLowerCase().trim() || "";

  const schemes = [
    {
      name: "PMEGP",
      description:
        "Credit-linked subsidy scheme for setting up new micro enterprises.",
      category: "Business",
      details:
        "PMEGP provides financial assistance for eligible new micro enterprises in the manufacturing and service sectors.",
      eligibility:
    "Individuals above 18 years can apply for eligible new projects. For projects above the specified cost limits, minimum VIII standard qualification is required. Existing units that have already received government subsidy are generally not eligible.",

  benefits: [
    "Credit-linked subsidy support for eligible new micro enterprises.",
    "Supports self-employment and employment generation.",
    "Available for eligible manufacturing and business/service activities.",
    "Loan and subsidy support is routed through participating financial institutions."
  ],

  documents: [
    "Aadhaar card",
    "Passport-size photographs",
    "Educational qualification certificate, if applicable",
    "Caste / special category certificate, if applicable",
    "Project Report",
    "Rural area certificate, if applicable",
    "EDP training certificate, if completed"
  ],

  howToApply: [
    "Check your eligibility and project eligibility.",
    "Prepare your project report.",
    "Keep the required documents ready.",
    "Submit the application through the official PMEGP portal.",
    "Complete the required bank and EDP formalities."
  ],

  applyUrl:
    "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
        keywords: [
        "business",
        "shop",
        "tailoring",
        "manufacturing",
        "service",
        "workshop",
      ],
    },

    {
      name: "MUDRA Yojana",
      description:
        "Loans to support small businesses, entrepreneurs and self-employed people.",
      category: "Finance",
      details:
        "MUDRA Yojana provides loans to eligible micro and small businesses and self-employed individuals based on their business and funding needs.",
      eligibility:
    "Eligible individuals and micro enterprises with an income-generating business activity can apply through participating lending institutions. Eligible activities include manufacturing, trading, services and certain agriculture-allied activities.",

  benefits: [
    "Collateral-free credit support for eligible borrowers.",
    "Shishu loans up to ₹50,000.",
    "Kishore loans above ₹50,000 and up to ₹5 lakh.",
    "Tarun loans above ₹5 lakh and up to ₹10 lakh.",
    "Tarun Plus loans above ₹10 lakh and up to ₹20 lakh for eligible previous Tarun borrowers."
  ],

  documents: [
    "Identity proof",
    "Address proof",
    "PAN details",
    "Business / enterprise details, if applicable",
    "Bank account details",
    "Business plan or project details, as required",
    "Other documents requested by the lending institution"
  ],

  howToApply: [
    "Check your eligibility and funding requirement.",
    "Choose a participating lending institution.",
    "Prepare the required business and financial documents.",
    "Submit the loan application.",
    "Complete the verification and lending formalities."
  ],

  applyUrl:
    "https://www.mudra.org.in/",
        keywords: [
        "business",
        "shop",
        "tailoring",
        "food",
        "restaurant",
        "salon",
        "service",
        "small business",
      ],
    },

    {
      name: "Stand-Up India",
      description:
        "Financial support for eligible SC, ST and women entrepreneurs.",
      category: "Entrepreneurship",
      details:
        "Stand-Up India supports eligible entrepreneurs who want to start a new business in the manufacturing, services or trading sectors.",
      eligibility:
    "The original Stand-Up India scheme covered women and SC/ST entrepreneurs above 18 years for eligible greenfield enterprises in manufacturing, services, trading and activities allied to agriculture. The original scheme period ended on 31 March 2025. A new scheme for women, SC and ST first-time entrepreneurs was announced subsequently, with implementation details being prepared.",

  benefits: [
    "The original scheme provided bank loans between ₹10 lakh and ₹1 crore.",
    "Supported eligible greenfield enterprises.",
    "Covered manufacturing, services, trading and eligible agriculture-allied activities.",
    "Provided handholding and guidance support for prospective entrepreneurs."
  ],

  documents: [
    "Identity proof",
    "Address proof",
    "PAN details",
    "Business / enterprise details",
    "Project report",
    "Category certificate, if applicable",
    "Bank and financial documents, as required by the lending institution"
  ],

  howToApply: [
    "Check the latest eligibility and scheme status.",
    "Prepare the business plan and project report.",
    "Keep the required documents ready.",
    "Approach the applicable bank or official government portal.",
    "Complete the required verification and lending formalities."
  ],

  applyUrl:
    "https://financialservices.gov.in/stand-india-scheme-supi",
        keywords: [
        "business",
        "startup",
        "manufacturing",
        "service",
        "shop",
        "entrepreneur",
      ],
    },

    {
      name: "PMFME",
      description:
        "Financial support for eligible micro food processing enterprises.",
      category: "Food Processing",
      details:
        "PMFME provides support to eligible micro food processing enterprises for improving their business and food processing activities.",
      eligibility:
    "Eligible individual micro food processing units and certain groups such as SHGs, FPOs, FPCs and cooperatives can receive support subject to scheme guidelines and eligibility conditions.",

  benefits: [
    "Credit-linked capital subsidy of 35% of eligible project cost for individual units, subject to a maximum of ₹10 lakh per unit.",
    "Support for upgrading existing micro food processing units.",
    "Support for eligible new food processing units.",
    "Training and technical support for beneficiaries.",
    "Support for branding and marketing for eligible groups.",
    "One District One Product (ODOP) approach for selected food products."
  ],

  documents: [
    "Aadhaar / identity proof",
    "PAN details",
    "Address proof",
    "Bank account details",
    "Business / enterprise details",
    "Project report",
    "Land / premises documents, if applicable",
    "Category certificate, if applicable",
    "Other documents required by the implementing agency or bank"
  ],

  howToApply: [
    "Check your eligibility and the applicable food product / ODOP requirements.",
    "Prepare your business plan and project report.",
    "Keep the required documents ready.",
    "Submit the application through the official PMFME process.",
    "Complete the required bank and verification formalities."
  ],

  applyUrl:
    "https://pmfme.mofpi.gov.in/",
        keywords: [
        "food",
        "food business",
        "food processing",
        "pickle",
        "bakery",
        "dairy",
        "spices",
        "papad",
        "snacks",
        "restaurant",
      ],
    },

    {
      name: "Agriculture Infrastructure Fund",
      description:
        "Financial support for eligible agriculture infrastructure projects.",
      category: "Agriculture",
      details:
        "Provides financial support for eligible agriculture infrastructure projects. Interest subvention of 3% per annum is available on eligible loans up to ₹2 crore, for a maximum period of 7 years.",
        eligibility:
  "Eligible entities with eligible agriculture infrastructure projects may apply under the Agriculture Infrastructure Fund.",

benefits: [
  "Interest subvention of 3% per annum on eligible loans.",
  "Credit guarantee support may be available for eligible loans up to ₹2 crore.",
  "Supports eligible post-harvest management infrastructure and community farming assets."
],

documents: [
  "Identity proof, as applicable",
  "PAN details",
  "Bank account details",
  "Business / entity registration documents, if applicable",
  "Project site and land-related documents, as applicable",
  "Project Report / Detailed Project Report (DPR)",
  "Financial and banking details, as required",
  "Other supporting documents requested by the lending institution"
],

howToApply: [
  "Check your eligibility and project eligibility.",
  "Prepare the project details and DPR.",
  "Keep the required supporting documents ready.",
  "Submit the application through the applicable AIF process.",
  "Complete the required formalities with the lending institution."
],

applyUrl: "https://agriinfra.dac.gov.in/",
      keywords: [
        "agriculture",
        "farming",
        "farmer",
        "agri",
        "agricultural",
      ],
    },
  ];

  const matchedSchemes = schemes.filter((scheme) =>
    scheme.keywords.some((keyword) => {
      const K = keyword.toLowerCase().trim();

      return (
        businessType === K ||
        businessType.includes(K) ||
        K.includes(businessType)
      );
    })
  );

  return (
    <div className="schemes-page">

      <section className="schemes-hero">
        <h1>Government Schemes</h1>

        <p>
          Explore government schemes and find the right support
          for your business.
        </p>

        <button className="primary">
          Find Suitable Schemes
        </button>
      </section>


      <section className="scheme-list">

        <h2>Available Schemes</h2>

        {matchedSchemes.length > 0 ? (

          <div className="scheme-grid">

            {matchedSchemes.map((scheme) => (

              <div
                className="scheme-card"
                key={scheme.name}
              >

                <span className="scheme-category">
                  {scheme.category}
                </span>

                <h3>
                  {scheme.name}
                </h3>

                <p>
                  {scheme.description}
                </p>

                <button
                  className="secondary"
                  onClick={() =>{
                    console.log("BUTTON CLICKED:",scheme);
                    setSelectedScheme(scheme);
                  }}
                    
                >
                  View Details
                </button>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-schemes">

            <h3>
              No matching schemes found
            </h3>

            <p>
              We could not find a matching scheme for your
              business type. Please try another business type.
            </p>

          </div>

        )}

      </section>


      <section className="help-section">

        <h2>
          Need Help?
        </h2>

        <p>
          UDYAMAI helps you discover the right government
          support for your business.
        </p>

      </section>
{selectedScheme && (
        <div className="modal-overlay">
          <div className="scheme-modal">
            <button
              className="modal-close"
              onClick={() => setSelectedScheme(null)}
            >
              
            </button>

            <span className="scheme-category">
              {selectedScheme.category}
            </span>

            <h2>{selectedScheme.name}</h2>

            <p>{selectedScheme.description}</p>

          <div className="modal-details">

  <h3>Eligibility</h3>
  <p>{selectedScheme.eligibility}</p>

  <h3>Benefits</h3>
  <ul>
    {selectedScheme.benefits?.map((benefit, index) => (
      <li key={index}>{benefit}</li>
    ))}
  </ul>

  <h3>Documents Required</h3>
  <ul>
    {selectedScheme.documents?.map((document, index) => (
      <li key={index}>{document}</li>
    ))}
  </ul>

  <h3>How to Apply</h3>
  <ol>
    {selectedScheme.howToApply?.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ol>

</div>
{selectedScheme.applyUrl && (
  <a
    href={selectedScheme.applyUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="primary"
  >
    Apply Now
  </a>
)}

            <button
              className="primary"
              onClick={() => setSelectedScheme(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Schemes;