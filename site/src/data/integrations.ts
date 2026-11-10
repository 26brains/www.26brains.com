export interface Integration {
  slug: string;
  name: string;
  summary: string;
  description: string;
  intro: string[];
  sections: { title: string; body: string }[];
}

export const integrations: Integration[] = [
  {
    slug: 'current-rms',
    name: 'Current RMS',
    summary: 'Rental and events management',
    description: 'Custom integrations for Current RMS. Connect rental management to accounting, CRM and communication tools in real time.',
    intro: [
      'Current RMS covers a lot of a rental business. The systems around it — accounting, CRM, communication tools — still need the same data, and they need it to be current.',
      'We build integrations that connect Current RMS to the rest of your stack.',
    ],
    sections: [
      {
        title: 'Opportunities',
        body: 'New and updated opportunities can push to your CRM, post to Slack or Teams, or feed a shared pipeline view. The wider team sees the work as soon as it exists, not when someone remembers to tell them.',
      },
      {
        title: 'Invoices',
        body: 'Invoices sync between Current RMS and your accounting package — Xero, QuickBooks or others — so payment status is correct in both places without anyone checking two systems.',
      },
      {
        title: 'Contacts',
        body: 'Contacts created or updated in Current RMS flow to your CRM. Contacts captured elsewhere flow back. One source of truth, maintained without manual effort.',
      },
      {
        title: 'Real-time',
        body: 'Batch syncs introduce lag: a contact updated at 9am may not appear elsewhere until noon. Integrations driven by Current RMS webhooks propagate changes in seconds.',
      },
    ],
  },
  {
    slug: 'pipedrive',
    name: 'Pipedrive',
    summary: 'CRM and sales pipeline',
    description: 'Custom integrations for Pipedrive. Keep your CRM in sync with operations, finance and logistics in real time.',
    intro: [
      'Pipedrive is a strong sales CRM. Sales data is only useful, though, if it reaches the tools your operations, finance and logistics teams work in.',
      'We build integrations that keep Pipedrive in sync with the rest of the business.',
    ],
    sections: [
      {
        title: 'Deals and pipeline',
        body: 'When a deal changes stage, other systems find out. Stage changes can create bookings in your operations platform, start fulfilment workflows or update a shared status board — without anyone bridging the gap by hand.',
      },
      {
        title: 'Contacts and organisations',
        body: 'Contacts created in Pipedrive flow to your other systems, and changes made elsewhere — a new billing contact, an updated address — flow back. No duplicate entry, no stale records.',
      },
      {
        title: 'Activities and follow-ups',
        body: 'Activities and notes can be routed to Slack or Teams, so the people who need to know are told without logging into the CRM.',
      },
      {
        title: 'Real-time',
        body: 'Pipedrive pushes changes via webhooks as they happen, so integrations do not need to poll and downstream systems update in seconds.',
      },
    ],
  },
  {
    slug: 'maxoptra',
    name: 'Maxoptra',
    summary: 'Route planning and delivery',
    description: 'Custom integrations for Maxoptra. Connect route planning and delivery management to the rest of your operations.',
    intro: [
      'Maxoptra plans routes and manages deliveries. The data it needs — orders, contacts, job details — usually lives in another system, and the data it produces — ETAs, completions, exceptions — needs to get back there.',
      'Integrations close that loop.',
    ],
    sections: [
      {
        title: 'Order and job import',
        body: 'Orders are pushed into Maxoptra from your order management system, CRM or rental platform. No re-entry, and no delay between an order being created and it being planned.',
      },
      {
        title: 'Status and completion sync',
        body: 'Completions and exceptions raised in Maxoptra sync back to your CRM, trigger customer notifications or update an operations dashboard as they happen.',
      },
      {
        title: 'ETA and tracking data',
        body: 'Real-time ETA and location data can surface in a customer portal, a support tool or a shared operations view, so nobody has to watch the Maxoptra console.',
      },
      {
        title: 'Real-time',
        body: 'Delivery data changes quickly. Event-driven integrations keep connected systems showing what is happening now, not what happened an hour ago.',
      },
    ],
  },
  {
    slug: 'deputy',
    name: 'Deputy',
    summary: 'Workforce management and scheduling',
    description: 'Custom integrations for Deputy. Connect workforce management to payroll, HR and communication tools in real time.',
    intro: [
      'Deputy manages scheduling, timesheets and attendance. That data is needed in payroll, accounting, HR and the tools your team uses every day.',
      'We build integrations that connect Deputy to the rest of the business.',
    ],
    sections: [
      {
        title: 'Timesheets and payroll',
        body: 'Approved timesheets flow to your payroll or accounting system — Xero, QuickBooks or others. No exports, no copy and paste, no end-of-week reconciliation.',
      },
      {
        title: 'Scheduling and calendars',
        body: 'Published or updated shifts can push to shared calendars, post to Slack or Teams, or sync to other planning tools, so staff do not have to check Deputy to find out when they are working.',
      },
      {
        title: 'Employees and onboarding',
        body: 'New starters added in Deputy flow to HR, payroll and onboarding tools. Leavers propagate the same way. One update, reflected everywhere it is needed.',
      },
      {
        title: 'Real-time',
        body: 'Deputy webhooks fire when a timesheet is submitted, a shift changes or a new starter is added. No polling; downstream systems update in seconds.',
      },
    ],
  },
  {
    slug: 'samsara',
    name: 'Samsara',
    summary: 'Fleet management and telematics',
    description: 'Custom integrations for Samsara. Connect fleet and telematics data to dispatch, maintenance and operations systems in real time.',
    intro: [
      'Samsara produces a continuous stream of data — vehicle location, driver behaviour, safety events, inspections, fuel usage. Most of it is more useful in another system than it is in Samsara.',
      'We build integrations that put Samsara data where it is needed, as it happens.',
    ],
    sections: [
      {
        title: 'Vehicle tracking and dispatch',
        body: 'GPS and location data can feed your dispatch system, a customer tracking portal or a shared operations view, so nobody needs to log into Samsara to find a vehicle.',
      },
      {
        title: 'Driver safety and HR',
        body: 'Safety scores, harsh-event alerts and dashcam flags can flow to HR or fleet management systems, and notify the right person through the right channel when they occur.',
      },
      {
        title: 'Maintenance',
        body: 'Inspection reports and fault alerts can create work orders in your maintenance system, with repair status synced back. Vehicles needing attention do not fall between telematics and the workshop.',
      },
      {
        title: 'Compliance',
        body: 'Hours of service and tachograph data can be pushed to compliance or payroll systems as it is recorded, without manual exports.',
      },
      {
        title: 'Real-time',
        body: 'Samsara webhooks push events as they happen — route changes, form submissions, safety alerts, fuel anomalies — so connected systems update in seconds, not on a schedule.',
      },
    ],
  },
];
