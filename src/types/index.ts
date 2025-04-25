export interface Appointment {
  name: string;
  email: string;
  phone: string;
  department: string;
  date: Date | null;
  time: Date | null;
  reason: string;
}

export interface Activity {
  date: Date;
  title: string;
  time: string;
  description: string;
} 