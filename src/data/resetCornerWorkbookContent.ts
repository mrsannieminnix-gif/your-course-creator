import { WorkbookData } from "@/types/workbook";

export const resetCornerWorkbookData: WorkbookData = {
  title: "Toolbox for Parents - Reset Corner",
  pages: [
    // Page 0: How Do I Feel & What Can I Do?
    {
      id: "reset-0",
      type: "visuals",
      section: 1,
      sectionTitle: "Reset Corner",
      title: "How Do I Feel?",
      subtitle: "And what can I do about it",
      sections: [
        {
          id: "reset-0-visual",
          type: "mantra-visual",
          content: "feelings-and-fixes",
          editable: false,
        },
      ],
    },
    {
      id: "reset-1",
      type: "visuals",
      section: 1,
      sectionTitle: "Reset Corner",
      title: "Name Your Feeling",
      subtitle: "Helping kids identify their emotions",
      sections: [
        {
          id: "reset-1-visual",
          type: "mantra-visual",
          content: "calm-corner-feelings",
          editable: false,
        },
        {
          id: "reset-1-notes",
          type: "paragraph",
          content: "My notes:",
          editable: true,
        },
      ],
    },
    {
      id: "reset-2",
      type: "visuals",
      section: 1,
      sectionTitle: "Reset Corner",
      title: "Name Your Need",
      subtitle: "What does your body need right now?",
      sections: [
        {
          id: "reset-2-visual",
          type: "mantra-visual",
          content: "calm-corner-needs",
          editable: false,
        },
        {
          id: "reset-2-notes",
          type: "paragraph",
          content: "My notes:",
          editable: true,
        },
      ],
    },
    {
      id: "reset-3",
      type: "visuals",
      section: 1,
      sectionTitle: "Reset Corner",
      title: "Name Your Zone",
      subtitle: "What nervous system zone are you in?",
      sections: [
        {
          id: "reset-3-visual",
          type: "mantra-visual",
          content: "calm-corner-zones",
          editable: false,
        },
        {
          id: "reset-3-notes",
          type: "paragraph",
          content: "My notes:",
          editable: true,
        },
      ],
    },
    {
      id: "reset-4",
      type: "visuals",
      section: 1,
      sectionTitle: "Reset Corner",
      title: "Choose Your Reset Helper",
      subtitle: "Pick a tool to help you feel better",
      sections: [
        {
          id: "reset-4-visual",
          type: "mantra-visual",
          content: "calm-corner-helpers",
          editable: false,
        },
        {
          id: "reset-4-notes",
          type: "paragraph",
          content: "My notes:",
          editable: true,
        },
      ],
    },
    {
      id: "reset-5",
      type: "visuals",
      section: 1,
      sectionTitle: "Reset Corner",
      title: "Ground Yourself",
      subtitle: "Calm your nervous system with your 5 senses",
      sections: [
        {
          id: "reset-5-visual",
          type: "mantra-visual",
          content: "calm-corner-grounding",
          editable: false,
        },
        {
          id: "reset-5-notes",
          type: "paragraph",
          content: "My notes:",
          editable: true,
        },
      ],
    },
    {
      id: "reset-6",
      type: "visuals",
      section: 1,
      sectionTitle: "Reset Corner",
      title: "Choose Your Healthy Behavior",
      subtitle: "Healthy ways to express big feelings",
      sections: [
        {
          id: "reset-6-visual",
          type: "mantra-visual",
          content: "calm-corner-behaviors",
          editable: false,
        },
        {
          id: "reset-6-notes",
          type: "paragraph",
          content: "My notes:",
          editable: true,
        },
      ],
    },
  ],
};
