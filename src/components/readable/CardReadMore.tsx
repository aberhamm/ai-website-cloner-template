import "./CardReadMore.css";

/** The parent article link owns interaction; this pill animates with that card. */
export function CardReadMore() {
  return (
    <span className="card-read-more" aria-hidden="true">
      <span className="card-read-more-label">Read More</span>
      <span className="card-read-more-arrow">↗</span>
    </span>
  );
}
