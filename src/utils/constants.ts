export const DEAFULT_QUESTIONS = [
  // {
  //   question: "What is your name?",
  //   type: 0,
  // },
  {
    question: "What is your age?",
    type: 1,
  },
  {
    question: "What is your ethnicity?",
    type: 2,
    options: [
      "Caucasian",
      "African American",
      "Hispanic",
      "Asian",
      "Native American",
      "Other",
    ],
    calculateChange: (v: any) => {
      switch (v[0]) {
        case 0:
          return 0;
        case 1:
          case 3:
            return 0.5;
        case 2:
          return 0.3;
        case 4:
          return 0.2;
        default:
          return 0;
      }
    }
  },
  {
    question: "Has your mother/sister experinced early menopause?",
    type: 2,
    options: [
      "Yes",
      "No",
    ],
    calculateChange: (v: any) => v[0] === 0 ? -3 : 0,
  },
  {
    question: "What is your exercise schedule?",
    type: 2,
    options: [
      "None",
      "1-2 days a week",
      "2-4 days a week",
      "4-6 days a week",
      "Everyday",
    ],
    calculateChange: (v: any) => {
      switch (v[0]) {
        case 0:
          return -0.2;
        case 1:
        case 2:
          return 0.2;
        case 3:
          return 0.5;
        case 4:
          return 1;
        default:
          return 0;
      }
    }
  },
  {
    question: "How would you describe your hormone level?",
    type: 2,
    options: [
      "Low",
      "Normal",
      "High",
    ],
    calculateChange: (v: any) => {
      switch (v[0]) {
        case 0:
          return -1.5;
        case 1:
          return 0;
        case 2:
          return 1;
        default:
          return 0;
      }
    }
  },
  // {
  //   question: "At what age your menstrual cycle was started?",
  //   type: 1,
  //   calculateChange: (v: any) => {
  //     if (v > 14) return -1;
  //     else if (v < 11) return 1;
  //     else return 0;
  //   }
  // },
  {
    question: "Have you noticed any changes in your menstrual cycle in last year?",
    type: 2,
    options: [
      "Yes",
      "No",
    ],
    calculateChange: (v: any) => v[0] === 0 ? -1 : 0,
  },
  {
    question: "Have you ever been pregnant?",
    type: 2,
    options: [
      "Yes",
      "No",
    ],
    calculateChange: (v: any) => v[0] === 0 ? 1 : 0,
  },
  {
    question: "You have ever used OCP?",
    type: 2,
    options: [
      "Yes, I use it",
      "Yes, I have used it previously",
      "No",
    ],
    calculateChange: (v: any) => {
      switch (v[0]) {
        case 0:
          return 0.5;
        case 1:
          return 0.2;
        case 2:
        default:
          return 0;
      }
    }
  },
  {
    question: "What is your BMI?",
    type: 1,
    isBmi: true,
    calculateChange: (v: any) => {
      if (v <= 18.5) return 1;
      else if (v >= 30) return -0.5;
      else return 0;
    }
  },
  {
    question: "How would you describe your diet?",
    type: 2,
    options: [
      "Balanced",
      "High in processed food",
      "Healthy",
    ],
    calculateChange: (v: any) => {
      switch (v[0]) {
        case 0:
          return 1;
        case 1:
          return -0.5;
        case 2:
          return 1.5;
        default:
          return 0;
      }
    }
  },
  {
    question: "Are you experincing any symptoms?",
    type: 3,
    options: [
      "Hot Flashes",
      "Night Sweats",
      "Mood Swings",
      "Sleep Disturbance",
      "None",
    ],
    calculateChange: (v: any) => {
      let res = 0;

      for (let i = 0; i < v.length; i++) {
        if ([0, 1].includes(v[i])) res += -1;
        if ([2, 3].includes(v[i])) res += -0.5;
        if (v[i] === 5) res += -1.3;
      }

      return res;
    }
  },
  {
    question: "Do you have any chronic health conditions?",
    type: 3,
    options: [
      "Diabetes",
      "Thyroid",
      "Heart Disease",
      "None"
    ],
    calculateChange: (v: any) => {
      let res = 0;

      for (let i = 0; i < v.length; i++) {
        switch (v[i]) {
          case 0:
            res += -1;
            break;

          case 1:
            res += -0.5;
            break;

          case 2:
            res += -1;
            break;

          default:
            res += 0;
            break;
        }
      }

      return res;
    }
  },
];