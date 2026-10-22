/** Unit step response for the overdamped springs used by the source template. */
export function springProgress(
  seconds: number,
  stiffness = 200,
  damping = 40,
  mass = 1,
) {
  if (seconds <= 0) return 0;
  const discriminant = Math.sqrt(damping * damping - 4 * mass * stiffness);
  const slow = (-damping + discriminant) / (2 * mass);
  const fast = (-damping - discriminant) / (2 * mass);
  return (
    1 +
    (fast * Math.exp(slow * seconds) - slow * Math.exp(fast * seconds)) /
      (slow - fast)
  );
}
