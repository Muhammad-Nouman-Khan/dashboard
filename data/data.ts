export interface NavItem {
  icon: string;
  title: string;
}

export const navLinks: NavItem[] = [
  { icon: "lucide:layout-dashboard", title: "Dashboard" },
  { icon: "lucide:calendar-check", title: "My Bookings" },
  { icon: "lucide:square-check", title: "Approvals" },
  { icon: "lucide:book", title: "Ledger" },
  { icon: "lucide:calendar-plus", title: "Make Bookings" },
  { icon: "lucide:chart-column-big", title: "Reports" },
  { icon: "lucide:receipt-text", title: "Invoices" },
  { icon: "lucide:users", title: "Users" },
  { icon: "lucide:user", title: "Passenger List" },
  { icon: "lucide:user-round-cog", title: "Roles and Permissions" },
  { icon: "lucide:network", title: "Departments" },
  { icon: "lucide:shield-check", title: "Privacy Policy" },
  { icon: "lucide:file-text", title: "Terms and Conditions" },
];

export interface ChartData {
  title: string;
  icon: string;
  money: number;
}

export const chartData: ChartData[] = [
  { title: "Flights", icon: "lucide:plane", money: 4000 },
  { title: "Bus", icon: "lucide:bus", money: 4000 },
  { title: "Car Rent", icon: "lucide:car", money: 4000 },
  { title: "Hotels", icon: "lucide:hotel", money: 4000 },
  { title: "Train", icon: "lucide:train", money: 4000 },
  { title: "Events", icon: "lucide:calendar", money: 4000 },
  { title: "Tours", icon: "lucide:package", money: 4000 },
];

export interface StatCardData {
  title: string;
  value: number | string;
  icon: string;
  iconColor: string;
  borderColor: string;
  trend: string;
  trendIcon: string;
  trendColor: string;
  trendBg: string;
}

export const statCards: StatCardData[] = [
  {
    title: "Total Bookings",
    value: 512,
    icon: "lucide:calendar",
    iconColor: "#007bff",
    borderColor: "blue-600",
    trend: "11.09%",
    trendIcon: "lucide:arrow-down",
    trendColor: "text-red-600",
    trendBg: "red-200",
  },
  {
    title: "Total Savings",
    value: 45666,
    icon: "lucide:book",
    iconColor: "#007bff",
    borderColor: "blue-600",
    trend: "11.09%",
    trendIcon: "lucide:arrow-up",
    trendColor: "text-green-600",
    trendBg: "green-200",
  },
  {
    title: "Total Expense",
    value: 512,
    icon: "lucide:calendar-check",
    iconColor: "#007bff",
    borderColor: "blue-600",
    trend: "11.09%",
    trendIcon: "lucide:arrow-down",
    trendColor: "text-red-600",
    trendBg: "red-200",
  },
];

export interface Booking {
  orderId: string;
  bookedFor: string;
  bookingType: string;
  debit: number;
  credit: number;
  total: number;
  status: "Paid" | "Unpaid" | "Pending";
}

export const bookings: Booking[] = [
  {
    orderId: "EVT 11234124",
    bookedFor: "Test",
    bookingType: "Event",
    debit: 1000,
    credit: 1000,
    total: 1000,
    status: "Unpaid",
  },
  {
    orderId: "EVT 11234125",
    bookedFor: "Ali",
    bookingType: "Flight",
    debit: 2000,
    credit: 0,
    total: 2000,
    status: "Paid",
  },
  {
    orderId: "EVT 11234126",
    bookedFor: "Sara",
    bookingType: "Hotel",
    debit: 0,
    credit: 1500,
    total: 1500,
    status: "Pending",
  },
  {
    orderId: "EVT 11234127",
    bookedFor: "John",
    bookingType: "Bus",
    debit: 500,
    credit: 0,
    total: 500,
    status: "Paid",
  },
  {
    orderId: "EVT 11234128",
    bookedFor: "Ayesha",
    bookingType: "Car Rent",
    debit: 0,
    credit: 800,
    total: 800,
    status: "Unpaid",
  },
  {
    orderId: "EVT 11234129",
    bookedFor: "Bilal",
    bookingType: "Train",
    debit: 1200,
    credit: 0,
    total: 1200,
    status: "Pending",
  },
  {
    orderId: "EVT 11234130",
    bookedFor: "Zara",
    bookingType: "Event",
    debit: 0,
    credit: 900,
    total: 900,
    status: "Paid",
  },
  {
    orderId: "EVT 11234131",
    bookedFor: "Usman",
    bookingType: "Hotel",
    debit: 700,
    credit: 0,
    total: 700,
    status: "Unpaid",
  },
  {
    orderId: "EVT 11234132",
    bookedFor: "Fatima",
    bookingType: "Flight",
    debit: 0,
    credit: 1100,
    total: 1100,
    status: "Pending",
  },
  {
    orderId: "EVT 11234133",
    bookedFor: "Ahmed",
    bookingType: "Bus",
    debit: 600,
    credit: 0,
    total: 600,
    status: "Paid",
  },
];
