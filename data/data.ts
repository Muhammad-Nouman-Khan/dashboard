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
