import { useEffect, useState } from 'react'

function Archive() {

  const [classes, setClasses] = useState(null)

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch('/api/classes/')
      const json = await response.json()

      if (response.ok) {
        setClasses(json)
      }
    }

    fetchClasses()

  }, [])

  return (
    <div className='archive-container'>
      <div className="classes">
        {classes && classes.map((oneClass) => (
          <p key={oneClass._id} className="">Master: {oneClass.master} Date: {oneClass.mounth} {oneClass.day} {oneClass.year} Country: {oneClass.country}</p>
        )

        )}
      </div>
    </div>
  )

}

export default Archive;