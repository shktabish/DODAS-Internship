const Marquee = ({ data }) => {
  const icons = data.map((icon) => (
    <img src={icon.icon} key={icon.id}  />
  ))

  return (
    <div className="relative flex my-32 overflow-hidden">
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {icons}
        {icons}
      </div>
    </div>

  )
}

export default Marquee