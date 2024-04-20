import { useEffect, useState } from "react";


function Moderate() {

  const [steps, setSteps] = useState(null)

  useEffect(() => {

    const fetchSteps = async () => {
      const responseStep = await fetch('/api/steps/?status=moderation')
      const jsonStep = await responseStep.json()

      if (responseStep.ok) {
        setSteps(jsonStep)
      }
    }

    fetchSteps()

  }, [])


  //We have to print a welcome page for the user to see before the moderation begins, 
  // to explain the process and prepare the user. and press some button to start the first moderation process
  // the first batch to moderate.

  return (
    <div>

    </div>
  )

}

export default Moderate;