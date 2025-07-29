export const customers = [
    {
      id: "cust_001",
      name: "Acme Corporation",
      industry: "Technology",
      size: "Enterprise",
      subscription: "Premium",
      status: "Active",
      health_score: 85,
      created_at: "2023-01-15",
      last_interaction: "2023-05-22",
      contact: {
        name: "John Smith",
        email: "john.smith@acme.com",
        position: "CTO"
      },
      usage: {
        active_users: 120,
        feature_adoption: 78,
        login_frequency: "Daily"
      },
      revenue: {
        current_mrr: 5000,
        total_revenue: 45000,
        growth_rate: 15
      },
      engagement: {
        nps: 8,
        support_tickets: 3,
        unresolved_issues: 1
      },
      notes: "Key account with expansion potential. Interested in new analytics module."
    },
    {
      id: "cust_002",
      name: "TechStart Inc",
      industry: "SaaS",
      size: "Startup",
      subscription: "Basic",
      status: "Active",
      health_score: 65,
      created_at: "2023-03-10",
      last_interaction: "2023-05-18",
      contact: {
        name: "Sarah Jones",
        email: "sarah@techstart.io",
        position: "Founder"
      },
      usage: {
        active_users: 8,
        feature_adoption: 45,
        login_frequency: "Weekly"
      },
      revenue: {
        current_mrr: 500,
        total_revenue: 1500,
        growth_rate: 0
      },
      engagement: {
        nps: 7,
        support_tickets: 2,
        unresolved_issues: 0
      },
      notes: "New customer, needs onboarding assistance. Limited budget but high potential."
    },
    {
      id: "cust_003",
      name: "Global Solutions Ltd",
      industry: "Consulting",
      size: "Mid-Market",
      subscription: "Professional",
      status: "At Risk",
      health_score: 45,
      created_at: "2022-08-05",
      last_interaction: "2023-04-30",
      contact: {
        name: "Michael Chen",
        email: "mchen@globalsolutions.com",
        position: "Director of Operations"
      },
      usage: {
        active_users: 42,
        feature_adoption: 35,
        login_frequency: "Monthly"
      },
      revenue: {
        current_mrr: 2000,
        total_revenue: 18000,
        growth_rate: -5
      },
      engagement: {
        nps: 4,
        support_tickets: 8,
        unresolved_issues: 3
      },
      notes: "Declining usage. Facing budget constraints. Needs attention from account management."
    },
    {
      id: "cust_004",
      name: "Innovate Group",
      industry: "Marketing",
      size: "Mid-Market",
      subscription: "Professional",
      status: "Active",
      health_score: 75,
      created_at: "2022-11-20",
      last_interaction: "2023-05-15",
      contact: {
        name: "Emma Davis",
        email: "emma@innovategroup.com",
        position: "Marketing Director"
      },
      usage: {
        active_users: 35,
        feature_adoption: 82,
        login_frequency: "Daily"
      },
      revenue: {
        current_mrr: 2000,
        total_revenue: 12000,
        growth_rate: 10
      },
      engagement: {
        nps: 9,
        support_tickets: 1,
        unresolved_issues: 0
      },
      notes: "Happy customer, advocate for our product. Interest in premium features."
    },
    {
      id: "cust_005",
      name: "Retail Ventures",
      industry: "Retail",
      size: "Enterprise",
      subscription: "Premium",
      status: "Active",
      health_score: 80,
      created_at: "2022-06-12",
      last_interaction: "2023-05-20",
      contact: {
        name: "Robert Johnson",
        email: "rjohnson@retailventures.com",
        position: "VP of Digital"
      },
      usage: {
        active_users: 78,
        feature_adoption: 65,
        login_frequency: "Daily"
      },
      revenue: {
        current_mrr: 4500,
        total_revenue: 49500,
        growth_rate: 5
      },
      engagement: {
        nps: 7,
        support_tickets: 4,
        unresolved_issues: 1
      },
      notes: "Long-term customer. Interested in integration with their inventory system."
    },
    {
      id: "cust_006",
      name: "HealthFirst",
      industry: "Healthcare",
      size: "Enterprise",
      subscription: "Premium",
      status: "Active",
      health_score: 90,
      created_at: "2022-09-08",
      last_interaction: "2023-05-21",
      contact: {
        name: "Jennifer Williams",
        email: "jwilliams@healthfirst.org",
        position: "CIO"
      },
      usage: {
        active_users: 145,
        feature_adoption: 90,
        login_frequency: "Daily"
      },
      revenue: {
        current_mrr: 6000,
        total_revenue: 54000,
        growth_rate: 20
      },
      engagement: {
        nps: 9,
        support_tickets: 2,
        unresolved_issues: 0
      },
      notes: "Power user, maximizing platform capabilities. Reference customer."
    },
    {
      id: "cust_007",
      name: "FinancePro",
      industry: "Financial Services",
      size: "Mid-Market",
      subscription: "Professional",
      status: "Churned",
      health_score: 0,
      created_at: "2022-05-15",
      last_interaction: "2023-02-10",
      contact: {
        name: "Thomas Lee",
        email: "tlee@financepro.com",
        position: "Finance Director"
      },
      usage: {
        active_users: 0,
        feature_adoption: 0,
        login_frequency: "Never"
      },
      revenue: {
        current_mrr: 0,
        total_revenue: 6000,
        growth_rate: -100
      },
      engagement: {
        nps: 2,
        support_tickets: 12,
        unresolved_issues: 0
      },
      notes: "Churned due to budget cuts. Potential for reactivation in new fiscal year."
    },
    {
      id: "cust_008",
      name: "EduLearn",
      industry: "Education",
      size: "Small Business",
      subscription: "Basic",
      status: "Active",
      health_score: 70,
      created_at: "2023-02-28",
      last_interaction: "2023-05-19",
      contact: {
        name: "Patricia Moore",
        email: "pmoore@edulearn.edu",
        position: "Director"
      },
      usage: {
        active_users: 15,
        feature_adoption: 55,
        login_frequency: "Weekly"
      },
      revenue: {
        current_mrr: 500,
        total_revenue: 1500,
        growth_rate: 0
      },
      engagement: {
        nps: 8,
        support_tickets: 1,
        unresolved_issues: 0
      },
      notes: "Non-profit educational institution. Limited budget but consistent usage."
    },
    {
      id: "cust_009",
      name: "BuildIt Construction",
      industry: "Construction",
      size: "Mid-Market",
      subscription: "Professional",
      status: "At Risk",
      health_score: 40,
      created_at: "2022-10-10",
      last_interaction: "2023-04-05",
      contact: {
        name: "James Wilson",
        email: "jwilson@buildit.com",
        position: "Operations Manager"
      },
      usage: {
        active_users: 22,
        feature_adoption: 30,
        login_frequency: "Monthly"
      },
      revenue: {
        current_mrr: 2000,
        total_revenue: 14000,
        growth_rate: -10
      },
      engagement: {
        nps: 5,
        support_tickets: 6,
        unresolved_issues: 2
      },
      notes: "Struggling with user adoption. Needs additional training sessions."
    },
    {
      id: "cust_010",
      name: "GreenEnergy Co",
      industry: "Energy",
      size: "Small Business",
      subscription: "Basic",
      status: "Active",
      health_score: 60,
      created_at: "2023-01-05",
      last_interaction: "2023-05-10",
      contact: {
        name: "Laura Martinez",
        email: "lmartinez@greenenergy.com",
        position: "Sustainability Manager"
      },
      usage: {
        active_users: 12,
        feature_adoption: 50,
        login_frequency: "Weekly"
      },
      revenue: {
        current_mrr: 500,
        total_revenue: 2000,
        growth_rate: 0
      },
      engagement: {
        nps: 7,
        support_tickets: 2,
        unresolved_issues: 1
      },
      notes: "Focused on reporting features. Interested in custom dashboards."
    }
  ];