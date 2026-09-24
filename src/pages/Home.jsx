function Home() {
  return (
    <main>
      <section id="about">
        <h2>About</h2>

        <p>
          I'm Andini Faramita, currently based in Utrecht, Netherlands, and loving impromptu
          shoot opportunities!
          <br />
          Check out my work in{" "}
          <a className="work-link" href="/photoshoots">
            photoshoots
          </a>{" "}
          and{" "}
          <a className="work-link" href="/events">
            events
          </a>.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <p>
          email:{" "}
          <a
            className="work-link"
            href="mailto:byafaramita@gmail.com"
          >
            byafaramita@gmail.com
          </a>
          <br />
          tiktok:{" "}
          <a
            className="work-link"
            href="https://www.tiktok.com/@byafaramita"
            target="_blank"
            rel="noopener noreferrer"
          >
            byafaramita
          </a>
          <br />
          instagram:{" "}
          <a
            className="work-link"
            href="https://www.instagram.com/byafaramita"
            target="_blank"
            rel="noopener noreferrer"
          >
            byafaramita
          </a>
        </p>
      </section>
    </main>
  )
}

export default Home