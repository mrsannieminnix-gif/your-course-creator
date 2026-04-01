import { WorkbookData } from "@/types/workbook";

export const earlyChildhoodWorkbookData: WorkbookData = {
  title: "The Model Parenting Method: Ages 5-7",
  pages: [
    // ============================================
    // SECTION 1: THE DEVELOPING BRAIN (Foundation)
    // ============================================
    {
      id: "early-1-1",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "outline",
      title: "Understanding Your 5-7 Year Old",
      subtitle: "Brain Development, School Readiness & Emotional Growth",
      sections: [
        { id: "e1-1-1", type: "header", content: "Course Outline" },
        { id: "e1-1-2", type: "paragraph", content: "In this foundational section, you'll learn about your child's rapidly developing brain, the transition to formal schooling, and how to support their growing emotional intelligence. This season brings new challenges that will deepen your reliance on God." },
        { id: "e1-1-3", type: "subheader", content: "What You'll Learn:" },
        {
          id: "e1-1-4",
          type: "list",
          items: [
            "The prefrontal cortex is growing but still immature - expect inconsistency",
            "Working memory is expanding - they can follow 2-3 step instructions",
            "Theory of mind develops - they begin understanding others' perspectives",
            "Reading and writing create new neural pathways",
            "The stress of school transitions can cause regression in behavior"
          ]
        },
        { id: "e1-1-5", type: "header", content: "Key Milestones: Ages 5-7" },
        {
          id: "e1-1-6",
          type: "list",
          items: [
            "Reading readiness: phonemic awareness and letter recognition",
            "Logical thinking begins: understanding cause and effect",
            "Friendship becomes important: learning social rules",
            "Comparison thinking: noticing differences between self and others",
            "Greater independence but still needs significant support"
          ]
        },
        { id: "e1-1-7", type: "header", content: "Nervous System Regulation" },
        { id: "e1-1-8", type: "paragraph", content: "Your child is developing more self-regulation skills but still needs co-regulation, especially during stress. School demands, social challenges, and new expectations can dysregulate them quickly. Your calm presence remains their anchor." },
        { id: "e1-1-9", type: "header", content: "Relying on God Through This" },
        { id: "e1-1-10", type: "paragraph", content: "The school years bring comparison, competition, and new anxieties - for both of you. You'll worry about their performance, their friendships, their struggles. This is an invitation to trust God with their path, their pace, and their unique design." },
        { id: "e1-1-11", type: "quote", content: "\"Your child is on their own timeline, designed by God. Trust His process.\"" }
      ]
    },
    {
      id: "early-1-2",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Understanding Development",
      sections: [
        { id: "e1-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "e1-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What do you remember about starting school?",
            "Were academics easy or hard for you? How were your struggles handled?",
            "Did you feel pressure to perform or compare to others?",
            "How did adults respond when you made mistakes?"
          ]
        },
        { id: "e1-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "e1-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How do you respond when your child struggles academically?",
            "Do you compare them to other children their age?",
            "Are your expectations aligned with their developmental stage?",
            "How do you handle their school-related stress?"
          ]
        },
        { id: "e1-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "e1-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Celebrate effort over outcome in their work",
            "Allow them to struggle without rescuing immediately",
            "Notice where I'm projecting my own school experiences",
            "Create calm time after school for decompression"
          ]
        },
        { id: "e1-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "e1-2-8",
          type: "checklist",
          content: "Consider how God parents you:",
          items: [
            "Does God compare you to others or love you as you are?",
            "How patient is God with your learning process?",
            "What would change if you saw your child's unique design as purposeful?"
          ]
        }
      ]
    },
    {
      id: "early-1-3",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "e1-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "e1-3-2",
          type: "goal-phrases",
          items: [
            "\"Your brain is still building.\"",
            "\"Mistakes help us learn.\"",
            "\"I'm proud of your effort.\"",
            "\"You don't have to be perfect.\"",
            "\"Let's figure this out together.\"",
            "\"God made you exactly right.\"",
            "\"Your struggles are not failures.\"",
            "\"Lord, help me trust Your design for them.\""
          ]
        },
        { id: "e1-3-3", type: "header", content: "Daily Check-In" },
        { id: "e1-3-4", type: "paragraph", content: "Rate how well you supported their development with patience today (1 = struggled, 5 = nailed it):" },
        { id: "e1-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "e1-3-6", type: "scripture", content: "\"Train up a child in the way he should go; even when he is old he will not depart from it.\" - Proverbs 22:6" },
        { id: "e1-3-7", type: "paragraph", content: "The way THEY should go - not the way you went or the way society expects. God has a unique path for your child. Trust it." },
        { id: "e1-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "early-1-4",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "visuals",
      title: "Their Brain Is Growing",
      subtitle: "Trust the Process",
      sections: [
        {
          id: "e1-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "toddler-brain-demand",
            after: "toddler-brain-understand",
            beforeLabel: "When I push too fast, they feel inadequate.",
            afterLabel: "When I understand their pace, they thrive."
          }
        },
        {
          id: "e1-4-2",
          type: "goal-phrases",
          items: [
            "Their brain is still under construction",
            "Effort matters more than outcome",
            "Comparison steals their confidence"
          ]
        },
        {
          id: "e1-4-3",
          type: "scripture",
          content: "\"Train up a child in the way HE should go.\"\n— Proverbs 22:6"
        },
        {
          id: "e1-4-4",
          type: "quote",
          content: "Every child blooms in their own season. Water, don't rush."
        }
      ]
    },

    // Facts & Myths - Section 1
    {
      id: "early-1-5",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "reflection",
      title: "Facts & Myths",
      subtitle: "The Developing Brain",
      sections: [
        { id: "e1-5-1", type: "header", content: "Common Myths vs. Evidence-Based Facts" },
        {
          id: "e1-5-2",
          type: "facts-myths",
          factsMythsItems: [
            { myth: "By age 5, kids should have full self-control.", fact: "The prefrontal cortex is still developing — impulse control is a work in progress until the mid-20s." },
            { myth: "If they can read, they should be emotionally mature.", fact: "Academic and emotional development happen on completely different timelines." },
            { myth: "School-age kids don't need co-regulation anymore.", fact: "They still need your calm presence, especially during transitions and social stress." },
            { myth: "Comparing them to peers motivates them.", fact: "Comparison creates shame. Encouragement based on their unique growth builds confidence." },
            { myth: "They should just toughen up for school.", fact: "Emotional safety at home is what gives them courage to face challenges at school." }
          ]
        }
      ]
    },

    // Activity: Brain Diagram
    {
      id: "early-1-6",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "reflection",
      title: "Activity: Share What You Learned",
      subtitle: "The Developing Brain",
      sections: [
        { id: "e1-6-1", type: "paragraph", content: "Print out these pages and share what you learned about the brain with one person — your spouse, your child, or a friend." },
        { id: "e1-6-2", type: "faith-image", faithImage: { src: "toddler-brain-diagram", caption: "The Three Brain States in Your Child's Developing Brain" } },
        { id: "e1-6-3", type: "paragraph", content: "Understanding which brain state your child is in helps you respond with the right tool. You can't reason with a survival brain — you can only provide safety and co-regulation first." },
        { id: "e1-6-8", type: "subheader", content: "Who did you share this with? What was their reaction?" },
        { id: "e1-6-9", type: "checklist", items: ["______________________________________", "______________________________________", "______________________________________"] }
      ]
    },

    // Survival Brain
    {
      id: "early-1-7",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "reflection",
      title: "🔴 Survival Brain",
      subtitle: "Brainstem — \"Am I Safe?\"",
      sections: [
        { id: "e1-7-0", type: "faith-image", faithImage: { src: "brain-survival", caption: "The Survival Brain — Brainstem" } },
        { id: "e1-7-2", type: "paragraph", content: "The brainstem controls fight, flight, and freeze. At ages 5-7, this alarm system is fully developed and activates quickly during stress, even though higher brain functions are still catching up." },
        { id: "e1-7-4", type: "paragraph", content: "Core Question: \"AM I SAFE?\" — Until they feel safe, no learning or cooperation is possible." },
        { id: "e1-7-6", type: "paragraph", content: "Need: SAFETY — a calm voice, predictability, and knowing someone is in charge." },
        { id: "e1-7-7", type: "header", content: "Emotions & Triggers" },
        { id: "e1-7-8", type: "list", items: ["Emotions: terror, panic, rage, shutdown", "Triggers: yelling, new school situations, bullying, feeling abandoned", "Fight: hitting, yelling back, defiance", "Flight: running to room, hiding, avoiding", "Freeze: shutting down, going silent, 'I don't know'"] },
        { id: "e1-7-13", type: "scripture", content: "\"They CANNOT think or listen in this state. Your only job is to help them feel safe again.\"" }
      ]
    },

    // Emotional Brain
    {
      id: "early-1-8",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "reflection",
      title: "🟡 Emotional Brain",
      subtitle: "Limbic System — \"Am I Loved?\"",
      sections: [
        { id: "e1-8-0", type: "faith-image", faithImage: { src: "brain-emotional", caption: "The Emotional Brain — Limbic System" } },
        { id: "e1-8-2", type: "paragraph", content: "The limbic system processes feelings and attachment. At ages 5-7, social comparison begins and peer acceptance matters more, making this brain region highly active." },
        { id: "e1-8-4", type: "paragraph", content: "Core Question: \"AM I LOVED? Do I belong?\" — They need connection before correction." },
        { id: "e1-8-6", type: "paragraph", content: "Need: CONNECTION — feeling seen, heard, and valued, especially after school." },
        { id: "e1-8-7", type: "header", content: "Emotions & Triggers" },
        { id: "e1-8-8", type: "list", items: ["Emotions: sadness, jealousy, frustration, anxiety, shame", "Triggers: feeling left out, comparison to siblings/peers, academic struggles", "Signs: crying after school, clingy behavior, 'nobody likes me'", "Seeking reassurance: 'Am I good? Did I do it right?'"] },
        { id: "e1-8-13", type: "scripture", content: "\"Their big emotions are not the problem — they are the invitation to connect.\"" }
      ]
    },

    // Thinking Brain
    {
      id: "early-1-9",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "reflection",
      title: "🔵 Thinking Brain",
      subtitle: "Prefrontal Cortex — \"What Can I Learn?\"",
      sections: [
        { id: "e1-9-0", type: "faith-image", faithImage: { src: "brain-thinking", caption: "The Thinking Brain — Prefrontal Cortex" } },
        { id: "e1-9-2", type: "paragraph", content: "The prefrontal cortex handles reasoning and impulse control. At ages 5-7, it's growing fast — they can follow multi-step instructions and think logically, but still lose access under stress." },
        { id: "e1-9-4", type: "paragraph", content: "Core Question: \"WHAT CAN I LEARN?\" — This is where curiosity, creativity, and growth live." },
        { id: "e1-9-6", type: "paragraph", content: "Need: GROWTH — opportunities to problem-solve, make choices, and learn from mistakes." },
        { id: "e1-9-7", type: "header", content: "Emotions & Triggers" },
        { id: "e1-9-8", type: "list", items: ["Emotions: curiosity, pride, confidence, patience, empathy", "Loses access when: stressed, tired, hungry, shamed, overwhelmed", "Signs when active: asking 'why?', trying new things, following rules", "Shows empathy and solves problems independently"] },
        { id: "e1-9-13", type: "scripture", content: "\"Your job is to create safety and connection so the thinking brain comes online naturally.\"" }
      ]
    },

    // ============================================
    // SECTION 2: LYING & HONESTY
    // ============================================
    {
      id: "early-2-1",
      section: 2,
      sectionTitle: "Lying & Honesty",
      pageType: "outline",
      title: "When They Don't Tell the Truth",
      subtitle: "Using Validation & Connection",
      sections: [
        { id: "e2-1-1", type: "subheader", content: "Course Outline" },
        { id: "e2-1-2", type: "paragraph", content: "Lying at this age is developmentally normal and actually shows cognitive growth. Your child can now imagine alternatives to reality. The goal isn't to eliminate lies through punishment but to create safety for truth." },
        { id: "e2-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "e2-1-4",
          type: "list",
          items: [
            "Why lying is developmentally normal at this age",
            "How fear drives dishonesty in children",
            "Creating safety for truth-telling",
            "Using validation to address lies without shaming",
            "Building long-term honesty through connection"
          ]
        },
        { id: "e2-1-10", type: "header", content: "Relying on God Through This" },
        { id: "e2-1-11", type: "paragraph", content: "Lying triggers deep reactions in us - feelings of betrayal, fear of who they'll become. Bring these anxieties to God. Ask Him for wisdom to address the behavior without shaming the child. Remember: you're building character, not just stopping lies." },
        { id: "e2-1-12", type: "quote", content: "\"Children who feel safe telling the truth become adults who value honesty.\"" }
      ]
    },
    {
      id: "early-2-2",
      section: 2,
      sectionTitle: "Lying & Honesty",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Truth & Trust",
      sections: [
        { id: "e2-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "e2-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What happened when you told the truth as a child? Was it safe?",
            "Were you punished harshly for mistakes, making lying seem safer?",
            "Did adults in your life model honesty?",
            "Did you learn that lying was necessary for survival or protection?"
          ]
        },
        { id: "e2-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "e2-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How do you react when you catch your child lying?",
            "Is it safe for your child to tell you hard truths?",
            "Do you model honesty, even when it's uncomfortable?",
            "Do you set traps or ask questions you already know the answer to?"
          ]
        },
        { id: "e2-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "e2-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Create safety for truth-telling by staying calm",
            "Stop asking 'trap' questions - state what I know instead",
            "Praise honesty more than I punish lies",
            "Address the behavior, not their character ('That was a lie' not 'You're a liar')"
          ]
        },
        { id: "e2-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "e2-2-8",
          type: "checklist",
          content: "Consider how God handles your honesty:",
          items: [
            "Is it safe to be honest with God about your failures?",
            "How does God respond when you try to hide from Him?",
            "What would it mean to make your presence as safe as God's for truth-telling?"
          ]
        }
      ]
    },
    {
      id: "early-2-3",
      section: 2,
      sectionTitle: "Lying & Honesty",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "e2-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "e2-3-2",
          type: "goal-phrases",
          items: [
            "\"It's safe to tell me the truth.\"",
            "\"I love you no matter what you did.\"",
            "\"Let's talk about what really happened.\"",
            "\"Thank you for being honest with me.\"",
            "\"The truth helps us fix things.\"",
            "\"God already knows - and loves you anyway.\"",
            "\"Honesty builds trust between us.\"",
            "\"Lord, help me make truth safe.\""
          ]
        },
        { id: "e2-3-3", type: "header", content: "Daily Check-In" },
        { id: "e2-3-4", type: "paragraph", content: "Rate how well you made truth-telling safe today:" },
        { id: "e2-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "e2-3-6", type: "scripture", content: "\"The truth will set you free.\" - John 8:32" },
        { id: "e2-3-7", type: "paragraph", content: "Truth brings freedom, not punishment. When children learn that honesty leads to help rather than harm, they become adults who value integrity." },
        { id: "e2-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "early-2-4",
      section: 2,
      sectionTitle: "Lying & Honesty",
      pageType: "visuals",
      title: "Make Truth Safe",
      subtitle: "Connection Creates Honesty",
      sections: [
        {
          id: "e2-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "correction-punish",
            after: "correction-teach",
            beforeLabel: "When I punish lies harshly, they hide more.",
            afterLabel: "When I make truth safe, they open up."
          }
        },
        {
          id: "e2-4-2",
          type: "goal-phrases",
          items: [
            "Safety creates honesty",
            "Address the lie, not their character",
            "Praise truth louder than you punish lies"
          ]
        },
        {
          id: "e2-4-3",
          type: "scripture",
          content: "\"The truth will set you free.\"\n— John 8:32"
        },
        {
          id: "e2-4-4",
          type: "quote",
          content: "Children lie to protect themselves. Make truth the safer option."
        }
      ]
    },

    // Facts & Myths - Section 2
    {
      id: "early-2-5",
      section: 2,
      sectionTitle: "Lying & Honesty",
      pageType: "reflection",
      title: "Facts & Myths",
      subtitle: "Lying & Honesty",
      sections: [
        { id: "e2-5-1", type: "header", content: "Common Myths vs. Evidence-Based Facts" },
        {
          id: "e2-5-2",
          type: "facts-myths",
          factsMythsItems: [
            { myth: "Kids who lie are bad kids.", fact: "Lying is a normal developmental milestone that shows cognitive growth." },
            { myth: "You should punish every lie harshly.", fact: "Harsh punishment makes kids better liars, not more honest." },
            { myth: "If they lie once, they'll always lie.", fact: "How you respond to lies shapes whether honesty feels safe." },
            { myth: "Good kids never lie.", fact: "All children lie — it's how they test boundaries and learn social rules." },
            { myth: "They should confess immediately when caught.", fact: "Fear prevents confession. Safety and connection invite honesty." }
          ]
        }
      ]
    },

    // Activity - Section 2
    {
      id: "early-2-6",
      section: 2,
      sectionTitle: "Lying & Honesty",
      pageType: "reflection",
      title: "Activity: Truth Treasure Hunt",
      subtitle: "Making Honesty Feel Safe",
      sections: [
        { id: "e2-6-1", type: "paragraph", content: "This week, practice creating safety for truth-telling. Use these steps when your child lies:" },
        { id: "e2-6-2", type: "subheader", content: "Step 1: Stay Calm & State What You Know" },
        { id: "e2-6-3", type: "checklist", items: ["Instead of: 'Did you eat the cookie?' → Say: 'I see the cookie is gone.'", "Instead of: 'Did you hit your sister?' → Say: 'I saw what happened.'", "Practice your own calm statement: ______________________________"] },
        { id: "e2-6-4", type: "subheader", content: "Step 2: Make Truth the Easier Path" },
        { id: "e2-6-5", type: "checklist", items: ["'Thank you for telling me the truth — that was brave.'", "'I'm glad you told me. Let's figure this out together.'", "'Honesty is always safe in this house.'"] },
        { id: "e2-6-6", type: "subheader", content: "Step 3: Track Your Wins" },
        { id: "e2-6-7", type: "checklist", items: ["Day 1: My child told the truth about _______________", "Day 2: I stayed calm when _______________", "Day 3: I praised honesty when _______________"] },
        { id: "e2-6-8", type: "scripture", content: "\"The truth will set you free.\" — John 8:32" }
      ]
    },

    // ============================================
    // SECTION 3: SCHOOL ANXIETY & PERFORMANCE
    // ============================================
    {
      id: "early-3-1",
      section: 3,
      sectionTitle: "School Anxiety",
      pageType: "outline",
      title: "School Stress & Performance Pressure",
      subtitle: "Using Anchoring & Validation",
      sections: [
        { id: "e3-1-1", type: "subheader", content: "Course Outline" },
        { id: "e3-1-2", type: "paragraph", content: "School introduces comparison, evaluation, and social dynamics that can overwhelm your child. Morning battles, homework resistance, and complaints about school often signal anxiety, not defiance." },
        { id: "e3-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "e3-1-4",
          type: "list",
          items: [
            "Understanding why school feels overwhelming",
            "Recognizing anxiety vs. defiance in school resistance",
            "Anchoring yourself for calm morning routines",
            "Validating school stress without adding pressure",
            "Supporting their academic journey with peace"
          ]
        },
        { id: "e3-1-10", type: "header", content: "Relying on God Through This" },
        { id: "e3-1-11", type: "paragraph", content: "You can't protect them from every struggle, and that's terrifying. Release them into God's care each morning. Pray for their day, their teachers, their friendships. Trust that God is with them even when you're not." },
        { id: "e3-1-12", type: "quote", content: "\"You can't fight their battles, but you can be the safe place they return to.\"" }
      ]
    },
    {
      id: "early-3-2",
      section: 3,
      sectionTitle: "School Anxiety",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "School & Performance",
      sections: [
        { id: "e3-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "e3-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What was school like for you emotionally?",
            "Did you feel pressure to perform academically?",
            "How were your school struggles handled at home?",
            "Did you feel your worth was tied to grades or performance?"
          ]
        },
        { id: "e3-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "e3-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How much do you focus on grades vs. effort and growth?",
            "Do you add to their school stress or help them manage it?",
            "Are mornings calm or chaotic in your home?",
            "How do you respond when they don't want to go to school?"
          ]
        },
        { id: "e3-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "e3-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Create a calm, predictable morning routine",
            "Ask 'How was your heart today?' not just 'How was school?'",
            "Validate school stress instead of dismissing it",
            "Pray with them before school for confidence and peace"
          ]
        },
        { id: "e3-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "e3-2-8",
          type: "checklist",
          content: "Consider God's presence:",
          items: [
            "Can you trust God to be with your child when you're not?",
            "How does God feel about your child's performance vs. their heart?",
            "What would it look like to release your child into God's care each morning?"
          ]
        }
      ]
    },
    {
      id: "early-3-3",
      section: 3,
      sectionTitle: "School Anxiety",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "e3-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "e3-3-2",
          type: "goal-phrases",
          items: [
            "\"School can be hard. I believe in you.\"",
            "\"Your best is enough.\"",
            "\"I'm proud of who you are, not what you do.\"",
            "\"It's okay to make mistakes.\"",
            "\"I'll be here when you get home.\"",
            "\"God is with you all day.\"",
            "\"You are brave and capable.\"",
            "\"Lord, watch over my child today.\""
          ]
        },
        { id: "e3-3-3", type: "header", content: "Daily Check-In" },
        { id: "e3-3-4", type: "paragraph", content: "Rate how well you supported their school journey with calm confidence today:" },
        { id: "e3-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "e3-3-6", type: "scripture", content: "\"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\" - Joshua 1:9" },
        { id: "e3-3-7", type: "paragraph", content: "God goes with them into the classroom. He is with them in every challenge. We can release them knowing they're never alone." },
        { id: "e3-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "early-3-4",
      section: 3,
      sectionTitle: "School Anxiety",
      pageType: "visuals",
      title: "Be Their Safe Place",
      subtitle: "Home Is Where They Refuel",
      sections: [
        {
          id: "e3-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "parent-stressed-child-upset",
            after: "parent-calm-child-calm",
            beforeLabel: "When I add pressure, they crumble.",
            afterLabel: "When I stay calm, they find strength."
          }
        },
        {
          id: "e3-4-2",
          type: "goal-phrases",
          items: [
            "Home is where they refuel",
            "Effort matters more than grades",
            "God goes with them everywhere"
          ]
        },
        {
          id: "e3-4-3",
          type: "scripture",
          content: "\"Be strong and courageous. The Lord your God is with you.\"\n— Joshua 1:9"
        },
        {
          id: "e3-4-4",
          type: "quote",
          content: "You can't control their day, but you can be their peace when they get home."
        }
      ]
    },

    // Facts & Myths - Section 3
    {
      id: "early-3-5",
      section: 3,
      sectionTitle: "School Anxiety",
      pageType: "reflection",
      title: "Facts & Myths",
      subtitle: "School Anxiety",
      sections: [
        { id: "e3-5-1", type: "header", content: "Common Myths vs. Evidence-Based Facts" },
        {
          id: "e3-5-2",
          type: "facts-myths",
          factsMythsItems: [
            { myth: "School anxiety means your child is weak.", fact: "Anxiety is a sign of a sensitive nervous system, not weakness." },
            { myth: "Pushing them harder builds resilience.", fact: "Pushing a stressed child deeper into stress causes shutdown, not growth." },
            { myth: "They'll just get over it.", fact: "Unaddressed anxiety often intensifies. Co-regulation helps it resolve." },
            { myth: "Good students don't feel anxious.", fact: "High-achieving kids often feel the MOST anxiety about performance." },
            { myth: "If they cry at drop-off, you should leave faster.", fact: "A calm, connected goodbye builds security. Rushing increases panic." }
          ]
        }
      ]
    },

    // Activity - Section 3
    {
      id: "early-3-6",
      section: 3,
      sectionTitle: "School Anxiety",
      pageType: "reflection",
      title: "Activity: My Brave Plan",
      subtitle: "Building a Coping Toolkit",
      sections: [
        { id: "e3-6-1", type: "paragraph", content: "Help your child build a personalized anxiety toolkit they can use before, during, and after school." },
        { id: "e3-6-2", type: "subheader", content: "Before School — Calming Routine" },
        { id: "e3-6-3", type: "checklist", items: ["5 deep belly breaths together", "A special goodbye handshake or phrase", "Pack a comfort item (photo, note, small toy)", "Review the day's schedule so they know what to expect"] },
        { id: "e3-6-4", type: "subheader", content: "During School — Brave Reminders" },
        { id: "e3-6-5", type: "checklist", items: ["Write a note in their lunchbox", "Teach them to squeeze their hands and breathe", "Give them a 'brave word' to whisper to themselves", "Remind them: 'You can do hard things'"] },
        { id: "e3-6-6", type: "subheader", content: "After School — Decompress Together" },
        { id: "e3-6-7", type: "checklist", items: ["15 minutes of quiet time before questions", "Snack and connection before homework", "Ask 'What was the best part of your day?'", "Celebrate one brave thing they did"] },
        { id: "e3-6-8", type: "scripture", content: "\"Be strong and courageous. Do not be afraid.\" — Joshua 1:9" }
      ]
    },

    // ============================================
    // SECTION 4: SIBLING CONFLICT
    // ============================================
    {
      id: "early-4-1",
      section: 4,
      sectionTitle: "Sibling Conflict",
      pageType: "outline",
      title: "When They Fight With Siblings",
      subtitle: "Using Connection & Empowerment",
      sections: [
        { id: "e4-1-1", type: "subheader", content: "Course Outline" },
        { id: "e4-1-2", type: "paragraph", content: "Sibling conflict is one of the most exhausting parts of parenting multiple children. The constant bickering, fighting over toys, and complaints of 'unfair!' can wear anyone down. But siblings are actually each other's best teachers for social skills." },
        { id: "e4-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "e4-1-4",
          type: "list",
          items: [
            "Why sibling conflict is developmentally normal",
            "Understanding competition for attention and resources",
            "Using connection to reduce rivalry",
            "Empowering children to solve their own conflicts",
            "Coaching instead of refereeing every fight"
          ]
        },
        { id: "e4-1-10", type: "header", content: "Relying on God Through This" },
        { id: "e4-1-11", type: "paragraph", content: "Sibling conflict triggers your need for peace and control. But God is forming both children through their relationship. Ask Him for wisdom to know when to step in and when to step back. Trust that He is working in both of them." },
        { id: "e4-1-12", type: "quote", content: "\"Siblings are God's built-in practice for learning to live with others.\"" }
      ]
    },
    {
      id: "early-4-2",
      section: 4,
      sectionTitle: "Sibling Conflict",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Siblings & Fairness",
      sections: [
        { id: "e4-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "e4-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What was your sibling relationship like growing up?",
            "Did parents compare you to your siblings?",
            "How were sibling conflicts handled in your family?",
            "Did you feel you had to compete for attention or love?"
          ]
        },
        { id: "e4-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "e4-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "Do you compare your children to each other?",
            "Who do you usually side with in conflicts?",
            "Do you referee every fight or let them work things out?",
            "Does each child get individual time with you?"
          ]
        },
        { id: "e4-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "e4-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Give each child 10 minutes of individual attention daily",
            "Resist solving every conflict - coach instead",
            "Avoid comparing siblings to each other",
            "Acknowledge each child's unique needs and feelings"
          ]
        },
        { id: "e4-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "e4-2-8",
          type: "checklist",
          content: "Consider God's view of each child:",
          items: [
            "Does God compare His children to each other?",
            "How does God handle our conflicts with others?",
            "What can sibling relationships teach about loving imperfect people?"
          ]
        }
      ]
    },
    {
      id: "early-4-3",
      section: 4,
      sectionTitle: "Sibling Conflict",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "e4-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "e4-3-2",
          type: "goal-phrases",
          items: [
            "\"I love you both differently, not less.\"",
            "\"What solution works for both of you?\"",
            "\"I hear you're both upset. Let's figure this out.\"",
            "\"You're learning to work together.\"",
            "\"Everyone's needs matter here.\"",
            "\"Your sibling is a gift, even when it's hard.\"",
            "\"God put your family together on purpose.\"",
            "\"Help me teach them to love, Lord.\""
          ]
        },
        { id: "e4-3-3", type: "header", content: "Daily Check-In" },
        { id: "e4-3-4", type: "paragraph", content: "Rate how well you coached sibling conflict today without always refereeing:" },
        { id: "e4-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "e4-3-6", type: "scripture", content: "\"How good and pleasant it is when God's people live together in unity!\" - Psalm 133:1" },
        { id: "e4-3-7", type: "paragraph", content: "Unity doesn't mean no conflict - it means working through conflict with love. Your children are practicing skills they'll need for life." },
        { id: "e4-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "early-4-4",
      section: 4,
      sectionTitle: "Sibling Conflict",
      pageType: "visuals",
      title: "Coach, Don't Referee",
      subtitle: "Teach Them to Solve It",
      sections: [
        {
          id: "e4-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "empower-control",
            after: "empower-trust",
            beforeLabel: "When I solve every fight, they stay dependent.",
            afterLabel: "When I coach them, they learn to resolve."
          }
        },
        {
          id: "e4-4-2",
          type: "goal-phrases",
          items: [
            "Individual time reduces competition",
            "Different, not less loved",
            "Conflict is practice for life"
          ]
        },
        {
          id: "e4-4-3",
          type: "scripture",
          content: "\"How good and pleasant when people live together in unity!\"\n— Psalm 133:1"
        },
        {
          id: "e4-4-4",
          type: "quote",
          content: "Your job is to coach them, not to referee every game."
        }
      ]
    },

    // Facts & Myths - Section 4
    {
      id: "early-4-5",
      section: 4,
      sectionTitle: "Sibling Conflict",
      pageType: "reflection",
      title: "Facts & Myths",
      subtitle: "Sibling Conflict",
      sections: [
        { id: "e4-5-1", type: "header", content: "Common Myths vs. Evidence-Based Facts" },
        {
          id: "e4-5-2",
          type: "facts-myths",
          factsMythsItems: [
            { myth: "Siblings should naturally get along.", fact: "Sibling conflict is normal and actually teaches negotiation skills." },
            { myth: "You should always find out who started it.", fact: "Focusing on 'who started it' creates competition, not resolution." },
            { myth: "Treating them exactly the same is fair.", fact: "Fair means giving each child what THEY need, not identical treatment." },
            { myth: "They fight because they don't love each other.", fact: "They fight because they're learning to share space, attention, and resources." },
            { myth: "Punishing both kids stops the fighting.", fact: "Teaching conflict resolution skills prevents future fights." }
          ]
        }
      ]
    },

    // Activity - Section 4
    {
      id: "early-4-6",
      section: 4,
      sectionTitle: "Sibling Conflict",
      pageType: "reflection",
      title: "Activity: Peace Maker Practice",
      subtitle: "Teaching Conflict Resolution",
      sections: [
        { id: "e4-6-1", type: "paragraph", content: "Instead of solving every fight, coach your children through these steps. Practice when everyone is calm first!" },
        { id: "e4-6-2", type: "subheader", content: "The 4-Step Peace Process" },
        { id: "e4-6-3", type: "list", items: ["1. STOP — Both kids freeze and take 3 breaths", "2. TELL — Each person says 'I felt ___ when ___'", "3. LISTEN — The other repeats back what they heard", "4. SOLVE — Together pick a solution that works for both"] },
        { id: "e4-6-3b", type: "subheader", content: "A Bug and a Wish (from the book A Bug and a Wish)" },
        { id: "e4-6-3c", type: "paragraph", content: "Teach your child to use this simple phrase: \"It BUGS me when you ____. I WISH you would ____.\" This gives kids the words to express frustration and ask for change — without yelling, hitting, or shutting down." },
        { id: "e4-6-4", type: "subheader", content: "Practice Scenarios" },
        { id: "e4-6-5", type: "checklist", items: ["Both want the same toy → take turns or find a different game", "One feels left out → invite them in or plan special time", "Name-calling happened → practice 'I felt hurt when you said...'", "Someone's thing got broken → practice apology + making it right"] },
        { id: "e4-6-6", type: "subheader", content: "This Week I Noticed:" },
        { id: "e4-6-7", type: "checklist", items: ["A conflict they resolved on their own: _______________", "A time I coached instead of solved: _______________", "Progress I celebrated: _______________"] },
        { id: "e4-6-8", type: "scripture", content: "\"Blessed are the peacemakers.\" — Matthew 5:9" }
      ]
    },

    // ============================================
    // SECTION 5: EMOTIONAL OUTBURSTS
    // ============================================
    {
      id: "early-5-1",
      section: 5,
      sectionTitle: "Emotional Outbursts",
      pageType: "outline",
      title: "Big Feelings in a Bigger World",
      subtitle: "Using Anchoring & Validation",
      sections: [
        { id: "e5-1-1", type: "subheader", content: "Course Outline" },
        { id: "e5-1-2", type: "paragraph", content: "At 5-7, children feel emotions intensely but still lack the skills to regulate them consistently. They may seem 'old enough to know better' but their emotional brain still overpowers their logical brain regularly." },
        { id: "e5-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "e5-1-4",
          type: "list",
          items: [
            "Why big feelings are still developmentally normal",
            "Understanding after-school meltdowns",
            "Staying anchored during their emotional storms",
            "Helping them name and regulate emotions",
            "Creating space for emotional decompression"
          ]
        },
        { id: "e5-1-10", type: "header", content: "Relying on God Through This" },
        { id: "e5-1-11", type: "paragraph", content: "Their meltdowns will trigger your own big feelings. In those moments, whisper, 'Lord, I need Your calm right now.' You're modeling how to handle overwhelming emotions by depending on Someone bigger than yourself." },
        { id: "e5-1-12", type: "quote", content: "\"They save their biggest feelings for you because you're their safest person.\"" }
      ]
    },
    {
      id: "early-5-2",
      section: 5,
      sectionTitle: "Emotional Outbursts",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Big Feelings",
      sections: [
        { id: "e5-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "e5-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "Were you allowed to have big feelings as a child?",
            "How were emotional outbursts handled in your home?",
            "Were certain emotions (anger, sadness) forbidden or shamed?",
            "Did you learn to stuff emotions down or express them freely?"
          ]
        },
        { id: "e5-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "e5-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How do you react when your child has a meltdown?",
            "Do you expect them to 'be over it' quickly?",
            "Which of their emotions are hardest for you to handle?",
            "Do you try to fix their feelings or just be with them?"
          ]
        },
        { id: "e5-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "e5-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Stay calm during their outbursts (anchor myself first)",
            "Help them name their feelings without judging",
            "Wait until they're calm to problem-solve",
            "Create space for after-school decompression"
          ]
        },
        { id: "e5-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "e5-2-8",
          type: "checklist",
          content: "Consider how God handles your emotions:",
          items: [
            "Does God ever tell you to stop feeling what you feel?",
            "How patient is God with your emotional struggles?",
            "What would it look like to give your child the grace God gives you?"
          ]
        }
      ]
    },
    {
      id: "early-5-3",
      section: 5,
      sectionTitle: "Emotional Outbursts",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "e5-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "e5-3-2",
          type: "goal-phrases",
          items: [
            "\"That sounds really frustrating.\"",
            "\"It's okay to feel upset.\"",
            "\"I'm here with you.\"",
            "\"Let's take some deep breaths together.\"",
            "\"When you're ready, we can talk.\"",
            "\"God gave you big feelings - let's learn to handle them.\"",
            "\"Your feelings are welcome here.\"",
            "\"Lord, help me stay calm in their storm.\""
          ]
        },
        { id: "e5-3-3", type: "header", content: "Daily Check-In" },
        { id: "e5-3-4", type: "paragraph", content: "Rate how well you validated their feelings while staying anchored today:" },
        { id: "e5-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "e5-3-6", type: "scripture", content: "\"The Lord is compassionate and gracious, slow to anger, abounding in love.\" - Psalm 103:8" },
        { id: "e5-3-7", type: "paragraph", content: "God is slow to anger with us. We can be slow to anger with our children. Their big feelings are not emergencies - they're opportunities to teach regulation." },
        { id: "e5-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "early-5-4",
      section: 5,
      sectionTitle: "Emotional Outbursts",
      pageType: "visuals",
      title: "Be Their Calm",
      subtitle: "Feelings Are Not Emergencies",
      sections: [
        {
          id: "e5-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "toddler-tantrum-react",
            after: "toddler-tantrum-anchor",
            beforeLabel: "When I react, we both spiral.",
            afterLabel: "When I stay anchored, they find calm."
          }
        },
        {
          id: "e5-4-2",
          type: "goal-phrases",
          items: [
            "I am their safest person",
            "Naming feelings helps regulate them",
            "After-school meltdowns mean I'm their safe place"
          ]
        },
        {
          id: "e5-4-3",
          type: "scripture",
          content: "\"The Lord is compassionate and gracious, slow to anger.\"\n— Psalm 103:8"
        },
        {
          id: "e5-4-4",
          type: "quote",
          content: "They melt down with you because you're safe. That's a compliment."
        }
      ]
    },

    // Facts & Myths - Section 5
    {
      id: "early-5-5",
      section: 5,
      sectionTitle: "Emotional Outbursts",
      pageType: "reflection",
      title: "Facts & Myths",
      subtitle: "Emotional Outbursts",
      sections: [
        { id: "e5-5-1", type: "header", content: "Common Myths vs. Evidence-Based Facts" },
        {
          id: "e5-5-2",
          type: "facts-myths",
          factsMythsItems: [
            { myth: "By 5-7, they should control their emotions.", fact: "Emotional regulation is still developing. Meltdowns are normal at this age." },
            { myth: "Ignoring outbursts makes them stop.", fact: "Ignoring teaches them their emotions don't matter, not how to manage them." },
            { myth: "They're being dramatic on purpose.", fact: "Their emotional brain is still dominant. The feelings are 100% real to them." },
            { myth: "Sending them to their room teaches regulation.", fact: "Isolation during distress teaches them to suppress, not regulate." },
            { myth: "If you comfort them, you're rewarding the behavior.", fact: "Comfort teaches them emotions are safe, which builds true regulation." }
          ]
        }
      ]
    },

    // Activity - Section 5
    {
      id: "early-5-6",
      section: 5,
      sectionTitle: "Emotional Outbursts",
      pageType: "reflection",
      title: "Activity: Feelings Thermometer",
      subtitle: "Naming & Measuring Emotions",
      sections: [
        { id: "e5-6-1", type: "paragraph", content: "Help your child learn to identify how BIG their feeling is so they can pick the right tool to calm down." },
        { id: "e5-6-2", type: "subheader", content: "The Feelings Scale (1-5)" },
        { id: "e5-6-3", type: "list", items: ["1 — Calm & Happy 😊 (I'm okay!)", "2 — A Little Annoyed 😐 (Something's bugging me)", "3 — Frustrated 😤 (I need help calming down)", "4 — Very Upset 😢 (I need a grown-up)", "5 — Exploding 🌋 (I can't think right now)"] },
        { id: "e5-6-4", type: "subheader", content: "Matching Tools to Levels" },
        { id: "e5-6-5", type: "checklist", items: ["Level 1-2: Deep breaths, talk about it, draw", "Level 3: Take a break, squeeze a pillow, count to 10", "Level 4: Go to calm corner, hug a stuffed animal, co-regulate with parent", "Level 5: Just be safe — no talking, just presence and breathing together"] },
        { id: "e5-6-6", type: "subheader", content: "Practice This Week" },
        { id: "e5-6-7", type: "checklist", items: ["Ask 'What number are you at?' during calm moments", "Help them name their level during a real moment", "Celebrate when they use a tool independently"] },
        { id: "e5-6-8", type: "scripture", content: "\"A gentle answer turns away wrath.\" — Proverbs 15:1" }
      ]
    },

    // ============================================
    // SECTION 6: FRIENDSHIP STRUGGLES
    // ============================================
    {
      id: "early-6-1",
      section: 6,
      sectionTitle: "Friendship Struggles",
      pageType: "outline",
      title: "Navigating Social Dynamics",
      subtitle: "Using Grow & Connection",
      sections: [
        { id: "e6-1-1", type: "subheader", content: "Course Outline" },
        { id: "e6-1-2", type: "paragraph", content: "Friendships become increasingly important at this age, but social skills are still developing. Playground exclusion, best friend drama, and social anxiety can deeply affect your child - and trigger your own protective instincts." },
        { id: "e6-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "e6-1-4",
          type: "list",
          items: [
            "Why friendships are volatile at this age",
            "Teaching social skills explicitly",
            "Listening without immediately fixing",
            "Helping them handle rejection and exclusion",
            "Building their identity beyond peer acceptance"
          ]
        },
        { id: "e6-1-10", type: "header", content: "Relying on God Through This" },
        { id: "e6-1-11", type: "paragraph", content: "Your child's social pain will hurt YOU deeply. You can't fix it or force other children to be kind. Bring your helplessness to God. Pray for their friendships, for their heart, for their resilience. Trust that these struggles are forming character." },
        { id: "e6-1-12", type: "quote", content: "\"You can't choose their friends, but you can be the friend they always come home to.\"" }
      ]
    },
    {
      id: "early-6-2",
      section: 6,
      sectionTitle: "Friendship Struggles",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Social Dynamics",
      sections: [
        { id: "e6-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "e6-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What were friendships like for you as a child?",
            "Did you experience exclusion or rejection?",
            "How did your parents respond to your social struggles?",
            "What did you learn about your worth from peer relationships?"
          ]
        },
        { id: "e6-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "e6-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How do you react when your child is excluded or hurt socially?",
            "Do you try to fix their friendships or let them navigate?",
            "Are you projecting your own social fears onto them?",
            "Do you listen first or jump to advice?"
          ]
        },
        { id: "e6-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "e6-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Listen fully before offering advice",
            "Validate their social pain without minimizing",
            "Role-play one social skill they're struggling with",
            "Remind them their worth isn't determined by peer acceptance"
          ]
        },
        { id: "e6-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "e6-2-8",
          type: "checklist",
          content: "Consider God's unconditional acceptance:",
          items: [
            "How does God's acceptance of you differ from peer acceptance?",
            "Where does true belonging and worth come from?",
            "How can you help your child find their identity in Christ rather than in friendships?"
          ]
        }
      ]
    },
    {
      id: "early-6-3",
      section: 6,
      sectionTitle: "Friendship Struggles",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "e6-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "e6-3-2",
          type: "goal-phrases",
          items: [
            "\"That sounds really hard.\"",
            "\"What do you wish had happened?\"",
            "\"You are a good friend.\"",
            "\"Not everyone will like you, and that's okay.\"",
            "\"How can I help?\"",
            "\"God loves you completely, always.\"",
            "\"Your worth isn't based on what others think.\"",
            "\"Lord, protect their heart.\""
          ]
        },
        { id: "e6-3-3", type: "header", content: "Daily Check-In" },
        { id: "e6-3-4", type: "paragraph", content: "Rate how well you listened and supported their social world today:" },
        { id: "e6-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "e6-3-6", type: "scripture", content: "\"A friend loves at all times, and a brother is born for a time of adversity.\" - Proverbs 17:17" },
        { id: "e6-3-7", type: "paragraph", content: "True friendship is built on love, not performance. Help your child understand what real friendship looks like - and be that friend for them at home." },
        { id: "e6-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "early-6-4",
      section: 6,
      sectionTitle: "Friendship Struggles",
      pageType: "visuals",
      title: "Listen First",
      subtitle: "Be Their Safe Place to Process",
      sections: [
        {
          id: "e6-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "validation-dismissive",
            after: "validation-empathy",
            beforeLabel: "When I minimize their pain, they stop sharing.",
            afterLabel: "When I listen fully, they feel understood."
          }
        },
        {
          id: "e6-4-2",
          type: "goal-phrases",
          items: [
            "Listen before you fix",
            "Their worth isn't based on peers",
            "Be the friend they come home to"
          ]
        },
        {
          id: "e6-4-3",
          type: "scripture",
          content: "\"A friend loves at all times.\"\n— Proverbs 17:17"
        },
        {
          id: "e6-4-4",
          type: "quote",
          content: "You can't control who includes them, but you can be the one who always does."
        }
      ]
    },

    // Facts & Myths - Section 6
    {
      id: "early-6-5",
      section: 6,
      sectionTitle: "Friendship Struggles",
      pageType: "reflection",
      title: "Facts & Myths",
      subtitle: "Friendship Struggles",
      sections: [
        { id: "e6-5-1", type: "header", content: "Common Myths vs. Evidence-Based Facts" },
        {
          id: "e6-5-2",
          type: "facts-myths",
          factsMythsItems: [
            { myth: "Popular kids are the happiest.", fact: "One or two close friendships matter more than popularity." },
            { myth: "You should fix their friendship problems.", fact: "Coaching them through it builds lifelong social skills." },
            { myth: "If they're excluded, something is wrong with them.", fact: "Social dynamics at this age are fluid. Exclusion is often situational." },
            { myth: "They should be friends with everyone.", fact: "Learning to choose healthy friendships is a critical life skill." },
            { myth: "Telling them to 'just be nice' solves everything.", fact: "They need specific social skills taught and practiced." }
          ]
        }
      ]
    },

    // Activity - Section 6
    {
      id: "early-6-6",
      section: 6,
      sectionTitle: "Friendship Struggles",
      pageType: "reflection",
      title: "Activity: Friendship Skills Builder",
      subtitle: "Practicing Social Skills at Home",
      sections: [
        { id: "e6-6-1", type: "paragraph", content: "Social skills are LEARNED, not automatic. Practice these with your child through role-play and real-life situations." },
        { id: "e6-6-2", type: "subheader", content: "Skills to Practice" },
        { id: "e6-6-3", type: "checklist", items: ["Joining a group: 'Can I play too?' + wait for the answer", "Sharing: Taking turns without a timer", "Handling exclusion: 'That hurt my feelings' + finding another friend", "Being a good loser: 'Good game!' even when you lose", "Apologizing: 'I'm sorry I ___, next time I'll ___'"] },
        { id: "e6-6-4", type: "subheader", content: "Role-Play Scenarios" },
        { id: "e6-6-5", type: "checklist", items: ["'What if someone says you can't play?' — practice responses", "'What if a friend says something mean?' — practice 'I' statements", "'What if you want to play something different?' — practice compromise"] },
        { id: "e6-6-6", type: "subheader", content: "Friendship Wins This Week" },
        { id: "e6-6-7", type: "checklist", items: ["A kind thing my child did for a friend: _______________", "A hard social moment they handled well: _______________", "A skill we practiced together: _______________"] },
        { id: "e6-6-8", type: "scripture", content: "\"A friend loves at all times.\" — Proverbs 17:17" }
      ]
    },

    // ============================================
    // SECTION 7: RESPONSIBILITY & CHORES
    // ============================================
    {
      id: "early-7-1",
      section: 7,
      sectionTitle: "Responsibility & Chores",
      pageType: "outline",
      title: "Building Responsibility",
      subtitle: "Using Grow & Empowerment",
      sections: [
        { id: "e7-1-1", type: "subheader", content: "Course Outline" },
        { id: "e7-1-2", type: "paragraph", content: "Getting children to do chores often feels like more work than doing it yourself. But responsibility is a muscle that must be built. Children who contribute to the home develop confidence, competence, and connection to family." },
        { id: "e7-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "e7-1-4",
          type: "list",
          items: [
            "Why building responsibility matters for their future",
            "Teaching skills step by step with patience",
            "Framing chores as contribution, not punishment",
            "Giving them ownership and autonomy",
            "Lowering standards while building capability"
          ]
        },
        { id: "e7-1-10", type: "header", content: "Relying on God Through This" },
        { id: "e7-1-11", type: "paragraph", content: "Teaching responsibility requires patience you don't naturally have. It's easier to just do it yourself. Ask God for endurance to train them, trusting that you're raising capable adults, not just getting a clean house." },
        { id: "e7-1-12", type: "quote", content: "\"The goal isn't a clean house - it's a capable child.\"" }
      ]
    },
    {
      id: "early-7-2",
      section: 7,
      sectionTitle: "Responsibility & Chores",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Building Capability",
      sections: [
        { id: "e7-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "e7-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "Were you given age-appropriate responsibilities growing up?",
            "How were chores handled in your home?",
            "Did you feel like a contributing member of the family?",
            "Were you criticized or encouraged when learning new tasks?"
          ]
        },
        { id: "e7-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "e7-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "Do you do things for your child they could do themselves?",
            "How do you respond when they do tasks imperfectly?",
            "Is your expectation level appropriate for their age?",
            "Do chores feel like punishment or contribution in your home?"
          ]
        },
        { id: "e7-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "e7-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Assign one age-appropriate responsibility",
            "Teach the skill step by step, WITH them",
            "Lower my standard and praise effort",
            "Frame chores as contribution, not punishment"
          ]
        },
        { id: "e7-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "e7-2-8",
          type: "checklist",
          content: "Consider how God develops responsibility in you:",
          items: [
            "How does God grow your capability and maturity over time?",
            "Does God expect perfection or progress?",
            "How can building responsibility reflect God's discipleship of us?"
          ]
        }
      ]
    },
    {
      id: "early-7-3",
      section: 7,
      sectionTitle: "Responsibility & Chores",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "e7-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "e7-3-2",
          type: "goal-phrases",
          items: [
            "\"This is YOUR job. The family is counting on you.\"",
            "\"Let me show you how.\"",
            "\"Thank you for contributing.\"",
            "\"Mistakes help us learn.\"",
            "\"You're becoming so capable!\"",
            "\"We're a team in this family.\"",
            "\"God gives us work because it's good for us.\"",
            "\"Lord, help me train, not just do.\""
          ]
        },
        { id: "e7-3-3", type: "header", content: "Daily Check-In" },
        { id: "e7-3-4", type: "paragraph", content: "Rate how well you trained and empowered responsibility today:" },
        { id: "e7-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "e7-3-6", type: "scripture", content: "\"Whatever you do, work at it with all your heart, as working for the Lord.\" - Colossians 3:23" },
        { id: "e7-3-7", type: "paragraph", content: "Work is not punishment - it's part of being human. When we teach our children to work, we're teaching them to participate in God's design for life." },
        { id: "e7-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "early-7-4",
      section: 7,
      sectionTitle: "Responsibility & Chores",
      pageType: "visuals",
      title: "Train, Don't Just Expect",
      subtitle: "Capable Kids Take Time",
      sections: [
        {
          id: "e7-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "grow-critical",
            after: "grow-encourage",
            beforeLabel: "When I criticize, they give up.",
            afterLabel: "When I encourage, they grow."
          }
        },
        {
          id: "e7-4-2",
          type: "goal-phrases",
          items: [
            "Done is better than perfect",
            "Train WITH them first",
            "Contribution, not punishment"
          ]
        },
        {
          id: "e7-4-3",
          type: "scripture",
          content: "\"Whatever you do, work at it with all your heart.\"\n— Colossians 3:23"
        },
        {
          id: "e7-4-4",
          type: "quote",
          content: "You're not just getting a clean house - you're building a capable adult."
        }
      ]
    },

    // Facts & Myths - Section 7
    {
      id: "early-7-5",
      section: 7,
      sectionTitle: "Responsibility & Chores",
      pageType: "reflection",
      title: "Facts & Myths",
      subtitle: "Responsibility & Chores",
      sections: [
        { id: "e7-5-1", type: "header", content: "Common Myths vs. Evidence-Based Facts" },
        {
          id: "e7-5-2",
          type: "facts-myths",
          factsMythsItems: [
            { myth: "Kids should do chores without being asked.", fact: "Executive function is still developing — they need reminders and routines." },
            { myth: "If they don't do it right, they're being lazy.", fact: "Their skills are still developing. Progress matters more than perfection." },
            { myth: "Rewards and allowance are bribes.", fact: "Age-appropriate incentives teach the connection between work and reward." },
            { myth: "They should just know what needs to be done.", fact: "They need to be taught, modeled, and practiced alongside you." },
            { myth: "Nagging is the only way to get them to help.", fact: "Visual checklists and routines reduce the need for verbal reminders." }
          ]
        }
      ]
    },

    // Activity - Section 7
    {
      id: "early-7-6",
      section: 7,
      sectionTitle: "Responsibility & Chores",
      pageType: "reflection",
      title: "Activity: My Chore Chart Builder",
      subtitle: "Building Responsibility with Routine",
      sections: [
        { id: "e7-6-1", type: "paragraph", content: "Work WITH your child to create a chore routine. Kids who help CHOOSE their tasks are more likely to follow through." },
        { id: "e7-6-2", type: "subheader", content: "Age-Appropriate Chores (5-7)" },
        { id: "e7-6-3", type: "checklist", items: ["Make their bed (it won't be perfect — that's okay!)", "Set or clear the table", "Feed a pet", "Put dirty clothes in the hamper", "Help sort laundry by color", "Water plants", "Pick up toys before bed"] },
        { id: "e7-6-4", type: "subheader", content: "My Child's Chosen Chores" },
        { id: "e7-6-5", type: "checklist", items: ["Morning chore: _______________", "After school chore: _______________", "Before bed chore: _______________"] },
        { id: "e7-6-6", type: "subheader", content: "Keys to Success" },
        { id: "e7-6-7", type: "list", items: ["Do it WITH them first, then let them try alone", "Use a visual checklist they can see", "Praise effort over perfection", "Be consistent — same chores, same time, every day"] },
        { id: "e7-6-8", type: "scripture", content: "\"Whatever you do, work at it with all your heart.\" — Colossians 3:23" }
      ]
    }
  ]
};
