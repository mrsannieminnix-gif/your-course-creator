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
    }
  ]
};
