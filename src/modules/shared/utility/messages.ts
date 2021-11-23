
export const messages = {
  monthlySearches: {
    id: "monthly-searches",
    placement: "top",
    title: "",
    content: "Global Monthly Searches Estimation",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  networkMatches: {
    id: "network-matches",
    placement: "top",
    title: "",
    content: "Number of Relevant Websites / Competitors",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  score: {
    id: "score",
    placement: "top",
    title: "",
    content: "Difficulty Score 1 - 100 (Higher is Better)",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  keywordsComparison: {
    id: "keywords-comparison",
    placement: "top",
    title: "",
    content: "Keyword Comparison",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  cpc: {
    id: "id_popover",
    placement: "left",
    title: "Cost Per Click",
    content:
      "CPC is the Cost per click when buying CPC. Historical or predicted Click-through rate",
    bottomContent: "",
    color: "#000000",
    background: "",
  },
  KeywordsSuggested: {
    id: "suggested-results",
    placement: "top",
    title: "",
    content: "Suggested Results",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  titleTraffic: {
    id: "titleTraffic",
    placement: "left",
    title: "Total Traffic Estimation",
    content:
      "Combination of top traffic sources to the website, including direct, organic, social and referral.",
    bottomContent: "",
    color: "",
    background: "",
  },
  ageGroup: {
    id: "age-aroup",
    placement: "top",
    title: "",
    content: "Age Group",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  genderTargeted: {
    id: "gender-targeted",
    placement: "top",
    title: "",
    content: "Select Gender Targeted Group",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  devicesTargeted: {
    id: "devices-targeted",
    placement: "top",
    title: "",
    content: "Mobile, Desktop Devices",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  BrowserTargeted: {
    id: "browser-targeted",
    placement: "top",
    title: "",
    content: "Select Browser (User Agent)",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  osTargeted: {
    id: "os-targeted",
    placement: "top",
    title: "",
    content: "Operating System Targeting",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  contentcategoryTargeted: {
    id: "content-category",
    placement: "top",
    title: "",
    content: "Select a Business Category/Niche",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  locationTargeted: {
    id: "location-targeted",
    placement: "top",
    title: "",
    content: "Geo-Targeting",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  KeywordSelection: {
    id: "keyword-selection",
    placement: "top",
    title: "",
    content: "Additional Keyword Selection",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
  savedlist: {
    id: "saved-list",
    placement: "top",
    title: "",
    content: "Select Keywords from Saved Lists",
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
} as Record<
  string,
  {
    id: string;
    placement: "top" | "bottom" | "left" | "right";
    title: string;
    content: string;
    bottomContent: string;
    color: string;
    background: string;
  }
>;

export const goalsStepOne = {
  0: "Maximum Impressions",
  1: "Maximum Impressions",
  2: "",
  3: "Maximum CTR",
  4: "",
  5: "",
  6: "Maximum Sign-ups, Sales",
  7: "Maximum Sign-ups, Sales",
  8: "Maximum Sign-ups, Sales",
} as Record<number, string>;

export const popoverOfManageCampaign = {
  ctr: {
    id: "ctr",
    placement: "left",
    title: "Click-Through Rate",
    content: `The CTR, Click-through rate
    The share of the ad impressions that leads to a click.`,
    bottomContent:
      "If you have 10,000 ad impressions and 20 clicks, you got a CTR of 0.002 or 0.2%.",
    color: "",
    background: "",
  },
  ctrUnique: {
    id: "ctr-unique",
    placement: "left",
    title: "Unique (Visitors) Click-Trough Rate",
    content: `CTR Unique
    The number of people who clicked on the ad divided by the number of people you reached. `,
    bottomContent: `For example, 
    if you received twenty unique clicks and the ad was served to 1,000 unique people, your unique click-through-rate (CTR) would be 2%.`,
    color: "",
    background: "",
  },
  ecpa: {
    id: "ecpa",
    placement: "left",
    title: "Effective Cost-per-Aquisition",
    content: `The CTR, Click-through rate
    The share of the ad impressions that leads to a click.`,
    bottomContent: `eCPA 
    Effective cost per action or acquisition in online advertising. This definition also applies to eCPO and eCPL, it's just a matter of the definition of what you measure (actions, acquisitions, orders or leads).`,
    color: "",
    background: "",
  },
  ecpc: {
    id: "ecpc",
    placement: "left",
    title: "Effective Cost-per-Click",
    content: `eCPC 
    Effective cost per click in online advertising.`,
    bottomContent: "",
    color: "",
    background: "",
  },
  ecpm: {
    id: "ecpm",
    placement: "left",
    title: "Effective-Cost-per-Mile (per 1000)",
    content: `eCPM 
    Effective cost per thousand advertising impressions in online advertising. Mille is the latin word for thousand.`,
    bottomContent: "",
    color: "rgb(51,51,51)",
    background: "rgb(27,255,118)",
  },
} as Record<
  string,
  {
    id: string;
    placement: "top" | "bottom" | "left" | "right";
    title: string;
    content: string;
    bottomContent: string;
    color: string;
    background: string;
  }
>;

interface LabeledValue {
  data: {
    customName: string;
    id: string;
    placement: string;
    title: string;
    content: string;
    bottomContent: string;
    color: string;
    background: string;
  }[];
}

function printLabel(getmyObj: LabeledValue) {
  console.table(getmyObj.data);
}

export const myObj = {
  data: [
    {
      customName: "ecpm",
      id: "ecpm",
      placement: "left",
      title: "Effective-Cost-per-Mile (per 1000)",
      content: `eCPM 
      Effective cost per thousand advertising impressions in online advertising. Mille is the latin word for thousand.`,
      bottomContent: "",
      color: "rgb(51,51,51)",
      background: "rgb(27,255,118)",
    },
    {
      customName: "ecpc",
      id: "ecpm",
      placement: "left",
      title: "Effective-Cost-per-Mile (per 1000)",
      content: `eCPM 
      Effective cost per thousand advertising impressions in online advertising. Mille is the latin word for thousand.`,
      bottomContent: "",
      color: "rgb(51,51,51)",
      background: "rgb(27,255,118)",
    },
  ],
};

printLabel(myObj);
