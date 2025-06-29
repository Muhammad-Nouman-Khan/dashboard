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

export interface totalBookingsData {
  title: string;
  icon: string;
  iconColor: string;
  money: number;
  progress: number;
}

export const totalBookings: totalBookingsData[] = [
  {
    title: "Flights",
    icon: "lucide:plane",
    iconColor: "#FAA565",
    money: 4000,
    progress: 50,
  },
  {
    title: "Bus",
    icon: "lucide:bus",
    iconColor: "#26B24D",
    money: 4000,
    progress: 50,
  },
  {
    title: "Car Rent",
    icon: "lucide:car",
    iconColor: "#6366F1",
    money: 4000,
    progress: 50,
  },
  {
    title: "Hotels",
    icon: "lucide:hotel",
    iconColor: "#FACC15",
    money: 4000,
    progress: 50,
  },
  {
    title: "Train",
    icon: "lucide:train",
    iconColor: "#4F74F3",
    money: 4000,
    progress: 50,
  },
  {
    title: "Events",
    icon: "lucide:mic-vocal",
    iconColor: "#EC4899",
    money: 4000,
    progress: 50,
  },
  {
    title: "Tours",
    icon: "lucide:tree-palm",
    iconColor: "#9747FF",
    money: 4000,
    progress: 50,
  },
];

export interface StatCardData {
  title: string;
  value: number | string;
  icon: string;
  iconColor: string;
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
    iconColor: "#346CC4",
    trend: "11.09%",
    trendIcon: "lucide:arrow-down",
    trendColor: "text-[#F34141]",
    trendBg: "bg-[#FFFBFB]",
  },
  {
    title: "Total Savings",
    value: 45666,
    icon: "lucide:book",
    iconColor: "#346CC4",
    trend: "11.09%",
    trendIcon: "lucide:arrow-up",
    trendColor: "text-[#2F9461]",
    trendBg: "bg-[#EBF5F0]",
  },
  {
    title: "Total Expense",
    value: 512,
    icon: "lucide:calendar-check",
    iconColor: "#346CC4",
    trend: "11.09%",
    trendIcon: "lucide:arrow-down",
    trendColor: "text-[#F34141]",
    trendBg: "bg-[#FFFBFB]",
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
    status: "Unpaid",
  },
  {
    orderId: "EVT 11234126",
    bookedFor: "Sara",
    bookingType: "Hotel",
    debit: 0,
    credit: 1500,
    total: 1500,
    status: "Unpaid",
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
    status: "Paid",
  },
  {
    orderId: "EVT 11234129",
    bookedFor: "Bilal",
    bookingType: "Train",
    debit: 1200,
    credit: 0,
    total: 1200,
    status: "Paid",
  },
  {
    orderId: "EVT 11234130",
    bookedFor: "Zara",
    bookingType: "Event",
    debit: 0,
    credit: 900,
    total: 900,
    status: "Pending",
  },
  {
    orderId: "EVT 11234131",
    bookedFor: "Usman",
    bookingType: "Hotel",
    debit: 700,
    credit: 0,
    total: 700,
    status: "Pending",
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
    status: "Pending",
  },
];

export const username = "Shijra";

export interface ChartLineData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    backgroundColor: string;
    fill: boolean;
    tension: number;
    pointRadius: number;
  }>;
}

export const chartLineData: ChartLineData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "",
      data: [27, 46, 24, 26, 90, 70, 100, 170, 170, 100, 70, 100],
      borderColor: "#00C2FF",
      borderWidth: 1,
      // #346CC4
      backgroundColor: "rgba(0, 194, 255, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: "",
      data: [0, 5, 24, 55, 105, 125, 125, 150, 170, 200, 250, 252],
      borderColor: "#346CC4",
      borderWidth: 1,
      // #57C3FF
      backgroundColor: "rgba(52, 108, 196, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};
