import { useEffect, useState } from 'react';
import '../styles/BlockInput.css';
import { balletBlockText, balletPhraseText, balletStepText, balletClassText, AddStepToBalletClass, AddPhraseToStep, initBalletClass, balletStringToObject } from '../appFunctions';
import { deL } from '../appFunctions';

function BlockInput() {


  // We define the structure of the class, parts of which will be rendered to the user.
  const [balletClass, setBalletClass] = useState(initBalletClass());

  // Here we are defining the navigation Dynamic Variables (the ones pointing to parts of the Ballet Class Document)
  const [navBlock, setNavBlock] = useState(0);
  const [navPhrase, setNavPhrase] = useState(0);
  const [navStep, setNavStep] = useState(0);

  // Here we define the actual dynamic values showed to the user
  const [currentBlock, setCurrentBlock] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState('');

  const [currentStepText, setCurrentStepText] = useState('');
  const [currentClassText, setCurrentClassText] = useState('');

  //TEXT LOADER
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setBalletClass(balletStringToObject(e.target.result));
    };

    reader.readAsText(file);
  };

  const handleLoadFile = () => {
    document.querySelector('input[type="file"]').click();
  };
  //TEXT LOADER


  const handleInputChange = (event) => {

    if (event.target.id === 'place-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].place = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'hip-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].hip = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'feet-position-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetPosition = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'feet-order-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOrder = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'feet-openClose-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOpenClose = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'step-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].step = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'number-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].number = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leg-form-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legForm = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leg-cardinal-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legCardinal = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leg-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'direction-cardinal-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionCardinal = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'direction-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'spin-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].spin = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'head-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].head = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leftarm-position-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmPosition = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leftarm-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leftarm-form-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmForm = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'rightarm-position-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmPosition = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'rightarm-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'rightarm-form-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmForm = event.target.value;
      setBalletClass(updateBalletClass);
    }

    if (event.target.id === 'demi') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('D')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'D');
        setBalletClass(updateBalletClass);
      }

    }
    if (event.target.id === 'petit') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('T')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'T');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'plier') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('P')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'P');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'plat') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('L')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'L');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'aterre') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('R')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'R');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'quartier') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('Q')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'Q');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'grand') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('G')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'G');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'etire') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('E')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'E');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'releve') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('V')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'V');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'enlair') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('A')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'A');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'changement') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('C')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'C');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'ferme') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('F')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'F');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'entournant') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('N')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'N');
        setBalletClass(updateBalletClass);
      }
    }
    if (event.target.id === 'battus') {
      const updateBalletClass = { ...balletClass };
      if (!updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('B')) {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants += event.target.value;
        setBalletClass(updateBalletClass);
      } else {
        updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = deL(updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants, 'B');
        setBalletClass(updateBalletClass);
      }
    }

    if (event.target.id === 'stage-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stage = event.target.value;
      setBalletClass(updateBalletClass);
    }

    if (event.target.id === 'kind-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].kind = event.target.value;
      setBalletClass(updateBalletClass);
    }

    //Here the Catalog Inputs

    if (event.target.id === 'master-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.master = event.target.value;
      setBalletClass(updateBalletClass);
    }

    if (event.target.id === 'mounth-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.mounth = event.target.value;
      setBalletClass(updateBalletClass);
    }

    if (event.target.id === 'day-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.day = event.target.value;
      setBalletClass(updateBalletClass);
    }

    if (event.target.id === 'year-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.year = event.target.value;
      setBalletClass(updateBalletClass);
    }

    if (event.target.id === 'country-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.country = event.target.value;
      setBalletClass(updateBalletClass);
    }

  }



  useEffect(() => {

    setCurrentBlock(balletBlockText(navBlock, navPhrase, navStep, balletClass));

    setCurrentPhrase(balletPhraseText(navPhrase, navStep, balletClass));

    setCurrentStepText(balletStepText(navStep, balletClass));

    setCurrentClassText(balletClassText(balletClass));


  }, [balletClass, navBlock, navPhrase, navStep]);



  //Navigation Buttons

  //Back Block
  const handleBackBlock = () => {
    setNavBlock(prevBlock => {
      const nextBlockBody = balletClass.classBody[navStep]?.stepBody[navPhrase]?.phraseBody[navBlock - 1];
      if (nextBlockBody !== undefined) {
        return prevBlock - 1;
      }
      return prevBlock;
    });
  };

  //Forward Block
  const handleForwardBlock = () => {
    setNavBlock(prevBlock => {
      const nextBlockBody = balletClass.classBody[navStep]?.stepBody[navPhrase]?.phraseBody[navBlock + 1];
      if (nextBlockBody !== undefined) {
        return prevBlock + 1;
      }
      return prevBlock;
    });
  };

  //Back Phrase
  const handleBackPhrase = () => {
    setNavPhrase(prevPhrase => {
      const nextPhraseBody = balletClass.classBody[navStep]?.stepBody[navPhrase - 1];
      if (nextPhraseBody !== undefined) {
        return prevPhrase - 1;
      }
      return prevPhrase;
    });

    setNavBlock(0);

  };

  //Forward Phrase 
  const handleForwardPhrase = () => {
    setNavPhrase(prevPhrase => {
      const nextPhraseBody = balletClass.classBody[navStep]?.stepBody[navPhrase + 1];
      if (nextPhraseBody !== undefined) {
        return prevPhrase + 1;
      }
      return prevPhrase;
    });

    setNavBlock(0);
  };

  //Back Step
  const handleBackStep = () => {
    setNavStep(prevStep => {
      const nextStepBody = balletClass.classBody[navStep - 1];
      if (nextStepBody !== undefined) {
        return prevStep - 1;
      }
      return prevStep;
    });

    setNavBlock(0);
    setNavPhrase(0);
  };

  //Forward Step 
  const handleForwardStep = () => {
    setNavStep(prevStep => {
      const nextStepBody = balletClass.classBody[navStep + 1];
      if (nextStepBody !== undefined) {
        return prevStep + 1;
      }
      return prevStep;
    });

    setNavBlock(0);
    setNavPhrase(0);
  };


  // Add Phrase to the Class and Add Step to the Class Button Handlers

  const handleAddPhrase = () => {
    const updateBalletClass = { ...balletClass };

    const newBalletClass = AddPhraseToStep(navStep, updateBalletClass);

    setBalletClass(newBalletClass);

    setNavBlock(0);
  };

  const handleAddStep = () => {
    const updateBalletClass = { ...balletClass }

    const newBalletClass = AddStepToBalletClass(updateBalletClass);

    setBalletClass(newBalletClass);

    setNavBlock(0);
    setNavPhrase(0);

  };


  const handleSaveClass = () => {
    const textToSave = currentClassText;
    const file = new Blob([textToSave], { type: 'text/plain' });
    const fileURL = URL.createObjectURL(file);
    const element = document.createElement("a");
    element.href = fileURL;
    element.download = `${balletClass.master} - ${balletClass.mounth} ${balletClass.day} ${balletClass.year}.txt`;
    element.click();
  }


  const handleResetBlock = () => {
    const updateBalletClass = { ...balletClass };
    updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock] = {
      order: navBlock + 1,
      place: '',
      hip: '',
      feetPosition: '',
      feetOrder: '',
      feetOpenClose: '',
      variants: '',
      step: '',
      number: '',
      legForm: '',
      legCardinal: '',
      legSide: '',
      directionCardinal: '',
      directionSide: '',
      spin: '',
      leftArmPosition: '',
      leftArmSide: '',
      leftArmForm: '',
      rightArmPosition: '',
      rightArmSide: '',
      rightArmForm: '',
      head: ''
    };
    setBalletClass(updateBalletClass);
  };



  return (

    <div className='main-container'>

      <form>

        <div className="init L0">
          <div className="h L1">
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Place</div>
                <div className="block-input">

                  <label htmlFor="place-input"></label>
                  <input type="text" id="place-input" list="place-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].place} onChange={handleInputChange} />

                  <datalist id="place-options">
                    <option label="Ommited" value=''></option>
                    <option label="Center" value='0;'></option>
                    <option label="Front-Left" value='1;'></option>
                    <option label="Front" value='2;'></option>
                    <option label="Front-Right" value='3;'></option>
                    <option label="Right" value='4;'></option>
                    <option label="Back-Right" value='5;'></option>
                    <option label="Back" value='6;'></option>
                    <option label="Back-Left" value='7;'></option>
                    <option label="Left" value='8;'></option>
                  </datalist>

                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles  heads'>Hip</div>
                <div className="block-input">
                  <label htmlFor="hip-input"></label>
                  <input type="text" id="hip-input" list="hip-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].hip} onChange={handleInputChange} />

                  <datalist id="hip-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front Left" value='1:'></option>
                    <option label="Front" value='2:'></option>
                    <option label="Front Right" value='3:'></option>
                    <option label="Right" value='4:'></option>
                    <option label="Back Right" value='5:'></option>
                    <option label="Back" value='6:'></option>
                    <option label="Back Left" value='7:'></option>
                    <option label="Left" value='8:'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles heads'>Feet</div>
                <div className="block-input">

                  <label htmlFor="feet-position-input"></label>
                  <input type="text" id="feet-position-input" list="feet-position-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetPosition} onChange={handleInputChange} />

                  <datalist id="feet-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Third Position" value='3'></option>
                    <option label="Fourth Position" value='4'></option>
                    <option label="Fifth Position" value='5'></option>
                  </datalist>

                  <label htmlFor="feet-order-input"></label>
                  <input type="text" id="feet-order-input" list="feet-order-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOrder} onChange={handleInputChange} />

                  <datalist id="feet-order-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right Foot Front" value='+'></option>
                    <option label="Right Foot Back" value='-'></option>
                    <option label="Symmetric" value='='></option>
                  </datalist>

                  <label htmlFor="feet-openClose-input"></label>
                  <input type="text" id="feet-openClose-input" list="feet-openClose-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOpenClose} onChange={handleInputChange} />

                  <datalist id="feet-openClose-options">
                    <option label="Opened Position (Usual)" value=''></option>
                    <option label="Closed Position" value='¬'></option>
                  </datalist>

                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Step</div>
                <div className="block-input">
                  <label htmlFor="step-input"></label>
                  <input className="step" type="text" id="step-input" list="step-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].step} onChange={handleInputChange} />

                  <datalist id="step-options">
                    <option label="Ommited" value=''></option>
                    <option label="Assemblé" value='as'></option>
                    <option label="Ballonné" value='bn'></option>
                    <option label="Balloté" value='bt'></option>
                    <option label="Battement" value='bm'></option>
                    <option label="Basque (Pas de)" value='bs'></option>
                    <option label="Bourré (Pas de)" value='br'></option>
                    <option label="Brisé" value='bi'></option>
                    <option label="Cabriole" value='cb'></option>
                    <option label="Coupé" value='cp'></option>
                    <option label="Changement/Entrechat" value='ch'></option>
                    <option label="Chassé" value='cs'></option>
                    <option label="Chat (Pas de)" value='ct'></option>
                    <option label="Cheval (Pas de)" value='cv'></option>
                    <option label="Ciseaux (Pas de)" value='cx'></option>
                    <option label="Cloche" value='cl'></option>
                    <option label="Contretemps" value='cn'></option>
                    <option label="Deboulé" value='db'></option>
                    <option label="Degagé" value='dg'></option>
                    <option label="Detourné" value='dt'></option>
                    <option label="Developpé" value='dv'></option>
                    <option label="Decalé" value='dl'></option>
                    <option label="Echappé" value='ep'></option>
                    <option label="Elevé" value='ev'></option>
                    <option label="Emboité" value='eb'></option>
                    <option label="Enveloppé" value='en'></option>
                    <option label="Fait" value='fi'></option>
                    <option label="Flic" value='fc'></option>
                    <option label="Flic-Flac" value='ff'></option>
                    <option label="Fondú (Battement)" value='fn'></option>
                    <option label="Fouetté" value='ft'></option>
                    <option label="Frappé (Battement)" value='fp'></option>
                    <option label="Gargoulliade" value='gg'></option>
                    <option label="Glissade" value='gl'></option>
                    <option label="Jeté" value='jt'></option>
                    <option label="Jeté Entrelacé" value='je'></option>
                    <option label="Pas" value='pa'></option>
                    <option label="Poisson (Pas de)" value='pp'></option>
                    <option label="Polonaise (Pas de)" value='po'></option>
                    <option label="Possé" value='ps'></option>
                    <option label="Marché (Pas de)" value='pm'></option>
                    <option label="Penché" value='pn'></option>
                    <option label="Piqué" value='pq'></option>
                    <option label="Pirouette" value='py'></option>
                    <option label="Plié" value='pl'></option>
                    <option label="Pointé" value='pe'></option>
                    <option label="Promenade" value='pr'></option>
                    <option label="Pied Flex" value='px'></option>
                    <option label="Relevé" value='rv'></option>
                    <option label="Relevé Lent" value='rl'></option>
                    <option label="Renversé" value='rn'></option>
                    <option label="Reverence" value='re'></option>
                    <option label="Ronde de Corpe" value='rc'></option>
                    <option label="Ronde de Jambe" value='rj'></option>
                    <option label="Ronde Jeté" value='rt'></option>
                    <option label="Ronde de Pied" value='rp'></option>
                    <option label="Royale" value='ry'></option>
                    <option label="Sauter (Soubresaut)" value='sr'></option>
                    <option label="Sissone" value='sn'></option>
                    <option label="Soutenue" value='st'></option>
                    <option label="Soplesse" value='sp'></option>
                    <option label="Temps de Cuisse" value='tc'></option>
                    <option label="Temps de Fleche" value='tf'></option>
                    <option label="Temps Levé" value='tv'></option>
                    <option label="Temps Lié" value='tl'></option>
                    <option label="Tendú (Battement)" value='tn'></option>
                    <option label="Tombé" value='tb'></option>
                    <option label="Tour de Jambe" value='tj'></option>
                    <option label="Vals (Pas de)" value='vs'></option>
                    <option label="Tour" value='tr'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Number</div>
                <div className="block-input titles">
                  <label htmlFor="number-input"></label>

                  <input type="text" id="number-input" list="number-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].number} onChange={handleInputChange} />

                  <datalist id="number-options">
                    <option label="Single/Ommited" value=''></option>
                    <option label="Double" value='2.'></option>
                    <option label="Triple" value='3.'></option>
                    <option label="Quadruple" value='4.'></option>
                    <option label="Quintuple" value='5.'></option>
                    <option label="Sixtuple" value='6.'></option>
                    <option label="Seventuple" value='7.'></option>
                    <option label="Eightuple" value='8.'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Leg</div>
                <div className="block-input">
                  <label htmlFor="leg-form-input"></label>
                  <input type="text" id="leg-form-input" list="leg-form-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legForm} onChange={handleInputChange} />

                  <datalist id="leg-form-options">
                    <option label="Ommited" value=''></option>
                    <option label="Cou de Pied" value='#'></option>
                    <option label="Passé" value='$'></option>
                    <option label="Attitude" value='%'></option>
                    <option label="Etiré" value='/'></option>
                  </datalist>

                  <label htmlFor="leg-cardinal-input"></label>
                  <input type="text" id="leg-cardinal-input" list="leg-cardinal-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legCardinal} onChange={handleInputChange} />

                  <datalist id="leg-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="leg-side-input"></label>
                  <input type="text" id="leg-side-input" list="leg-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legSide} onChange={handleInputChange} />

                  <datalist id="leg-side-options">
                    <option label="Right Leg" value=''></option>
                    <option label="Left Leg" value='!'></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Direction</div>
                <div className="block-input">
                  <label htmlFor="direction-cardinal-input"></label>
                  <input type="text" id="direction-cardinal-input" list="direction-cardinal-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionCardinal} onChange={handleInputChange} />

                  <datalist id="direction-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="direction-side-input"></label>
                  <input type="text" id="direction-side-input" list="direction-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionSide} onChange={handleInputChange} />

                  <datalist id="direction-side-options">
                    <option label="Right Leg / Ommited" value=''></option>
                    <option label="Left Leg" value='!'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 third-line">
                <div className='titles heads'>Spin</div>
                <div className="block-input">
                  <label htmlFor="spin-input"></label>
                  <input type="text" id="spin-input" list="spin-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].spin} onChange={handleInputChange} />

                  <datalist id="spin-options">
                    <option label="Ommited" value=''></option>
                    <option label="Clockwise" value='>'></option>
                    <option label="Counter-Clockwise" value='<'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 third-line">
                <div className='titles heads'>Head</div>
                <div className="block-input">
                  <label htmlFor="head-input"></label>
                  <input type="text" id="head-input" list="head-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].head} onChange={handleInputChange} />

                  <datalist id="head-options">
                    <option label="Ommited" value=''></option>
                    <option label="En Dehors Left" value='1*'></option>
                    <option label="Front" value='2*'></option>
                    <option label="En Dehors Right" value='3*'></option>
                    <option label="Profile Right" value='4*'></option>
                    <option label="En Dedans Right" value='5*'></option>
                    <option label="Down" value='6*'></option>
                    <option label="En Dedans Left" value='7*'></option>
                    <option label="Profile Left" value='8*'></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Left Arm</div>
                <div className="block-input">
                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-position-input" list="leftarm-position-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmPosition} onChange={handleInputChange} />

                  <datalist id="leftarm-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="Bras Bas" value='0'></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Fifth Position" value='3'></option>
                    <option label="Bar" value='4'></option>
                    <option label="Derriére" value='5'></option>
                    <option label="Waist" value='6'></option>
                    <option label="Chest" value='7'></option>
                    <option label="Shoulder" value='8'></option>
                    <option label="Face" value='9'></option>
                  </datalist>

                  <label htmlFor="leftarm-side-input"></label>
                  <input type="text" id="leftarm-side-input" list="leftarm-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmSide} onChange={handleInputChange} />

                  <datalist id="leftarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Left" value='!'></option>
                  </datalist>

                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-form-input" list="leftarm-form-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmForm} onChange={handleInputChange} />

                  <datalist id="leftarm-form-options">
                    <option label="Normal" value=''></option>
                    <option label="Allongé" value='°'></option>
                    <option label="w/Partenaire" value="'"></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Right Arm</div>
                <div className="block-input">
                  <label htmlFor="rightarm-form-input"></label>
                  <input type="text" id="rightarm-position-input" list="rightarm-position-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmPosition} onChange={handleInputChange} />

                  <datalist id="rightarm-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="Bras Bas" value='0'></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Fifth Position" value='3'></option>
                    <option label="Bar" value='4'></option>
                    <option label="Derriére" value='5'></option>
                    <option label="Waist" value='6'></option>
                    <option label="Chest" value='7'></option>
                    <option label="Shoulder" value='8'></option>
                    <option label="Face" value='9'></option>
                  </datalist>

                  <label htmlFor="rightarm-side-input"></label>
                  <input type="text" id="rightarm-side-input" list="rightarm-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmSide} onChange={handleInputChange} />

                  <datalist id="rightarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right" value='?'></option>
                  </datalist>

                  <label htmlFor="rightarm-form-input"></label>
                  <input type="text" id="rightarm-form-input" list="rightarm-form-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmForm} onChange={handleInputChange} />

                  <datalist id="rightarm-form-options">
                    <option label="Normal" value=''></option>
                    <option label="Allongé" value='°'></option>
                    <option label="w/Partenaire" value="'"></option>
                  </datalist>
                </div>
              </div>
            </div>
          </div>
          <div className="h L1 variant-side">
            <div className="L2 variant-title heads">Variants</div>
            <div className="L2 varia">
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Demi" id="demi" value='D' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('D')} onChange={handleInputChange} /></div>
                  <div className="h">Demi</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Petit" id='petit' value='T' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('T')} onChange={handleInputChange} /></div>
                  <div className="h">Petit</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Plier" id='plier' value='P' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('P')} onChange={handleInputChange} /></div>
                  <div className="h">Plier</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Plat" id='plat' value='L' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('L')} onChange={handleInputChange} /></div>
                  <div className="h">Plat</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="A Térre" id='aterre' value='R' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('R')} onChange={handleInputChange} /></div>
                  <div className="h">A Térre</div>
                </div>
              </div >
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Quartier" id='quartier' value='Q' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('Q')} onChange={handleInputChange} /></div>
                  <div className="h">Quartier</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Grand" id='grand' value='G' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('G')} onChange={handleInputChange} /></div>
                  <div className="h">Grand</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Etiré" id='etire' value='E' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('E')} onChange={handleInputChange} /></div>
                  <div className="h">Etiré</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Relevé" id='releve' value='V' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('V')} onChange={handleInputChange} /></div>
                  <div className="h">Relevé</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="En L'Air" id='enlair' value='A' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('A')} onChange={handleInputChange} /></div>
                  <div className="h">En L'Air</div>
                </div>
              </div>
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Changement" id='changement' value='C' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('C')} onChange={handleInputChange} /></div>
                  <div className="h">Changement</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Fermé" id='ferme' value='F' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('F')} onChange={handleInputChange} /></div>
                  <div className="h">Fermé</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="En Tournant" id='entournant' value='N' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('N')} onChange={handleInputChange} /></div>
                  <div className="h">En Tournant</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Battus" id='battus' value='B' checked={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants.includes('B')} onChange={handleInputChange} /></div>
                  <div className="h">Battus</div>
                </div>
                <div className='button-box'>
                  <div className="h"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </form>

      <div>

        <div className='phrase-container'>
          <div className='phrase-tag'><button className='back-phrase' onClick={handleBackPhrase}>&#10094;</button> Phrase <input className='nav-input' type='number' value={navPhrase + 1} /> <button className='forward-phrase' onClick={handleForwardPhrase}>&#10095;</button></div>
          <div className="current-phrase">
            <pre>{currentPhrase}</pre>
          </div>
        </div>

        <div className='block-container'>
          <div className='block-tag'><button className='back-block' onClick={handleBackBlock}>&#10094;</button> Block <input className='nav-input' type='number' value={navBlock + 1} /> <button className='forward-block' onClick={handleForwardBlock}>&#10095;</button></div>
          <div className="current-block">
            <pre>{currentBlock}</pre>
          </div>
        </div>

        <div>
          <div className='step-tag'><button className='back-step' onClick={handleBackStep}>&#10094;</button> Step <input className='nav-input' type='number' value={navStep + 1} />&nbsp;

            <input className='stage-input' type="text" id="stage-input" list="stage-options" placeholder='Stage' value={balletClass.classBody[navStep].stage} onChange={handleInputChange} />
            <datalist id="stage-options">
              <option label="Ommited" value=''></option>
              <option label="Warming" value='Warming'></option>
              <option label="Plié" value='Plié'></option>
              <option label="Battement Tendú" value='Battement Tendú'></option>
              <option label="Battement Jeté" value='Battement Jeté'></option>
              <option label="Ronde de Jambe" value='Ronde de Jambe'></option>
              <option label="Battement Fondú" value='Battement Fondú'></option>
              <option label="Battement Frappé" value='Battement Frappé'></option>
              <option label="Adagio" value='Adagio'></option>
              <option label="Grand Battement" value='Grand Battement'></option>
              <option label="Waltz" value='Waltz'></option>
              <option label="Petit Allegro" value='Petit Allegro'></option>
              <option label="Allegro" value='Allegro'></option>
              <option label="Batterie" value='Batterie'></option>
              <option label="Sissone" value='Sissone'></option>
              <option label="Grand Waltz" value='Grand Waltz'></option>
              <option label="Grand Allegro" value='Grand Allegro'></option>
              <option label="Coda" value='Coda'></option>
            </datalist>
            &nbsp;
            <input className='kind-input' type="text" id="kind-input" list="kind-options" placeholder='Kind' value={balletClass.classBody[navStep].kind} onChange={handleInputChange} />
            <datalist id="kind-options">
              <option label="Ommited" value=''></option>
              <option label="Bar" value='Bar'></option>
              <option label="Center" value='Center'></option>
            </datalist>
            &nbsp;
            <button className='forward-step' onClick={handleForwardStep}>&#10095;</button></div>
          <div className='current-step'>
            <pre>{currentStepText}</pre>
          </div>
        </div>



        <button className='open-class-button' onClick={handleLoadFile}>Open Class</button>
        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />

        <button className='save-class-button' onClick={handleSaveClass}>Save Class</button>
        <button className='add-phrase-button' onClick={handleAddPhrase}>Add Phrase</button>
        <button className='add-step-button' onClick={handleAddStep}>Add Step</button>


        <button className='reset-block-button' onClick={handleResetBlock}>Reset Block</button>





        <div>
          <div className='class-tag'> Master <input className='log log-master' id='master-input' type='text' value={balletClass.master} onChange={handleInputChange} />&nbsp;&nbsp;&nbsp; Mounth <input className='log log-mounth' id='mounth-input' type='text' list="mounth-options" value={balletClass.mounth} onChange={handleInputChange} />&nbsp;&nbsp;&nbsp; Day <input className='log log-day' id='day-input' type="number" value={balletClass.day} onChange={handleInputChange} />&nbsp;&nbsp;&nbsp; Year <input className='log log-year' id='year-input' type='number' value={balletClass.year} onChange={handleInputChange} />&nbsp;&nbsp;&nbsp; Country <input className='log log-country' id='country-input' type='text' value={balletClass.country} onChange={handleInputChange} /></div>

          <datalist id="mounth-options">
            <option label="Ommited" value=''></option>
            <option label="January" value='January'></option>
            <option label="February" value='February'></option>
            <option label="March" value='March'></option>
            <option label="April" value='April'></option>
            <option label="May" value='May'></option>
            <option label="June" value='June'></option>
            <option label="July" value='July'></option>
            <option label="August" value='August'></option>
            <option label="September" value='September'></option>
            <option label="October" value='October'></option>
            <option label="November" value='November'></option>
            <option label="December" value='December'></option>
          </datalist>

          <div className='current-class'><pre>{currentClassText}</pre></div>
        </div>


      </div>



    </div>



  )


}

export default BlockInput;