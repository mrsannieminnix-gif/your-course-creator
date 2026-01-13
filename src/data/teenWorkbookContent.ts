import { WorkbookData } from "@/types/workbook";

export const teenWorkbookData: WorkbookData = {
  title: "The Model Parenting Method: Ages 13-18",
  pages: [
    // ============================================
    // SECTION 1: THE DEVELOPING BRAIN (Foundation)
    // ============================================
    {
      id: "teen-1-1",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "outline",
      title: "Understanding Your 13-18 Year Old",
      subtitle: "Brain Development, Identity & Preparing for Adulthood",
      sections: [
        { id: "t1-1-1", type: "header", content: "Course Outline" },
        { id: "t1-1-2", type: "paragraph", content: "In this foundational section, you'll learn about the teenage brain remodel, identity formation, and the delicate dance of staying connected while releasing them toward adulthood. This season will require more faith than any before - trusting God with what you cannot control." },
        { id: "t1-1-3", type: "subheader", content: "What You'll Learn:" },
        {
          id: "t1-1-4",
          type: "list",
          items: [
            "The brain is under major construction - the prefrontal cortex isn't done until mid-20s",
            "Risk assessment is compromised - the reward center overpowers the logic center",
            "Identity formation: 'Who am I? What do I believe? Where do I belong?'",
            "Peer influence peaks - they're biologically wired to prioritize belonging",
            "Abstract thinking is maturing - they can question everything (and will)"
          ]
        },
        { id: "t1-1-5", type: "header", content: "Key Milestones: Ages 13-18" },
        {
          id: "t1-1-6",
          type: "list",
          items: [
            "Identity solidification: forming values, beliefs, and sense of self",
            "Intimate friendships: deep connections outside family",
            "Romantic interest: exploring attraction and relationships",
            "Future orientation: thinking about career, college, independence",
            "Moral autonomy: developing their own ethical framework"
          ]
        },
        { id: "t1-1-7", type: "header", content: "Nervous System Regulation" },
        { id: "t1-1-8", type: "paragraph", content: "Teens can regulate themselves much better than children, but stress still dysregulates them. They may push you away but still need your calm presence. Co-regulation now looks more like quiet availability than active involvement." },
        { id: "t1-1-9", type: "header", content: "Relying on God Through This" },
        { id: "t1-1-10", type: "paragraph", content: "You are losing control, and that's the point. This season is about releasing them to God, trusting that He will complete the work He started. Your role shifts from manager to consultant. This requires a faith you cannot manufacture on your own." },
        { id: "t1-1-11", type: "quote", content: "\"Your job is no longer to control their path - it's to prepare them to walk it without you.\"" }
      ]
    },
    {
      id: "teen-1-2",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Understanding Development",
      sections: [
        { id: "t1-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "t1-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What were your teen years like?",
            "How did your parents handle your growing independence?",
            "Did you feel trusted, controlled, or abandoned?",
            "What do you wish had been different?"
          ]
        },
        { id: "t1-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "t1-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "Are you holding too tight or letting go too fast?",
            "Can you handle disagreement without it becoming a battle?",
            "Do you respect their growing autonomy?",
            "Is your home a place they want to come back to?"
          ]
        },
        { id: "t1-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "t1-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Give them more autonomy in one area",
            "Listen more than I lecture",
            "Resist the urge to solve their problems",
            "Trust them with a decision I'd normally control"
          ]
        },
        { id: "t1-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "t1-2-8",
          type: "checklist",
          content: "Consider how God parents you:",
          items: [
            "How does God give you freedom to make your own choices?",
            "Can you trust God with your teen's future?",
            "What does it look like to release your teen into God's hands?"
          ]
        }
      ]
    },
    {
      id: "teen-1-3",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "t1-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "t1-3-2",
          type: "goal-phrases",
          items: [
            "\"What do you think you should do?\"",
            "\"I trust your judgment.\"",
            "\"Tell me more about that.\"",
            "\"I'm always here if you need me.\"",
            "\"You're becoming an amazing person.\"",
            "\"God has a plan for your life.\"",
            "\"I'm proud of who you're becoming.\"",
            "\"Lord, I release them to You.\""
          ]
        },
        { id: "t1-3-3", type: "header", content: "Daily Check-In" },
        { id: "t1-3-4", type: "paragraph", content: "Rate how well you balanced support and release today (1 = struggled, 5 = nailed it):" },
        { id: "t1-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "t1-3-6", type: "scripture", content: "\"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\" - Proverbs 3:5-6" },
        { id: "t1-3-7", type: "paragraph", content: "This verse is for YOU as much as for your teen. Trust God's work in them, even when you can't see it. Your understanding is limited; His is not." },
        { id: "t1-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "teen-1-4",
      section: 1,
      sectionTitle: "The Developing Brain",
      pageType: "visuals",
      title: "Release to Launch",
      subtitle: "Preparing Them to Leave Well",
      sections: [
        {
          id: "t1-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "empower-control",
            after: "empower-trust",
            beforeLabel: "When I hold too tight, they push away harder.",
            afterLabel: "When I trust with freedom, they stay connected."
          }
        },
        {
          id: "t1-4-2",
          type: "goal-phrases",
          items: [
            "Control is an illusion",
            "Trust is the final lesson",
            "Consultant, not manager"
          ]
        },
        {
          id: "t1-4-3",
          type: "scripture",
          content: "\"Trust in the Lord with all your heart.\"\n— Proverbs 3:5"
        },
        {
          id: "t1-4-4",
          type: "quote",
          content: "The goal was never to keep them close forever - it was to prepare them to leave well."
        }
      ]
    },

    // ============================================
    // SECTION 2: COMMUNICATION BREAKDOWN
    // ============================================
    {
      id: "teen-2-1",
      section: 2,
      sectionTitle: "Communication Breakdown",
      pageType: "outline",
      title: "When They Won't Talk to You",
      subtitle: "Using Connection & Validation",
      sections: [
        { id: "t2-1-1", type: "subheader", content: "Course Outline" },
        { id: "t2-1-2", type: "paragraph", content: "Many parents feel like they've lost their teen. The child who told them everything now shares nothing. One-word answers, closed doors, and avoidance feel like rejection. But silence doesn't always mean disconnection." },
        { id: "t2-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "t2-1-4",
          type: "list",
          items: [
            "Why teens pull back from parents",
            "Being available without being intrusive",
            "Creating space for spontaneous conversation",
            "Listening without lecturing when they share",
            "Keeping the door open for connection"
          ]
        },
        { id: "t2-1-10", type: "header", content: "Relying on God Through This" },
        { id: "t2-1-11", type: "paragraph", content: "The silence can feel like failure. It's not. Bring your loneliness and grief to God. Ask Him to keep the door open, to give you patience, and to speak to your teen's heart when you can't." },
        { id: "t2-1-12", type: "quote", content: "\"Keep the door open. Even when they're not walking through it, they need to know it's there.\"" }
      ]
    },
    {
      id: "teen-2-2",
      section: 2,
      sectionTitle: "Communication Breakdown",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Connection & Communication",
      sections: [
        { id: "t2-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "t2-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "Did you share openly with your parents as a teen?",
            "Was it safe to talk about hard things?",
            "Did your parents listen or lecture?",
            "What would have helped you open up more?"
          ]
        },
        { id: "t2-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "t2-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "Do you lecture or listen when they share?",
            "Is there judgment in your response to hard topics?",
            "Are you available without being pushy?",
            "Do you respect their need for privacy?"
          ]
        },
        { id: "t2-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "t2-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Create space for spontaneous conversation (car rides, activities)",
            "Listen without immediately correcting or advising",
            "Ask open-ended questions, not interrogative ones",
            "Resist filling silence - let them think"
          ]
        },
        { id: "t2-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "t2-2-8",
          type: "checklist",
          content: "Consider how God waits for you:",
          items: [
            "Does God force you to talk, or wait for you to come?",
            "How does God respond when you finally open up?",
            "Can you wait patiently for your teen as God waits for you?"
          ]
        }
      ]
    },
    {
      id: "teen-2-3",
      section: 2,
      sectionTitle: "Communication Breakdown",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "t2-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "t2-3-2",
          type: "goal-phrases",
          items: [
            "\"I'm here whenever you want to talk.\"",
            "\"That sounds hard.\"",
            "\"Tell me more.\"",
            "\"I won't lecture. I just want to understand.\"",
            "\"No judgment here.\"",
            "\"You can tell me anything.\"",
            "\"I'm on your team, not against you.\"",
            "\"Lord, help me listen more than I speak.\""
          ]
        },
        { id: "t2-3-3", type: "header", content: "Daily Check-In" },
        { id: "t2-3-4", type: "paragraph", content: "Rate how well you created space for connection without forcing it today:" },
        { id: "t2-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "t2-3-6", type: "scripture", content: "\"Everyone should be quick to listen, slow to speak and slow to become angry.\" - James 1:19" },
        { id: "t2-3-7", type: "paragraph", content: "Quick to listen, slow to speak. This is the key to keeping communication open with teens. Lead with your ears, not your mouth." },
        { id: "t2-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "teen-2-4",
      section: 2,
      sectionTitle: "Communication Breakdown",
      pageType: "visuals",
      title: "Listen First",
      subtitle: "Keep the Door Open",
      sections: [
        {
          id: "t2-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "validation-dismissive",
            after: "validation-empathy",
            beforeLabel: "When I lecture, they shut down.",
            afterLabel: "When I listen, they open up."
          }
        },
        {
          id: "t2-4-2",
          type: "goal-phrases",
          items: [
            "Listen more than you speak",
            "Silence isn't rejection",
            "Be available, not intrusive"
          ]
        },
        {
          id: "t2-4-3",
          type: "scripture",
          content: "\"Be quick to listen, slow to speak.\"\n— James 1:19"
        },
        {
          id: "t2-4-4",
          type: "quote",
          content: "They may not walk through the door today. Make sure it's always open."
        }
      ]
    },

    // ============================================
    // SECTION 3: RISKY BEHAVIOR
    // ============================================
    {
      id: "teen-3-1",
      section: 3,
      sectionTitle: "Risky Behavior",
      pageType: "outline",
      title: "Parties, Substances & Bad Decisions",
      subtitle: "Using Correction & Connection",
      sections: [
        { id: "t3-1-1", type: "subheader", content: "Course Outline" },
        { id: "t3-1-2", type: "paragraph", content: "Teens are wired for risk. The reward center of their brain is fully active while the risk-assessment center is still developing. Add peer influence and you have a recipe for dangerous decisions. Your response matters more than you know." },
        { id: "t3-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "t3-1-4",
          type: "list",
          items: [
            "Why the teen brain is wired for risk",
            "Setting clear boundaries with clear consequences",
            "Keeping the relationship intact during correction",
            "Making your home the safest place to fail",
            "Releasing them to God when you can't control"
          ]
        },
        { id: "t3-1-10", type: "header", content: "Relying on God Through This" },
        { id: "t3-1-11", type: "paragraph", content: "Their risky behavior will terrify you - and you cannot control it. Release them to God daily. Pray protection over them, but also trust that God can use even their failures for their growth. Your panic helps no one." },
        { id: "t3-1-12", type: "quote", content: "\"They need to know: 'I'd rather you call me at 2am than make a worse decision.'\"" }
      ]
    },
    {
      id: "teen-3-2",
      section: 3,
      sectionTitle: "Risky Behavior",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Risk & Consequences",
      sections: [
        { id: "t3-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "t3-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What risks did you take as a teen?",
            "Did your parents know about them?",
            "How were mistakes and failures handled?",
            "Would you have called your parents in trouble? Why or why not?"
          ]
        },
        { id: "t3-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "t3-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "Would your teen call you in trouble, or hide it?",
            "Are your consequences consistent and enforceable?",
            "Do you respond to mistakes with calm correction or explosive anger?",
            "Have you talked about making safe choices when they're unsafe?"
          ]
        },
        { id: "t3-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "t3-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Have a 'no questions asked' pickup conversation",
            "Establish clear expectations and consequences",
            "Respond to mistakes with calm, not rage",
            "Keep the relationship priority even during correction"
          ]
        },
        { id: "t3-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "t3-2-8",
          type: "checklist",
          content: "Consider how God responds to your failures:",
          items: [
            "Does God's love for you depend on your behavior?",
            "How does God discipline without abandoning?",
            "Can you extend God's grace during their failures?"
          ]
        }
      ]
    },
    {
      id: "teen-3-3",
      section: 3,
      sectionTitle: "Risky Behavior",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "t3-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "t3-3-2",
          type: "goal-phrases",
          items: [
            "\"Call me anytime. No questions asked - just come home safe.\"",
            "\"There are consequences AND I still love you.\"",
            "\"I'm disappointed, but we'll get through this.\"",
            "\"Let's talk about what happened.\"",
            "\"Your safety is more important than my anger.\"",
            "\"God redeems our mistakes.\"",
            "\"This isn't who you are - it's a lesson you're learning.\"",
            "\"Lord, protect them. I can't.\""
          ]
        },
        { id: "t3-3-3", type: "header", content: "Daily Check-In" },
        { id: "t3-3-4", type: "paragraph", content: "Rate how well you maintained connection while enforcing boundaries today:" },
        { id: "t3-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "t3-3-6", type: "scripture", content: "\"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.\" - 1 John 1:9" },
        { id: "t3-3-7", type: "paragraph", content: "God offers forgiveness and restoration after failure. So can you. Consequences teach; grace heals. They need both." },
        { id: "t3-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "teen-3-4",
      section: 3,
      sectionTitle: "Risky Behavior",
      pageType: "visuals",
      title: "Safety Over Anger",
      subtitle: "They Need to Be Able to Call",
      sections: [
        {
          id: "t3-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "correction-punish",
            after: "correction-teach",
            beforeLabel: "When they fear my rage, they hide mistakes.",
            afterLabel: "When they trust my love, they call me."
          }
        },
        {
          id: "t3-4-2",
          type: "goal-phrases",
          items: [
            "Safety over anger",
            "Consequences with connection",
            "Call me anytime - no questions asked"
          ]
        },
        {
          id: "t3-4-3",
          type: "scripture",
          content: "\"If we confess our sins, he is faithful to forgive.\"\n— 1 John 1:9"
        },
        {
          id: "t3-4-4",
          type: "quote",
          content: "Make your home the safest place to fail - that's where they'll turn when they do."
        }
      ]
    },

    // ============================================
    // SECTION 4: ROMANTIC RELATIONSHIPS
    // ============================================
    {
      id: "teen-4-1",
      section: 4,
      sectionTitle: "Romantic Relationships",
      pageType: "outline",
      title: "Dating, Attraction & Heartbreak",
      subtitle: "Using Validation & Connection",
      sections: [
        { id: "t4-1-1", type: "subheader", content: "Course Outline" },
        { id: "t4-1-2", type: "paragraph", content: "Romantic relationships are a normal part of teen development. Whether your teen is dating, interested, or heartbroken - they need your guidance, not your panic. This is where they learn how to love and be loved." },
        { id: "t4-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "t4-1-4",
          type: "list",
          items: [
            "Why romantic interest is developmentally normal",
            "Taking their feelings seriously",
            "Staying curious without being controlling",
            "Helping them navigate heartbreak",
            "Teaching what healthy relationships look like"
          ]
        },
        { id: "t4-1-10", type: "header", content: "Relying on God Through This" },
        { id: "t4-1-11", type: "paragraph", content: "You cannot control who they love. Bring your fears to God. Pray for their heart, for wisdom in relationships, and for protection from harm. Trust that God is writing their love story, even when the chapters are painful." },
        { id: "t4-1-12", type: "quote", content: "\"Your reaction to their first love shapes how they'll share about every love after.\"" }
      ]
    },
    {
      id: "teen-4-2",
      section: 4,
      sectionTitle: "Romantic Relationships",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Love & Relationships",
      sections: [
        { id: "t4-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "t4-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "What was your first crush or relationship like?",
            "How did your parents respond to your romantic interests?",
            "Did you feel safe talking to them about relationships?",
            "What did you learn about love from your family of origin?"
          ]
        },
        { id: "t4-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "t4-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How do you respond when they mention someone they like?",
            "Do you take their feelings seriously or dismiss them?",
            "Are you overly controlling or completely hands-off?",
            "Have you talked about healthy relationships?"
          ]
        },
        { id: "t4-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "t4-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Ask about their romantic interests with curiosity, not interrogation",
            "Share appropriate stories from my own dating experiences",
            "Discuss what makes relationships healthy",
            "Take their feelings seriously, even if they seem small to me"
          ]
        },
        { id: "t4-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "t4-2-8",
          type: "checklist",
          content: "Consider how God guides our hearts:",
          items: [
            "Can you trust God with your teen's heart and relationships?",
            "What does God's love teach about healthy relationships?",
            "How can you pray for their future partner, even now?"
          ]
        }
      ]
    },
    {
      id: "teen-4-3",
      section: 4,
      sectionTitle: "Romantic Relationships",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "t4-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "t4-3-2",
          type: "goal-phrases",
          items: [
            "\"Tell me about them.\"",
            "\"Your feelings matter.\"",
            "\"That sounds like a big deal.\"",
            "\"I'm here if you want to talk about it.\"",
            "\"Heartbreak is real - I'm sorry you're hurting.\"",
            "\"You deserve to be treated with respect.\"",
            "\"God has someone special for your future.\"",
            "\"Lord, protect their heart.\""
          ]
        },
        { id: "t4-3-3", type: "header", content: "Daily Check-In" },
        { id: "t4-3-4", type: "paragraph", content: "Rate how well you engaged with their romantic world with validation today:" },
        { id: "t4-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "t4-3-6", type: "scripture", content: "\"Above all else, guard your heart, for everything you do flows from it.\" - Proverbs 4:23" },
        { id: "t4-3-7", type: "paragraph", content: "Help them guard their heart - not by controlling, but by guiding. Teach them what healthy love looks like, and trust God with the rest." },
        { id: "t4-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "teen-4-4",
      section: 4,
      sectionTitle: "Romantic Relationships",
      pageType: "visuals",
      title: "Take It Seriously",
      subtitle: "Their Feelings Are Real",
      sections: [
        {
          id: "t4-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "validation-dismissive",
            after: "validation-empathy",
            beforeLabel: "When I dismiss their feelings, they stop sharing.",
            afterLabel: "When I take them seriously, they trust me."
          }
        },
        {
          id: "t4-4-2",
          type: "goal-phrases",
          items: [
            "Their feelings are real",
            "Curiosity over control",
            "First love shapes future love"
          ]
        },
        {
          id: "t4-4-3",
          type: "scripture",
          content: "\"Guard your heart, for everything flows from it.\"\n— Proverbs 4:23"
        },
        {
          id: "t4-4-4",
          type: "quote",
          content: "How you respond to their first love determines if they'll tell you about the next one."
        }
      ]
    },

    // ============================================
    // SECTION 5: MENTAL HEALTH
    // ============================================
    {
      id: "teen-5-1",
      section: 5,
      sectionTitle: "Mental Health",
      pageType: "outline",
      title: "Anxiety, Depression & When to Worry",
      subtitle: "Using Anchoring & Validation",
      sections: [
        { id: "t5-1-1", type: "subheader", content: "Course Outline" },
        { id: "t5-1-2", type: "paragraph", content: "Mental health struggles are increasingly common among teens. Anxiety, depression, self-harm, and suicidal thoughts are real and serious. Your calm, informed response can be lifesaving. Don't be afraid to ask the hard questions." },
        { id: "t5-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "t5-1-4",
          type: "list",
          items: [
            "Recognizing warning signs of mental health struggles",
            "Staying calm to create safety for sharing",
            "Taking their pain seriously without panic",
            "Knowing when to seek professional help",
            "Walking with God through the darkness"
          ]
        },
        { id: "t5-1-10", type: "header", content: "Relying on God Through This" },
        { id: "t5-1-11", type: "paragraph", content: "A struggling teen is every parent's worst fear. You cannot heal them on your own - and you're not supposed to. God walks with you AND with them through the darkness. Seek help. Pray constantly. You are not alone." },
        { id: "t5-1-12", type: "quote", content: "\"Asking about suicide doesn't create suicidal thoughts - it opens a door for them to ask for help.\"" }
      ]
    },
    {
      id: "teen-5-2",
      section: 5,
      sectionTitle: "Mental Health",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Mental & Emotional Wellness",
      sections: [
        { id: "t5-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "t5-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "How was mental health discussed (or not discussed) in your family?",
            "Did you ever struggle with anxiety or depression as a teen?",
            "Was seeking help seen as weakness or wisdom?",
            "Did you have an adult you could talk to about hard things?"
          ]
        },
        { id: "t5-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "t5-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How do you respond when your teen expresses sadness or anxiety?",
            "Are you comfortable asking hard questions about their mental state?",
            "Do they know you would support them seeking professional help?",
            "Are you watching for warning signs?"
          ]
        },
        { id: "t5-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "t5-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Create space to talk about mental health openly",
            "Watch for warning signs without overreacting",
            "Let them know seeking help is strength, not weakness",
            "Know the resources available if they need professional help"
          ]
        },
        { id: "t5-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "t5-2-8",
          type: "checklist",
          content: "Consider God's presence in darkness:",
          items: [
            "Does God abandon us in our darkest moments?",
            "How can faith and professional help work together?",
            "Can you trust God to walk with your teen through struggles you can't fix?"
          ]
        }
      ]
    },
    {
      id: "teen-5-3",
      section: 5,
      sectionTitle: "Mental Health",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "t5-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "t5-3-2",
          type: "goal-phrases",
          items: [
            "\"How are you really doing?\"",
            "\"It's okay to not be okay.\"",
            "\"I'm here for you, no matter what.\"",
            "\"Let's get you some help.\"",
            "\"Your feelings are valid.\"",
            "\"God is with you in the darkness.\"",
            "\"You are not alone.\"",
            "\"Lord, carry what I cannot.\""
          ]
        },
        { id: "t5-3-3", type: "header", content: "Daily Check-In" },
        { id: "t5-3-4", type: "paragraph", content: "Rate how well you created safety for mental health conversations today:" },
        { id: "t5-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "t5-3-6", type: "scripture", content: "\"Even though I walk through the darkest valley, I will fear no evil, for you are with me.\" - Psalm 23:4" },
        { id: "t5-3-7", type: "paragraph", content: "God walks through the valley WITH us. He doesn't promise no darkness, but He promises His presence. Help your teen know they're not alone - and neither are you." },
        { id: "t5-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "teen-5-4",
      section: 5,
      sectionTitle: "Mental Health",
      pageType: "visuals",
      title: "Ask the Hard Questions",
      subtitle: "Talking About It Opens Doors",
      sections: [
        {
          id: "t5-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "anchoring-reactive",
            after: "anchoring-calm",
            beforeLabel: "When I panic, they shut down.",
            afterLabel: "When I stay calm, they open up."
          }
        },
        {
          id: "t5-4-2",
          type: "goal-phrases",
          items: [
            "Asking doesn't create - it opens doors",
            "Seeking help is strength",
            "They're not alone, and neither are you"
          ]
        },
        {
          id: "t5-4-3",
          type: "scripture",
          content: "\"Even in the darkest valley, You are with me.\"\n— Psalm 23:4"
        },
        {
          id: "t5-4-4",
          type: "quote",
          content: "Don't be afraid to ask. That question might save their life."
        }
      ]
    },

    // ============================================
    // SECTION 6: FAITH & WORLDVIEW
    // ============================================
    {
      id: "teen-6-1",
      section: 6,
      sectionTitle: "Faith & Worldview",
      pageType: "outline",
      title: "When They Question Faith",
      subtitle: "Using Connection & Validation",
      sections: [
        { id: "t6-1-1", type: "subheader", content: "Course Outline" },
        { id: "t6-1-2", type: "paragraph", content: "Teens are developing their own worldview. They may question the faith they grew up with, reject church, or explore different beliefs. This is terrifying for parents - but questioning is actually part of faith becoming their own." },
        { id: "t6-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "t6-1-4",
          type: "list",
          items: [
            "Why faith questioning is developmentally normal",
            "Keeping relationship stronger than disagreement",
            "Making doubt safe for discussion",
            "Living faith authentically as an example",
            "Releasing their faith journey to God"
          ]
        },
        { id: "t6-1-10", type: "header", content: "Relying on God Through This" },
        { id: "t6-1-11", type: "paragraph", content: "You cannot believe for them. This is the hardest lesson. Release their faith journey to God. Pray for their heart, their questions, their search. Trust that God can reach them even if they walk away for a time." },
        { id: "t6-1-12", type: "quote", content: "\"You can't force faith. You can only live it authentically and pray they catch it.\"" }
      ]
    },
    {
      id: "teen-6-2",
      section: 6,
      sectionTitle: "Faith & Worldview",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Belief & Doubt",
      sections: [
        { id: "t6-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "t6-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "Did you ever question your family's faith?",
            "Was it safe to express doubts?",
            "How did your faith journey shape your beliefs today?",
            "What made faith become your own, not just inherited?"
          ]
        },
        { id: "t6-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "t6-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "How do you respond when they question your faith?",
            "Is your home safe for honest questions and doubts?",
            "Are you modeling authentic faith or just religious performance?",
            "Can they disagree with you and still feel loved?"
          ]
        },
        { id: "t6-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "t6-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Make space for faith questions without defensiveness",
            "Share my own faith struggles honestly",
            "Keep relationship priority over being 'right'",
            "Pray for their faith journey without trying to control it"
          ]
        },
        { id: "t6-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "t6-2-8",
          type: "checklist",
          content: "Consider God's pursuit of hearts:",
          items: [
            "Does God force belief or invite it?",
            "How has God been patient with your faith journey?",
            "Can you trust God to pursue your teen's heart?"
          ]
        }
      ]
    },
    {
      id: "teen-6-3",
      section: 6,
      sectionTitle: "Faith & Worldview",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "t6-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "t6-3-2",
          type: "goal-phrases",
          items: [
            "\"That's a great question.\"",
            "\"I've wondered that too.\"",
            "\"Faith has to become yours.\"",
            "\"I'm glad you're thinking deeply.\"",
            "\"You can always talk to me about this.\"",
            "\"I pray for you every day.\"",
            "\"God can handle your questions.\"",
            "\"Lord, pursue their heart.\""
          ]
        },
        { id: "t6-3-3", type: "header", content: "Daily Check-In" },
        { id: "t6-3-4", type: "paragraph", content: "Rate how well you created safety for faith questions today:" },
        { id: "t6-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "t6-3-6", type: "scripture", content: "\"Start children off on the way they should go, and even when they are old they will not turn from it.\" - Proverbs 22:6" },
        { id: "t6-3-7", type: "paragraph", content: "You've planted seeds. Now trust God to water them. Their faith journey may have detours, but the foundation you've laid isn't lost. Keep praying." },
        { id: "t6-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "teen-6-4",
      section: 6,
      sectionTitle: "Faith & Worldview",
      pageType: "visuals",
      title: "Questions Are Part of Faith",
      subtitle: "Make Doubt Safe",
      sections: [
        {
          id: "t6-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "connection-distracted",
            after: "connection-present",
            beforeLabel: "When I force faith, they reject it.",
            afterLabel: "When I live it authentically, they consider it."
          }
        },
        {
          id: "t6-4-2",
          type: "goal-phrases",
          items: [
            "Questions lead to owned faith",
            "Relationship over being right",
            "You can't believe for them"
          ]
        },
        {
          id: "t6-4-3",
          type: "scripture",
          content: "\"Train up a child in the way he should go.\"\n— Proverbs 22:6"
        },
        {
          id: "t6-4-4",
          type: "quote",
          content: "Faith that can't handle questions isn't faith worth having. Make doubt safe."
        }
      ]
    },

    // ============================================
    // SECTION 7: LAUNCHING WELL
    // ============================================
    {
      id: "teen-7-1",
      section: 7,
      sectionTitle: "Launching Well",
      pageType: "outline",
      title: "Preparing Them to Leave",
      subtitle: "Using Grow & Empowerment",
      sections: [
        { id: "t7-1-1", type: "subheader", content: "Course Outline" },
        { id: "t7-1-2", type: "paragraph", content: "The ultimate goal of parenting is to work yourself out of a job. Your teen needs to be prepared - practically, emotionally, and spiritually - to leave your home and thrive. This is both the goal and the grief of parenting." },
        { id: "t7-1-3", type: "subheader", content: "What You'll Learn This Week:" },
        {
          id: "t7-1-4",
          type: "list",
          items: [
            "Essential launch skills they need to thrive",
            "Teaching life skills intentionally",
            "Letting them fail while they have a safety net",
            "Releasing control and trusting their growth",
            "Preparing yourself for the grief of letting go"
          ]
        },
        { id: "t7-1-10", type: "header", content: "Relying on God Through This" },
        { id: "t7-1-11", type: "paragraph", content: "Letting go is the hardest thing you'll ever do. You've given them everything you have. Now trust that God will complete the work. The same God who entrusted them to you will carry them after they leave." },
        { id: "t7-1-12", type: "quote", content: "\"The goal was never to keep them - it was to prepare them to go.\"" }
      ]
    },
    {
      id: "teen-7-2",
      section: 7,
      sectionTitle: "Launching Well",
      pageType: "reflection",
      title: "Reflection Questions",
      subtitle: "Preparing to Let Go",
      sections: [
        { id: "t7-2-1", type: "header", content: "Looking Back (Your Childhood)" },
        {
          id: "t7-2-2",
          type: "checklist",
          content: "Reflect on these questions:",
          items: [
            "How prepared were you when you left home?",
            "What did you wish you had learned before leaving?",
            "How did your parents handle your transition to adulthood?",
            "What would you do differently?"
          ]
        },
        { id: "t7-2-3", type: "header", content: "Present Day (Current Patterns)" },
        {
          id: "t7-2-4",
          type: "checklist",
          content: "Consider your current responses:",
          items: [
            "Are you teaching practical life skills or doing things for them?",
            "How prepared is your teen for the real world?",
            "Are you holding on too tightly or pushing them away?",
            "What skills do they still need before launching?"
          ]
        },
        { id: "t7-2-5", type: "header", content: "Moving Forward (Implementation)" },
        {
          id: "t7-2-6",
          type: "checklist",
          content: "This week, I will:",
          items: [
            "Identify one life skill to intentionally teach",
            "Let them handle something I usually do for them",
            "Talk about their future with hope, not fear",
            "Begin processing my own grief about their leaving"
          ]
        },
        { id: "t7-2-7", type: "header", content: "Faith Reflection" },
        {
          id: "t7-2-8",
          type: "checklist",
          content: "Consider God's faithfulness through transitions:",
          items: [
            "Can you trust God with their future?",
            "How has God been faithful through major transitions in your life?",
            "What does it look like to truly release them to God?"
          ]
        }
      ]
    },
    {
      id: "teen-7-3",
      section: 7,
      sectionTitle: "Launching Well",
      pageType: "goals",
      title: "Fridge Focus Sheet",
      subtitle: "Weekly Goals & Faith Focus",
      sections: [
        { id: "t7-3-1", type: "header", content: "This Week's Phrases" },
        {
          id: "t7-3-2",
          type: "goal-phrases",
          items: [
            "\"You're going to do great things.\"",
            "\"Let me teach you how to do this.\"",
            "\"I believe in you.\"",
            "\"What do you think you should do?\"",
            "\"You're ready for this.\"",
            "\"God has plans for your future.\"",
            "\"I'm always just a call away.\"",
            "\"Lord, I release them to Your care.\""
          ]
        },
        { id: "t7-3-3", type: "header", content: "Daily Check-In" },
        { id: "t7-3-4", type: "paragraph", content: "Rate how well you empowered their independence while staying connected today:" },
        { id: "t7-3-5", type: "header", content: "FAITH-BASED FOCUS" },
        { id: "t7-3-6", type: "scripture", content: "\"'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'\" - Jeremiah 29:11" },
        { id: "t7-3-7", type: "paragraph", content: "God has plans for them. He's not done with them - He's just beginning. Your job was to prepare them; His job is to lead them. Trust His plans." },
        { id: "t7-3-10", type: "weekly-tracker" }
      ]
    },
    {
      id: "teen-7-4",
      section: 7,
      sectionTitle: "Launching Well",
      pageType: "visuals",
      title: "You Did Your Part",
      subtitle: "Now Trust God With Theirs",
      sections: [
        {
          id: "t7-4-1",
          type: "comparison-image",
          content: "",
          images: {
            before: "anchoring-reactive",
            after: "anchoring-with-god",
            beforeLabel: "When I cling, we both struggle.",
            afterLabel: "When I release, they can fly."
          }
        },
        {
          id: "t7-4-2",
          type: "goal-phrases",
          items: [
            "The goal was always to let go",
            "Your job was to prepare - God's job is to lead",
            "They're ready because you did your part"
          ]
        },
        {
          id: "t7-4-3",
          type: "scripture",
          content: "\"'I know the plans I have for you,' declares the Lord.\"\n— Jeremiah 29:11"
        },
        {
          id: "t7-4-4",
          type: "quote",
          content: "You've given them roots. Now watch them grow wings."
        }
      ]
    }
  ]
};
