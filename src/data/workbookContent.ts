import { WorkbookData } from "@/types/workbook";

export const initialWorkbookData: WorkbookData = {
  title: "Model Parenting Workbook",
  pages: [
    // ===============================
    // SECTION 1: THE FOUNDATION
    // ===============================
    {
      id: "s1-p1",
      type: "outline",
      section: 1,
      sectionTitle: "The Foundation",
      title: "The Foundation",
      subtitle: "of Model Parenting",
      sections: [
        {
          id: "s1-p1-1",
          type: "subheader",
          content: "Course Overview",
          editable: true
        },
        {
          id: "s1-p1-2",
          type: "paragraph",
          content: "Welcome to The Model Parenting Method. This course will guide you through 6 essential tools for transforming your parenting approach from reactive to intentional. More than parenting strategies, this is a journey of spiritual formation – learning to depend on God in your hardest parenting moments.",
          editable: true
        },
        {
          id: "s1-p1-3",
          type: "list",
          content: "What You'll Learn:",
          items: [
            "The foundation of model parenting",
            "Tool 1: Anchoring – Regulation before correction",
            "Tool 2: Validation – Acknowledging emotions",
            "Tool 3: Connection – Building secure bonds",
            "Tool 4: Grow – Fostering development",
            "Tool 5: Empower – Building confidence",
            "Tool 6: Correction – Guiding behavior and choices"
          ],
          editable: true
        },
        {
          id: "s1-p1-4",
          type: "header",
          content: "Parenting as Spiritual Formation",
          editable: true
        },
        {
          id: "s1-p1-5",
          type: "paragraph",
          content: "You cannot do this in your own strength. Parenting will push you to the end of yourself – and that's exactly where God meets you. This course isn't just about becoming a better parent; it's about learning to rely on God moment by moment. Every challenging behavior, every triggered reaction, every exhausted evening is an invitation to turn to Him.",
          editable: true
        },
        {
          id: "s1-p1-6",
          type: "paragraph",
          content: "As you practice these tools, you'll discover they require more than willpower – they require surrender. The patience you need? It comes from Him. The calm in chaos? It's His peace. The grace to repair? It mirrors His grace to you. This work will draw you closer to God because you simply cannot do it without Him.",
          editable: true
        },
        {
          id: "s1-p1-7",
          type: "quote",
          content: "Children learn what to become by watching how we live, respond, and repair – not by being controlled or corrected into compliance.",
          editable: true
        }
      ]
    },
    {
      id: "s1-p2",
      type: "reflection",
      section: 1,
      sectionTitle: "The Foundation",
      title: "Reflection",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s1-p2-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s1-p2-2",
          type: "list",
          content: "",
          items: [
            "What was the parenting style in your childhood home?",
            "Were emotions welcomed, ignored, or punished?",
            "What messages did you receive about discipline and love?"
          ],
          editable: true
        },
        {
          id: "s1-p2-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s1-p2-4",
          type: "list",
          content: "",
          items: [
            "What patterns from your childhood do you notice in your parenting?",
            "What feels most challenging about parenting right now?",
            "What kind of parent do you want to be?"
          ],
          editable: true
        },
        {
          id: "s1-p2-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s1-p2-6",
          type: "list",
          content: "",
          items: [
            "What kind of adult do you hope your child becomes?",
            "What values do you want to model daily?",
            "How will you apply these tools to transform your relationships?"
          ],
          editable: true
        },
        {
          id: "s1-p2-7",
          type: "header",
          content: "FAITH REFLECTION",
          editable: true
        },
        {
          id: "s1-p2-8",
          type: "list",
          content: "",
          items: [
            "How does God parent you? What can you learn from His patience?",
            "In what areas is God inviting you to grow through parenting?",
            "How might your parenting journey be drawing you closer to God?"
          ],
          editable: true
        },
        {
          id: "s1-p2-9",
          type: "subheader",
          content: "This Week's Focus:",
          editable: true
        },
        {
          id: "s1-p2-10",
          type: "paragraph",
          content: "Begin noticing your reactions. When do you respond from calm vs. react from stress?",
          editable: true
        }
      ]
    },
    {
      id: "s1-p3",
      type: "goals",
      section: 1,
      sectionTitle: "The Foundation",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        {
          id: "s1-p3-1",
          type: "subheader",
          content: "THIS WEEK'S FOCUS: Foundation",
          editable: true
        },
        {
          id: "s1-p3-2",
          type: "goal-phrases",
          content: "",
          items: [
            "I am the example my child is learning from.",
            "I parent as God parents me – with patience and grace.",
            "Connection before correction.",
            "Progress over perfection.",
            "Repair is more powerful than perfection."
          ],
          editable: true
        },
        {
          id: "s1-p3-3",
          type: "list",
          content: "Core Principles to Remember:",
          items: [
            "Children are not giving us a hard time – they are having a hard time",
            "Behavior is communication",
            "Skills are taught, not demanded"
          ],
          editable: true
        },
        {
          id: "s1-p3-4",
          type: "header",
          content: "FAITH-BASED FOCUS",
          editable: true
        },
        {
          id: "s1-p3-5",
          type: "scripture",
          content: "\"Train up a child in the way he should go; even when he is old he will not depart from it.\"\n— Proverbs 22:6",
          editable: true
        },
        {
          id: "s1-p3-7",
          type: "scripture",
          content: "\"Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord.\"\n— Ephesians 6:4",
          editable: true
        },
        {
          id: "s1-p3-8",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s1-p3-9",
          type: "quote",
          content: "Lord, help me parent from wisdom, not fear. Help me model what I hope my child becomes.",
          editable: true
        },
        {
          id: "s1-p3-10",
          type: "weekly-tracker",
          content: "",
          editable: false
        }
      ]
    },
    {
      id: "s1-p4",
      type: "visuals",
      section: 1,
      sectionTitle: "The Foundation",
      title: "You Are The Model",
      subtitle: "They Become What They See",
      sections: [
        {
          id: "s1-p4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "parent-stressed",
            after: "parent-calm",
            beforeLabel: "When I yell, they learn to yell.",
            afterLabel: "When I'm calm, they learn calm."
          },
          editable: false
        },
        {
          id: "s1-p4-1b",
          type: "faith-image",
          faithImage: {
            src: "jesus-foundation",
            caption: "Jesus walks with you in every parenting moment."
          },
          editable: false
        },
        {
          id: "s1-p4-2",
          type: "goal-phrases",
          content: "",
          items: [
            "I AM THE MODEL",
            "My calm teaches their calm",
            "My patience grows their patience"
          ],
          editable: true
        },
        {
          id: "s1-p4-3",
          type: "scripture",
          content: "\"Imitate God, therefore, in everything you do, because you are his dear children.\"\n— Ephesians 5:1",
          editable: true
        },
        {
          id: "s1-p4-4",
          type: "quote",
          content: "Children don't need perfect parents. They need present, repairing, and growing parents.",
          editable: true
        }
      ]
    },

    // ===============================
    // SECTION 2: TOOL 1 - ANCHORING
    // ===============================
    {
      id: "s2-p1",
      type: "outline",
      section: 2,
      sectionTitle: "Tool 1: Anchoring",
      title: "Tool 1: Anchoring",
      subtitle: "Regulation Before Correction",
      sections: [
        {
          id: "s2-p1-1",
          type: "subheader",
          content: "Course Outline",
          editable: true
        },
        {
          id: "s2-p1-2",
          type: "paragraph",
          content: "Anchoring means learning to regulate yourself before responding to your child. You cannot teach calm from chaos.",
          editable: true
        },
        {
          id: "s2-p1-3",
          type: "list",
          content: "What You'll Learn This Week:",
          items: [
            "How to recognize when you're dysregulated",
            "Physical anchoring techniques",
            "Breathing and grounding practices",
            "How to pause before reacting",
            "Creating calm in moments of chaos"
          ],
          editable: true
        },
        {
          id: "s2-p1-4",
          type: "header",
          content: "Growing Closer to God Through Anchoring",
          editable: true
        },
        {
          id: "s2-p1-5",
          type: "paragraph",
          content: "You don't have enough calm on your own. Learning to anchor yourself in stressful moments teaches you to anchor yourself in God. Each time you pause before reacting, you're practicing dependence on Him. Ask God for His peace before you respond – this is prayer in action.",
          editable: true
        },
        {
          id: "s2-p1-6",
          type: "quote",
          content: "You cannot expect children to regulate emotions you haven't modeled – become what you want them to become.",
          editable: true
        }
      ]
    },
    {
      id: "s2-p2",
      type: "reflection",
      section: 2,
      sectionTitle: "Tool 1: Anchoring",
      title: "Reflection",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s2-p2-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s2-p2-2",
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
          id: "s2-p2-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s2-p2-4",
          type: "list",
          content: "",
          items: [
            "What triggers you most when your child is dysregulated?",
            "Do you respond from calm or react from stress?",
            "How does your body feel when you're activated?"
          ],
          editable: true
        },
        {
          id: "s2-p2-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s2-p2-6",
          type: "list",
          content: "",
          items: [
            "How do you want your child to regulate as an adult?",
            "What anchoring tools can you practice this week?",
            "What would change if you paused before reacting?"
          ],
          editable: true
        },
        {
          id: "s2-p2-7",
          type: "header",
          content: "FAITH REFLECTION",
          editable: true
        },
        {
          id: "s2-p2-8",
          type: "list",
          content: "",
          items: [
            "When you feel overwhelmed, do you turn to God first?",
            "How does 'Be still and know that I am God' apply to parenting?",
            "What would change if you invited God into your most stressful moments?"
          ],
          editable: true
        },
        {
          id: "s2-p2-9",
          type: "subheader",
          content: "This Week's Application:",
          editable: true
        },
        {
          id: "s2-p2-10",
          type: "paragraph",
          content: "Practice one anchoring technique daily: hand on chest, slow breathing, or touching a solid surface before responding.",
          editable: true
        }
      ]
    },
    {
      id: "s2-p3",
      type: "goals",
      section: 2,
      sectionTitle: "Tool 1: Anchoring",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        {
          id: "s2-p3-1",
          type: "subheader",
          content: "THIS WEEK'S TOOL: Anchoring",
          editable: true
        },
        {
          id: "s2-p3-2",
          type: "goal-phrases",
          content: "",
          items: [
            "I pause before I respond.",
            "I breathe before I react.",
            "I anchor myself first.",
            "Calm is contagious.",
            "I pause and pray before I respond.",
            "God is my anchor in chaos.",
            "I choose peace over panic."
          ],
          editable: true
        },
        {
          id: "s2-p3-3",
          type: "list",
          content: "Anchoring Techniques:",
          items: [
            "Hand on chest – feel your heartbeat",
            "Touch a wall or solid surface",
            "Slow breathing – 4 counts in, 6 counts out",
            "Sit on the floor to ground yourself",
            "Pause correction until calm returns"
          ],
          editable: true
        },
        {
          id: "s2-p3-4",
          type: "header",
          content: "FAITH-BASED FOCUS",
          editable: true
        },
        {
          id: "s2-p3-5",
          type: "scripture",
          content: "\"Be still, and know that I am God.\"\n— Psalm 46:10",
          editable: true
        },
        {
          id: "s2-p3-7",
          type: "scripture",
          content: "\"A gentle answer turns away wrath, but a harsh word stirs up anger.\"\n— Proverbs 15:1",
          editable: true
        },
        {
          id: "s2-p3-8",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s2-p3-9",
          type: "quote",
          content: "Lord, when I feel overwhelmed, help me anchor in You. Give me patience and calm to respond, not react.",
          editable: true
        },
        {
          id: "s2-p3-10",
          type: "weekly-tracker",
          content: "",
          editable: false
        }
      ]
    },
    {
      id: "s2-p4",
      type: "visuals",
      section: 2,
      sectionTitle: "Tool 1: Anchoring",
      title: "Anchor First",
      subtitle: "Your Calm Is Their Anchor",
      sections: [
        {
          id: "s2-p4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "anchoring-reactive",
            after: "anchoring-calm",
            beforeLabel: "When I react, they escalate.",
            afterLabel: "When I anchor, they settle."
          },
          editable: false
        },
        {
          id: "s2-p4-2",
          type: "faith-image",
          faithImage: {
            src: "jesus-anchoring",
            caption: "Jesus anchors with you. Breathe in His peace before you respond."
          },
          editable: false
        },
        {
          id: "s2-p4-3",
          type: "goal-phrases",
          content: "",
          items: [
            "BREATHE FIRST",
            "My calm is contagious",
            "I borrow God's peace"
          ],
          editable: true
        },
        {
          id: "s2-p4-4",
          type: "scripture",
          content: "\"Be still, and know that I am God.\"\n— Psalm 46:10",
          editable: true
        },
        {
          id: "s2-p4-5",
          type: "quote",
          content: "You cannot teach calm from chaos. Anchor yourself in God first.",
          editable: true
        }
      ]
    },

    // ===============================
    // SECTION 3: TOOL 2 - VALIDATION
    // ===============================
    {
      id: "s3-p1",
      type: "outline",
      section: 3,
      sectionTitle: "Tool 2: Validation",
      title: "Tool 2: Validation",
      subtitle: "Acknowledging Emotions",
      sections: [
        {
          id: "s3-p1-1",
          type: "subheader",
          content: "Course Outline",
          editable: true
        },
        {
          id: "s3-p1-2",
          type: "paragraph",
          content: "Validation means acknowledging your child's emotions without trying to fix, dismiss, or minimize them. Feelings are always valid, even when behavior needs correction.",
          editable: true
        },
        {
          id: "s3-p1-3",
          type: "list",
          content: "What You'll Learn This Week:",
          items: [
            "The difference between validation and agreement",
            "Phrases that validate without condoning behavior",
            "How validation reduces escalation",
            "Connecting with your child's emotional experience",
            "Building emotional intelligence through acknowledgment"
          ],
          editable: true
        },
        {
          id: "s3-p1-4",
          type: "header",
          content: "Growing Closer to God Through Validation",
          editable: true
        },
        {
          id: "s3-p1-5",
          type: "paragraph",
          content: "Validation doesn't come naturally when you're frustrated. You need God's compassion flowing through you. As you ask Him to help you see your child's heart, you'll experience His compassion for you. This practice draws you into God's presence – you cannot validate from an empty well.",
          editable: true
        },
        {
          id: "s3-p1-6",
          type: "quote",
          content: "When we validate emotions, we say: 'Your feelings make sense.' This doesn't mean their behavior is okay – it means they are understood.",
          editable: true
        }
      ]
    },
    {
      id: "s3-p2",
      type: "reflection",
      section: 3,
      sectionTitle: "Tool 2: Validation",
      title: "Reflection",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s3-p2-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s3-p2-2",
          type: "list",
          content: "",
          items: [
            "Were your emotions acknowledged as a child?",
            "Did you hear phrases like 'Stop crying' or 'You're overreacting'?",
            "How did it feel when your feelings were dismissed?"
          ],
          editable: true
        },
        {
          id: "s3-p2-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s3-p2-4",
          type: "list",
          content: "",
          items: [
            "How do you respond when your child is upset?",
            "Do you try to fix, minimize, or rush past their emotions?",
            "What validation phrases feel natural to you?"
          ],
          editable: true
        },
        {
          id: "s3-p2-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s3-p2-6",
          type: "list",
          content: "",
          items: [
            "How would it change things if your child felt truly heard?",
            "What validation skills do you want to develop?",
            "How can you validate without agreeing with behavior?"
          ],
          editable: true
        },
        {
          id: "s3-p2-7",
          type: "header",
          content: "FAITH REFLECTION",
          editable: true
        },
        {
          id: "s3-p2-8",
          type: "list",
          content: "",
          items: [
            "How does God respond when you bring Him your pain and frustration?",
            "Do you feel validated by God, even in your struggles?",
            "How can being more like God help you validate your child?"
          ],
          editable: true
        },
        {
          id: "s3-p2-9",
          type: "subheader",
          content: "This Week's Application:",
          editable: true
        },
        {
          id: "s3-p2-10",
          type: "paragraph",
          content: "Practice saying 'I can see you're really upset' or 'That must feel so frustrating' before offering solutions.",
          editable: true
        }
      ]
    },
    {
      id: "s3-p3",
      type: "goals",
      section: 3,
      sectionTitle: "Tool 2: Validation",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        {
          id: "s3-p3-1",
          type: "subheader",
          content: "THIS WEEK'S TOOL: Validation",
          editable: true
        },
        {
          id: "s3-p3-2",
          type: "goal-phrases",
          content: "",
          items: [
            "I see you're upset.",
            "That sounds really hard.",
            "Your feelings make sense.",
            "I'm here with you.",
            "I see you and hear you.",
            "Your feelings matter to me.",
            "God sees your heart too."
          ],
          editable: true
        },
        {
          id: "s3-p3-3",
          type: "list",
          content: "Validation Phrases to Use:",
          items: [
            "I can see you're really frustrated right now.",
            "It's okay to feel sad about this.",
            "That must have been disappointing.",
            "I understand why you're upset.",
            "You're having a hard time, and that's okay."
          ],
          editable: true
        },
        {
          id: "s3-p3-4",
          type: "header",
          content: "FAITH-BASED FOCUS",
          editable: true
        },
        {
          id: "s3-p3-5",
          type: "scripture",
          content: "\"Rejoice with those who rejoice; mourn with those who mourn.\"\n— Romans 12:15",
          editable: true
        },
        {
          id: "s3-p3-7",
          type: "scripture",
          content: "\"The Lord is close to the brokenhearted and saves those who are crushed in spirit.\"\n— Psalm 34:18",
          editable: true
        },
        {
          id: "s3-p3-8",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s3-p3-9",
          type: "quote",
          content: "Lord, help me be present with my child's emotions as You are present with mine. Give me ears to hear and a heart to understand.",
          editable: true
        },
        {
          id: "s3-p3-10",
          type: "weekly-tracker",
          content: "",
          editable: false
        }
      ]
    },
    {
      id: "s3-p4",
      type: "visuals",
      section: 3,
      sectionTitle: "Tool 2: Validation",
      title: "Validate First",
      subtitle: "Feelings Need Witnesses",
      sections: [
        {
          id: "s3-p4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "validation-dismissive",
            after: "validation-empathy",
            beforeLabel: "When I dismiss, they feel alone.",
            afterLabel: "When I validate, they feel seen."
          },
          editable: false
        },
        {
          id: "s3-p4-1b",
          type: "faith-image",
          faithImage: {
            src: "jesus-validation",
            caption: "Jesus validates your child's heart. He sees every tear."
          },
          editable: false
        },
        {
          id: "s3-p4-2",
          type: "goal-phrases",
          content: "",
          items: [
            "FEELINGS ARE VALID",
            "Listen before fixing",
            "I see you, I hear you"
          ],
          editable: true
        },
        {
          id: "s3-p4-3",
          type: "scripture",
          content: "\"The Lord is close to the brokenhearted.\"\n— Psalm 34:18",
          editable: true
        },
        {
          id: "s3-p4-4",
          type: "quote",
          content: "You can validate feelings while still setting limits on behavior.",
          editable: true
        }
      ]
    },

    // ===============================
    // SECTION 4: TOOL 3 - CONNECTION
    // ===============================
    {
      id: "s4-p1",
      type: "outline",
      section: 4,
      sectionTitle: "Tool 3: Connection",
      title: "Tool 3: Connection",
      subtitle: "Building Secure Bonds",
      sections: [
        {
          id: "s4-p1-1",
          type: "subheader",
          content: "Course Outline",
          editable: true
        },
        {
          id: "s4-p1-2",
          type: "paragraph",
          content: "Connection is the foundation of influence. Children who feel connected are more likely to cooperate, communicate, and be correctable. Connection precedes correction.",
          editable: true
        },
        {
          id: "s4-p1-3",
          type: "list",
          content: "What You'll Learn This Week:",
          items: [
            "Why connection is more powerful than control",
            "Daily connection rituals",
            "Repair after disconnection",
            "Quality time vs. quantity time",
            "Building emotional safety"
          ],
          editable: true
        },
        {
          id: "s4-p1-4",
          type: "header",
          content: "Growing Closer to God Through Connection",
          editable: true
        },
        {
          id: "s4-p1-5",
          type: "paragraph",
          content: "You can't give connection you don't have. Your ability to be present with your child flows from your connection with God. As you prioritize time with Him, you'll have more to give. This tool will reveal the state of your own soul – let it drive you to the Father.",
          editable: true
        },
        {
          id: "s4-p1-6",
          type: "quote",
          content: "A child who feels connected to you wants to please you. A child who feels disconnected has no reason to.",
          editable: true
        }
      ]
    },
    {
      id: "s4-p2",
      type: "reflection",
      section: 4,
      sectionTitle: "Tool 3: Connection",
      title: "Reflection",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s4-p2-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s4-p2-2",
          type: "list",
          content: "",
          items: [
            "Did you feel securely connected to your parents?",
            "What activities made you feel bonded to your caregivers?",
            "Were there patterns of connection or disconnection?"
          ],
          editable: true
        },
        {
          id: "s4-p2-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s4-p2-4",
          type: "list",
          content: "",
          items: [
            "How connected does your child feel to you right now?",
            "What daily rituals strengthen your bond?",
            "When do you notice disconnection happening?"
          ],
          editable: true
        },
        {
          id: "s4-p2-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s4-p2-6",
          type: "list",
          content: "",
          items: [
            "What connection rituals do you want to build?",
            "How will you repair after conflict or disconnection?",
            "What does a deeply connected relationship look like for you?"
          ],
          editable: true
        },
        {
          id: "s4-p2-7",
          type: "header",
          content: "FAITH REFLECTION",
          editable: true
        },
        {
          id: "s4-p2-8",
          type: "list",
          content: "",
          items: [
            "How connected do you feel to God right now?",
            "What rituals help you stay connected to God daily?",
            "How does your connection with God affect your connection with your child?"
          ],
          editable: true
        },
        {
          id: "s4-p2-9",
          type: "subheader",
          content: "This Week's Application:",
          editable: true
        },
        {
          id: "s4-p2-10",
          type: "paragraph",
          content: "Create one daily connection ritual – 10 minutes of undivided attention with your child, phone-free.",
          editable: true
        }
      ]
    },
    {
      id: "s4-p3",
      type: "goals",
      section: 4,
      sectionTitle: "Tool 3: Connection",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        {
          id: "s4-p3-1",
          type: "subheader",
          content: "THIS WEEK'S TOOL: Connection",
          editable: true
        },
        {
          id: "s4-p3-2",
          type: "goal-phrases",
          content: "",
          items: [
            "Connection before correction.",
            "I choose presence over perfection.",
            "We repair, we reconnect.",
            "You matter to me.",
            "I am present like God is present.",
            "Connection reflects God's love.",
            "We repair because God repairs with us."
          ],
          editable: true
        },
        {
          id: "s4-p3-3",
          type: "list",
          content: "Connection Ideas:",
          items: [
            "10 minutes of undivided attention daily",
            "Eye contact when speaking",
            "Physical touch – hugs, high-fives, cuddles",
            "Special one-on-one time weekly",
            "Repair after every disconnection"
          ],
          editable: true
        },
        {
          id: "s4-p3-4",
          type: "header",
          content: "FAITH-BASED FOCUS",
          editable: true
        },
        {
          id: "s4-p3-5",
          type: "scripture",
          content: "\"And let us consider how we may spur one another on toward love and good deeds.\"\n— Hebrews 10:24",
          editable: true
        },
        {
          id: "s4-p3-7",
          type: "scripture",
          content: "\"A cord of three strands is not quickly broken.\"\n— Ecclesiastes 4:12",
          editable: true
        },
        {
          id: "s4-p3-8",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s4-p3-9",
          type: "quote",
          content: "Lord, help me prioritize connection with my child. Let our bond reflect the love and security You offer me.",
          editable: true
        },
        {
          id: "s4-p3-10",
          type: "weekly-tracker",
          content: "",
          editable: false
        }
      ]
    },
    {
      id: "s4-p4",
      type: "visuals",
      section: 4,
      sectionTitle: "Tool 3: Connection",
      title: "Connect First",
      subtitle: "Presence Over Perfection",
      sections: [
        {
          id: "s4-p4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "connection-distracted",
            after: "connection-present",
            beforeLabel: "When I'm distracted, they feel invisible.",
            afterLabel: "When I'm present, they feel valued."
          },
          editable: false
        },
        {
          id: "s4-p4-1b",
          type: "faith-image",
          faithImage: {
            src: "jesus-connection",
            caption: "Jesus connects you together. His love binds your family."
          },
          editable: false
        },
        {
          id: "s4-p4-2",
          type: "goal-phrases",
          content: "",
          items: [
            "CONNECTION FIRST",
            "Be fully present",
            "Repair always"
          ],
          editable: true
        },
        {
          id: "s4-p4-3",
          type: "scripture",
          content: "\"Draw near to God, and he will draw near to you.\"\n— James 4:8",
          editable: true
        },
        {
          id: "s4-p4-4",
          type: "quote",
          content: "It's not about perfect parenting. It's about always coming back to connection.",
          editable: true
        }
      ]
    },

    // ===============================
    // SECTION 5: TOOL 4 - GROW
    // ===============================
    {
      id: "s5-p1",
      type: "outline",
      section: 5,
      sectionTitle: "Tool 4: Grow",
      title: "Tool 4: Grow",
      subtitle: "Fostering Development",
      sections: [
        {
          id: "s5-p1-1",
          type: "subheader",
          content: "Course Outline",
          editable: true
        },
        {
          id: "s5-p1-2",
          type: "paragraph",
          content: "Growth happens when we create environments where children can develop skills, learn from mistakes, and build resilience. Our job is to nurture growth, not demand perfection.",
          editable: true
        },
        {
          id: "s5-p1-3",
          type: "list",
          content: "What You'll Learn This Week:",
          items: [
            "Growth mindset vs. fixed mindset",
            "Age-appropriate expectations",
            "Learning through natural consequences",
            "Celebrating effort over outcome",
            "Creating safe spaces for failure"
          ],
          editable: true
        },
        {
          id: "s5-p1-4",
          type: "header",
          content: "Growing Closer to God Through Growth",
          editable: true
        },
        {
          id: "s5-p1-5",
          type: "paragraph",
          content: "Patience for your child's slow growth requires supernatural grace. You'll run out of patience quickly on your own. As you ask God to help you see your child through His eyes – as a work in progress – you'll experience how He sees you. Growth-focused parenting requires daily dependence on God's patience working through you.",
          editable: true
        },
        {
          id: "s5-p1-6",
          type: "quote",
          content: "Skills are taught, not demanded. Every skill your child lacks is an opportunity to teach, not punish.",
          editable: true
        }
      ]
    },
    {
      id: "s5-p2",
      type: "reflection",
      section: 5,
      sectionTitle: "Tool 4: Grow",
      title: "Reflection",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s5-p2-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s5-p2-2",
          type: "list",
          content: "",
          items: [
            "How were mistakes handled in your childhood?",
            "Were you encouraged to try new things or shamed for failure?",
            "What messages did you receive about success and failure?"
          ],
          editable: true
        },
        {
          id: "s5-p2-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s5-p2-4",
          type: "list",
          content: "",
          items: [
            "How do you respond when your child makes mistakes?",
            "Do you focus more on outcomes or effort?",
            "What skills is your child still developing?"
          ],
          editable: true
        },
        {
          id: "s5-p2-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s5-p2-6",
          type: "list",
          content: "",
          items: [
            "How can you create a safe space for your child to fail and learn?",
            "What growth mindset phrases can you use?",
            "What skills do you want to help your child develop?"
          ],
          editable: true
        },
        {
          id: "s5-p2-7",
          type: "header",
          content: "FAITH REFLECTION",
          editable: true
        },
        {
          id: "s5-p2-8",
          type: "list",
          content: "",
          items: [
            "How does God respond to your mistakes and failures?",
            "Do you believe God is patient with your growth?",
            "How can trusting God's patience help you be more patient with your child?"
          ],
          editable: true
        },
        {
          id: "s5-p2-9",
          type: "subheader",
          content: "This Week's Application:",
          editable: true
        },
        {
          id: "s5-p2-10",
          type: "paragraph",
          content: "Praise effort over results this week. Say 'I love how hard you tried' instead of 'Good job.'",
          editable: true
        }
      ]
    },
    {
      id: "s5-p3",
      type: "goals",
      section: 5,
      sectionTitle: "Tool 4: Grow",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        {
          id: "s5-p3-1",
          type: "subheader",
          content: "THIS WEEK'S TOOL: Grow",
          editable: true
        },
        {
          id: "s5-p3-2",
          type: "goal-phrases",
          content: "",
          items: [
            "Mistakes are for learning.",
            "I praise effort, not perfection.",
            "Skills are taught, not demanded.",
            "Growth takes time.",
            "God is patient with my growth.",
            "I am patient with my child's growth.",
            "We are all works in progress."
          ],
          editable: true
        },
        {
          id: "s5-p3-3",
          type: "list",
          content: "Growth Mindset Phrases:",
          items: [
            "I love how hard you tried!",
            "What did you learn from that?",
            "Mistakes help us grow.",
            "You're still learning, and that's okay.",
            "Let's try a different way."
          ],
          editable: true
        },
        {
          id: "s5-p3-4",
          type: "header",
          content: "FAITH-BASED FOCUS",
          editable: true
        },
        {
          id: "s5-p3-5",
          type: "scripture",
          content: "\"Being confident of this, that he who began a good work in you will carry it on to completion.\"\n— Philippians 1:6",
          editable: true
        },
        {
          id: "s5-p3-7",
          type: "scripture",
          content: "\"But grow in the grace and knowledge of our Lord and Savior Jesus Christ.\"\n— 2 Peter 3:18",
          editable: true
        },
        {
          id: "s5-p3-8",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s5-p3-9",
          type: "quote",
          content: "Lord, help me see my child through Your eyes – as a work in progress, worthy of patience and grace.",
          editable: true
        },
        {
          id: "s5-p3-10",
          type: "weekly-tracker",
          content: "",
          editable: false
        }
      ]
    },
    {
      id: "s5-p4",
      type: "visuals",
      section: 5,
      sectionTitle: "Tool 4: Grow",
      title: "Grow Together",
      subtitle: "Mistakes Are For Learning",
      sections: [
        {
          id: "s5-p4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "grow-critical",
            after: "grow-encourage",
            beforeLabel: "When I criticize, they feel shame.",
            afterLabel: "When I encourage, they grow resilient."
          },
          editable: false
        },
        {
          id: "s5-p4-1b",
          type: "faith-image",
          faithImage: {
            src: "jesus-grow",
            caption: "Jesus nurtures growth. He celebrates effort, not perfection."
          },
          editable: false
        },
        {
          id: "s5-p4-2",
          type: "goal-phrases",
          content: "",
          items: [
            "MISTAKES = LEARNING",
            "Effort over outcome",
            "Progress not perfection"
          ],
          editable: true
        },
        {
          id: "s5-p4-3",
          type: "scripture",
          content: "\"He who began a good work in you will carry it on to completion.\"\n— Philippians 1:6",
          editable: true
        },
        {
          id: "s5-p4-4",
          type: "quote",
          content: "Every skill your child lacks is an opportunity to teach, not punish.",
          editable: true
        }
      ]
    },

    // ===============================
    // SECTION 6: TOOL 5 - EMPOWER
    // ===============================
    {
      id: "s6-p1",
      type: "outline",
      section: 6,
      sectionTitle: "Tool 5: Empower",
      title: "Tool 5: Empower",
      subtitle: "Building Confidence",
      sections: [
        {
          id: "s6-p1-1",
          type: "subheader",
          content: "Course Outline",
          editable: true
        },
        {
          id: "s6-p1-2",
          type: "paragraph",
          content: "Empowerment means giving children appropriate autonomy, voice, and responsibility. It builds confidence, independence, and internal motivation.",
          editable: true
        },
        {
          id: "s6-p1-3",
          type: "list",
          content: "What You'll Learn This Week:",
          items: [
            "Giving choices within boundaries",
            "Building independence appropriately",
            "Encouraging problem-solving",
            "Letting children have a voice",
            "Fostering internal motivation"
          ],
          editable: true
        },
        {
          id: "s6-p1-4",
          type: "header",
          content: "Growing Closer to God Through Empowerment",
          editable: true
        },
        {
          id: "s6-p1-5",
          type: "paragraph",
          content: "Letting go of control is terrifying – unless you trust God with the outcome. Empowering your child means releasing your grip and trusting that God is at work in them. This tool will expose your need for control and drive you to surrender it to Him. You cannot empower your child while clinging to outcomes only God can control.",
          editable: true
        },
        {
          id: "s6-p1-6",
          type: "quote",
          content: "Children who feel empowered develop confidence. Children who are controlled develop dependence or defiance.",
          editable: true
        }
      ]
    },
    {
      id: "s6-p2",
      type: "reflection",
      section: 6,
      sectionTitle: "Tool 5: Empower",
      title: "Reflection",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s6-p2-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s6-p2-2",
          type: "list",
          content: "",
          items: [
            "Were you given choices and autonomy growing up?",
            "Did you feel your voice mattered in your family?",
            "How did your parents handle your independence?"
          ],
          editable: true
        },
        {
          id: "s6-p2-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s6-p2-4",
          type: "list",
          content: "",
          items: [
            "Do you give your child age-appropriate choices?",
            "How do you respond when your child wants more independence?",
            "Does your child feel their voice is heard?"
          ],
          editable: true
        },
        {
          id: "s6-p2-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s6-p2-6",
          type: "list",
          content: "",
          items: [
            "How can you give more appropriate autonomy?",
            "What decisions can your child make independently?",
            "How will you build their confidence through empowerment?"
          ],
          editable: true
        },
        {
          id: "s6-p2-7",
          type: "header",
          content: "FAITH REFLECTION",
          editable: true
        },
        {
          id: "s6-p2-8",
          type: "list",
          content: "",
          items: [
            "How does God empower you rather than control you?",
            "What gifts has God placed in your child that you can nurture?",
            "How can releasing control help you trust God more?"
          ],
          editable: true
        },
        {
          id: "s6-p2-9",
          type: "subheader",
          content: "This Week's Application:",
          editable: true
        },
        {
          id: "s6-p2-10",
          type: "paragraph",
          content: "Offer two choices instead of commands: 'Would you like to do homework before or after snack?'",
          editable: true
        }
      ]
    },
    {
      id: "s6-p3",
      type: "goals",
      section: 6,
      sectionTitle: "Tool 5: Empower",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        {
          id: "s6-p3-1",
          type: "subheader",
          content: "THIS WEEK'S TOOL: Empower",
          editable: true
        },
        {
          id: "s6-p3-2",
          type: "goal-phrases",
          content: "",
          items: [
            "Your voice matters.",
            "I trust you to choose.",
            "You are capable.",
            "I believe in you.",
            "God empowers me to empower others.",
            "My child is made in God's image.",
            "I nurture the gifts God placed in them."
          ],
          editable: true
        },
        {
          id: "s6-p3-3",
          type: "list",
          content: "Empowering Phrases:",
          items: [
            "Would you like option A or option B?",
            "What do you think we should do?",
            "I trust you to handle this.",
            "How would you solve this problem?",
            "Your ideas are important to me."
          ],
          editable: true
        },
        {
          id: "s6-p3-4",
          type: "header",
          content: "FAITH-BASED FOCUS",
          editable: true
        },
        {
          id: "s6-p3-5",
          type: "scripture",
          content: "\"For God gave us a spirit not of fear but of power and love and self-control.\"\n— 2 Timothy 1:7",
          editable: true
        },
        {
          id: "s6-p3-7",
          type: "scripture",
          content: "\"I can do all things through him who strengthens me.\"\n— Philippians 4:13",
          editable: true
        },
        {
          id: "s6-p3-8",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s6-p3-9",
          type: "quote",
          content: "Lord, help me see the potential You placed in my child. Give me wisdom to empower, not control.",
          editable: true
        },
        {
          id: "s6-p3-10",
          type: "weekly-tracker",
          content: "",
          editable: false
        }
      ]
    },
    {
      id: "s6-p4",
      type: "visuals",
      section: 6,
      sectionTitle: "Tool 5: Empower",
      title: "Empower Them",
      subtitle: "Trust Builds Confidence",
      sections: [
        {
          id: "s6-p4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "empower-control",
            after: "empower-trust",
            beforeLabel: "When I control, they stay dependent.",
            afterLabel: "When I empower, they grow confident."
          },
          editable: false
        },
        {
          id: "s6-p4-1b",
          type: "faith-image",
          faithImage: {
            src: "jesus-empower",
            caption: "Jesus empowers your child. He trusts them with purpose."
          },
          editable: false
        },
        {
          id: "s6-p4-2",
          type: "goal-phrases",
          content: "",
          items: [
            "YOUR VOICE MATTERS",
            "You are capable",
            "I believe in you"
          ],
          editable: true
        },
        {
          id: "s6-p4-3",
          type: "scripture",
          content: "\"For God gave us a spirit not of fear but of power and love and self-control.\"\n— 2 Timothy 1:7",
          editable: true
        },
        {
          id: "s6-p4-4",
          type: "quote",
          content: "Empowered children become confident adults. Controlled children become dependent or defiant adults.",
          editable: true
        }
      ]
    },

    // ===============================
    // SECTION 7: TOOL 6 - CORRECTION
    // ===============================
    {
      id: "s7-p1",
      type: "outline",
      section: 7,
      sectionTitle: "Tool 6: Correction",
      title: "Tool 6: Correction",
      subtitle: "Guiding Behavior & Choices",
      sections: [
        {
          id: "s7-p1-1",
          type: "subheader",
          content: "Course Outline",
          editable: true
        },
        {
          id: "s7-p1-2",
          type: "paragraph",
          content: "Correction comes after connection, validation, and understanding. It's about teaching and guiding, not punishing or shaming. The goal is to build skills, not compliance.",
          editable: true
        },
        {
          id: "s7-p1-3",
          type: "list",
          content: "What You'll Learn This Week:",
          items: [
            "Correction vs. punishment",
            "Teaching skills through correction",
            "Setting boundaries with empathy",
            "Natural and logical consequences",
            "Repairing after correction"
          ],
          editable: true
        },
        {
          id: "s7-p1-4",
          type: "header",
          content: "Growing Closer to God Through Correction",
          editable: true
        },
        {
          id: "s7-p1-5",
          type: "paragraph",
          content: "Correcting from love instead of anger requires God's help in the moment. When frustration rises, you need His spirit to respond with grace. Ask Him for wisdom before you speak. Let each correction become a prayer: 'Lord, help me teach, not punish. Help me guide, not control.' This is where parenting becomes worship.",
          editable: true
        },
        {
          id: "s7-p1-6",
          type: "quote",
          content: "The goal of correction is not obedience – it's teaching wisdom, building skills, and maintaining connection.",
          editable: true
        }
      ]
    },
    {
      id: "s7-p2",
      type: "reflection",
      section: 7,
      sectionTitle: "Tool 6: Correction",
      title: "Reflection",
      subtitle: "Past · Present · Future",
      sections: [
        {
          id: "s7-p2-1",
          type: "header",
          content: "PAST",
          editable: true
        },
        {
          id: "s7-p2-2",
          type: "list",
          content: "",
          items: [
            "How were you corrected as a child?",
            "Was discipline about teaching or about punishment?",
            "Did you feel loved even when being corrected?"
          ],
          editable: true
        },
        {
          id: "s7-p2-3",
          type: "header",
          content: "PRESENT",
          editable: true
        },
        {
          id: "s7-p2-4",
          type: "list",
          content: "",
          items: [
            "How do you currently handle correction?",
            "Do you correct from calm or from frustration?",
            "Does your child feel loved even during correction?"
          ],
          editable: true
        },
        {
          id: "s7-p2-5",
          type: "header",
          content: "FUTURE",
          editable: true
        },
        {
          id: "s7-p2-6",
          type: "list",
          content: "",
          items: [
            "How can you make correction about teaching, not punishing?",
            "What does empathetic boundary-setting look like for you?",
            "How will you repair after correction?"
          ],
          editable: true
        },
        {
          id: "s7-p2-7",
          type: "header",
          content: "FAITH REFLECTION",
          editable: true
        },
        {
          id: "s7-p2-8",
          type: "list",
          content: "",
          items: [
            "How do you feel when God corrects or convicts you?",
            "Do you experience God's correction as loving or punishing?",
            "How can God's grace-filled discipline inform how you correct your child?"
          ],
          editable: true
        },
        {
          id: "s7-p2-9",
          type: "subheader",
          content: "This Week's Application:",
          editable: true
        },
        {
          id: "s7-p2-10",
          type: "paragraph",
          content: "Before correcting, connect: 'I love you AND this behavior needs to change. Let's figure this out together.'",
          editable: true
        }
      ]
    },
    {
      id: "s7-p3",
      type: "goals",
      section: 7,
      sectionTitle: "Tool 6: Correction",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        {
          id: "s7-p3-1",
          type: "subheader",
          content: "THIS WEEK'S TOOL: Correction",
          editable: true
        },
        {
          id: "s7-p3-2",
          type: "goal-phrases",
          content: "",
          items: [
            "I correct from love, not frustration.",
            "Boundaries with empathy.",
            "Teaching, not punishing.",
            "Connection before correction.",
            "God corrects from love, so do I.",
            "Discipline is discipleship.",
            "I teach with grace and truth."
          ],
          editable: true
        },
        {
          id: "s7-p3-3",
          type: "list",
          content: "Correction Phrases:",
          items: [
            "I love you AND this needs to change.",
            "Let's figure this out together.",
            "What could you do differently next time?",
            "This behavior isn't okay, AND I still love you.",
            "I'm here to help you learn."
          ],
          editable: true
        },
        {
          id: "s7-p3-4",
          type: "header",
          content: "FAITH-BASED FOCUS",
          editable: true
        },
        {
          id: "s7-p3-5",
          type: "scripture",
          content: "\"The Lord disciplines the one he loves, and he chastens everyone he accepts as his son.\"\n— Hebrews 12:6",
          editable: true
        },
        {
          id: "s7-p3-7",
          type: "scripture",
          content: "\"No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace.\"\n— Hebrews 12:11",
          editable: true
        },
        {
          id: "s7-p3-8",
          type: "subheader",
          content: "Prayer Prompt:",
          editable: true
        },
        {
          id: "s7-p3-9",
          type: "quote",
          content: "Lord, help me correct with the same grace You show me. Let my discipline be wrapped in love and lead to growth.",
          editable: true
        },
        {
          id: "s7-p3-10",
          type: "weekly-tracker",
          content: "",
          editable: false
        }
      ]
    },
    {
      id: "s7-p4",
      type: "visuals",
      section: 7,
      sectionTitle: "Tool 6: Correction",
      title: "Correct With Love",
      subtitle: "Teach, Don't Punish",
      sections: [
        {
          id: "s7-p4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "correction-punish",
            after: "correction-teach",
            beforeLabel: "When I punish, they fear me.",
            afterLabel: "When I teach, they trust me."
          },
          editable: false
        },
        {
          id: "s7-p4-1b",
          type: "faith-image",
          faithImage: {
            src: "jesus-correction",
            caption: "Jesus corrects with love. He guides, never shames."
          },
          editable: false
        },
        {
          id: "s7-p4-2",
          type: "goal-phrases",
          content: "",
          items: [
            "LOVE AND LIMITS",
            "Teach, don't punish",
            "Connect then correct"
          ],
          editable: true
        },
        {
          id: "s7-p4-3",
          type: "scripture",
          content: "\"The Lord disciplines the one he loves.\"\n— Hebrews 12:6",
          editable: true
        },
        {
          id: "s7-p4-4",
          type: "quote",
          content: "Correction that maintains connection builds trust. Correction that breaks connection builds fear.",
          editable: true
        }
      ]
    }
  ]
};
