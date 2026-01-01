import { WorkbookData } from "@/types/workbook";

export const initialWorkbookData: WorkbookData = {
  title: "Model Parenting Workbook",
  pages: [
    {
      id: "page-1",
      type: "foundation",
      title: "FOUNDATION",
      subtitle: "of Model Parenting",
      sections: [
        {
          id: "s1-1",
          type: "subheader",
          content: "Overview of the Model Parenting Approach",
          editable: true
        },
        {
          id: "s1-2",
          type: "paragraph",
          content: "Children learn what to become by watching how we live, respond, and repair – not by being controlled or corrected into compliance.",
          editable: true
        },
        {
          id: "s1-3",
          type: "paragraph",
          content: "This framework covers the 7 core tools – but each tool may address different challenges based on context.",
          editable: true
        },
        {
          id: "s1-4",
          type: "list",
          content: "Core Principles:",
          items: [
            "Children are not giving us a hard time – They are having a hard time.",
            "Behavior is communication",
            "Connection precedes correction",
            "Skills are taught, not demanded",
            "Repair is more powerful than perfection"
          ],
          editable: true
        }
      ]
    },
    {
      id: "page-2",
      type: "tool",
      title: "TOOL 1:",
      subtitle: "ANCHORING",
      sections: [
        {
          id: "s2-1",
          type: "subheader",
          content: "Regulation Before Correction",
          editable: true
        },
        {
          id: "s2-2",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s2-3",
          type: "list",
          content: "",
          items: [
            "How were mistakes handled in your home growing up?",
            "Were emotions welcomed, ignored, or punished?",
            "What did you learn about obedience, discipline, and worth?"
          ],
          editable: true
        },
        {
          id: "s2-4",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s2-5",
          type: "list",
          content: "",
          items: [
            "When your child struggles, what is your instinctive response?",
            "Do you notice yourself repeating patterns from your childhood?",
            "Which parenting moments feel most activating for you?"
          ],
          editable: true
        },
        {
          id: "s2-6",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s2-7",
          type: "list",
          content: "",
          items: [
            "What kind of adult son, has hope your child becomes?",
            "What values do you want to model daily?",
            "What would change if parenting felt guided instead of reactive?"
          ],
          editable: true
        }
      ]
    },
    {
      id: "page-3",
      type: "reflection",
      title: "Reflection:",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s3-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s3-2",
          type: "list",
          content: "",
          items: [
            "How were big emotions handled in your childhood?",
            "Were you taught coping strategies or left to figure it out?",
            "Did you feel safe expressing sadness, anger, or fear?"
          ],
          editable: true
        },
        {
          id: "s3-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s3-4",
          type: "list",
          content: "",
          items: [
            "What triggers you most in your parenting?",
            "Do you respond from calm or react from stress?",
            "Which parenting moments feel most challenging for you?"
          ],
          editable: true
        },
        {
          id: "s3-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s3-6",
          type: "list",
          content: "",
          items: [
            "How do you want your child to regulate as an adult?",
            "What anchoring tools can you practice that last?"
          ],
          editable: true
        }
      ]
    },
    {
      id: "page-4",
      type: "tool",
      title: "TOOL 1:",
      subtitle: "Anchoring",
      sections: [
        {
          id: "s4-1",
          type: "subheader",
          content: "TOL 1: Anchoring",
          editable: true
        },
        {
          id: "s4-2",
          type: "paragraph",
          content: "Anchoring means learning to regulate yourself before responding to our child.",
          editable: true
        },
        {
          id: "s4-3",
          type: "list",
          content: "",
          items: [
            "Children are not giving us a hard time – They are having a hard time.",
            "Behavior is communication",
            "Connection precedes correction",
            "Skills are taught, not demanded",
            "Repair is more powerful than perfection"
          ],
          editable: true
        },
        {
          id: "s4-4",
          type: "quote",
          content: "Model Parenting isn't about being a perfect parent – it's about showing your child how to handle imperfection with grace.",
          editable: true
        },
        {
          id: "s4-5",
          type: "paragraph",
          content: "You can not expect children to regulate emotions you haven't modeled – become what you want them to become.",
          editable: true
        }
      ]
    },
    {
      id: "page-5",
      type: "weekly",
      title: "Weekly Focus &",
      subtitle: "Goals (Fridge Sheet)",
      sections: [
        {
          id: "s5-1",
          type: "subheader",
          content: "THIS WEEK'S FOCUS: Anchoring",
          editable: true
        },
        {
          id: "s5-2",
          type: "list",
          content: "",
          items: [
            "Breathing before reacting",
            "Setting firm — but safe keeping room",
            "Exploring what went well today?",
            "Pausing correction until calm returns"
          ],
          editable: true
        },
        {
          id: "s5-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s5-4",
          type: "list",
          content: "",
          items: [
            "What triggers me most when my child is dysregulated?",
            "Do you respond calmly or react from stress?",
            "What values am I modeling today?"
          ],
          editable: true
        },
        {
          id: "s5-5",
          type: "header",
          content: "FUTURE:",
          editable: true
        },
        {
          id: "s5-6",
          type: "list",
          content: "",
          items: [
            "How do I want my child to regulate as an adult?",
            "What anchoring tools can you practice this week?"
          ],
          editable: true
        }
      ]
    },
    {
      id: "page-6",
      type: "faith",
      title: "TOOL 1:",
      subtitle: "Anchoring",
      sections: [
        {
          id: "s6-1",
          type: "subheader",
          content: "THIS WEEK'S TOOL:",
          editable: true
        },
        {
          id: "s6-2",
          type: "header",
          content: "Anchoring",
          editable: true
        },
        {
          id: "s6-3",
          type: "paragraph",
          content: "God models patience, guidance, correction and repair – not control.",
          editable: true
        },
        {
          id: "s6-4",
          type: "scripture",
          content: "SCRIPTURE: Proverbs 22:6\n\"Train up a child in the way he should go.\"",
          editable: true
        },
        {
          id: "s6-5",
          type: "subheader",
          content: "FAITH REMINDER:",
          editable: true
        },
        {
          id: "s6-6",
          type: "list",
          content: "",
          items: [
            "God corrects from love, not frustration",
            "God teaches over time",
            "God stays present through failure"
          ],
          editable: true
        },
        {
          id: "s6-7",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s6-8",
          type: "quote",
          content: "God, help me parent from wisdom, not fear. Help me model what I hope my child becomes.",
          editable: true
        }
      ]
    },
    {
      id: "page-7",
      type: "tool",
      title: "TOOL 1:",
      subtitle: "Anchoring",
      sections: [
        {
          id: "s7-1",
          type: "subheader",
          content: "TweetTECKtion",
          editable: true
        },
        {
          id: "s7-2",
          type: "paragraph",
          content: "Shifting from reactive parenting to model parenting",
          editable: true
        },
        {
          id: "s7-3",
          type: "subheader",
          content: "What I'm practicing:",
          editable: true
        },
        {
          id: "s7-4",
          type: "list",
          content: "",
          items: [
            "Slowing down before responding",
            "Seeing behavior as communication",
            "Leading with connection",
            "Modeling what I want my child to learn"
          ],
          editable: true
        },
        {
          id: "s7-5",
          type: "quote",
          content: "I am the example my child is learning from.",
          editable: true
        }
      ]
    },
    {
      id: "page-8",
      type: "faith",
      title: "TOOL 1:",
      subtitle: "Faith-Based Anchoring",
      sections: [
        {
          id: "s8-1",
          type: "diagram",
          content: "Calm → Safety → Belonging → Values → Confidence",
          editable: true
        },
        {
          id: "s8-2",
          type: "subheader",
          content: "WISDOM",
          editable: true
        },
        {
          id: "s8-3",
          type: "quote",
          content: "Progress over perfection",
          editable: true
        }
      ]
    },
    {
      id: "page-9",
      type: "checklist",
      title: "Anchoring Tools",
      subtitle: "",
      sections: [
        {
          id: "s9-1",
          type: "checklist",
          content: "Daily Anchoring Practices:",
          items: [
            "Sit on the floor",
            "Touch a wall or solid surface",
            "Hand on chest",
            "Slow breathing",
            "Pausing correction until calm returns"
          ],
          editable: true
        },
        {
          id: "s9-2",
          type: "subheader",
          content: "7-DAY CHECK IN:",
          editable: true
        }
      ]
    }
  ]
};
