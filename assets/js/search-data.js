// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-tams-lab",
          title: "TAMS Lab",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-dr-tang-is-selected-as-one-of-the-30-robotics-pioneers-for-2023",
          title: 'Dr. Tang is selected as one of the 30 Robotics Pioneers for 2023!...',
          description: "",
          section: "News",},{id: "news-we-organized-the-workshop-on-the-development-of-socially-compliant-driving-behaviour-for-automated-vehicles-at-ieee-iv-2023",
          title: 'We organized the Workshop on the Development of Socially-compliant Driving Behaviour for Automated...',
          description: "",
          section: "News",},{id: "news-dr-tang-gave-an-invited-talk-at-the-workshop-on-social-interactive-and-safe-behaviors-for-avs-benchmarks-models-and-applications-at-ieee-iv-2023",
          title: 'Dr. Tang gave an invited talk at the Workshop on Social, Interactive and...',
          description: "",
          section: "News",},{id: "news-the-paper-editing-driver-character-socially-controllable-behavior-generation-for-interactive-traffic-simulation-is-accepted-for-ra-l",
          title: 'The paper “Editing driver character: socially-controllable behavior generation for interactive traffic simulation” is...',
          description: "",
          section: "News",},{id: "news-dr-tang-started-as-a-postdoctoral-fellow-in-larg-at-ut-austin",
          title: 'Dr. Tang started as a Postdoctoral Fellow in LARG at UT Austin!',
          description: "",
          section: "News",},{id: "news-the-paper-residual-q-learning-offline-and-online-policy-customization-without-value-is-accepted-for-neurips-2023-checkout-the-paper-code-and-website",
          title: 'The paper “Residual Q-learning: Offline and online policy customization without value” is accepted...',
          description: "",
          section: "News",},{id: "news-we-organized-the-workshop-on-scenario-and-behavior-diversity-in-simulation-for-autonomous-vehicle-validation-at-ieee-iavvc-2023",
          title: 'We organized the Workshop on Scenario and Behavior Diversity in Simulation for Autonomous...',
          description: "",
          section: "News",},{id: "news-the-paper-guided-online-distillation-promoting-safe-reinforcement-learning-by-offline-demonstration-is-accepted-for-icra-2024-and-the-ra-l-paper-editing-driver-character-socially-controllable-behavior-generation-for-interactive-traffic-simulation-will-also-be-presented-at-icra-2024",
          title: 'The paper “Guided Online Distillation: Promoting Safe Reinforcement Learning by Offline Demonstration” is...',
          description: "",
          section: "News",},{id: "news-the-paper-quantifying-interaction-level-between-agents-helps-cost-efficient-generalization-in-multi-agent-reinforcement-learning-is-accepted-for-rlc-2024-checkout-the-code-and-paper",
          title: 'The paper “Quantifying interaction level between agents helps cost-efficient generalization in multi-agent reinforcement...',
          description: "",
          section: "News",},{id: "news-the-paper-betail-behavior-transformer-adversarial-imitation-learning-from-human-racing-gameplay-is-accepted-for-ra-l-check-out-the-website-and-code",
          title: 'The paper “BeTAIL: Behavior transformer adversarial imitation learning from human racing gameplay” is...',
          description: "",
          section: "News",},{id: "news-the-paper-grounded-relational-inference-domain-knowledge-driven-explainable-autonomous-driving-is-accepted-for-ieee-transactions-on-intelligent-transportation-systems-t-its",
          title: 'The paper “Grounded relational inference: Domain knowledge-driven explainable autonomous driving” is accepted for...',
          description: "",
          section: "News",},{id: "news-the-paper-learning-online-belief-prediction-for-efficient-pomdp-planning-in-autonomous-driving-is-accepted-for-ra-l",
          title: 'The paper “Learning online belief prediction for efficient POMDP planning in autonomous driving”...',
          description: "",
          section: "News",},{id: "news-the-paper-active-exploration-in-iterative-gaussian-process-regression-for-uncertainty-modeling-in-autonomous-racing-is-accepted-for-ieee-transactions-on-control-systems-technology-t-cst",
          title: 'The paper “Active exploration in iterative gaussian process regression for uncertainty modeling in...',
          description: "",
          section: "News",},{id: "news-the-paper-pre-training-on-synthetic-driving-data-for-trajectory-prediction-is-accepted-for-iros-2024-and-the-ra-l-paper-skill-critic-refining-learned-skills-for-hierarchical-reinforcement-learning-is-accepted-for-oral-presentation-at-iros-2024-check-out-the-website-and-code",
          title: 'The paper “Pre-training on synthetic driving data for trajectory prediction” is accepted for...',
          description: "",
          section: "News",},{id: "news-the-paper-optimizing-diffusion-models-for-joint-trajectory-prediction-and-controllable-generation-is-accepted-for-eccv-2024-check-out-the-website-and-code",
          title: 'The paper “Optimizing diffusion models for joint trajectory prediction and controllable generation” is...',
          description: "",
          section: "News",},{id: "news-checkout-the-survey-paper-deep-reinforcement-learning-for-robotics-a-survey-of-real-world-successes-it-will-appear-on-annual-review-of-control-robotics-and-autonomous-systems-2025",
          title: 'Checkout the survey paper “Deep reinforcement learning for Robotics: A Survey of Real-World...',
          description: "",
          section: "News",},{id: "news-the-paper-residual-mppi-online-policy-customization-for-continuous-control-is-accepted-for-iclr-2025-checkout-the-paper-code-and-website",
          title: 'The paper “Residual-MPPI: Online Policy Customization for Continuous Control” is accepted for ICLR...',
          description: "",
          section: "News",},{id: "news-the-paper-womd-reasoning-a-large-scale-dataset-and-benchmark-for-interaction-and-intention-reasoning-in-driving-is-accepted-for-icml-2025-you-can-download-the-womd-reasoning-dataset-from-waymo-s-official-site-checkout-the-paper-and-code-for-more-details",
          title: 'The paper “WOMD-Reasoning: A Large-Scale Dataset and Benchmark for Interaction and Intention Reasoning...',
          description: "",
          section: "News",},{id: "news-three-papers-on-social-robot-navigation-socialnav-sub-and-composablenav-and-learning-from-human-intervention-mereq-are-accepted-for-corl-2025",
          title: 'Three papers on social robot navigation (SocialNav-SUB and ComposableNav) and learning from human...',
          description: "",
          section: "News",},{id: "news-dr-tang-is-serving-as-an-associate-editor-for-the-ieee-intelligent-vehicles-symposium-iv-2025-2026",
          title: 'Dr. Tang is serving as an Associate Editor for the IEEE Intelligent Vehicles...',
          description: "",
          section: "News",},{id: "news-dr-tang-gave-an-invited-talk-at-the-workshop-on-the-future-of-work-in-the-age-of-robotics-and-ai-at-the-ieee-international-conference-on-automation-science-and-engineering-case-2025",
          title: 'Dr. Tang gave an invited talk at the Workshop on The Future of...',
          description: "",
          section: "News",},{id: "news-dr-tang-gave-an-invited-talk-at-the-foundation-models-for-control-fm4control-bridging-language-vision-and-control-workshop-at-the-5th-modeling-estimation-and-control-conference-mecc-2025",
          title: 'Dr. Tang gave an invited talk at the Foundation Models for Control (FM4Control):...',
          description: "",
          section: "News",},{id: "news-dr-tang-joins-ucla-cee-as-assistant-professor",
          title: 'Dr. Tang joins UCLA CEE as Assistant Professor.',
          description: "",
          section: "News",},{id: "news-the-paper-coopreflect-towards-natural-language-communication-for-cooperative-autonomous-driving-via-multi-agent-learning-is-accepted-for-aamas-2026-checkout-the-paper-code-and-website",
          title: 'The paper “CoopReflect: Towards Natural Language Communication for Cooperative Autonomous Driving via Multi-Agent...',
          description: "",
          section: "News",},{id: "news-dr-tang-received-a-tier-2-sandbox-grant-educational-innovation-grants-program-from-the-ucla-teaching-and-learning-center-to-support-the-new-graduate-course-cee-298-human-centered-autonomy-for-mobility-systems",
          title: 'Dr. Tang received a Tier-2 Sandbox Grant (Educational Innovation Grants Program) from the...',
          description: "",
          section: "News",},{id: "news-the-paper-tic-vla-a-think-in-control-vision-language-action-model-for-robot-navigation-in-dynamic-environments-is-accepted-for-icml-2026-checkout-the-paper-code-and-website",
          title: 'The paper “TIC-VLA: A Think-in-Control Vision-Language-Action Model for Robot Navigation in Dynamic Environments”...',
          description: "",
          section: "News",},{id: "news-the-paper-simple-recipe-works-vision-language-action-models-are-natural-continual-learners-with-reinforcement-learning-is-accepted-for-rlc-2026-checkout-the-paper-and-code",
          title: 'The paper “Simple Recipe Works: Vision-Language-Action Models are Natural Continual Learners with Reinforcement...',
          description: "",
          section: "News",},{id: "news-dr-tang-gave-an-invited-talk-at-the-ece-seminar-series-university-of-california-riverside",
          title: 'Dr. Tang gave an invited talk at the ECE Seminar Series, University of...',
          description: "",
          section: "News",},{id: "news-the-paper-simple-recipe-works-received-the-best-paper-award-at-the-icra-2026-workshop-on-reinforcement-learning-in-the-era-of-imitation-learning-rl4il-checkout-the-paper-and-code",
          title: 'The paper “Simple Recipe Works” received the Best Paper Award at the ICRA...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%74%61%6E%67%61%63@%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chen-tang-08377b5b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=x78TL58AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ChenTangMark", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
