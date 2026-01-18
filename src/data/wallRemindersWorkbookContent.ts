import { WorkbookData } from "@/types/workbook";

export const wallRemindersWorkbookData: WorkbookData = {
  title: "Toolbox for Parents - Wall Reminders",
  pages: [
    {
      id: "wall-1",
      type: "visuals",
      section: 1,
      sectionTitle: "Wall Reminders",
      title: "Validate, Connect, Redirect",
      subtitle: "The 3-Step Response to Big Emotions",
      sections: [
        {
          id: "wall-1-header",
          type: "header",
          content: "When emotions run high, remember these three steps:",
          editable: false,
        },
        {
          id: "wall-1-visual",
          type: "mantra-visual",
          content: "validate-connect-redirect",
          editable: false,
        },
        {
          id: "wall-1-steps",
          type: "list",
          items: [
            "VALIDATE — \"I see you're feeling frustrated. That makes sense.\"",
            "CONNECT — Get on their level. Make eye contact. Be present.",
            "REDIRECT — \"Let's figure this out together.\""
          ],
          editable: false,
        },
      ],
    },
  ],
};
