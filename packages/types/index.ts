export interface Vendor {
  id: string;
  name: string;
  email: string;
  department: string;
  category: string;
  appliedAt: string;
  status: "pending" | "approved" | "rejected";
}
