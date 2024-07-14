const Marquee = ({ data }) => {
  const icons = data.map((icon) => (
    <img src={icon.icon} key={icon.id} className="max-md:w-28"  />
  ))

  return (
    <div className="relative flex max-md:my-16 my-32 overflow-hidden">
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {icons}
        {icons}
      </div>
    </div>

  )
}

export default Marquee