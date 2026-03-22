export const conversations = [
    {
      id: 1,
      title: "UI redesign",
      status: "Reviewed",
      category: "Design",
      updatedAt: "2h ago",
      messages: [
        {
          sender: "customer",
          text: "Can we update the layout?",
          time: "10:00",
        },
        {
          sender: "ai",
          text: "Sure, what changes do you need?",
          time: "10:01",
        },
        { sender: "customer", text: "It feels too cluttered.", time: "10:02" },
        { sender: "ai", text: "We can simplify the structure.", time: "10:03" },
        { sender: "customer", text: "Maybe add more spacing?", time: "10:04" },
        {
          sender: "ai",
          text: "Good idea, spacing improves readability.",
          time: "10:05",
        },
      ],
      notes: [],
      city: 'Warsaw',

    },
    {
      id: 2,
      title: "Login issue",
      status: "Pending Review",
      category: "Support",
      updatedAt: "5h ago",
      messages: [
        {
          sender: "customer",
          text: "I can't log into my account.",
          time: "09:10",
        },
        {
          sender: "ai",
          text: "Have you tried resetting your password?",
          time: "09:11",
        },
        {
          sender: "customer",
          text: "Yes, but I didn't receive the email.",
          time: "09:12",
        },
        { sender: "ai", text: "Please check your spam folder.", time: "09:13" },
        { sender: "customer", text: "Still nothing there.", time: "09:14" },
        { sender: "ai", text: "I'll escalate this to support.", time: "09:15" },
      ],
      notes: [],
      city: 'Lisbon',
      
    },
    {
      id: 3,
      title: "Payment error",
      status: "Needs Fix",
      category: "Billing",
      updatedAt: "1 day ago",
      messages: [
        {
          sender: "customer",
          text: "Payment failed during checkout.",
          time: "14:20",
        },
        {
          sender: "ai",
          text: "What payment method did you use?",
          time: "14:21",
        },
        { sender: "customer", text: "Credit card.", time: "14:22" },
        { sender: "ai", text: "Was the card declined?", time: "14:23" },
        {
          sender: "customer",
          text: "No, it just shows an error.",
          time: "14:24",
        },
        { sender: "ai", text: "We are checking the issue.", time: "14:25" },
      ],
      notes: [],
      city: 'Prague',
    },
    {
      id: 4,
      title: "Feature request",
      status: "Reviewed",
      category: "Product",
      updatedAt: "3h ago",
      messages: [
        { sender: "customer", text: "Can you add light mode?", time: "11:00" },
        { sender: "ai", text: "That's a popular request!", time: "11:01" },
        { sender: "customer", text: "It would help a lot.", time: "11:02" },
        { sender: "ai", text: "We are considering it.", time: "11:03" },
        { sender: "customer", text: "Any ETA?", time: "11:04" },
        {
          sender: "ai",
          text: "Not yet, but it's on our roadmap.",
          time: "11:05",
        },
      ],
      notes: [],
      city: 'Bratislava'
    },
    {
      id: 5,
      title: "Bug report",
      status: "Pending Review",
      category: "Technical",
      updatedAt: "30m ago",
      messages: [
        {
          sender: "customer",
          text: "The app crashes on start.",
          time: "16:40",
        },
        { sender: "ai", text: "Which device are you using?", time: "16:41" },
        { sender: "customer", text: "iPhone 13.", time: "16:42" },
        { sender: "ai", text: "What iOS version?", time: "16:43" },
        { sender: "customer", text: "iOS 17.", time: "16:44" },
        {
          sender: "ai",
          text: "We are investigating this issue.",
          time: "16:45",
        },
      ],
      notes: [],
      city: 'Dubai'
    },
  ];