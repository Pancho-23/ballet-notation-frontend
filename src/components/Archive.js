import { useEffect, useState } from 'react'

function Archive() {

  const [classes, setClasses] = useState(null)
  const [steps, setSteps] = useState(null)

  useEffect(() => {
    const fetchClasses = async () => {
      const responseClass = await fetch('/api/classes/')
      const jsonClass = await responseClass.json()

      if (responseClass.ok) {
        setClasses(jsonClass)
      }
    }

    const fetchSteps = async () => {
      const responseStep = await fetch('/api/steps/')
      const jsonStep = await responseStep.json()

      if (responseStep.ok) {
        setSteps(jsonStep)
      }
    }

    fetchClasses()
    fetchSteps()

  }, [])

  return (
    <div className='archive-container'>
      <div className="classes">
        {classes && classes.map((oneClass) => (
          <p key={oneClass._id} className="">Master: {oneClass.master} Date: {oneClass.mounth} {oneClass.day} {oneClass.year} Country: {oneClass.country}</p>
        )

        )}
      </div>
      <div className="steps">
        {steps && steps.map((oneStep) => (
          <p key={oneStep._id} className="">Master: {oneStep.master} Date: {oneStep.mounth} {oneStep.day} {oneStep.year} Country: {oneStep.country} Stage: {oneStep.stage} Kind: {oneStep.kind} </p>
        )

        )}
      </div>
    </div>
  )

}

export default Archive;