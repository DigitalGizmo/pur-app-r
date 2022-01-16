return (
    <figure 
      className="images-menu-item"
      key={id}
      >
        <img 
          className="menu-image" 
          src={`http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/${slug}-tn.jpg`}
          alt={title}
        />
        <figcaption className="menu-title">
          { title}
        </figcaption>
    </figure>
  )
