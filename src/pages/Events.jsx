const eventModules = import.meta.glob(
  "../assets/events/*",
  {
    eager: true,
    import: "default",
  }
)

const events = Object.values(eventModules)

function Events() {
  return (
    <main>
      <p className="gallery-caption">
        Grand opening event @{" "}
        <a
          href="https://www.instagram.com/theswapclub.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          theswapclub.nl
        </a>
        {" "}| Amsterdam, Netherlands
      </p>

      <div className="gallery">
        {events.map((photo) => (
          <img
            key={photo}
            src={photo}
            alt=""
          />
        ))}
      </div>
    </main>
  )
}

export default Events
