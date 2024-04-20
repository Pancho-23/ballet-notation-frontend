import { useEffect, useState } from 'react';
import '../styles/Archive.css';

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
      const responseStep = await fetch('/api/steps/?status=approved')
      const jsonStep = await responseStep.json()

      if (responseStep.ok) {
        setSteps(jsonStep)
      }
    }

    fetchClasses()
    fetchSteps()

  }, [])

  const handleLoadClass = async () => {

  }

  const handleDownloadClass = async () => {

  }

  return (
    <div className='archive-container'>
      <h2>Classes</h2>
      <div className="classes">
        {classes && classes.map((oneClass) => (
          <div className='class-containter' key={oneClass._id} >
            <div className='master'>{oneClass.master} </div>  <div className='date'>{oneClass.mounth} {oneClass.day} {oneClass.year}</div> <div className='country'>{oneClass.country}</div> &nbsp;&nbsp;
            <button onClick={handleLoadClass}>Load</button>
            &nbsp;&nbsp;
            <button onClick={handleDownloadClass}>Download</button>
          </div>

        )

        )}
      </div>

      <div className="steps">
        <h2>Steps</h2>
        {steps && steps.map((oneStep) => (
          <div className='step-containter' key={oneStep._id} >
            <div className='master'>{oneStep.master} </div>  <div className='date'>{oneStep.mounth} {oneStep.day} {oneStep.year}</div> <div className='country'>{oneStep.country}</div> <div className='stage'>{oneStep.stage}</div> <div className='kind'>{oneStep.kind}</div> &nbsp;&nbsp;
            <button >Load</button>
            &nbsp;&nbsp;
            <button >Download</button>
          </div>
        )

        )}
      </div>
    </div>
  )

}

export default Archive;