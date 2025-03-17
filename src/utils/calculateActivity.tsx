import { Trace, ActivityBreakdown } from "../types";

/**
 * Calculates the breakdown of activity durations by type (drive, rest, work, available).
 * @param traces - Array of driver activity logs.
 * @returns An object containing total minutes spent on each activity type.
 */
export const calculateActivityBreakdown = (traces: Trace[]): ActivityBreakdown => {
  return traces.reduce<ActivityBreakdown>(
    (acc, { activity }) => {
      // Iterate through each activity and sum up its duration
      activity.forEach(({ type, duration }) => {
        acc[type as keyof ActivityBreakdown] += duration;
      });
      return acc;
    },
    { drive: 0, rest: 0, work: 0, available: 0 } 
  );
};

/**
 * Calculates total activity duration and determines active days based on activity logs.
 * @param traces - Array of driver activity logs.
 * @returns An object containing:
 *          - totalActivity: Total minutes of activity.
 *          - activity: Boolean array indicating which days had activity.
 *          - uniqueDates: Array of unique dates from the logs.
 */
export const calculateActivity = (traces: Trace[]) => {
  if (!traces.length) return { totalActivity: 0, activity: [], uniqueDates: [] };

  const uniqueDatesSet = new Set<string>(); // Stores unique dates from traces
  let totalActivity = 0; // Stores total duration of all activities

  // Iterate through traces to collect unique dates and calculate total activity duration
  traces.forEach(({ date, activity }) => {
    uniqueDatesSet.add(date); // Add date to the Set (ensures uniqueness)
    totalActivity += activity.reduce((acc, act) => acc + act.duration, 0); // Sum activity durations
  });

  const uniqueDates = Array.from(uniqueDatesSet).sort(); // Convert Set to array and sort dates

  // Determine active days: true if activity exists on that date
  const activityDays = uniqueDates.map((date) =>
    traces.some(({ date: traceDate, activity }) => traceDate === date && activity.length > 0)
  );

  return { totalActivity, activity: activityDays, uniqueDates };
};