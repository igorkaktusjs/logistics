import { Activity } from "./activity";

/**
 * Represents a daily trace of driver activities.
 */
export interface Trace {
    date: string; // Date of the activity in YYYY-MM-DD format
    activity: Activity[]; // List of activities performed on this day
}