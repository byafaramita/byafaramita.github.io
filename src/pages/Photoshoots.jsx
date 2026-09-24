const photoshootModules = import.meta.glob(
  "../assets/photoshoots/*",
  {
    eager: true,
    import: "default",
  }
)

const photoshoots = Object.values(photoshootModules)

function Photoshoots() {
  return (
    <main>
{/*       <h2>Photoshoots</h2> */}

      <div className="gallery">
        {photoshoots.map((photo) => (
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

export default Photoshoots