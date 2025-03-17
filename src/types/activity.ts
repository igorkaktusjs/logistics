/**
 * Represents a single activity performed by a driver.
 */
export interface Activity {
    type: "drive" | "rest" | "work" | "available"; // Type of activity
    duration: number; // Duration in minutes
}

/**
 * Represents the breakdown of activity durations by type.
 */
export interface ActivityBreakdown {
    drive: number; // Total driving time in minutes
    rest: number; // Total resting time in minutes
    work: number; // Total working time in minutes
    available: number; // Total available time in minutes
}
